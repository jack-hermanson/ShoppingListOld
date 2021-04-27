(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{116:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(23),s=n.n(a),o=n(133),u=n(130),i=n(131),l=n(15),j=n(27),d=n(28),p=n(31),f=n(30),b=n(3),h=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"page-title",children:[Object(b.jsx)("h4",{className:"title-text",children:this.props.title}),Object(b.jsx)("div",{className:"right",children:this.props.children})]})})}}]),n}(r.Component),m=n(135),O=n(136),x=n(137),g=n(125),v=n(127),k=n(124),w=n(132),y=n(9),C=n(5),N=n.n(C),I=n(11),G=n(13),S=n(17),D=n.n(S),F="/api/alerts/",E=function(){var e=Object(I.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get(F);case 2:return t=e.sent,console.log("getAlerts(), response.data",t.data),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(I.a)(N.a.mark((function e(t,n){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.post(F,{text:t,color:n});case 2:if(200!==e.sent.status){e.next=8;break}return e.next=6,Promise.resolve();case 6:e.next=10;break;case 8:return e.next=10,Promise.reject();case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),R=function(){var e=Object(I.a)(N.a.mark((function e(t,n){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="Successfully ".concat(t," ").concat(n,"."),e.next=3,A(r,"success");case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),T=function(){var e=Object(I.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("/api/items/");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(I.a)(N.a.mark((function e(t){var n,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.put("/api/items/edit/".concat(t.id),t);case 3:n=e.sent,r=n.data,console.log("new name",r.name),R("updated",'item "'.concat(r.name,'"')).then((function(){console.log(r.name)})),e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(0),e.next=13,A("Error in editItem api call: ".concat(e.t0.message),"danger");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(I.a)(N.a.mark((function e(t,n){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.put("/api/items/toggle/".concat(t),{checked:n});case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),e.next=9,A("Error in toggleItemCheck api call: ".concat(e.t0.message),"danger");case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,n){return e.apply(this,arguments)}}(),P=function(){var e=Object(I.a)(N.a.mark((function e(t){var n,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.post("/api/items/",t);case 3:return n=e.sent,r=n.data,e.next=7,R("added",'item "'.concat(r.name,'"'));case 7:return e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,A("Error in the saveItem api call: ".concat(e.t0.message),"danger");case 14:throw new Error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(I.a)(N.a.mark((function e(t){var n,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.delete("/api/items/",{data:{id:t}});case 3:return n=e.sent,r=n.data,e.next=7,R("deleted",'item "'.concat(r.name,'"'));case 7:e.next=14;break;case 9:return e.prev=9,e.t0=e.catch(0),e.next=13,A("Error in the deleteItem api call: ".concat(e.t0.message),"danger");case 13:throw new Error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(I.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("/api/groups/");case 2:return t=e.sent,e.abrupt("return",t.data.map((function(e){return Object(y.a)(Object(y.a)({},e),{},{visible:!0})})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(I.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.post("/api/groups/complete/".concat(t));case 2:if(200===(n=e.sent).status){e.next=5;break}throw new Error("Response status ".concat(n.status," in completeGroup"));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(I.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.post("/api/groups/",t);case 2:return n=e.sent,e.next=5,R("added",'group "'.concat(n.data.name,'"'));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(I.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log({group:t}),e.next=3,D.a.put("/api/groups/edit/".concat(t.id),t);case 3:return n=e.sent,e.next=6,R("edited",'group "'.concat(n.data.name,'"'));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(I.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.delete("/api/groups/delete/".concat(t));case 2:return n=e.sent,e.next=5,R("deleted",'group "'.concat(n.data.name,'" and ').concat(n.data.itemsDeleted," item").concat(1===n.data.itemsDeleted?"":"s"));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function L(e){var t=!0,n="";return e.name.replace(" ","").length<2&&(t=!1,n+="The 'name' field must have at least 2 characters. "),e.groups.length<1&&(t=!1,n+="At least one group is required. "),{isValid:t,alertText:n}}var U={name:"",notes:"",groups:[],checked:!1,recurring:!1,id:void 0},Y=Object(G.c)({groups:[],setGroups:Object(G.b)((function(e,t){e.groups=t})),fetchGroups:Object(G.e)(function(){var e=Object(I.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V();case 2:n=e.sent,t.setGroups(n.sort((function(e,t){return"Misc"===e.name?1:"Misc"===t.name?-1:0})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),saveGroup:Object(G.e)(function(){var e=Object(I.a)(N.a.mark((function e(t,n){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Date.now(),e.next=3,J(n);case 3:return console.log("New group created. Response time: ".concat(H(r),"s")),e.next=6,t.fetchGroups();case 6:return e.next=8,t.fetchAlerts();case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),toggleGroup:Object(G.b)((function(e,t){e.groups=e.groups.map((function(e){return e.id!==t||(e.visible=!e.visible),e}))})),completeGroup:Object(G.e)(function(){var e=Object(I.a)(N.a.mark((function e(t,n){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Date.now(),e.next=3,z(n);case 3:return console.log("Group completed. Response time: ".concat(H(r),"s")),e.next=6,t.fetchItems();case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),editGroup:Object(G.e)(function(){var e=Object(I.a)(N.a.mark((function e(t,n){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Date.now(),e.next=3,M(n);case 3:return console.log("Group edited. Response time: ".concat(H(r),"s")),e.next=6,t.fetchGroups();case 6:return e.next=8,t.fetchAlerts();case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),deleteGroup:Object(G.e)(function(){var e=Object(I.a)(N.a.mark((function e(t,n){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Date.now(),e.next=3,_(n);case 3:return console.log("Group deleted. Response time: ".concat(H(r),"s")),e.next=6,t.fetchGroups();case 6:return e.next=8,t.fetchItems();case 8:return e.next=10,t.fetchAlerts();case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),items:null,setItems:Object(G.b)((function(e,t){e.items=t})),fetchItems:Object(G.e)(function(){var e=Object(I.a)(N.a.mark((function e(t){var n,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Date.now(),e.next=3,T();case 3:r=e.sent,console.log("Retrieved ".concat(r.length," items. Response time: ").concat(H(n),"s")),t.setItems(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),editItem:Object(G.e)(function(){var e=Object(I.a)(N.a.mark((function e(t,n){var r,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(y.a)(Object(y.a)({},n),{},{groups:n.groups.map((function(e){return e.groupId}))}),c=Date.now(),e.next=4,q(r);case 4:return console.log("Item edited. Response time: ".concat(H(c),"s")),e.next=7,t.fetchItems();case 7:return e.next=9,t.fetchAlerts();case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),deleteItem:Object(G.e)(function(){var e=Object(I.a)(N.a.mark((function e(t,n){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Date.now(),e.next=3,K(n);case 3:return console.log("Item deleted. Response time: ".concat(H(r),"s")),e.next=6,t.fetchItems();case 6:return e.next=8,t.fetchAlerts();case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),toggleItemCheck:Object(G.b)((function(e,t){var n=Date.now();e.items=e.items.map((function(e){return e.id===t.itemId?(e.checked=t.checked,e):e})),B(t.itemId,t.checked).then((function(){console.log("Item ".concat(t.checked?"":"un","checked. Response time: ").concat(H(n),"s"))}))})),focusItem:null,setFocusItem:Object(G.b)((function(e,t){e.focusItem=t})),saveItem:Object(G.e)(function(){var e=Object(I.a)(N.a.mark((function e(t,n){var r,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Date.now(),c=Object(y.a)(Object(y.a)({},n),{},{groups:n.groups.map((function(e){return e.groupId}))}),e.next=4,P(c);case 4:return console.log("New item added. Response time: ".concat(H(r),"s")),e.next=7,t.fetchItems();case 7:return e.next=9,t.fetchAlerts();case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),newItem:U,setNewItem:Object(G.b)((function(e,t){e.newItem=t})),alerts:[],setAlerts:Object(G.b)((function(e,t){e.alerts=t})),fetchAlerts:Object(G.e)(function(){var e=Object(I.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetching alerts"),e.next=3,E();case 3:n=e.sent,t.setAlerts(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),H=function(e){return(Date.now()-e)/1e3},Q=Object(G.d)(),W=Q.useStoreActions,X=(Q.useStoreDispatch,Q.useStoreState),Z=n(54),$=function(e){var t;null===(t=document.getElementById(e))||void 0===t||t.scrollIntoView({behavior:"smooth"})},ee=n(134),te=n(118),ne=n(119),re=n(120),ce=function(e){return Object(b.jsxs)(ee.a,{toggle:e.toggle,isOpen:e.isOpen,children:[Object(b.jsxs)(te.a,{toggle:e.toggle,children:["Confirm ",e.abstract]}),Object(b.jsxs)(ne.a,{children:[Object(b.jsxs)("p",{children:["Are you sure you want to ",e.specific,"?"]}),Object(b.jsx)("p",{className:"mb-0",children:e.dialogText})]}),Object(b.jsxs)(re.a,{children:[Object(b.jsx)(Z.a,{color:"secondary",onClick:e.toggle,children:"Cancel"}),Object(b.jsx)(Z.a,{color:"info",onClick:e.onConfirm,children:"Confirm"})]})]})},ae=n(123),se=n(121),oe=n(122),ue=function(e){return Object(r.useEffect)((function(){var t;e.autofocus&&(null===(t=document.getElementById(e.id))||void 0===t||t.focus())})),Object(b.jsxs)(r.Fragment,{children:[Object(b.jsx)(se.a,{required:e.required,htmlFor:e.id,children:e.label}),Object(b.jsx)(oe.a,{required:e.required,id:e.id,type:e.type,value:e.value,onChange:e.onChange,onKeyPress:e.onKeyPress,placeholder:e.placeholder,autoFocus:e.autofocus})]})},ie=function(e){var t=e.group,n=e.toggle,c=e.isOpen,a=Object(r.useState)(t),s=Object(l.a)(a,2),o=s[0],u=s[1],i=W((function(e){return e.editGroup})),j=W((function(e){return e.deleteGroup})),d=Object(r.useState)(!1),p=Object(l.a)(d,2),f=p[0],h=p[1];return Object(b.jsxs)(ee.a,{isOpen:c,centered:!0,toggle:n,children:[Object(b.jsx)(te.a,{toggle:n,children:"Edit Group"}),Object(b.jsxs)(ne.a,{children:[Object(b.jsx)(ae.a,{children:Object(b.jsx)(ue,{label:"Name",id:"group-".concat(t.id,"-name"),type:"text",value:o.name,onChange:function(e){return u(Object(y.a)(Object(y.a)({},t),{},{name:e.target.value}))},required:!0,autofocus:!0,onKeyPress:function(e){return"Enter"===e.key&&m()}})}),Object(b.jsx)(ae.a,{children:Object(b.jsx)(ue,{label:"Notes",id:"group-".concat(t.id,"-notes"),type:"textarea",value:o.notes,onChange:function(e){return u(Object(y.a)(Object(y.a)({},t),{},{notes:e.target.value}))}})}),Object(b.jsxs)(ee.a,{isOpen:f,toggle:function(){return h(!1)},children:[Object(b.jsx)(te.a,{toggle:function(){return h(!1)},children:"Confirm Group Deletion"}),Object(b.jsxs)(ne.a,{children:['Are you sure you want to delete the group "',t.name,'"?']}),Object(b.jsxs)(re.a,{children:[Object(b.jsx)(Z.a,{color:"secondary",onClick:function(){return h(!1)},children:"Cancel"}),Object(b.jsx)(Z.a,{color:"danger",onClick:x,children:"Delete"})]})]})]}),Object(b.jsxs)(re.a,{children:[Object(b.jsx)(Z.a,{onClick:Object(I.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(!0);case 1:case"end":return e.stop()}}),e)}))),className:"mr-auto",color:"danger",children:"Delete"}),Object(b.jsx)(Z.a,{color:"secondary",onClick:function(){u(t),n()},children:"Cancel"}),Object(b.jsx)(Z.a,{onClick:Object(I.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:case"end":return e.stop()}}),e)}))),type:"submit",color:"info",children:"Submit"})]})]});function m(){return O.apply(this,arguments)}function O(){return(O=Object(I.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("submit form"),e.next=3,i(o);case 3:n();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return g.apply(this,arguments)}function g(){return(g=Object(I.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.next=3,j(t.id);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},le=function(e){var t=e.group,n=W((function(e){return e.toggleGroup})),c=Object(r.useState)(!1),a=Object(l.a)(c,2),s=a[0],o=a[1],u=W((function(e){return e.setNewItem})),i=X((function(e){return e.groups})),j=Object(r.useState)(!1),d=Object(l.a)(j,2),p=d[0],f=d[1],h=W((function(e){return e.completeGroup})),v=Object(r.useState)(!1),w=Object(l.a)(v,2),C=w[0],N=w[1];return Object(b.jsxs)(r.Fragment,{children:[Object(b.jsxs)(k.a,{style:{cursor:"pointer"},className:"d-flex",children:[Object(b.jsxs)("div",{className:"d-block mt-auto ".concat(!1===t.visible&&"text-muted"),onClick:function(){return n(t.id)},children:[t.name,""!==t.notes&&Object(b.jsx)("small",{className:"d-block text-muted",children:t.notes})]}),Object(b.jsx)("div",{className:"my-auto ml-auto",children:Object(b.jsxs)(m.a,{size:"sm",isOpen:s,toggle:function(){return o((function(e){return!e}))},children:[Object(b.jsx)(Z.a,{color:"info",onClick:function(){return f((function(e){return!e}))},children:"Complete"}),Object(b.jsx)(O.a,{split:!0,className:"border-left",color:"info"}),Object(b.jsxs)(x.a,{right:!0,children:[Object(b.jsx)(g.a,{onClick:function(){var e;null===(e=document.getElementById("new-item-name-input"))||void 0===e||e.focus(),$("new-item-form-card"),u(Object(y.a)(Object(y.a)({},U),{},{groups:[{groupName:i.find((function(e){return e.id===e.id})).name,groupId:t.id}]}))},children:"New Item"}),Object(b.jsx)(g.a,{onClick:function(){N(!0)},children:"Edit Group"})]})]})})]}),Object(b.jsx)(ce,{abstract:"Group Completion",specific:"complete this group",dialogText:"Checked non-recurring items will be deleted. Checked recurring items will just become unchecked. Unchecked items will not be affected.",onConfirm:function(){h(t.id).then((function(){f(!1)}))},isOpen:p,toggle:function(){return f(!1)}}),Object(b.jsx)(ie,{group:t,toggle:function(){return N(!1)},isOpen:C})]})},je=n(56),de=function(e){var t=e.item;return Object(b.jsxs)("label",{htmlFor:"checkbox_".concat(t.id),className:"custom-control-label",children:[t.name,t.recurring?Object(b.jsx)(je.a,{className:"ml-1",style:{paddingBottom:"3px"}}):"",""===t.notes?"":Object(b.jsx)("small",{className:"text-muted d-block",children:t.notes})]})},pe=n(57),fe=function(e){var t=e.item,n=W((function(e){return e.setFocusItem})),c=W((function(e){return e.toggleItemCheck}));return Object(b.jsx)(r.Fragment,{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(b.jsx)(oe.a,{id:"checkbox_".concat(t.id),type:"checkbox",className:"custom-control-input",checked:t.checked,onChange:function(e){return c({itemId:t.id,checked:e.target.checked})}}),Object(b.jsx)(de,{item:t})]})}),Object(b.jsx)("td",{children:Object(b.jsx)(pe.a,{style:{cursor:"pointer"},onClick:function(){return n(t)}})})]})})},be=n(126),he=(n(97),n(58)),me=n.n(he),Oe=function(e){var t=e.className;return Object(b.jsx)("div",{className:t,children:Object(b.jsx)(me.a,{type:"Bars",height:30,color:"#fff"})})},xe=function(e){var t=e.group,n=X((function(e){var n;return null===(n=e.items)||void 0===n?void 0:n.filter((function(e){return e.groups.some((function(e){return e.groupId===t.id}))}))}));return Object(b.jsx)(r.Fragment,{children:void 0!==n?Object(b.jsx)(be.a,{className:"mb-0 same-width",striped:!0,children:Object(b.jsx)("tbody",{children:n.map((function(e){return Object(b.jsx)(fe,{item:e},e.id)}))})}):Object(b.jsx)(Oe,{className:"my-3"})})},ge=function(e){var t=e.group;return Object(b.jsx)(r.Fragment,{children:Object(b.jsxs)(v.a,{className:"space-between",children:[Object(b.jsx)(le,{group:t}),!1!==t.visible&&Object(b.jsx)(xe,{group:t})]})})},ve=function(){var e=X((function(e){return e.groups})),t=W((function(e){return e.fetchGroups})),n=W((function(e){return e.fetchItems}));return Object(r.useEffect)((function(){t(),n()}),[t,n]),Object(b.jsx)(r.Fragment,{children:e.map((function(e){return Object(b.jsx)(ge,{group:e},e.id)}))})},ke=c.a.memo(ve),we=n(129),ye=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(b.jsx)(ae.a,{check:!0,children:Object(b.jsxs)(se.a,{check:!0,children:[Object(b.jsx)(oe.a,{className:"checkbox-lg",checked:this.props.checked,onChange:this.props.handleChange,type:"checkbox"}),Object(b.jsx)("span",{className:"pl-2",children:this.props.label})]})})}}]),n}(r.Component),Ce=function(e){var t=X((function(e){return e.groups}));return Object(b.jsxs)(r.Fragment,{children:[Object(b.jsx)(ae.a,{children:Object(b.jsx)(ue,{required:!0,label:"Name",id:"".concat(e.formName,"-name-input"),type:"text",value:e.editedItem.name,onChange:e.handleNameTextChange,placeholder:"The name of the item...",onKeyPress:function(t){"Enter"===t.key&&(console.log("key press enter"),e.handleFormSubmit(),t.preventDefault())}})}),Object(b.jsx)(ae.a,{children:Object(b.jsx)(ue,{label:"Notes",id:"".concat(e.formName,"-notes-input"),type:"textarea",value:e.editedItem.notes,onChange:e.handleNotesTextChange,placeholder:"Optional..."})}),Object(b.jsxs)(ae.a,{children:[Object(b.jsx)(se.a,{className:"mb-0",children:"Recurring"}),Object(b.jsx)(ye,{checked:e.editedItem.recurring,handleChange:e.handleRecurringCheckChange,label:"Item repeats"})]}),Object(b.jsxs)(ae.a,{children:[Object(b.jsx)(se.a,{className:"mb-0",children:"Groups"}),t.map((function(t){return Object(b.jsx)(ye,{checked:e.editedItem.groups.some((function(e){return e.groupId===t.id})),handleChange:function(n){return e.handleGroupCheckChange(n,t.id)},label:t.name},t.id)}))]})]})},Ne=n(128),Ie=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(j.a)(this,n),(r=t.call(this,e)).state={visible:!0},r}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsx)(Ne.a,{className:"mt-3",color:this.props.color,isOpen:this.state.visible,toggle:function(){return e.setState({visible:!1})},children:this.props.text})}}]),n}(r.Component),Ge=function(){var e=X((function(e){return e.focusItem})),t=W((function(e){return e.setFocusItem})),n=W((function(e){return e.editItem})),c=W((function(e){return e.deleteItem})),a=X((function(e){return e.groups})),s=Object(r.useState)(null),o=Object(l.a)(s,2),u=o[0],i=o[1],j=Object(r.useState)(""),d=Object(l.a)(j,2),p=d[0],f=d[1],h=Object(r.useState)(!1),m=Object(l.a)(h,2),O=m[0],x=m[1],g=function(){t(null)},v=Object(r.useState)(e),k=Object(l.a)(v,2),w=k[0],C=k[1];return Object(r.useEffect)((function(){C(e)}),[e]),Object(b.jsx)(we.a,{children:e&&Object(b.jsx)(r.Fragment,{children:Object(b.jsxs)(ee.a,{centered:!0,toggle:N,isOpen:!0,children:[Object(b.jsx)(te.a,{toggle:N,className:"d-flex",children:e.name}),Object(b.jsxs)(ne.a,{children:[function(){if(!1===u)return Object(b.jsx)(Ie,{color:"danger",text:p})}(),Object(b.jsx)(Ce,{formName:"edit-item",editedItem:w,handleNameTextChange:function(e){return C(Object(y.a)(Object(y.a)({},w),{},{name:e.target.value}))},handleNotesTextChange:function(e){return C(Object(y.a)(Object(y.a)({},w),{},{notes:e.target.value}))},handleRecurringCheckChange:function(e){return C(Object(y.a)(Object(y.a)({},w),{},{recurring:e.target.checked}))},handleGroupCheckChange:function(e,t){var n=[];a.forEach((function(r){r.id===t?e.target.checked&&n.push({groupId:r.id,groupName:r.name}):w.groups.some((function(e){return e.groupId===r.id}))&&n.push({groupId:r.id,groupName:r.name})})),C(Object(y.a)(Object(y.a)({},w),{},{groups:n}))},handleFormSubmit:I}),Object(b.jsxs)(ee.a,{isOpen:O,toggle:function(){return x(!O)},children:[Object(b.jsx)(te.a,{toggle:function(){return x(!O)},children:"Confirm Item Deletion"}),Object(b.jsx)(ne.a,{children:Object(b.jsxs)("p",{className:"mb-0",children:['Are you sure you want to delete the item "',null===e||void 0===e?void 0:e.name,'"?']})}),Object(b.jsxs)(re.a,{children:[Object(b.jsx)(Z.a,{onClick:function(){return x(!1)},color:"secondary",children:"No, cancel"}),Object(b.jsx)(Z.a,{onClick:G,color:"danger",children:"Yes, delete"})]})]})]}),Object(b.jsxs)(re.a,{children:[Object(b.jsx)(Z.a,{onClick:function(){return x(!0)},className:"mr-auto",color:"danger",children:"Delete"}),Object(b.jsx)(Z.a,{onClick:N,color:"secondary",children:"Cancel"}),Object(b.jsx)(Z.a,{onClick:I,type:"submit",color:"info",children:"Submit"})]})]})})});function N(){g(),i(null)}function I(){var e=L(w),t=e.isValid,r=e.alertText;i(t),f(r),t&&(n(w),g())}function G(){c(e.id),x(!1),N()}},Se=function(){var e=Object(r.useState)({name:"",notes:"",id:null,visible:!0}),t=Object(l.a)(e,2),n=t[0],c=t[1],a=W((function(e){return e.saveGroup})),s=function(){var e=Object(I.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a(n);case 3:c(Object(y.a)(Object(y.a)({},n),{},{name:"",notes:""}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("form",{onSubmit:s,children:[Object(b.jsx)(ae.a,{children:Object(b.jsx)(ue,{label:"Name",id:"group-name-input",type:"text",value:n.name,onChange:function(e){c(Object(y.a)(Object(y.a)({},n),{},{name:e.target.value}))},placeholder:"The name of the group...",required:!0})}),Object(b.jsx)(ae.a,{children:Object(b.jsx)(ue,{onChange:function(e){return c(Object(y.a)(Object(y.a)({},n),{},{notes:e.target.value}))},type:"textarea",placeholder:"Optional...",id:"group-notes-input",label:"Notes",value:n.notes})}),Object(b.jsx)(ae.a,{className:"bottom-buttons",children:Object(b.jsx)(Z.a,{block:!0,type:"submit",color:"info",children:"Save"})})]})},De=function(){var e=X((function(e){return e.newItem})),t=W((function(e){return e.setNewItem})),n=X((function(e){return e.groups})),c=W((function(e){return e.saveItem})),a=Object(r.useState)(null),s=Object(l.a)(a,2),o=s[0],u=s[1],i=Object(r.useState)(""),j=Object(l.a)(i,2),d=j[0],p=j[1];return Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f()},children:[function(){if(!1===o)return Object(b.jsx)(Ie,{color:"danger",text:d})}(),Object(b.jsx)(Ce,{formName:"new-item",editedItem:e,handleNameTextChange:function(n){t(Object(y.a)(Object(y.a)({},e),{},{name:n.target.value}))},handleNotesTextChange:function(n){t(Object(y.a)(Object(y.a)({},e),{},{notes:n.target.value}))},handleRecurringCheckChange:function(n){t(Object(y.a)(Object(y.a)({},e),{},{recurring:n.target.checked}))},handleGroupCheckChange:function(r,c){var a=n.filter((function(t){return t.id===c?r.target.checked:e.groups.some((function(e){return e.groupId===t.id}))})).map((function(e){return{groupId:e.id,groupName:e.name}}));t(Object(y.a)(Object(y.a)({},e),{},{groups:a}))},handleFormSubmit:f}),Object(b.jsx)(ae.a,{className:"bottom-buttons",children:Object(b.jsx)(Z.a,{block:!0,color:"info",type:"submit",children:"Save"})})]});function f(){console.log("handling submit");var n=L(e),r=n.isValid,a=n.alertText;u(r),p(a),r&&c(e).then((function(){t(U)}))}},Fe=function(e){var t=e.children;return Object(b.jsx)("div",{className:"sticky-top",style:{zIndex:10},children:t})},Ee=function(){return Object(b.jsxs)(r.Fragment,{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)(h,{title:"Shopping List",children:function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)(m.a,{isOpen:n,toggle:function(){c(!n)},size:"sm",color:"info",children:[Object(b.jsx)(O.a,{caret:!0,children:"Actions"}),Object(b.jsxs)(x.a,{right:!0,children:[Object(b.jsx)(g.a,{onClick:function(){$("new-item-form-card")},children:"New Item"}),Object(b.jsx)(g.a,{onClick:function(){$("new-group-form-card")},children:"New Group"})]})]})}()}),Object(b.jsxs)(u.a,{children:[Object(b.jsx)(i.a,{sm:12,lg:8,children:Object(b.jsx)(ke,{})}),Object(b.jsx)(i.a,{children:Object(b.jsxs)(Fe,{children:[Object(b.jsxs)(v.a,{id:"new-item-form-card",className:"space-between mt-3 mt-lg-0",children:[Object(b.jsx)(k.a,{children:"New Item"}),Object(b.jsx)(w.a,{className:"pt-2",children:Object(b.jsx)(De,{})})]}),Object(b.jsxs)(v.a,{id:"new-group-form-card",className:"space-between",children:[Object(b.jsx)(k.a,{children:"New Group"}),Object(b.jsx)(w.a,{className:"pt-2",children:Object(b.jsx)(Se,{})})]})]})})]})]}),Object(b.jsx)(Ge,{})]})},Ae=function(){var e=X((function(e){return e.alerts}));return Object(b.jsx)(r.Fragment,{children:null===e||void 0===e?void 0:e.map((function(e){return Object(b.jsx)(Ie,{color:e.color,text:e.text},e.text)}))})},Re=function(){return Object(b.jsx)(G.a,{store:Y,children:Object(b.jsxs)(o.a,{className:"main-container pt-0",children:[Object(b.jsx)(u.a,{children:Object(b.jsx)(i.a,{children:Object(b.jsx)(Ae,{})})}),Object(b.jsx)(u.a,{children:Object(b.jsx)(i.a,{children:Object(b.jsx)(Ee,{})})})]})})};n(116);s.a.render(Object(b.jsx)(c.a.Fragment,{children:Object(b.jsx)(Re,{})}),document.getElementById("root"))}},[[117,1,2]]]);
//# sourceMappingURL=main.e70339ee.chunk.js.map