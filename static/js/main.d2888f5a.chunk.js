(this["webpackJsonpuser-management"]=this["webpackJsonpuser-management"]||[]).push([[0],{125:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"changeFilter",(function(){return p})),n.d(a,"openModalAddUser",(function(){return m})),n.d(a,"openModalUdateUser",(function(){return f}));var r={};n.r(r),n.d(r,"getFilter",(function(){return z})),n.d(r,"getOpenModalAddUser",(function(){return q})),n.d(r,"getOpenModalUpdateUser",(function(){return B})),n.d(r,"getUpdateUserID",(function(){return L}));var c,o=n(0),s=n.n(o),i=n(37),d=n.n(i),u=n(15),l=n(18),b=n(3),j=n(11),O=n(29),p=Object(j.b)("userManagement/changeFilter"),m=Object(j.b)("userManagement/openModalAddUser"),f=Object(j.b)("userManagement/openModalUdateUser"),h=Object(j.d)("",Object(b.a)({},p,(function(e,t){return t.payload}))),g=Object(j.d)(!1,Object(b.a)({},m,(function(e,t){return t.payload}))),x=Object(j.d)(!1,Object(b.a)({},f,(function(e,t){return t.payload.isModalopen}))),v=Object(j.d)(-1,Object(b.a)({},f,(function(e,t){return t.payload.id}))),U=Object(O.b)({filter:h,isModalAddUserOpen:g,isModalUpdateUserOpen:x,updateUserID:v}),y=n(50),M=n(92),C=n(30),w=["updateUserID"],A=Object(M.a)({reducerPath:"usersApi",baseQuery:Object(C.d)({baseUrl:"https://62040ccdc6d8b20017dc33e6.mockapi.io/api/v1"}),tagTypes:["Users"],endpoints:function(e){return{getUsers:e.query({query:function(){return"/users"},providesTags:function(e){return e?e.map((function(e){return{type:"Users",id:e.id}})):["Users"]}}),addUser:e.mutation({query:function(e){return{url:"/users",method:"POST",body:e}},invalidatesTags:["Users"]}),updateUser:e.mutation({query:function(e){var t=e.updateUserID,n=Object(y.a)(e,w);return{url:"/users/".concat(t),method:"PUT",body:n}},invalidatesTags:function(e,t,n){return[{type:"Users",id:n.id}]}}),deleteUser:e.mutation({query:function(e){return{url:"/users/".concat(e),method:"DELETE"}},invalidatesTags:function(e,t,n){return[{type:"Users",id:n}]}})}}}),T=A.useGetUsersQuery,S=A.useAddUserMutation,P=A.useUpdateUserMutation,k=A.useDeleteUserMutation,I=Object(j.a)({reducer:Object(b.a)({managementReducer:U},A.reducerPath,A.reducer),middleware:function(e){return[].concat(Object(l.a)(e()),[A.middleware])},devTools:!1}),D=n(96),R=n(185),F=n(177),E=n(39),z=function(e){return e.managementReducer.filter},q=function(e){return e.managementReducer.isModalAddUserOpen},B=function(e){return e.managementReducer.isModalUpdateUserOpen},L=function(e){return e.managementReducer.updateUserID},Z=n(186),W=n(189),N=n(28),$=n(25),J=n(191),Q=Object($.a)(J.a)((function(){return{display:"flex",alignItems:"center",textTransform:"uppercase"}})),G=$.a.div(c||(c=Object(N.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),H=Object($.a)(W.a)((function(){return{display:"block",marginBottom:"1rem",boxShadow:"0px 8px 15px -10px rgba(34, 60, 80, 0.6)"}})),K=n(97),V=n(1),X=function(){return Object(V.jsx)(H,{children:Object(V.jsx)(G,{children:Object(V.jsxs)(Q,{variant:"h5",children:["Users management",Object(V.jsx)(K.a,{})]})})})},Y=n(181),_=function(){var e=Object(u.e)(r.getFilter),t=Object(u.d)();return Object(V.jsx)(Y.a,{id:"standard-basic",label:"Find user by name",name:"filter",value:e,onChange:function(e){return t(a.changeFilter(e.currentTarget.value))},variant:"standard"})},ee=n(22),te=n(14),ne=n(190),ae=n(194),re=n(195),ce=n(193),oe=n(179),se=n(192),ie=n(199),de=n(200),ue=n(188),le=n(198),be=n(183),je=Object($.a)(le.a)((function(){return{textAlign:"center",padding:"5px",fontSize:18,fontWeight:"600",textTransform:"uppercase"}})),Oe=Object($.a)(be.a)((function(){return{margin:"5px",color:"red",borderColor:"red","&:hover":{backgroundColor:"rgba(210, 25, 25, 0.04)",borderColor:"red"}}})),pe=[{id:"name",label:"Name"},{id:"surname",label:"Surname"},{id:"birthday",label:"Birthday"},{id:"phone",label:"Phone"},{id:"email",label:"Email"},{id:"create",label:"Created/Updated"}],me=function(e){var t=e.order,n=e.orderBy,a=e.onRequestSort;return Object(V.jsx)(ie.a,{children:Object(V.jsxs)(de.a,{sx:{backgroundColor:"#cfe8fc"},children:[pe.map((function(e){return Object(V.jsx)(je,{width:"70px",children:Object(V.jsx)(ue.a,{active:n===e.id,direction:n===e.id?t:"asc",onClick:(r=e.id,function(e){a(e,r)}),children:e.label})},e.id);var r})),Object(V.jsx)(je,{width:"100px"})]})})},fe={wordWrap:"break-word"},he=function(e){var t=e.id,n=e.name,r=e.surname,c=e.birthday,o=e.phone,s=e.email,i=e.createdAt,d=k(),l=Object(te.a)(d,2),b=l[0],j=l[1].isLoading,O=Object(u.d)();return Object(V.jsxs)(de.a,{hover:!0,role:"listitem",tabIndex:-1,children:[Object(V.jsx)(le.a,{align:"center",children:n}),Object(V.jsx)(le.a,{align:"center",children:r}),Object(V.jsx)(le.a,{align:"center",style:fe,children:c}),Object(V.jsx)(le.a,{align:"center",children:o}),Object(V.jsx)(le.a,{align:"center",style:fe,children:s}),Object(V.jsx)(le.a,{align:"center",style:fe,children:i}),Object(V.jsxs)(le.a,{align:"center",children:[Object(V.jsx)(Z.a,{onClick:function(){return O(a.openModalUdateUser({id:t,isModalopen:!0}))},variant:"outlined",children:"Update"}),Object(V.jsx)(Oe,{onClick:function(){b(t),j||E.b.success("User ".concat(n," ").concat(r," successfully deleted"))},disabled:j,loading:j,loadingIndicator:"Deleting...",variant:"outlined",children:"Delete"})]})]})};function ge(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function xe(e,t){return"desc"===e?function(e,n){return ge(e,n,t)}:function(e,n){return-ge(e,n,t)}}var ve,Ue=function(e){var t=e.users,n=Object(o.useState)("asc"),a=Object(te.a)(n,2),r=a[0],c=a[1],s=Object(o.useState)(""),i=Object(te.a)(s,2),d=i[0],u=i[1],l=Object(o.useState)(0),b=Object(te.a)(l,2),j=b[0],O=b[1],p=Object(o.useState)(10),m=Object(te.a)(p,2),f=m[0],h=m[1];return Object(o.useEffect)((function(){t.length<=f&&j>0&&O(0)}),[t.length,f,j]),Object(o.useEffect)((function(){var e=Math.floor(t.length/f);j>e&&O(e)}),[t.length,j,f]),Object(V.jsx)(ne.a,{sx:{width:"100%"},children:Object(V.jsxs)(se.a,{sx:{width:"100%",mb:2},children:[Object(V.jsx)(ce.a,{children:Object(V.jsxs)(ae.a,{"aria-labelledby":"tableTitle",size:"normal",style:{tableLayout:"fixed"},children:[Object(V.jsx)(me,{order:r,orderBy:d,onRequestSort:function(e,t){var n=d===t&&"asc"===r;console.log("property: ",t),console.log("order: ",r),console.log("orderBy: ",d),c(n?"desc":"asc"),u(t)}}),Object(V.jsx)(re.a,{children:t.sort(xe(r,d)).slice(j*f,j*f+f).map((function(e){return Object(V.jsx)(he,Object(ee.a)({},e),e.id)}))})]})}),Object(V.jsx)(oe.a,{rowsPerPageOptions:[5,10,25],component:"div",count:t.length,rowsPerPage:f,page:t.length<=f?0:j,onPageChange:function(e,t){O(t)},onRowsPerPageChange:function(e){console.log("eventRowsPerPage: ",e),h(parseInt(e.target.value,10)),O(0)}})]})})},ye=function(){var e=Object(u.e)(r.getFilter),t=T(),n=t.data,a=t.error,c=e.toLowerCase(),s=[];return n&&(s=n.filter((function(e){return e.name.toLowerCase().includes(c)}))),Object(o.useEffect)((function(){a&&E.b.error("\u0421an't get contacts info from server")}),[a]),Object(V.jsxs)(V.Fragment,{children:[a&&Object(V.jsx)(E.a,{}),!a&&n&&Object(V.jsx)(Ue,{users:s})]})},Me=n(180),Ce=Object($.a)(ne.a)((function(e){var t=e.theme;return{position:"absolute",top:"20%",left:"50%",transform:"translate(-50%, -20%)",width:600,backgroundColor:t.palette.background.paper,boxShadow:t.shadows[24],padding:t.spacing(2)}})),we=$.a.form(ve||(ve=Object(N.a)(["\n  padding: 30px;\n"]))),Ae=n(71),Te=["onChange"],Se=Object(o.forwardRef)((function(e,t){var n=e.onChange,a=Object(y.a)(e,Te);return Object(V.jsx)(Ae.a,Object(ee.a)(Object(ee.a)({},a),{},{mask:"+38(###) ###-##-##",definitions:{"#":/[0-9]/},inputRef:t,onAccept:function(t){return n({target:{name:e.name,value:t}})},overwrite:!0}))})),Pe=["onChange"],ke=Object(o.forwardRef)((function(e,t){var n=e.onChange,a=Object(y.a)(e,Pe);return Object(V.jsx)(Ae.a,Object(ee.a)(Object(ee.a)({},a),{},{mask:"##.##.####",definitions:{"#":/[0-9]/},inputRef:t,onAccept:function(t){return n({target:{name:e.name,value:t}})},overwrite:!0}))})),Ie=function(e){switch(e){case"birthday":return{inputMode:"numeric",inputComponent:ke,placeholder:"dd.mm.yyyy"};case"phone":return{inputMode:"tel",inputComponent:Se,placeholder:"+38(xxx) xxx-xx-xx"};case"email":return{type:"email"}}},De=function(e){var t=e.label,n=e.name,a=e.value,r=e.onChange,c=e.error,o=e.errorText;return Object(V.jsx)(Y.a,{id:"standard-basic",label:t,name:n,value:a,onChange:r,InputProps:Ie(n),variant:"standard",sx:{mb:2},fullWidth:!0,required:!0,error:c,helperText:o})},Re={name:"",surname:"",birthday:"",phone:"",email:""},Fe=function(e){var t,n=e.closeModal,a=Object(o.useState)((function(){return Re})),c=Object(te.a)(a,2),s=c[0],i=c[1],d=function(e){var t=e.name;return""===t||/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/.test(t)?[!1,""]:[!0,"Name may contain only letters, apostrophe, dash and spaces"]}(s),l=Object(te.a)(d,2),j=l[0],O=l[1],p=function(e){var t=e.surname;return""===t||/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/.test(t)?[!1,""]:[!0,"Surname may contain only letters, apostrophe, dash and spaces"]}(s),m=Object(te.a)(p,2),f=m[0],h=m[1],g=function(e){var t=e.email;return""===t||/^([^ ]+@[^ ]+\.[a-z]{2,6}|)$/.test(t)?[!1,""]:[!0,"Invalid email"]}(s),x=Object(te.a)(g,2),v=x[0],U=x[1],y=Object(u.e)(r.getOpenModalAddUser),M=Object(u.e)(r.getOpenModalUpdateUser),C=Object(u.e)(r.getUpdateUserID),w=T().data,A=(t=C,w.filter((function(e){return e.id===t}))[0]);Object(o.useEffect)((function(){M&&A&&i(Object(ee.a)({},A))}),[A,M]);var k=S(),I=Object(te.a)(k,1)[0],D=P(),R=Object(te.a)(D,1)[0],F=function(e){i(Object(ee.a)(Object(ee.a)({},s),{},Object(b.a)({},e.target.name,e.target.value)))};return Object(V.jsx)(V.Fragment,{children:Object(V.jsxs)(we,{onSubmit:function(e){e.preventDefault(),M&&(E.b.success("User ".concat(s.name," ").concat(s.surname," successfully updated")),R(Object(ee.a)(Object(ee.a)({updateUserID:C},s),{},{createdAt:(new Date).toLocaleString()}))),y&&(I(s),E.b.success("User ".concat(s.name," ").concat(s.surname," successfully added"))),i(Re),n()},children:[Object(V.jsx)(De,{label:"Name",name:"name",value:s.name,onChange:F,error:j,errorText:O}),Object(V.jsx)(De,{label:"Surname",name:"surname",value:s.surname,onChange:F,error:f,errorText:h}),Object(V.jsx)(De,{label:"Birthday",name:"birthday",value:s.birthday,onChange:F}),Object(V.jsx)(De,{label:"Phone",name:"phone",value:s.phone,onChange:F}),Object(V.jsx)(De,{label:"Email",name:"email",value:s.email,onChange:F,error:v,errorText:U}),Object(V.jsxs)(Z.a,{type:"submit",variant:"outlined",children:[y&&"Add user",M&&"Update user"]})]})})},Ee=function(){var e=Object(u.e)(r.getOpenModalAddUser),t=Object(u.e)(r.getOpenModalUpdateUser),n=Object(u.d)(),c=function(){e&&n(a.openModalAddUser(!1)),t&&n(a.openModalUdateUser({id:-1,isModalopen:!1}))};return Object(V.jsx)(V.Fragment,{children:Object(V.jsx)(Me.a,{open:e||t,onClose:c,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(V.jsx)(Ce,{children:Object(V.jsx)(Fe,{closeModal:c})})})})},ze=Object($.a)(ne.a)((function(e){return{textAlign:"center",color:e.theme.palette.text.secondary,display:"flex",alignItems:"center",justifyContent:"space-around",marginBottom:"16px"}})),qe=function(){var e=Object(u.d)();return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(E.a,{}),Object(V.jsx)(X,{}),Object(V.jsxs)(W.a,{maxWidth:"lg",children:[Object(V.jsxs)(ze,{children:[Object(V.jsx)(Z.a,{onClick:function(){return e(a.openModalAddUser(!0))},variant:"outlined",children:"Add new user"}),Object(V.jsx)(_,{})]}),Object(V.jsx)(ye,{}),Object(V.jsx)(Ee,{})]})]})},Be=Object(D.a)();d.a.render(Object(V.jsx)(s.a.StrictMode,{children:Object(V.jsx)(u.a,{store:I,children:Object(V.jsxs)(R.a,{theme:Be,children:[Object(V.jsx)(F.a,{}),Object(V.jsx)(qe,{})]})})}),document.getElementById("root"))}},[[125,1,2]]]);
//# sourceMappingURL=main.d2888f5a.chunk.js.map