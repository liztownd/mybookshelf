(this.webpackJsonpmybookshelf=this.webpackJsonpmybookshelf||[]).push([[7],{115:function(e,t,n){"use strict";n(0);var i=n(109),a=n(5);t.a=function(e){var t=e.children,n=r().classes;return Object(a.jsx)("div",{className:n.main,children:t})};var r=Object(i.makeStyles)({name:"PageContainer"})((function(e){return{main:{margin:e.spacing(0,3),padding:e.spacing(1,3)}}}))},116:function(e,t,n){"use strict";n(0);var i=n(315),a=n(109),r=n(131),o=n.n(r),l=n(5);t.a=function(e){var t=e.title,n=e.icon,a=c().classes;return Object(l.jsxs)("div",{className:a.container,children:[Object(l.jsx)("div",{className:a.icon,children:n||Object(l.jsx)(o.a,{fontSize:"large"})}),Object(l.jsx)(i.a,{variant:"h4",children:t})]})};var c=Object(a.makeStyles)({name:"PageTitles"})((function(e){return{container:{width:"100%",display:"flex",alignItems:"center",marginBottom:e.spacing(2)},icon:{marginRight:e.spacing(2),color:e.palette.primary.main}}}))},119:function(e,t,n){"use strict";var i=n(8),a=n(0),r=n(310),o=n(63),l=n(5);t.a=function(e){var t=e.id,n=e.status,c=Object(a.useContext)(o.a).updateStatus,s=Object(a.useState)(n),d=Object(i.a)(s,2),u=d[0],b=d[1];return Object(l.jsx)(r.a,{style:{margin:"10px",width:"150px"},label:u?"Read":"Mark as read",variant:u?"filled":"outlined",color:"secondary",onClick:function(){b(!u),c(t,!u)}})}},120:function(e,t,n){"use strict";t.a=n.p+"static/media/genericBook.d3f34275.png"},123:function(e,t,n){"use strict";var i=n(8),a=n(0),r=n(63),o=n(160),l=n.n(o),c=n(161),s=n.n(c),d=n(5),u=function(e){var t=e.starNumber,n=e.originalRating,i=e.rating,a=e.setRating,r=e.saveRating;return Object(d.jsx)(d.Fragment,{children:i>=t?Object(d.jsx)(l.a,{fontSize:"small",color:"primary",onMouseEnter:function(){return a(t)},onMouseLeave:function(){return a(n)},onClick:function(e){e.preventDefault(),r()}}):Object(d.jsx)(s.a,{fontSize:"small",color:"secondary",onMouseEnter:function(){return a(t)},onMouseLeave:function(){return a(n)},onClick:function(e){e.preventDefault(),r()}})})};t.a=function(e){var t=e.rating,n=e.id,o=Object(a.useContext)(r.a).updateRating,l=Object(a.useState)(t),c=Object(i.a)(l,2),s=c[0],b=c[1],v=function(){s&&o(n,s)};return Object(d.jsxs)("div",{style:{display:"flex",alignItems:"center",margin:"10px"},children:[Object(d.jsx)(u,{starNumber:1,originalRating:t,rating:s,setRating:b,saveRating:v}),Object(d.jsx)(u,{starNumber:2,originalRating:t,rating:s,setRating:b,saveRating:v}),Object(d.jsx)(u,{starNumber:3,originalRating:t,rating:s,setRating:b,saveRating:v}),Object(d.jsx)(u,{starNumber:4,originalRating:t,rating:s,setRating:b,saveRating:v}),Object(d.jsx)(u,{starNumber:5,originalRating:t,rating:s,setRating:b,saveRating:v})]})}},139:function(e,t,n){"use strict";var i=n(0),a=n(320),r=n(301),o=n(316),l=n(321),c=n(317),s=n(311),d=n(315),u=n(322),b=n(312),v=n(181),j=n.n(v),m=n(109),f=n(163),h=n.n(f),O=n(63),g=n(119),x=n(136),p=n.n(x),k=n(123),y=n(120),I=n(5);t.a=function(e){var t,n,v,m,f,x,S,w,N,B,R,D,L,P,T,z,M,A,q,F,_,K,H,V,E,J=e.isBookDialogOpen,U=e.setIsBookDialogOpen,X=C().classes,G=Object(i.useContext)(O.a),Q=G.addBook,W=G.selectedBook,Y=G.inUserList,Z=G.deleteBook,$=Y((null===W||void 0===W?void 0:W.id)||""),ee={book_id:(null===W||void 0===W?void 0:W.id)||"",title:(null===W||void 0===W||null===(t=W.volumeInfo)||void 0===t?void 0:t.title)||"",subtitle:(null===W||void 0===W||null===(n=W.volumeInfo)||void 0===n?void 0:n.subtitle)||"",authors:(null===W||void 0===W||null===(v=W.volumeInfo)||void 0===v||null===(m=v.authors)||void 0===m?void 0:m.join(","))||"",publishedDate:(null===W||void 0===W||null===(f=W.volumeInfo)||void 0===f?void 0:f.publishedDate)||"",description:(null===W||void 0===W||null===(x=W.volumeInfo)||void 0===x?void 0:x.description)||"",smallThumbnail:(null===W||void 0===W||null===(S=W.volumeInfo)||void 0===S||null===(w=S.imageLinks)||void 0===w?void 0:w.smallThumbnail)||"",thumbnail:(null===W||void 0===W||null===(N=W.volumeInfo)||void 0===N||null===(B=N.imageLinks)||void 0===B?void 0:B.thumbnail)||"",infoLink:(null===W||void 0===W||null===(R=W.volumeInfo)||void 0===R?void 0:R.infoLink)||"",read:!1,rating:0};return Object(I.jsx)(a.a,{open:J,children:W&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(r.a,{className:X.title,children:[null===W||void 0===W||null===(D=W.volumeInfo)||void 0===D?void 0:D.title,Object(I.jsx)(o.a,{title:"Close dialog",onClick:function(){return U(!1)},children:Object(I.jsx)(j.a,{})})]}),Object(I.jsx)(l.a,{children:Object(I.jsx)(c.a,{className:X.container,children:Object(I.jsxs)(s.a,{container:!0,direction:"column",spacing:3,children:[Object(I.jsx)(s.a,{item:!0,children:Object(I.jsx)("img",{src:(null===W||void 0===W||null===(L=W.volumeInfo)||void 0===L||null===(P=L.imageLinks)||void 0===P?void 0:P.thumbnail)||y.a,alt:null===W||void 0===W||null===(T=W.volumeInfo)||void 0===T?void 0:T.title,className:X.image})}),Object(I.jsxs)(s.a,{item:!0,children:[Object(I.jsx)("a",{href:null===W||void 0===W||null===(z=W.volumeInfo)||void 0===z?void 0:z.infoLink,target:"_blank",rel:"noreferrer",className:X.link,children:Object(I.jsx)(d.a,{variant:"h6",children:(null===W||void 0===W||null===(M=W.volumeInfo)||void 0===M?void 0:M.title)||""})}),Object(I.jsx)(d.a,{children:null===W||void 0===W||null===(A=W.volumeInfo)||void 0===A||null===(q=A.authors)||void 0===q?void 0:q.join(",")}),(null===W||void 0===W||null===(F=W.volumeInfo)||void 0===F||null===(_=F.description)||void 0===_?void 0:_.startsWith("<"))?Object(I.jsx)("div",{children:h()(null===W||void 0===W||null===(K=W.volumeInfo)||void 0===K?void 0:K.description)}):Object(I.jsx)(d.a,{variant:"body1",children:(null===W||void 0===W||null===(H=W.volumeInfo)||void 0===H?void 0:H.description)||""}),Object(I.jsx)(d.a,{variant:"subtitle2",children:(null===W||void 0===W||null===(V=W.volumeInfo)||void 0===V?void 0:V.publishedDate)||""})]})]})})}),Object(I.jsx)(u.a,{className:X.actionArea,children:Object(I.jsxs)(s.a,{container:!0,spacing:1,alignItems:"center",children:[Object(I.jsx)(s.a,{item:!0,children:$?Object(I.jsxs)("div",{className:X.userDiv,children:[Object(I.jsx)(g.a,{id:$.id,status:Boolean(null===$||void 0===$?void 0:$.read)}),Object(I.jsx)(k.a,{rating:$.rating||0,id:$.id}),Object(I.jsx)(b.a,{title:"Remove from shelf",color:"secondary",onClick:function(){return Z($.id)},children:"Remove from shelf"})]}):Object(I.jsx)(b.a,{title:"Add to shelf",variant:"contained",color:"primary",onClick:function(){return Q(ee)},children:"Add to shelf"})}),Object(I.jsx)(s.a,{item:!0,children:Object(I.jsx)(b.a,{title:"View on web",children:Object(I.jsx)("a",{href:null===W||void 0===W||null===(E=W.volumeInfo)||void 0===E?void 0:E.infoLink,target:"_blank",rel:"noreferrer",children:Object(I.jsx)(p.a,{fontSize:"small",color:"secondary"})})})})]})})]})})};var C=Object(m.makeStyles)({name:"NewBookDialog"})((function(e){return{title:{display:"flex",justifyContent:"space-between",alignItems:"center"},container:{margin:e.spacing(2)},image:{},link:{color:e.palette.primary.main,textDecoration:"none"},actionArea:{padding:e.spacing(3)},userDiv:{display:"flex",alignItems:"center"}}}))},141:function(e,t,n){"use strict";var i=n(0),a=n(116),r=n(109),o=n(159),l=n.n(o),c=n(41),s=n(40),d=n(135),u=n.n(d),b=n(7),v=n(316),j=n(39),m=n(5),f=function(e){var t=e.linkTo,n=e.icon,i=e.isSelected,a=h(),r=a.classes,o=a.cx;return Object(m.jsx)(v.a,{className:o(r.link,Object(b.a)({},r.isSelected,i)),children:Object(m.jsx)(j.b,{to:t,children:n})})},h=Object(r.makeStyles)({name:"HeaderLink"})((function(e){return{link:{height:e.spacing(7),width:e.spacing(7),borderRadius:50,display:"flex",justifyContent:"center",alignItems:"center"},isSelected:{border:"1px solid ".concat(e.palette.primary.main)}}})),O=n(2),g=(t.a=function(e){var t=e.title,n=e.icon,r=g().classes,o=Object(i.useContext)(c.b).user,d=Object(O.l)();return Object(m.jsxs)("div",{className:r.container,children:[Object(m.jsx)(a.a,{title:t,icon:n||null}),Object(m.jsxs)("div",{className:r.actionsContainer,children:[Object(m.jsx)(f,{linkTo:s.c.path.replace(":userId",(null===o||void 0===o?void 0:o.id.toString())||""),icon:Object(m.jsx)(l.a,{color:d.pathname.includes("manage")?"secondary":"primary",className:r.linkIcon}),isSelected:d.pathname.includes("manage")}),Object(m.jsx)(f,{linkTo:s.b.path.replace(":userId",(null===o||void 0===o?void 0:o.id.toString())||""),icon:Object(m.jsx)(u.a,{color:d.pathname.includes("search")?"secondary":"primary",className:r.linkIcon}),isSelected:d.pathname.includes("search")})]})]})},Object(r.makeStyles)({name:"Header"})((function(e){return{container:{padding:e.spacing(2),width:"100%",display:"flex",justifyContents:"space-evenly",alignItems:"center"},actionsContainer:{marginRight:e.spacing(2),display:"flex",justifyContents:"flex-end",alignItems:"center"},linkIcon:{padding:0,marginTop:-4,marginRight:-3}}})))},175:function(e,t){},256:function(e,t,n){"use strict";var i=n(110);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(111)),r=n(5),o=(0,a.default)((0,r.jsx)("path",{d:"M19.88 18.47c.44-.7.7-1.51.7-2.39 0-2.49-2.01-4.5-4.5-4.5s-4.5 2.01-4.5 4.5 2.01 4.5 4.49 4.5c.88 0 1.7-.26 2.39-.7L21.58 23 23 21.58l-3.12-3.11zm-3.8.11c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zm-.36-8.5c-.74.02-1.45.18-2.1.45l-.55-.83-3.8 6.18-3.01-3.52-3.63 5.81L1 17l5-8 3 3.5L13 6l2.72 4.08zm2.59.5c-.64-.28-1.33-.45-2.05-.49L21.38 2 23 3.18l-4.69 7.4z"}),"QueryStats");t.default=o},308:function(e,t,n){"use strict";n.r(t);var i=n(8),a=n(0),r=n.n(a),o=n(63),l=n(135),c=n.n(l),s=n(115),d=n(141),u=n(317),b=n(311),v=n(315),j=n(312),m=n(109),f=n(136),h=n.n(f),O=n(119),g=n(123),x=n(120),p=n(5),k=function(e){var t,n,i,r,l,c,s,d,m,f,k,I,C,S,w,N,B,R,D,L,P,T,z=e.bookDetails,M=e.index,A=e.handleClick,q=Object(a.useContext)(o.a),F=q.inUserList,_=q.deleteBook,K=q.addBook,H=y().classes,V=F(z.id),E={book_id:(null===z||void 0===z?void 0:z.id)||"",title:(null===z||void 0===z||null===(t=z.volumeInfo)||void 0===t?void 0:t.title)||"",subtitle:(null===z||void 0===z||null===(n=z.volumeInfo)||void 0===n?void 0:n.subtitle)||"",authors:(null===z||void 0===z||null===(i=z.volumeInfo)||void 0===i||null===(r=i.authors)||void 0===r?void 0:r.join(","))||"",publishedDate:(null===z||void 0===z||null===(l=z.volumeInfo)||void 0===l?void 0:l.publishedDate)||"",description:(null===z||void 0===z||null===(c=z.volumeInfo)||void 0===c?void 0:c.description)||"",smallThumbnail:(null===z||void 0===z||null===(s=z.volumeInfo)||void 0===s||null===(d=s.imageLinks)||void 0===d?void 0:d.smallThumbnail)||"",thumbnail:(null===z||void 0===z||null===(m=z.volumeInfo)||void 0===m||null===(f=m.imageLinks)||void 0===f?void 0:f.thumbnail)||"",infoLink:(null===z||void 0===z||null===(k=z.volumeInfo)||void 0===k?void 0:k.infoLink)||"",read:!1,rating:0};return Object(p.jsx)(u.a,{className:H.container,children:Object(p.jsxs)(b.a,{container:!0,direction:"row",spacing:3,children:[Object(p.jsx)(b.a,{item:!0,sm:12,md:2,children:Object(p.jsx)("img",{src:(null===z||void 0===z||null===(I=z.volumeInfo)||void 0===I||null===(C=I.imageLinks)||void 0===C?void 0:C.smallThumbnail)||x.a,alt:null===z||void 0===z||null===(S=z.volumeInfo)||void 0===S?void 0:S.title,className:H.image})}),Object(p.jsx)(b.a,{item:!0,sm:12,md:10,children:Object(p.jsxs)(b.a,{container:!0,direction:"column",children:[Object(p.jsx)(b.a,{item:!0,children:Object(p.jsxs)(v.a,{variant:"h5",color:"primary",gutterBottom:!0,children:[(null===z||void 0===z||null===(w=z.volumeInfo)||void 0===w?void 0:w.title)||"",(null===z||void 0===z||null===(N=z.volumeInfo)||void 0===N?void 0:N.subtitle)?": ".concat(null===z||void 0===z||null===(B=z.volumeInfo)||void 0===B?void 0:B.subtitle):""]})}),Object(p.jsx)(b.a,{item:!0,children:Object(p.jsx)(v.a,{gutterBottom:!0,children:null===z||void 0===z||null===(R=z.volumeInfo)||void 0===R||null===(D=R.authors)||void 0===D?void 0:D.join(", ")})}),Object(p.jsx)(b.a,{item:!0,children:Object(p.jsx)("div",{className:H.descriptionContainer,children:(null===z||void 0===z||null===(L=z.volumeInfo)||void 0===L?void 0:L.description)||""})}),Object(p.jsx)(b.a,{item:!0,children:Object(p.jsxs)(v.a,{variant:"subtitle2",gutterBottom:!0,children:["Published: ",(null===z||void 0===z||null===(P=z.volumeInfo)||void 0===P?void 0:P.publishedDate)||""]})}),Object(p.jsx)(b.a,{item:!0,children:Object(p.jsxs)(b.a,{container:!0,spacing:1,alignItems:"center",className:H.actionContainer,children:[Object(p.jsx)(b.a,{item:!0,children:V?Object(p.jsxs)("div",{className:H.userBookDiv,children:[Object(p.jsx)(O.a,{id:V.id,status:Boolean(null===V||void 0===V?void 0:V.read)}),Object(p.jsx)(g.a,{rating:V.rating||0,id:V.id}),Object(p.jsx)(j.a,{title:"Remove from shelf",color:"secondary",onClick:function(){return _(V.id)},children:"Remove from shelf"})]}):Object(p.jsx)(j.a,{title:"Add to shelf",variant:"outlined",color:"primary",onClick:function(){return K(E)},children:"Add to shelf"})}),Object(p.jsx)(b.a,{item:!0,children:Object(p.jsx)(j.a,{title:"View details",color:"secondary",onClick:function(e){A(e,M)},children:"Details"})}),Object(p.jsx)(b.a,{item:!0,children:Object(p.jsx)(j.a,{title:"View on web",children:Object(p.jsx)("a",{href:null===z||void 0===z||null===(T=z.volumeInfo)||void 0===T?void 0:T.infoLink,target:"_blank",rel:"noreferrer",children:Object(p.jsx)(h.a,{fontSize:"small",color:"secondary"})})})})]})})]})})]})})},y=Object(m.makeStyles)({name:"BookDisplay"})((function(e){return{container:{margin:e.spacing(2)},image:{marginTop:e.spacing(2)},link:{color:e.palette.secondary.main,textDecoration:"none"},descriptionContainer:{overflow:"hidden",maxHeight:"78px"},actionContainer:{margin:e.spacing(2,0)},userBookDiv:{display:"flex",alignItems:"center"}}})),I=n(40),C=n(305),S=function(e){var t=e.onSubmit,n=e.keyword,i=e.setKeyword,r=e.author,l=e.setAuthor,c=e.title,s=e.setTitle,d=e.publisher,u=e.setPublisher,m=Object(a.useContext)(o.a).isSearchLoading,f=w().classes;return Object(p.jsxs)("form",{onSubmit:function(e){return t(e)},children:[Object(p.jsxs)(b.a,{container:!0,spacing:3,className:f.fieldContainer,children:[Object(p.jsx)(b.a,{item:!0,xs:12,lg:6,children:Object(p.jsxs)("div",{className:f.fieldDiv,children:[Object(p.jsx)(v.a,{className:f.label,children:"Keyword: "}),Object(p.jsx)(C.a,{className:f.textField,value:n,label:"Keyword",onChange:function(e){return i(e.target.value)}})]})}),Object(p.jsx)(b.a,{item:!0,xs:12,lg:6,children:Object(p.jsxs)("div",{className:f.fieldDiv,children:[Object(p.jsx)(v.a,{className:f.label,children:"Title: "}),Object(p.jsx)(C.a,{className:f.textField,value:c,label:"Title",onChange:function(e){return s(e.target.value)}})]})}),Object(p.jsx)(b.a,{item:!0,xs:12,lg:6,children:Object(p.jsxs)("div",{className:f.fieldDiv,children:[Object(p.jsx)(v.a,{className:f.label,children:"Author: "}),Object(p.jsx)(C.a,{className:f.textField,value:r,label:"Author",onChange:function(e){return l(e.target.value)}})]})}),Object(p.jsx)(b.a,{item:!0,xs:12,lg:6,children:Object(p.jsxs)("div",{className:f.fieldDiv,children:[Object(p.jsx)(v.a,{className:f.label,children:"Publisher: "}),Object(p.jsx)(C.a,{className:f.textField,value:d,label:"Publisher",onChange:function(e){return u(e.target.value)}})]})})]}),Object(p.jsx)(j.a,{title:"Search",className:f.searchButton,disabled:m,type:"submit",onClick:function(e){return t(e)},variant:"contained",children:"Search"})]})},w=Object(m.makeStyles)({name:"BookSearch"})((function(e){return{fieldDiv:{width:"90%",display:"flex",alignItems:"center",justifyContent:"flex-start"},label:{width:"15%"},textField:{flexGrow:1},fieldContainer:{marginBottom:e.spacing(3)},searchButton:{marginLeft:"calc(50% - 200px)",width:"400px"}}})),N=n(139),B=n(29),R=n(18),D=n(11),L=n(61),P=n(100),T=n(28),z=n(102),M=n(27),A=n(113),q=n(37),F=n(62),_=n(101),K=n(89);function H(e){return Object(K.a)("MuiLinearProgress",e)}Object(_.a)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var V,E,J,U,X,G,Q,W,Y,Z,$,ee,te=["className","color","value","valueBuffer","variant"],ne=Object(T.keyframes)(Q||(Q=V||(V=Object(B.a)(["\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n"])))),ie=Object(T.keyframes)(W||(W=E||(E=Object(B.a)(["\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n"])))),ae=Object(T.keyframes)(Y||(Y=J||(J=Object(B.a)(["\n  0% {\n    opacity: 1;\n    background-position: 0 -23px;\n  }\n\n  60% {\n    opacity: 0;\n    background-position: 0 -23px;\n  }\n\n  100% {\n    opacity: 1;\n    background-position: -200px -23px;\n  }\n"])))),re=function(e,t){return"inherit"===t?"currentColor":e.vars?e.vars.palette.LinearProgress["".concat(t,"Bg")]:"light"===e.palette.mode?Object(z.i)(e.palette[t].main,.62):Object(z.b)(e.palette[t].main,.5)},oe=Object(q.a)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["color".concat(Object(M.a)(n.color))],t[n.variant]]}})((function(e){var t=e.ownerState,n=e.theme;return Object(D.a)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:re(n,t.color)},"inherit"===t.color&&"buffer"!==t.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===t.variant&&{backgroundColor:"transparent"},"query"===t.variant&&{transform:"rotate(180deg)"})})),le=Object(q.a)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:function(e,t){var n=e.ownerState;return[t.dashed,t["dashedColor".concat(Object(M.a)(n.color))]]}})((function(e){var t=e.ownerState,n=e.theme,i=re(n,t.color);return Object(D.a)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===t.color&&{opacity:.3},{backgroundImage:"radial-gradient(".concat(i," 0%, ").concat(i," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),Object(T.css)(Z||(Z=U||(U=Object(B.a)(["\n    animation: "," 3s infinite linear;\n  "]))),ae)),ce=Object(q.a)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:function(e,t){var n=e.ownerState;return[t.bar,t["barColor".concat(Object(M.a)(n.color))],("indeterminate"===n.variant||"query"===n.variant)&&t.bar1Indeterminate,"determinate"===n.variant&&t.bar1Determinate,"buffer"===n.variant&&t.bar1Buffer]}})((function(e){var t=e.ownerState,n=e.theme;return Object(D.a)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===t.color?"currentColor":(n.vars||n).palette[t.color].main},"determinate"===t.variant&&{transition:"transform .".concat(4,"s linear")},"buffer"===t.variant&&{zIndex:1,transition:"transform .".concat(4,"s linear")})}),(function(e){var t=e.ownerState;return("indeterminate"===t.variant||"query"===t.variant)&&Object(T.css)($||($=X||(X=Object(B.a)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    "]))),ne)})),se=Object(q.a)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:function(e,t){var n=e.ownerState;return[t.bar,t["barColor".concat(Object(M.a)(n.color))],("indeterminate"===n.variant||"query"===n.variant)&&t.bar2Indeterminate,"buffer"===n.variant&&t.bar2Buffer]}})((function(e){var t=e.ownerState,n=e.theme;return Object(D.a)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==t.variant&&{backgroundColor:"inherit"===t.color?"currentColor":(n.vars||n).palette[t.color].main},"inherit"===t.color&&{opacity:.3},"buffer"===t.variant&&{backgroundColor:re(n,t.color),transition:"transform .".concat(4,"s linear")})}),(function(e){var t=e.ownerState;return("indeterminate"===t.variant||"query"===t.variant)&&Object(T.css)(ee||(ee=G||(G=Object(B.a)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;\n    "]))),ie)})),de=a.forwardRef((function(e,t){var n=Object(F.a)({props:e,name:"MuiLinearProgress"}),i=n.className,a=n.color,r=void 0===a?"primary":a,o=n.value,l=n.valueBuffer,c=n.variant,s=void 0===c?"indeterminate":c,d=Object(R.a)(n,te),u=Object(D.a)({},n,{color:r,variant:s}),b=function(e){var t=e.classes,n=e.variant,i=e.color,a={root:["root","color".concat(Object(M.a)(i)),n],dashed:["dashed","dashedColor".concat(Object(M.a)(i))],bar1:["bar","barColor".concat(Object(M.a)(i)),("indeterminate"===n||"query"===n)&&"bar1Indeterminate","determinate"===n&&"bar1Determinate","buffer"===n&&"bar1Buffer"],bar2:["bar","buffer"!==n&&"barColor".concat(Object(M.a)(i)),"buffer"===n&&"color".concat(Object(M.a)(i)),("indeterminate"===n||"query"===n)&&"bar2Indeterminate","buffer"===n&&"bar2Buffer"]};return Object(P.a)(a,H,t)}(u),v=Object(A.a)(),j={},m={bar1:{},bar2:{}};if("determinate"===s||"buffer"===s)if(void 0!==o){j["aria-valuenow"]=Math.round(o),j["aria-valuemin"]=0,j["aria-valuemax"]=100;var f=o-100;"rtl"===v.direction&&(f=-f),m.bar1.transform="translateX(".concat(f,"%)")}else 0;if("buffer"===s)if(void 0!==l){var h=(l||0)-100;"rtl"===v.direction&&(h=-h),m.bar2.transform="translateX(".concat(h,"%)")}else 0;return Object(p.jsxs)(oe,Object(D.a)({className:Object(L.a)(b.root,i),ownerState:u,role:"progressbar"},j,{ref:t},d,{children:["buffer"===s?Object(p.jsx)(le,{className:b.dashed,ownerState:u}):null,Object(p.jsx)(ce,{className:b.bar1,ownerState:u,style:m.bar1}),"determinate"===s?null:Object(p.jsx)(se,{className:b.bar2,ownerState:u,style:m.bar2})]}))})),ue=n(323),be=n(256),ve=n.n(be),je=(t.default=function(){var e=Object(a.useContext)(o.a),t=e.setSelectedBook,n=e.bookSearch,l=e.searchResults,u=e.isSearchLoading,b=je().classes,j=Object(a.useState)(""),m=Object(i.a)(j,2),f=m[0],h=m[1],O=Object(a.useState)(""),g=Object(i.a)(O,2),x=g[0],y=g[1],C=Object(a.useState)(""),w=Object(i.a)(C,2),B=w[0],R=w[1],D=Object(a.useState)(""),L=Object(i.a)(D,2),P=L[0],T=L[1],z=Object(a.useState)(!1),M=Object(i.a)(z,2),A=M[0],q=M[1],F=function(e,n){e.preventDefault(),l&&(t(l[n]),q(!0))};return Object(p.jsxs)(s.a,{children:[Object(p.jsx)(d.a,{title:I.b.title,icon:Object(p.jsx)(c.a,{fontSize:"large"})}),Object(p.jsx)(S,{onSubmit:function(e){e.preventDefault();var t={keyword:f.trim().replace(" ","%"),author:x.trim().replace(" ","%"),title:B.trim().replace(" ","%"),publisher:P.trim().replace(" ","%")};n(t)},keyword:f,setKeyword:h,author:x,setAuthor:y,title:B,setTitle:R,publisher:P,setPublisher:T}),Object(p.jsx)("hr",{}),u&&Object(p.jsx)(de,{color:"secondary"}),(null===l||void 0===l?void 0:l.length)?l.map((function(e,t){return Object(p.jsxs)(r.a.Fragment,{children:[Object(p.jsx)(k,{bookDetails:e,index:t,handleClick:F}),Object(p.jsx)("hr",{})]},e.id)})):Object(p.jsxs)(ue.a,{className:b.noResults,children:[Object(p.jsx)(ve.a,{color:"secondary",fontSize:"large"}),Object(p.jsx)(v.a,{variant:"h6",children:"Oops! Looks like we didn't find any good matches for your search. Please try again."})]}),Object(p.jsx)(N.a,{isBookDialogOpen:A,setIsBookDialogOpen:q})]})},Object(m.makeStyles)({name:"BookSearch"})((function(e){return{noResults:{display:"flex",alignItems:"center",justifyContent:"center",gap:e.spacing(3),marginTop:e.spacing(3),height:e.spacing(20)}}})))}}]);
//# sourceMappingURL=7.51376b5f.chunk.js.map