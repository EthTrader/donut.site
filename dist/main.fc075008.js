!function(e){function t(t){for(var a,i,o=t[0],u=t[1],p=t[2],c=0,y=[];c<o.length;c++)i=o[c],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&y.push(r[i][0]),r[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);for(l&&l(t);y.length;)y.shift()();return s.push.apply(s,p||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={5:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var s,o=document.createElement("script");o.charset="utf-8",o.timeout=120,i.nc&&o.setAttribute("nonce",i.nc),o.src=function(e){return i.p+"templates/"+({1:"__react_static_root__/src/pages/404",2:"__react_static_root__/src/pages/about",3:"__react_static_root__/src/pages/index",4:"__react_static_root__/src/pages/tip"}[e]||e)+"."+{1:"6ea98661",2:"45e6d023",3:"462de917",4:"869ef34c"}[e]+".js"}(e);var u=new Error;s=function(t){o.onerror=o.onload=null,clearTimeout(p);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",u.name="ChunkLoadError",u.type=a,u.request=s,n[1](u)}r[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:o})}),12e4);o.onerror=o.onload=s,document.head.appendChild(o)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="https://www.donut.finance/",i.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var p=0;p<o.length;p++)t(o[p]);var l=u;s.push([115,0,6]),n()}({100:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"uint256","name":"chainId","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[],"name":"_chainId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes","name":"methodName","type":"bytes"},{"internalType":"address","name":"relayAuthority","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"uint256","name":"relayerRewardTokens","type":"uint256"},{"internalType":"uint256","name":"expires","type":"uint256"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"burnSignature","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"contractName","type":"string"},{"internalType":"string","name":"version","type":"string"},{"internalType":"uint256","name":"chainId","type":"uint256"},{"internalType":"address","name":"verifyingContract","type":"address"}],"name":"getEIP712DomainHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"getLavaDomainTypehash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes","name":"methodName","type":"bytes"},{"internalType":"address","name":"relayAuthority","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"uint256","name":"relayerRewardTokens","type":"uint256"},{"internalType":"uint256","name":"expires","type":"uint256"},{"internalType":"uint256","name":"nonce","type":"uint256"}],"name":"getLavaPacketHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"getLavaPacketTypehash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes","name":"methodName","type":"bytes"},{"internalType":"address","name":"relayAuthority","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"uint256","name":"relayerRewardTokens","type":"uint256"},{"internalType":"uint256","name":"expires","type":"uint256"},{"internalType":"uint256","name":"nonce","type":"uint256"}],"name":"getLavaTypedDataHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"digest","type":"bytes32"}],"name":"signatureBurnStatus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes","name":"methodName","type":"bytes"},{"internalType":"address","name":"relayAuthority","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"uint256","name":"relayerRewardTokens","type":"uint256"},{"internalType":"uint256","name":"expires","type":"uint256"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"signatureIsValid","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes","name":"methodName","type":"bytes"},{"internalType":"address","name":"relayAuthority","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"uint256","name":"relayerRewardTokens","type":"uint256"},{"internalType":"uint256","name":"expires","type":"uint256"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"transferAndCallWithSignature","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes","name":"methodName","type":"bytes"},{"internalType":"address","name":"relayAuthority","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"uint256","name":"relayerRewardTokens","type":"uint256"},{"internalType":"uint256","name":"expires","type":"uint256"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"transferTokensWithSignature","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]')},101:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"bytes32","name":"contentId","type":"bytes32"}],"name":"Tip","type":"event"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_token","type":"address"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"receiveTransfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_token","type":"address"},{"internalType":"bytes32","name":"_contentId","type":"bytes32"}],"name":"tip","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},115:function(e,t,n){n(116),n(169),e.exports=n(177)},117:function(e,t,n){"use strict";n.r(t);var a=n(94),r=[{location:"__react_static_root__/node_modules/react-static-plugin-source-filesystem",plugins:[],hooks:{}},{location:"__react_static_root__/node_modules/react-static-plugin-reach-router",plugins:[],hooks:n.n(a)()({})},{location:"__react_static_root__/node_modules/react-static-plugin-sitemap/dist",plugins:[],hooks:{}},{location:"__react_static_root__/node_modules/react-static-plugin-sass",plugins:[],hooks:{}},{location:"__react_static_root__/",plugins:[],hooks:{}}];t.default=r},170:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"notFoundTemplate",(function(){return _}));var a=n(28),r=n.n(a),s=n(29),i=n.n(s),o=n(4),u=n.n(o),p=n(30),l=n.n(p);Object(p.setHasBabelPlugin)();var c={loading:function(){return null},error:function(e){return console.error(e.error),u.a.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.")},ignoreBabelRename:!0},y=l()(i()({id:"__react_static_root__/src/pages/404.js",load:function(){return Promise.all([n.e(1).then(n.bind(null,110))]).then((function(e){return e[0]}))},path:function(){return r.a.join(e,"__react_static_root__/src/pages/404.js")},resolve:function(){return 110},chunkName:function(){return"__react_static_root__/src/pages/404"}}),c);y.template="__react_static_root__/src/pages/404.js";var d=l()(i()({id:"__react_static_root__/src/pages/about.js",load:function(){return Promise.all([n.e(2).then(n.bind(null,111))]).then((function(e){return e[0]}))},path:function(){return r.a.join(e,"__react_static_root__/src/pages/about.js")},resolve:function(){return 111},chunkName:function(){return"__react_static_root__/src/pages/about"}}),c);d.template="__react_static_root__/src/pages/about.js";var m=l()(i()({id:"__react_static_root__/src/pages/index.js",load:function(){return Promise.all([n.e(3).then(n.bind(null,112))]).then((function(e){return e[0]}))},path:function(){return r.a.join(e,"__react_static_root__/src/pages/index.js")},resolve:function(){return 112},chunkName:function(){return"__react_static_root__/src/pages/index"}}),c);m.template="__react_static_root__/src/pages/index.js";var f=l()(i()({id:"__react_static_root__/src/pages/tip.js",load:function(){return Promise.all([Promise.all([n.e(0),n.e(4)]).then(n.bind(null,113))]).then((function(e){return e[0]}))},path:function(){return r.a.join(e,"__react_static_root__/src/pages/tip.js")},resolve:function(){return 113},chunkName:function(){return"__react_static_root__/src/pages/tip"}}),c);f.template="__react_static_root__/src/pages/tip.js",t.default={"__react_static_root__/src/pages/404.js":y,"__react_static_root__/src/pages/about.js":d,"__react_static_root__/src/pages/index.js":m,"__react_static_root__/src/pages/tip.js":f};var _="__react_static_root__/src/pages/404.js"}.call(this,"/")},172:function(e,t,n){var a={".":40,"./":40,"./index":40,"./index.js":40};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id=172},181:function(e,t,n){"use strict";n.r(t),function(e){var a=n(4),r=n.n(a),s=n(63),i=n.n(s),o=n(106),u=(n(186),n(57));if(t.default=u.a,"undefined"!=typeof document){var p=document.getElementById("root"),l=p.hasChildNodes()?i.a.hydrate:i.a.render,c=function(e){l(r.a.createElement(o.AppContainer,null,r.a.createElement(e,null)),p)};c(u.a),e&&e.hot&&e.hot.accept("./App",(function(){c(u.a)}))}}.call(this,n(182)(e))},187:function(e,t){},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a={IERC20:n(99),LavaWallet:n(100),Tipping:n(101)},r=n(52)},52:function(e){e.exports=JSON.parse('{"1":{"DONUT":"0xC0F9bD5Fa5698B6505F643900FFA515Ea5dF54A9","tipping":"0xE3b8Ff1EAd55Bc511127CfE90F5cEdBB90C401b4"},"100":{"lavaWallet":"0x56398FdFD684b40B17B09BB1Cf826ED93A38C489","DONUT":"0x524B969793a64a602342d89BC2789D43a016B13A","tipping":"0xF40e98033eb722CC6B4a64F7b37737d56eCB17EF"}}')},55:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return _}));var a=n(3),r=n.n(a),s=n(32),i=n.n(s),o=n(21),u=n.n(o),p=n(4),l=n.n(p),c=n(62),y=n(58),d=n(45),m=Object(p.createContext)();function f(e){var t,n,a,s,o,f,_,b,T,g,h,v,k,w,x,j,E,O,N,M,S,C,B,P,A,F=e.web3React,R=e.children,D=(n=(t=F).account,a=t.active,s=t.library,o=t.chainId,f=Object(p.useState)(null),_=u()(f,2),b=_[0],T=_[1],g=Object(p.useState)(y.d),h=u()(g,2),v=h[0],k=h[1],w=Object(p.useState)(y.d),x=u()(w,2),j=x[0],E=x[1],O=Object(p.useState)(null),N=u()(O,2),M=N[0],S=N[1],C=Object(p.useState)(null),B=u()(C,2),P=B[0],A=B[1],Object(p.useEffect)((function(){if(!a)return T(null),k(y.d),E(y.d),S(null),void A(null);T(s.getSigner());var e=new c.a(d.b[o.toString()].DONUT,d.a.IERC20,s),t=new c.a(d.b[o.toString()].tipping,d.a.Tipping,s);function u(){return(u=i()(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=k,t.next=3,s.getBalance(n);case 3:return t.t1=t.sent,(0,t.t0)(t.t1),t.t2=E,t.next=8,e.balanceOf(n);case 8:t.t3=t.sent,(0,t.t2)(t.t3);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}S(e),A(t),n&&function(e){u.apply(this,arguments)}(n)}),[a,o]),{signer:b,feeBalance:v,donutBalance:j,token:M,tipping:P});return l.a.createElement(m.Provider,{value:D},R)}var _=function(){return Object(p.useContext)(m)}},57:function(e,t,n){"use strict";var a=n(4),r=n.n(a),s=(n(109),n(219)),i=n(44),o=n(43),u=n(55),p=n(86),l=function(){return r.a.createElement("div",null,"This is a dynamic page! It will not be statically exported, but is available at runtime")},c=n(102),y=n(104),d=n(107),m=n(65),f=n.n(m),_=n(89),b=n(93),T=(n(204),function(e){var t=e.connect;return r.a.createElement("div",{className:"connect-wallet-button cute-pink-btn",onClick:t},"Connect Wallet")}),g=function(e){var t=e.account,n=e.donuts,a=e.disconnect,s=t.substr(0,6)+"..."+t.substr(t.length-4);return r.a.createElement("div",{className:"wallet-details"},r.a.createElement("div",{className:"left-side light-background box"},r.a.createElement("div",{className:"donut-bal"},Object(_.c)(Object(b.a)(n.donutBalance)),"  🍩"),r.a.createElement("div",{className:"address-container"},r.a.createElement("div",{className:"short-address"},s),r.a.createElement(f.a,{diameter:18,seed:Object(m.jsNumberForAddress)(t)}))),r.a.createElement("div",{className:"light-background close-button button box"},r.a.createElement(c.a,{className:"disconnect",onClick:a,icon:y.a})))},h=function(){var e=Object(u.b)(),t=Object(o.b)(),n=t.account,a=t.active,s=t.activate,i=t.deactivate;return r.a.createElement("div",{className:"wallet-info"},a?r.a.createElement(g,{account:n,donuts:e,disconnect:i}):r.a.createElement(T,{connect:function(){s(new d.a,void 0,!0)}}))};n(205);function v(){return r.a.createElement(i.Root,null,r.a.createElement("div",{className:"app"},r.a.createElement("nav",null,r.a.createElement(h,null)),r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("em",null,"Loading...")},r.a.createElement(p.b,null,r.a.createElement(l,{path:"dynamic"}),r.a.createElement(i.Routes,{path:"*"})))))}function k(e){var t=e.children,n=Object(o.b)();return r.a.createElement(u.a,{web3React:n},t)}function w(e,t){return new s.a(e)}Object(i.addPrefetchExcludes)(["dynamic"]);t.a=function(){return r.a.createElement(o.a,{getLibrary:w},r.a.createElement(k,null,r.a.createElement(v,null)))}},86:function(e,t,n){"use strict";var a=n(53);n.d(t,"a",(function(){return a.Link})),n.d(t,"b",(function(){return a.Router}))},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return l}));var a=n(3),r=n.n(a),s=n(32),i=n.n(s),o="https://cors.bridged.cc",u=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",").replace(/[^0-9^,^\.]+/g,"")},p=function(e){var t=NaN;return e>0&&(e=Math.floor(e)),t=e<1e5?u(e):e<1e6?Math.floor(e/1e3)+"K":Math.floor(e/1e5)/10+"M",Number.isNaN(t)?"0":t};function l(){return c.apply(this,arguments)}function c(){return(c=i()(r.a.mark((function e(){var t,n,a=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e.next=3,fetch("".concat(o,"/").concat(t));case 3:return n=e.sent,e.abrupt("return",n.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},99:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tokenOwner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"remaining","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')}});