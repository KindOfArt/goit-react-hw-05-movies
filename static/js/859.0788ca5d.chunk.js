"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[859],{859:function(n,e,r){r.r(e),r.d(e,{default:function(){return A}});var i,t,s,a,d,l,c,o,x,p,u,h=r(885),v=r(168),f=r(731),j=r(444),b=j.ZP.div(i||(i=(0,v.Z)(["\n  display: flex;\n  gap: 10px;\n  margin-top: 20px;\n  margin-bottom: 40px;\n"]))),k=r(184),Z=[{href:"cast",text:"Cast"},{href:"review",text:"Review"}],g=function(n){var e=n.backLinkHref;return(0,k.jsx)(b,{children:Z.map((function(n){var r=n.href,i=n.text;return(0,k.jsx)("div",{children:(0,k.jsx)(m,{to:r,state:{from:e},children:i})},r)}))})},m=(0,j.ZP)(f.OL)(t||(t=(0,v.Z)(["\n  font-size: 26px;\n  font-weight: bolder;\n  &:hover {\n    text-decoration: underline;\n    color: blue;\n  }\n"]))),w=r(791),P=r(689),y=function(n){var e=n.backLinkHref;return(0,k.jsxs)("div",{children:[(0,k.jsx)(g,{backLinkHref:e}),(0,k.jsx)(w.Suspense,{fallback:null,children:(0,k.jsx)(P.j3,{})})]})},_=function(n){var e=n.genres;return(0,k.jsxs)(L,{children:[(0,k.jsx)("b",{children:"Genres:"}),(0,k.jsx)("div",{children:e&&e.map((function(n,e){var r=n.name;return(0,k.jsx)("p",{children:r},e)}))})]})},L=j.ZP.div(s||(s=(0,v.Z)(["\n  display: flex;\n  gap: 5px;\n"]))),H=function(n){var e=n.backLinkHref;return(0,k.jsx)("div",{children:(0,k.jsx)(O,{to:e,children:"Go Back"})})},O=(0,j.ZP)(f.OL)(a||(a=(0,v.Z)(["\n  display: inline-block;\n  margin-bottom: 15px;\n  padding: 8px;\n  border-radius: 10px;\n  color: white;\n  background-color: black;\n  &:hover {\n    scale: 1.1;\n  }\n"]))),C=function(n){var e=n.overview;return(0,k.jsxs)(S,{children:[(0,k.jsx)("b",{children:"Overview:"}),(0,k.jsx)("p",{children:e})]})},S=j.ZP.div(d||(d=(0,v.Z)(["\n  display: flex;\n  gap: 5px;\n"]))),G=function(n){var e=n.popularity;if(e)return(0,k.jsxs)("div",{children:[(0,k.jsx)("b",{children:"Popularyti:"})," ",e]})},T=j.ZP.div(l||(l=(0,v.Z)(["\n  box-shadow: 1px 1px 10px 1px black;\n  border-radius: 10px;\n"]))),z=j.ZP.img(c||(c=(0,v.Z)(["\n  display: block;\n  width: 250px;\n  height: auto;\n  border-radius: 10px;\n"]))),B=function(n){var e=n.poster_path;return(0,k.jsx)(k.Fragment,{children:e?(0,k.jsx)(T,{children:(0,k.jsx)(z,{src:"https://image.tmdb.org/t/p/w200".concat(e),alt:"poster_photo"})}):(0,k.jsx)("div",{className:"image",children:"Poster"})})},E=function(n){var e=n.status;return(0,k.jsx)("div",{children:(0,k.jsxs)("span",{children:[(0,k.jsx)("b",{children:"Status:"})," ",e]})})},F=function(n){var e=n.title,r=n.release_date;return(0,k.jsx)("div",{children:(0,k.jsxs)("h1",{children:[e," ",r&&(0,k.jsxs)("span",{children:["(",r.slice(0,4),")"]})]})})},I=r(678);var N=j.ZP.div(o||(o=(0,v.Z)(["\n  padding: 20px;\n"]))),R=j.ZP.div(x||(x=(0,v.Z)(["\n  display: flex;\n\n  gap: 20px;\n"]))),U=j.ZP.div(p||(p=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  border-radius: 10px;\n  padding: 10px;\n  box-shadow: 1px 1px 8px 1px black;\n"]))),q=j.ZP.div(u||(u=(0,v.Z)([""]))),A=function(){var n,e,r=function(n){var e=(0,w.useState)(n),r=(0,h.Z)(e,2),i=r[0],t=r[1],s=(0,P.UO)().movieId;return(0,w.useEffect)((function(){(0,I.TP)(s).then((function(n){return t(n)}))}),[s]),[i,t]}([]),i=(0,h.Z)(r,1)[0],t=i.title,s=i.status,a=i.overview,d=i.poster_path,l=i.genres,c=i.release_date,o=i.popularity,x=null!==(n=null===(e=(0,P.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,k.jsxs)(N,{children:[(0,k.jsx)(H,{backLinkHref:x}),(0,k.jsxs)(R,{children:[d&&(0,k.jsx)(B,{poster_path:d}),(0,k.jsxs)(U,{children:[t&&c&&(0,k.jsx)(F,{title:t,release_date:c}),s&&(0,k.jsx)(E,{status:s}),o&&(0,k.jsx)(G,{popularity:o}),a&&(0,k.jsx)(C,{overview:a}),l&&l.length>0&&(0,k.jsx)(_,{genres:l})]})]}),(0,k.jsx)(q,{children:(0,k.jsx)(y,{backLinkHref:x})})]})}}}]);
//# sourceMappingURL=859.0788ca5d.chunk.js.map