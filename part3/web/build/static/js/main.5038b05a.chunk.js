(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(t,e,n){t.exports=n(38)},37:function(t,e){},38:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(14),c=n.n(o),u=n(2),i=n(3),l=n.n(i),m=(n(37),n(4)),f=function(t){var e=t.note,n=t.toggerImportance,a=e.important?"make not important":"make important";return r.a.createElement("li",null,e.content,"  ",r.a.createElement("button",{onClick:n},a))},p="http://localhost:3001/api/notes",d=function(){var t=l.a.get(p),e={id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then((function(t){return t.data.concat(e)}))},s=function(t){return l.a.post(p,t).then((function(t){return t.data}))},h=function(t,e){return l.a.put("".concat(p,"/").concat(t),e).then((function(t){return t.data}))},v=function(){var t=Object(a.useState)([]),e=Object(u.a)(t,2),n=e[0],o=e[1],c=Object(a.useState)(""),i=Object(u.a)(c,2),l=i[0],p=i[1],v=Object(a.useState)(!0),b=Object(u.a)(v,2),E=b[0],g=b[1];Object(a.useEffect)((function(){console.log("effect"),d().then((function(t){o(t)}))}),[]),console.log("render",n.length,"notes");var j=E?n:n.filter((function(t){return t.important}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Notes"),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return g(!E)}},E?"imp":"all")),r.a.createElement("div",null,r.a.createElement("ul",null,j.map((function(t,e){return r.a.createElement(f,{key:e,note:t,toggerImportance:function(){return function(t){var e=n.find((function(e){return e.id===t})),a=Object(m.a)(Object(m.a)({},e),{},{important:!e.important});h(t,a).then((function(e){o(n.map((function(n){return n.id!==t?n:e})))})).catch((function(a){alert("the note '".concat(e.content,"' was already deleted from server")),o(n.filter((function(e){return e.id!=t})))}))}(t.id)}})})))),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:l,date:new Date,important:Math.random>.5};s(e).then((function(t){o(n.concat(t)),p("")}))}},r.a.createElement("input",{value:l,onChange:function(t){p(t.target.value)}}),r.a.createElement("button",{type:"submit"},"Add Note"))))};c.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5038b05a.chunk.js.map