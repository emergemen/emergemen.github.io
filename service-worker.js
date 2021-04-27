var CACHE_NAME = 'static-cache';
var urlsToCache = [
	".",
	"index.html",
	"/js/bootstrap.bundle.js",
	"/js/bootstrap.bundle.min.js",
	"/js/bootstrap.js",
	"/js/bootstrap.min.js",
	"/js/jquery-3.5.1.slim.min.js",
	"/js/popper.min.js",
	"/css/bootstrap.css",
	"/css/bootstrap.min.css",
	"/css/bootstrap-grid.css",
	"/css/bootstrap-grid.min.css",
	"/css/bootstrap-reboot.css",
	"/css/bootstrap-reboot.min.css"
];
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});


