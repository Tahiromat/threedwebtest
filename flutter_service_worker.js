'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/COMMIT_EDITMSG": "6088163a82f63b6c9d15ca22cdb68a4b",
".git/logs/HEAD": "0c2682b5229fe06bdaeebb4d4d931c3c",
".git/logs/refs/remotes/origin/main": "9236ae06c21ef2d969424727401ec243",
".git/logs/refs/heads/main": "7b257d05ba500ad387526b796c0e4076",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "c84599630c1465f6f1520c3502a59d1c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/1e/2511205c549d99d55589f366e80fa5fac6d74a": "79086a1669885369e39bb9f40e4b6424",
".git/objects/36/4e33b9a6bfd7b3c9e6e4401bf8b6ee9c2406e9": "cd08e0c05c51299cb58c9d7190520404",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/95/e5fa41a3d67742e55e212f645d2abf2f5ea35b": "0b3c5898e23f55a1715e3a9c3205ca09",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/5a/34c9d60ce5dc735a00728decb6bb1be80bace2": "bef9c4e45509b12012622c870a2fb7c5",
".git/objects/67/8df10b4c91e6db562e34815a4a010d1eb43f34": "03f5cf8391ae62787a64482d5fbf5492",
".git/objects/ca/79d078867ea02ccec2f13eb42f36b983144496": "08ddd69d84793c2fb13c84e59cec3d22",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/aa/c3b39fd6863f5bb9bfc4cdb7e0ede94644dc83": "982a3dfcf61b12810a016c5f232936dc",
".git/objects/a9/1acc01ed0e3df73c6c51818d4f87d3aba54f1f": "8d2393c3835431daed641f0fa5763989",
".git/objects/e8/7db7c6b30fe47890b70f0c50af688860872a30": "217628192b88853b560dbf821c4c92b7",
".git/objects/dc/69677673d286f5c5fd89c1d63c42ab25c12ffe": "a0849380c79a3e14cbd75d2d2e96df97",
".git/objects/35/b1be7b54bc28d31b476be89b06d0e6ff7ddf2a": "06324289c1b9ad83831bc17147c85d3c",
".git/objects/66/7f4a16440405ca355d037b7551ca1746545226": "79219fa13ee2dc0e68dbe45d1e1c7523",
".git/objects/89/b9230461bdb603fc379e5826e312628ca99e88": "6c28a027463d6c9d88859303ba140b0c",
".git/objects/77/b00501afd218f0f1752cf642e492f83bb00080": "ffea4bd0e4998ba055789709fc4895d1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/9f28a17cf9656461d5e21cf2d6fdcb3ad1f5e7": "2ba7b670a3cedcc3b659964ef0ee4bb6",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/19/e95d8b9aee7fc0f52624615da3f5b13dbb2f67": "fc4f88ff1e2fe4757865ee7efd149dfd",
".git/objects/19/0ccd4a9b07fdcb79de00ef117e60cdcfd8799f": "f3b8153ebc56c2a2d919ee00299ad329",
".git/objects/49/6dcdad9c110f36ec26512711625b4c1e21f74c": "2de56921351593c7bb1ebdd74ea622a1",
".git/objects/28/de75b9e4908688e5a0e8174e7dcd89339699fb": "fb827ac05b529476d9facf412a930c37",
".git/objects/db/eac53f6a7f199551d2fc5594eeaaeafd03bf5c": "df69597434a261708e48adfea075b316",
".git/objects/8b/304e937b46d5ea7e19562319894e47741b3d4d": "1531cf262c03f9ece2771c5b0bcbecf9",
".git/objects/42/0c8dd46c296b0597535836a01864c96694f794": "90c8f3cdd27275c5ff3e977e060ac866",
".git/objects/07/883ef177e5ea9cd3507744647875220f882591": "08d9eae69c9a975d696dd2909b6f3b48",
".git/objects/07/b29a023b78a99f814a45025927982fa37d6aab": "188be846a8ae31ccbe9a562489b200e8",
".git/objects/0a/d954a52251df6d77c46fac12099f65d5a90653": "445961bc35ca1169602d10213a0804cc",
".git/objects/6a/dc5de19fdcc5d6a77681b9cf8d1db4c0372bf7": "4446684c66a48e3d87ff8d814751af9b",
".git/objects/ff/ecceb20e42a6ef71f674551c7cc7bb1f42ab37": "944c8920bd6ca0c2df4f5f69bc7b95e3",
".git/objects/1c/68adbcacccbad078ae60bd2d444d930f18bf3f": "89690010a4673a3e6d8b4dba238b2854",
".git/objects/ed/028040e5f0819a274aaee0a533473f34ee141c": "adf0f2daf026df4a1a2c7de3f52fa932",
".git/objects/d2/30127d5d7fceed56109ea6c9016cd2de586c28": "3b40487b145ab7424eecc13e60215fab",
".git/objects/14/697e6dac11365a26b128acca93393095b43522": "e337acc3b07f8d11d1314a52ecf73a47",
".git/objects/1f/bcad86591873069cff233ff84941dc6d6e54f7": "da3aac7ce629d2be686f9e87254e18ea",
".git/objects/d3/80ae381ff48e390c9da3a1422c15e5e036ed4f": "96bbf9d72d8efdab70954add31137c5b",
".git/objects/81/b97980dd396eea5158f7bc5192587a6019c3e7": "ef29dfdb06b4700affe3b9a34752b54d",
".git/objects/20/48de77fb69da292a9739cee829558a55514b33": "0b034d9ea240bf6c295604ccf645d0e9",
".git/objects/20/331d3f3009e59093aed8b33a015ce01fbb35fc": "13aa4722b37917a39ea05c7657060e4b",
".git/objects/b1/8124e259bba9c71fb5beda6a8ab5e6a4913dca": "f48ca819b2de8c9d8da9edc8f9d0c98d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/4b/46bd86319b32888be209fbeafc7aa94fa8ac33": "6302835322292aa51f6cbfa817fc9cc4",
".git/objects/85/dcc010e610a27d7aae726539b143a971b1290e": "42db2bb197b09bc4944e28736f0e259b",
".git/objects/88/bc654bb3bbf86e6f7de49b679db1c19c6390dc": "8638a2e8ac89ad4501cf57f35a85e9f2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/54/a66b372fcf33349e8cf30267e92204b3058cfd": "d9b9febf02b5963f9a01e23128fd32a2",
".git/objects/4c/39a2c8ab82ce493a93df7915954037e3d8eb9b": "a94a15fcc1b9b54f033ce5b1bc23b0b6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/2e/97b11049f7c4bbc1edcebf56b483f674334622": "71f74cbbc52a1de9c4d32a23cdd5e153",
".git/objects/c1/df02761daad047e309136997a39fceb54da46f": "0fa61a8e1481e86850f805655b26439c",
".git/objects/38/f6556fac73263ccda588985cca038268fb3cb9": "e02688256bd44694c77d130480351ad0",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/index": "b38fa99a0be5394aad9bd87884a42204",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "66a236acabc5f436ed5312b7ed07444b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/refs/remotes/origin/main": "54b5548fed3d8bbe0489d1a408e7c1af",
".git/refs/heads/main": "54b5548fed3d8bbe0489d1a408e7c1af",
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
"assets/U0Vg.gif": "3fafa1523b06dd5ab8669c6e8a96bdab",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "e9561bdbaeee528c334cb42677570feb",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "5fbbc0a2a132500d92442118afcde473",
"index.html": "54076e08667f62e7be777eba3ee00358",
"/": "54076e08667f62e7be777eba3ee00358",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "b98bb677e10e81c0010722f4cfd544b4",
"version.json": "dabefbecd32510b2d1316b032796c8b6",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"main.dart.js": "e1e598fc83c65078924b64338ba6a563"
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
