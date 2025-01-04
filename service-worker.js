self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('app-cache').then((cache) => cache.addAll([
        '/index.html',
        '/cadastro.html',
        '/login.html',
        '/css/styles.css',
        '/js/app.js',
      ]))
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => response || fetch(event.request))
    );
  });
  