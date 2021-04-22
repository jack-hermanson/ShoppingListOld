(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{116:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(23),s=n.n(a),o=n(133),i=n(130),u=n(131),l=n(16),j=n(24),d=n(25),p=n(29),b=n(28),h=n(3),m=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"page-title",children:[Object(h.jsx)("h4",{className:"title-text",children:this.props.title}),Object(h.jsx)("div",{className:"right",children:this.props.children})]})})}}]),n}(r.Component),f=n(135),O=n(136),x=n(137),g=n(122),v=n(125),k=n(121),w=n(132),I=n(10),N=n(7),y=n.n(N),C=n(12),S=n(14),G=n(17),F=n.n(G),E="/api/alerts/",D=function(){var e=Object(C.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get(E);case 2:return t=e.sent,console.log("getAlerts(), response.data",t.data),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(C.a)(y.a.mark((function e(t,n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.post(E,{text:t,color:n});case 2:if(200!==e.sent.status){e.next=8;break}return e.next=6,Promise.resolve();case 6:e.next=10;break;case 8:return e.next=10,Promise.reject();case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),A=function(){var e=Object(C.a)(y.a.mark((function e(t,n){var r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="Successfully ".concat(t," ").concat(n,"."),e.next=3,T(r,"success");case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),R=function(){var e=Object(C.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get("/api/items/");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(C.a)(y.a.mark((function e(t){var n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.a.put("/api/items/edit/".concat(t.id),t);case 3:n=e.sent,r=n.data,console.log("new name",r.name),A("updated",'item "'.concat(r.name,'"')).then((function(){console.log(r.name)})),e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(0),e.next=13,T("Error in editItem api call: ".concat(e.t0.message),"danger");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(C.a)(y.a.mark((function e(t,n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.a.put("/api/items/toggle/".concat(t),{checked:n});case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),e.next=9,T("Error in toggleItemCheck api call: ".concat(e.t0.message),"danger");case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,n){return e.apply(this,arguments)}}(),P=function(){var e=Object(C.a)(y.a.mark((function e(t){var n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.a.post("/api/items/",t);case 3:return n=e.sent,r=n.data,e.next=7,A("added",'item "'.concat(r.name,'"'));case 7:return e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,T("Error in the saveItem api call: ".concat(e.t0.message),"danger");case 14:throw new Error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(C.a)(y.a.mark((function e(t){var n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.a.delete("/api/items/",{data:{id:t}});case 3:return n=e.sent,r=n.data,e.next=7,A("deleted",'item "'.concat(r.name,'"'));case 7:e.next=14;break;case 9:return e.prev=9,e.t0=e.catch(0),e.next=13,T("Error in the deleteItem api call: ".concat(e.t0.message),"danger");case 13:throw new Error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(C.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get("/api/groups/");case 2:return t=e.sent,e.abrupt("return",t.data.map((function(e){return Object(I.a)(Object(I.a)({},e),{},{visible:!0})})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(C.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.post("/api/groups/complete/".concat(t));case 2:if(200===(n=e.sent).status){e.next=5;break}throw new Error("Response status ".concat(n.status," in completeGroup"));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(C.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.post("/api/groups/",t);case 2:return n=e.sent,e.next=5,A("added",'group "'.concat(n.data.name,'"'));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function M(e){var t=!0,n="";return e.name.replace(" ","").length<2&&(t=!1,n+="The 'name' field must have at least 2 characters. "),e.groups.length<1&&(t=!1,n+="At least one group is required. "),{isValid:t,alertText:n}}var _={name:"",notes:"",groups:[],checked:!1,recurring:!1,id:void 0},L=Object(S.c)({groups:[],setGroups:Object(S.b)((function(e,t){e.groups=t})),fetchGroups:Object(S.e)(function(){var e=Object(C.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:n=e.sent,t.setGroups(n.sort((function(e,t){return"Misc"===e.name?1:"Misc"===t.name?-1:0})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),saveGroup:Object(S.e)(function(){var e=Object(C.a)(y.a.mark((function e(t,n){var r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Date.now(),e.next=3,J(n);case 3:return console.log("New group created. Response time: ".concat(U(r),"s")),e.next=6,t.fetchGroups();case 6:return e.next=8,t.fetchAlerts();case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),toggleGroup:Object(S.b)((function(e,t){e.groups=e.groups.map((function(e){return e.id!==t||(e.visible=!e.visible),e}))})),completeGroup:Object(S.e)(function(){var e=Object(C.a)(y.a.mark((function e(t,n){var r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Date.now(),e.next=3,K(n);case 3:return e.next=5,t.fetchItems();case 5:console.log("Group completed. Response time: ".concat(U(r),"s"));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),items:null,setItems:Object(S.b)((function(e,t){e.items=t})),fetchItems:Object(S.e)(function(){var e=Object(C.a)(y.a.mark((function e(t){var n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Date.now(),e.next=3,R();case 3:r=e.sent,console.log("Retrieved ".concat(r.length," items. Response time: ").concat(U(n),"s")),t.setItems(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),editItem:Object(S.e)(function(){var e=Object(C.a)(y.a.mark((function e(t,n){var r,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(I.a)(Object(I.a)({},n),{},{groups:n.groups.map((function(e){return e.groupId}))}),c=Date.now(),e.next=4,q(r);case 4:return console.log("Item edited. Response time: ".concat(U(c),"s")),e.next=7,t.fetchItems();case 7:return e.next=9,t.fetchAlerts();case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),deleteItem:Object(S.e)(function(){var e=Object(C.a)(y.a.mark((function e(t,n){var r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Date.now(),e.next=3,V(n);case 3:return console.log("Item deleted. Response time: ".concat(U(r),"s")),e.next=6,t.fetchItems();case 6:return e.next=8,t.fetchAlerts();case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),toggleItemCheck:Object(S.b)((function(e,t){var n=Date.now();e.items=e.items.map((function(e){return e.id===t.itemId?(e.checked=t.checked,e):e})),B(t.itemId,t.checked).then((function(){console.log("Item ".concat(t.checked?"":"un","checked. Response time: ").concat(U(n),"s"))}))})),focusItem:null,setFocusItem:Object(S.b)((function(e,t){e.focusItem=t})),saveItem:Object(S.e)(function(){var e=Object(C.a)(y.a.mark((function e(t,n){var r,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Date.now(),c=Object(I.a)(Object(I.a)({},n),{},{groups:n.groups.map((function(e){return e.groupId}))}),e.next=4,P(c);case 4:return console.log("New item added. Response time: ".concat(U(r),"s")),e.next=7,t.fetchItems();case 7:return e.next=9,t.fetchAlerts();case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),newItem:_,setNewItem:Object(S.b)((function(e,t){e.newItem=t})),alerts:[],setAlerts:Object(S.b)((function(e,t){e.alerts=t})),fetchAlerts:Object(S.e)(function(){var e=Object(C.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetching alerts"),e.next=3,D();case 3:n=e.sent,t.setAlerts(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),U=function(e){return(Date.now()-e)/1e3},Y=Object(S.d)(),H=Y.useStoreActions,Q=(Y.useStoreDispatch,Y.useStoreState),W=n(54),X=function(e){var t;null===(t=document.getElementById(e))||void 0===t||t.scrollIntoView({behavior:"smooth"})},Z=n(134),$=n(118),ee=n(119),te=n(120),ne=function(e){return Object(h.jsxs)(Z.a,{toggle:e.toggle,isOpen:e.isOpen,children:[Object(h.jsxs)($.a,{toggle:e.toggle,children:["Confirm ",e.abstract]}),Object(h.jsxs)(ee.a,{children:[Object(h.jsxs)("p",{children:["Are you sure you want to ",e.specific,"?"]}),Object(h.jsx)("p",{className:"mb-0",children:e.dialogText})]}),Object(h.jsxs)(te.a,{children:[Object(h.jsx)(W.a,{color:"secondary",onClick:e.toggle,children:"Cancel"}),Object(h.jsx)(W.a,{color:"info",onClick:e.onConfirm,children:"Confirm"})]})]})},re=function(e){var t=H((function(e){return e.toggleGroup})),n=Object(r.useState)(!1),c=Object(l.a)(n,2),a=c[0],s=c[1],o=H((function(e){return e.setNewItem})),i=Q((function(e){return e.groups})),u=Object(r.useState)(!1),j=Object(l.a)(u,2),d=j[0],p=j[1],b=H((function(e){return e.completeGroup}));return Object(h.jsxs)(r.Fragment,{children:[Object(h.jsxs)(k.a,{className:"d-flex",children:[Object(h.jsxs)("div",{className:"d-block mt-auto ".concat(!1===e.visible&&"text-muted"),onClick:function(){return t(e.id)},children:[e.name,""!==e.notes&&Object(h.jsx)("small",{className:"d-block text-muted",children:e.notes})]}),Object(h.jsx)("div",{className:"my-auto ml-auto",children:Object(h.jsxs)(f.a,{size:"sm",isOpen:a,toggle:function(){return s((function(e){return!e}))},children:[Object(h.jsx)(W.a,{color:"info",onClick:function(){return p((function(e){return!e}))},children:"Complete"}),Object(h.jsx)(O.a,{split:!0,color:"info"}),Object(h.jsxs)(x.a,{right:!0,children:[Object(h.jsx)(g.a,{onClick:function(){var t;null===(t=document.getElementById("new-item-name-input"))||void 0===t||t.focus(),X("new-item-form-card"),o(Object(I.a)(Object(I.a)({},_),{},{groups:[{groupName:i.find((function(t){return t.id===e.id})).name,groupId:e.id}]}))},children:"New Item"}),Object(h.jsx)(g.a,{children:"Edit Group"})]})]})})]}),Object(h.jsx)(ne,{abstract:"Group Completion",specific:"complete this group",dialogText:"Checked non-recurring items will be deleted. Checked recurring items will just become unchecked. Unchecked items will not be affected.",onConfirm:function(){b(e.id).then((function(){p(!1)}))},isOpen:d,toggle:function(){return p(!1)}})]})},ce=n(123),ae=n(56),se=function(e){var t=e.item;return Object(h.jsxs)("label",{htmlFor:"checkbox_".concat(t.id),className:"custom-control-label",children:[t.name,t.recurring?Object(h.jsx)(ae.a,{className:"ml-1",style:{paddingBottom:"3px"}}):"",""===t.notes?"":Object(h.jsx)("small",{className:"text-muted d-block",children:t.notes})]})},oe=n(57),ie=function(e){var t=e.item,n=H((function(e){return e.setFocusItem})),c=H((function(e){return e.toggleItemCheck}));return Object(h.jsx)(r.Fragment,{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(h.jsx)(ce.a,{id:"checkbox_".concat(t.id),type:"checkbox",className:"custom-control-input",checked:t.checked,onChange:function(e){return c({itemId:t.id,checked:e.target.checked})}}),Object(h.jsx)(se,{item:t})]})}),Object(h.jsx)("td",{children:Object(h.jsx)(oe.a,{style:{cursor:"pointer"},onClick:function(){return n(t)}})})]})})},ue=n(124),le=(n(97),n(58)),je=n.n(le),de=function(e){var t=e.className;return Object(h.jsx)("div",{className:t,children:Object(h.jsx)(je.a,{type:"Bars",height:30,color:"#fff"})})},pe=function(e){var t=e.group,n=Q((function(e){var n;return null===(n=e.items)||void 0===n?void 0:n.filter((function(e){return e.groups.some((function(e){return e.groupId===t.id}))}))}));return Object(h.jsx)(r.Fragment,{children:void 0!==n?Object(h.jsx)(ue.a,{className:"mb-0 same-width",striped:!0,children:Object(h.jsx)("tbody",{children:n.map((function(e){return Object(h.jsx)(ie,{item:e},e.id)}))})}):Object(h.jsx)(de,{className:"my-3"})})},be=function(e){var t=e.group;return Object(h.jsx)(r.Fragment,{children:Object(h.jsxs)(v.a,{className:"space-between",children:[Object(h.jsx)(re,{name:t.name,notes:t.notes,id:t.id,visible:t.visible}),!1!==t.visible&&Object(h.jsx)(pe,{group:t})]})})},he=function(){var e=Q((function(e){return e.groups})),t=H((function(e){return e.fetchGroups})),n=H((function(e){return e.fetchItems}));return Object(r.useEffect)((function(){t(),n()}),[t,n]),Object(h.jsx)(r.Fragment,{children:e.map((function(e){return Object(h.jsx)(be,{group:e},e.id)}))})},me=c.a.memo(he),fe=n(129),Oe=n(127),xe=n(126),ge=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(r.Fragment,{children:[Object(h.jsx)(xe.a,{required:this.props.required,htmlFor:this.props.id,children:this.props.label}),Object(h.jsx)(ce.a,{required:this.props.required,id:this.props.id,type:this.props.type,value:this.props.value,onChange:this.props.onChange,onKeyPress:this.props.onKeyPress,placeholder:this.props.placeholder})]})}}]),n}(r.Component),ve=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsx)(Oe.a,{check:!0,children:Object(h.jsxs)(xe.a,{check:!0,children:[Object(h.jsx)(ce.a,{className:"checkbox-lg",checked:this.props.checked,onChange:this.props.handleChange,type:"checkbox"}),Object(h.jsx)("span",{className:"pl-2",children:this.props.label})]})})}}]),n}(r.Component),ke=function(e){var t=Q((function(e){return e.groups}));return Object(h.jsxs)(r.Fragment,{children:[Object(h.jsx)(Oe.a,{children:Object(h.jsx)(ge,{required:!0,label:"Name",id:"".concat(e.formName,"-name-input"),type:"text",value:e.editedItem.name,onChange:e.handleNameTextChange,placeholder:"The name of the item...",onKeyPress:function(t){"Enter"===t.key&&(console.log("key press enter"),e.handleFormSubmit(),t.preventDefault())}})}),Object(h.jsx)(Oe.a,{children:Object(h.jsx)(ge,{label:"Notes",id:"".concat(e.formName,"-notes-input"),type:"textarea",value:e.editedItem.notes,onChange:e.handleNotesTextChange,placeholder:"Optional..."})}),Object(h.jsxs)(Oe.a,{children:[Object(h.jsx)(xe.a,{className:"mb-0",children:"Recurring"}),Object(h.jsx)(ve,{checked:e.editedItem.recurring,handleChange:e.handleRecurringCheckChange,label:"Item repeats"})]}),Object(h.jsxs)(Oe.a,{children:[Object(h.jsx)(xe.a,{className:"mb-0",children:"Groups"}),t.map((function(t){return Object(h.jsx)(ve,{checked:e.editedItem.groups.some((function(e){return e.groupId===t.id})),handleChange:function(n){return e.handleGroupCheckChange(n,t.id)},label:t.name},t.id)}))]})]})},we=n(128),Ie=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(j.a)(this,n),(r=t.call(this,e)).state={visible:!0},r}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsx)(we.a,{className:"mt-3",color:this.props.color,isOpen:this.state.visible,toggle:function(){return e.setState({visible:!1})},children:this.props.text})}}]),n}(r.Component),Ne=function(){var e=Q((function(e){return e.focusItem})),t=H((function(e){return e.setFocusItem})),n=H((function(e){return e.editItem})),c=H((function(e){return e.deleteItem})),a=Q((function(e){return e.groups})),s=Object(r.useState)(null),o=Object(l.a)(s,2),i=o[0],u=o[1],j=Object(r.useState)(""),d=Object(l.a)(j,2),p=d[0],b=d[1],m=Object(r.useState)(!1),f=Object(l.a)(m,2),O=f[0],x=f[1],g=function(){t(null)},v=Object(r.useState)(e),k=Object(l.a)(v,2),w=k[0],N=k[1];return Object(r.useEffect)((function(){N(e)}),[e]),Object(h.jsx)(fe.a,{children:e&&Object(h.jsx)(r.Fragment,{children:Object(h.jsxs)(Z.a,{centered:!0,toggle:y,isOpen:!0,children:[Object(h.jsx)($.a,{toggle:y,className:"d-flex",children:e.name}),Object(h.jsxs)(ee.a,{children:[function(){if(!1===i)return Object(h.jsx)(Ie,{color:"danger",text:p})}(),Object(h.jsx)(ke,{formName:"edit-item",editedItem:w,handleNameTextChange:function(e){return N(Object(I.a)(Object(I.a)({},w),{},{name:e.target.value}))},handleNotesTextChange:function(e){return N(Object(I.a)(Object(I.a)({},w),{},{notes:e.target.value}))},handleRecurringCheckChange:function(e){return N(Object(I.a)(Object(I.a)({},w),{},{recurring:e.target.checked}))},handleGroupCheckChange:function(e,t){var n=[];a.forEach((function(r){r.id===t?e.target.checked&&n.push({groupId:r.id,groupName:r.name}):w.groups.some((function(e){return e.groupId===r.id}))&&n.push({groupId:r.id,groupName:r.name})})),N(Object(I.a)(Object(I.a)({},w),{},{groups:n}))},handleFormSubmit:C}),Object(h.jsxs)(Z.a,{isOpen:O,toggle:function(){return x(!O)},children:[Object(h.jsx)($.a,{toggle:function(){return x(!O)},children:"Confirm Item Deletion"}),Object(h.jsx)(ee.a,{children:Object(h.jsxs)("p",{className:"mb-0",children:['Are you sure you want to delete the item "',null===e||void 0===e?void 0:e.name,'"?']})}),Object(h.jsxs)(te.a,{children:[Object(h.jsx)(W.a,{onClick:function(){return x(!1)},color:"secondary",children:"No, cancel"}),Object(h.jsx)(W.a,{onClick:S,color:"danger",children:"Yes, delete"})]})]})]}),Object(h.jsxs)(te.a,{children:[Object(h.jsx)(W.a,{onClick:function(){return x(!0)},className:"mr-auto",color:"danger",children:"Delete"}),Object(h.jsx)(W.a,{onClick:y,color:"secondary",children:"Cancel"}),Object(h.jsx)(W.a,{onClick:C,type:"submit",color:"info",children:"Submit"})]})]})})});function y(){g(),u(null)}function C(){var e=M(w),t=e.isValid,r=e.alertText;u(t),b(r),t&&(n(w),g())}function S(){c(e.id),x(!1),y()}},ye=function(){var e=Object(r.useState)({name:"",notes:"",id:null,visible:!0}),t=Object(l.a)(e,2),n=t[0],c=t[1],a=H((function(e){return e.saveGroup})),s=function(){var e=Object(C.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a(n);case 3:c(Object(I.a)(Object(I.a)({},n),{},{name:"",notes:""}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("form",{onSubmit:s,children:[Object(h.jsx)(Oe.a,{children:Object(h.jsx)(ge,{label:"Name",id:"group-name-input",type:"text",value:n.name,onChange:function(e){c(Object(I.a)(Object(I.a)({},n),{},{name:e.target.value}))},placeholder:"The name of the group...",required:!0})}),Object(h.jsx)(Oe.a,{children:Object(h.jsx)(ge,{onChange:function(e){return c(Object(I.a)(Object(I.a)({},n),{},{notes:e.target.value}))},type:"textarea",placeholder:"Optional...",id:"group-notes-input",label:"Notes",value:n.notes})}),Object(h.jsx)(Oe.a,{className:"bottom-buttons",children:Object(h.jsx)(W.a,{block:!0,type:"submit",color:"info",children:"Save"})})]})},Ce=function(){var e=Q((function(e){return e.newItem})),t=H((function(e){return e.setNewItem})),n=Q((function(e){return e.groups})),c=H((function(e){return e.saveItem})),a=Object(r.useState)(null),s=Object(l.a)(a,2),o=s[0],i=s[1],u=Object(r.useState)(""),j=Object(l.a)(u,2),d=j[0],p=j[1];return Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b()},children:[function(){if(!1===o)return Object(h.jsx)(Ie,{color:"danger",text:d})}(),Object(h.jsx)(ke,{formName:"new-item",editedItem:e,handleNameTextChange:function(n){t(Object(I.a)(Object(I.a)({},e),{},{name:n.target.value}))},handleNotesTextChange:function(n){t(Object(I.a)(Object(I.a)({},e),{},{notes:n.target.value}))},handleRecurringCheckChange:function(n){t(Object(I.a)(Object(I.a)({},e),{},{recurring:n.target.checked}))},handleGroupCheckChange:function(r,c){var a=n.filter((function(t){return t.id===c?r.target.checked:e.groups.some((function(e){return e.groupId===t.id}))})).map((function(e){return{groupId:e.id,groupName:e.name}}));t(Object(I.a)(Object(I.a)({},e),{},{groups:a}))},handleFormSubmit:b}),Object(h.jsx)(Oe.a,{className:"bottom-buttons",children:Object(h.jsx)(W.a,{block:!0,color:"info",type:"submit",children:"Save"})})]});function b(){console.log("handling submit");var n=M(e),r=n.isValid,a=n.alertText;i(r),p(a),r&&c(e).then((function(){t(_)}))}},Se=function(e){var t=e.children;return Object(h.jsx)("div",{className:"sticky-top",style:{zIndex:10},children:t})},Ge=function(){return Object(h.jsxs)(r.Fragment,{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)(m,{title:"Shopping List",children:function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(h.jsxs)(f.a,{isOpen:n,toggle:function(){c(!n)},size:"sm",color:"info",children:[Object(h.jsx)(O.a,{caret:!0,children:"Actions"}),Object(h.jsxs)(x.a,{right:!0,children:[Object(h.jsx)(g.a,{onClick:function(){X("new-item-form-card")},children:"New Item"}),Object(h.jsx)(g.a,{onClick:function(){X("new-group-form-card")},children:"New Group"})]})]})}()}),Object(h.jsxs)(i.a,{children:[Object(h.jsx)(u.a,{sm:12,lg:8,children:Object(h.jsx)(me,{})}),Object(h.jsx)(u.a,{children:Object(h.jsxs)(Se,{children:[Object(h.jsxs)(v.a,{id:"new-item-form-card",className:"space-between mt-3 mt-lg-0",children:[Object(h.jsx)(k.a,{children:"New Item"}),Object(h.jsx)(w.a,{className:"pt-2",children:Object(h.jsx)(Ce,{})})]}),Object(h.jsxs)(v.a,{id:"new-group-form-card",className:"space-between",children:[Object(h.jsx)(k.a,{children:"New Group"}),Object(h.jsx)(w.a,{className:"pt-2",children:Object(h.jsx)(ye,{})})]})]})})]})]}),Object(h.jsx)(Ne,{})]})},Fe=function(){var e=Q((function(e){return e.alerts}));return Object(h.jsx)(r.Fragment,{children:null===e||void 0===e?void 0:e.map((function(e){return Object(h.jsx)(Ie,{color:e.color,text:e.text},e.text)}))})},Ee=function(){return Object(h.jsx)(S.a,{store:L,children:Object(h.jsxs)(o.a,{className:"main-container pt-0",children:[Object(h.jsx)(i.a,{children:Object(h.jsx)(u.a,{children:Object(h.jsx)(Fe,{})})}),Object(h.jsx)(i.a,{children:Object(h.jsx)(u.a,{children:Object(h.jsx)(Ge,{})})})]})})};n(116);s.a.render(Object(h.jsx)(c.a.Fragment,{children:Object(h.jsx)(Ee,{})}),document.getElementById("root"))}},[[117,1,2]]]);
//# sourceMappingURL=main.664f9b04.chunk.js.map