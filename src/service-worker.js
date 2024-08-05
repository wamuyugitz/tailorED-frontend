self.addEventListener("install", (event) => {
  console.log("Service Worker installing.");
  // Perform install steps
  event.waitUntil(
    caches.open("static-cache").then((cache) => {
      console.log("Opened cache");
      return cache.addAll([
        "/index.html",
        "/static/js/bundle.js",
        "/favicon.ico",
      ]);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activating.");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
