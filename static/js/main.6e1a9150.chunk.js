(this.webpackJsonphashtester=this.webpackJsonphashtester||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var i=n(2),a=n.n(i),c=n(10),s=n.n(c),o=(n(15),n(6)),r=(n.p,n(16),n(1)),l=n(18);var h=function(){var e=Object(i.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(""),s=Object(o.a)(c,2),h=s[0],d=s[1];return Object(r.jsx)("div",{className:"App",style:{width:"90%"},children:Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(r.jsx)("textarea",{style:{width:"99%",height:"200px",margin:"20px",resize:"none"},placeholder:"Enter a data you want to encode by SHA256",type:"text",onChange:function(e){var t;a(e.target.value),d((t=e.target.value,l.sha256().update(t+"codestates").digest("hex"))),console.log(h)},value:n}),Object(r.jsx)("button",{style:{width:"100%",margin:"0px 20px"},onClick:function(){a(""),d("")},children:"Clear"}),Object(r.jsx)("div",{style:{width:"100%",height:"20px",margin:"20px",border:"1px solid whitesmoke",textAlign:"left"},children:"Result: "+h})]})})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),i(e),a(e),c(e),s(e)}))};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(h,{})}),document.getElementById("root")),d()}},[[26,1,2]]]);
//# sourceMappingURL=main.6e1a9150.chunk.js.map