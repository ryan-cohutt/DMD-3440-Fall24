// Name of our cache
const cacheName = 'offline-pwa-gallery-v1';

// URLs to cache for offline mode
const urlsToCache = [
  '/antelope.jpg',
  '/bear.jpg',
  '/bison.jpg',
  '/bobcat.jpg',
  '/caracal.jpg',
  '/caribou-bulls.jpg',
  '/caribou.jpg',
  '/cheetah.jpg',
  '/coyote.jpg',
  '/ferrets.jpg',
  '/ox.jpg',
  '/tiger.jpg',
  'https://cdn.skypack.dev/@ionic/core@next/css/core.css',
  'https://cdn.skypack.dev/@ionic/core@next/css/ionic.bundle.css',
  'https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js',
  'https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js',
  '/style.css',
  'index.html',
  '/',
];

// Cache files on service worker registration
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Intercept fetch requests to serve cached assets
self.addEventListener('fetch', (event) => {
  if(event.request.url.match(/^https:\/\//)){
    console.log('Browser is requesting:', event.request.url);
  }
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // It can update the cache to serve updated content on the next request
      return cachedResponse || fetch(event.request);
    })
  );
});
