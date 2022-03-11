'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assets/images/11.png": "f6367359220277826be74a4e98cdfada",
"assets/assets/images/19.jpg": "5cbf6dc395386e4ba2789e8631ae549d",
"assets/assets/images/8.png": "7b53220b1340b40c907b5ecd0a908c7b",
"assets/assets/images/18.jpg": "2fb36f5eed4bb6fc73b04494049ffd66",
"assets/assets/images/22.png": "9894b20e72090d363a297ba7cb8e8926",
"assets/assets/images/20.jpg": "6c6472c6df64d19f8db3dbda3bb577c3",
"assets/assets/images/16.jpg": "1cb3aa90026c1a823395865c9b183f0a",
"assets/assets/images/17.jpg": "44cf0384602a0b92366d2ad38d84fee9",
"assets/assets/images/1.png": "f743f077bffa84a9175f7043afe757af",
"assets/assets/images/12.png": "01877dc1a62a450b4f586021467516a4",
"assets/assets/images/3.png": "551943a2e84caa562288d3f62070e638",
"assets/assets/images/15.jpg": "0f2286de23d57981e427422aa00b25b3",
"assets/assets/images/2.png": "9c9cd0053f0a244e1494a832edcbc6c9",
"assets/assets/images/6.png": "cf6c6f9aa866f2031ccae864cc655bda",
"assets/assets/images/5.png": "8224398ed216a626fb934985f2b6e141",
"assets/assets/images/4.png": "0d2f21dd63a0a0b8f9b3158c2312a175",
"assets/assets/images/14.png": "8d23166a8420b406d33635ee366c7ca2",
"assets/assets/images/10.png": "ccc35eaeb7bc80a265f6808472410937",
"assets/assets/images/7.png": "7b06054c44f15ec87b7c7e16c64729f7",
"assets/assets/images/13.png": "5b35ba5879212afec8e1775181da602e",
"assets/assets/images/9.png": "6b7211d6913d9733efd0a1363fdca6d2",
"assets/assets/images/21.png": "c7c9336c7bc23000b2ac8ea19960d789",
"assets/assets/icons/logo.png": "b6f8ea55fd0b55ef9c20caa67bae55bf",
"assets/Comp-1-1.gif": "7d3de7914fa94bb0dcadc1a0547d5b52",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "e9561bdbaeee528c334cb42677570feb",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "5fbbc0a2a132500d92442118afcde473",
"index.html": "0b504851a4a26dec68b40523f7e170f1",
"/": "0b504851a4a26dec68b40523f7e170f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "b98bb677e10e81c0010722f4cfd544b4",
"version.json": "dabefbecd32510b2d1316b032796c8b6",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"main.dart.js": "fc9c35f93b2fa21baf5e9e656e225460"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
