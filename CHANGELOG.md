# IronHabits · Changelog

Hasta la v1.14 la app se llamaba «Rutina».

## v1.28 · 21 nov 2026
- 🎨 Tarjetas de «Hoy» con el color de cada hábito: fondo en degradado suave, borde y caja del plan a juego; los hechos quedan más apagados. Ajustes › Apariencia › «Tarjetas de color».
- Pruebas: `tests/test_v128.py`.

## v1.27 · 20 nov 2026
- 📳 Vibración mínima en todos los botones (escucha global de toques; no vibra dos veces por el mismo toque). Ajustes › Apariencia › «Vibración al tocar».
- 🎵 Sonido al abrir: un único barrido de grave a agudo, a elegir entre «Swell cálido» (por defecto), «Aire» y «Cristal» (Web Audio, con pasa-bajos, rampas exponenciales y limitador). Suena en el primer toque tras abrir (iOS no permite sonido sin un toque antes). Ajustes › Apariencia › «Sonido al abrir»; respeta «Sonido al completar» apagado y el modo silencio.
- Pruebas: `tests/test_v127.py`.

## v1.26 · 20 nov 2026
- 🇬🇧 Plan de inglés nuevo hacia «casi C1» (plan v13): 75 min L–V, 60 sábado, 40 domingo (~233 h hasta el 19 de junio). 4 fases, 3 controles (metas 155 · 168 · 175), 3 simulacros con el libro y semana final suave.
- Cada día en bloques (`blocks`) con minutos, cómo hacerlo y un solo botón: enlace exacto (7ESL, British Council, Cambridge, BBC) o copiar la orden para el proyecto de Claude «Inglés B2» y abrirlo.
- 📅 Plan completo: semanas por fases, días con icono, controles 📍, simulacros 🧪, examen 🎯, hechos ✓; tocar un día abre su clase.
- 🧰 Material: 12 cosas (comprar, descargar, crear cuenta, configurar) con «Lo tengo», la fecha del primer uso (calculada del plan) y aviso en Hoy 3 días antes. Incluye las instrucciones del proyecto de Claude para copiar.
- 📊 Notas: formulario único por partes (la app hace las cuentas con las tablas oficiales de Cambridge) que guarda en los mismos «Simulacros B2 First» de Progreso; gráfica con 160 · 175 · 180.
- Sin duplicar funciones: vocabulario y errores van a HyperLingua; tests a su web o libro; corrección y speaking al proyecto de Claude. La guía de texto de Inglés se sustituye por 🧰 Material.
- Calidad: auditoría del plan al generarlo (horas, 36 lecciones de gramática, writings por tipo, speaking por parte, controles, simulacros) y comprobación de enlaces en cada publicación (`tests/check_links.py`).
- Pruebas: `tests/test_v126.py`.

## v1.25 · 20 nov 2026
- ▶ Empezar · causa del fallo: el anillo era el tiempo y solo se pintaba al abrir; el reloj se actualizaba pero el anillo no. Ahora el anillo es el progreso del hábito (pasos tachados, cantidad o hecho) y se mueve al tachar o destachar, en todos los hábitos. En los de tipo tiempo, el anillo sigue siendo el tiempo.
- Barra de tiempo debajo del anillo, hasta la duración prevista; al llegar se pone verde y avisa.
- Si lo completas todo antes de tiempo, pregunta «¿Ya has terminado?» («Sigo un rato» / «Sí, he terminado»).
- Los minutos de cada sesión se suman al día al salir o terminar (sin contar dos veces al volver a entrar).
- ⏱ Horas de Inglés y Francés: total, media semanal y semanas en Progreso y en el detalle del hábito; días hechos sin cronómetro cuentan su duración prevista como «estimadas».
- Botón ✕ del modo centrado.
- Pruebas: `tests/test_v125.py`.

## v1.24.2 · 19 nov 2026
- 🗑️ «Eliminar hábito» fácil de encontrar: al final del menú ⋯ de cada hábito, al final del editor y en la hoja de su bloque en la Agenda. Con confirmación, copia automática y Deshacer.

## v1.24.1 · 19 nov 2026
- Al crear un hábito, «¿Cuándo?» es obligatorio: «Solo el [día]» o «Se repite» (y entonces cada cuánto). Antes venía marcado «Cada día» y un hábito pensado para un día salía todos los días.

## v1.24 · 19 nov 2026
Arreglos de hábitos y agenda (causas, no parches):
- Bug 1 · Hábitos nuevos sin hora no salían en la agenda: `dayEvents()` descarta lo que no tiene hora. Ahora la vista Día tiene la franja «Sin hora» y la Semana una fila «sin hora» por día. Nueva frecuencia «Un solo día»; si creas el hábito mirando otro día, empieza ese día.
- Bug 2 · Hora: el campo existía pero estaba enterrado y sin fin. Ahora «¿A qué hora?» va tras el nombre: «Sin hora / Con hora», inicio, fin y duraciones rápidas. Un hábito sin hora tiene «Ponerle hora» desde la agenda.
- Bug 3 · Plantillas (nuevo): al pulsar + eliges «En blanco», tus plantillas, uno de tus hábitos o un ejemplo. Se crea una copia con ids de pasos propios (el programa día a día no se copia). «Guardar también como plantilla» y Ajustes › Plantillas para editarlas o borrarlas.
- Bug 4 · Tiempo libre: `layout()` lo trataba como un evento y partía la columna. Ahora es hueco de fondo que se recorta alrededor de lo demás (`freeParts()`); los solapes reales se ven lado a lado y, en la semana, con icono y hora sin texto cortado.
- Datos: esquema v4 (migración: `S.templates` desde tus hábitos actuales; no toca hábitos ni registros).
- Pruebas: `tests/test_v124.py`.

## v1.23.1 · 19 nov 2026
- Tutorial: con el teclado abierto el bocadillo se coloca en la parte visible de la pantalla (el iPhone desplaza la vista); al pasar a cualquier paso que no sea escribir se cierra el teclado, así «Guardar» queda a la vista.

## v1.23 · 19 nov 2026
- 🧭 Tutorial interactivo guiado (sustituye a la guía de 16 pantallas de texto): cada paso señala un elemento real con un foco (overlay con hueco, borde que late) y un bocadillo que se coloca solo; avanza cuando haces la acción (tocar, escribir, deslizar, hacer scroll). Solo 3 pasos informativos de 27.
- Recorre Hoy, Agenda, Progreso y Ajustes; para cambiar de sección pulsas tú la pestaña. Lo demás está bloqueado y, si tocas fuera, el objetivo tiembla.
- Datos de prueba: «🧪 Hábito de prueba» con historial de ejemplo. Antes se copia el estado; nube, avisos y copias automáticas en pausa; al acabar o saltar se restaura exactamente.
- «Paso N/27» y «Saltar» (con confirmación) siempre visibles. Si cierras la app a medias, al volver: continuar (desde el principio de esa sección) o saltar.
- Ajustes › Tutorial: entero o por sección. Mini-tour de 2–4 pasos la primera vez que entras en una sección no vista.
- Motor genérico + guion de datos (`TOUR_STEPS`, `TOUR_MINI`); estado aparte en `ironhabits_tour`. Espera a elementos que tardan (y salta el paso si no aparecen en 4 s), recoloca en cada fotograma (scroll, giro, teclado).
- Pruebas: `tests/test_v123.py` recorre el tutorial entero tocando los elementos de verdad.

## v1.22 · 19 nov 2026
- 🔊 Sonido y vibración al avanzar: cada paso de un hábito (o cada + en los de cantidad) suena una nota de marimba que sube un poco al sonar, en escala pentatónica y más aguda cuanto más cerca de la meta, con un toque de vibración (dos al final). Al completar el hábito, dos notas de campana con acorde de fondo y vibración larga; al completar el día, un arpegio más grande.
- Sonidos sintetizados con Web Audio (sin archivos), con compresor y reverberación corta para que suenen naturales; respetan el modo silencio del iPhone. Interruptor en Ajustes › Apariencia.
- Arreglado: el iPhone no vibraba (el estilo general de los campos le quitaba el aspecto nativo al interruptor que provoca la vibración).
- Pruebas: `tests/test_v122.py`.

## v1.21 · 19 nov 2026
- 🔔 Avisos push: llegan al iPhone a su hora aunque la app esté cerrada (Ajustes › Avisos de tus hábitos). Minutos antes, qué hábitos y si incluir lo fijo; no avisa de lo hecho, movido o saltado.
- Servidor de avisos propio en Cloudflare Workers (`worker/`): Web Push con VAPID y cifrado aes128gcm sin librerías, envío cada minuto, se despliega solo desde GitHub Actions si existen los secretos `CLOUDFLARE_API_TOKEN` y `CLOUDFLARE_ACCOUNT_ID`.
- ☁️ Nube que junta: cada día y cada hábito llevan la hora de su último cambio; con cambios en dos dispositivos se queda lo más reciente de cada uno, sin preguntar. Los avisos son de cada dispositivo y no se sincronizan.
- Casillas e interruptores con estilo propio (antes se veían vacíos).
- Pruebas: `tests/test_v121.py` y `worker/test.mjs`.

## v1.20 · 19 nov 2026 · Reevaluación, trozo 4: funciones nuevas
- Recolocar (`overdue`, `proposeSlot`, `freeSlotStrict`, `replanSheet`): aviso en Hoy y botón en la franja atrasada; propone el primer hueco libre (primero esta semana); para lo diario, saltar y compensar.
- Modo «Empezar» (`focusMode`): pantalla completa con anillo-cronómetro, plan y pasos; Wake Lock; «Terminar» marca y guarda minutos.
- Disposición del día (`readiness`): 40 % sueño, 40 % energía, 20 % carga (ACWR); chip en la cabecera del día y «¿Día flojo?» si < 45.
- Comodín de racha en `streaks`: +1 por semana con el total cumplido (máx. 2), se gasta en un fallo; días salvados en azul hielo (`--ice`).
- Resumen del mes (`monthSheet`, `monthImage` en canvas 1080×1350, `shareMonth`); aviso los 3 primeros días del mes.
- Tema claro / sistema (`setTheme`, `data-theme`, `--acc-raw`, variables del mapa de calor); ordenar arrastrando (`sortSheet`); exportar CSV (`exportCSV`).
- Guía actualizada. Tests: `tests/test_v120.py`.

## v1.19 · 19 nov 2026 · Reevaluación, trozo 3: marca IronHabits
- Iconos «IH» (`icon-180/192/512.png`, `icon-maskable-512.png`, `favicon.png`) y 12 pantallas de arranque de iOS (`splash/`), generados con anillo vacío para enlazar con la animación.
- Pantalla de arranque animada (`#boot`): el anillo se llena por etapas (código, plan cargado, listo) y se desvanece; máx. 3 s, no bloquea toques, respeta reduced motion.
- Manifest con `id` e icono maskable aparte; service worker `ironhabits-v15`.
- Marca: `--brand:#F97316` en el botón +, rachas (llama SVG), celebración y «Todo hecho»; números en `ui-rounded`; iconos SVG en franjas (`MOMENT_IC`) y avisos.
- R7: el plan pesado pasa de localStorage a IndexedDB (`ironhabits-plan`, `PLANCACHE`, `initPlan`), con migración y respaldo en localStorage si no hay IndexedDB.
- Repositorio y web renombrados a IronHabits.
- Tests: `tests/test_v119.py`.

## v1.18 · 19 nov 2026 · Reevaluación, trozo 2: Hoy inteligente
- `habitSections`: hoy, la franja actual primero, luego las siguientes y «En cualquier momento», después lo pendiente de franjas pasadas («aún pendiente») y «Hechos hoy (n)» plegable (`OPEN['done:'+k]`). Los demás días, franjas en orden y lo hecho al final.
- `nowCard`: «Después» = siguiente hábito u obligación; «Ahora» ignora el tiempo libre.
- `countdownRow`: una meta completa + número de las demás.
- Etiqueta de semana como botón «↩ Volver a hoy» cuando `sel` no es hoy (Hoy y Agenda).
- Tests: `tests/test_v118.py`.

## v1.17 · 19 nov 2026 · Reevaluación, trozo 1: arreglos
- R1: `deleteH` guarda copia antes y ofrece Deshacer (hábito con su plan, registros, cambios de agenda y posición); `archiveH` y `edSave` también con Deshacer (y copia al editar).
- R2: áreas táctiles de 44 px en `.cx` (Restaurar/Quitar), filas del plan completo y check-in dentro de la campana. `tests/test_v117.py` recorre las 4 pantallas y 25 hojas.
- R6: plan v12 sin la instrucción antigua «toca Inglés → Guía» (`gen/ingles_plan.py`).
- R8: además de la última copia del día (`auto-`), se guarda la primera (`dia-`).
- R10–R12: la guía guarda una sola vez; el repintado de cada minuto no cierra una tarjeta deslizada; sin aviso «Plan cargado» la primera vez.

## v1.16 · 19 nov 2026 · Guía completa
- `GUIDE` (16 temas: Hoy, marcar, plan del día, menú, mover/saltar/extra, total semanal y rachas, día flojo y pausas, Agenda, check-in y carga, Progreso, crear hábitos, calendario, datos y nube, notas, rutina ideal) con barra de progreso e índice (`guideIndex`). Se enseña una vez al actualizar (`GUIDE_V`).

## v1.15 · 19 nov 2026 · Nuevo nombre: IronHabits
- Nombre en título, pantalla de inicio del iPhone, manifest, textos, guía, resumen semanal, avisos, archivos exportados (`ironhabits-backup-*.json`, `ironhabits-*.ics`), calendario (`X-WR-CALNAME`, `PRODID`, UID `@ironhabits`), `ironhabits.ics` de la web, service worker (`ironhabits-v14`), generador y README.
- Almacenamiento: `ironhabits_v1`, `ironhabits_plan_v1`, `ironhabits_cloud` e IndexedDB `ironhabits-copias`; las claves y copias de «Rutina» se pasan solas y se borran (si queda una clave antigua, la escribió una versión anterior y se considera la más reciente).
- Plan: `kind: "ironhabits-plan"` (se sigue aceptando `rutina-plan`). Nube: `ironhabits-datos.json` / `ironhabits-agenda.ics`; `cloudRename` renombra los archivos de las nubes existentes y pide volver a suscribir el calendario.
- Tests: `tests/test_v115.py`.

## v1.14 · 19 nov 2026 · Auditoría, trozo 5: funciones básicas
- Hora en el editor (`h.time={start,dur}`) para hábitos sin bloques en la agenda del plan (`hasBase`): `dayEvents` crea su bloque (respeta anular, mover y cambiar hora), `habitTime`, `typicalDur` y `agendaHash` lo tienen en cuenta.
- Cuenta atrás (`countdowns`): exámenes de la agenda (`EXAM_RE`) y metas de los hábitos; línea en Hoy y `countdownSheet`.
- Celebración al completar el día (`celebrate`, una vez al día, `S.settings.celebrated`), respeta `prefers-reduced-motion`.
- Historial de notas (`notesSheet`): notas del día y de cada hábito, con buscador.
- Guía de bienvenida de 4 pantallas (`welcomeSheet`), la primera vez y desde Ajustes.
- Tests: `tests/test_v114.py`.

## v1.13.1 · 19 nov 2026
- Ejemplos: no se añade un ejemplo si ya tienes un hábito con ese nombre; quedan marcados (`example`) y se quitan con «Quitar los hábitos de ejemplo». Con un plan cargado ya no se ofrece añadirlos.
- Borrar datos: hoja con «Borrar solo mis registros» (`wipeLogs`: registros, notas, check-ins, simulacros, pausas y cambios de agenda; conserva hábitos, plan y agenda) y «Borrar todo» (`wipeAll`: después vuelve a cargar `plan.json`). Ambas guardan antes una copia automática.

## v1.13 · 19 nov 2026 · Auditoría, trozo 4: navegación y Hoy
- 4 pestañas: Hábitos y Estadísticas se fusionan en Progreso (`renderProg`; `go('hab'|'stats')` redirige). Sin ranking (repetía los %), simulacros solo en el detalle de Inglés, mapas de calor de la lista con mínimo 24 semanas.
- Hoy: `noticeList` con prioridades y `spotlight` (una tarjeta destacada; el resto en la campana `#hoyBell` / `noticesSheet`), cabecera compacta del día con Día flojo, franjas «Por la mañana/tarde/noche», total semanal plegado y al final, flechas de semana de 44 px, check-in en dos filas compactas.
- Tarjeta de hábito: tocar el nombre despliega/pliega el plan; botón ⋯ con 5 opciones; `logSheet`/`saveLog` (tiempo, cantidad, métricas y nota); deslizar a la izquierda para «Mañana» o «Saltar» (`swipeAct`, con deshacer).
- Ajustes reorganizado (Tus datos, Calendario y avisos, Pausas, Apariencia, Novedades); `calMoreSheet`, `historySheet`; copia en una hoja con exportar/importar/copiar. Agenda sin leyenda. «Anular» un hábito pasa a «Saltar».
- B15: con `userEdited`, actualizar el plan respeta también frecuencia, tipo, inicio y paso. B16: apuntar tiempo solo completa los hábitos de sí/no.
- Tests: `tests/test_v113.py`; ajustados `test_app`, `test_sheet_movil`, `test_v110` y `test_v111`.

## v1.12 · 19 nov 2026 · Auditoría, trozo 3: sistema visual
- Tokens en `:root`: color (fondo `#0B0B0F`, superficies `#141419`/`#1C1C23`/`#26262F`, bordes `#2A2A33`, texto `#F4F4F6`/`#A3A3AE`/`#82828E`, estados), tipografía (32/22/17/15/13/12 px; el rem sigue a 16), espaciado 4–32, radios 8/12/16/24, sombras `--e1`/`--e2` y movimiento (`--ease`, 150/250 ms). Los nombres antiguos de variables se mantienen.
- Componentes revisados: tarjetas, hábitos, botones, filas, campos con foco, semana, KPIs, Ahora/Después, hojas, toasts, barra inferior y píldora.
- Iconos SVG (`ICONS`, `ic()`, `ri()`) en Ajustes, copias y nube; ✓ de completar y pasos en SVG.
- `COLORS` afinados para fondo oscuro (12); los hábitos existentes conservan su color.

## v1.11 · 18 nov 2026 · Auditoría, trozo 2: arreglos de iPhone
- Objetivos táctiles de 44 px o más en todas las pantallas y hojas (medido en `tests/test_v111.py`); iconos del editor en 7 columnas.
- Letra mínima de 11 px (antes había textos de 8,8 px); `--dim` pasa a `#80808C` (4,7:1); la barra inferior usa `--muted`.
- `color-scheme: dark` (meta y CSS): selectores de fecha, hora y listas en oscuro; los campos de fecha y hora vacíos ya no se quedan sin altura.
- Teclado: con `visualViewport` la hoja se apoya encima del teclado (`--kb`) y el campo activo se centra; se oculta la barra inferior mientras escribes.
- Hojas: el fondo se bloquea con `position: fixed` (en iOS `overflow: hidden` no basta) y se recupera la posición al cerrar.
- Toasts en varias líneas, dentro de la pantalla, por encima de la píldora del cronómetro y sin tapar lo de debajo (solo sus botones reciben toques).
- Cambio de día a medianoche con la app abierta (`dayRollover`).
- Vibración en iPhone con el interruptor nativo de iOS 18 (`<input switch>`); en Android, `navigator.vibrate`.
- Texto de «Avisos con la app abierta» corregido: solo funcionan con la app en pantalla.
- Check-in, RPE y días centrados; márgenes laterales con `safe-area` en horizontal; respeta `prefers-reduced-motion`.

## v1.10 · 18 nov 2026 · Auditoría, trozo 1: datos seguros
- Deshacer: la foto incluye registros, agenda, pausas, día mínimo, check-in, simulacros, notas y planes de un día; cada aviso deshace solo su acción (un «Deshacer» antiguo ya no devuelve los datos atrás). Arreglado el check-in, que ofrecía deshacer sin foto.
- «Marcar hecho» desde la agenda o el plan completo marca el día del bloque (`act(id,k)`), no el seleccionado.
- Copias automáticas en IndexedDB (`rutina-copias`): una al día (7 días) y otra antes de importar, borrar todo, cargar de la nube, actualizar el plan o restaurar (máx. 6). Ajustes › Copias automáticas para restaurar. `navigator.storage.persist()` y aviso en Safari para instalarla.
- Nube: datos y calendario en gists separados; para las nubes antiguas, «Proteger tus datos» crea los dos nuevos y borra el antiguo (con confirmación) y pide volver a suscribir el calendario. Los otros dispositivos encuentran los gists nuevos solos.
- Nube: al abrir sube lo pendiente; al salir sube solo los datos con `keepalive`; la nota a medio escribir y la copia del día se guardan al salir.
- Service worker v13: red primero con 3 s de espera máxima para la app y el plan, el resto desde caché; solo guarda respuestas correctas de la propia web (nada de GitHub). `plan.json` con 10 s de espera máxima.
- Arreglado: abrir una hoja justo al cerrar otra (dos confirmaciones seguidas) podía hacer que «atrás» sacara de la app.
- Tests: `tests/test_v110.py`.

## v1.9 · 18 nov 2026 (plan v11)
- Nube: sincronización con un gist secreto de GitHub (token solo con permiso `gist`, guardado solo en el dispositivo y excluido de las copias). Sube los cambios a los 6 s y al salir de la app; al abrirla trae lo último; pregunta si hay cambios en los dos lados. Publica `rutina-agenda.ics` con los cambios manuales para la suscripción del calendario.
- Carga de entreno (método de Foster: RPE × min) para hábitos con métrica `rpe` (boxeo y ahora fuerza), ACWR 7/28 días con zonas y aviso en Hoy si > 1,5; botón «💪 RPE» al completar.
- Simulacros B2 First: tablas oficiales de Cambridge (practice test → Cambridge English Scale), interpolación lineal, nota global, grado, parte más floja, historial; acceso desde Stats, el detalle de Inglés y el toast de los días de simulacro.
- Resumen de mañana (desde las 20:00) y notificación a las 22:00 si los avisos están activos.
- Check-in diario de sueño y energía con estadísticas (cumplimiento según energía y sueño, energía por día de la semana).
- Arrastre horizontal en Semana / 3 días para cambiar un hábito de día (respeta movidos y extras).
- Revisión semanal: incluye carga, sueño/energía y simulacros.
- Tests nuevos: `tests/test_v19.py` (GitHub simulado).

## v1.8 · 18 nov 2026
- Arrastrar bloques en la agenda (Día, 3 días, Semana): pulsación larga de 0,35 s en móvil (un deslizamiento rápido sigue siendo scroll), arrastre directo con ratón; ajuste a 15 min, etiqueta con la hora nueva, vibración al coger el bloque.
- Al soltar usa la misma lógica que el cambio manual (`setEvTime`): repercute en Hoy, estadísticas y avisos de solape; con Deshacer.
- Test nuevo `tests/test_drag_movil.py`.

## v1.7.1 · 18 nov 2026
- Arreglado: en iPhone las hojas no se podían cerrar (Safari no dispara `click` en un `div` sin `cursor:pointer`, y la hoja cubría casi toda la pantalla).
- Botón ✕ fijo arriba, zona libre de 70 px para tocar fuera, deslizar hacia abajo para cerrar, botón atrás y tecla Esc.
- Test nuevo `tests/test_sheet_movil.py` con toques reales en un iPhone simulado.

## v1.7 · 18 nov 2026
- Publicación en GitHub Pages con GitHub Actions: pruebas automáticas antes de cada publicación.
- `gen/build_ics.py` genera `rutina.ics` (hábitos y compromisos fijos, zona Europe/Madrid, aviso −5 min, plan del día en la descripción).
- Ajustes › «Suscribir el calendario»: enlace webcal para iPhone y URL para Google Calendar.

## v1.6.1 · 18 nov 2026
- Navegación de semanas visible: botones «‹ Anterior» / «Siguiente ›», etiqueta relativa con rango de fechas (toca para volver a hoy) y gesto de deslizar.

## v1.6 · 18 nov 2026 (plan v10)
- Plan completo por hábito (`fullPlan`): todas las fechas (programa, fechas sueltas, programación, movidos, extras y registros) hasta la meta, agrupadas por mes, con estado, buscador y filtros.
- Meta por hábito (`goal` en el plan): cuenta atrás de días, semanas y sesiones.
- Acceso desde el detalle del hábito y desde el menú de cada tarjeta.

## v1.5 · 18 nov 2026
- Total semanal por hábito (minutos): objetivo = suma de bloques planificados (anular no lo baja; pausa sí), hecho = `e.mins` / `e.v` / duración del bloque.
- Un día programado sin hacer solo es fallo si la semana ya terminó y no se llegó al total (`missCounts`); rachas, % y revisión lo aplican.
- «⏱ Tiempo que has hecho» en el menú de cada hábito; tarjeta «Esta semana» en Hoy; historial de 10 semanas en el detalle.
- Tests: 7 casos nuevos (compensación del francés, pausa vs anular).

## v1.4.1 · 18 nov 2026
- Regla: un día con el hábito completado siempre cuenta (racha, %, total, revisión), aunque se haya cambiado la hora, movido, anulado después o no estuviera programado.
- Sesiones extra (`in:<id>` con `extra:true`): botón «➕ Añadir sesión extra» en Hoy; hueco libre automático; si no se hace, no cuenta como fallo; «Quitar sesión extra» en la agenda.
- Bloqueado mover un hábito ya completado ese día.
- Tests: 7 casos nuevos con el boxeo.

## v1.4 · 18 nov 2026 (plan v9)
- Hoy: tarjeta «Ahora / Después» con cuenta atrás; banners de revisión semanal, copia de seguridad y fin de agenda.
- Día mínimo (versión corta por hábito, `e.min`), métricas por hábito (`e.m`, `e.note`) con último, mejor y gráfica.
- Revisión semanal con «Copiar resumen para Claude».
- Deshacer (toast con acción), diálogo propio en lugar de `confirm()`.
- Pausas con motivo y rango; exportar agenda a .ics con alarma −5 min; notificaciones con la app abierta; aviso al cumplir el cronómetro y píldora flotante.
- Agenda: vista 3 días, «A mañana» con búsqueda de hueco libre, aviso de clases sin cargar.
- Clase anulada → fuerza pasa a sesión completa (`alt`).
- Mapas de calor y estadísticas desde el inicio de cada hábito; texto de frecuencia legible; tarjetas plegables.
- `userEdited`: las ediciones manuales sobreviven a actualizaciones del plan.
- Esquema 3: plan y agenda en clave aparte (`rutina_plan_v1`); migración automática.
- Plan hasta el 20 jun 2027.

## v1.3.1 · 18 nov 2026
- Vista semana tipo Google Calendar: horas marcadas, bloques con nombre y hora, solo lo importante.
- Vista día: cada hora en su franja con la hora bien visible.

## v1.3 · 18 nov 2026
- Nueva pestaña **Agenda**: día hora a hora (comidas, trayectos, clases, fútbol, partido, sueño y hábitos) y vista semanal.
- Toca cualquier bloque: ver qué toca, anularlo, cambiar la hora o moverlo de día.
- Los cambios se reflejan en Hoy (orden por hora), rachas y estadísticas; un día anulado no cuenta como fallo.
- Guía «Antes de empezar» en cada hábito.
- Datos versionados (esquema 2) con migraciones automáticas.
- Tests: `tests/test_agenda.py` (revisa la agenda) y `tests/test_app.py` (prueba la app en un navegador).

## v1.2 · 18 nov 2026
- Plan completo cargado desde plan.json: entreno, francés (HyperLingua), inglés (B2 First), estudio, diagnóstico diferencial.

## v1.0 · 18 nov 2026
- Primera versión: hábitos, rachas, mapas de calor, estadísticas, copias de seguridad.
