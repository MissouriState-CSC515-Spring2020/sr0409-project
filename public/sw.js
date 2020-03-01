console.log("SW Started");
const CACHE_NAME = 'ourcache';
  const OFFLINE_URL = 'offline.html';
  let urlsToCache = [
    'manifest.json',
    'offline.html',
    'index.html',
    'styles.css',
    'bundle.js'
  ];

  self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(CACHE_NAME).then(function(cache) {
        return cache.addAll(urlsToCache);
      })
    );
  });
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });