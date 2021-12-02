function toggleMenu() {
   const navbar = document.getElementById("navbar");
   if (navbar.className === "navbar") {
     navbar.className += " responsive";
   } else {
     navbar.className = "navbar";
   }
 }

 if ("serviceWorker" in navigator) {
   navigator.serviceWorker.register("sw.js").then(() => {
     console.log("[ServiceWorker**] - Registered");
   });
 }