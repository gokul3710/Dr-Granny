self.addEventListener("install", e=>{
    
    e.waitUntil(
        caches.open("static").then(cache=>{
            return cache.addAll([
                "./index.html",
                "./about.html",
                "./contact.html",
                "./genre.html",
                "./assets/css/style-liberty.css",
                "./assets/images/icon.png"
            
            
            ]);
        })
    )
})

self.addEventListener("fetch", e=>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request)
        })
    )
})
