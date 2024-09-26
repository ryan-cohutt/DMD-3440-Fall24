// Name of our cache
const cacheName = 'offline-pwa-gallery-v1';

// URLs to cache for offline mode
const urlsToCache = [
  'https://cdn.skypack.dev/@ionic/core@next/css/core.css',
  'https://cdn.skypack.dev/@ionic/core@next/css/ionic.bundle.css',
  'https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js',
  'https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js',
  '/M2/css/styles.css',
  '../M2/css/styles.css',
  './M2/css/styles.css',
  '/index.html',
  '/'
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
    if (event.request.url.match(/^https:\/\//)) {
        console.log('Browser is requesting:', event.request.url);
    }
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // It can update the cache to serve updated content on the next request
            return cachedResponse || fetch(event.request);
        })
    );
});

  // './images/antelope.jpg',
  // './images/bear.jpg',
  // './images/bison.jpg',
  // './images/bobcat.jpg',
  // './images/caracal.jpg',
  // './images/caribou-bulls.jpg',
  // './images/caribou.jpg',
  // './images/cheetah.jpg',
  // './images/coyote.jpg',
  // './images/ferrets.jpg',
  // './images/ox.jpg',
  // './images/tiger.jpg',
  // './css/styles.css',
