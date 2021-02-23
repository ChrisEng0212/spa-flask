webpackJsonp([16],{xJsL:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("YaEn"),o={name:"app",data:function(){return{form:{email:"",password:""},show:!0,waiting:!0,msg:null,showEmail:!1}},methods:{showModal:function(t){this.msg=t,this.$refs.success.show()},showAlert:function(t){this.msg=t,this.$refs.fail.show()},hideModal:function(t){"success"===t?(this.$refs.success.hide(),i.a.push("/account")):"register"===t?(this.$refs.fail.hide(),i.a.push("/register")):(this.$refs.fail.hide(),this.msg=null,this.waiting=!0)},onSubmit:function(t){t.preventDefault(),this.authenticate()},onReset:function(t){var e=this;t.preventDefault(),this.form.email="",this.form.password="",this.show=!1,this.$nextTick(function(){e.show=!0})},authenticate:function(){this.waiting=!1;var t=this;this.$store.dispatch("login",{userData:this.form}).then(function(e){console.log("RESPONSE",e),e.err?t.showAlert(e.msg):t.showModal(e.msg)})}},created:function(){localStorage.floatEmail&&(this.form.email=localStorage.floatEmail)},beforeMount:function(){this.$store.getters.isAuthenticated&&this.$router.push("account")}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[t.waiting?s("b-card",{attrs:{header:"Login","header-bg-variant":"prime","header-text-variant":"cream","header-tag":"h3"},scopedSlots:t._u([{key:"footer",fn:function(){return[s("div",{staticClass:"mb-3"},[s("em",[s("a",{attrs:{href:"#"},on:{click:function(e){return t.$router.push("/register")}}},[t._v("Start New Account")])])]),t._v(" "),s("em",[s("a",{attrs:{href:"#"},on:{click:function(e){t.showEmail=!0}}},[t._v("Forgot Password")])]),t._v(" "),t.showEmail?s("div",[t._v("\n            If you have forgotten your password please contact vocab trainer for a new password\n            "),s("a",{attrs:{href:"cjx02121981@gmail.com"}},[t._v(" cjx02121981@gmail.com ")])]):t._e()]},proxy:!0}],null,!1,88297682)},[t.show?s("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[s("b-input-group",{attrs:{label:"Email:","label-for":"exampleInput1"}},[s("b-input-group-prepend",{attrs:{inline:"","is-text":""}},[s("b-icon",{attrs:{icon:"envelope"}})],1),t._v(" "),s("b-form-input",{attrs:{id:"exampleInput1",required:"",placeholder:"Enter Email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),s("b-input-group",{staticClass:"my-4",attrs:{label:"Password:","label-for":"exampleInput2"}},[s("b-input-group-prepend",{attrs:{inline:"","is-text":""}},[s("b-icon",{attrs:{icon:"lock-fill"}})],1),t._v(" "),s("b-form-input",{attrs:{id:"exampleInput2",type:"password",required:"",placeholder:"Enter Password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),s("div",{staticClass:"d-flex justify-content-between"},[s("div",[s("button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal1",modifiers:{modal1:!0}}],staticClass:"buttonDiv bg-warn px-3",staticStyle:{width:"100px"},attrs:{type:"submit"}},[s("b-icon-forward",{attrs:{variant:"cream","font-scale":"1.5"}})],1)])])],1):t._e()],1):s("div",{attrs:{align:"center"}},[s("h4",{staticClass:"text-prime"},[t._v(" Logging in ")]),t._v(" "),s("b-icon",{attrs:{icon:"three-dots",animation:"cylon",variant:"prime","font-scale":"6"}})],1),t._v(" "),s("b-modal",{ref:"success",attrs:{"hide-header-close":"","no-close-on-esc":"","no-close-on-backdrop":"",align:"center","hide-footer":"",title:"Logged In"}},[s("div",{staticClass:"d-block"},[s("h3",[t._v(" "+t._s(t.msg)+" ")])]),t._v(" "),s("button",{staticClass:"buttonDiv mt-3 bg-prime text-cream",staticStyle:{width:"60%"},on:{click:function(e){return t.hideModal("success")}}},[t._v("Close")])]),t._v(" "),s("b-modal",{ref:"fail",attrs:{"hide-header-close":"","no-close-on-esc":"","no-close-on-backdrop":"",align:"center","hide-footer":"",title:"Problem Found"}},[s("div",{staticClass:"d-block"},[s("h3",[t._v(" "+t._s(t.msg)+" ")])]),t._v(" "),s("button",{staticClass:"buttonDiv mt-3 bg-alert text-cream",staticStyle:{width:"60%"},on:{click:function(e){return t.hideModal("fail")}}},[t._v("Close")]),t._v(" "),s("button",{staticClass:"buttonDiv mt-3 bg-info text-cream",staticStyle:{width:"60%"},on:{click:function(e){return t.hideModal("register")}}},[t._v("Join")])])],1)},staticRenderFns:[]},n=s("VU/8")(o,a,!1,null,null,null);e.default=n.exports}});
//# sourceMappingURL=16.c223e89b9dc647c350de.js.map