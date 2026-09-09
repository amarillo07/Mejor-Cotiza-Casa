# 🏡 Mejor Cotiza Casa

Asistente personal para guardar, cotizar, comparar y decidir sobre vivienda.

Este proyecto **no necesita instalación, ni Node, ni `npm run build`**. Es HTML/JS puro que corre directo en el navegador (React y Babel se cargan desde internet), así que puedes subirlo tal cual a GitHub y publicarlo con GitHub Pages.

## Archivos del proyecto

- `index.html` — página principal (carga las librerías y `app.jsx`)
- `app.jsx` — toda la app (pantallas, calculadoras, menú, navegación)
- `manifest.json` — hace que la app se pueda "instalar" desde el navegador
- `sw.js` — permite que la app abra aunque no haya internet (una vez visitada)

## Cómo publicarlo en GitHub Pages (sin usar la terminal)

1. Ve a [github.com](https://github.com) e inicia sesión (o crea una cuenta gratis).
2. Haz clic en **New repository** (Nuevo repositorio).
   - Nombre sugerido: `mejor-cotiza-casa`
   - Déjalo en **Public**.
   - No marques "Add a README" (ya tienes uno).
   - Clic en **Create repository**.
3. Dentro del repositorio recién creado, haz clic en **Add file → Upload files**.
4. Arrastra estos 5 archivos: `index.html`, `app.jsx`, `manifest.json`, `sw.js`, `README.md`.
5. Baja hasta el final y haz clic en **Commit changes**.
6. Ve a la pestaña **Settings** del repositorio (arriba).
7. En el menú izquierdo, entra a **Pages**.
8. En "Build and deployment" → **Source**, elige **Deploy from a branch**.
9. En **Branch**, selecciona `main` y la carpeta `/ (root)`. Clic en **Save**.
10. Espera 1–2 minutos y recarga la página de Settings → Pages. Verás un mensaje como:
    `Your site is live at https://tu-usuario.github.io/mejor-cotiza-casa/`
11. Abre ese enlace: ahí está tu app, ya publicada. Puedes compartirla con quien quieras.

Cada vez que quieras actualizar la app, solo repite el paso 3–5 (subir los archivos nuevos y hacer commit); GitHub Pages se actualiza solo en 1–2 minutos.

## Qué incluye esta primera versión

- Bienvenida con nombre personalizado + introducción visual.
- Menú lateral (☰) con navegación, tu perfil y modo claro/oscuro.
- Inicio con accesos directos y favoritos.
- Mis casas, con propiedades agrupadas por ciudad (datos de ejemplo).
- Cotiza tu renta: calculadora real (mantenimiento, gastos, periodos).
- Cotiza tu casa: flujo Banco → Producto → cálculo de mensualidad (con datos de ejemplo, marcados como estimación).
- Comparar: dos propiedades lado a lado.

## Qué falta para la versión completa

Guardar casas nuevas de verdad, que la información persista en tu dispositivo (offline real), sincronización en la nube, compartir con permisos, exportar PDF y tasas bancarias oficiales verificadas. Eso requiere una base de datos y backend — el siguiente paso natural una vez que el diseño y flujo te convenzan.
