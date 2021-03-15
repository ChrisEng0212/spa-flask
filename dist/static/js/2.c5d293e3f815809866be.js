webpackJsonp([2,8,12],{Goic:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("Dd8w"),o=e.n(i),a={name:"InstTests",components:{InstTable:e("Hrg7").default},data:function(){return{masterDetails:{title:null,type:"ECN",list:[],status:0},testDetails:{title:null,type:"ECN",list:[],status:0},msg:null,testRecords:{},showDetails:!1,selected:["",!0],testTypes:[{value:"ECN",label:"Eng --\x3e Ch (Normal)"}]}},methods:{showModal:function(t){this.msg=t,this.$refs.success.show()},showAlert:function(t){this.msg=t,this.$refs.fail.show()},hideModal:function(t){this.$refs[t].hide()},deleteAlert:function(t){console.log(this.testRecords);var s=this.testRecords;s[t]&&(delete s[t],this.testRecords=o()({},this.testRecords),this.$store.dispatch("instructorLogs",{group:this.$store.state.classLoad,action:"setTests",testData:this.testRecords}))},updateActive:function(){this.$store.dispatch("instructorLogs",{group:this.$store.state.classLoad,action:"setActive",activeQuiz:this.activeQuiz})},getDetails:function(t){this.showDetails=!0,this.testDetails=this.testRecords[t]},newTest:function(){this.showDetails=!0,this.testDetails=o()({},this.masterDetails)},saveTest:function(){this.showDetails=!1,this.selected[0]="",this.testRecords[this.testDetails.title]=this.testDetails,this.testRecords=o()({},this.testRecords),this.$store.dispatch("instructorLogs",{group:this.$store.state.classLoad,action:"setTests",testData:this.testRecords})},getColor:function(t){return{0:"alert",1:"warning"}[this.testRecords[t].status]},filterTable:function(t,s){return""===s[0]?!!this.testDetails.list.includes(t.English):1!==s[0].length?!!t.English.includes(s[0].trim()):s[0]===t.English[0]||void 0},playAudio:function(t,s,e,i){var o=document.getElementById(this.audioMarker[0]+this.audioMarker[1]);console.log(o,e),o&&o.setAttribute("class","text-prime");var a=void 0;a=i?"text-warn":"text-"+this.getSoundwave(),this.audioMarker=[t,s];var r=document.getElementById(t+s);r.setAttribute("class",a);var n=document.getElementById("audio");n.src=e;var c=this;n.addEventListener("error",function(t){console.log("Logging playback error: "+t),r.setAttribute("class","text-prime"),c.note="Sorry, no audio available",c.showAlert()}),n.play(),n.onended=function(){r.setAttribute("class","text-prime")}}},computed:{tableItems:function(){return this.$store.getters.makeList},activeOptions:function(){return this.$store.getters.makeActiveOptions},activeQuiz:{get:function(){return this.$store.state.activeQuiz},set:function(t){this.$store.state.activeQuiz=t}}},created:function(){var t=this.$store.getters.testRecords;this.testRecords=o()({},t)}},r={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"instTests"}},[e("audio",{attrs:{id:"audio"}}),t._v(" "),e("div",{staticClass:"bg-white mt-0 p-0"},[e("div",{staticClass:"bg-grey p-2"},[e("b-row",[e("b-col",[e("h3",{staticClass:"text-cream"},[t._v(" Active Test: "+t._s(t.activeQuiz)+" ")]),t._v(" "),e("b-form-select",{staticClass:"bg-second text-cream",attrs:{options:t.activeOptions,"select-size":1},on:{change:function(s){return t.updateActive()}},model:{value:t.activeQuiz,callback:function(s){t.activeQuiz=s},expression:"activeQuiz"}})],1),t._v(" "),e("b-col",{attrs:{align:"right"}},[e("button",{staticClass:"buttonDiv bg-dark text-cream px-3",staticStyle:{width:"auto",height:"auto"},on:{click:function(s){return t.newTest()}}},[t._v("\n                New Test\n          ")])])],1)],1),t._v(" "),e("table",{staticClass:"table table-striped"},[t._m(0),t._v(" "),e("tbody",t._l(t.testRecords,function(s,i){return e("tr",{key:i},[e("th",{attrs:{scope:"row"}},[t._v(t._s(i))]),t._v(" "),e("td",[t._v(t._s(s.type))]),t._v(" "),e("td",[t._v(t._s(s.list.length))]),t._v(" "),e("td",[e("button",{staticClass:"buttonDiv bg-info px-3",staticStyle:{width:"60px"},on:{click:function(s){return t.showResults()}}},[e("b-icon",{attrs:{variant:"cream","font-scale":"1.5",icon:"arrow"}})],1)]),t._v(" "),e("td",[e("button",{staticClass:"buttonDiv bg-safe px-3",staticStyle:{width:"auto",height:"auto"},on:{click:function(s){return t.getDetails(i)}}},[e("b-icon-arrow-clockwise",{attrs:{variant:"cream","font-scale":"1.5"}})],1),t._v(" "),e("button",{staticClass:"buttonDiv bg-danger px-3",staticStyle:{width:"60px",float:"right"},on:{click:function(s){return t.deleteAlert(i)}}},[e("b-icon",{attrs:{variant:"cream","font-scale":"1.5",icon:"trash-fill"}})],1)])])}),0)])]),t._v(" "),t.showDetails?e("div",[e("div",{staticClass:"mt-2 bg-warn p-2"},[e("b-row",[e("b-col",[e("h3",{staticClass:"text-cream"},[t._v(" Test Details: "+t._s(t.testDetails.title)+" ")]),t._v(" "),e("b-input-group",{attrs:{label:"Test Title:","label-for":"exampleInput1"}},[e("b-input-group-prepend",{attrs:{inline:"","is-text":""}},[e("b-icon",{attrs:{icon:"filter-left"}})],1),t._v(" "),e("b-form-input",{attrs:{id:"exampleInput1",required:"",placeholder:"Enter Test Name"},model:{value:t.testDetails.title,callback:function(s){t.$set(t.testDetails,"title",s)},expression:"testDetails.title"}})],1)],1),t._v(" "),e("b-col",{attrs:{align:"right"}},[e("button",{staticClass:"buttonDiv bg-warning text-cream px-3",staticStyle:{width:"auto",height:"auto"},on:{click:function(s){return t.saveTest()}}},[t._v("\n                    Save Test\n              ")])])],1),t._v(" "),e("b-row",{staticClass:"mt-2"},[e("b-col",[e("b-input-group",{attrs:{label:"Vocab:","label-for":"exampleInput2"}},[e("b-input-group-prepend",{attrs:{inline:"","is-text":""}},[e("b-icon",{attrs:{icon:"grid3x2-gap"}})],1),t._v(" "),e("b-form-input",{attrs:{id:"exampleInput2",placeholder:"Search Vocab"},model:{value:t.selected[0],callback:function(s){t.$set(t.selected,0,s)},expression:"selected[0]"}})],1)],1)],1)],1),t._v(" "),e("div",[e("InstTable",{attrs:{selected:t.selected,list:t.testDetails.list,mode:"instructor"}})],1)]):t._e(),t._v(" "),e("b-modal",{ref:"success",attrs:{"hide-header-close":"","no-close-on-esc":"","no-close-on-backdrop":"",align:"center","hide-footer":"",title:"Success"}},[e("div",{staticClass:"d-block"},[e("h3",[t._v(" "+t._s(t.msg)+" ")])]),t._v(" "),e("button",{staticClass:"buttonDiv mt-3 bg-prime text-cream",staticStyle:{width:"60%"},on:{click:function(s){return t.hideModal("success")}}},[t._v("Close")])]),t._v(" "),e("b-modal",{ref:"fail",attrs:{"hide-header-close":"","no-close-on-esc":"","no-close-on-backdrop":"",align:"center","hide-footer":"",title:"Problem Found"}},[e("div",{staticClass:"d-block"},[e("h3",[t._v(" "+t._s(t.msg)+" ")])]),t._v(" "),e("button",{staticClass:"buttonDiv mt-3 bg-alert text-cream",staticStyle:{width:"60%"},on:{click:function(s){return t.hideModal("fail")}}},[t._v("Close")])])],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("Test")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Type")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Vocab")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Results")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Action")])])])}]};var n=e("VU/8")(a,r,!1,function(t){e("r5sk")},"data-v-7cc51ae7",null);s.default=n.exports},KYPk:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("fZjL"),o=e.n(i),a=e("Dd8w"),r=e.n(a),n=e("xEZN"),c={name:"InstClass",props:{s3:String},components:{InstPicts:n.default},data:function(){return{counterKeys:{transEng:"English Test",transCh:"Chinese Test",typeTest:"Type Test",matchTrans:"Match",matchType:"Type Match"},scoreShow:{},pictShow:{},pictShowOne:null}},methods:{getVariant:function(t){return{strong:"spanDiv bg-safe-light text-prime",good:"spanDiv bg-third text-prime",okay:"spanDiv bg-grey text-prime",weak:"spanDiv bg-warn-light text-prime",problem:"spanDiv bg-alert-light text-prime","not tested":"spanDiv bg-cream text-prime"}[t]},showScores:function(t){this.scoreShow[t]&&0!==this.scoreShow[t]?this.scoreShow[t]=0:this.scoreShow[t]=1,this.scoreShow=r()({},this.scoreShow),console.log(t,this.scoreShow)},showPicts:function(t){this.pictShow[t]&&0!==this.pictShow[t]?this.pictShow[t]=0:this.pictShow[t]=1,this.pictShow=r()({},this.pictShow),console.log(t,this.pictShow)},showPictsOne:function(t){this.pictShowOne=t},valueSum:function(t){var s=0;for(var e in t)s+=t[e];return s},getLength:function(t){return delete t.add,o()(t).length},getDates:function(t){var s={};for(var e in t){var i=e.substring(4,7);s[i]||"ce"===i?"ce"!==i&&(s[i]+=1):s[i]=1}return s},userRecItems:function(t){var s={transEng:{strong:0,good:0,okay:0,weak:0,problem:0},transCh:{strong:0,good:0,okay:0,weak:0,problem:0},typeTest:{strong:0,good:0,okay:0,weak:0,problem:0},matchTrans:{strong:0,good:0,okay:0,weak:0,problem:0},matchType:{strong:0,good:0,okay:0,weak:0,problem:0}};for(var e in t)for(var i in t[e]){var o=t[e][i];o>=2?s[e].strong+=1:1===o?s[e].good+=1:0===o?s[e].okay+=1:-1===o?s[e].weak+=1:o<=-2&&(s[e].problem+=1)}return s},vocabCount:function(t,s){var e={};for(var i in t)for(var a in t[i])e[a]=1;return o()(e).length}},computed:{classRecords:function(){return this.$store.getters.classRecords},classGroups:function(){return this.$store.getters.classGroups}}},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"instClass"}},[e("div",{staticClass:"bg-white mt-0 p-0"},[e("table",{staticClass:"table table-striped"},[t._m(0),t._v(" "),e("tbody",[t._l(t.classRecords,function(s,i){return[e("tr",{key:i},[e("td",{staticStyle:{width:"150px"}},[t._v(t._s(i)+"# "+t._s(s.user))]),t._v(" "),e("td",[e("b-form-select",{staticStyle:{width:"50px","overflow-y":"hidden"}},t._l(t.getDates(s.logsRecord.logs),function(s,i){return e("option",{key:s[0]},[t._v(" "+t._s(i)+": "+t._s(s)+"  ")])}),0)],1),e("td",[e("div",{staticStyle:{width:"70px",display:"inline-block"}},[e("b-icon-star-fill",{attrs:{variant:"warning","font-scale":"1.5"}}),t._v(" "+t._s(t.getLength(s.setRecord.starRecord))+"\n                          ")],1),t._v(" "),e("div",{staticStyle:{display:"inline-block"}},[e("b-form-select",{staticStyle:{width:"100px","overflow-y":"hidden"}},t._l(s.setRecord.starRecord,function(s,i){return e("option",{key:i},[t._v(" "+t._s(i)+" ")])}),0)],1)]),t._v(" "),e("td",[e("div",{staticStyle:{width:"70px",display:"inline-block"}},[e("b-icon-images",{attrs:{variant:"safe","font-scale":"1.5"},on:{click:function(s){return t.showPictsOne(i)}}}),t._v(" "+t._s(t.getLength(s.setRecord.dictRecord))+"\n                          ")],1),t._v(" "),e("div",{staticStyle:{display:"inline-block"}},[e("b-form-select",{staticStyle:{width:"100px","overflow-y":"hidden",display:"inline"}},t._l(s.setRecord.dictRecord,function(s,i){return e("option",{key:i},[t._v(" "+t._s(i)+" ")])}),0)],1)]),t._v(" "),e("td",[e("div",{staticStyle:{width:"70px",display:"inline-block"}},[e("b-icon-arrow-up-circle-fill",{attrs:{variant:"info","font-scale":"1.5"}}),t._v(" "+t._s(t.getLength(s.setRecord.addRecord))+"\n                          ")],1),t._v(" "),e("div",{staticStyle:{display:"inline-block"}},[e("b-form-select",{staticStyle:{width:"100px","overflow-y":"hidden"}},t._l(s.setRecord.addRecord,function(s,i){return e("option",{key:i},[t._v(" "+t._s(i)+" ")])}),0)],1)]),t._v(" "),e("td",[e("b-icon",{attrs:{icon:"bar-chart-fill",variant:"alert","font-scale":"1.5"},on:{click:function(s){return t.showScores(i)}}}),t._v(" "+t._s(t.vocabCount(s.userRecord,s.user))+"\n                        ")],1)]),t._v(" "),e("transition",{key:i,attrs:{name:"tableboard"}},[i.toString()in t.scoreShow&&1===t.scoreShow[i.toString()]?e("tr",[e("td",{attrs:{colspan:"6"}},t._l(t.userRecItems(s.userRecord),function(s,i){return e("b-row",{key:i},[e("b-col",{attrs:{cols:"2",align:"right"}},[t._v("\n                                  "+t._s(t.counterKeys[i])+"\n                                ")]),t._v(" "),e("b-col",[t.valueSum(s)>0?e("div",[e("b-progress",{staticStyle:{height:"20px"},attrs:{"show-value":""}},[e("b-progress-bar",{attrs:{value:s.problem,variant:t.getVariant("problem")}}),t._v(" "),e("b-progress-bar",{attrs:{value:s.weak,variant:t.getVariant("weak")}}),t._v(" "),e("b-progress-bar",{attrs:{value:s.okay,variant:t.getVariant("okay")}}),t._v(" "),e("b-progress-bar",{attrs:{value:s.good,variant:t.getVariant("good")}}),t._v(" "),e("b-progress-bar",{attrs:{value:s.strong,variant:t.getVariant("strong")}})],1)],1):t._e()])],1)}),1)]):t._e()]),t._v(" "),e("transition",{key:i,attrs:{name:"tableboard"}},[i.toString()===t.pictShowOne?e("tr",[e("td",{attrs:{colspan:"6"}},[e("InstPicts",{attrs:{student:i,itemMaster:s}})],1)]):t._e()])]})],2)])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("Student")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Logs")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Favs")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Pics")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Adds")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Stats")])])])}]};var u=e("VU/8")(c,l,!1,function(t){e("kZzB")},"data-v-4cbe9fa2",null);s.default=u.exports},N7IE:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("KYPk"),o=e("Goic"),a={name:"Instructor",props:{s3:String},components:{InstClass:i.default,InstTests:o.default},data:function(){return{show:null,waiting:!1}},methods:{getClass:function(t){this.waiting=!0,this.$store.dispatch("instructorLogs",{group:t,action:"getNotesInstructor"}),this.$store.dispatch("instructorLogs",{group:t,action:"getTests"}),this.$store.dispatch("classRecords",{userID:this.$store.state.userProfile.userID,classroom:t}),this.show="class"},getTests:function(){this.waiting=!0,this.show="tests"},saveRecords:function(){this.$store.state.studentNotes!=={}&&this.$store.dispatch("instructorLogs",{group:this.$store.state.classLoad,action:"setNotes",notes:this.$store.state.studentNotes})}},created:function(){this.$store.dispatch("classGroups",{userID:this.$store.state.userProfile.userID})},computed:{classRecords:function(){return this.$store.getters.classRecords},classGroups:function(){return this.$store.getters.classGroups},testRecords:function(){return this.$store.getters.testRecords}},beforeDestroy:function(){this.saveRecords()}},r={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"instructor"}},[e("div",{staticClass:"mt-2 bg-second p-2 head"},[e("div",{staticClass:"ml-2"},[e("b-row",[e("b-col",[e("h3",{staticClass:"text-cream"},[t._v(" Instructor Dashboard ")])])],1)],1)]),t._v(" "),e("div",{staticClass:"bg-white"},[e("table",{staticClass:"table table-striped"},[t._m(0),t._v(" "),e("tbody",t._l(t.classGroups,function(s,i){return e("tr",{key:i},[e("th",{attrs:{scope:"row"}},[t._v(t._s(i))]),t._v(" "),e("td",[t._v(t._s(s.code))]),t._v(" "),e("td",[t._v(" "+t._s(s.count))]),t._v(" "),e("td",[e("button",{staticClass:"buttonDiv bg-info px-3",staticStyle:{width:"auto",height:"auto"},on:{click:function(e){return t.getClass(s.code)}}},[e("b-icon-arrow-clockwise",{attrs:{variant:"cream","font-scale":"1.5"}})],1)])])}),0)])]),t._v(" "),e("div",{staticClass:"mt-2 bg-second p-2 head"},[e("div",{staticClass:"ml-2"},[e("b-row",[e("b-col",[e("h3",{staticClass:"text-cream"},[t._v(" Class: "+t._s(t.$store.state.classLoad)+" ")])]),t._v(" "),t.$store.state.classLoad?[e("b-col",[e("button",{staticClass:"buttonDiv bg-info text-cream px-3",staticStyle:{width:"auto",height:"auto"},on:{click:function(s){t.show="class"}}},[t._v("\n                          CLASS LIST\n              ")])]),t._v(" "),e("b-col",["class"===t.show?e("button",{staticClass:"buttonDiv bg-alert text-cream px-3",staticStyle:{width:"auto",height:"auto"},on:{click:function(s){return t.saveRecords()}}},[t._v("\n                          SAVE NOTES\n              ")]):t._e()]),t._v(" "),e("b-col",[e("button",{staticClass:"buttonDiv bg-warn text-cream px-3",staticStyle:{width:"auto",height:"auto"},on:{click:function(s){return t.getTests()}}},[t._v("\n                          TESTS\n              ")])])]:t._e()],2)],1)]),t._v(" "),t.classRecords&&"class"===t.show?e("div",{staticClass:"bg-white mt-0 p-0"},[e("InstClass")],1):t.testRecords&&"tests"===t.show?e("div",{staticClass:"bg-white mt-0 p-0"},[e("InstTests")],1):t.waiting?e("div",{staticClass:"bg-smoke",attrs:{align:"center"}},[e("br"),t._v(" "),e("br"),t._v(" "),e("h4",{staticClass:"text-prime"},[t._v(" Loading Data ")]),t._v(" "),e("b-icon",{attrs:{icon:"three-dots",animation:"cylon",variant:"prime","font-scale":"6"}}),t._v(" "),e("br"),t._v(" "),e("br")],1):t._e()])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[this._v("#")]),this._v(" "),s("th",{attrs:{scope:"col"}},[this._v("Class")]),this._v(" "),s("th",{attrs:{scope:"col"}},[this._v("Students")]),this._v(" "),s("th",{attrs:{scope:"col"}},[this._v("Load")])])])}]};var n=e("VU/8")(a,r,!1,function(t){e("erL4")},"data-v-7fd75512",null);s.default=n.exports},erL4:function(t,s){},kZzB:function(t,s){},r5sk:function(t,s){}});
//# sourceMappingURL=2.c5d293e3f815809866be.js.map