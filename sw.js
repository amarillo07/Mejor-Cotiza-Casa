// Sube este número cada vez que quieras forzar que los dispositivos limpien caché vieja.
const CACHE_VERSION = "v3";
const CACHE = "mejor-cotiza-casa-" + CACHE_VERSION;
const CORE_ASSETS = ["./", "./index.html", "./app.jsx", "./manifest.json"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(CORE_ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

// "Network-first": si hay internet, SIEMPRE trae la versión más reciente de GitHub Pages
// y refresca la caché. Solo usa la copia guardada cuando no hay conexión.
// Así la app se actualiza sola cada vez que subes cambios al repositorio.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(event.request, { cache: "no-store" })
      .then((res) => {
        const clone = res.clone();
        caches.open(CACHE).then((cache) => cache.put(event.request, clone));
        return res;
      })
      .catch(() => caches.match(event.request))
  );
});
