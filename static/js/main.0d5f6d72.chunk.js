(this["webpackJsonpcar-configurator"]=this["webpackJsonpcar-configurator"]||[]).push([[0],{34:function(e,c,n){},35:function(e,c,n){},56:function(e,c,n){},57:function(e,c,n){},66:function(e,c,n){},67:function(e,c,n){},68:function(e,c,n){},69:function(e,c,n){},70:function(e,c,n){},71:function(e,c,n){},72:function(e,c,n){},73:function(e,c,n){},74:function(e,c,n){"use strict";n.r(c);var t=n(1),r=n.n(t),s=n(26),a=n.n(s),i=(n(34),n(35),n(3)),j=n(2),d=n(10),l=n(0),o=Object(t.createContext)(),b=function(e){var c=e.children,n=Object(t.useState)(""),r=Object(d.a)(n,2),s=r[0],a=r[1],i=Object(t.useState)({brand:"",model:"",engine:""}),j=Object(d.a)(i,2),b=j[0],h=j[1];return Object(l.jsx)(o.Provider,{value:{data:s,setData:a,carConfig:b,setCarConfing:h},children:c})},h=n(27),O=n.n(h),u=n(7),m=n(12),x=(n(56),function(e,c){var n=e.name,t=e.handler,r=e.brandInfo,s=e.image,a=e.engines,i=a.map((function(e){return Object(l.jsxs)("li",{children:[e.engineCapacity,Object(l.jsxs)("span",{children:[" ",e.fuelType]})]},"".concat(r.brand).concat(e.power))})),j=a.map((function(e){return e.price})).map((function(e){return parseInt(e)})),d=Math.min.apply(Math,Object(m.a)(j));return Object(l.jsxs)("div",{className:"model__card",onClick:t,children:[Object(l.jsxs)("div",{className:"modelcard__header",children:[Object(l.jsx)("h2",{children:n}),Object(l.jsx)("img",{src:r.logo,alt:"logo-".concat(r.brand)})]}),Object(l.jsx)("img",{src:s,alt:n}),Object(l.jsxs)("div",{className:"modelcard__body",children:[Object(l.jsxs)("div",{className:"pricing__container",children:[Object(l.jsx)("p",{children:"Prices start from"}),Object(l.jsx)("span",{children:d})]}),Object(l.jsx)("strong",{children:"Dost\u0119pne silniki"}),Object(l.jsx)("ul",{children:i})]})]},n)}),p=(n(57),n.p+"static/media/linkedin.7defd339.svg"),f=n.p+"static/media/github.e0df113a.svg",g=function(){var e=Object(t.useState)(!1),c=Object(d.a)(e,2),n=c[0],r=c[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"hamburger",onClick:function(){return r(!n)},children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]}),n?Object(l.jsx)("div",{className:"menu__wrapper",children:Object(l.jsxs)("div",{className:"menu__container",children:[Object(l.jsx)(i.b,{to:"/",children:Object(l.jsx)("p",{children:"Start from beginning"})}),Object(l.jsx)("a",{href:"",children:Object(l.jsx)("p",{children:"About this project"})}),Object(l.jsxs)("div",{className:"menu__socials",children:[Object(l.jsx)("a",{href:"https://www.linkedin.com/in/dawid-p\u0142otek-b54a32204/",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{src:p,alt:"linked-in"})}),Object(l.jsx)("a",{target:"_blank",href:"https://github.com/dplotek",rel:"noreferrer",children:Object(l.jsx)("img",{src:f,alt:"github"})})]})]})}):""]})},_=(n(66),function(){var e=Object(t.useContext)(o),c=e.carConfig,n=e.setCarConfing,r=c.brand.models,s=r.map((function(e,t){return Object(l.jsx)(i.b,{to:"/configurator",children:Object(l.jsx)(x,{name:e.name,image:e.img,brandInfo:c.brand,engines:e.engines,handler:function(){return function(e){n((function(c){return Object(u.a)(Object(u.a)({},c),{},{model:r[e],engine:r[e].engines[0]})}))}(t)}},"model".concat(e.name))},e.id)}));return Object(l.jsxs)("div",{className:"models__wrapper",children:[Object(l.jsx)(g,{}),Object(l.jsx)("h1",{children:"Choose model"}),Object(l.jsx)("div",{className:"models__container",children:s}),Object(l.jsx)(i.b,{to:"/brands",children:Object(l.jsx)("button",{children:"Back"})})]})}),v=(n(67),n.p+"static/media/Homepage.93dc0e98.png"),N=function(){return Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsxs)("div",{className:"wrapper__text",children:[Object(l.jsx)("h1",{children:"Configure your dream car"}),Object(l.jsx)("p",{children:"Choose your dream car from sixteen different models and customize to your preferences. To meet your expectations, we have prepared cars of four brands in four segment versions fuel-powered or hybrid."}),Object(l.jsx)(i.b,{to:"/brands",children:Object(l.jsx)("button",{className:"primary",children:"Start"})}),Object(l.jsx)(i.b,{to:"/",children:Object(l.jsx)("button",{className:"secondary",children:"About this project"})})]}),Object(l.jsx)("div",{className:"wrapper__img",children:Object(l.jsx)("img",{src:v,alt:"3-cars"})}),Object(l.jsx)("footer",{children:Object(l.jsxs)("div",{className:"social__container",children:[Object(l.jsx)("a",{href:"https://www.linkedin.com/in/dawid-p\u0142otek-b54a32204/",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{src:p,alt:"linkedin"})}),Object(l.jsx)("a",{target:"_blank",href:"https://github.com/dplotek",rel:"noreferrer",children:Object(l.jsx)("img",{src:f,alt:"github"})})]})})]})},C=(n(68),function(e){var c=e.logo,n=e.name,t=e.handler,r=e.models,s=r.map((function(e){return Object(l.jsx)("li",{children:e.name},e.name)})),a=r.map((function(e){return e.engines.map((function(e){return e.price}))})).map((function(e){return parseInt(e)})),i=Math.min.apply(Math,Object(m.a)(a));return Object(l.jsxs)("div",{className:"brand",onClick:t,children:[Object(l.jsxs)("div",{className:"brand__header",children:[Object(l.jsx)("h2",{children:n}),Object(l.jsx)("img",{src:c,alt:"".concat(n,"-logo")})]}),Object(l.jsxs)("div",{className:"brand__body",children:[Object(l.jsxs)("div",{className:"brand__pricing",children:[Object(l.jsx)("p",{children:"Prices start from"}),Object(l.jsx)("span",{children:i})]}),Object(l.jsx)("strong",{children:"Available models:"}),Object(l.jsx)("ul",{children:s})]})]},n)}),y=(n(69),function(){var e=Object(t.useContext)(o),c=e.data,n=e.setCarConfing,r=c.map((function(e,t){var r=e.logo,s=e.brand,a=e.models;return Object(l.jsx)(i.b,{to:"/models",children:Object(l.jsx)(C,{logo:r,name:s,handler:function(){return function(e){n((function(n){return Object(u.a)(Object(u.a)({},n),{},{brand:c[e]})}))}(t)},models:a})},t)}));return Object(l.jsxs)("div",{className:"brands__wrapper",children:[Object(l.jsx)(g,{}),Object(l.jsx)("h1",{children:"Choose brand"}),Object(l.jsx)("div",{className:"brands__container",children:r}),Object(l.jsx)(i.b,{to:"/",children:Object(l.jsx)("button",{className:"tetiary",children:"Back"})})]})}),k=(n(70),function(e){var c=e.capacity,n=e.fuel,t=e.fueltype,r=e.handler;return Object(l.jsxs)("div",{className:"engine__card",onClick:r,children:[Object(l.jsxs)("p",{children:[t," "]}),Object(l.jsx)("img",{src:n,alt:t}),Object(l.jsxs)("h2",{children:[c," cc"]})]})}),w=(n(71),n(72),function(){var e=Object(t.useContext)(o).carConfig,c=e.brand,n=c.brand,r=c.logo,s=e.engine,a=s.engineCapacity,i=s.fuelType,j=s.power,d=s.fuelConsumption,b=s.to100,h=s.topSpeed,O=s.price;return Object(l.jsxs)("div",{className:"card__body",children:[Object(l.jsxs)("div",{className:"card__header",children:[Object(l.jsx)("h2",{children:n}),Object(l.jsx)("img",{src:r,alt:""})]}),Object(l.jsxs)("div",{className:"card__stats",children:[Object(l.jsxs)("div",{className:"card__tile",children:[Object(l.jsx)("p",{children:"Cubic Capacity"}),Object(l.jsxs)("span",{children:[a," cc"]})]}),Object(l.jsxs)("div",{className:"card__tile",children:[Object(l.jsx)("p",{children:"Fuel Type"}),Object(l.jsx)("span",{children:i})]}),Object(l.jsxs)("div",{className:"card__tile",children:[Object(l.jsx)("p",{children:"Power"}),Object(l.jsxs)("span",{children:[j," hp"]})]}),Object(l.jsxs)("div",{className:"card__tile",children:[Object(l.jsx)("p",{children:"Fuel Consumption"}),Object(l.jsxs)("span",{children:[d,"/100km"]})]}),Object(l.jsxs)("div",{className:"card__tile",children:[Object(l.jsx)("p",{children:"0-100"}),Object(l.jsxs)("span",{children:[b," s"]})]}),Object(l.jsxs)("div",{className:"card__tile",children:[Object(l.jsx)("p",{children:"Top speed"}),Object(l.jsxs)("span",{children:[h," km/h"]})]})]}),Object(l.jsxs)("div",{className:"card__price",children:[Object(l.jsx)("p",{children:"Price"}),Object(l.jsxs)("span",{children:[O," z\u0142"]})]})]})}),S=n.p+"static/media/petrol-icon.57542a2c.svg",T=n.p+"static/media/diesel-icon.ae7146f0.svg",P=n.p+"static/media/electric-icon.2d0dbf5f.svg",F=function(){var e=Object(t.useContext)(o),c=e.carConfig,n=e.setCarConfing,r=c.model.engines,s={Petrol:S,Diesel:T,Hybrid:P},a=r.map((function(e,c){return Object(l.jsx)(k,{capacity:e.engineCapacity,fuel:s[e.fuelType],fueltype:e.fuelType,handler:function(){return function(e){n((function(c){return Object(u.a)(Object(u.a)({},c),{},{engine:r[e]})}))}(c)}},e.power)}));return Object(l.jsxs)("div",{className:"configurator__wrapper",children:[Object(l.jsx)(g,{}),Object(l.jsxs)("div",{className:"configurator__body",children:[Object(l.jsxs)("div",{className:"left__side",children:[Object(l.jsx)("h1",{children:"Configurate your car"}),Object(l.jsx)("img",{src:c.model.img,alt:c.model.name}),Object(l.jsxs)("div",{className:"engine__container",children:[Object(l.jsx)("div",{className:"back",children:Object(l.jsx)("div",{className:"triangle"})}),a]})]}),Object(l.jsx)("div",{className:"board",children:Object(l.jsx)(w,{})})]})]})},I=(n(73),function(){return Object(l.jsxs)("div",{className:"error__wrapper",children:[Object(l.jsx)("img",{src:v,alt:"cars"}),Object(l.jsxs)("div",{className:"error__container",children:[Object(l.jsx)("h1",{children:"404"}),Object(l.jsx)("h2",{children:"something went wrong, please start from the beginning"}),Object(l.jsx)(i.b,{to:"/",children:Object(l.jsx)("button",{children:"Start"})})]})]})}),D=function(){var e=Object(t.useContext)(o),c=e.data,n=e.carConfig,r=e.setData;return Object(t.useEffect)((function(){O.a.get("https://vps.franciszekpawlak.pl:17500/pandora").then((function(e){return r(e.data.data)})).catch((function(e){return console.log(e)}))}),[]),Object(l.jsx)(i.a,{basename:"/car-configurator",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{path:"/",exact:!0,component:N}),Object(l.jsx)(j.a,{path:"/brands",component:""!==c?y:I}),Object(l.jsx)(j.a,{path:"/models",component:""!==n.brand?_:I}),Object(l.jsx)(j.a,{path:"/configurator",component:""!==n.model?F:I}),Object(l.jsx)(j.a,{component:I})]})})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(c){var n=c.getCLS,t=c.getFID,r=c.getFCP,s=c.getLCP,a=c.getTTFB;n(e),t(e),r(e),s(e),a(e)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(b,{children:Object(l.jsx)(D,{})})}),document.getElementById("root")),M()}},[[74,1,2]]]);
//# sourceMappingURL=main.0d5f6d72.chunk.js.map