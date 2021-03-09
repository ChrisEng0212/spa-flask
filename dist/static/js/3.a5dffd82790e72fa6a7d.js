webpackJsonp([3,8],{"1Q+e":function(t,e){},EelE:function(t,e){},N7IE:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("fZjL"),r=s.n(o),a=s("Dd8w"),i=s.n(a),n=s("xEZN"),c={name:"Instructor",props:{s3:String},components:{InstPicts:n.default},data:function(){return{master:this.classRecords,counterKeys:{transEng:"English Test",transCh:"Chinese Test",typeTest:"Type Test",matchTrans:"Match",matchType:"Type Match"},scoreShow:{},pictShow:{},pictShowOne:null,waiting:!1}},methods:{getClass:function(t){this.waiting=!0,this.$store.dispatch("instructorLogs",{group:t,action:"getNotesInstructor"}),this.$store.dispatch("classRecords",{userID:this.$store.state.userProfile.userID,classroom:t})},getVariant:function(t){return{strong:"spanDiv bg-safe-light text-prime",good:"spanDiv bg-third text-prime",okay:"spanDiv bg-grey text-prime",weak:"spanDiv bg-warn-light text-prime",problem:"spanDiv bg-alert-light text-prime","not tested":"spanDiv bg-cream text-prime"}[t]},showScores:function(t){this.scoreShow[t]&&0!==this.scoreShow[t]?this.scoreShow[t]=0:this.scoreShow[t]=1,this.scoreShow=i()({},this.scoreShow),console.log(t,this.scoreShow)},showPicts:function(t){this.pictShow[t]&&0!==this.pictShow[t]?this.pictShow[t]=0:this.pictShow[t]=1,this.pictShow=i()({},this.pictShow),console.log(t,this.pictShow)},showPictsOne:function(t){this.pictShowOne=t},valueSum:function(t){var e=0;for(var s in t)e+=t[s];return e},getLength:function(t){return delete t.add,r()(t).length},getDates:function(t){var e={};for(var s in t){var o=s.substring(4,7);e[o]||"ce"===o?"ce"!==o&&(e[o]+=1):e[o]=1}return e},userRecItems:function(t){var e={transEng:{strong:0,good:0,okay:0,weak:0,problem:0},transCh:{strong:0,good:0,okay:0,weak:0,problem:0},typeTest:{strong:0,good:0,okay:0,weak:0,problem:0},matchTrans:{strong:0,good:0,okay:0,weak:0,problem:0},matchType:{strong:0,good:0,okay:0,weak:0,problem:0}};for(var s in t)for(var o in t[s]){var r=t[s][o];r>=2?e[s].strong+=1:1===r?e[s].good+=1:0===r?e[s].okay+=1:-1===r?e[s].weak+=1:r<=-2&&(e[s].problem+=1)}return e},vocabCount:function(t,e){var s={};for(var o in t)for(var a in t[o])s[a]=1;return r()(s).length},saveRecords:function(){this.$store.state.studentNotes!=={}&&this.$store.dispatch("instructorLogs",{group:this.$store.state.classLoad,action:"setNotes",notes:this.$store.state.studentNotes})}},created:function(){this.$store.dispatch("classGroups",{userID:this.$store.state.userProfile.userID})},computed:{classRecords:function(){return this.$store.getters.classRecords},classGroups:function(){return this.$store.getters.classGroups}},watch:{},beforeDestroy:function(){this.saveRecords()}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"instructor"}},[s("div",{staticClass:"mt-2 bg-second p-2 head"},[s("div",{staticClass:"ml-2"},[s("b-row",[s("b-col",[s("h3",{staticClass:"text-cream"},[t._v(" Instructor Dashboard ")])])],1)],1)]),t._v(" "),s("div",{staticClass:"bg-white"},[s("table",{staticClass:"table table-striped"},[t._m(0),t._v(" "),s("tbody",t._l(t.classGroups,function(e,o){return s("tr",{key:o},[s("th",{attrs:{scope:"row"}},[t._v(t._s(o))]),t._v(" "),s("td",[t._v(t._s(e.code))]),t._v(" "),s("td",[t._v(" "+t._s(e.count))]),t._v(" "),s("td",[s("button",{staticClass:"buttonDiv bg-info px-3",staticStyle:{width:"auto",height:"auto"},on:{click:function(s){return t.getClass(e.code)}}},[s("b-icon-arrow-clockwise",{attrs:{variant:"cream","font-scale":"1.5"}})],1)])])}),0)])]),t._v(" "),s("div",{staticClass:"mt-2 bg-second p-2 head"},[s("div",{staticClass:"ml-2"},[s("b-row",[s("b-col",[s("h3",{staticClass:"text-cream"},[t._v(" Class: "+t._s(t.$store.state.classLoad)+" ")])]),t._v(" "),s("b-col",{attrs:{align:"right"}},[s("button",{staticClass:"buttonDiv bg-alert text-cream px-3",staticStyle:{width:"auto",height:"auto"},on:{click:function(e){return t.saveRecords()}}},[t._v("\n                      SAVE NOTES\n          ")])])],1)],1)]),t._v(" "),t.classRecords?s("div",{staticClass:"bg-white mt-0 p-0"},[s("table",{staticClass:"table table-striped"},[t._m(1),t._v(" "),s("tbody",[t._l(t.classRecords,function(e,o){return[s("tr",{key:o},[s("td",{staticStyle:{width:"150px"}},[t._v(t._s(o)+"# "+t._s(e.user))]),t._v(" "),s("td",[s("b-form-select",{staticStyle:{width:"50px","overflow-y":"hidden"}},t._l(t.getDates(e.logsRecord.logs),function(e,o){return s("option",{key:e[0]},[t._v(" "+t._s(o)+": "+t._s(e)+"  ")])}),0)],1),s("td",[s("div",{staticStyle:{width:"70px",display:"inline-block"}},[s("b-icon-star-fill",{attrs:{variant:"warning","font-scale":"1.5"}}),t._v(" "+t._s(t.getLength(e.setRecord.starRecord))+"\n                          ")],1),t._v(" "),s("div",{staticStyle:{display:"inline-block"}},[s("b-form-select",{staticStyle:{width:"100px","overflow-y":"hidden"}},t._l(e.setRecord.starRecord,function(e,o){return s("option",{key:o},[t._v(" "+t._s(o)+" ")])}),0)],1)]),t._v(" "),s("td",[s("div",{staticStyle:{width:"70px",display:"inline-block"}},[s("b-icon-images",{attrs:{variant:"safe","font-scale":"1.5"},on:{click:function(e){return t.showPictsOne(o)}}}),t._v(" "+t._s(t.getLength(e.setRecord.dictRecord))+"\n                          ")],1),t._v(" "),s("div",{staticStyle:{display:"inline-block"}},[s("b-form-select",{staticStyle:{width:"100px","overflow-y":"hidden",display:"inline"}},t._l(e.setRecord.dictRecord,function(e,o){return s("option",{key:o},[t._v(" "+t._s(o)+" ")])}),0)],1)]),t._v(" "),s("td",[s("div",{staticStyle:{width:"70px",display:"inline-block"}},[s("b-icon-arrow-up-circle-fill",{attrs:{variant:"info","font-scale":"1.5"}}),t._v(" "+t._s(t.getLength(e.setRecord.addRecord))+"\n                          ")],1),t._v(" "),s("div",{staticStyle:{display:"inline-block"}},[s("b-form-select",{staticStyle:{width:"100px","overflow-y":"hidden"}},t._l(e.setRecord.addRecord,function(e,o){return s("option",{key:o},[t._v(" "+t._s(o)+" ")])}),0)],1)]),t._v(" "),s("td",[s("b-icon",{attrs:{icon:"bar-chart-fill",variant:"alert","font-scale":"1.5"},on:{click:function(e){return t.showScores(o)}}}),t._v(" "+t._s(t.vocabCount(e.userRecord,e.user))+"\n                        ")],1)]),t._v(" "),s("transition",{key:o,attrs:{name:"tableboard"}},[o.toString()in t.scoreShow&&1===t.scoreShow[o.toString()]?s("tr",[s("td",{attrs:{colspan:"6"}},t._l(t.userRecItems(e.userRecord),function(e,o){return s("b-row",{key:o},[s("b-col",{attrs:{cols:"2",align:"right"}},[t._v("\n                                  "+t._s(t.counterKeys[o])+"\n                                ")]),t._v(" "),s("b-col",[t.valueSum(e)>0?s("div",[s("b-progress",{staticStyle:{height:"20px"},attrs:{"show-value":""}},[s("b-progress-bar",{attrs:{value:e.problem,variant:t.getVariant("problem")}}),t._v(" "),s("b-progress-bar",{attrs:{value:e.weak,variant:t.getVariant("weak")}}),t._v(" "),s("b-progress-bar",{attrs:{value:e.okay,variant:t.getVariant("okay")}}),t._v(" "),s("b-progress-bar",{attrs:{value:e.good,variant:t.getVariant("good")}}),t._v(" "),s("b-progress-bar",{attrs:{value:e.strong,variant:t.getVariant("strong")}})],1)],1):t._e()])],1)}),1)]):t._e()]),t._v(" "),s("transition",{key:o,attrs:{name:"tableboard"}},[o.toString()===t.pictShowOne?s("tr",[s("td",{attrs:{colspan:"6"}},[s("InstPicts",{attrs:{s3:t.s3,student:o,itemMaster:e}})],1)]):t._e()])]})],2)])]):t.waiting?s("div",{staticClass:"bg-smoke",attrs:{align:"center"}},[s("br"),t._v(" "),s("br"),t._v(" "),s("h4",{staticClass:"text-prime"},[t._v(" Loading Data ")]),t._v(" "),s("b-icon",{attrs:{icon:"three-dots",animation:"cylon",variant:"prime","font-scale":"6"}}),t._v(" "),s("br"),t._v(" "),s("br")],1):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[this._v("#")]),this._v(" "),e("th",{attrs:{scope:"col"}},[this._v("Class")]),this._v(" "),e("th",{attrs:{scope:"col"}},[this._v("Students")]),this._v(" "),e("th",{attrs:{scope:"col"}},[this._v("Load")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("Student")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Logs")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Favs")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Pics")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Adds")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Stats")])])])}]};var d=s("VU/8")(c,l,!1,function(t){s("EelE")},"data-v-5fb16883",null);e.default=d.exports},xEZN:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("Dd8w"),r=s.n(o),a={name:"IntPict",props:{s3:String,itemMaster:Object,student:String},data:function(){return{msg:null,item:{},save:!0,classRecords:{},notes:{},pields:[{key:"link",label:"Picture",sortable:!0},{key:"def",label:"Info",sortable:!0},{key:"status",label:"Record",sortable:!0}],optionsR:[{value:null,text:"-"},{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],color:{null:"smoke",1:"safe",2:"alert",3:"warn",4:"p1",5:"p2"},noteCodes:{null:null,1:"Good",2:"Grammar",3:"Punctuation",4:"Detail",5:"Spelling"}}},methods:{showModal:function(){this.$refs.success.show()},showDelete:function(){this.$refs.delete.show()},hideModal:function(t){},getImage:function(t,e,s,o){return"add"===e?"https://vocab-lms.s3-ap-northeast-1.amazonaws.com/public/add.jpg":"https://vocab-lms.s3-ap-northeast-1.amazonaws.com/public/profiles/"+s+"/"+o+"/"+t+e+".jpg"},saveData:function(){this.save&&this.$store.dispatch("updateNotes",{notes:this.notes})},getPictArray:function(t){var e=[];for(var s in t)e.push(t[s]);return console.log("pictList",e),e},getColor:function(t){var e=0;if(t.word){var s=t.word;e=this.item.setRecord.dictRecord[s].status}return this.color[e]},radioAction:function(t){var e=t.word,s=this;console.log("dItem",t),setTimeout(function(){s.item=r()({},s.item),s.notes[s.student][e]=t},100)}},created:function(){for(var t in this.classRecords=r()({},this.$store.getters.classRecords),this.notes=r()({},this.$store.state.studentNotes),this.item=r()({},this.itemMaster),console.log("NOTES",this.notes),console.log(this.item),this.notes[this.student])this.item.setRecord.dictRecord[t].status=this.notes[this.student][t].status,this.item.setRecord.dictRecord[t].note=this.notes[this.student][t].note},beforeDestroy:function(){this.saveData()}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Intpict"},[s("b-table",{attrs:{striped:"",hover:"",items:t.getPictArray(t.item.setRecord.dictRecord),fields:t.pields,"head-variant":"dark"},scopedSlots:t._u([{key:"cell(link)",fn:function(e){return[s("h5",[t._v(" "+t._s(e.item.word)+" ")]),t._v(" "),s("h5",[t._v(" "+t._s(e.item.chinese)+" ")]),t._v(" "),s("b-img",{staticStyle:{"max-width":"100px"},attrs:{thumbnail:"",fluid:"",src:t.getImage(e.item.word,e.item.link,t.student,e.item.vocab)}})]}},{key:"cell(def)",fn:function(e){return[s("span",{staticStyle:{color:"green"}},[t._v(" "+t._s(e.value)+" ")]),t._v(" "),s("hr"),t._v("\n        "+t._s(e.item.text)+"\n\n      "),null!==e.item.status&&0!==e.item.status?s("div",[s("hr"),t._v(" "),s("b-form-input",{attrs:{placeholder:"Add Note"},model:{value:e.item.note,callback:function(s){t.$set(e.item,"note",s)},expression:"data.item.note"}})],1):t._e()]}},{key:"cell(status)",fn:function(e){return[s("b-form-radio-group",{attrs:{id:"btn-radios-2",options:t.optionsR,buttons:"","button-variant":t.getColor(e.item),size:"sm",name:"radio-btn-outline"},on:{change:function(s){return t.radioAction(e.item)}},model:{value:e.item.status,callback:function(s){t.$set(e.item,"status",s)},expression:"data.item.status"}}),t._v(" "),s("br"),t._v("\n\n          "+t._s(t.noteCodes[e.item.status])+"\n      ")]}}])}),t._v(" "),s("b-modal",{ref:"success",attrs:{"hide-header-close":"","no-close-on-esc":"","no-close-on-backdrop":"",align:"center","hide-footer":"",title:"Image Adder"}},[s("div",{staticClass:"d-block"},[s("h3",[t._v(" "+t._s(t.msg)+" ")])]),t._v(" "),s("button",{staticClass:"buttonDiv mt-3 bg-warn text-cream",staticStyle:{width:"60%"},on:{click:function(e){return t.hideModal("success")}}},[t._v("Close")])]),t._v(" "),s("b-modal",{ref:"delete",attrs:{"hide-header-close":"","no-close-on-esc":"","no-close-on-backdrop":"",align:"center","hide-footer":"",title:"Delete Picture"}},[s("div",{staticClass:"d-block"},[s("h3",[t._v(" "+t._s(t.msg)+" ")])]),t._v(" "),s("button",{staticClass:"buttonDiv mt-3 bg-grey text-cream",staticStyle:{width:"60%"},on:{click:function(e){return t.hideModal("cancel")}}},[t._v("Cancel")]),t._v(" "),s("button",{staticClass:"buttonDiv mt-3 bg-alert text-cream",staticStyle:{width:"60%"},on:{click:function(e){return t.hideModal("delete")}}},[t._v("Delete")])])],1)},staticRenderFns:[]};var n=s("VU/8")(a,i,!1,function(t){s("1Q+e")},"data-v-5df713e7",null);e.default=n.exports}});
//# sourceMappingURL=3.a5dffd82790e72fa6a7d.js.map