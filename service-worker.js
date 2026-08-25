var CACHE='gym-console-v3-ios12';
var FILES=['./','./index.html','./legacy.html','./css/style.css','./js/workouts.js','./js/storage.js','./js/timer.js','./js/app.js','./data/workouts.json','./manifest.json','./icons/icon-180.png','./icons/icon-512.png'];
self.addEventListener('install',function(event){event.waitUntil(caches.open(CACHE).then(function(cache){return cache.addAll(FILES);}));});
self.addEventListener('activate',function(event){event.waitUntil(caches.keys().then(function(keys){return Promise.all(keys.map(function(key){if(key!==CACHE){return caches['delete'](key);}}));}).then(function(){return self.clients.claim();}));});
self.addEventListener('message',function(event){if(event.data&&event.data.action==='skipWaiting'){self.skipWaiting();}});
self.addEventListener('fetch',function(event){if(event.request.method!=='GET'){return;}event.respondWith(caches.match(event.request).then(function(response){return response||fetch(event.request).then(function(network){var copy=network.clone();caches.open(CACHE).then(function(cache){cache.put(event.request,copy);});return network;}).catch(function(){return caches.match('./index.html');});}));});
