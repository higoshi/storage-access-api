self.addEventListener('install', async event => {
  console.log(event);
});

self.addEventListener('fetch', async event => {
  console.log(event);
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        console.log(response, event.request);
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
