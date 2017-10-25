self.addEventListener('install', (event) => {
  console.info('[Service Worker] Installed...', event);
});

self.addEventListener('activate', (event) => {
  console.info('[Service Worker] Activating Service Worker...', event);
  return self.clients.claim();
});
