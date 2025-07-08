self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('gallery-cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/manifest.json',
                '/icons/icon-192.png',
                '/images/painting1.jpg',
                '/images/painting2.jpg',
                '/images/painting3.jpg',
                '/images/painting4.jpg'
            ]);
        })
    );
});

self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});
