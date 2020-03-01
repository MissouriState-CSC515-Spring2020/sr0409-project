  var CACHE_NAME = 'cache';
  const OFFLINE_URL = 'offline.html';
  var urlsToCache = [
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

  self.addEventListener('fetch', event => {
      console.log('Fetch event for ', event.request.url);
      // event.respondWith(
      //   caches.match(event.request)
      //   .then(response => {
      //     if (response) {
      //       console.log('Found ', event.request.url, ' in cache');
      //       return caches.OFFLINE_URL;
      //     }
      //     console.log('Network request for ', event.request.url);
      //     return fetch(event.request)
    
      //     // TODO 4 - Add fetched files to the cache
    
      //   }).catch(error => {
      //     console.log("ERROR")
      //     // TODO 6 - Respond with custom offline page
          return caches.OFFLINE_URL;
      //   })
      // );
    });
  