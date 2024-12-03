const cacheName = 'grow-mate-cache-v1';

const urlsToCache = [
  'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap',
  'https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap',
  'css/main.css',
  'images/favicon.svg',
  'images/growmate.svg',
  'js/script.js',
  'app.webmanifest',
  'index.html',
  './'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', (event) => {
    const requestUrl = new URL(event.request.url);

    event.respondWith(
        (async () => {
            try {
                const cachedResponse = await caches.match(event.request);
                return cachedResponse || (await fetch(event.request));
            } catch (err) {
                console.error('Fetch failed:', event.request.url, err);
                return new Response('Service Unavailable', { status: 503 });
            }
        })()
    );
});