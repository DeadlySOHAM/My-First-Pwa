// // Service Worker
// const cacheName = "my-first-pwa";
// const filesToCache = [
//   "/",
//   "index.html",
//   "./index.js",
//   "./sw.js",
// ];

// self.addEventListener("install", e => {
//   console.log("[ServiceWorker**] Install");
//   e.waitUntil(
//     caches.open(cacheName).then(cache => {
//       console.log("[ServiceWorker**] Caching app shell");
//       return cache.addAll(filesToCache);
//     })
//   );
// });



// self.addEventListener("activate", event => {
//    caches.keys().then(keyList => {
//      return Promise.all(
//        keyList.map(key => {
//          if (key !== cacheName) {
//            console.log("[ServiceWorker] - Removing old cache", key);
//            return caches.delete(key);
//          }
//        })
//      );
//    });
//  });




















const version = "0.6.18";
const cacheName = `airhorner-${version}`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll( [
          "/",
          "index.html",
          "./index.js",
          "./sw.js",
        ])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});