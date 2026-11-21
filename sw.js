// IronHabits · service worker
// - La app (index.html) y el plan: red primero, pero si en 3 s no responde se abre lo guardado (mala cobertura = app al instante).
// - Iconos y manifest: lo guardado al momento y se actualiza por detrás.
// - Solo se guardan respuestas correctas de esta web; las llamadas a GitHub (nube) no pasan por aquí.
// - Avisos: recibe los del servidor de avisos y, al tocarlos, abre la app.
const CACHE = 'ironhabits-v17';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-180.png', './icon-192.png', './icon-512.png', './favicon.png', './plan.json'];
const TIMEOUT = 3000;

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

const okToCache = r => r && r.ok && r.type === 'basic';

function networkFirst(req) {
  return caches.open(CACHE).then(c => new Promise(resolve => {
    let done = false;
    const finish = r => { if (!done && r) { done = true; resolve(r); } };
    const fromCache = () => c.match(req, { ignoreSearch: true })
      .then(r => r || (req.mode === 'navigate' ? c.match('./index.html') : null));
    const timer = setTimeout(() => fromCache().then(finish), TIMEOUT);
    fetch(req)
      .then(r => { clearTimeout(timer); if (okToCache(r)) c.put(req, r.clone()); finish(r); })
      .catch(() => { clearTimeout(timer); fromCache().then(r => { if (!done) { done = true; resolve(r || Response.error()); } }); });
  }));
}

function staleWhileRevalidate(req) {
  return caches.open(CACHE).then(c => c.match(req, { ignoreSearch: true }).then(hit => {
    const net = fetch(req).then(r => { if (okToCache(r)) c.put(req, r.clone()); return r; }).catch(() => hit || Response.error());
    return hit || net;
  }));
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // GitHub y demás: directo a la red, sin guardar nada
  if (url.pathname.endsWith('/push.json')) return; // dirección del servidor de avisos: siempre la última
  const isPage = req.mode === 'navigate' || /\/(index\.html)?$/.test(url.pathname);
  if (isPage || url.pathname.endsWith('/plan.json')) e.respondWith(networkFirst(req));
  else e.respondWith(staleWhileRevalidate(req));
});

// Avisos push (los manda el servidor de avisos de IronHabits a su hora, aunque la app esté cerrada)
self.addEventListener('push', e => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (_) { d = { body: e.data && e.data.text() }; }
  e.waitUntil(self.registration.showNotification(d.title || 'IronHabits', {
    body: d.body || '', tag: d.tag || undefined, icon: 'icon-192.png', badge: 'icon-192.png', data: { url: d.url || './' },
  }));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  const url = new URL((e.notification.data && e.notification.data.url) || './', self.registration.scope).href;
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(cs => {
    for (const c of cs) if (c.url.startsWith(self.registration.scope) && 'focus' in c) return c.focus();
    return self.clients.openWindow(url);
  }));
});
