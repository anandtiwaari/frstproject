(this.webpackJsonpchaalu=this.webpackJsonpchaalu||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(4),r=a.n(l),o=(a(9),a(2)),s=(a(10),a(0)),i=function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode," "),children:Object(s.jsxs)("div",{className:"container-fluid",style:{color:"light"===e.mode?"black":"white"},children:[Object(s.jsx)("a",{className:"navbar-brand",href:"#",children:"newProj"}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(s.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",style:{color:"light"===e.mode?"black":"white"},children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(s.jsx)("li",{className:"nav-item"}),Object(s.jsx)("li",{className:"nav-item"})]}),Object(s.jsx)("form",{className:"d-flex",children:Object(s.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(s.jsx)("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,id:"flexSwitchCheckDefault"}),Object(s.jsx)("label",{className:"form-check-label",for:"flexSwitchCheckDefault",style:{color:"light"===e.mode?"black":"white"},children:e.modenew})]})})]})]})})})},b=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1];return Object(s.jsxs)("div",{style:{color:"light"===e.mode?"black":"white"},children:[Object(s.jsx)("h1",{children:e.headings}),Object(s.jsx)("div",{className:"mb-3"}),Object(s.jsx)("div",{className:"mb-3",children:Object(s.jsx)("textarea",{className:"form-control alag",style:{backgroundColor:"light"===e.mode?"white":"grey",color:"light"===e.mode?"black":"white",cursor:"pointer"},id:"exampleFormControlTextarea1",rows:"10",onChange:function(e){l(e.target.value)},value:c})}),Object(s.jsx)("button",{className:"btn btn-primary mx-1",disabled:0===c.length,onClick:function(){l(c.toUpperCase())},children:"Convert ToUpperCase"}),Object(s.jsx)("button",{className:"btn btn-primary mx-1",disabled:0===c.length,onClick:function(){l(c.toLowerCase())},children:"Convert ToLowerCase"}),Object(s.jsx)("button",{className:"btn btn-primary mx-1",disabled:0===c.length,onClick:function(){l("")},children:"Clear"}),Object(s.jsx)("button",{className:"btn btn-primary mx-1",disabled:0===c.length,onClick:function(){var e=document.querySelector(".alag");e.select(),navigator.clipboard.writeText(e.value),document.getSelection().removeAllRanges()},children:"CopyText"}),Object(s.jsxs)("p",{children:[c.split(" ").filter((function(e){return 0!==e.length})).length," Words and  ",c.length," characteres"]}),Object(s.jsx)("h1",{children:"Preview"}),Object(s.jsx)("p",{children:c})]})};var d=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("Enable Dark Mode"),r=Object(o.a)(l,2),d=r[0],j=r[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(i,{gajab:"ekk number lala maujj kardii",modenew:d,toggleMode:function(){"light"===a?(c("dark"),document.body.style.backgroundColor="#0c0834",j("Enable Light Mode")):(c("light"),document.body.style.backgroundColor="white",j("Enable Dark Mode"))},mode:a}),Object(s.jsx)("div",{className:"container",children:Object(s.jsx)(b,{headings:"Enter the Text here",modenew:d,mode:a})})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),l(e),r(e)}))};r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(d,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.6a8a79bd.chunk.js.map