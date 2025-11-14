'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "17c74e45872b3a854af70ab101a254fd",
".git/config": "5d7c1d9d017dd0b0eb820f252821fceb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b9d8888768d0590c17ac44c78a85299d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0d4bf04bfde7bfac166242222daee544",
".git/logs/refs/heads/main": "0d4bf04bfde7bfac166242222daee544",
".git/logs/refs/remotes/origin/main": "da33efd1a9201e92f4be402fc6a81c37",
".git/objects/00/7718d21c9b8a3f09700aef7d511b8561d9d3e6": "e60a269ef2b355c4c043aa8598b2f73a",
".git/objects/01/ebf246c356e5919aa4e25faa7bf883c0ffa62c": "c1b2808b5ab61d4856e084001087820e",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/04/bb7dc3662e5a5071c135c56947a76a2f64b8fb": "fc115c9fc760918110b833d8ebd403b5",
".git/objects/08/6d3d38ca857f34095585ce9b097fcbdfedf3cb": "df9c5a90bcc7ee85ac82555815999e93",
".git/objects/08/a28b9343aa171fc3f4cc9ceed160f00da5ee92": "40a2e2f5db63345a27e321098a69e4a8",
".git/objects/0b/51153dd902781ec640488feabda51172b054d2": "9a77749c3dfd13e0d4a4353331b2be60",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0d/0089083c3c6cc8397a0b695ea93c4d3d99214a": "8dc417f60500674f5da630cc7acc97f6",
".git/objects/0d/be5e9850fbcd10866b1184b8b5a6b96d0b8f2c": "781dc506b1fd24bdc7c5e3d0dc47a866",
".git/objects/12/c89dc34c78caca1f5b72d99d5b170d61a60aa6": "fdb0ba93987c2e0e0bc422fd4aa0ea3d",
".git/objects/16/922cb72e82bfe9b5a4b71eab33fb2bcdc039b8": "d933d75032a102c3c5cfc9bccbdfc9b0",
".git/objects/16/9651a42747a36c8857a9a71f191134d9ec20ee": "3965b8cafa63cc9fd4f2e042f2bc21bc",
".git/objects/16/a1f0dcda50656fb1e5f12dbc8000bc8e790a8e": "e8395f218890799db04c636103f12465",
".git/objects/17/66d55e1a2f5196e9408384d4389f5c2337d6cf": "30eb83f8c0f65bc9a061e7097f029281",
".git/objects/1a/eb2cfd3385c192ba535d57871cdb567771bab2": "a729086e66b4c4026dc83bc135411f44",
".git/objects/1b/daf8c8dd491e13650696700385716d9bfce667": "f08c399a8f29ce8b8fd32a2eab8b4355",
".git/objects/1c/0e50a41daf53e65bf0be2004435d8b4c8a4360": "09236692c68bb3da013d54c60ec04672",
".git/objects/1c/6a8882c857226b0d7f74f9dcb1ad3d618aa4a6": "5c149d73ab60eace1194231d6d4cdd4a",
".git/objects/1c/741707afefaa7787e6bb312002ef893549ea41": "96c11a13d79f982543be672865020226",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/22/b44142bbb5f4b0ceb249d5a921e6c733cb0681": "f3fd4d2b3f6ef92b077ecf27190eaccf",
".git/objects/25/318c309c7b16116c18b21fdce2828c0dfea336": "aed8da010f88d5daedecfbd5cd590042",
".git/objects/26/a3f5d8b2c14d207a635d612d33d97d4ba18929": "a0f6fbbdcde13dd2e31ff3602788269f",
".git/objects/27/458bb8e62adc71d7515f9741c32da980a93acc": "5cb89bcf390a91b766f2ec45e8acba2d",
".git/objects/27/cc5deaafa44199d5b0de9a38b1568bb547397f": "306622450ce6f56993541fb2111f9541",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2a/3510c8ed8c6478702a33347b0adf80bac2f408": "ce56d4a99812e0b57020818d1c5e0952",
".git/objects/2b/0c740e7bf993966cc65418fb9b86491205eabd": "32db15d320b23e0020fdec379638159d",
".git/objects/2d/5cc1fb146f3c3875d5ca23b942b661e240b16c": "429f12a7f6eeecc3eef7adbd3be6020e",
".git/objects/2d/75fabd8a9a52a375f55d03728fde57b69648d1": "b180d8b926a485eb52f2cad2fd7b61da",
".git/objects/30/0a86cd5983092eab9a5775961eb508c8ddeba4": "09e0385add6ce72f46cc06a952fecdd5",
".git/objects/31/bf63491309860ba893383887d96d5de8d9fc95": "fcc38d10ee6ce9c1c0c891b9cef84a6a",
".git/objects/32/2512e75608eb297e9361167c1de67b1b8a906e": "fe25421300bccf98e8d83ee020cd12ec",
".git/objects/33/e194c2b714ba3c9e686a4cb783cb860459041b": "632dabf839839eefa7ad51c95b6b1fd2",
".git/objects/34/11aa237e554d721c76c5591a5f4700b55e1f9a": "3fd1e76419687d166abdeae501122f9a",
".git/objects/34/caabf35a9491eeb237c1f04599d1883fba6d37": "13e8aade76526cfc9c41d4416f918ead",
".git/objects/35/5c075a20254f5e9405af8504466ded56f95370": "97924aa0ae75b7e28ea3af3ec3289d66",
".git/objects/3a/b02012801de7cbcb99cf0b2fc410348bf7f133": "b0571d6d879123c8fff550816d4ec6b6",
".git/objects/3a/b085b9421e6068228d7ddb2940f920f91e6b7a": "d35e0ccb49cdf4fce87334a8afb09897",
".git/objects/3b/e5f3412aadbe5cb72c75c6ed5dbfaf7d9dc754": "1b3a916827af41c36b5efb959a308062",
".git/objects/3d/6f52aa2f46f017d7a9d78f9bc2f88204ff7698": "4a4443afcc74a7da0ab1763bd22edb9e",
".git/objects/3e/a7b50175ab95de95f9a51ec393f5711d00f1ab": "690896753c506f7d60aadd370f41b1d0",
".git/objects/42/54ba1808522f26d907ca413da0feb06aa4c8b1": "9b215b459a235826b0243228eb8faff7",
".git/objects/42/64998742d9cf1b0cdc28884b83a54dea1f4cd0": "976cad66a90add00c9721a72b9156b21",
".git/objects/42/b8e3ad873f793971d527ae2e90027803ed50bc": "aa38b976447c047b4037f5405c92298c",
".git/objects/48/5115521c864bb59c665d69b34948d881b89c81": "5e709c27c3c452048845e7bec3a2fb30",
".git/objects/4a/4e4a3023c15d819a1d33cdd1ddfcace6e1eca6": "755d0361124ac7917b4926eb4f1ca9f0",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4e/049bc0ec4473e3088f6eae4f08d9cb016e3dcb": "ecd839a75fb1dc6dea3e4e2e03127380",
".git/objects/4e/31335df34768e50d87c2c428f99efe95a53a37": "694f7fe62e1349286a2b30585ee1075b",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/50/d1252d4bf6cbcc66d64fdc91340bff16dc742b": "29d9a193a8f3dad62e6e226ab1d186f9",
".git/objects/51/a90d29c892f056c7dc74d21b831d3e2de3b946": "2de6d18e1d42378ef3f4b77240354402",
".git/objects/51/b9ba623a96a667b2ffe0cd8f2c5e550e67bbcf": "5c0dc389f85bcffa491dfa97136a7dfa",
".git/objects/53/86009817c1f160b37de8fa65451bca4b09ebfd": "19cf391d0e80d0e1fdcf76252cf6b6a3",
".git/objects/56/f63c6efc1ff55b2b2c1e44d707448a740f8448": "44985f16d79e1f331d01e756888d1454",
".git/objects/5b/c4cdb3acdefdcd4ab0860e8fa27b280b45aa66": "568d2b3d5e38d9485768da1aa95b800f",
".git/objects/5b/c9a012b35f19dfc4e9c46a4bb3ee2f66d194ec": "ecb45c93da02009499169a3382e70fd2",
".git/objects/5c/144f6cc14348ac3bb783876dc344d919f4790b": "6b7125399c9299ca24a0e3b5bfccd168",
".git/objects/5f/c12eab83f0bde2ae9782fba55aea04ae2f1b75": "2ebf1d0430aa09b9982efde69282d43f",
".git/objects/60/95872ca32363720820de3c7095a12b8faa8716": "465cab47557c0c093e18c7dbe5350ebe",
".git/objects/61/0d355ea1983e47115e5ba27f2f7c894caf5a78": "c33a33e470c58f4a18d6bbe967423c46",
".git/objects/62/4740a18f2bcae44757ebdf4e0558d108ed2961": "0ef6f2fe0658ddf0c2a033937c69db67",
".git/objects/62/cba0e495e42066dbc63e686c3e1e53bcfd9762": "82d2b9cb48e205536750b1a0297c49a3",
".git/objects/67/1cbbe5e3fbdc67af0b18663dc52c03f6d9df9a": "d9827741032cb2d234827cde74fc455e",
".git/objects/67/3ae0c6255fa82a1e5a60d2e68636c8bfcd2419": "6ec96433639cbeec32f344b00d0a276b",
".git/objects/67/5ad1707ca787a9a9cd01a5afa3a99ee24858a0": "cf17f914ba4bf430133588712f900f2f",
".git/objects/69/423534fca53ed20e68042b3065ca7808c9f81d": "51705552f732d1c0d686bbd244a2d2aa",
".git/objects/69/c0b2627c11698af0b6598efc549f61135871f1": "6e2ab07376f8c9b51e82cd12606627e4",
".git/objects/6a/50cdacdf2294e62044fe7b2956cd9a1609e554": "af23e96bc74634388a6445a420eb9222",
".git/objects/6a/b7a65b8d240a0555c10967493069da19f3359d": "0e1567438d6ca478d4e9fd64f2261851",
".git/objects/6b/8a161333250a1a583f7f3b7c12f4c617d817e3": "7ecc3bbd3939db65be22f96261d933e3",
".git/objects/6d/404210d792b797d85ac22bb08bab2400978eaf": "3c6899a5e1e54f9523d9b54c8dc3a0db",
".git/objects/6d/d93a78058a32fdb3487cae74215124922367d3": "79522b264e6a94961a735766cc388702",
".git/objects/6e/6cb54dadca7dfe6e1be83e70e900be816bc21c": "a250b1c4c8b28cfd380ec3d5403c436b",
".git/objects/6e/e62c2a5bca6d59196c05958d887214d8e9d505": "929f559c8418b370db3c7990dd84a141",
".git/objects/72/f16ed2cb4455f43b4608066f69004a14dbcbb8": "8b5f8e4d62f2211992f2e8d09a824024",
".git/objects/76/13b834e97655f95553fe14e534f1246e47756b": "6b24e1fdf802139957ca2191d0ccbf51",
".git/objects/76/9ec23f560c19c8f3f9d968819157bde30912f2": "6e0b5032d81afeb0fc8e39d747edec26",
".git/objects/77/3f8d64138e1bc15e48546d660e5c642b3bbbaa": "73559e73857eb13e786885ce31bf9ff8",
".git/objects/78/6021757f026c7eacdf600ce263ebb93f8500a5": "d8ef51ac11f237c4d3bd54aa7c871cfe",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7b/647a483e90524c151836b9089aea2f04cd09b0": "c9a0fcba1d78b7ca3c867680decf336c",
".git/objects/7c/b815b0d0ca36768c0b4a47d86f541ed4136b7f": "2e163e8e4413380c1f4fd22cb77aefbb",
".git/objects/7d/d016b128bb076dc730991ada8c744407dcb214": "ea3ec9fb56b1cb524201841f2f06648e",
".git/objects/7e/0164170075b4a0c32351f54e0ef855ad686abb": "c4bafbff2dc481b9f68092a3bd47a638",
".git/objects/7e/b6cfcb160270aac3e16642b4605fdc51c8297b": "79366a2c68c2ac0af2fbb4e3a343a436",
".git/objects/7f/a795c53c5369dac80f62e6ca07678a5f138fb7": "86b849f95e8a8e7a4f1ae5698d4e33b0",
".git/objects/83/6e7526712c5778c1f9b2f14625e55399c29910": "8a81b340581199fe2217c4c1fc800983",
".git/objects/84/f24b2ca6433b8f6c33b8a0dd67e50ac4f7664a": "7fb11c404a33cc0b8d314bbb94a3a552",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/88/ba07288fe3f966c746c770ddbc8b82a08b5088": "cbe11dd38983623c1009d3fd101d6315",
".git/objects/89/0f7a7a8785a5b9c59347c19e086dbace19210a": "c677d80777fef847973c7cd9865d4d8c",
".git/objects/8b/21c83db9b90146a30148a639186c1eb6852486": "01935b57b67052d3751fc77742bc59ad",
".git/objects/8b/c997722112e38f77d7b07c9311c08e33bdf262": "5361a99c09d1c9c231189039f22c0979",
".git/objects/8f/2ab6573d395813769539466aa3d7cb83ce8a53": "7f46f1cdd5fa739b0af998939752db59",
".git/objects/90/688408715cb84527636d27bd51b06f9a731767": "b25296b708a24e00786c7d0ba0e8cdab",
".git/objects/92/d6f572dd702863aa708ceeedc6e84b34784c97": "9f11c935dd9261f9adf1b0d81afea173",
".git/objects/97/bda92e7d4c31817f038f406fdb552d11fd1d88": "0fab87a8520fe29e168cb607f3b00ab9",
".git/objects/98/00265c924dde4948f6686aaa8a3e5293dbb92d": "149199e612f5ecf36d729c0a331142b8",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/98/704dc300ad717511e41208d979777d23a2c059": "c8be9dca461d7843ef9b19956b9748bd",
".git/objects/99/9edb383282f95a0f0d1a83ef9ade6472f909e9": "f6fbf34f104d9228a7afdfe9574b76a4",
".git/objects/9b/26878cd76a055a2bd526fa4bc3077dfeec1939": "28f0068142e9cea5c8a15054a6f61856",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9b/b1799944aa3ae34d19e7ce4b346fdbe6e1fc23": "5a1a0de6cbde3e13063cf8e7c49dd539",
".git/objects/9d/83f0d2212033e65ff024c4fb83f8838e39662d": "12a2d4babdcb7781bb4def925ec69c69",
".git/objects/9d/a1a69d90d2199366f12cc9c776db18b2871a88": "e3d028f5b2f6d4567490b74fb72d7ae0",
".git/objects/9e/327bdc13ef8122d62fa0800dbb6b9088e876cd": "aaa9eacee441cccc0f100374fa57450d",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9e/8fd7af14cc1366920a5e74ea555ef131b8fd7c": "d12b0c851a2bad086d5ba283acac8099",
".git/objects/9e/99d82ace55cfe79722409b93fe8c8a58ba2402": "a2e7852d81d8aaaca048760e33810c43",
".git/objects/a0/a44331194d949f88d29f3a1a42bb557a6dee19": "edec3f8070a5fac9408449023e13fcd3",
".git/objects/a0/fbc0c2ff462aa7848d2d3a23d782e0a99d1681": "1f2280d9a7669391e6749567a123da44",
".git/objects/a1/4f57985b4a9a77a1260cd62c5a1fb02dd4f79e": "8445c5d4f559b7fe24796548dcb737c3",
".git/objects/a2/0197a9db9d721eb213c1de7daf314dfaa02af1": "df2e4191064aa9679906ea55522d2e23",
".git/objects/a2/e1a563275a1397a0962e024ceaecce9743d8fc": "dadabf7e63625738bbdbeb97b9b0b7e4",
".git/objects/a2/fb3c45d8638e5156ce9138b444b0281a5b8dab": "f09c388d73b9e1f7de83f6aef7922560",
".git/objects/a3/1f91a942deb8b04c6aec5a23aeec19d73325db": "6ce1fc0b41524b98f1531f03abf4bba7",
".git/objects/a3/81189fb600d8a7cf961ecc36de1b3e5d1eee71": "91eafceecd39bc26192fe49b42fecfee",
".git/objects/a4/94c8011a07198b52d1e9a57770f3c1702cba2b": "11c867bc5f9eac0d01fac89c8a160b7b",
".git/objects/a6/03968d3be7d5d5713d03a11fb10b7f89e24a08": "0fbb38752002d4fe4d258883035d4ad1",
".git/objects/a7/ff032265a026f51b68930e076cd4388bcb8d5e": "eebec38c615ff19247c2e286eabfc342",
".git/objects/a8/552e1f4b174d37d813a79324c490a13ee54142": "441d28b7b837b0b05112132a0c149da2",
".git/objects/aa/02bc8592440c3259b0e6fb737c6a202cdd68ae": "57cea49619914ffd94934dca0204b3c8",
".git/objects/ab/bfae6d2cb5720a9f28f6ab19cded50707a3234": "096318679c407a10ef67685f66da3cbb",
".git/objects/ae/cdeb2b11339f15092613f0448e4f240f17bfab": "6b911812213f5830151694d5cf03841b",
".git/objects/af/f6f0e61cca7e6be80aa79bbe455bf5ea5d8245": "e1c966bd46347c37bbe3f53ed6c99982",
".git/objects/b0/09e9d3ffb86c11344e2a67cfcff8cff64fee5c": "2b20d8a4e02c97d471f89c88f4a8380c",
".git/objects/b3/644492086f560c456df5d45c1c1ad62fa464f0": "11581ce264ffdc47131e895111e23fa9",
".git/objects/b6/671dafc7692d9adbbc1e9fa1aacdf042566289": "88845fe66c16ccb2d9d8699ff66ae293",
".git/objects/b6/a0df917f2bfa02115f7012be2032dbb95d9cc9": "3e9c8914314d5fea71aba157708ea76e",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/ba/5ba20e04283f1189915ca7b7653845d237a400": "84937ee225c15c8877a5946cc90e1e1f",
".git/objects/ba/6137f2313fbe2b0c7614e90be3eaf0c05ea3fe": "858b71fcc2c16139dddfc0c547360da3",
".git/objects/bc/c9604a57323e66ede4888a471518a03f66ee48": "e2ef9fe38741a88302e7a69acdf2c099",
".git/objects/bc/deb274741c19b82f15dadc4886095048965390": "15f299e04a25d2ba0f266c7ee6c73f5f",
".git/objects/bd/6105c84fbd1abdb87da3a833f25f1925b7daf6": "8a5ecf66d222707466a56f3442e54d7e",
".git/objects/bf/eeab9dbdef5feae79b90b67d53029ad17d7e0e": "29d1b6fdcd5a7ad49684c629271a95f0",
".git/objects/c0/f52715e70f50142a6811909ac7fe8b7b2d59aa": "a6c83aa8e7d13c0e2faedd59d92ae094",
".git/objects/c1/15d7a3656d3c345a07845dcd28fc6079f33f4e": "420683a942e84d27041493c1b0a8645c",
".git/objects/c2/9aa604b9948c8ea50f04dcb87d4bbba476425f": "60bade9630b8cee1f363bd2b7f47c34b",
".git/objects/c3/0f9472cba6d58859ecf8140b1e06dac526ab9d": "cf91ffad4b6a119056610b747e221155",
".git/objects/c3/6056994d11a4e3a28ad6fb9a9936a8f27a8979": "b30bb91fb1e42fbb3add350d6465532b",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c4/138135ee5e76b98eb8ca0caaf0e275844cb33e": "dc52007f352a7d8623894303851b3cd5",
".git/objects/c8/917ff7b83938cec9230fab12b52afd78f69b2e": "19600bec599a95e59701933276bff167",
".git/objects/c9/7fc3c8224c4efd9e2024aebdb94a6cc37442c7": "8d5944c09abbae96f4d5e34b49f755a4",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cc/458702d6f44daafd17e9b042e87e96f96fb943": "2db010bd87eb70fdcecef5601c146346",
".git/objects/cc/fd4362d16b2fa3a0dbcfb65ea63c97a8e30ab5": "b975d67eb0ef5993c35ac8f7430916a4",
".git/objects/cd/55f02e145fdf51c5b778a30d5903499436dffd": "25bbaafab729d0752c2a1d89760141e5",
".git/objects/cd/6101a166579e77aa4677b6fa1ff163aa5d52b0": "5d81740baaae6b257813b3d69e0f16c1",
".git/objects/cf/43d89182eb0d3ded0b52fc8ac4fc582e1a7033": "79f3bec325e1d7a57eece460bdc43b2f",
".git/objects/cf/4f2705f25cdfd43b32dfa76700b0bcc87672a4": "27eb7e55e8d733ec9f998f1cc1a9e163",
".git/objects/cf/737e4c0be6abd68d04e025d698d817e588e139": "f0ac7819ae370813c70f39dd40f89767",
".git/objects/d0/77484ce2faa0a961e450fa09bb95012599aec9": "0ff1b4d5c9064920cc7d9727f7258192",
".git/objects/d3/7511e56abbd3c43f95e1c07a9f52f26ed9cd6b": "1f2c9c56246dc5682d1014832626646e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/59b1196ea59b98e7b93e57eb6f83805dbdeab1": "91652d04f037f5f6e7363c563c73ba6c",
".git/objects/d4/abd3e0d9faa31bdde88ecc959f4c22114f06d6": "11af60867fe3034ab7ec082b09d320a2",
".git/objects/d7/a568a4f11d810e2e7d49d07a1f5022fe4c5fab": "8a5be29559056585380d7d820c4d0c24",
".git/objects/d8/499197f4607e21b1607fbf5165fed3f344fef8": "861c8796a08fd5afad557c82fd022612",
".git/objects/db/e4ac5ea110812a37f0a085e001d9dca080481a": "1e765f00a58d212cd5569de952ed83ea",
".git/objects/dd/7b852d43c577514a13f41451387ada1a57195b": "27581b468299f3b9dba44986a9e2360a",
".git/objects/de/346da133f9e84a17fcd5dff71993d99c6458b0": "9988d39df4197599be7296551b881200",
".git/objects/df/5be53fcb1928b177fe6b5c12f80d8af6b87b1b": "7c24f600f2352c93fd32a07f2815fff8",
".git/objects/e0/3dd19a075219cbfbb5451c2e43bfa71ae89caa": "a226ac4475cd3d4e5176c97b12f47e5b",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e1/64c2e5b409e0db489d622a56393fb08c7f559b": "07a61be917e03cceee907f59716b3913",
".git/objects/e2/284bdc0cb21d7e8300c0283f0d9269db9c3ef8": "e5e41aabb1548129b8b351138b0d9427",
".git/objects/e2/77de29525e2356130b0c9670bffd668f4aad31": "05f95e75e99ce58c1330e0ffe1989098",
".git/objects/e2/bd017d7682cdc70a907b84d9a177c104907e24": "153305cb4b4de409afc94e632b71cd1a",
".git/objects/e2/d9edb9cc49b4dd5985b7254eaa3a4ee85df6b1": "cd02df74ad42d213d0715431497dd81a",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e4/dc43896a24d8dcefd7714e20e8431e4cd4e57e": "ef308995de360a8ad8b5b68c99f7f244",
".git/objects/e5/6ce2f8b56a87084f0fb9b36f73802966b36b1d": "09ac661d3ecfe12059ac0e3777e42713",
".git/objects/e8/5cfa2a9ee62911f82da2e604f5ba1808faf509": "e9c100cfd4262eaef31a2f87dff1850e",
".git/objects/ea/49963106aff5e92b0684a8c040e4ba95a49a8f": "d6ad98b98c8d0a49bb886f402da660f1",
".git/objects/ec/19fb88ad0bd68f991a008762daef9243b09d0e": "72cfc3838e80406b3aae2b43f02febff",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f0/9d4a744aa22671050de53b5f6550f0bdf0f37a": "f3f8f76c1f97d1ceeef9a9b29dfb216b",
".git/objects/f1/64abe83357f48ead65b05c9ded94dee8c70aaa": "c12ffe3d232704d5623b534f2cfe8b5a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/fa9f745593c1f7d763d6e7db60ea23cbf80eb6": "bd1b3b69538facdeab9bca14e4824ece",
".git/objects/f4/18ae6a63abbc5b0555a7dc4e42f10cb4531053": "47b5aaacc8018a62e9ec6b04bd53dc73",
".git/objects/f8/a25576e73d9e1d8383856e0d3c2089f309f247": "edbe994bdbd1310fcdf26776ab71bdb2",
".git/objects/fa/6197fcfd6ef93cd8fd3a52b435bb76ee82c4e1": "d047142fb5fb54361b7df56e4135f8b4",
".git/objects/fc/371b5cceaf34156d4d84df76424c8a526a450e": "fa77e86a60328f02897f44af16e5e84e",
".git/objects/fc/6bd5758b3d2794f071a8200f4f8a553aadb9d7": "780ee84c366cbec08efbd6e8de66b534",
".git/objects/fd/763c5cb016d0d7063828dd2ee8b42f77a5f9ee": "d0474e05d5890fd161e982b1cc844b83",
".git/objects/fe/178356c2cb4b5e4bf5cf034949904c753657f1": "1801146e4041741cb77682ada930c88b",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fe/497f8d39337072b7e5c43e2c357d588ef4c743": "250925a9e18bc04f3c92ed0f1429cfb0",
".git/refs/heads/main": "82d74d5e974ab549db0aa02eeff8e098",
".git/refs/remotes/origin/main": "82d74d5e974ab549db0aa02eeff8e098",
"assets/AssetManifest.bin": "5a868722042f2e803fec7034cbd22014",
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
"assets/NOTICES": "0734897e59f4632dfc9c3da8c054852f",
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
"flutter_bootstrap.js": "ee6a00cdccc249be88c172bd5156996e",
"icons/Icon-192.png": "15917c6666d6e078dca3986891c69710",
"icons/Icon-512.png": "d3bfe9ab6f247c04a527d7a63539cbcf",
"icons/Icon-maskable-192.png": "15917c6666d6e078dca3986891c69710",
"icons/Icon-maskable-512.png": "d3bfe9ab6f247c04a527d7a63539cbcf",
"index.html": "ebabfef0f70c08c6459d6ab56301beb1",
"/": "ebabfef0f70c08c6459d6ab56301beb1",
"main.dart.js": "a34ba1ca9977bb2d1de68dba190776df",
"manifest.json": "bfe6c85c33a554d7bad4915d7805a47d",
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
