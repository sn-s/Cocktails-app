(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,n){e.exports=n.p+"static/media/cocktails-image.25de97e7.jpg"},function(e,t,n){e.exports=n(14)},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(3),l=n.n(r),i=(n(11),n(1)),u=(n(12),Object(a.createContext)()),o=function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),r=n[0],l=n[1],o=Object(a.useState)(!0),s=Object(i.a)(o,2),m=s[0],d=s[1];return Object(a.useEffect)(function(){fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=".concat(e.query)).then(function(e){return e.json()}).then(function(e){if(null===e.drinks)throw d(!1),new Error("Invalid request");return e}).then(function(e){l(e.drinks),d(!0)}).catch(function(e){console.log(e)})},[e.query]),c.a.createElement(u.Provider,{value:[r,m]},e.children)},s=function(){var e,t=Object(a.useContext)(u),n=Object(i.a)(t,2),r=n[0];return e=n[1]?r.map(function(e){return c.a.createElement("div",{key:e.idDrink,style:{width:"500px"},className:"cardList black bg-light-blue dib br4 pa3 ma3 grow ba b--white bw1 shadow-5"},c.a.createElement("h2",null,e.strDrink),c.a.createElement("img",{style:{width:"150px"},src:e.strDrinkThumb,alt:"alcoholic drink"}),c.a.createElement("h4",null,e.strInstructions))}):c.a.createElement("h1",null,"unidentified drink entered"),c.a.createElement("div",null,e)},m=n(4),d=n.n(m),b=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(""),u=Object(i.a)(l,2),m=u[0],b=u[1];return c.a.createElement(o,{query:m},c.a.createElement("div",{className:"App"},c.a.createElement("header",null,c.a.createElement("div",{className:"heading"},c.a.createElement("h1",null,"Cocktail Database"),c.a.createElement("img",{className:"image",alt:"cocktails",src:d.a}))),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),b(n)}},c.a.createElement("input",{className:"inputStyle",type:"text",value:n,placeholder:"search cocktails",onChange:function(e){r(e.target.value)}}),c.a.createElement("button",{className:"inputStyle"},"Submit")),c.a.createElement(s,null)))};n(13);l.a.render(c.a.createElement(b,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.b429d2c6.chunk.js.map