'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5a868722042f2e803fec7034cbd22014",
"assets/AssetManifest.bin.json": "dd92ac44a56bea80c1b6ff1027e96697",
"assets/AssetManifest.json": "9594e6bd29f52f5578ecdcaf11c03599",
"assets/assets/fonts/iran_yekan/iranyekan.ttf": "5504ec99783af49b905fcb3c4ed78e55",
"assets/assets/fonts/iran_yekan/iranyekan_black.ttf": "5cc94df235c83e0548fc93afe75791e6",
"assets/assets/fonts/iran_yekan/iranyekan_bold.ttf": "339f2e127eec6ea1db42d9af398fddde",
"assets/assets/fonts/iran_yekan/iranyekan_extrablack.ttf": "9d84d24120dde4ccef88ffab0437645d",
"assets/assets/fonts/iran_yekan/iranyekan_extrabold.ttf": "a8e71b60756858fe2a3337ff615735ab",
"assets/assets/fonts/iran_yekan/iranyekan_light.ttf": "551f8564c4d02044985524131e957760",
"assets/assets/fonts/iran_yekan/iranyekan_medium.ttf": "e14e275c7e80dd36cc9308541221306e",
"assets/assets/fonts/iran_yekan/iranyekan_thin.ttf": "1ec38807dc12bc1c88292e34fbca8474",
"assets/assets/fonts/vazir/vazir_black.ttf": "5fda05afe396b4008d360c1b5e954b0e",
"assets/assets/fonts/vazir/vazir_bold.ttf": "5d949700eb21b48ff7bcc46daead57dd",
"assets/assets/fonts/vazir/vazir_light.ttf": "f51481fab0f1c64400d7053fb4937c60",
"assets/assets/fonts/vazir/vazir_medium.ttf": "662b4bbae8103d61630b09a1813d4b56",
"assets/assets/fonts/vazir/vazir_regular.ttf": "732f41451cb94338fe8ce7624961f8fd",
"assets/assets/fonts/vazir/vazir_thin.ttf": "0f6679bc7ebcca0ff9dec2d4e8e819f6",
"assets/assets/icons/activity.svg": "9d4db713a895b96a94f92aea3cc10f08",
"assets/assets/icons/add_circle.svg": "74861f0a8f8e5ae23b42cc022df721d7",
"assets/assets/icons/ads.svg": "152d47a03a61fe5b240d198e142091f2",
"assets/assets/icons/ad_banner.svg": "157c9114598329f485febd74434bf83e",
"assets/assets/icons/ad_search.svg": "2ec67ff769cf6310e3a3bdb9686b603f",
"assets/assets/icons/arrow_down_rounded.svg": "6105d2476ddff6a91ba37dcdf02592ae",
"assets/assets/icons/arrow_left.svg": "506b099059764ca05970ea1affa07024",
"assets/assets/icons/arrow_left_ios.svg": "3e2c05a22dde38f9aa4d6e9bf4671c28",
"assets/assets/icons/arrow_right.svg": "4543df302544b5e2b0f0e7db46e309eb",
"assets/assets/icons/arrow_right_ios.svg": "f4306d1b152e8f44f79e9277fb85244b",
"assets/assets/icons/attach.svg": "a1afd7d09491c8bc18378715915336e9",
"assets/assets/icons/bell.svg": "3f18eaeb90b503a3a418c99fb24cc36b",
"assets/assets/icons/bookmark.svg": "6407b8e7d9b74454958e4d09259861fa",
"assets/assets/icons/bookmark_fill.svg": "5cc1d0c3cdad3fcbe8be4335326f5f81",
"assets/assets/icons/business.svg": "462360a21b8ed36f9b545b93ef2b6af3",
"assets/assets/icons/calender_search.svg": "8a6f6aa64fce414076d202fc58ed1dbb",
"assets/assets/icons/call.svg": "0bb91c32c53bc8a674d68bc85e751528",
"assets/assets/icons/camera.svg": "9aa118dd6fe9fc6b070f5ee9d8ede28b",
"assets/assets/icons/category_icon/cat_art.svg": "73621bc8bd75013c0ff443fcb26cb4ac",
"assets/assets/icons/category_icon/cat_beauty.svg": "646962c9cd994d573612c5226d4e0701",
"assets/assets/icons/category_icon/cat_car.svg": "58d9cf51f3ec42b61b1312e7cf52090b",
"assets/assets/icons/category_icon/cat_clothes.svg": "a554cbd27b19df7961c5378e7dbf3540",
"assets/assets/icons/category_icon/cat_digital.svg": "7e8c75b00c043ac099faddb5bf9d37d7",
"assets/assets/icons/category_icon/cat_furniture.svg": "45f7365ec0acea437dd2565cb4b8ba98",
"assets/assets/icons/category_icon/cat_game.svg": "1860b4f477154886285a52a28ee5f78c",
"assets/assets/icons/category_icon/cat_home.svg": "d7c01ef293c9e930e55091389f70f5bb",
"assets/assets/icons/category_icon/cat_medical.svg": "a8499ab392dc8a3beda9ef6026f409d5",
"assets/assets/icons/chat.svg": "322f4dfde2bc1442039678300c235ed7",
"assets/assets/icons/chat_fill.svg": "1a68423beb9191f00079109fc9bda735",
"assets/assets/icons/check.svg": "751ba0f78caa1f4bae1fa5bcaeae8ab4",
"assets/assets/icons/check_circle.svg": "a72034b49258289d517886ee80d89c39",
"assets/assets/icons/clock.svg": "205d6e94b8516d5f3cbe637f3eb32011",
"assets/assets/icons/close_circle.svg": "8bba9e6d3e6e053c8835ead5143497c0",
"assets/assets/icons/color_filter.svg": "e69f63b10859e3999925bec1a39d511f",
"assets/assets/icons/color_filter_fill.svg": "c68738ff964bd5c1472269e8c4bb9b0b",
"assets/assets/icons/crop.svg": "e303b77a18b2c1095309f1bc8d76eb7d",
"assets/assets/icons/crop_fill.svg": "8d7864de686095acff3fd323813609f7",
"assets/assets/icons/dashboard.svg": "3ccf6b42e673d1a87b1bd2f3b103e23a",
"assets/assets/icons/direction.svg": "9017fd85be946c29be8c9a6c649b11f0",
"assets/assets/icons/document_upload.svg": "cf5addfabe3c57f8da6a91f72f90b28d",
"assets/assets/icons/double_check.svg": "c22c389dd8d4bfdd407bc85827dfc8a1",
"assets/assets/icons/edit.svg": "abfee19671f01acf4c6f872db8d59de4",
"assets/assets/icons/emoji_happy.svg": "50d595f9efdb18a0af15e5d6bd4b619f",
"assets/assets/icons/empty_wallet.svg": "07a6f5730697a834117159e10a4049fa",
"assets/assets/icons/export.svg": "aacf8e883bc5af461c7b8c624426c7ab",
"assets/assets/icons/filter.svg": "1f2715e5ffd664ca1357dc5c59704d4f",
"assets/assets/icons/find_location.svg": "ae4dc5eeed1d7f9ef0c277ad1dd037f3",
"assets/assets/icons/gallery_add.svg": "ff9237e024f255f31a0b7ede5318fb5c",
"assets/assets/icons/gallery_rounded.svg": "78538bc91007651a42ccd13513e4e2da",
"assets/assets/icons/heart.svg": "2303ca05fb6c198835df0ee080ffd090",
"assets/assets/icons/heart_fill.svg": "c593348cd28b26fa41eef20c48983061",
"assets/assets/icons/history.svg": "74ed73e91e89da9f94edcf9bcf77b1da",
"assets/assets/icons/home.svg": "e1ee22bc5f3106831fc63ee2331fbd9f",
"assets/assets/icons/home_fill.svg": "989886bd70b3b8067f090cd0ba57be64",
"assets/assets/icons/hurt.svg": "fc4875c90f285125d458497d3a658614",
"assets/assets/icons/info_circle.svg": "62e660768a68a55e54aca6871a60c139",
"assets/assets/icons/instagram.svg": "8a880835720574f7f006b7c798125892",
"assets/assets/icons/keyboard.svg": "9d85b266f2e28d25c36410b90aa76cc5",
"assets/assets/icons/lamp_charge.svg": "fac7beee4dc90d73e350e6b18512a4e9",
"assets/assets/icons/like.svg": "74bef213dc67bb42add763adf78112da",
"assets/assets/icons/link.svg": "9c7ca468d45a21b247c33b622a6c1075",
"assets/assets/icons/location.svg": "eaa1a2d585b2f4698cc06082eca144ba",
"assets/assets/icons/logout.svg": "d1b457e3cdc8f0083422dd699923ced5",
"assets/assets/icons/magic_star.svg": "c7bd00bd4f0d0635a4f8871defcfa0be",
"assets/assets/icons/map.svg": "fb98f8eb740da4fce442db4a2fba5809",
"assets/assets/icons/map_fill.svg": "f056afc8ea585b279a7bbcaefbe06747",
"assets/assets/icons/map_page.svg": "21a2d12c87236e2161cce719cdcb5afa",
"assets/assets/icons/medal_star.svg": "cf1e5a9fb8d04f9212ac14ddc18e7f51",
"assets/assets/icons/message_add.svg": "245fe16690bf70ac779445ed22a5d5fd",
"assets/assets/icons/more_triangle.svg": "91c1e0ea332900cfea1634b01b59d265",
"assets/assets/icons/more_vertical.svg": "7c994e54191ad3b60a7c1ad3cbf23935",
"assets/assets/icons/note.svg": "a3e856be22dcdbfe4cb7f1c964a3aad0",
"assets/assets/icons/pen.svg": "2832957f7f655382db7768f1b0209947",
"assets/assets/icons/rate_empty.svg": "a465688869bfdb5aff714b89473ee742",
"assets/assets/icons/rate_fill.svg": "16348e89e1d5db540b6d47f563beda30",
"assets/assets/icons/receipt_search.svg": "f7cb69a0f3385b41746ee6f3eef2049b",
"assets/assets/icons/refresh.svg": "e6a096e46e1bc895c4a7dd503f72a973",
"assets/assets/icons/refresh_square.svg": "44bf86c3a08f4eeeed40fc3afd576802",
"assets/assets/icons/rotate_left.svg": "c640d8e4715e844fae8c350114f79519",
"assets/assets/icons/rotate_right.svg": "e843e95124b2843253509386ee3780ed",
"assets/assets/icons/routing.svg": "f140401386ef09ca033bab82ad7c897e",
"assets/assets/icons/search.svg": "727d1d100628d28371bcf84c1f56a7a0",
"assets/assets/icons/send.svg": "3613950a2b27ad6a6ab416568daac6ac",
"assets/assets/icons/share.svg": "4b79bdbe4dfd80295e5f2b806aaa04b0",
"assets/assets/icons/shop.svg": "3c76550599bf1844fe6a6a777b480d52",
"assets/assets/icons/shop_add.svg": "08b7c60d0ec3a2a0d8829e3f59f42805",
"assets/assets/icons/shop_branch.svg": "a3049c8436958568c525b8bec1e19b94",
"assets/assets/icons/shop_fill.svg": "aa3f09c73bfda5be908825dafa07f895",
"assets/assets/icons/sms.svg": "6a85b3f801e7ed9da7796067d75b287d",
"assets/assets/icons/sort.svg": "c247b09bfa6c71b8b6028044609f3665",
"assets/assets/icons/sun.svg": "0fa31e915b6dd3e3f5787129e56898a2",
"assets/assets/icons/sun_fill.svg": "7493e59558765e7a78190650e40e1098",
"assets/assets/icons/task.svg": "9789abd382a979e03dbcb7520a8ba206",
"assets/assets/icons/telegram.svg": "944b12d8af3073945b1df704e22cc70b",
"assets/assets/icons/transaction_mode.svg": "7c74191e5b1ad6dbc41de1dca8852d56",
"assets/assets/icons/two_sms.svg": "65da2042813fddc7eb38cdb2aba765da",
"assets/assets/icons/user.svg": "ae66f31b3b8fa67a2784e3a9a7580a1c",
"assets/assets/icons/user_add.svg": "0981a21a41bd5c071a3f09f2b94bf51c",
"assets/assets/icons/user_fill.svg": "7c34ba11cd7dd1ddd5a549a9cc6d5f23",
"assets/assets/icons/user_remove.svg": "6d18c9a56621884bfb26e93f1302f02f",
"assets/assets/icons/user_search.svg": "e3193f395cc7f551c0a3765417ee653f",
"assets/assets/icons/user_square.svg": "d8c35756702161a2a21de011e35d24c2",
"assets/assets/icons/user_two.svg": "ac5fd86e93a9942c14ea08201be2d913",
"assets/assets/icons/verify.svg": "97108a8e531dcb19b4b57d17647d9b01",
"assets/assets/icons/warning.svg": "8593af77946ef3300c1d6a7694bfebf5",
"assets/assets/icons/web.svg": "257e4d255e0775bc12ec6794b7289b50",
"assets/assets/icons/web_search.svg": "75eb93ff427ee29f1a84ed95c671cedb",
"assets/assets/icons/whatsapp.svg": "89e413fd10cecdca2e3469bb72c2a85c",
"assets/assets/images/chat_background.jpg": "13116aa5798a67b3e99d7541afe73189",
"assets/assets/images/launch_icon.png": "8618dbe209895cc45503c0b0268f87cb",
"assets/assets/images/phone_frame.png": "058690822de6d1f73fcd10673e812b98",
"assets/assets/images/store.png": "4db5942d79351619ef9fa3facd78e5f7",
"assets/assets/svg_images/app_line_logo.svg": "b9b73696151a0b28fbcd81c012d4114e",
"assets/assets/svg_images/blank.svg": "5d63d370c716100eb81e2a23eca1b68a",
"assets/assets/svg_images/search_empty.svg": "60d213e63c83c0e35336300b9636a090",
"assets/FontManifest.json": "d9c7cb4090c04ab4726eeab96251b7da",
"assets/fonts/MaterialIcons-Regular.otf": "4a13c4f2ade69018a51456abf48b1819",
"assets/NOTICES": "3fe3391646ffac289bfe94db82a4d009",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "552fb38507bb414fac78b093b4c5d8d8",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "6ebc7bc5b74956596611c6774d8beb5b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "0e86a9f360cd99a4bdbfe141999e44e7",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "90c237e67c49a13886ff3cf388f56784",
"icons/Icon-192.png": "15917c6666d6e078dca3986891c69710",
"icons/Icon-512.png": "d3bfe9ab6f247c04a527d7a63539cbcf",
"icons/Icon-maskable-192.png": "15917c6666d6e078dca3986891c69710",
"icons/Icon-maskable-512.png": "d3bfe9ab6f247c04a527d7a63539cbcf",
"index.html": "14df9f122777d3ad8ea49fe3239523e1",
"/": "14df9f122777d3ad8ea49fe3239523e1",
"main.dart.js": "7b11d8776a61f1a0a1df2ccf9758b273",
"manifest.json": "55014746e5da0dcaf382a0ca3043fc79",
"version.json": "0f78aee0c0937474787cc998d0ab9e04"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
