webpackJsonp([10],{"as+C":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("fZjL"),n=e.n(i),o=e("Dd8w"),r=e.n(o),c=e("xEZN"),a={name:"InstSent",props:{s3:String,group:String},components:{InstPicts:c.default},data:function(){return{show:"students",notes:{},scoreShow:{},pictShow:{},pictShowOne:null,quizFields:[{key:"user",label:"User",sortable:!0},{key:"studentID",label:"ID",sortable:!0},{key:"dictRecord",label:"Record",sortable:!0}]}},methods:{showPicts:function(t){this.pictShow[t]&&0!==this.pictShow[t]?this.pictShow[t]=0:this.pictShow[t]=1,this.pictShow=r()({},this.pictShow),console.log(t,this.pictShow)},showPictsOne:function(t){this.pictShowOne?this.pictShowOne=null:this.pictShowOne=t},getLength:function(t){return delete t.add,n()(t).length},saveRecords:function(){this.$store.state.instructor.studentNotes!=={}&&this.$store.dispatch("instructorLogs",{group:this.$store.state.instructor.classLoad,action:"setNotes",notes:this.$store.state.instructor.studentNotes})}},computed:{classRecords:function(){return this.$store.getters.classRecords},classGroups:function(){return this.$store.getters.classGroups},getQuizArray:function(){var t=[];for(var s in this.classRecords)for(var e in this.classRecords[s].setRecord.dictRecord){var i=r()({},this.classRecords[s].setRecord.dictRecord[e]);i.user=this.classRecords[s].user,i.studentID=this.classRecords[s].studentID,this.notes[s][e]&&(i.status=this.notes[s][e].status),t.push(i)}return console.log("quizArray",t),t}},created:function(){this.$store.dispatch("instructorLogs",{group:this.group,action:"getNotesInstructor"}),this.notes=r()({},this.$store.state.instructor.studentNotes)},beforeDestroy:function(){}},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"instSent"}},[e("div",{staticClass:"bg-white mt-0 p-0"},[e("div",{staticClass:"bg-grey p-2"},[e("b-row",[e("b-col",{attrs:{align:"right"}},[e("button",{staticClass:"buttonDiv bg-safe-light text-prime px-3",staticStyle:{width:"auto",height:"auto"},on:{click:function(s){t.show="students"}}},[t._v("\n                  Show Student\n          ")]),t._v(" "),e("button",{staticClass:"buttonDiv bg-safe-light text-prime px-3",staticStyle:{width:"auto",height:"auto"},on:{click:function(s){t.show="quiz"}}},[t._v("\n                  Show Quiz List\n          ")]),t._v(" "),e("button",{staticClass:"buttonDiv bg-safe-light text-prime px-3",staticStyle:{width:"auto",height:"auto"},on:{click:function(s){return t.saveRecords()}}},[t._v("\n                  Save Picture Notes\n          ")])])],1)],1),t._v(" "),"students"===t.show?e("table",{staticClass:"table table-striped"},[t._m(0),t._v(" "),e("tbody",[t._l(t.classRecords,function(s,i){return[e("tr",{key:i},[e("td",{staticStyle:{width:"150px"}},[t._v(t._s(s.studentID))]),t._v(" "),e("td",{staticStyle:{width:"150px"}},[t._v(t._s(s.user))]),t._v(" "),e("td",[e("div",{staticStyle:{width:"70px",display:"inline-block"}},[e("b-icon-images",{attrs:{variant:"safe","font-scale":"1.5"}}),t._v(" "+t._s(t.getLength(s.setRecord.dictRecord))+"\n                          ")],1),t._v(" "),e("div",{staticStyle:{display:"inline-block"}},[e("b-form-select",{staticStyle:{width:"100px","overflow-y":"hidden",display:"inline"}},t._l(s.setRecord.dictRecord,function(s,i){return e("option",{key:i},[t._v(" "+t._s(i)+" ")])}),0)],1)]),t._v(" "),e("td",{attrs:{align:"left"}},[e("button",{staticClass:"buttonDiv bg-safe text-cream px-3",staticStyle:{width:"auto",height:"auto"},on:{click:function(s){return t.showPictsOne(i)}}},[t._v("\n                                OPEN\n                          ")])])]),t._v(" "),e("transition",{key:i,attrs:{name:"tableboard"}},[i.toString()===t.pictShowOne?e("tr",[e("td",{attrs:{colspan:"6"}},[e("InstPicts",{attrs:{student:i,itemMaster:s}})],1)]):t._e()])]})],2)]):t._e(),t._v(" "),"quiz"===t.show?e("b-table",{attrs:{striped:"",hover:"",items:t.getQuizArray,fields:t.quizFields,"head-variant":"dark"},scopedSlots:t._u([{key:"cell(link)",fn:function(s){return[e("h5",[t._v(" "+t._s(s.item.word)+" ")]),t._v(" "),e("h5",[t._v(" "+t._s(s.item.chinese)+" ")]),t._v(" "),e("b-img",{staticStyle:{"max-width":"100px"},attrs:{thumbnail:"",fluid:"",src:t.getImage(s.item.word,s.item.link,t.student,s.item.vocab)}})]}},{key:"cell(def)",fn:function(s){return[e("span",{staticStyle:{color:"green"}},[t._v(" "+t._s(s.value)+" ")]),t._v(" "),e("hr"),t._v("\n        "+t._s(s.item.text)+"\n\n      "),null!==s.item.status&&0!==s.item.status?e("div",[e("hr"),t._v(" "),e("b-form-input",{attrs:{placeholder:"Add Note"},model:{value:s.item.note,callback:function(e){t.$set(s.item,"note",e)},expression:"data.item.note"}})],1):t._e()]}}],null,!1,554665906)}):t._e()],1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[this._v("ID")]),this._v(" "),s("th",{attrs:{scope:"col"}},[this._v("Student")]),this._v(" "),s("th",{attrs:{scope:"col"}},[this._v("Pics")])])])}]};var u=e("VU/8")(a,l,!1,function(t){e("nmWg")},"data-v-790a7a5e",null);s.default=u.exports},nmWg:function(t,s){}});
//# sourceMappingURL=10.29895b3d89e4686be5db.js.map