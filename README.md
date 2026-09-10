# 🏡 Mejor Cotiza Casa

Asistente personal para guardar, cotizar, comparar y decidir sobre vivienda.

No necesita instalación, ni Node, ni `npm run build`. Es HTML/JS puro que corre directo en el navegador (React, mapas y generación de PDF se cargan desde internet vía CDN), así que puedes subirlo tal cual a GitHub y publicarlo con GitHub Pages.

## Archivos del proyecto

- `index.html` — página principal (carga las librerías y `app.jsx`)
- `app.jsx` — toda la app (pantallas, calculadoras, mapa, PDF, menú)
- `manifest.json` — hace que la app se pueda instalar de verdad en el celular
- `sw.js` — permite que la app abra aunque no haya internet, y se actualiza sola
- `icons/` — carpeta con el ícono de la app en varios tamaños (no es un emoji)

## Cómo publicarlo en GitHub Pages (sin usar la terminal)

1. Ve a [github.com](https://github.com) e inicia sesión (o crea una cuenta gratis).
2. Clic en **New repository**. Nombre sugerido: `mejor-cotiza-casa`. Public. Sin README (ya tienes uno). **Create repository**.
3. Dentro del repositorio, **Add file → Upload files**.
4. Arrastra `index.html`, `app.jsx`, `manifest.json`, `sw.js`, `README.md` **y la carpeta `icons` completa** (arrástrala tal cual, GitHub conserva la carpeta). **Commit changes**.
5. Ve a **Settings → Pages**.
6. En **Source**, elige **Deploy from a branch** → rama `main`, carpeta `/ (root)` → **Save**.
7. Espera 1–2 minutos y recarga: verás `https://tu-usuario.github.io/mejor-cotiza-casa/`.

Para actualizar la app más adelante: sube los archivos nuevos (paso 3–4) y GitHub Pages se actualiza en 1–2 minutos. **La app instalada en tu celular ahora se actualiza sola** la siguiente vez que la abras con internet (antes se quedaba pegada en una versión vieja por la caché; ya quedó corregido).

## Instalar la app en tu celular (de verdad, no como acceso directo)

- **Android (Chrome)**: abre el enlace de GitHub Pages, toca el menú (⋮) y elige **"Instalar app"** (no "Agregar acceso directo"). Debe aparecer con el ícono azul de la casa, y abrir en pantalla completa sin la barra del navegador.
- **iPhone (Safari)**: abre el enlace, toca el botón de compartir (□↑) y elige **"Agregar a inicio"**. También abrirá con el ícono propio, en pantalla completa.

Si antes la instalabas y salía como una "extensión" o con un ícono genérico, era porque el ícono estaba embebido como texto (emoji) y no como imagen real — ya se corrigió: ahora la app trae íconos PNG de verdad en varios tamaños.

## Qué funciona en esta versión

- **Datos reales, no de ejemplo.** La app empieza vacía; tú agregas tus propias casas.
- **Agregar / editar / eliminar casas** de verdad: foto principal y fotos adicionales (se suben desde tu dispositivo), precio, ubicación, características, pros y contras, notas — todo se guarda en tu navegador (persiste al cerrar y volver a abrir).
- **Mapa real** (OpenStreetMap, sin necesidad de API key) para marcar la ubicación de cada casa, tocando o arrastrando el pin.
- **Ficha de propiedad** con galería de fotos, características, ubicación, pros/contras, notas, link a la publicación original, y botón **Exportar PDF** para imprimir o compartir la ficha completa.
- **Cotiza tu renta**: calculadora con mantenimiento, gastos con frecuencia, selector de periodo, y **Exportar cotización en PDF**.
- **Cotiza tu casa**: flujo Banco → Producto, con **Full Adquisición** y **Full Construye** de **HSBC usando las tasas y reglas oficiales vigentes** (fuente: hsbc.com.mx, consultado en septiembre 2026 — la app muestra la fecha de actualización y un link a la fuente oficial en cada calculadora). Botón **Exportar cotización en PDF**.
- **Comparar** dos propiedades guardadas lado a lado.
- **Números con separador de miles** en todos los campos monetarios.
- **Personalización de color** de la app (Perfil → Personalización) y modo claro/oscuro.
- **Perfil y ajustes 100% funcionales**: editar tu nombre, exportar/importar un respaldo de tus datos (.json), borrar tus datos, o cerrar sesión.
- **Menú lateral (☰)** con navegación completa, además de la barra inferior.
- Ícono de app propio (no un emoji) para el acceso directo/instalación.

## Sobre las tasas de HSBC

Las tasas, CAT y condiciones de **Full Adquisición** y **Full Construye** están tomadas directamente de las páginas oficiales de HSBC México:
- https://www.hsbc.com.mx/hipotecario/productos/hipoteca-full/
- https://www.hsbc.com.mx/hipotecario/productos/construye-tu-hogar/

Estas condiciones **cambian con el tiempo**. Cada calculadora muestra la fecha de actualización y un link a la fuente oficial — antes de tomar una decisión, verifica siempre las condiciones vigentes directamente con el banco.

## Qué falta para la versión completa

Sincronización en la nube entre dispositivos, compartir propiedades con permisos (solo ver / colaborar), cuentas de verdad con login, y agregar más bancos (BBVA, Santander, Banorte). Eso requiere un backend — el siguiente paso natural una vez que el diseño y flujo te convenzan del todo.
