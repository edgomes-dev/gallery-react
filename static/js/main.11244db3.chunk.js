(this.webpackJsonpgallery=this.webpackJsonpgallery||[]).push([[0],{37:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var r,a,c,i,s,o,u,d=t(0),p=t.n(d),b=t(27),j=t.n(b),m=(t(37),t(19)),l=t(1),g=t.n(l),x=t(6),O=t(9),f=t(10),h=t(11),v=h.a.div(r||(r=Object(f.a)(["\n    background-color: #27282F;\n    color: #FFF;\n    min-height: 100vh;\n"]))),y=h.a.div(a||(a=Object(f.a)(["\n    margin: auto;\n    max-width: 980px;\n    padding: 30px 0;\n"]))),k=h.a.h1(c||(c=Object(f.a)(["\n    margin: 0;\n    padding: 0;\n    text-align: center;\n    margin-bottom: 30px;\n"]))),F=h.a.div(i||(i=Object(f.a)(["\n    text-align: center;\n\n    .emoji \n    {\n        font-size: 50px;\n        margin-bottom: 20px;\n    }\n"]))),w=h.a.div(s||(s=Object(f.a)(["\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 10px;\n"]))),S=h.a.form(o||(o=Object(f.a)(["\n    background-color: #3D3F43;\n    padding: 15px;\n    border-radius: 10px;\n    margin-bottom: 30px;\n\n    input[type=submit] \n    {\n        background-color: #756DF4;\n        border: 0;\n        color: #FFF;\n        padding: 8px 16px;\n        font-size: 15px;\n        border-radius: 10px;\n        margin: 0 20px;\n        cursor: pointer;\n\n        &:hover\n        {\n            opacity: .9;\n        }\n    }\n"]))),D=t(31),I=t(12),C=Object(D.a)({apiKey:"AIzaSyChZ7RKd1RSLva4qqUWIjjnxm7C2_LaVTg",authDomain:"d5reactgallery-6b20d.firebaseapp.com",projectId:"d5reactgallery-6b20d",storageBucket:"d5reactgallery-6b20d.appspot.com",messagingSenderId:"148821946314",appId:"1:148821946314:web:c74b2d29b8716c15d8a933"}),E=Object(I.b)(C),T=t(45),z=function(){var e=Object(x.a)(g.a.mark((function e(){var n,t,r,a,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],t=Object(I.d)(E,"images"),e.next=4,Object(I.c)(t);case 4:r=e.sent,e.t0=g.a.keys(r.items);case 6:if((e.t1=e.t0()).done){e.next=14;break}return a=e.t1.value,e.next=10,Object(I.a)(r.items[a]);case 10:c=e.sent,n.push({name:r.items[a].name,url:c}),e.next=6;break;case 14:return e.abrupt("return",n);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(x.a)(g.a.mark((function e(n){var t,r,a,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!["image/jpeg","image/jpg","image/png"].includes(n.type)){e.next=12;break}return t=Object(T.a)(),r=Object(I.d)(E,"images/".concat(t)),e.next=5,Object(I.e)(r,n);case 5:return a=e.sent,e.next=8,Object(I.a)(a.ref);case 8:return c=e.sent,e.abrupt("return",{name:a.ref.name,url:c});case 12:return e.abrupt("return",new Error("Tipo de arquivo n\xe3o permitido."));case 13:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),q=h.a.div(u||(u=Object(f.a)(["\n    background-color: #3D3F43;\n    border-radius: 10px;\n    padding: 10px;\n\n    img\n    {\n        max-width: 100%;\n        display: block;\n        margin-bottom: 10px;\n        border-radius: 10px;\n    }\n"]))),B=t(3),N=function(e){var n=e.url,t=e.name;return Object(B.jsxs)(q,{children:[Object(B.jsx)("img",{src:n,alt:t}),t]})};function P(){var e=Object(d.useState)(!1),n=Object(O.a)(e,2),t=n[0],r=n[1],a=Object(d.useState)(!1),c=Object(O.a)(a,2),i=c[0],s=c[1],o=Object(d.useState)([]),u=Object(O.a)(o,2),p=u[0],b=u[1];Object(d.useEffect)((function(){(function(){var e=Object(x.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.t0=b,e.next=4,z();case 4:e.t1=e.sent,(0,e.t0)(e.t1),s(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var j=function(){var e=Object(x.a)(g.a.mark((function e(n){var t,a,c,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t=new FormData(n.currentTarget),!((a=t.get("image"))&&a.size>0)){e.next=10;break}return r(!0),e.next=7,L(a);case 7:c=e.sent,r(!1),c instanceof Error?alert("".concat(c.name," - ").concat(c.message)):((i=Object(m.a)(p)).push(c),b(i));case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(B.jsx)(v,{children:Object(B.jsxs)(y,{children:[Object(B.jsx)(k,{children:"Galeria de Fotos"}),Object(B.jsxs)(S,{method:"POST",onSubmit:j,children:[Object(B.jsx)("input",{type:"file",name:"image"}),Object(B.jsx)("input",{type:"submit",value:"Enviar"}),t&&"Enviando..."]}),i&&Object(B.jsxs)(F,{children:[Object(B.jsx)("div",{className:"emoji",children:"\ud83e\udd1a"}),Object(B.jsx)("div",{children:"Carregando..."})]}),!i&&p.length>0&&Object(B.jsx)(w,{children:p.map((function(e,n){return Object(B.jsx)(N,{url:e.url,name:e.name},n)}))}),!i&&0===p.length&&Object(B.jsxs)(F,{children:[Object(B.jsx)("div",{className:"emoji",children:"\ud83d\ude25"}),Object(B.jsx)("div",{children:"N\xe3o tem fotos cadastradas !"})]})]})})}var J=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,46)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),r(e),a(e),c(e),i(e)}))};j.a.render(Object(B.jsx)(p.a.StrictMode,{children:Object(B.jsx)(P,{})}),document.getElementById("root")),J()}},[[43,1,2]]]);
//# sourceMappingURL=main.11244db3.chunk.js.map