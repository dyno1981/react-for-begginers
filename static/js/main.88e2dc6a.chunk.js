(this["webpackJsonpreact-for-begginers"]=this["webpackJsonpreact-for-begginers"]||[]).push([[0],{13:function(e,t,n){e.exports={container:"Home_container__2MqnZ",loader:"Home_loader__pHrlW",movies:"Home_movies__1Ly0v"}},25:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(18),a=n.n(r),s=(n(25),n(10)),o=n(2),m=n(8),j=n(12),_=n(17),u=n(9),v=n.n(u),l=n(1);var d=function(e){var t=e.id,n=e.mediumCoverImage,c=e.title,i=e.year,r=e.summary,a=e.genres;return Object(l.jsxs)("div",{className:v.a.movie,children:[Object(l.jsx)("img",{src:n,alt:"title",className:v.a.movie__img}),Object(l.jsx)("h2",{className:v.a.movie__title,children:Object(l.jsx)(s.b,{to:"/movie/".concat(t),children:c})}),Object(l.jsx)("h3",{className:v.a.movie__year,children:i}),Object(l.jsx)("p",{children:r.length>235?"".concat(r.slice(0,235),"..."):r}),Object(l.jsx)("ul",{className:v.a.movie__genres,children:a.map((function(e){return Object(l.jsx)("li",{children:e},e)}))})]})},b=n(13),O=n.n(b);var h=function(){var e=Object(c.useState)(!0),t=Object(_.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)([]),a=Object(_.a)(r,2),s=a[0],o=a[1],u=function(){var e=Object(j.a)(Object(m.a)().mark((function e(){var t,n;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,o(n.data.movies),i(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){u()}),[]),console.log(s),Object(l.jsx)("div",{className:O.a.container,children:n?Object(l.jsx)("div",{className:O.a.loader,children:"Loading..."}):Object(l.jsx)("div",{className:O.a.movies,children:s.map((function(e){return Object(l.jsx)(d,{id:e.id,mediumCoverImage:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})})};var f=function(){var e=Object(o.f)().id,t=function(){var t=Object(j.a)(Object(m.a)().mark((function t(){var n;return Object(m.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e));case 2:return t.next=4,t.sent.json();case 4:n=t.sent,console.log(n);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){t()}),[]),Object(l.jsx)("h1",{children:"Detail"})};var x=function(){return Object(l.jsx)(s.a,{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/movie/:id",children:Object(l.jsx)(f,{})}),Object(l.jsx)(o.a,{path:"/",children:Object(l.jsx)(h,{})})]})})};n(35);a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))},9:function(e,t,n){e.exports={movie:"Movie_movie__2jqZX",movie__img:"Movie_movie__img__3IVRt",movie__title:"Movie_movie__title__2EU2D",movie__year:"Movie_movie__year__2hWOs",movie__genres:"Movie_movie__genres__306NT"}}},[[36,1,2]]]);
//# sourceMappingURL=main.88e2dc6a.chunk.js.map