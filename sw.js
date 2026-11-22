// Minimal service worker: lets phones install the hub as an app.
// It never caches data — every request goes straight to the network, so
// people always see the latest version of the app and live data.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
