(this["webpackJsonphashtester-base64"]=this["webpackJsonphashtester-base64"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(6),s=n.n(o),i=(n(12),n(5)),r=(n.p,n(13),n(7)),l=n(0);var d=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(""),s=Object(i.a)(o,2),d=s[0],u=s[1];return Object(l.jsx)("div",{className:"App",style:{width:"90%"},children:Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(l.jsx)("textarea",{style:{width:"90vw",height:"10vw",margin:"20px",resize:"none"},placeholder:"Enter a data you want to encode by BASE64",type:"text",onChange:function(e){var t;a(e.target.value),u((t=e.target.value,Object(r.a)(t))),console.log(d)},value:n}),Object(l.jsx)("button",{style:{width:"15vw",margin:"0px auto"},onClick:function(){a(""),u("")},children:"Clear"}),Object(l.jsxs)("div",{style:{width:"90vw",height:"5vw",margin:"20px",border:"1px solid whitesmoke",textAlign:"left",overflow:"auto"},children:[Object(l.jsx)("span",{children:"Result: "}),Object(l.jsx)("span",{className:"result",children:d})]}),Object(l.jsx)("button",{style:{width:"15vw",margin:"0px auto"},onClick:function(){var e=document.createRange();e.selectNode(document.querySelector(".result").childNodes[0]);var t=window.getSelection();t.removeAllRanges(),t.addRange(e),document.execCommand("copy"),t.removeRange(e)},children:"Copy"})]})})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),o(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),u()}},[[15,1,2]]]);
//# sourceMappingURL=main.17b006fb.chunk.js.map