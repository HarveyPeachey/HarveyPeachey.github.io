(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[176],{640:function(e,t,r){"use strict";var n=r(1742),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,o,s,c,i,l,p,u,m=!1;t||(t={}),s=t.debug||!1;try{if(i=n(),l=document.createRange(),p=document.getSelection(),(u=document.createElement("span")).textContent=e,u.ariaHidden="true",u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",function(r){if(r.stopPropagation(),t.format){if(r.preventDefault(),void 0===r.clipboardData){s&&console.warn("unable to use e.clipboardData"),s&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var n=a[t.format]||a.default;window.clipboardData.setData(n,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e)}t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))}),document.body.appendChild(u),l.selectNodeContents(u),p.addRange(l),!document.execCommand("copy"))throw Error("copy command was unsuccessful");m=!0}catch(d){s&&console.error("unable to copy using execCommand: ",d),s&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),m=!0}catch(f){s&&console.error("unable to copy using clipboardData: ",f),s&&console.error("falling back to prompt"),r="message"in t?t.message:"Copy to clipboard: #{key}, Enter",o=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",c=r.replace(/#{\s*key\s*}/g,o),window.prompt(c,e)}}finally{p&&("function"==typeof p.removeRange?p.removeRange(l):p.removeAllRanges()),u&&document.body.removeChild(u),i()}return m}},1600:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(5893),a=r(7294),o=r(9008),s=r.n(o),c=r(1163),i=r(4855);let l=e=>{let{recipe:t}=e,r={width:"30px",height:"30px"},a={width:"50px",height:"50px"},o=t.map((e,t)=>{switch(e){case"a":return(0,n.jsx)("img",{style:r,className:"ingred-image",alt:"Apricorn",src:"/apricorn.png"},t);case"bm":return(0,n.jsx)("img",{style:a,className:"ingred-image",alt:"Balm Mushroon",src:"/balmmushroom.png"},t);case"br":return(0,n.jsx)("img",{style:a,className:"ingred-image",alt:"Big Root",src:"/bigroot.png"},t);case"bb":return(0,n.jsx)("img",{style:r,className:"ingred-image",alt:"Bluk Berry",src:"/blukberry.png"},t);case"f":return(0,n.jsx)("img",{style:r,className:"ingred-image",alt:"Fossil",src:"/fossil.png"},t);case"h":return(0,n.jsx)("img",{style:a,className:"ingred-image",alt:"Honey",src:"/honey.png"},t);case"ir":return(0,n.jsx)("img",{style:a,className:"ingred-image",alt:"Icy Rock",src:"/icyrock.png"},t);case"tm":return(0,n.jsx)("img",{style:r,className:"ingred-image",alt:"Tiny Mushroom",src:"/tinymushroom.png"},t);case"rm":return(0,n.jsx)("img",{style:a,className:"ingred-image",alt:"Rainbow Matter",src:"/rainbowmatter.png"},t);case"ms":return(0,n.jsx)("img",{style:a,className:"ingred-image",alt:"Mystical Shell",src:"/mysticalshell.png"},t);default:console.log("Invalid Shortcode")}return null});return(0,n.jsx)("div",{className:"recipe",children:o})},p=e=>{let{pokemon:t,pokemonIcons:r,isFilter:a,handlePokemonFilter:o}=e,s=t.map(e=>{let t;for(let n=0;n<r.length;n++)if(e.name!==r[n].name||a){if(e.name===r[n].name){t={name:e.name,x:r[n].x,y:r[n].y};break}}else{t={name:e.name,attr_rate:e.attr_rate,x:r[n].x,y:r[n].y};break}return t}),c=s.map(e=>{let t=e.x+" -"+e.y+"px",r={backgroundImage:"url(/pokeSpritesnq8-64px.png)",backgroundPosition:t};return a?(0,n.jsx)("div",{className:"filter-poke-container",children:(0,n.jsx)("button",{style:r,className:"poke-image","aria-label":e.name,onClick:()=>o(e.name)})},e.name):(0,n.jsxs)("div",{className:"poke-container",children:[(0,n.jsx)("div",{style:r,className:"poke-image",role:"img","aria-label":e.name}),(0,n.jsxs)("div",{className:"rate",children:[e.attr_rate,"%"]})]},e.name)});return(0,n.jsx)(n.Fragment,{children:a?(0,n.jsxs)("div",{className:"filter-list",children:[(0,n.jsx)("p",{children:"Filter by Pokemon"}),c]}):(0,n.jsx)("div",{className:"pokemon-list",children:c})})},u=e=>{let t,r,a,{qualityName:o,dishName:s}=e;switch(o){case"Special":if("Ambrosia of Legends a la Cube"===s){t=7,r=8,a=9;break}t=6,r=7,a=8;break;case"Very Good":t=5,r=6,a=7;break;case"Good":t=4,r=5,a=6;break;case"Normal":t=3,r=4,a=5;break;default:console.log("Invalid Quality")}return(0,n.jsxs)("p",{className:"info exped",children:[(0,n.jsx)("span",{className:"exped-text",children:"Expeditions:"}),(0,n.jsx)("br",{}),(0,n.jsxs)("span",{className:"fa-stack fa-1x bronze",children:[(0,n.jsx)("i",{className:"fa fa-coffee fa-stack-1x fa-flip-horizontal","aria-hidden":"true"}),(0,n.jsx)("i",{className:"fa fa-coffee fa-stack-1x","aria-hidden":"true"})]}),t,(0,n.jsxs)("span",{className:"fa-stack fa-1x silver",children:[(0,n.jsx)("i",{className:"fa fa-coffee fa-stack-1x fa-flip-horizontal","aria-hidden":"true"}),(0,n.jsx)("i",{className:"fa fa-coffee fa-stack-1x","aria-hidden":"true"})]}),r,(0,n.jsxs)("span",{className:"fa-stack fa-1x gold",children:[(0,n.jsx)("i",{className:"fa fa-coffee fa-stack-1x fa-flip-horizontal","aria-hidden":"true"}),(0,n.jsx)("i",{className:"fa fa-coffee fa-stack-1x","aria-hidden":"true"})]}),a]})};var m=r(5121),f=r(7018);let d=e=>{let{pokemon:t,pokemonIcons:r,qualityName:a,recipes:o,dishName:s,isPokemonRoute:c}=e,i=o.map((e,t)=>(0,n.jsx)(l,{recipe:e},t));return(0,n.jsxs)(n.Fragment,{children:[!f.D0&&(0,n.jsx)("div",{className:"quality-ad-container",children:(0,n.jsx)(m.Z,{adSlot:"9002457744",format:"fixed",width:"300",height:"50",className:"quality-ad"})}),(0,n.jsxs)("div",{className:"quality-container",children:[(0,n.jsx)(p,{pokemon:t,pokemonIcons:r}),(0,n.jsxs)("p",{children:["Quality: ",a]}),(0,n.jsx)(u,{qualityName:a,dishName:s}),i]})]})},y=e=>{switch(e){case"Nidoran♀":return"nidoran-f";case"Nidoran♂":return"nidoran-m";case"Mr. Mime":return"mr-mime";default:return e.toLowerCase().replace(/\W/g,"")}};var h=r(3292),x=r(4304);let g=e=>{let{dishes:t,pokemonIcons:r}=e,[o,l]=(0,a.useState)(""),[u,m]=(0,a.useState)("Copy link");(0,a.useEffect)(()=>{l("")},[t]);let g=(0,c.useRouter)().asPath;if(!t||!r)return(0,n.jsx)("section",{className:"dish-view"});let{pokemon_name:b,dish_name:j,dish_url:k}=t[0],v=e=>{l(e),f.D0||(0,x.B)("Filter Pokemon in Dish",{category:"Filter",label:"".concat(j," | ").concat(e)})},w=void 0!==b,C=!w,N=t.map((e,t)=>{let{dish_name:s,pokemon:c,qualities:i}=e,l=i.map(e=>0===e.recipes.length?null:""===o||e.pokemon.some(e=>e.name===o)?(0,n.jsx)(d,{pokemon:e.pokemon,pokemonIcons:r,qualityName:e.quality,recipes:e.recipes,dishName:s,isPokemonRoute:w},e.quality+s):null),u=l.filter(Boolean);return 0===u.length&&w?null:(0,n.jsxs)(a.Fragment,{children:[C&&(0,n.jsx)(p,{pokemon:c,pokemonIcons:r,isFilter:!0,handlePokemonFilter:v}),""!==o&&(0,n.jsx)("h3",{children:o}),w&&(0,n.jsx)("h3",{children:s}),u]},s)}),O=C?j:b,P=C?k:y(O);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s(),{children:[(0,n.jsx)("title",{children:"Pokemon Quest ".concat(O," Recipes | PQR")}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:image",content:"".concat(h.Z,"/twitter/webp/").concat(P,"-card-large.webp")}),(0,n.jsx)("meta",{property:"og:title",content:"".concat(O," Recipes")}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:url",content:"".concat(h.Z,"/").concat(C?"types":"pokemon","/").concat(P)}),(0,n.jsx)("meta",{property:"og:image",content:"".concat(h.Z,"/og/").concat(P,"-og.png")})]}),(0,n.jsxs)("section",{className:"dish-view",children:[C&&(0,n.jsx)("h2",{children:j}),b&&(0,n.jsx)("h2",{children:b}),(0,n.jsx)(i.CopyToClipboard,{text:"".concat(h.Z).concat(g,"/"),onCopy:()=>m("Copied link"),children:(0,n.jsx)("div",{className:"tooltip",children:(0,n.jsx)("i",{className:"fa fa-link",onMouseOut:()=>m("Copy link"),onTouchStart:()=>m("Copy link"),children:(0,n.jsx)("span",{className:"tooltiptext",children:u})})})}),N]})]})};var b=g},3626:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(5893),a=r(7294),o=r(1664),s=r.n(o);let c=e=>{let{onChangeHandler:t}=e;return(0,n.jsx)("input",{className:"search",type:"search",name:"pokemon search","aria-label":"Search for pokemon",placeholder:"Search for pokemon...",onChange:e=>t(e)})},i=e=>{let{items:t}=e,[r,o]=(0,a.useState)("");if("x"in t[0]){let i=t.filter(e=>e.name.toLowerCase().includes(r)),l=i.map(e=>{let t=e.x+" -"+e.y+"px";return(0,n.jsx)(s(),{href:e.url,scroll:!1,style:{backgroundImage:"url(/pokeSpritesnq8-64px.png)",backgroundPosition:t,backgroundSize:"32px",width:"32px",height:"32px",margin:"5.75px 5px 5.75px 5px"},role:"button",children:(0,n.jsx)("span",{})},e.name)}),p=e=>{o(e.target.value.toLowerCase())};return(0,n.jsxs)("section",{className:"pokemon-view",children:[(0,n.jsxs)("div",{className:"nav-header-container",children:[(0,n.jsx)("h2",{children:"Pokemon"}),(0,n.jsx)("p",{className:"scroll-text",children:"Select a Pokemon and scroll to see recipes"}),(0,n.jsx)(c,{onChangeHandler:p})]}),l]})}{let u=t.map(e=>{let t={backgroundColor:e.colour};return(0,n.jsx)(s(),{href:e.url,scroll:!1,className:"type-item",style:t,children:e.name},e.name)});return(0,n.jsxs)("section",{className:"type-view",children:[(0,n.jsx)("h2",{children:"Types"}),(0,n.jsx)("p",{className:"scroll-text",children:"Select a type and scroll to see recipes"}),u]})}};var l=i},3292:function(e,t){"use strict";t.Z="https://pokequestrecipes.me"},4300:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var a=c(r(7294)),o=c(r(640)),s=["text","onCopy","options","children"];function c(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(y,e);var t,r,c,i=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=f(y);if(t){var a=f(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return m(e)}(this,e)});function y(){var e;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,y);for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return d(m(e=i.call.apply(i,[this].concat(r))),"onClick",function(t){var r=e.props,n=r.text,s=r.onCopy,c=r.children,i=r.options,l=a.default.Children.only(c),p=(0,o.default)(n,i);s&&s(n,p),l&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(t)}),e}return r=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),r=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,s),n=a.default.Children.only(t);return a.default.cloneElement(n,l(l({},r),{},{onClick:this.onClick}))}}],p(y.prototype,r),c&&p(y,c),Object.defineProperty(y,"prototype",{writable:!1}),y}(a.default.PureComponent);t.CopyToClipboard=y,d(y,"defaultProps",{onCopy:void 0,options:void 0})},4855:function(e,t,r){"use strict";var n=r(4300).CopyToClipboard;n.CopyToClipboard=n,e.exports=n},1742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach(function(t){e.addRange(t)}),t&&t.focus()}}}}]);