(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{457:function(e,t,r){e.exports=r.p+"img/bg.ad72a46.jpg"},653:function(e,t,r){},722:function(e,t,r){"use strict";r(653)},769:function(e,t,r){"use strict";r.r(t);r(23);var n=[function(){var e=this._self._c;return e("div",{staticClass:"ImageContianer"},[e("img",{staticClass:"GroupImage",attrs:{src:r(457)}})])},function(){var e=this._self._c;return e("div",{staticClass:"LogoContainer"},[e("img",{staticClass:"logo",attrs:{src:r(254)}})])},function(){var e=this,t=e._self._c;return t("header",{staticClass:"subHeader"},[e._v("\n          Welcome to "),t("b",[e._v("Alfresco Grand!")]),e._v(" Please Enter your Details\n        ")])},function(){var e=this._self._c;return e("label",{staticClass:"label",attrs:{for:"emailAddress"}},[e("img",{staticClass:"labelIcon",attrs:{src:"https://i.imgur.com/Hn13wvm.png"}}),e("span",[this._v("Email Address*")])])},function(){var e=this._self._c;return e("label",{staticClass:"label",attrs:{for:"emailAddress"}},[e("img",{staticClass:"labelIcon",attrs:{src:"https://i.imgur.com/g5SvdfG.png"}}),e("span",[this._v("Password*")])])}],o=(r(249),r(86),r(170)),l=r.n(o),c=r(11),d=(r(43),r(118)),m=r(71),v={middleware:"isAuth",data:function(){return{model:{email:"",password:""},sin:!0,yes:!1,type:"password"}},methods:{login:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=(r=e).model.email){t.next=4;break}return l()({showClose:!0,message:"Email is required!",type:"warning"}),t.abrupt("return");case 4:if(""!=r.model.password){t.next=7;break}return l()({showClose:!0,message:"Password is required!",type:"warning"}),t.abrupt("return");case 7:return r.sin=!1,t.next=10,d.a.collection("partners").authWithPassword(r.model.email,r.model.password).then(function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(t){var n,o,c,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=d.a.authStore.model.email,e.next=3,d.a.collection("partners").getOne(d.a.authStore.model.id);case 3:o=e.sent,c=o.isApprove,v="partner",m.set("email",n),r.$store.commit("email",n),m.set("role",v),m.set("isApprove",c),r.$store.commit("role",v),r.$store.commit("isApprove",c),r.$router.push("/dashboard"),l()({showClose:!0,message:"Logged in Successfuly!",type:"success"}),r.sin=!0;case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),r.sin=!0,l()({showClose:!0,message:"Something went wrong!",type:"warning"})}));case 10:case"end":return t.stop()}}),t)})))()},shw:function(){var e=this;e.type="password"==e.type?"text":"password",e.yes=!e.yes},gos:function(){this.$router.push("/register")}}},w=v,h=(r(722),r(7)),component=Object(h.a)(w,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"LoginPageContainer"},[t("div",{staticClass:"LoginPageInnerContainer"},[e._m(0),e._v(" "),t("div",{staticClass:"LoginFormContainer"},[t("div",{staticClass:"LoginFormInnerContainer"},[e._m(1),e._v(" "),t("header",{staticClass:"header"},[e._v("Log in")]),e._v(" "),e._m(2),e._v(" "),t("form",[t("div",{staticClass:"inputContainer"},[e._m(3),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.model.email,expression:"model.email"}],staticClass:"input",attrs:{type:"email",id:"emailAddress",placeholder:"Enter your Email Address"},domProps:{value:e.model.email},on:{input:function(t){t.target.composing||e.$set(e.model,"email",t.target.value)}}})]),e._v(" "),t("div",{staticClass:"inputContainer"},[e._m(4),e._v(" "),"checkbox"===e.type?t("input",{directives:[{name:"model",rawName:"v-model",value:e.model.password,expression:"model.password"}],staticClass:"input",attrs:{id:"emailAddress",placeholder:"Enter your Password",type:"checkbox"},domProps:{checked:Array.isArray(e.model.password)?e._i(e.model.password,null)>-1:e.model.password},on:{change:function(t){var r=e.model.password,n=t.target,o=!!n.checked;if(Array.isArray(r)){var l=e._i(r,null);n.checked?l<0&&e.$set(e.model,"password",r.concat([null])):l>-1&&e.$set(e.model,"password",r.slice(0,l).concat(r.slice(l+1)))}else e.$set(e.model,"password",o)}}}):"radio"===e.type?t("input",{directives:[{name:"model",rawName:"v-model",value:e.model.password,expression:"model.password"}],staticClass:"input",attrs:{id:"emailAddress",placeholder:"Enter your Password",type:"radio"},domProps:{checked:e._q(e.model.password,null)},on:{change:function(t){return e.$set(e.model,"password",null)}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:e.model.password,expression:"model.password"}],staticClass:"input",attrs:{id:"emailAddress",placeholder:"Enter your Password",type:e.type},domProps:{value:e.model.password},on:{input:function(t){t.target.composing||e.$set(e.model,"password",t.target.value)}}}),e._v(" "),0==e.yes?t("img",{staticClass:"imk",attrs:{src:"https://cdn-icons-png.flaticon.com/128/709/709612.png"},on:{click:function(t){return e.shw()}}}):e._e(),e._v(" "),1==e.yes?t("img",{staticClass:"imk",attrs:{src:"https://cdn-icons-png.flaticon.com/128/2767/2767146.png"},on:{click:function(t){return e.shw()}}}):e._e()]),e._v(" "),1==e.sin?t("button",{staticClass:"LoginButton",attrs:{type:"button"},on:{click:function(t){return e.login()}}},[e._v("\n            Login\n          ")]):t("button",{staticClass:"LoginButton",attrs:{type:"button"}},[t("p",{staticClass:"spinner"})]),e._v(" "),t("p",{staticStyle:{"margin-top":"10px"}},[e._v("Don't have an account ? ")]),t("h3",{staticStyle:{cursor:"pointer"},on:{click:function(t){return e.gos()}}},[e._v("Register")]),t("p")])])])])])}),n,!1,null,"462ddc96",null);t.default=component.exports}}]);