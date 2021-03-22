webpackJsonp([2,3,13,14],{Gm9S:function(t,s){},Goic:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("Dd8w"),o=e.n(i),r=e("Hrg7"),a=e("Lr5f"),n={name:"InstTests",components:{InstTable:r.default,InstAns:a.default},data:function(){return{testDetails:{title:null,type:"ECN",list:[],status:0},msg:null,holder:[null,null],results:null,answers:null,answerData:[],testRecords:{},showDetails:!1,selected:["",!0],testTypes:[{value:"ECN",label:"Eng --\x3e Ch (Normal)"}],fields:[{key:"studentID",label:"ID",sortable:!0},{key:"user",label:"Name",sortable:!0},{key:"quizData",label:"Grade(%)",sortable:!0},{key:"time",label:"Time",sortable:!0},{key:"buttons",label:"Action"}]}},methods:{showModal:function(t){this.msg=t,this.$refs.success.show()},showAnsModal:function(t){this.$refs.answers.show()},deleteModal:function(t,s){console.log("deleteModal",t,s),this.holder=[t,s],t?this.$refs.reset.show():this.$refs.delete.show()},showAlert:function(t){this.msg=t,this.$refs.fail.show()},hideModal:function(t){this.$refs[t].hide()},deleteMode:function(t){this.$refs[t].hide(),this.holder[0]?this.deleteAnswers():this.deleteQuiz()},deleteQuiz:function(){console.log(this.holder,this.activeQuiz);var t=this.holder[1];this.$refs.delete.hide(),console.log(this.testRecords);var s=this.testRecords;this.showDetails=!1,this.results=!1,this.activeQuiz===t&&(this.activeQuiz="",this.updateActive()),s[t]&&(delete s[t],this.testRecords=o()({},this.testRecords),this.$store.dispatch("instructorLogs",{group:this.$store.state.classLoad,action:"setTests",testData:this.testRecords}))},deleteAnswers:function(){var t=this.holder[0],s=this.holder[1];console.log("delete",t,s),this.studentTests=o()({},this.$store.state.studentResults[t]),this.studentTests[s]={answerData:[],score:0,time:0},this.$store.dispatch("instructorLogs",{group:this.$store.state.classLoad,action:"setStudent",student:t,studentTests:this.studentTests}),this.$store.dispatch("instructorLogs",{group:this.$store.state.classLoad,action:"getResults"})},showAnswers:function(t,s,e){console.log("show",t,s,e),this.answerData=e,this.showAnsModal()},showResults:function(t){this.results===t?this.results=null:this.results=t},getScore:function(t,s){if(console.log(t,s,this.$store.state.testRecord),t){var e=t.score,i=t.answerData.length,o=this.$store.state.testRecords[s].list.length,r=e/o*100,a=o/i*100;return[Math.round(r),Math.round(a),t.time]}return["-","-","-"]},activeCheck:function(t,s){this.activeQuiz=0===s?"":t,this.updateActive()},updateActive:function(){this.$store.dispatch("instructorLogs",{group:this.$store.state.classLoad,action:"setActive",activeQuiz:this.activeQuiz})},getDetails:function(t){this.showDetails&&this.testDetails===this.testRecords[t]?(this.showDetails=!1,this.testDetails={title:null,type:"ECN",list:[],status:0}):(this.showDetails=!0,this.results=!1,this.testDetails=this.testRecords[t])},copyDetails:function(t){this.testDetails={title:this.testRecords[t].title+"copy",type:"ECN",list:this.testRecords[t].list},this.showDetails=!0,this.results=!1},newTest:function(){this.showDetails=!0,this.testDetails=o()({},{title:null,type:"ECN",list:[]})},saveTest:function(){this.showDetails=!1,this.selected[0]="",this.testRecords[this.testDetails.title]=this.testDetails,this.testRecords=o()({},this.testRecords),this.$store.dispatch("instructorLogs",{group:this.$store.state.classLoad,action:"setTests",testData:this.testRecords})},filterTable:function(t,s){return""===s[0]?!!this.testDetails.list.includes(t.English):1!==s[0].length?!!t.English.includes(s[0].trim()):s[0]===t.English[0]||void 0},playAudio:function(t,s,e,i){var o=document.getElementById(this.audioMarker[0]+this.audioMarker[1]);console.log(o,e),o&&o.setAttribute("class","text-prime");var r=void 0;r=i?"text-warn":"text-"+this.getSoundwave(),this.audioMarker=[t,s];var a=document.getElementById(t+s);a.setAttribute("class",r);var n=document.getElementById("audio");n.src=e;var c=this;n.addEventListener("error",function(t){console.log("Logging playback error: "+t),a.setAttribute("class","text-prime"),c.note="Sorry, no audio available",c.showAlert()}),n.play(),n.onended=function(){a.setAttribute("class","text-prime")}}},computed:{tableItems:function(){return this.$store.getters.makeList},activeOptions:function(){return this.$store.getters.makeActiveOptions},activeQuiz:{get:function(){return this.$store.state.activeQuiz},set:function(t){this.$store.state.activeQuiz=t}}},created:function(){var t=this.$store.getters.testRecords;this.testRecords=o()({},t)}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"instTests"}},[e("audio",{attrs:{id:"audio"}}),t._v(" "),e("div",{staticClass:"bg-white mt-0 p-0"},[e("div",{staticClass:"bg-grey p-2"},[e("b-row",[e("b-col",{attrs:{align:"right"}},[e("button",{staticClass:"buttonDiv bg-dark text-cream px-3",staticStyle:{width:"auto",height:"auto"},on:{click:function(s){return t.newTest()}}},[t._v("\n                New Test\n          ")])])],1)],1),t._v(" "),e("table",{staticClass:"table table-striped"},[t._m(0),t._v(" "),e("tbody",[t._l(t.testRecords,function(s,i){return[e("tr",{key:i},[e("th",{attrs:{scope:"row"}},[t._v(t._s(i))]),t._v(" "),e("td",[t._v(t._s(s.type))]),t._v(" "),e("td",[t._v(t._s(s.list.length))]),t._v(" "),e("td",[e("button",{staticClass:"buttonDiv bg-info px-3",staticStyle:{width:"60px"},on:{click:function(s){return t.showResults(i)}}},[e("b-icon-filter-left",{attrs:{variant:"cream","font-scale":"1"}})],1)]),t._v(" "),e("td",[e("button",{staticClass:"buttonDiv bg-safe px-3 mr-3",staticStyle:{width:"auto",height:"auto"},on:{click:function(s){return t.getDetails(i)}}},[e("b-icon-folder-plus",{attrs:{variant:"cream","font-scale":"1"}})],1)]),t._v(" "),e("td",[t.activeQuiz===i?e("button",{staticClass:"buttonDiv bg-warning px-3",staticStyle:{width:"auto",height:"auto"},on:{click:function(s){return t.activeCheck(i,0)}}},[e("b-icon",{attrs:{icon:"check"}})],1):e("button",{staticClass:"buttonDiv bg-grey px-3",staticStyle:{width:"auto",height:"auto"},on:{click:function(s){return t.activeCheck(i,1)}}},[e("b-icon",{attrs:{icon:"check"}})],1)]),t._v(" "),e("td",[e("button",{staticClass:"buttonDiv bg-warn px-3 mr-3 ",staticStyle:{width:"auto",height:"auto"},on:{click:function(s){return t.copyDetails(i)}}},[e("b-icon-collection",{attrs:{variant:"cream","font-scale":"1"}})],1)]),t._v(" "),e("td",[e("button",{staticClass:"buttonDiv bg-alert px-3 mr-3",staticStyle:{width:"60px"},on:{click:function(s){return t.deleteModal(null,i)}}},[e("b-icon",{attrs:{variant:"cream","font-scale":"1",icon:"trash-fill"}})],1)])]),t._v(" "),e("transition",{key:i+"1",attrs:{name:"tableboard"}},[t.results===i?e("tr",[e("td",{attrs:{colspan:"8"}},[e("b-table",{attrs:{striped:"",hover:"",items:t.$store.state.studentResults,fields:t.fields,"show-empty":"",fixed:"","head-variant":"dark"},scopedSlots:t._u([{key:"cell(quizData)",fn:function(s){return[t._v("\n                              "+t._s(t.getScore(s.item.quizData[i],i)[0])+"\n                          ")]}},{key:"cell(time)",fn:function(s){return[t._v("\n                              "+t._s(t.getScore(s.item.quizData[i],i)[2])+"\n                          ")]}},{key:"cell(buttons)",fn:function(s){return[s.item.quizData[i]?e("button",{staticClass:"buttonDiv bg-warning px-3",on:{click:function(e){return t.showAnswers(s.item.uid,i,s.item.quizData[i].answerData)}}},[e("b-icon-filter-left",{attrs:{variant:"cream","font-scale":"1"}})],1):t._e(),t._v(" "),s.item.quizData[i]?e("button",{staticClass:"buttonDiv bg-alert px-3",on:{click:function(e){return t.deleteModal(s.item.uid,i)}}},[e("b-icon",{attrs:{variant:"cream","font-scale":"1",icon:"trash-fill"}})],1):t._e()]}}],null,!0)})],1)]):t._e()])]})],2)])]),t._v(" "),t.showDetails?e("div",[e("div",{staticClass:"mt-2 bg-darkgrey p-2"},[e("b-row",[e("b-col",[e("h3",{staticClass:"text-cream"},[t._v(" Test Details: "+t._s(t.testDetails.title)+" ")]),t._v(" "),t.testRecords[t.testDetails.title]?t._e():e("b-input-group",{attrs:{label:"Test Title:","label-for":"exampleInput1"}},[e("b-input-group-prepend",{attrs:{inline:"","is-text":""}},[e("b-icon",{attrs:{icon:"filter-left"}})],1),t._v(" "),e("b-form-input",{attrs:{id:"exampleInput1",required:"",placeholder:"Enter Test Name"},model:{value:t.testDetails.title,callback:function(s){t.$set(t.testDetails,"title",s)},expression:"testDetails.title"}})],1)],1),t._v(" "),e("b-col",{attrs:{align:"right"}},[e("button",{staticClass:"buttonDiv bg-warning text-cream px-3",staticStyle:{width:"auto",height:"auto"},on:{click:function(s){return t.saveTest()}}},[e("b-icon",{attrs:{icon:"cloud-upload","font-scale":"2"}})],1)])],1),t._v(" "),e("b-row",{staticClass:"mt-2"},[e("b-col",[e("b-input-group",{attrs:{label:"Vocab:","label-for":"exampleInput2"}},[e("b-input-group-prepend",{attrs:{inline:"","is-text":""}},[e("b-icon",{attrs:{icon:"grid3x2-gap"}})],1),t._v(" "),e("b-form-input",{attrs:{id:"exampleInput2",placeholder:"Search Vocab"},model:{value:t.selected[0],callback:function(s){t.$set(t.selected,0,s)},expression:"selected[0]"}})],1)],1)],1)],1),t._v(" "),e("div",[e("InstTable",{attrs:{selected:t.selected,list:t.testDetails.list,mode:"instructor"}})],1)]):t._e(),t._v(" "),e("b-modal",{ref:"success",attrs:{"hide-header-close":"","no-close-on-esc":"","no-close-on-backdrop":"",align:"center","hide-footer":"",title:"Success"}},[e("div",{staticClass:"d-block"},[e("h3",[t._v(" "+t._s(t.msg)+" ")])]),t._v(" "),e("button",{staticClass:"buttonDiv mt-3 bg-prime text-cream",staticStyle:{width:"60%"},on:{click:function(s){return t.hideModal("success")}}},[t._v("Close")])]),t._v(" "),e("b-modal",{ref:"delete",attrs:{"hide-header-close":"","no-close-on-esc":"","no-close-on-backdrop":"",align:"center","hide-footer":"",title:"Delete"}},[e("div",{staticClass:"d-block"},[e("h3",[t._v(" You are about to delete a record. Are you sure you want to delete? ")])]),t._v(" "),e("button",{staticClass:"buttonDiv mt-3 bg-alert text-cream",staticStyle:{width:"60%"},on:{click:function(s){return t.hideModal("delete")}}},[t._v("No")]),t._v(" "),e("button",{staticClass:"buttonDiv mt-3 bg-safe text-cream",staticStyle:{width:"60%"},on:{click:function(s){return t.deleteMode("delete")}}},[t._v("Yes")])]),t._v(" "),e("b-modal",{ref:"reset",attrs:{"hide-header-close":"","no-close-on-esc":"","no-close-on-backdrop":"",align:"center","hide-footer":"",title:"Reset"}},[e("div",{staticClass:"d-block"},[e("h3",[t._v(" You are about to reset a students quiz. Are you sure you want to reset? ")]),t._v("\n      "+t._s(t.$store.state.studentResults[t.holder[0]])+"\n    ")]),t._v(" "),e("button",{staticClass:"buttonDiv mt-3 bg-alert text-cream",staticStyle:{width:"60%"},on:{click:function(s){return t.hideModal("reset")}}},[t._v("No")]),t._v(" "),e("button",{staticClass:"buttonDiv mt-3 bg-safe text-cream",staticStyle:{width:"60%"},on:{click:function(s){return t.deleteMode("reset")}}},[t._v("Yes")])]),t._v(" "),e("b-modal",{ref:"fail",attrs:{"hide-header-close":"","no-close-on-esc":"","no-close-on-backdrop":"",align:"center","hide-footer":"",title:"Problem Found"}},[e("div",{staticClass:"d-block"},[e("h3",[t._v(" "+t._s(t.msg)+" ")])]),t._v(" "),e("button",{staticClass:"buttonDiv mt-3 bg-alert text-cream",staticStyle:{width:"60%"},on:{click:function(s){return t.hideModal("fail")}}},[t._v("Close")])]),t._v(" "),e("b-modal",{ref:"answers",attrs:{"hide-header-close":"","no-close-on-esc":"","no-close-on-backdrop":"",align:"center","hide-footer":"",title:"Student Answers"}},[e("div",{staticClass:"d-block"},[e("div",{staticClass:"bg-white mt-0 p-0"},[e("InstAns",{attrs:{answerData:t.answerData,mode:"CE"}})],1)]),t._v(" "),e("button",{staticClass:"buttonDiv mt-3 bg-alert text-cream",staticStyle:{width:"60%"},on:{click:function(s){return t.hideModal("answers")}}},[t._v("Close")])])],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("Test")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Type")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Vocab")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Results")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Edit")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Active")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Copy")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Delete")])])])}]};var l=e("VU/8")(n,c,!1,function(t){e("Wm0I")},"data-v-3c202ed4",null);s.default=l.exports},KYPk:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("fZjL"),o=e.n(i),r=e("Dd8w"),a=e.n(r),n=e("xEZN"),c={name:"InstClass",props:{s3:String},components:{InstPicts:n.default},data:function(){return{counterKeys:{transEng:"English Test",transCh:"Chinese Test",typeTest:"Type Test",matchTrans:"Match",matchType:"Type Match"},scoreShow:{},pictShow:{},pictShowOne:null}},methods:{getVariant:function(t){return{strong:"spanDiv bg-safe-light text-prime",good:"spanDiv bg-third text-prime",okay:"spanDiv bg-grey text-prime",weak:"spanDiv bg-warn-light text-prime",problem:"spanDiv bg-alert-light text-prime","not tested":"spanDiv bg-cream text-prime"}[t]},showScores:function(t){this.scoreShow[t]&&0!==this.scoreShow[t]?this.scoreShow[t]=0:this.scoreShow[t]=1,this.scoreShow=a()({},this.scoreShow),console.log(t,this.scoreShow)},showPicts:function(t){this.pictShow[t]&&0!==this.pictShow[t]?this.pictShow[t]=0:this.pictShow[t]=1,this.pictShow=a()({},this.pictShow),console.log(t,this.pictShow)},showPictsOne:function(t){this.pictShowOne=t},valueSum:function(t){var s=0;for(var e in t)s+=t[e];return s},getLength:function(t){return delete t.add,o()(t).length},getDates:function(t){var s={};for(var e in t){var i=e.substring(4,7);s[i]||"ce"===i?"ce"!==i&&(s[i]+=1):s[i]=1}return s},saveRecords:function(){this.$store.state.studentNotes!=={}&&this.$store.dispatch("instructorLogs",{group:this.$store.state.classLoad,action:"setNotes",notes:this.$store.state.studentNotes})},userRecItems:function(t){var s={transEng:{strong:0,good:0,okay:0,weak:0,problem:0},transCh:{strong:0,good:0,okay:0,weak:0,problem:0},typeTest:{strong:0,good:0,okay:0,weak:0,problem:0},matchTrans:{strong:0,good:0,okay:0,weak:0,problem:0},matchType:{strong:0,good:0,okay:0,weak:0,problem:0}};for(var e in t)for(var i in t[e]){var o=t[e][i];o>=2?s[e].strong+=1:1===o?s[e].good+=1:0===o?s[e].okay+=1:-1===o?s[e].weak+=1:o<=-2&&(s[e].problem+=1)}return s},vocabCount:function(t,s){var e={};for(var i in t)for(var r in t[i])e[r]=1;return o()(e).length}},computed:{classRecords:function(){return this.$store.getters.classRecords},classGroups:function(){return this.$store.getters.classGroups}},beforeDestroy:function(){this.saveRecords()}},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"instClass"}},[e("div",{staticClass:"bg-white mt-0 p-0"},[e("div",{staticClass:"bg-grey p-2"},[e("b-row",[e("b-col",{attrs:{align:"right"}},[e("button",{staticClass:"buttonDiv bg-alert text-cream px-3",staticStyle:{width:"auto",height:"auto"},on:{click:function(s){return t.saveRecords()}}},[t._v("\n                  Save Notes\n          ")])])],1)],1),t._v(" "),e("table",{staticClass:"table table-striped"},[t._m(0),t._v(" "),e("tbody",[t._l(t.classRecords,function(s,i){return[e("tr",{key:i},[e("td",{staticStyle:{width:"150px"}},[t._v(t._s(s.studentID))]),t._v(" "),e("td",{staticStyle:{width:"150px"}},[t._v(t._s(s.user))]),t._v(" "),e("td",[e("b-form-select",{staticStyle:{width:"50px","overflow-y":"hidden"}},t._l(t.getDates(s.logsRecord.logs),function(s,i){return e("option",{key:s[0]},[t._v(" "+t._s(i)+": "+t._s(s)+"  ")])}),0)],1),e("td",[e("div",{staticStyle:{width:"70px",display:"inline-block"}},[e("b-icon-star-fill",{attrs:{variant:"warning","font-scale":"1.5"}}),t._v(" "+t._s(t.getLength(s.setRecord.starRecord))+"\n                          ")],1),t._v(" "),e("div",{staticStyle:{display:"inline-block"}},[e("b-form-select",{staticStyle:{width:"100px","overflow-y":"hidden"}},t._l(s.setRecord.starRecord,function(s,i){return e("option",{key:i},[t._v(" "+t._s(i)+" ")])}),0)],1)]),t._v(" "),e("td",[e("div",{staticStyle:{width:"70px",display:"inline-block"}},[e("b-icon-images",{attrs:{variant:"safe","font-scale":"1.5"},on:{click:function(s){return t.showPictsOne(i)}}}),t._v(" "+t._s(t.getLength(s.setRecord.dictRecord))+"\n                          ")],1),t._v(" "),e("div",{staticStyle:{display:"inline-block"}},[e("b-form-select",{staticStyle:{width:"100px","overflow-y":"hidden",display:"inline"}},t._l(s.setRecord.dictRecord,function(s,i){return e("option",{key:i},[t._v(" "+t._s(i)+" ")])}),0)],1)]),t._v(" "),e("td",[e("div",{staticStyle:{width:"70px",display:"inline-block"}},[e("b-icon-arrow-up-circle-fill",{attrs:{variant:"info","font-scale":"1.5"}}),t._v(" "+t._s(t.getLength(s.setRecord.addRecord))+"\n                          ")],1),t._v(" "),e("div",{staticStyle:{display:"inline-block"}},[e("b-form-select",{staticStyle:{width:"100px","overflow-y":"hidden"}},t._l(s.setRecord.addRecord,function(s,i){return e("option",{key:i},[t._v(" "+t._s(i)+" ")])}),0)],1)]),t._v(" "),e("td",[e("b-icon",{attrs:{icon:"bar-chart-fill",variant:"alert","font-scale":"1.5"},on:{click:function(s){return t.showScores(i)}}}),t._v(" "+t._s(t.vocabCount(s.userRecord,s.user))+"\n                        ")],1)]),t._v(" "),e("transition",{key:i,attrs:{name:"tableboard"}},[i.toString()in t.scoreShow&&1===t.scoreShow[i.toString()]?e("tr",[e("td",{attrs:{colspan:"6"}},t._l(t.userRecItems(s.userRecord),function(s,i){return e("b-row",{key:i},[e("b-col",{attrs:{cols:"2",align:"right"}},[t._v("\n                                  "+t._s(t.counterKeys[i])+"\n                                ")]),t._v(" "),e("b-col",[t.valueSum(s)>0?e("div",[e("b-progress",{staticStyle:{height:"20px"},attrs:{"show-value":""}},[e("b-progress-bar",{attrs:{value:s.problem,variant:t.getVariant("problem")}}),t._v(" "),e("b-progress-bar",{attrs:{value:s.weak,variant:t.getVariant("weak")}}),t._v(" "),e("b-progress-bar",{attrs:{value:s.okay,variant:t.getVariant("okay")}}),t._v(" "),e("b-progress-bar",{attrs:{value:s.good,variant:t.getVariant("good")}}),t._v(" "),e("b-progress-bar",{attrs:{value:s.strong,variant:t.getVariant("strong")}})],1)],1):t._e()])],1)}),1)]):t._e()]),t._v(" "),e("transition",{key:i,attrs:{name:"tableboard"}},[i.toString()===t.pictShowOne?e("tr",[e("td",{attrs:{colspan:"6"}},[e("InstPicts",{attrs:{student:i,itemMaster:s}})],1)]):t._e()])]})],2)])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("ID")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Student")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Logs")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Favs")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Pics")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Adds")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Stats")])])])}]};var u=e("VU/8")(c,l,!1,function(t){e("ir0b")},"data-v-1e4b0052",null);s.default=u.exports},Kfqr:function(t,s){},N7IE:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("KYPk"),o=e("Goic"),r=e("qFW8"),a={name:"Instructor",props:{s3:String},components:{InstClass:i.default,InstTests:o.default,InstMatch:r.default},data:function(){return{show:"tests",waiting:!1,optionsR:[{value:"tests",text:"TEST"},{value:"class",text:"CLASS"},{value:"match",text:"MATCH"}],color:{class:"p1",tests:"warn",match:"grape-light"}}},methods:{getClass:function(t){this.waiting=!0,this.show="tests",this.group=t,this.$store.dispatch("instructorLogs",{group:t,action:"getNotesInstructor"}),this.$store.dispatch("instructorLogs",{group:t,action:"getTests"}),this.$store.dispatch("instructorLogs",{group:t,action:"getResults"}),this.$store.dispatch("classRecords",{userID:this.$store.state.userProfile.userID,classroom:t})},getTests:function(){this.waiting=!0,this.show="tests"},getRow:function(t){return t===this.$store.state.userProfile.classroom?"bg-p1-light":null}},created:function(){this.$store.dispatch("classGroups",{userID:this.$store.state.userProfile.userID}),this.getClass(this.$store.state.userProfile.classroom)},computed:{classRecords:function(){return this.$store.getters.classRecords},classGroups:function(){return this.$store.getters.classGroups},testRecords:function(){return this.$store.getters.testRecords}}},n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"instructor"}},[e("div",{staticClass:"mt-2 bg-prime p-2 head"},[e("div",{staticClass:"ml-2"},[e("b-row",[e("b-col",[e("h3",{staticClass:"text-cream"},[t._v(" Instructor Dashboard ")])])],1)],1)]),t._v(" "),e("div",{staticClass:"bg-white"},[e("table",{staticClass:"table table-striped"},[t._m(0),t._v(" "),e("tbody",t._l(t.classGroups,function(s,i){return e("tr",{key:i,class:t.getRow(s.code)},[e("th",{attrs:{scope:"row"}},[t._v(t._s(i))]),t._v(" "),e("td",[t._v(t._s(s.code))]),t._v(" "),e("td",[t._v(t._s(s.count))]),t._v(" "),e("td",[e("button",{staticClass:"buttonDiv bg-info px-3",staticStyle:{width:"auto",height:"auto"},on:{click:function(e){return t.getClass(s.code)}}},[e("b-icon-arrow-clockwise",{attrs:{variant:"cream","font-scale":"1.5"}})],1),t._v(" "),t.getRow(s.code)?e("span",{staticClass:"ml-2"},[t._v(" (Logged in) ")]):t._e()])])}),0)])]),t._v(" "),e("div",{staticClass:"mt-2 bg-prime p-2 head"},[e("div",{staticClass:"ml-2"},[e("b-row",[e("b-col",[e("h3",{staticClass:"text-cream"},[t._v(" Class: "+t._s(t.$store.state.classLoad)+" ")])]),t._v(" "),[e("b-col",{attrs:{align:"center",cols:"4"}},[e("div",{staticClass:"bg-third p-2"},[e("b-form-group",[e("b-form-radio-group",{staticStyle:{width:"100%:color:cream"},attrs:{id:"btn-radios-2",options:t.optionsR,buttons:"","button-variant":t.color[t.show],size:"lg",name:"radio-btn-outline"},model:{value:t.show,callback:function(s){t.show=s},expression:"show"}})],1)],1)])]],2)],1)]),t._v(" "),"tests"===t.show?e("div",{staticClass:"bg-white mt-0 p-0"},[e("InstTests")],1):t.classRecords&&"class"===t.show?e("div",{staticClass:"bg-white mt-0 p-0"},[e("InstClass")],1):"match"===t.show?e("div",{staticClass:"bg-white mt-0 p-0"},[e("InstMatch",{attrs:{s3:t.s3}})],1):t.waiting?e("div",{staticClass:"bg-smoke",attrs:{align:"center"}},[e("br"),t._v(" "),e("br"),t._v(" "),e("h4",{staticClass:"text-prime"},[t._v(" Loading Data ")]),t._v(" "),e("b-icon",{attrs:{icon:"three-dots",animation:"cylon",variant:"prime","font-scale":"6"}}),t._v(" "),e("br"),t._v(" "),e("br")],1):t._e()])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[this._v("#")]),this._v(" "),s("th",{attrs:{scope:"col"}},[this._v("Class")]),this._v(" "),s("th",{attrs:{scope:"col"}},[this._v("Students")]),this._v(" "),s("th",{attrs:{scope:"col"}},[this._v("Load")])])])}]};var c=e("VU/8")(a,n,!1,function(t){e("Kfqr")},"data-v-41d76aa7",null);s.default=c.exports},TmV0:function(t,s,e){e("fZOM"),t.exports=e("FeBl").Object.values},Wm0I:function(t,s){},fZOM:function(t,s,e){var i=e("kM2E"),o=e("mbce")(!1);i(i.S,"Object",{values:function(t){return o(t)}})},gRE1:function(t,s,e){t.exports={default:e("TmV0"),__esModule:!0}},ir0b:function(t,s){},mbce:function(t,s,e){var i=e("+E39"),o=e("lktj"),r=e("TcQ7"),a=e("NpIQ").f;t.exports=function(t){return function(s){for(var e,n=r(s),c=o(n),l=c.length,u=0,d=[];l>u;)e=c[u++],i&&!a.call(n,e)||d.push(t?[e,n[e]]:n[e]);return d}}},qFW8:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("gRE1"),o=e.n(i),r=e("Dd8w"),a=e.n(r),n={name:"InstMatch",props:{s3:String},components:{},data:function(){return{round1:{},array1:[],round2:{},array2:[],round3:{},array3:[],round4:{},array4:[]}},methods:{winner:function(t){alert(t)},getBG:function(t){console.log("getBG",t);if([1,2,5,6,9,10,13,14].includes(parseInt(t)))return"bg-grape text-cream"},newMatch:function(){this.round1set(),this.round2set(),this.round3set(),this.round4set()},round4set:function(){for(var t=1;t<3;t+=1)this.round4[t]=null,this.array4.push(t);console.log(this.round4,this.array4)},round3set:function(){for(var t=1;t<5;t+=1)this.round3[t]=null,this.array3.push(t);console.log(this.round3,this.array3)},round2set:function(){for(var t=1;t<9;t+=1)this.round2[t]=null,this.array2.push(t);console.log(this.round3,this.array2)},round1set:function(){for(var t=1;t<17;t+=1)this.round1[t]=null,this.array1.push(t);console.log(this.round1,this.array1)},getUser:function(t){if(console.log(t,this.classRecords),t)return this.classRecords[t].user},levelOne:function(t,s){var e=this.shuffle(this.array1);for(var i in e){var o=e[i];if(null===this.round1[o]&&1===s)return this.round1[o]=t,console.log("add",this.round1),this.round1=a()({},this.round1),!0;if(0===s&&this.round1[o]===t)return this.round1[o]=null,console.log("remove",this.round1),this.round1=a()({},this.round1),!0}},levelTwo:function(t){var s=this.shuffle(this.array2),e=void 0;for(var i in e=o()(this.round2).includes(t)?0:1,s){var r=s[i];if(null===this.round2[r]&&1===e)return this.round2[r]=t,console.log("add",this.round2),this.round2=a()({},this.round2),!0;if(0===e&&this.round2[r]===t)return this.round2[r]=null,console.log("remove",this.round2),this.round2=a()({},this.round2),!0}},levelThree:function(t){var s=void 0;s=o()(this.round3).includes(t)?0:1;var e=this.shuffle(this.array3);for(var i in e){var r=e[i];if(null===this.round3[r]&&1===s)return this.round3[r]=t,console.log("add",this.round3),this.round3=a()({},this.round3),!0;if(0===s&&this.round3[r]===t)return this.round3[r]=null,console.log("remove",this.round3),this.round3=a()({},this.round3),!0}},levelFour:function(t){this.round4[1]===t?this.round4[1]=null:this.round4[2]===t?this.round4[2]=null:null===this.round4[1]?this.round4[1]=t:this.round4[2]=t,this.round4=a()({},this.round4)},shuffle:function(t){for(var s=t.length-1;s>0;s--){var e=Math.floor(Math.random()*(s+1)),i=[t[e],t[s]];t[s]=i[0],t[e]=i[1]}return t}},computed:{classRecords:function(){return this.$store.getters.classRecords},r1values:function(){return o()(this.round1)},r2values:function(){return o()(this.round2)},r3values:function(){return o()(this.round3)},r4values:function(){return o()(this.round4)}}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"instMatch"}},[e("div",{staticClass:"bg-white mt-0 p-0"},[e("div",{staticClass:"bg-grey p-2"},[e("b-row",[e("b-col",{attrs:{align:"right"}},[e("button",{staticClass:"buttonDiv bg-grape text-cream px-3",staticStyle:{width:"auto",height:"auto"},on:{click:function(s){return t.newMatch()}}},[t._v("\n                New Match\n          ")])])],1)],1),t._v(" "),e("div",{staticClass:"bg-grape-light p-2"},[e("b-row",[e("b-col",t._l(t.round1,function(s,i){return e("div",{key:i,class:t.getBG(i),staticStyle:{height:"30px"},on:{click:function(e){return t.levelTwo(s,1)}}},[e("b-avatar",{staticClass:"ml-2",attrs:{src:t.s3+s+"/avatar.jpg",size:"1.5rem"}}),t._v(" "+t._s(t.getUser(s))+"\n          ")],1)}),0),t._v(" "),e("b-col",t._l(t.round2,function(s,i){return e("div",{key:i},[e("div",{class:t.getBG(parseInt(i)),staticStyle:{height:"20px"}}),t._v(" "),e("div",{class:t.getBG(i),staticStyle:{height:"40px"},on:{click:function(e){return t.levelThree(s,1)}}},[e("b-avatar",{staticClass:"ml-2",attrs:{src:t.s3+s+"/avatar.jpg",size:"2rem"}}),t._v(" "+t._s(t.getUser(s))+"\n             ")],1)])}),0),t._v(" "),e("b-col",t._l(t.round3,function(s,i){return e("div",{key:i,on:{click:function(e){return t.levelFour(s,1)}}},[e("div",{class:t.getBG(parseInt(i)),staticStyle:{height:"10px"}}),t._v(" "),e("div",{class:t.getBG(parseInt(i)),staticStyle:{height:"10px"}}),t._v(" "),e("div",{class:t.getBG(parseInt(i)),staticStyle:{height:"10px"}}),t._v(" "),e("div",{class:t.getBG(i),staticStyle:{height:"90px"}},[e("b-avatar",{staticClass:"ml-2",attrs:{src:t.s3+s+"/avatar.jpg",size:"4rem"}}),t._v(" "+t._s(t.getUser(s))+"\n             ")],1)])}),0),t._v(" "),t.array1.length>1?e("b-col",[e("div",{staticStyle:{height:"240px"},on:{click:function(s){return t.winner(t.round4[1])}}},[e("b-avatar",{staticClass:"ml-2",attrs:{src:t.s3+t.round4[1]+"/avatar.jpg",size:"5rem"}}),t._v(" "+t._s(t.getUser(t.round4[1]))+"\n          ")],1),t._v(" "),e("div",{staticStyle:{height:"240px"},on:{click:function(s){return t.winner(t.round4[2])}}},[e("b-avatar",{staticClass:"ml-2",attrs:{src:t.s3+t.round4[2]+"/avatar.jpg",size:"5rem"}}),t._v(" "+t._s(t.getUser(t.round4[2]))+"\n          ")],1)]):t._e()],1)],1),t._v(" "),e("table",{staticClass:"table table-striped"},[t._m(0),t._v(" "),e("tbody",[t._l(t.classRecords,function(s,i){return[e("tr",{key:i},[e("td",{staticStyle:{width:"150px"}},[t.array1.length>1?e("div",[t.r1values.includes(i)?e("b-icon-check-circle-fill",{attrs:{scale:"1.5",variant:"grape"},on:{click:function(s){return t.levelOne(i,0)}}}):e("b-icon-check-circle",{attrs:{scale:"1.5"},on:{click:function(s){return t.levelOne(i,1)}}}),t._v(" "+t._s(i)+"\n                          ")],1):t._e()]),t._v(" "),e("td",{staticStyle:{width:"150px"}},[t._v(t._s(s.studentID))]),t._v(" "),e("td",{staticStyle:{width:"150px"}},[t._v(t._s(s.user))])])]})],2)])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[this._v("Add")]),this._v(" "),s("th",{attrs:{scope:"col"}},[this._v("ID")]),this._v(" "),s("th",{attrs:{scope:"col"}},[this._v("Student")])])])}]};var l=e("VU/8")(n,c,!1,function(t){e("Gm9S")},"data-v-4167af96",null);s.default=l.exports}});
//# sourceMappingURL=2.3c6175b8643b6b32c1e1.js.map