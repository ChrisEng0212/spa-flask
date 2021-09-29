webpackJsonp([15],{KYPk:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s("fZjL"),o=s.n(r),a=s("Dd8w"),n=s.n(a),i={name:"InstClass",props:{s3:String},components:{},data:function(){return{counterKeys:{transEng:"English Test",transCh:"Chinese Test",typeTest:"Type Test",matchTrans:"Match",matchType:"Type Match"},scoreShow:{},vCounts:{}}},methods:{getVariant:function(t){return{strong:"spanDiv bg-safe-light text-prime",good:"spanDiv bg-third text-prime",okay:"spanDiv bg-grey text-prime",weak:"spanDiv bg-warn-light text-prime",problem:"spanDiv bg-alert-light text-prime","not tested":"spanDiv bg-cream text-prime"}[t]},showScores:function(t){this.scoreShow[t]&&0!==this.scoreShow[t]?this.scoreShow[t]=0:this.scoreShow[t]=1,this.scoreShow=n()({},this.scoreShow),console.log(t,this.scoreShow)},valueSum:function(t){var e=0;for(var s in t)e+=t[s];return e},getLength:function(t){return delete t.add,o()(t).length},getDates:function(t){var e={};for(var s in t){var r=s.substring(4,7);e[r]||"ce"===r?"ce"!==r&&(e[r]+=1):e[r]=1}return e},userRecItems:function(t){var e={transEng:{strong:0,good:0,okay:0,weak:0,problem:0},transCh:{strong:0,good:0,okay:0,weak:0,problem:0},typeTest:{strong:0,good:0,okay:0,weak:0,problem:0},matchTrans:{strong:0,good:0,okay:0,weak:0,problem:0},matchType:{strong:0,good:0,okay:0,weak:0,problem:0}};for(var s in t)for(var r in t[s]){var o=t[s][r];o>=2?e[s].strong+=1:1===o?e[s].good+=1:0===o?e[s].okay+=1:-1===o?e[s].weak+=1:o<=-2&&(e[s].problem+=1)}return e},vocabCount:function(t,e){var s={};for(var r in t)for(var a in t[r])s[a]=1;var n=o()(s).length;return console.log(this.vCounts,e,n),this.vCounts[e]=n,console.log(this.vCounts),n},getVcountStyle:function(t){if(0===this.vCounts[t])return"bg-warn"}},computed:{classRecords:function(){return this.$store.getters.classRecords},classGroups:function(){return this.$store.getters.classGroups}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"instClass"}},[s("div",{staticClass:"bg-white mt-0 p-0"},[s("table",{staticClass:"table table-striped"},[t._m(0),t._v(" "),s("tbody",[t._l(t.classRecords,function(e,r){return[s("tr",{key:r},[s("td",{staticStyle:{width:"150px"}},[t._v(t._s(e.studentID))]),t._v(" "),s("td",{staticStyle:{width:"150px"}},[t._v(t._s(e.user))]),t._v(" "),s("td",[s("div",{staticStyle:{width:"70px",display:"inline-block"}},[s("b-icon-star-fill",{attrs:{variant:"warning","font-scale":"1.5"}}),t._v(" "+t._s(t.getLength(e.setRecord.starRecord))+"\n                          ")],1),t._v(" "),s("div",{staticStyle:{display:"inline-block"}},[s("b-form-select",{staticStyle:{width:"100px","overflow-y":"hidden"}},t._l(e.setRecord.starRecord,function(e,r){return s("option",{key:r},[t._v(" "+t._s(r)+" ")])}),0)],1)]),t._v(" "),s("td",[s("div",{staticStyle:{width:"70px",display:"inline-block"}},[s("b-icon-images",{attrs:{variant:"safe","font-scale":"1.5"}}),t._v(" "+t._s(t.getLength(e.setRecord.dictRecord))+"\n                          ")],1),t._v(" "),s("div",{staticStyle:{display:"inline-block"}},[s("b-form-select",{staticStyle:{width:"100px","overflow-y":"hidden",display:"inline"}},t._l(e.setRecord.dictRecord,function(e,r){return s("option",{key:r},[t._v(" "+t._s(r)+" ")])}),0)],1)]),t._v(" "),s("td",[s("div",{staticStyle:{width:"70px",display:"inline-block"}},[s("b-icon-arrow-up-circle-fill",{attrs:{variant:"info","font-scale":"1.5"}}),t._v(" "+t._s(t.getLength(e.setRecord.addRecord))+"\n                          ")],1),t._v(" "),s("div",{staticStyle:{display:"inline-block"}},[s("b-form-select",{staticStyle:{width:"100px","overflow-y":"hidden"}},t._l(e.setRecord.addRecord,function(e,r){return s("option",{key:r},[t._v(" "+t._s(r)+" ")])}),0)],1)]),t._v(" "),s("td",[s("b-icon",{attrs:{icon:"bar-chart-fill",variant:"alert","font-scale":"1.5"},on:{click:function(e){return t.showScores(r)}}}),t._v(" "+t._s(t.vocabCount(e.userRecord,e.user))+"\n                        ")],1)]),t._v(" "),s("transition",{key:r,attrs:{name:"tableboard"}},[r.toString()in t.scoreShow&&1===t.scoreShow[r.toString()]?s("tr",[s("td",{attrs:{colspan:"6"}},t._l(t.userRecItems(e.userRecord),function(e,r){return s("b-row",{key:r},[s("b-col",{attrs:{cols:"2",align:"right"}},[t._v("\n                                  "+t._s(t.counterKeys[r])+"\n                                ")]),t._v(" "),s("b-col",[t.valueSum(e)>0?s("div",[s("b-progress",{staticStyle:{height:"20px"},attrs:{"show-value":""}},[s("b-progress-bar",{attrs:{value:e.problem,variant:t.getVariant("problem")}}),t._v(" "),s("b-progress-bar",{attrs:{value:e.weak,variant:t.getVariant("weak")}}),t._v(" "),s("b-progress-bar",{attrs:{value:e.okay,variant:t.getVariant("okay")}}),t._v(" "),s("b-progress-bar",{attrs:{value:e.good,variant:t.getVariant("good")}}),t._v(" "),s("b-progress-bar",{attrs:{value:e.strong,variant:t.getVariant("strong")}})],1)],1):t._e()])],1)}),1)]):t._e()])]})],2)]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"mt-2 bg-prime p-2 head"},[s("div",{staticClass:"ml-2"},[s("b-row",[s("b-col",[s("h3",{staticClass:"text-cream"},[t._v(" Class Details ")])])],1)],1)]),t._v(" "),s("table",{staticClass:"table table-striped"},[t._m(1),t._v(" "),s("tbody",[t._l(t.classRecords,function(e,r){return[s("tr",{key:r},[s("td",{staticStyle:{width:"150px"}},[t._v(t._s(e.userID))]),t._v(" "),s("td",{staticStyle:{width:"150px"}},[t._v(t._s(e.studentID))]),t._v(" "),s("td",{staticStyle:{width:"150px"}},[t._v(t._s(e.user))]),t._v(" "),s("td",{staticStyle:{width:"150px"}},[t._v(t._s(e.date))]),t._v(" "),s("td",{staticStyle:{width:"150px"}},[t._v(t._s(e.email))]),t._v(" "),s("td",{class:t.getVcountStyle(e.user)},[t._v("\n                          "+t._s(t.vocabCount(e.userRecord,e.user))+"\n                        ")])])]})],2)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("ID")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Student")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Favs")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Pics")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Adds")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Stats")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("user ID")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("student ID")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Name")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Email")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Score")])])])}]};var l=s("VU/8")(i,c,!1,function(t){s("bwYw")},"data-v-45f21e75",null);e.default=l.exports},bwYw:function(t,e){}});
//# sourceMappingURL=15.685436e745c7d190b204.js.map