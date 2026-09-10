# 🏡 Mejor Cotiza Casa

Asistente personal para guardar, cotizar, comparar y decidir sobre vivienda.

No necesita instalación, ni Node, ni `npm run build`. Es HTML/JS puro que corre directo en el navegador (React, mapas y generación de PDF se cargan desde internet vía CDN), así que puedes subirlo tal cual a GitHub y publicarlo con GitHub Pages.

## Archivos del proyecto

- `index.html` — página principal (carga las librerías y `app.jsx`)
- `app.jsx` — toda la app (pantallas, calculadoras, mapa, PDF, menú)
- `manifest.json` — hace que la app se pueda "instalar" desde el navegador
- `sw.js` — permite que la app abra aunque no haya internet (una vez visitada)

## Cómo publicarlo en GitHub Pages (sin usar la terminal)

1. Ve a [github.com](https://github.com) e inicia sesión (o crea una cuenta gratis).
2. Clic en **New repository**. Nombre sugerido: `mejor-cotiza-casa`. Public. Sin README (ya tienes uno). **Create repository**.
3. Dentro del repositorio, **Add file → Upload files**.
4. Arrastra los 5 archivos: `index.html`, `app.jsx`, `manifest.json`, `sw.js`, `README.md`. **Commit changes**.
5. Ve a **Settings → Pages**.
6. En **Source**, elige **Deploy from a branch** → rama `main`, carpeta `/ (root)` → **Save**.
7. Espera 1–2 minutos y recarga: verás `https://tu-usuario.github.io/mejor-cotiza-casa/`.

Para actualizar la app más adelante: sube los archivos nuevos (paso 3–4) y GitHub Pages se actualiza solo en 1–2 minutos.

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
