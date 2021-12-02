// Service Worker
const cacheName = "my-first-pwa";
const filesToCache = [
  "/",
  "index.html",
  "./js/index.js",
  "./styles/styles.css"
];

self.addEventListener("install", e => {
  console.log("[ServiceWorker**] Install");
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log("[ServiceWorker**] Caching app shell");
      return cache.addAll(filesToCache);
    })
  );
});



self.addEventListener("activate", event => {
   caches.keys().then(keyList => {
     return Promise.all(
       keyList.map(key => {
         if (key !== cacheName) {
           console.log("[ServiceWorker] - Removing old cache", key);
           return caches.delete(key);
         }
       })
     );
   });
 });