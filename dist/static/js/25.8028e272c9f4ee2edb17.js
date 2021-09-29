webpackJsonp([25],{uK6g:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("0xDb"),o={name:"app",components:{Dash:a("Nbkj").default},data:function(){return{s3:"https://vocab-lms.s3-ap-northeast-1.amazonaws.com/public/profiles/",userProfile:null,lsi:null,tableItems:[],fileData:null,msg:null,avatarLink:this.$store.state.userProfile.userID+"/avatar.jpg",vocabReset:!1,vocabOption:!1,vocabs:[{text:"ESP Tourism",value:"tourism"},{text:"Food Viet",value:"food"}]}},computed:{validName:function(){return this.userProfile.username.length>2&&this.userProfile.username.length<20},validClass:function(){var e=!1;return this.userProfile.classroom&&(e=!0),e},getPict:function(){return this.s3+this.avatarLink}},methods:{getClass:function(){return this.userProfile.classroom?"bg-safe-light":"bg-warn-light"},browse:function(){document.getElementById("file").click()},showModal:function(e){this.msg=e,this.$refs.success.show()},showAlert:function(e){this.msg=e,this.$refs.fail.show()},hideModal:function(e){console.log(this.vocabReset),"success"===e?this.$refs.success.hide():this.$refs.fail.hide(),this.vocabReset&&this.$store.dispatch("logout")},onSubmit:function(e){e.preventDefault(),this.account()},account:function(){var e=this;if(console.log(localStorage.imageData),localStorage.imageData?this.userProfile.imageData=JSON.parse(localStorage.imageData):this.userProfile.imageData=null,!this.validName)return e.showAlert("Invalid Name"),!1;console.log(this.userProfile),this.$store.dispatch("account",{userData:this.userProfile}).then(function(t){if(console.log("ACCOUNT",t),t.err){var a=t.msg;e.showAlert(a)}else if(t.newVocab){e.showModal("You are changing your classroom. Please log in again to update"),e.vocabReset=!0}else e.showModal(t.msg),e.avatarLink=e.$store.state.userProfile.userID+"/avatar.jpg",localStorage.removeItem("imageData")})},handleFileUpload:function(){Object(s.c)(document.getElementById("file"));var e=this;setTimeout(function(){localStorage.imageData&&(console.log("IMAGE"),e.avatarLink="images.jpg",e.lsi=localStorage.imageData)},3e3)}},created:function(){localStorage.removeItem("imageData"),this.userProfile=this.$store.state.userProfile,this.userProfile.imageData="",console.log(this.userProfile),this.tableItems=this.$store.getters.makeList}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"register"},[a("b-card",{attrs:{header:"Account Information","header-bg-variant":"prime","header-text-variant":"cream","header-tag":"h3"}},[a("b-form",{on:{submit:e.onSubmit}},[a("div",{staticClass:"d-flex"},[a("b-col",{on:{click:function(t){return e.browse()}}},[a("b-avatar",{attrs:{src:e.getPict,size:"6rem",text:e.userProfile.username[0]}})],1),e._v(" "),a("b-col",[a("h4",[e._v(" "+e._s(e.userProfile.username)+" ")]),e._v(" "),a("h4",[e._v(" #"+e._s(e.userProfile.userID)+" ")])])],1),e._v(" "),a("br"),e._v(" "),a("b-form-file",{ref:"file",attrs:{accept:"image/*",placeholder:"Change Avatar",type:"file",id:"file"},on:{change:function(t){return e.handleFileUpload()}}}),e._v(" "),e.lsi?a("div",{staticClass:"bg-info text-cream p-2"},[e._v(" Ready to update ")]):e._e(),e._v(" "),a("br"),e._v(" "),a("b-input-group",{staticClass:"my-4",attrs:{label:"Student ID:","label-for":"exampleInput2"}},[a("b-input-group-prepend",{attrs:{inline:"","is-text":""}},[a("b-icon",{attrs:{icon:"person-fill"}})],1),e._v(" "),a("b-form-input",{attrs:{id:"username",placeholder:"Student ID (if joining a class)"},model:{value:e.userProfile.username,callback:function(t){e.$set(e.userProfile,"username",t)},expression:"userProfile.username"}}),e._v(" "),a("b-form-invalid-feedback",{attrs:{state:e.validName}},[e._v("\n                Your username must be 3-20 characters long.\n              ")])],1),e._v(" "),a("b-input-group",{staticClass:"my-4",attrs:{label:"Email address:","label-for":"exampleInput4"}},[a("b-input-group-prepend",{attrs:{inline:"","is-text":""}},[a("b-icon",{attrs:{icon:"envelope"}})],1),e._v(" "),a("b-form-input",{attrs:{id:"email",required:"",type:"email",placeholder:"Email (required)"},model:{value:e.userProfile.email,callback:function(t){e.$set(e.userProfile,"email",t)},expression:"userProfile.email"}})],1),e._v(" "),e.vocabOption?a("div",[a("b-input-group",{staticClass:"my-4",attrs:{label:"Vocab:","label-for":"exampleInput7"}},[a("b-input-group-prepend",{attrs:{inline:"","is-text":""}},[a("b-icon",{attrs:{icon:"card-list"}})],1),e._v(" "),a("b-form-select",{attrs:{id:"vocab",required:"",options:e.vocabs},model:{value:e.userProfile.vocab,callback:function(t){e.$set(e.userProfile,"vocab",t)},expression:"userProfile.vocab"}})],1)],1):e._e(),e._v(" "),a("b-input-group",{staticClass:"my-4",attrs:{label:"Classroom:","label-for":"exampleInput3"}},[a("b-input-group-prepend",{attrs:{inline:"","is-text":""}},[a("b-icon",{attrs:{icon:"people"}})],1),e._v(" "),a("b-form-input",{class:e.getClass(),attrs:{id:"class",placeholder:"Classroom"},model:{value:e.userProfile.classroom,callback:function(t){e.$set(e.userProfile,"classroom",t)},expression:"userProfile.classroom"}}),e._v(" "),a("b-form-invalid-feedback",{staticClass:"text-warn",attrs:{state:e.validClass}},[e._v("\n                Please join a classroom to play MATCH MODE and ADD PICTURES/NEW WORDS; ask your teacher for a classroom code or contact LINE: chrisj0212 to create a new classroom\n              ")])],1),e._v(" "),a("b-input-group",{staticClass:"my-4",attrs:{label:"Student ID:","label-for":"exampleInput2"}},[a("b-input-group-prepend",{attrs:{inline:"","is-text":""}},[a("b-icon",{attrs:{icon:"grid3x2-gap"}})],1),e._v(" "),a("b-form-input",{attrs:{id:"student ID",placeholder:"Student ID (if joining a class)"},model:{value:e.userProfile.studentID,callback:function(t){e.$set(e.userProfile,"studentID",t)},expression:"userProfile.studentID"}})],1),e._v(" "),a("b-input-group",{staticClass:"my-4",attrs:{label:"School:","label-for":"exampleInput3"}},[a("b-input-group-prepend",{attrs:{inline:"","is-text":""}},[a("b-icon",{attrs:{icon:"geo-alt"}})],1),e._v(" "),a("b-form-input",{attrs:{id:"school",placeholder:"School name (if joining a class)"},model:{value:e.userProfile.school,callback:function(t){e.$set(e.userProfile,"school",t)},expression:"userProfile.school"}})],1),e._v(" "),a("div",{staticClass:"d-flex justify-content-between"},[a("div",[a("button",{staticClass:"buttonDiv bg-info px-3",staticStyle:{width:"120px"},attrs:{type:"submit"}},[a("b-icon-forward",{attrs:{variant:"cream","font-scale":"1.5"}})],1)])])],1)],1),e._v(" "),a("br"),e._v(" "),a("b-card",{staticClass:"d-block d-lg-none",attrs:{header:"Account Status","header-bg-variant":"prime","header-text-variant":"cream","header-tag":"h3","no-body":""}},[a("div",{staticClass:"p-3"},[a("Dash",{attrs:{tableItems:e.tableItems,type:"account"}})],1)]),e._v(" "),a("b-modal",{ref:"success",attrs:{"hide-header-close":"","no-close-on-esc":"","no-close-on-backdrop":"",align:"center","hide-footer":"",title:"Logged In"}},[a("div",{staticClass:"d-block"},[a("h3",[e._v(" "+e._s(e.msg)+" ")])]),e._v(" "),a("button",{staticClass:"buttonDiv mt-3 bg-prime text-cream",staticStyle:{width:"60%"},on:{click:function(t){return e.hideModal("success")}}},[e._v("Close")])]),e._v(" "),a("b-modal",{ref:"fail",attrs:{"hide-header-close":"","no-close-on-esc":"","no-close-on-backdrop":"",align:"center","hide-footer":"",title:"Problem Found"}},[a("div",{staticClass:"d-block"},[a("h3",[e._v(" "+e._s(e.msg)+" ")])]),e._v(" "),a("button",{staticClass:"buttonDiv mt-3 bg-alert text-cream",staticStyle:{width:"60%"},on:{click:function(t){return e.hideModal("fail")}}},[e._v("Close")])])],1)},staticRenderFns:[]},i=a("VU/8")(o,r,!1,null,null,null);t.default=i.exports}});
//# sourceMappingURL=25.8028e272c9f4ee2edb17.js.map