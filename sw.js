//install service worker
//
self.addEventListener('install', evt => {
    console.log("service worker installed");
});

//activate sw
self.addEventListener('activate', evt => {
    console.log("service worker is activated");
});

//fetch event
self.addEventListener('fetch', evt => {
    console.log("fetch event", evt);
});