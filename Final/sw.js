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
  './',
  'ios/16.png', 'ios/20.png', 'ios/29.png', 'ios/32.png', 'ios/40.png',
  'ios/50.png', 'ios/57.png', 'ios/58.png', 'ios/60.png', 'ios/64.png',
  'ios/72.png', 'ios/76.png', 'ios/80.png', 'ios/87.png', 'ios/100.png',
  'ios/114.png', 'ios/120.png', 'ios/128.png', 'ios/144.png', 'ios/152.png',
  'ios/167.png', 'ios/180.png', 'ios/192.png', 'ios/256.png', 'ios/512.png',
  'ios/1024.png', 'android/android-launchericon-512-512.png',
  'android/android-launchericon-192-192.png',
  'android/android-launchericon-144-144.png',
  'android/android-launchericon-96-96.png',
  'android/android-launchericon-72-72.png',
  'android/android-launchericon-48-48.png',
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