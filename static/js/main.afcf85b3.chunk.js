(this["webpackJsonpreact-solid-sidebar-example"]=this["webpackJsonpreact-solid-sidebar-example"]||[]).push([[0],{82:function(e,t,a){e.exports=a(98)},83:function(e,t,a){},92:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);a(83);var n=a(0),i=a.n(n),r=a(19),l=a.n(r),o=a(126),c=a(134),m=a(129),u=a(130),s=a(50),d=a.n(s),g=a(127),p=a(47),h=a(135),f=a(128),b=a(70),E=a(49),x=Object(o.a)({headerTitle:{marginTop:16,marginRight:16,marginLeft:16,marginBottom:16},headerTitleMobile:{marginTop:76,marginRight:16,marginLeft:16,marginBottom:16},sidebar:{display:"flex",overflow:"hidden",flexShrink:0,background:d.a[100],backdropFilter:"blur(9px)",whiteSpace:"nowrap",padding:0,margin:0,width:220,height:"100vh",flexDirection:"column"},sidebarMobile:{display:"flex",overflow:"hidden",flexShrink:0,background:d.a[100],backdropFilter:"blur(9px)",whiteSpace:"nowrap",padding:0,margin:0,width:"100vw",height:60},sidebarList:{display:"flex",flexDirection:"column",margin:0,padding:0},sidebarListMobile:{display:"flex",margin:0,padding:0},logout:{alignSelf:"center",marginTop:16},logoutMobile:{alignSelf:"center",marginRight:16}}),w=Object(b.a)((function(e){var t=x(),a=Object(E.useMediaQuery)({query:"(max-width: 767px)"});return i.a.createElement(c.a,{display:"flex",position:"fixed",zIndex:"appBar"},i.a.createElement(c.a,{className:a?t.sidebarMobile:t.sidebar},i.a.createElement(g.a,{className:a?t.sidebarListMobile:t.sidebarList,dense:!0},i.a.createElement(h.a,{style:{margin:16}},i.a.createElement(p.a,{variant:"h6"},e.title)),e.listItems.map((function(e,t){return i.a.createElement(h.a,{key:t,button:!0,component:"a",onClick:e.goTo,selected:e.isSelected()},a?i.a.createElement(c.a,{flexDirection:"column",alignItems:"center"},i.a.createElement(f.a,null,e.icon),i.a.createElement(m.a,{primary:e.text})):i.a.createElement(n.Fragment,null,i.a.createElement(f.a,null,e.icon),i.a.createElement(m.a,{primary:e.text})))}))),a&&i.a.createElement(c.a,{flexGrow:1}),i.a.createElement(c.a,{className:a?t.logoutMobile:t.logout},e.actionButton)))})),y=Object(o.a)({content:{display:"flex",flexDirection:"column",flex:1,maxWidth:"none",flexShrink:0,whiteSpace:"nowrap",padding:0},headerTitle:{marginTop:16,marginRight:16,marginLeft:16,marginBottom:16},headerTitleMobile:{marginTop:76,marginRight:16,marginLeft:16,marginBottom:16}}),M=function(e){var t,a=y(),n=Object(E.useMediaQuery)({query:"(max-width: 767px)"});return i.a.createElement(c.a,{className:a.content,style:{marginLeft:n?0:220}},i.a.createElement(c.a,{className:n?a.headerTitleMobile:a.headerTitle},i.a.createElement(p.a,{variant:"h3"},null===(t=e.listItems.find((function(e){return e.isSelected()})))||void 0===t?void 0:t.title)),i.a.createElement(c.a,{flex:1,style:{margin:16}},e.children))},v=Object(o.a)({root:{padding:0,margin:0}}),T=function(e){var t=v();return i.a.createElement(u.a,{component:"main",maxWidth:!1,className:t.root},i.a.createElement(w,{title:e.title,listItems:e.listItems,actionButton:e.actionButton}),i.a.createElement(M,{listItems:e.listItems}))},k=(a(92),a(133)),B=a(131),S=a(136),I=a(67),L=a.n(I),O=a(68),j=a.n(O),N=a(5),D=function(){return i.a.createElement(k.a,null,i.a.createElement(B.a,{variant:"h2"},"\u30e1\u30cb\u30e5\u30fcA"))},R=function(){return i.a.createElement(k.a,null,i.a.createElement(B.a,{variant:"h2"},"\u30e1\u30cb\u30e5\u30fcA"))},A=function(e){var t=[{text:"Menu A",title:"Menu A",icon:i.a.createElement(L.a,null),goTo:function(){return e.history.push("/menu-a")},isSelected:function(){return"/menu-a"===window.location.pathname}},{text:"Menu B",title:"Menu B",icon:i.a.createElement(j.a,null),goTo:function(){return e.history.push("/menu-b")},isSelected:function(){return"/menu-b"===window.location.pathname}}],a=i.a.createElement(S.a,{onClick:function(){return console.log("button clicked!")}});return i.a.createElement(T,{title:"DEMO Page",listItems:t,actionButton:a},i.a.createElement(N.b,{exact:!0,path:"/menu-a",component:D}),i.a.createElement(N.b,{exact:!0,path:"/menu-b",component:R}),i.a.createElement(N.b,{exact:!0,path:"/",render:function(){return i.a.createElement(N.a,{to:"menu-a"})}}))},F=a(69);l.a.render(i.a.createElement(F.a,null,i.a.createElement(A,null)),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.afcf85b3.chunk.js.map