!function(e){function t(t){for(var a,i,o=t[0],u=t[1],c=t[2],l=0,d=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);for(p&&p(t);d.length;)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={9:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var s,o=document.createElement("script");o.charset="utf-8",o.timeout=120,i.nc&&o.setAttribute("nonce",i.nc),o.src=function(e){return i.p+"templates/"+({1:"vendors~__react_static_root__/src/pages/index~__react_static_root__/src/pages/time",2:"vendors~__react_static_root__/src/pages/time~__react_static_root__/src/pages/tip",3:"__react_static_root__/src/pages/404",4:"__react_static_root__/src/pages/about",5:"__react_static_root__/src/pages/index",6:"__react_static_root__/src/pages/r/ethtrader",7:"__react_static_root__/src/pages/time",8:"__react_static_root__/src/pages/tip",10:"vendors~__react_static_root__/src/pages/time"}[e]||e)+"."+{1:"806f39b5",2:"4bfa7be3",3:"88800a62",4:"9c857ef5",5:"856c6d46",6:"8aca5815",7:"7017e72c",8:"581e73f2",10:"a8383447"}[e]+".js"}(e);var u=new Error;s=function(t){o.onerror=o.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",u.name="ChunkLoadError",u.type=a,u.request=s,n[1](u)}r[e]=void 0}};var c=setTimeout((function(){s({type:"timeout",target:o})}),12e4);o.onerror=o.onload=s,document.head.appendChild(o)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="https://www.donut.finance/",i.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var p=u;s.push([127,0,11]),n()}({101:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tokenOwner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"remaining","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},102:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"uint256","name":"chainId","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[],"name":"_chainId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes","name":"methodName","type":"bytes"},{"internalType":"address","name":"relayAuthority","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"uint256","name":"relayerRewardTokens","type":"uint256"},{"internalType":"uint256","name":"expires","type":"uint256"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"burnSignature","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"contractName","type":"string"},{"internalType":"string","name":"version","type":"string"},{"internalType":"uint256","name":"chainId","type":"uint256"},{"internalType":"address","name":"verifyingContract","type":"address"}],"name":"getEIP712DomainHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"getLavaDomainTypehash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes","name":"methodName","type":"bytes"},{"internalType":"address","name":"relayAuthority","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"uint256","name":"relayerRewardTokens","type":"uint256"},{"internalType":"uint256","name":"expires","type":"uint256"},{"internalType":"uint256","name":"nonce","type":"uint256"}],"name":"getLavaPacketHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"getLavaPacketTypehash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes","name":"methodName","type":"bytes"},{"internalType":"address","name":"relayAuthority","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"uint256","name":"relayerRewardTokens","type":"uint256"},{"internalType":"uint256","name":"expires","type":"uint256"},{"internalType":"uint256","name":"nonce","type":"uint256"}],"name":"getLavaTypedDataHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"digest","type":"bytes32"}],"name":"signatureBurnStatus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes","name":"methodName","type":"bytes"},{"internalType":"address","name":"relayAuthority","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"uint256","name":"relayerRewardTokens","type":"uint256"},{"internalType":"uint256","name":"expires","type":"uint256"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"signatureIsValid","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes","name":"methodName","type":"bytes"},{"internalType":"address","name":"relayAuthority","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"uint256","name":"relayerRewardTokens","type":"uint256"},{"internalType":"uint256","name":"expires","type":"uint256"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"transferAndCallWithSignature","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes","name":"methodName","type":"bytes"},{"internalType":"address","name":"relayAuthority","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"uint256","name":"relayerRewardTokens","type":"uint256"},{"internalType":"uint256","name":"expires","type":"uint256"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"transferTokensWithSignature","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]')},103:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"bytes32","name":"contentId","type":"bytes32"}],"name":"Tip","type":"event"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_token","type":"address"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"receiveTransfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_token","type":"address"},{"internalType":"bytes32","name":"_contentId","type":"bytes32"}],"name":"tip","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},127:function(e,t,n){n(128),n(172),e.exports=n(179)},129:function(e,t,n){"use strict";n.r(t);var a=n(96),r=[{location:"__react_static_root__/node_modules/react-static-plugin-source-filesystem",plugins:[],hooks:{}},{location:"__react_static_root__/node_modules/react-static-plugin-reach-router",plugins:[],hooks:n.n(a)()({})},{location:"__react_static_root__/node_modules/react-static-plugin-sitemap/dist",plugins:[],hooks:{}},{location:"__react_static_root__/node_modules/react-static-plugin-sass",plugins:[],hooks:{}},{location:"__react_static_root__/",plugins:[],hooks:{}}];t.default=r},173:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"notFoundTemplate",(function(){return T}));var a=n(23),r=n.n(a),s=n(24),i=n.n(s),o=n(4),u=n.n(o),c=n(28),p=n.n(c);Object(c.setHasBabelPlugin)();var l={loading:function(){return null},error:function(e){return console.error(e.error),u.a.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.")},ignoreBabelRename:!0},d=p()(i()({id:"__react_static_root__/src/pages/404.js",load:function(){return Promise.all([n.e(3).then(n.bind(null,120))]).then((function(e){return e[0]}))},path:function(){return r.a.join(e,"__react_static_root__/src/pages/404.js")},resolve:function(){return 120},chunkName:function(){return"__react_static_root__/src/pages/404"}}),l);d.template="__react_static_root__/src/pages/404.js";var y=p()(i()({id:"__react_static_root__/src/pages/about.js",load:function(){return Promise.all([n.e(4).then(n.bind(null,121))]).then((function(e){return e[0]}))},path:function(){return r.a.join(e,"__react_static_root__/src/pages/about.js")},resolve:function(){return 121},chunkName:function(){return"__react_static_root__/src/pages/about"}}),l);y.template="__react_static_root__/src/pages/about.js";var _=p()(i()({id:"__react_static_root__/src/pages/index.js",load:function(){return Promise.all([Promise.all([n.e(1),n.e(5)]).then(n.bind(null,122))]).then((function(e){return e[0]}))},path:function(){return r.a.join(e,"__react_static_root__/src/pages/index.js")},resolve:function(){return 122},chunkName:function(){return"__react_static_root__/src/pages/index"}}),l);_.template="__react_static_root__/src/pages/index.js";var m=p()(i()({id:"__react_static_root__/src/pages/r/ethtrader.js",load:function(){return Promise.all([n.e(6).then(n.bind(null,123))]).then((function(e){return e[0]}))},path:function(){return r.a.join(e,"__react_static_root__/src/pages/r/ethtrader.js")},resolve:function(){return 123},chunkName:function(){return"__react_static_root__/src/pages/r/ethtrader"}}),l);m.template="__react_static_root__/src/pages/r/ethtrader.js";var f=p()(i()({id:"__react_static_root__/src/pages/time.js",load:function(){return Promise.all([Promise.all([n.e(0),n.e(2),n.e(1),n.e(10),n.e(7)]).then(n.bind(null,124))]).then((function(e){return e[0]}))},path:function(){return r.a.join(e,"__react_static_root__/src/pages/time.js")},resolve:function(){return 124},chunkName:function(){return"__react_static_root__/src/pages/time"}}),l);f.template="__react_static_root__/src/pages/time.js";var b=p()(i()({id:"__react_static_root__/src/pages/tip.js",load:function(){return Promise.all([Promise.all([n.e(0),n.e(2),n.e(8)]).then(n.bind(null,125))]).then((function(e){return e[0]}))},path:function(){return r.a.join(e,"__react_static_root__/src/pages/tip.js")},resolve:function(){return 125},chunkName:function(){return"__react_static_root__/src/pages/tip"}}),l);b.template="__react_static_root__/src/pages/tip.js",t.default={"__react_static_root__/src/pages/404.js":d,"__react_static_root__/src/pages/about.js":y,"__react_static_root__/src/pages/index.js":_,"__react_static_root__/src/pages/r/ethtrader.js":m,"__react_static_root__/src/pages/time.js":f,"__react_static_root__/src/pages/tip.js":b};var T="__react_static_root__/src/pages/404.js"}.call(this,"/")},175:function(e,t,n){var a={".":40,"./":40,"./index":40,"./index.js":40};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id=175},183:function(e,t,n){"use strict";n.r(t),function(e){var a=n(4),r=n.n(a),s=n(63),i=n.n(s),o=n(106),u=(n(188),n(57));if(t.default=u.a,"undefined"!=typeof document){var c=document.getElementById("root"),p=c.hasChildNodes()?i.a.hydrate:i.a.render,l=function(e){p(r.a.createElement(o.AppContainer,null,r.a.createElement(e,null)),c)};l(u.a),e&&e.hot&&e.hot.accept("./App",(function(){l(u.a)}))}}.call(this,n(184)(e))},189:function(e,t){},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a={IERC20:n(101),LavaWallet:n(102),Tipping:n(103)},r=n(53)},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));var a=n(2),r=n.n(a),s=n(29),i=n.n(s),o=n(21),u=n.n(o),c=n(4),p=n.n(c),l=n(62),d=n(58),y=n(44),_=Object(c.createContext)();function m(e){var t,n,a,s,o,m,f,b,T,h,g,v,k,j,w,x,E,O,N,C,M,S,P,B,A,F=e.web3React,L=e.children,R=(n=(t=F).account,a=t.active,s=t.library,o=t.chainId,m=Object(c.useState)(null),f=u()(m,2),b=f[0],T=f[1],h=Object(c.useState)(d.d),g=u()(h,2),v=g[0],k=g[1],j=Object(c.useState)(d.d),w=u()(j,2),x=w[0],E=w[1],O=Object(c.useState)(null),N=u()(O,2),C=N[0],M=N[1],S=Object(c.useState)(null),P=u()(S,2),B=P[0],A=P[1],Object(c.useEffect)((function(){if(!a)return T(null),k(d.d),E(d.d),M(null),void A(null);T(s.getSigner());var e=new l.a(y.b[o.toString()].DONUT,y.a.IERC20,s),t=new l.a(y.b[o.toString()].tipping,y.a.Tipping,s);function u(){return(u=i()(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=k,t.next=3,s.getBalance(n);case 3:return t.t1=t.sent,(0,t.t0)(t.t1),t.t2=E,t.next=8,e.balanceOf(n);case 8:t.t3=t.sent,(0,t.t2)(t.t3);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}M(e),A(t),n&&function(e){u.apply(this,arguments)}(n)}),[a,o]),{signer:b,feeBalance:v,donutBalance:x,token:C,tipping:B});return p.a.createElement(_.Provider,{value:R},L)}var f=function(){return Object(c.useContext)(_)}},53:function(e){e.exports=JSON.parse('{"1":{"DONUT":"0xC0F9bD5Fa5698B6505F643900FFA515Ea5dF54A9","tipping":"0xE3b8Ff1EAd55Bc511127CfE90F5cEdBB90C401b4"},"100":{"lavaWallet":"0x56398FdFD684b40B17B09BB1Cf826ED93A38C489","DONUT":"0x524B969793a64a602342d89BC2789D43a016B13A","tipping":"0xF40e98033eb722CC6B4a64F7b37737d56eCB17EF"}}')},57:function(e,t,n){"use strict";var a=n(4),r=n.n(a),s=(n(116),n(221)),i=n(45),o=n(43),u=n(52),c=n(90),p=function(){return r.a.createElement("div",null,"This is a dynamic page! It will not be statically exported, but is available at runtime")},l=n(68),d=n(70),y=n(107),_=n(65),m=n.n(_),f=n(69),b=n(71),T=(n(206),function(e){var t=e.connect;return r.a.createElement("div",{className:"connect-wallet-button cute-pink-btn",onClick:t},"Connect Wallet")}),h=function(e){var t=e.account,n=e.donuts,a=e.disconnect,s=t.substr(0,6)+"..."+t.substr(t.length-4);return r.a.createElement("div",{className:"wallet-details"},r.a.createElement("div",{className:"left-side light-background box"},r.a.createElement("div",{className:"donut-bal"},Object(f.f)(Object(b.a)(n.donutBalance)),"  🍩"),r.a.createElement("div",{className:"address-container"},r.a.createElement("div",{className:"short-address"},s),r.a.createElement(m.a,{diameter:18,seed:Object(_.jsNumberForAddress)(t)}))),r.a.createElement("div",{className:"light-background close-button button box"},r.a.createElement(l.a,{className:"disconnect",onClick:a,icon:d.a})))},g=function(){var e=Object(u.b)(),t=Object(o.b)(),n=t.account,a=t.active,s=t.activate,i=t.deactivate;return r.a.createElement("div",{className:"wallet-info"},a?r.a.createElement(h,{account:n,donuts:e,disconnect:i}):r.a.createElement(T,{connect:function(){s(new y.a,void 0,!0)}}))};n(207);function v(){return r.a.createElement(i.Root,null,r.a.createElement("div",{className:"app"},r.a.createElement("nav",{style:{position:"relative",zIndex:100}},r.a.createElement(g,null)),r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("em",null,"Loading...")},r.a.createElement(c.a,null,r.a.createElement(p,{path:"dynamic"}),r.a.createElement(i.Routes,{path:"*"})))))}function k(e){var t=e.children,n=Object(o.b)();return r.a.createElement(u.a,{web3React:n},t)}function j(e,t){return new s.a(e)}Object(i.addPrefetchExcludes)(["dynamic"]);t.a=function(){return r.a.createElement(o.a,{getLibrary:j},r.a.createElement(k,null,r.a.createElement(v,null)))}},69:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"f",(function(){return c})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return _})),n.d(t,"e",(function(){return f}));var a=n(2),r=n.n(a),s=n(29),i=n.n(s),o="https://cors.bridged.cc",u=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",").replace(/[^0-9^,^\.]+/g,"")},c=function(e){var t=NaN;return e>0&&(e=Math.floor(e)),t=e<1e5?u(e):e<1e6?Math.floor(e/1e3)+"K":Math.floor(e/1e5)/10+"M",Number.isNaN(t)?"0":t};function p(){return l.apply(this,arguments)}function l(){return(l=i()(r.a.mark((function e(){var t,n,a=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e.next=3,fetch("".concat(o,"/").concat(t));case 3:return n=e.sent,e.abrupt("return",n.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return y.apply(this,arguments)}function y(){return(y=i()(r.a.mark((function e(t){var n,a,s,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,a=t.address,e.next=3,fetch("https://ethtrader.github.io/donut.distribution/users.json");case 3:return s=e.sent,e.next=6,s.json();case 6:if(i=e.sent,!n){e.next=11;break}return e.abrupt("return",i.find((function(e){return e.username.toLowerCase()===n.toLowerCase()})));case 11:if(!a){e.next=15;break}return e.abrupt("return",i.find((function(e){return e.address.toLowerCase()===a.toLowerCase()})));case 15:return e.abrupt("return",null);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return m.apply(this,arguments)}function m(){return(m=i()(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("https://old.reddit.com/user/".concat(t,"/about.json"));case 2:if(n=e.sent,!n.error){e.next=6;break}return e.abrupt("return",!1);case 6:return e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){var t=45,n=46,a=97,r=99,s=118,i=120,o=121,u=122,c=e.which;if(e.ctrlKey&&c==o||e.ctrlKey&&c==u||e.ctrlKey&&c==i||e.ctrlKey&&c==s||e.ctrlKey&&c==r||e.shiftKey&&e.keyCode==t||e.shiftKey&&e.keyCode==n||e.ctrlKey&&e.keyCode==t||e.ctrlKey&&c==a)return 0;var p=e||window.event,l=p.keyCode||p.which;l=String.fromCharCode(l);/[]|\./.test(l)||(p.returnValue=!1,p.preventDefault())}},90:function(e,t,n){"use strict";var a=n(54);n.d(t,"a",(function(){return a.Router}))}});