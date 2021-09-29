webpackJsonp([19],{"f/1J":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"change",data:function(){return{form:{email:"",password:"",confirm:""},waiting:!0,msg:null}},computed:{validPass:function(){return this.form.password===this.form.confirm}},methods:{showModal:function(t){this.msg=t,this.$refs.success.show()},showAlert:function(t){this.msg=t,this.$refs.fail.show()},hideModal:function(t){"success"===t?(this.$refs.success.hide(),this.$router.push("/login")):(this.$refs.fail.hide(),this.msg=null,this.waiting=!0)},onSubmit:function(t){console.log(t),t.preventDefault(),this.changePassword()},changePassword:function(){if(!this.validPass)return this.showAlert("Check Password"),!1;this.waiting=!1;var t=this;this.$store.dispatch("changePassword",{userData:this.form}).then(function(e){e.status?t.showModal(e.msg):t.showAlert(e.msg)})}},created:function(){localStorage.floatEmail&&(this.form.email=localStorage.floatEmail)}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"change"},[s("b-container",[s("b-row",{staticClass:"mt-5 mx-auto"},[s("b-col",[t.waiting?s("b-card",{attrs:{header:"Reset Password","header-bg-variant":"prime","header-text-variant":"cream","header-tag":"h3"}},[s("b-form",{on:{submit:t.onSubmit}},[s("b-input-group",{attrs:{label:"Email:","label-for":"exampleInput1"}},[s("b-input-group-prepend",{attrs:{inline:"","is-text":""}},[s("b-icon",{attrs:{icon:"envelope"}})],1),t._v(" "),s("b-form-input",{attrs:{id:"exampleInput1",required:"",placeholder:"Enter Email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),s("b-input-group",{staticClass:"mt-4",attrs:{id:"password",label:"Password:","label-for":"exampleInput2"}},[s("b-input-group-prepend",{attrs:{inline:"","is-text":""}},[s("b-icon",{attrs:{icon:"lock-fill"}})],1),t._v(" "),s("b-form-input",{attrs:{id:"exampleInput2",type:"password",placeholder:"Password",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),s("b-input-group",{staticClass:"my-4",attrs:{id:"exampleInputGroup3",label:"Confirm Password:","label-for":"exampleInput3"}},[s("b-input-group-prepend",{attrs:{inline:"","is-text":""}},[s("b-icon",{attrs:{icon:"lock-fill"}})],1),t._v(" "),s("b-form-input",{attrs:{id:"exampleInput3",type:"password",placeholder:"Password",required:""},model:{value:t.form.confirm,callback:function(e){t.$set(t.form,"confirm",e)},expression:"form.confirm"}}),t._v(" "),s("b-form-invalid-feedback",{attrs:{state:t.validPass}},[t._v("\n                You must enter the same password\n              ")])],1),t._v(" "),s("div",{staticClass:"d-flex justify-content-between"},[s("div",[s("button",{staticClass:"buttonDiv bg-second px-3",staticStyle:{width:"140px"},attrs:{type:"submit"}},[s("b-icon-forward",{attrs:{variant:"cream","font-scale":"1.5"}})],1)])])],1)],1):s("div",{attrs:{align:"center"}},[s("h4",{staticClass:"text-prime"},[t._v(" Reseting Password ")]),t._v(" "),s("b-icon",{attrs:{icon:"three-dots",animation:"cylon",variant:"prime","font-scale":"6"}})],1)],1)],1)],1),t._v(" "),s("b-modal",{ref:"success",attrs:{align:"center","hide-footer":"",title:"Reset Complete"}},[s("div",{staticClass:"d-block"},[s("h3",[t._v(" "+t._s(t.msg)+" ")])]),t._v(" "),s("button",{staticClass:"buttonDiv mt-3 bg-safe text-cream",staticStyle:{width:"60%"},on:{click:function(e){return t.hideModal("success")}}},[t._v("Close")])]),t._v(" "),s("b-modal",{ref:"fail",attrs:{align:"center","hide-footer":"",title:"Problem Found"}},[s("div",{staticClass:"d-block"},[s("h3",[t._v(" "+t._s(t.msg)+" ")])]),t._v(" "),s("button",{staticClass:"buttonDiv mt-3 bg-alert text-cream",staticStyle:{width:"60%"},on:{click:function(e){return t.hideModal("fail")}}},[t._v("Close")])])],1)},staticRenderFns:[]},r=s("VU/8")(a,i,!1,null,null,null);e.default=r.exports}});
//# sourceMappingURL=19.ca827d8badb3bf87c6ba.js.map