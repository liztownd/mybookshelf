(this.webpackJsonpmybookshelf=this.webpackJsonpmybookshelf||[]).push([[6],{119:function(e,t,n){"use strict";n(0);var i=n(111),a=n(5);t.a=function(e){var t=e.children,n=r().classes;return Object(a.jsx)("div",{className:n.main,children:t})};var r=Object(i.makeStyles)({name:"PageContainer"})((function(e){return{main:{margin:e.spacing(0,3),padding:e.spacing(1,3)}}}))},120:function(e,t,n){"use strict";n(0);var i=n(322),a=n(111),r=n(134),o=n.n(r),l=n(5);t.a=function(e){var t=e.title,n=e.icon,a=c().classes;return Object(l.jsxs)("div",{className:a.container,children:[Object(l.jsx)("div",{className:a.icon,children:n||Object(l.jsx)(o.a,{fontSize:"large"})}),Object(l.jsx)(i.a,{variant:"h4",children:t})]})};var c=Object(a.makeStyles)({name:"PageTitles"})((function(e){return{container:{width:"100%",display:"flex",alignItems:"center",margin:e.spacing(2,0)},icon:{marginRight:e.spacing(2),color:e.palette.primary.main}}}))},123:function(e,t,n){"use strict";var i=n(8),a=n(0),r=n(318),o=n(65),l=n(5);t.a=function(e){var t=e.id,n=e.status,c=Object(a.useContext)(o.a).updateStatus,s=Object(a.useState)(n),d=Object(i.a)(s,2),u=d[0],b=d[1];return Object(l.jsx)(r.a,{style:{margin:"10px",width:"150px"},label:u?"Read":"Mark as read",variant:u?"filled":"outlined",color:"secondary",onClick:function(){b(!u),c(t,!u)}})}},124:function(e,t,n){"use strict";t.a=n.p+"static/media/genericBook.d3f34275.png"},126:function(e,t,n){"use strict";var i=n(8),a=n(0),r=n(65),o=n(165),l=n.n(o),c=n(166),s=n.n(c),d=n(5),u=function(e){var t=e.starNumber,n=e.originalRating,i=e.rating,a=e.setRating,r=e.saveRating;return Object(d.jsx)(d.Fragment,{children:i>=t?Object(d.jsx)(l.a,{fontSize:"small",color:"primary",onMouseEnter:function(){return a(t)},onMouseLeave:function(){return a(n)},onClick:function(e){e.preventDefault(),r()}}):Object(d.jsx)(s.a,{fontSize:"small",color:"secondary",onMouseEnter:function(){return a(t)},onMouseLeave:function(){return a(n)},onClick:function(e){e.preventDefault(),r()}})})};t.a=function(e){var t=e.rating,n=e.id,o=Object(a.useContext)(r.a).updateRating,l=Object(a.useState)(t),c=Object(i.a)(l,2),s=c[0],b=c[1],j=function(){s&&o(n,s)};return Object(d.jsxs)("div",{style:{display:"flex",alignItems:"center",margin:"10px"},children:[Object(d.jsx)(u,{starNumber:1,originalRating:t,rating:s,setRating:b,saveRating:j}),Object(d.jsx)(u,{starNumber:2,originalRating:t,rating:s,setRating:b,saveRating:j}),Object(d.jsx)(u,{starNumber:3,originalRating:t,rating:s,setRating:b,saveRating:j}),Object(d.jsx)(u,{starNumber:4,originalRating:t,rating:s,setRating:b,saveRating:j}),Object(d.jsx)(u,{starNumber:5,originalRating:t,rating:s,setRating:b,saveRating:j})]})}},142:function(e,t,n){"use strict";var i=n(0),a=n(327),r=n(309),o=n(323),l=n(328),c=n(324),s=n(319),d=n(322),u=n(329),b=n(320),j=n(185),m=n.n(j),v=n(111),f=n(167),h=n.n(f),x=n(65),O=n(123),g=n(141),p=n.n(g),k=n(126),y=n(124),I=n(5);t.a=function(e){var t,n,j,v,f,g,S,w,N,D,B,R,L,P,z,T,M,A,q,F,_,E,K,G,H,U=e.isBookDialogOpen,V=e.setIsBookDialogOpen,J=C().classes,X=Object(i.useContext)(x.a),Q=X.addBook,W=X.selectedBook,Y=X.inUserList,Z=X.deleteBook,$=Y((null===W||void 0===W?void 0:W.id)||""),ee={book_id:(null===W||void 0===W?void 0:W.id)||"",title:(null===W||void 0===W||null===(t=W.volumeInfo)||void 0===t?void 0:t.title)||"",subtitle:(null===W||void 0===W||null===(n=W.volumeInfo)||void 0===n?void 0:n.subtitle)||"",authors:(null===W||void 0===W||null===(j=W.volumeInfo)||void 0===j||null===(v=j.authors)||void 0===v?void 0:v.join(","))||"",publishedDate:(null===W||void 0===W||null===(f=W.volumeInfo)||void 0===f?void 0:f.publishedDate)||"",description:(null===W||void 0===W||null===(g=W.volumeInfo)||void 0===g?void 0:g.description)||"",smallThumbnail:(null===W||void 0===W||null===(S=W.volumeInfo)||void 0===S||null===(w=S.imageLinks)||void 0===w?void 0:w.smallThumbnail)||"",thumbnail:(null===W||void 0===W||null===(N=W.volumeInfo)||void 0===N||null===(D=N.imageLinks)||void 0===D?void 0:D.thumbnail)||"",infoLink:(null===W||void 0===W||null===(B=W.volumeInfo)||void 0===B?void 0:B.infoLink)||"",read:!1,rating:0};return Object(I.jsx)(a.a,{open:U,children:W&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(r.a,{className:J.title,children:[null===W||void 0===W||null===(R=W.volumeInfo)||void 0===R?void 0:R.title,Object(I.jsx)(o.a,{title:"Close dialog",onClick:function(){return V(!1)},children:Object(I.jsx)(m.a,{})})]}),Object(I.jsx)(l.a,{children:Object(I.jsx)(c.a,{className:J.container,children:Object(I.jsxs)(s.a,{container:!0,direction:"column",spacing:3,children:[Object(I.jsx)(s.a,{item:!0,children:Object(I.jsx)("img",{src:(null===W||void 0===W||null===(L=W.volumeInfo)||void 0===L||null===(P=L.imageLinks)||void 0===P?void 0:P.thumbnail)||y.a,alt:null===W||void 0===W||null===(z=W.volumeInfo)||void 0===z?void 0:z.title,className:J.image})}),Object(I.jsxs)(s.a,{item:!0,children:[Object(I.jsx)("a",{href:null===W||void 0===W||null===(T=W.volumeInfo)||void 0===T?void 0:T.infoLink,target:"_blank",rel:"noreferrer",className:J.link,children:Object(I.jsx)(d.a,{variant:"h6",children:(null===W||void 0===W||null===(M=W.volumeInfo)||void 0===M?void 0:M.title)||""})}),Object(I.jsx)(d.a,{children:null===W||void 0===W||null===(A=W.volumeInfo)||void 0===A||null===(q=A.authors)||void 0===q?void 0:q.join(",")}),(null===W||void 0===W||null===(F=W.volumeInfo)||void 0===F||null===(_=F.description)||void 0===_?void 0:_.startsWith("<"))?Object(I.jsx)("div",{children:h()(null===W||void 0===W||null===(E=W.volumeInfo)||void 0===E?void 0:E.description)}):Object(I.jsx)(d.a,{variant:"body1",children:(null===W||void 0===W||null===(K=W.volumeInfo)||void 0===K?void 0:K.description)||""}),Object(I.jsx)(d.a,{variant:"subtitle2",children:(null===W||void 0===W||null===(G=W.volumeInfo)||void 0===G?void 0:G.publishedDate)||""})]})]})})}),Object(I.jsx)(u.a,{className:J.actionArea,children:Object(I.jsxs)(s.a,{container:!0,spacing:1,alignItems:"center",children:[Object(I.jsx)(s.a,{item:!0,children:$?Object(I.jsxs)(c.a,{sx:{flexDirection:{xs:"column",md:"row"},alignItems:{xs:"flex-start",md:"center"}},className:J.userDiv,children:[Object(I.jsx)(O.a,{id:$.id,status:Boolean(null===$||void 0===$?void 0:$.read)}),Object(I.jsx)(k.a,{rating:$.rating||0,id:$.id}),Object(I.jsx)(b.a,{title:"Remove from shelf",color:"secondary",onClick:function(){return Z($.id)},children:"Remove from shelf"})]}):Object(I.jsx)(b.a,{title:"Add to shelf",variant:"contained",color:"primary",onClick:function(){return Q(ee)},children:"Add to shelf"})}),Object(I.jsx)(s.a,{item:!0,children:Object(I.jsx)(b.a,{title:"View on web",children:Object(I.jsx)("a",{href:null===W||void 0===W||null===(H=W.volumeInfo)||void 0===H?void 0:H.infoLink,target:"_blank",rel:"noreferrer",children:Object(I.jsx)(p.a,{fontSize:"small",color:"secondary"})})})})]})})]})})};var C=Object(v.makeStyles)({name:"NewBookDialog"})((function(e){return{title:{display:"flex",justifyContent:"space-between",alignItems:"center"},container:{margin:e.spacing(2)},image:{},link:{color:e.palette.primary.main,textDecoration:"none"},actionArea:{padding:e.spacing(3)},userDiv:{display:"flex",alignItems:"center"}}}))},144:function(e,t,n){"use strict";var i=n(8),a=n(0),r=n.n(a),o=n(120),l=n(111),c=n(161),s=n.n(c),d=n(163),u=n.n(d),b=n(43),j=n(42),m=n(138),v=n.n(m),f=n(6),h=n(323),x=n(41),O=n(5),g=function(e){var t=e.linkTo,n=e.icon,i=e.isSelected,a=e.title,r=p(),o=r.classes,l=r.cx;return Object(O.jsx)(h.a,{title:a,className:l(o.link,Object(f.a)({},o.isSelected,i)),children:Object(O.jsx)(x.b,{to:t,children:n})})},p=Object(l.makeStyles)({name:"HeaderLink"})((function(e){return{link:{height:e.spacing(7),width:e.spacing(7),borderRadius:50,display:"flex",justifyContent:"center",alignItems:"center"},isSelected:{border:"1px solid ".concat(e.palette.primary.main)}}})),k=n(2),y=n(324),I=n(317),C=n(315),S=n(307),w=n(308),N=n(162),D=n.n(N),B=n(268),R=(t.a=function(e){var t=e.title,n=e.icon,l=R().classes,c=Object(a.useContext)(b.b),d=c.user,m=c.setUser,f=r.a.useState(null),x=Object(i.a)(f,2),p=x[0],N=x[1],L=Object(k.l)(),P=Object(k.n)(),z=function(){m(void 0),P("/mybookshelf")},T=function(){N(null)};return Object(O.jsxs)("div",{className:l.container,children:[Object(O.jsx)(o.a,{title:t,icon:n||null}),Object(O.jsxs)(y.a,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},className:l.actionsContainer,children:[Object(O.jsx)(g,{title:j.c.title,linkTo:j.c.path.replace(":userId",(null===d||void 0===d?void 0:d.id.toString())||""),icon:Object(O.jsx)(s.a,{color:L.pathname.includes("manage")?"primary":"secondary",className:l.linkIcon}),isSelected:L.pathname.includes("manage")}),Object(O.jsx)(g,{title:j.b.title,linkTo:j.b.path.replace(":userId",(null===d||void 0===d?void 0:d.id.toString())||""),icon:Object(O.jsx)(v.a,{color:L.pathname.includes("search")?"primary":"secondary",className:l.linkIcon}),isSelected:L.pathname.includes("search")}),Object(O.jsx)(h.a,{onClick:z,title:"Log out",children:Object(O.jsx)(D.a,{color:"secondary"})})]}),Object(O.jsxs)(y.a,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:[Object(O.jsx)(h.a,{size:"large","aria-label":"app-menu","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){N(e.currentTarget)},color:"inherit",children:Object(O.jsx)(u.a,{})}),Object(O.jsxs)(B.a,{id:"menu-appbar",anchorEl:p,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(p),onClose:T,sx:{display:{xs:"block",md:"none"}},children:[Object(O.jsx)(I.a,{onClick:function(){T(),P(j.c.path.replace(":userId",(null===d||void 0===d?void 0:d.id.toString())||""))},children:Object(O.jsxs)(C.a,{children:[Object(O.jsx)(S.a,{children:Object(O.jsx)(s.a,{color:L.pathname.includes("manage")?"primary":"secondary",className:l.linkIcon})}),Object(O.jsx)(w.a,{children:"My books"})]})}),Object(O.jsx)(I.a,{onClick:function(){T(),P(j.b.path.replace(":userId",(null===d||void 0===d?void 0:d.id.toString())||""))},children:Object(O.jsxs)(C.a,{children:[Object(O.jsx)(S.a,{children:Object(O.jsx)(v.a,{color:L.pathname.includes("search")?"primary":"secondary",className:l.linkIcon})}),Object(O.jsx)(w.a,{children:"Search"})]})}),Object(O.jsx)(I.a,{onClick:function(){T(),z()},children:Object(O.jsxs)(C.a,{children:[Object(O.jsx)(S.a,{children:Object(O.jsx)(D.a,{color:"secondary"})}),Object(O.jsx)(w.a,{children:"Logout"})]})})]})]})]})},Object(l.makeStyles)({name:"Header"})((function(e){return{container:{padding:e.spacing(2),width:"100%",display:"flex",justifyContents:"space-evenly",alignItems:"center"},actionsContainer:{marginRight:e.spacing(2),display:"flex",justifyContents:"flex-end",alignItems:"center"},linkIcon:{padding:0,marginTop:-4,marginRight:-3}}})))},179:function(e,t){},262:function(e,t,n){"use strict";var i=n(112);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(113)),r=n(5),o=(0,a.default)((0,r.jsx)("path",{d:"M19.88 18.47c.44-.7.7-1.51.7-2.39 0-2.49-2.01-4.5-4.5-4.5s-4.5 2.01-4.5 4.5 2.01 4.5 4.49 4.5c.88 0 1.7-.26 2.39-.7L21.58 23 23 21.58l-3.12-3.11zm-3.8.11c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zm-.36-8.5c-.74.02-1.45.18-2.1.45l-.55-.83-3.8 6.18-3.01-3.52-3.63 5.81L1 17l5-8 3 3.5L13 6l2.72 4.08zm2.59.5c-.64-.28-1.33-.45-2.05-.49L21.38 2 23 3.18l-4.69 7.4z"}),"QueryStats");t.default=o},314:function(e,t,n){"use strict";n.r(t);var i=n(8),a=n(69),r=n(0),o=n.n(r),l=n(65),c=n(138),s=n.n(c),d=n(119),u=n(144),b=n(324),j=n(319),m=n(322),v=n(320),f=n(111),h=n(141),x=n.n(h),O=n(123),g=n(126),p=n(124),k=n(5),y=function(e){var t,n,i,a,o,c,s,d,u,f,h,y,C,S,w,N,D,B,R,L,P,z,T=e.bookDetails,M=e.index,A=e.handleClick,q=Object(r.useContext)(l.a),F=q.inUserList,_=q.deleteBook,E=q.addBook,K=I().classes,G=F(T.id),H={book_id:(null===T||void 0===T?void 0:T.id)||"",title:(null===T||void 0===T||null===(t=T.volumeInfo)||void 0===t?void 0:t.title)||"",subtitle:(null===T||void 0===T||null===(n=T.volumeInfo)||void 0===n?void 0:n.subtitle)||"",authors:(null===T||void 0===T||null===(i=T.volumeInfo)||void 0===i||null===(a=i.authors)||void 0===a?void 0:a.join(","))||"",publishedDate:(null===T||void 0===T||null===(o=T.volumeInfo)||void 0===o?void 0:o.publishedDate)||"",description:(null===T||void 0===T||null===(c=T.volumeInfo)||void 0===c?void 0:c.description)||"",smallThumbnail:(null===T||void 0===T||null===(s=T.volumeInfo)||void 0===s||null===(d=s.imageLinks)||void 0===d?void 0:d.smallThumbnail)||"",thumbnail:(null===T||void 0===T||null===(u=T.volumeInfo)||void 0===u||null===(f=u.imageLinks)||void 0===f?void 0:f.thumbnail)||"",infoLink:(null===T||void 0===T||null===(h=T.volumeInfo)||void 0===h?void 0:h.infoLink)||"",read:!1,rating:0};return Object(k.jsx)(b.a,{className:K.container,children:Object(k.jsxs)(j.a,{container:!0,direction:"row",spacing:3,children:[Object(k.jsx)(j.a,{item:!0,xs:12,md:2,children:Object(k.jsx)("img",{src:(null===T||void 0===T||null===(y=T.volumeInfo)||void 0===y||null===(C=y.imageLinks)||void 0===C?void 0:C.smallThumbnail)||p.a,alt:null===T||void 0===T||null===(S=T.volumeInfo)||void 0===S?void 0:S.title,className:K.image})}),Object(k.jsx)(j.a,{item:!0,xs:12,md:10,children:Object(k.jsxs)(j.a,{container:!0,direction:"column",xs:12,children:[Object(k.jsx)(j.a,{item:!0,xs:12,children:Object(k.jsxs)(m.a,{variant:"h5",color:"primary",gutterBottom:!0,children:[(null===T||void 0===T||null===(w=T.volumeInfo)||void 0===w?void 0:w.title)||"",(null===T||void 0===T||null===(N=T.volumeInfo)||void 0===N?void 0:N.subtitle)?": ".concat(null===T||void 0===T||null===(D=T.volumeInfo)||void 0===D?void 0:D.subtitle):""]})}),Object(k.jsx)(j.a,{item:!0,xs:12,children:Object(k.jsx)(m.a,{gutterBottom:!0,children:null===T||void 0===T||null===(B=T.volumeInfo)||void 0===B||null===(R=B.authors)||void 0===R?void 0:R.join(", ")})}),Object(k.jsx)(j.a,{item:!0,xs:12,children:Object(k.jsx)("div",{className:K.descriptionContainer,children:(null===T||void 0===T||null===(L=T.volumeInfo)||void 0===L?void 0:L.description)||""})}),Object(k.jsx)(j.a,{item:!0,xs:12,children:Object(k.jsxs)(m.a,{variant:"subtitle2",gutterBottom:!0,children:["Published: ",(null===T||void 0===T||null===(P=T.volumeInfo)||void 0===P?void 0:P.publishedDate)||""]})}),Object(k.jsx)(j.a,{item:!0,xs:12,children:Object(k.jsxs)(j.a,{container:!0,spacing:1,alignItems:"center",className:K.actionContainer,children:[Object(k.jsx)(j.a,{item:!0,xs:10,children:G?Object(k.jsxs)(b.a,{sx:{flexDirection:{xs:"column",md:"row"},alignItems:{xs:"flex-start",md:"center"}},className:K.userBookDiv,children:[Object(k.jsx)(O.a,{id:G.id,status:Boolean(null===G||void 0===G?void 0:G.read)}),Object(k.jsx)(g.a,{rating:G.rating||0,id:G.id}),Object(k.jsx)(v.a,{title:"Remove from shelf",color:"secondary",onClick:function(){return _(G.id)},children:"Remove from shelf"})]}):Object(k.jsx)(v.a,{title:"Add to shelf",variant:"outlined",color:"primary",onClick:function(){return E(H)},children:"Add to shelf"})}),Object(k.jsx)(j.a,{item:!0,children:Object(k.jsx)(v.a,{title:"View details",color:"secondary",onClick:function(e){A(e,M)},children:"Details"})}),Object(k.jsx)(j.a,{item:!0,children:Object(k.jsx)(v.a,{title:"View on web",children:Object(k.jsx)("a",{href:null===T||void 0===T||null===(z=T.volumeInfo)||void 0===z?void 0:z.infoLink,target:"_blank",rel:"noreferrer",children:Object(k.jsx)(x.a,{fontSize:"small",color:"secondary"})})})})]})})]})})]})})},I=Object(f.makeStyles)({name:"BookDisplay"})((function(e){return{container:{width:"100%",margin:e.spacing(2)},image:{marginTop:e.spacing(2)},link:{color:e.palette.secondary.main,textDecoration:"none"},descriptionContainer:{overflow:"hidden",maxHeight:"78px"},actionContainer:{margin:e.spacing(2,0)},userBookDiv:{display:"flex",alignItems:"center"}}})),C=n(42),S=n(311),w=n(109),N=function(e){var t=e.onSubmit,n=e.keyword,i=e.setKeyword,a=e.author,o=e.setAuthor,c=e.title,s=e.setTitle,d=e.publisher,u=e.setPublisher,f=Object(r.useContext)(l.a).isSearchLoading,h=D().classes;return Object(k.jsxs)("form",{onSubmit:function(e){return t(e)},children:[Object(k.jsxs)(j.a,{container:!0,spacing:3,className:h.fieldContainer,children:[Object(k.jsx)(j.a,{item:!0,xs:12,lg:6,children:Object(k.jsxs)(b.a,{sx:{flexDirection:{xs:"column",md:"row"},alignItems:{xs:"flex-start",md:"center"}},className:h.fieldDiv,children:[Object(k.jsx)(m.a,{className:h.label,children:"Keyword: "}),Object(k.jsx)(S.a,{className:h.textField,value:n,label:"Keyword",onChange:function(e){return i(e.target.value)}})]})}),Object(k.jsx)(j.a,{item:!0,xs:12,lg:6,children:Object(k.jsxs)(b.a,{sx:{flexDirection:{xs:"column",md:"row"},alignItems:{xs:"flex-start",md:"center"}},className:h.fieldDiv,children:[Object(k.jsx)(m.a,{className:h.label,children:"Title: "}),Object(k.jsx)(S.a,{className:h.textField,value:c,label:"Title",onChange:function(e){return s(e.target.value)}})]})}),Object(k.jsx)(j.a,{item:!0,xs:12,lg:6,children:Object(k.jsxs)(b.a,{sx:{flexDirection:{xs:"column",md:"row"},alignItems:{xs:"flex-start",md:"center"}},className:h.fieldDiv,children:[Object(k.jsx)(m.a,{className:h.label,children:"Author: "}),Object(k.jsx)(S.a,{className:h.textField,value:a,label:"Author",onChange:function(e){return o(e.target.value)}})]})}),Object(k.jsx)(j.a,{item:!0,xs:12,lg:6,children:Object(k.jsxs)(b.a,{sx:{flexDirection:{xs:"column",md:"row"},alignItems:{xs:"flex-start",md:"center"}},className:h.fieldDiv,children:[Object(k.jsx)(m.a,{className:h.label,children:"Publisher: "}),Object(k.jsx)(S.a,{className:h.textField,value:d,label:"Publisher",onChange:function(e){return u(e.target.value)}})]})})]}),Object(k.jsx)(v.a,{title:"Search",className:h.searchButton,disabled:f,type:"submit",onClick:function(e){return t(e)},variant:"contained",children:f?Object(k.jsx)(w.a,{color:"secondary"}):"Search"})]})},D=Object(f.makeStyles)({name:"BookSearch"})((function(e){return{fieldDiv:{width:"90%",display:"flex",justifyContent:"flex-start"},label:{justifyContent:"flex-start",width:"15%"},textField:{width:"100%",flexGrow:1},fieldContainer:{marginBottom:e.spacing(3)},searchButton:{marginLeft:"calc(50% - 200px)",width:"400px"}}})),B=n(142),R=n(31),L=n(19),P=n(11),z=n(20),T=n(102),M=n(30),A=n(104),q=n(29),F=n(115),_=n(39),E=n(64),K=n(103),G=n(91);function H(e){return Object(G.a)("MuiLinearProgress",e)}Object(K.a)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var U,V,J,X,Q,W,Y,Z,$,ee,te,ne,ie=["className","color","value","valueBuffer","variant"],ae=Object(M.keyframes)(Y||(Y=U||(U=Object(R.a)(["\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n"])))),re=Object(M.keyframes)(Z||(Z=V||(V=Object(R.a)(["\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n"])))),oe=Object(M.keyframes)($||($=J||(J=Object(R.a)(["\n  0% {\n    opacity: 1;\n    background-position: 0 -23px;\n  }\n\n  60% {\n    opacity: 0;\n    background-position: 0 -23px;\n  }\n\n  100% {\n    opacity: 1;\n    background-position: -200px -23px;\n  }\n"])))),le=function(e,t){return"inherit"===t?"currentColor":e.vars?e.vars.palette.LinearProgress["".concat(t,"Bg")]:"light"===e.palette.mode?Object(A.i)(e.palette[t].main,.62):Object(A.b)(e.palette[t].main,.5)},ce=Object(_.a)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["color".concat(Object(q.a)(n.color))],t[n.variant]]}})((function(e){var t=e.ownerState,n=e.theme;return Object(P.a)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:le(n,t.color)},"inherit"===t.color&&"buffer"!==t.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===t.variant&&{backgroundColor:"transparent"},"query"===t.variant&&{transform:"rotate(180deg)"})})),se=Object(_.a)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:function(e,t){var n=e.ownerState;return[t.dashed,t["dashedColor".concat(Object(q.a)(n.color))]]}})((function(e){var t=e.ownerState,n=e.theme,i=le(n,t.color);return Object(P.a)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===t.color&&{opacity:.3},{backgroundImage:"radial-gradient(".concat(i," 0%, ").concat(i," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),Object(M.css)(ee||(ee=X||(X=Object(R.a)(["\n    animation: "," 3s infinite linear;\n  "]))),oe)),de=Object(_.a)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:function(e,t){var n=e.ownerState;return[t.bar,t["barColor".concat(Object(q.a)(n.color))],("indeterminate"===n.variant||"query"===n.variant)&&t.bar1Indeterminate,"determinate"===n.variant&&t.bar1Determinate,"buffer"===n.variant&&t.bar1Buffer]}})((function(e){var t=e.ownerState,n=e.theme;return Object(P.a)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===t.color?"currentColor":(n.vars||n).palette[t.color].main},"determinate"===t.variant&&{transition:"transform .".concat(4,"s linear")},"buffer"===t.variant&&{zIndex:1,transition:"transform .".concat(4,"s linear")})}),(function(e){var t=e.ownerState;return("indeterminate"===t.variant||"query"===t.variant)&&Object(M.css)(te||(te=Q||(Q=Object(R.a)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    "]))),ae)})),ue=Object(_.a)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:function(e,t){var n=e.ownerState;return[t.bar,t["barColor".concat(Object(q.a)(n.color))],("indeterminate"===n.variant||"query"===n.variant)&&t.bar2Indeterminate,"buffer"===n.variant&&t.bar2Buffer]}})((function(e){var t=e.ownerState,n=e.theme;return Object(P.a)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==t.variant&&{backgroundColor:"inherit"===t.color?"currentColor":(n.vars||n).palette[t.color].main},"inherit"===t.color&&{opacity:.3},"buffer"===t.variant&&{backgroundColor:le(n,t.color),transition:"transform .".concat(4,"s linear")})}),(function(e){var t=e.ownerState;return("indeterminate"===t.variant||"query"===t.variant)&&Object(M.css)(ne||(ne=W||(W=Object(R.a)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;\n    "]))),re)})),be=r.forwardRef((function(e,t){var n=Object(E.a)({props:e,name:"MuiLinearProgress"}),i=n.className,a=n.color,r=void 0===a?"primary":a,o=n.value,l=n.valueBuffer,c=n.variant,s=void 0===c?"indeterminate":c,d=Object(L.a)(n,ie),u=Object(P.a)({},n,{color:r,variant:s}),b=function(e){var t=e.classes,n=e.variant,i=e.color,a={root:["root","color".concat(Object(q.a)(i)),n],dashed:["dashed","dashedColor".concat(Object(q.a)(i))],bar1:["bar","barColor".concat(Object(q.a)(i)),("indeterminate"===n||"query"===n)&&"bar1Indeterminate","determinate"===n&&"bar1Determinate","buffer"===n&&"bar1Buffer"],bar2:["bar","buffer"!==n&&"barColor".concat(Object(q.a)(i)),"buffer"===n&&"color".concat(Object(q.a)(i)),("indeterminate"===n||"query"===n)&&"bar2Indeterminate","buffer"===n&&"bar2Buffer"]};return Object(T.a)(a,H,t)}(u),j=Object(F.a)(),m={},v={bar1:{},bar2:{}};if("determinate"===s||"buffer"===s)if(void 0!==o){m["aria-valuenow"]=Math.round(o),m["aria-valuemin"]=0,m["aria-valuemax"]=100;var f=o-100;"rtl"===j.direction&&(f=-f),v.bar1.transform="translateX(".concat(f,"%)")}else 0;if("buffer"===s)if(void 0!==l){var h=(l||0)-100;"rtl"===j.direction&&(h=-h),v.bar2.transform="translateX(".concat(h,"%)")}else 0;return Object(k.jsxs)(ce,Object(P.a)({className:Object(z.a)(b.root,i),ownerState:u,role:"progressbar"},m,{ref:t},d,{children:["buffer"===s?Object(k.jsx)(se,{className:b.dashed,ownerState:u}):null,Object(k.jsx)(de,{className:b.bar1,ownerState:u,style:v.bar1}),"determinate"===s?null:Object(k.jsx)(ue,{className:b.bar2,ownerState:u,style:v.bar2})]}))})),je=n(330),me=n(262),ve=n.n(me),fe=(t.default=function(){var e=Object(r.useContext)(l.a),t=e.setSelectedBook,n=e.bookSearch,c=e.searchResults,b=e.isSearchLoading,j=fe().classes,v=Object(r.useState)(""),f=Object(i.a)(v,2),h=f[0],x=f[1],O=Object(r.useState)(""),g=Object(i.a)(O,2),p=g[0],I=g[1],S=Object(r.useState)(""),w=Object(i.a)(S,2),D=w[0],R=w[1],L=Object(r.useState)(""),P=Object(i.a)(L,2),z=P[0],T=P[1],M=Object(r.useState)(!1),A=Object(i.a)(M,2),q=A[0],F=A[1],_=function(e,n){e.preventDefault(),c&&(t(c[n]),F(!0))};return Object(k.jsxs)(d.a,{children:[Object(k.jsx)(u.a,{title:C.b.title,icon:Object(k.jsx)(s.a,{fontSize:"large"})}),Object(k.jsxs)(a.ErrorBoundary,{fallback:Object(k.jsx)("div",{children:"Something went wrong"}),children:[Object(k.jsx)(N,{onSubmit:function(e){e.preventDefault();var t={keyword:h.trim().replace(" ","%"),author:p.trim().replace(" ","%"),title:D.trim().replace(" ","%"),publisher:z.trim().replace(" ","%")};n(t)},keyword:h,setKeyword:x,author:p,setAuthor:I,title:D,setTitle:R,publisher:z,setPublisher:T}),Object(k.jsx)("hr",{}),b&&Object(k.jsx)(be,{color:"secondary"}),(null===c||void 0===c?void 0:c.length)?c.map((function(e,t){return Object(k.jsxs)(o.a.Fragment,{children:[Object(k.jsx)(y,{bookDetails:e,index:t,handleClick:_}),Object(k.jsx)("hr",{})]},e.id)})):Object(k.jsxs)(je.a,{className:j.noResults,children:[Object(k.jsx)(ve.a,{color:"secondary",fontSize:"large"}),Object(k.jsx)(m.a,{variant:"h6",children:"Oops! Looks like we didn't find any good matches for your search. Please try again."})]}),Object(k.jsx)(B.a,{isBookDialogOpen:q,setIsBookDialogOpen:F})]})]})},Object(f.makeStyles)({name:"BookSearch"})((function(e){return{noResults:{display:"flex",justifyContent:"center",gap:e.spacing(3),marginTop:e.spacing(3),padding:e.spacing(4,2)}}})))}}]);
//# sourceMappingURL=6.9ed3df36.chunk.js.map