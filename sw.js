if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return c[e]||(r=new Promise((async r=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]}))},r=(r,c)=>{Promise.all(r.map(e)).then((e=>c(1===e.length?e[0]:e)))},c={require:Promise.resolve(r)};self.define=(r,s,a)=>{c[r]||(c[r]=Promise.resolve().then((()=>{let c={};const i={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return c;case"module":return i;default:return e(r)}}))).then((e=>{const r=a(...e);return c.default||(c.default=r),c}))})))}}define("./sw.js",["./workbox-2fdebd44"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"__react_static_root__/src/containers/Pokemon~__react_static_root__/src/containers/Type~__react_stati~64c2e7cc.40680f9e.css",revision:"3a40152adb1f52da8b3bcd3642894efc"},{url:"__react_static_root__/src/pages/about.9d9aaa00.css",revision:"9bf2df3c1efed1bd91992e8b36f8cb7a"},{url:"apricorn.png",revision:"5cff04fdf75d7746fb1395dbbc3d8247"},{url:"balmmushroom.png",revision:"422272ee671743dd18030870b5b0c1ad"},{url:"bigroot.png",revision:"27c50e3c5ad4aeb98d1b77797ca702e9"},{url:"blukberry.png",revision:"a2467dfc92ced39e5f22facdd8090754"},{url:"dish-icons.png",revision:"40a38b94a8e79c57fc7489f315aaf123"},{url:"favicon.png",revision:"969f9d401dd82f620c3d42a3ee0ed0d7"},{url:"fossil.png",revision:"4cd9001300219c9587b92611985c8a9d"},{url:"honey.png",revision:"dcd14558ffbd9267e2bbe1f29828a485"},{url:"icons-192-apple.png",revision:"a2629815814c7f15074c579e7374d0f4"},{url:"icons-192.png",revision:"683d0032d908f82a6e7b317d705da68c"},{url:"icons-256.png",revision:"9635428748f169dd91f4a27d7bb714f5"},{url:"icons-512.png",revision:"55ea9877e8e7a6b16fd0555a74293ff7"},{url:"icyrock.png",revision:"4c87d7412117eee2562dbd9dc61259a6"},{url:"main.8894e234.js",revision:"0080154b7108441f3317135342ab1bc1"},{url:"main.bad6ad33.css",revision:"5aae9e23ddb77a76dcddedf90a35882c"},{url:"mysticalshell.png",revision:"aac76762632ea9640aa54d2e336c95ae"},{url:"rainbowmatter.png",revision:"5b0887f5c30ed37bed0ab694b8aa5811"},{url:"static/pokeSpritesnq8-64px.69aba0b6.png",revision:"69aba0b689e51fc079c615ca1753754f"},{url:"templates/__react_static_root__/src/containers/Pokemon.1257ad4b.js",revision:"4cb5a018c42bbc3ccca266fee90fda23"},{url:"templates/__react_static_root__/src/containers/Pokemon~__react_static_root__/src/containers/Type~__react_stati~64c2e7cc.41178444.js",revision:"212c9c3b23c74449c31d08e095fb0b73"},{url:"templates/__react_static_root__/src/containers/Type.8c6be483.js",revision:"fce42f415dc3fff34526db07bf1c947f"},{url:"templates/__react_static_root__/src/pages/404.1a228824.js",revision:"214f749aec28d2ebc9e4c517d2e5d39c"},{url:"templates/__react_static_root__/src/pages/about.f43ec36a.js",revision:"b8e2e7d0c70f58ee8887bd160f4acef7"},{url:"templates/__react_static_root__/src/pages/index.c7c59ab1.js",revision:"5ded710bdc5560b1be14318d8450bde9"},{url:"templates/__react_static_root__/src/pages/pokemon.755817b3.js",revision:"a150cd98952566f4c9562d5469352933"},{url:"templates/__react_static_root__/src/pages/types.ce554de9.js",revision:"20ffd4356990f453d2bc31f5c3e8ee0a"},{url:"templates/vendors~main.069bf36d.js",revision:"4cc239cd58611e47d825428278155211"},{url:"tinymushroom.png",revision:"1fd813c9377f49a3c92039876989a0e0"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map