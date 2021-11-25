self.addEventListener('install', evt => {
    console.log("service worker installed", evt);
});

//activate sw
self.addEventListener('activate', evt => {
    console.log("service worker is activated", evt);
});

//fetch event
self.addEventListener('fetch', evt => {
    console.log("fetch event", evt);
});