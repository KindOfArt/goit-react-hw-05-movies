"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[283],{283:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var r,a,i,l,o,s,c,d=t(885),p=t(791),u=t(731),x=t(678),h=t(168),f=t(444),b=f.ZP.div(r||(r=(0,h.Z)(["\n  padding-top: 20px;\n  padding-left: 30px;\n"]))),m=f.ZP.form(a||(a=(0,h.Z)(["\n  outline: 1px solid black;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 10px;\n  width: 400px;\n  padding: 5px;\n  box-shadow: 1px 1px 5px 1px black;\n  border-radius: 10px;\n"]))),v=f.ZP.label(i||(i=(0,h.Z)(["\n  display: block;\n  font-size: 24px;\n"]))),Z=f.ZP.input(l||(l=(0,h.Z)(["\n  display: block;\n  border-radius: 10px;\n  padding: 5px;\n  margin-top: 5px;\n  box-shadow: 0px 0px 30px 1px black;\n\n  &:focus {\n    outline: none;\n  }\n"]))),g=f.ZP.div(o||(o=(0,h.Z)([""]))),j=f.ZP.button(s||(s=(0,h.Z)(["\n  padding: 4px 5px;\n  margin: 0;\n  border: 1px solid black;\n  background-color: black;\n  color: white;\n  border-radius: 20px;\n  font-size: 18px;\n  box-shadow: 1px 1px 5px 1px black;\n\n  &:hover {\n    scale: 1.1;\n    box-shadow: 1px 1px 8px 1px black;\n  }\n"]))),k=t(184),w=function(n){var e=n.getQuery,t=(0,p.useState)(""),r=(0,d.Z)(t,2),a=r[0],i=r[1],l=(0,u.lr)(),o=(0,d.Z)(l,2)[1];return(0,k.jsx)(b,{children:(0,k.jsxs)(m,{onSubmit:function(n){n.preventDefault(),e(a),i("")},children:[(0,k.jsxs)(v,{children:["Search a movie:",(0,k.jsx)(Z,{value:a,onChange:function(n){var e=n.currentTarget.value;i(e),o(""!==e?{q:e}:{})},type:"text",name:"movies",placeholder:"search query",autoComplete:"off"})]}),(0,k.jsx)(g,{children:(0,k.jsx)(j,{type:"submit",children:"Search"})})]})})},y=t(752),_=t(689),P=function(n){var e=n.id,t=n.title,r=n.release_date,a=(0,_.TH)();return(0,k.jsx)(y.H,{children:(0,k.jsxs)(y.F,{to:"".concat(e),state:{from:a},children:[t," ",r&&(0,k.jsxs)("span",{children:["(",r.slice(0,4),")"]})]})})},S=t(935),C=f.ZP.div(c||(c=(0,h.Z)([""]))),q=function(n){var e=n.movies;return(0,k.jsx)(C,{children:(0,k.jsx)(S.a,{children:e.map((function(n){var e=n.id,t=n.title,r=n.release_date;return(0,k.jsx)(P,{id:e,title:t,release_date:r},e)}))})})},z=function(){var n=(0,u.lr)(),e=(0,d.Z)(n,1)[0],t=(0,p.useState)((function(){var n;return null!==(n=e.get("q"))&&void 0!==n?n:""})),r=(0,d.Z)(t,2),a=r[0],i=r[1],l=(0,p.useState)([]),o=(0,d.Z)(l,2),s=o[0],c=o[1];return(0,p.useEffect)((function(){a&&(0,x.z1)(a).then((function(n){return n.results.map((function(n){return{id:n.id,title:n.title,release_date:n.release_date}}))})).then(c)}),[a]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(w,{getQuery:i}),s.length>0?(0,k.jsx)(q,{movies:s}):null]})}}}]);
//# sourceMappingURL=283.99ba4d47.chunk.js.map