if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
        .then((reg) => console.log("service worker registered"))
        .catch((err) => console.log("Not registered", err))
}