console.log("SW Started");
var CACHE_NAME = 'cache';
  const OFFLINE_URL = 'offline.html';
  var urlsToCache = [
    'manifest.json',
    'offline.html',
    'index.html',
    'styles.css',
    'bundle.js'
  ];

  self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          // Open a cache and cache our files
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