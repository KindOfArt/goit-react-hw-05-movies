"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[886],{886:function(e,r,t){t.r(r),t.d(r,{default:function(){return k}});var n=t(885),i=t(731),s=t(184),a=[{href:"cast",text:"Cast"},{href:"review",text:"Review"}],c=function(e){var r=e.backLinkHref;return(0,s.jsx)("div",{children:a.map((function(e){var t=e.href,n=e.text;return(0,s.jsx)("div",{children:(0,s.jsx)(i.OL,{to:t,state:{from:r},children:n})},t)}))})},l=t(791),u=t(689),d=function(e){var r=e.backLinkHref;return(0,s.jsxs)("div",{children:[(0,s.jsx)(c,{backLinkHref:r}),(0,s.jsx)(l.Suspense,{fallback:null,children:(0,s.jsx)(u.j3,{})})]})},o=function(e){var r=e.genres;return(0,s.jsxs)("div",{children:[" ",r&&r.map((function(e){return e.name})).join(" ")]})},v=function(e){var r=e.backLinkHref;return(0,s.jsx)("div",{children:(0,s.jsx)(i.OL,{to:r,children:"Go Back"})})},h=function(e){var r=e.overview;return(0,s.jsx)("div",{children:(0,s.jsx)("p",{children:r})})},x=function(e){var r=e.popularity;return(0,s.jsx)("div",{children:r})},j=function(e){var r=e.poster_path;return(0,s.jsx)(s.Fragment,{children:r?(0,s.jsx)("div",{children:(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(r),alt:"poster_photo"})}):(0,s.jsx)("div",{className:"image",children:"Poster"})})},f=function(e){var r=e.status;return(0,s.jsx)("div",{children:(0,s.jsx)("span",{children:r})})},p=function(e){var r=e.title,t=e.release_date;return(0,s.jsx)("div",{children:(0,s.jsxs)("h1",{children:[r," ",t&&(0,s.jsxs)("span",{children:["(",t.slice(0,4),")"]})]})})},m=t(678);var k=function(){var e,r,t=function(e){var r=(0,l.useState)(e),t=(0,n.Z)(r,2),i=t[0],s=t[1],a=(0,u.UO)().movieId;return(0,l.useEffect)((function(){(0,m.TP)(a).then((function(e){return s(e)}))}),[a]),[i,s]}({}),i=(0,n.Z)(t,1)[0],a=i.title,c=i.status,k=i.overview,b=i.poster_path,_=i.genres,w=i.release_date,g=i.popularity,L=null!==(e=null===(r=(0,u.TH)().state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/";return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)(v,{backLinkHref:L}),(0,s.jsxs)("div",{className:"movie-detail-thumb",children:[(0,s.jsx)(j,{poster_path:b}),(0,s.jsxs)("div",{className:"description-thumb",children:[(0,s.jsx)(p,{title:a,release_date:w}),(0,s.jsx)(f,{status:c}),(0,s.jsx)(x,{popularity:g}),(0,s.jsx)(h,{overview:k}),(0,s.jsx)(o,{genres:_})]})]}),(0,s.jsx)(d,{backLinkHref:L})]})})}}}]);
//# sourceMappingURL=886.9f6a7d9d.chunk.js.map