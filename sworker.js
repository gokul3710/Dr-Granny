self.addEventListener("install", e=>{
    
    e.waitUntil(
        caches.open("static").then(cache=>{
            return cache.addAll([
                "./index.html",
                "./about.html",
                "./contact.html",
                "./genre.html",
                "./assets/css/style-liberty.css",
                "./assets/images/icon.png",
                "./assets/images/a1.png",
                "./assets/images/a2.png",
                "./assets/images/a3.png",
                "./assets/images/a4.png",
                "./assets/images/a5.png",
                "./assets/images/a6.png",
                "./assets/images/banner1.png",
                "./assets/images/banner2.png",
                "./assets/images/banner3.png",
                "./assets/images/banner4.png",
                "./assets/images/f1.png",
                "./assets/images/f2.png",
                "./assets/images/f3.png",
                "./assets/images/f4.png",
                "./assets/images/f5.png",
                "./assets/images/f6.png",
                "./assets/images/f8.png",
                "./assets/images/f9.png",
                "./assets/images/f10.png",
                "./assets/images/f11.png",
                "./assets/images/f12.png",
                "./assets/images/f13.png",
                "./assets/images/f14.png",
                "./assets/images/f15.png",
                "./assets/images/f16.png",
                "./assets/images/mid1.png",
                "./assets/images/mid3.png",
                "./assets/images/n1.png",
                "./assets/images/n2.png",
                "./assets/images/n3.png",
                "./assets/images/n4.png",
                "./assets/images/n5.png",
                "./assets/images/n6.png",
                "./assets/images/o1.png",
                "./assets/images/o2.png",
                "./assets/images/o3.png",
                "./assets/images/o4.png",
                "./assets/images/o5.png",
                "./assets/images/o6.png",
                "./assets/images/p1.png",
                "./assets/images/p2.png",
                "./assets/images/p3.png",
                "./assets/images/p4.png",
                "./assets/images/p5.png",
                "./assets/images/p6.png",
                "./assets/images/p7.png",
                "./assets/images/r1.png",
                "./assets/images/r2.png",
                "./assets/images/r3.png",
                "./assets/images/r4.png",
                "./assets/images/r5.png",
                "./assets/images/r6.png",
                "./assets/images/r7.png",
                "./assets/images/r8.png",
                "./assets/images/r9.png",
                "./assets/images/s1.png",
                "./assets/images/s2.png",
                "./assets/images/s3.png",
                "./assets/images/s4.png",
                "./assets/images/s5.png",
                "./assets/images/s6.png",
                "./assets/images/s7.png",
                "./assets/images/s8.png",
                "./assets/images/s9.png",
                "./assets/images/s10.png",
                "./assets/images/s11.png",
                "./assets/images/s12.png",
                "./assets/images/v1.png",
                "./assets/images/v2.png",
                "./assets/images/v3.png",
                "./assets/images/v4.png",
                "./assets/images/v5.png",
                "./assets/images/v6.png",
                "./assets/images/w1.png",
                "./assets/images/w2.png",
                "./assets/images/w3.png",
                "./assets/images/w4.png",
                "./assets/images/w5.png",
                "./assets/images/y1.png",
                "./assets/images/y2.png",
                "./assets/images/y4.png",
                "./assets/js/all.js",
                "./assets/js/app.js",
                "./assets/js/bootstrap.min.js",
                "./assets/js/easyResponsiveTabs.js",
                "./assets/js/jquery-1.9.1.min.js",
                "./assets/js/jquery-countup.js",
                "./assets/js/jquery-magnific-popup.min.js",
                "./assets/js/jquery-waypoints.min.js",
                "./assets/js/main.js",
                "./assets/js/owl.carousel.js",
                "./assets/js/popper.min.js",
                "./assets/js/theme-change.js",
            
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