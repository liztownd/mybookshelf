(this.webpackJsonpmybookshelf=this.webpackJsonpmybookshelf||[]).push([[3],{42:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a}));var r={title:"Books",path:"/mybookshelf/books/:userId"},c={title:"Search",path:"/mybookshelf/books/:userId/search"},a={title:"My books",path:"/mybookshelf/books/:userId/manage"}},43:function(e,t,n){"use strict";n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return b}));var r=n(3),c=n.n(r),a=n(9),s=n(8),o=n(0),i=n(17),u=n(5),h=Object(o.createContext)({}),b=function(e){var t=e.children,n=Object(o.useState)(),r=Object(s.a)(n,2),b=r[0],l=r[1],f=Object(o.useState)(!1),j=Object(s.a)(f,2),p=j[0],d=j[1],v=function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),n="".concat("https://thawing-sierra-15233.herokuapp.com/api/v1","/users"),e.prev=2,e.next=5,fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})}).then((function(e){return e.json()}));case 5:r=e.sent,l({email:r.email,id:r.id}),d(!1),e.next=15;break;case 10:throw e.prev=10,e.t0=e.catch(2),Object(i.b)({variant:"error",message:e.t0.message}),d(!1),new Error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)(h.Provider,{value:{user:b,setUser:l,login:v,isUserLoading:p},children:t})}},65:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return p}));var r=n(10),c=n(61),a=n(3),s=n.n(a),o=n(9),i=n(8),u=n(0),h=n(2),b=n(43),l=n(17),f=n(5),j=Object(u.createContext)({}),p=function(e){var t=e.children,n="https://thawing-sierra-15233.herokuapp.com/api/v1",a="https://www.googleapis.com/books/v1/volumes",p=Object(h.p)().userId,d=Object(u.useContext)(b.b),v=d.user,O=d.setUser,m=Object(u.useState)([]),x=Object(i.a)(m,2),k=x[0],g=x[1],w=Object(u.useState)(),y=Object(i.a)(w,2),S=y[0],E=y[1],T=Object(u.useState)(),P=Object(i.a)(T,2),B=P[0],C=P[1],I=Object(u.useState)(!1),J=Object(i.a)(I,2),U=J[0],z=J[1],G=Object(u.useCallback)(Object(o.a)(s.a.mark((function e(){var t,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(n,"/users/").concat(p),e.prev=1,e.next=4,fetch(t,{method:"GET"}).then((function(e){return e.json()}));case 4:r=e.sent,O({email:r.email,id:r.id}),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(1),Object(l.b)({variant:"error",message:e.t0.message}),new Error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])}))),[v]);Object(u.useEffect)((function(){v||G()}),[v]);var L=function(){var e=Object(o.a)(s.a.mark((function e(){var t,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(n,"/books/?user_id=").concat(null===v||void 0===v?void 0:v.id.toString()),e.prev=1,e.next=4,fetch(t,{method:"GET"}).then((function(e){return e.json()}));case 4:r=e.sent,g(r),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(1),Object(l.b)({variant:"error",message:e.t0.message}),new Error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();Object(u.useEffect)((function(){v&&L()}),[v]);var N=function(){var e=Object(o.a)(s.a.mark((function e(t){var a,o,i,u,h;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(c.a)(Object(c.a)({},t),{},{user_id:(null===v||void 0===v?void 0:v.id)||""}),e.prev=1,e.next=4,fetch("".concat(n,"/books"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()}));case 4:return o=e.sent,e.next=7,Promise.resolve(o);case 7:(i=e.sent)&&(u=Object(r.a)(k),h=[].concat(Object(r.a)(u),[i]),g(h)),e.next=15;break;case 11:throw e.prev=11,e.t0=e.catch(1),Object(l.b)({variant:"error",message:e.t0.message}),new Error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(o.a)(s.a.mark((function e(t){var c,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(n,"/books/").concat(t),{method:"DELETE"}).then((function(e){return e}));case 3:c=Object(r.a)(k),a=c.filter((function(e){return e.id!==t})),g(a),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),Object(l.b)({variant:"error",message:e.t0.message}),new Error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(o.a)(s.a.mark((function e(t,c){var a,o,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(n,"/books/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({read:c})}).then((function(e){return e.json()}));case 3:return a=e.sent,e.next=6,Promise.resolve(a);case 6:if(e.sent){for(o=Object(r.a)(k),i=0;i<o.length;i++)o[i].id===t&&(o[i].read=c);g(o)}e.next=14;break;case 10:throw e.prev=10,e.t0=e.catch(0),Object(l.b)({variant:"error",message:e.t0.message}),new Error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}(),R=function(){var e=Object(o.a)(s.a.mark((function e(t,c){var a,o,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(n,"/books/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({rating:c})}).then((function(e){return e.json()}));case 3:return a=e.sent,e.next=6,Promise.resolve(a);case 6:if(e.sent){for(o=Object(r.a)(k),i=0;i<o.length;i++)o[i].id===t&&(o[i].rating=c);g(o)}e.next=14;break;case 10:throw e.prev=10,e.t0=e.catch(0),Object(l.b)({variant:"error",message:e.t0.message}),new Error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}(),q=function(){var e=Object(o.a)(s.a.mark((function e(t){var n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(a,"/").concat(t),e.prev=1,e.next=4,fetch(n,{method:"GET"}).then((function(e){return e.json().then((function(e){return e}))}));case 4:return r=e.sent,e.next=7,Promise.resolve(r);case 7:c=e.sent,E(c),e.next=15;break;case 11:throw e.prev=11,e.t0=e.catch(1),Object(l.b)({variant:"error",message:e.t0.message}),new Error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(o.a)(s.a.mark((function e(t){var n,r,c,o,i,u,h;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z(!0),n=t.title.length?"+intitle:".concat(t.title):"",r=t.author.length?"+inauthor:".concat(t.author):"",c=t.publisher.length?"+inpublisher:".concat(t.publisher):"",o=t.keyword||"",i="".concat(a,"?q=")+o+n+r+c,e.prev=6,e.next=9,fetch(i,{method:"GET"}).then((function(e){return e.json()}));case 9:return u=e.sent,e.next=12,Promise.resolve(u);case 12:h=e.sent,C(0===h.totalItems?[]:h.items),e.next=20;break;case 16:throw e.prev=16,e.t0=e.catch(6),Object(l.b)({variant:"error",message:e.t0.message}),new Error(e.t0);case 20:z(!1);case 21:case"end":return e.stop()}}),e,null,[[6,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(j.Provider,{value:{userBooks:k,getBook:q,selectedBook:S,setSelectedBook:E,addBook:N,deleteBook:_,bookSearch:D,searchResults:B,inUserList:function(e){return k.find((function(t){return t.book_id===e}))},updateStatus:M,updateRating:R,isSearchLoading:U},children:t})}},82:function(e,t,n){},83:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(44),a=(n(82),n(69)),s=(n(83),n(43)),o=n(17),i=n(41),u=n(2),h=n(42),b=n(109),l=n(5),f=function(){return Object(l.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(l.jsx)(b.a,{size:"40px"})})},j=n(65),p=function(){return Object(l.jsx)(j.b,{children:Object(l.jsx)(u.a,{})})},d=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(6)]).then(n.bind(null,314))})),v=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(9)]).then(n.bind(null,310))})),O=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(8),n.e(7)]).then(n.bind(null,316))})),m=function(){return Object(l.jsx)(r.Suspense,{fallback:Object(l.jsx)(f,{}),children:Object(l.jsx)(i.a,{children:Object(l.jsxs)(u.d,{children:[Object(l.jsx)(u.b,{path:"/mybookshelf/",element:Object(l.jsx)(v,{})}),Object(l.jsxs)(u.b,{path:"".concat(h.a.path),element:Object(l.jsx)(p,{}),children:[Object(l.jsx)(u.b,{path:"".concat(h.b.path),element:Object(l.jsx)(d,{})}),Object(l.jsx)(u.b,{path:"".concat(h.c.path),element:Object(l.jsx)(O,{})})]})]})})})},x=n(108),k=n(66),g=n(107),w=Object(k.b)({palette:{primary:{light:"#f0a9a4",main:"#d4847f",dark:"#145369",contrastText:"#2e2e2e"},secondary:{light:"#2596be",main:"#145369",dark:"#2e2e2e",contrastText:"#ffffff"},background:{default:g.a[100]}},spacing:8}),y=function(){return Object(l.jsx)(a.ErrorBoundary,{fallback:Object(l.jsx)("div",{children:"Something went wrong"}),children:Object(l.jsx)(o.a,{children:Object(l.jsx)(s.a,{children:Object(l.jsx)(x.a,{theme:w,children:Object(l.jsx)("div",{style:{width:"100vw",height:"100vh"},children:Object(l.jsx)(m,{})})})})})})};c.render(Object(l.jsx)(r.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root"))}},[[90,4,5]]]);
//# sourceMappingURL=main.0abee487.chunk.js.map