(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{124:function(e,t,n){"use strict";n.r(t);var a,c=n(4),r=n.n(c),s=n(2),i=n.n(s),o=n(28),u=n.n(o),l=n(21),p=n.n(l),d=n(88),f=n(92),m=n(43),h=n(120),b=n.n(h),v=n(62),g=n(96),w=n(238),E=n(58),O=n(55),j=n(91),k=n(45),x=n(227),N=n.n(x),y=(n(215),new N.a),T=function(e){var t=Object(m.b)(),n=t.account,s=t.active,o=t.chainId,l=t.library,h=Object(O.b)(),v=h.signer,w=(h.feeBalance,h.donutBalance,h.token),E=(h.tipping,Object(c.useState)(!1)),x=p()(E,2),N=x[0],T=x[1],D=Object(c.useState)(""),I=p()(D,2),P=I[0],R=I[1],F=Object(c.useState)(e.contentId),L=p()(F,2),_=L[0],A=L[1],B=Object(c.useState)(e.recipient||""),J=p()(B,2),q=J[0],K=J[1],W=Object(c.useState)(e.address),z=p()(W,2),G=z[0],H=z[1],M=Object(c.useState)(),Q=p()(M,2),V=Q[0],X=Q[1],Y=Object(c.useState)("1,000"),Z=p()(Y,2),$=Z[0],ee=Z[1],te=Object(c.useState)(!1),ne=p()(te,2),ae=ne[0],ce=ne[1],re=Object(c.useState)(""),se=p()(re,2),ie=se[0],oe=se[1],ue=Object(c.useRef)(null),le=Object(c.useState)(!0),pe=p()(le,2),de=pe[0],fe=pe[1];function me(){R(""),A(""),oe(""),K(""),ue&&ue.current&&ue.current.focus()}Object(c.useEffect)((function(){q&&R(e.recipient)}),[]),Object(c.useEffect)((function(){if(P){var e="",t=0;try{var n=new URL(P).pathname.split("/").filter((function(e){return!!e}));6===n.length?(e=n[5],t=1):5===n.length?(e=n[3],t=3):2===n.length&&["u","user"].includes(n[0])?K(n[1]):he(P)}catch(c){P.includes("/")?de||he(P):(clearTimeout(a),a=setTimeout((function(){return Object(j.d)(P).then((function(e){e?K(P):de||he(P)}))}),250))}[1,3].includes(t)&&A("t".concat(t,"_").concat(e))}}),[P]);var he=function(e){alert("".concat(e," could not be identified as a Reddit post, comment, or user.")),R("")};function be(){return ve.apply(this,arguments)}function ve(){return(ve=u()(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("checking approval"),e.next=3,w.allowance(n,k.b[o].tipping);case 3:t=e.sent,console.log("allowance",t),ce(t.gte(Object(g.b)($.replace(/,/g,""))));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){function e(){return(e=u()(i.a.mark((function e(){var t,n,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.b)("https://www.reddit.com/api/info.json?id=".concat(_));case 2:t=e.sent,n=t.data.children[0],a=n.kind,c=n.data,K(c.author),"t3"===a?oe(c.title):"t1"===a&&oe(c.body);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}_?function(){e.apply(this,arguments)}():oe("")}),[_]),Object(c.useEffect)((function(){if(!q)return H(""),void X("");function e(){return(e=u()(i.a.mark((function e(){var t,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.b)("https://old.reddit.com/user/".concat(q,"/about.json"));case 2:if(t=e.sent,!t.error){e.next=8;break}return R(""),K(""),e.abrupt("return");case 8:return(n=Object(j.c)({username:q}))&&!G&&H(n.address),e.next=12,y.getPublicAddress({verifier:"reddit",verifierId:q});case 12:a=e.sent,X(a);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}fe(!_),function(){e.apply(this,arguments)}()}),[q]),Object(c.useEffect)((function(){w?be():ce(!1)}),[w,$]);var ge,we,Ee=Object(c.useState)(!0),Oe=p()(Ee,2);Oe[0],Oe[1];G?(ge=G,we=r.a.createElement("span",{className:"address-logo donut",style:{marginLeft:".25em"},title:"Using donut registered address for ".concat(q," (").concat(ge,")")},"🍩")):V?(ge=V,we=r.a.createElement("img",{className:"address-logo torus",src:"/torus_logo.png",alt:"Torus Logo",title:"Using Tor.us address for ".concat(q," (").concat(ge,")")})):we=r.a.createElement("span",{className:"address-logo wait"});var je,ke,xe,Ne=N||!$||!ge,ye=b()("complete cute-pink-btn",{disabled:Ne});return je=s?100===o?ae?r.a.createElement("div",{className:ye,onClick:function(){return function(e,t,n,a,c,r,s){return S.apply(this,arguments)}(v,o,"DONUT",ge,$,_,T)}},"Send Tip"):r.a.createElement("div",{className:ye,onClick:function(){return function(e,t,n){return C.apply(this,arguments)}(w.connect(v),k.b[o].tipping,T).then(be)}},"Approve"):r.a.createElement("div",{className:ye,onClick:function(){return function(e,t){return U.apply(this,arguments)}(l,T)}},"Use xDai"):r.a.createElement("div",{className:"complete cute-pink-btn disabled"},"Connect Wallet First"),q&&(ke=r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{style:{textDecoration:"none"},target:"blank",href:"https://www.reddit.com/u/".concat(q)},"/u/",q),r.a.createElement(d.a,{className:"cancel",icon:f.a,onClick:me}))),xe=de?r.a.createElement("div",{className:"cute-input target-container"},r.a.createElement("span",{className:"user-prefix",onClick:function(){return ue.current.focus()}},"/u/"),r.a.createElement("input",{ref:ue,value:q,onChange:function(e){var t=e.target.value;clearTimeout(a),a=setTimeout((function(){return Object(j.d)(t).then((function(e){return e&&K(t)}))}),250)},placeholder:"vitalik"}),we):r.a.createElement("div",{className:"cute-input target-container"},r.a.createElement("input",{ref:ue,value:P,onChange:function(e){return R(e.target.value)},onKeyPress:j.e,placeholder:"Paste a reddit post here"})),r.a.createElement("div",{className:"tipping-interface box"},r.a.createElement("div",{className:"tip-token"},"🍩"),r.a.createElement("div",{className:"cute-header tip-info"},ke?r.a.createElement("span",null,"Tipping ",ke):"Choose a ".concat(de?"User":"Post"," to Tip")),r.a.createElement("div",{className:"tip-token-info"},ke?"EthTrader DONUTs":r.a.createElement("span",null,"Or ",r.a.createElement("a",{onClick:function(){return me()||fe(!de)}},"click here")," to tip a ",de?"post":"user")),de||!ie&&!q?xe:r.a.createElement("div",{className:"reddit-preview"},r.a.createElement("h3",{className:"author"},q," ",we),ie&&r.a.createElement("p",{className:"body"},ie)),r.a.createElement("div",{className:"cute-input quantity-container"},r.a.createElement("input",{value:$,onChange:function(e){return function(e){ee(Object(j.a)(e.replace(/,/g,"")))}(e.target.value)}}),r.a.createElement("div",{className:"token"},"DONUT")),je)};function C(){return(C=u()(i.a.mark((function e(t,n,a){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.prev=1,e.next=4,t.approve(n,E.a);case 4:return c=e.sent,e.next=7,c.wait();case 7:e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:a(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function S(){return(S=u()(i.a.mark((function e(t,n,a,c,r,s,o){var u,l,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=r.replace(/,/g,""),console.log(a,c,r,s),o(!0),u=k.b[n][a],l=new v.a(k.b[n].tipping,k.a.Tipping,t),e.prev=5,e.next=8,l.tip(c,Object(g.b)(r),u,Object(w.a)(s));case 8:return p=e.sent,e.next=11,p.wait();case 11:e.next=16;break;case 13:throw e.prev=13,e.t0=e.catch(5),e.t0;case 16:o(!1);case 17:case"end":return e.stop()}}),e,null,[[5,13]])})))).apply(this,arguments)}function U(){return(U=u()(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.prev=1,e.next=4,t.jsonRpcFetchFunc("wallet_addEthereumChain",[{chainId:"0x64",chainName:"xDai",nativeCurrency:{name:"xDai",symbol:"xDai",decimals:18},rpcUrls:["https://rpc.xdaichain.com/"],blockExplorerUrls:["https://blockscout.com/xdai/mainnet"]}]);case 4:e.sent,e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:n(!1);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}t.default=function(){var e,t=(e="","undefined"!=typeof window&&(e=window.location.search),new URLSearchParams(e));return r.a.createElement(T,{recipient:t.get("recipient"),address:t.get("address"),contentId:t.get("contentId")})}}}]);