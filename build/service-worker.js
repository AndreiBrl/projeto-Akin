const CACHE_NAME = 'meu-cache';
const urlsToCache = [
  'https://magical-marzipan-1029e1.netlify.app/Original-Andrei-Barbuto.epub',
  // Adicione outros recursos que você deseja armazenar em cache
];

this.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache);
      })
  );
});

this.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
