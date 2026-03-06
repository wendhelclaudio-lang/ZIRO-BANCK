const CACHE_NAME = 'meucaixa-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Instala o service worker e faz o cache dos arquivos básicos
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// Intercepta as requisições (mantém o app abrindo rápido)
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
