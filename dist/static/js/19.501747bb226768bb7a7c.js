webpackJsonp([19],{EN1E:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={name:"reset",data:function(){return{form:{email:""},msg:null}},methods:{showModal:function(t){this.msg=t,this.$refs.reset.show()},showAlert:function(t){this.msg=t,this.$refs.error.show()},hideModal:function(t){"reset"===t?(this.$refs.reset.hide(),this.$router.push("/login")):(this.$refs.error.hide(),this.msg=null)},requestToken:function(){var t=this;console.log("requestPage"),this.$store.dispatch("requestEmail",{email:t.form.email}).then(function(e){e.status?(localStorage.setItem("floatEmail",t.form.email),localStorage.setItem("tokenReady",!0),t.showModal(e.msg)):t.showAlert(e.msg)})}}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"reset"},[s("b-container",[s("b-row",{staticClass:"mt-5 mx-auto"},[s("b-col",[s("b-card",{attrs:{header:"Reset","header-bg-variant":"prime","header-text-variant":"cream","header-tag":"h3"}},[s("b-input-group",{staticClass:"my-4",attrs:{label:"Email address:","label-for":"exampleInput4"}},[s("b-input-group-prepend",{attrs:{inline:"","is-text":""}},[s("b-icon",{attrs:{icon:"envelope"}})],1),t._v(" "),s("b-form-input",{attrs:{type:"email",required:"",placeholder:"Enter email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),s("button",{staticClass:"buttonDiv bg-alert second text-cream px-3",staticStyle:{width:"140px"},on:{click:function(e){return t.requestToken()}}},[t._v(" New Password ")])],1)],1)],1)],1),t._v(" "),s("b-modal",{ref:"reset",attrs:{align:"center","hide-footer":"",title:"Reset Complete"}},[s("div",{staticClass:"d-block"},[s("h3",[t._v(" "+t._s(t.msg)+" ")])]),t._v(" "),s("button",{staticClass:"buttonDiv mt-3 bg-safe text-cream",staticStyle:{width:"60%"},on:{click:function(e){return t.hideModal("reset")}}},[t._v("Close")])]),t._v(" "),s("b-modal",{ref:"error",attrs:{align:"center","hide-footer":"",title:"Problem Found"}},[s("div",{staticClass:"d-block"},[s("h3",[t._v(" "+t._s(t.msg)+" ")])]),t._v(" "),s("button",{staticClass:"buttonDiv mt-3 bg-alert text-cream",staticStyle:{width:"60%"},on:{click:function(e){return t.hideModal("error")}}},[t._v("Close")])])],1)},staticRenderFns:[]},o=s("VU/8")(r,a,!1,null,null,null);e.default=o.exports}});
//# sourceMappingURL=19.501747bb226768bb7a7c.js.map