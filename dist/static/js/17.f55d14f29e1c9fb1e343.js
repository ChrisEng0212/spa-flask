webpackJsonp([17],{HGT9:function(t,e){},KYPk:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r("fZjL"),o=r.n(s),a=r("Dd8w"),n=r.n(a),i={name:"InstClass",props:{s3:String},components:{},data:function(){return{counterKeys:{transEng:"English Test",transCh:"Chinese Test",typeTest:"Type Test",matchTrans:"Match",matchType:"Type Match"},scoreShow:{}}},methods:{getVariant:function(t){return{strong:"spanDiv bg-safe-light text-prime",good:"spanDiv bg-third text-prime",okay:"spanDiv bg-grey text-prime",weak:"spanDiv bg-warn-light text-prime",problem:"spanDiv bg-alert-light text-prime","not tested":"spanDiv bg-cream text-prime"}[t]},showScores:function(t){this.scoreShow[t]&&0!==this.scoreShow[t]?this.scoreShow[t]=0:this.scoreShow[t]=1,this.scoreShow=n()({},this.scoreShow),console.log(t,this.scoreShow)},valueSum:function(t){var e=0;for(var r in t)e+=t[r];return e},getLength:function(t){return delete t.add,o()(t).length},getDates:function(t){var e={};for(var r in t){var s=r.substring(4,7);e[s]||"ce"===s?"ce"!==s&&(e[s]+=1):e[s]=1}return e},userRecItems:function(t){var e={transEng:{strong:0,good:0,okay:0,weak:0,problem:0},transCh:{strong:0,good:0,okay:0,weak:0,problem:0},typeTest:{strong:0,good:0,okay:0,weak:0,problem:0},matchTrans:{strong:0,good:0,okay:0,weak:0,problem:0},matchType:{strong:0,good:0,okay:0,weak:0,problem:0}};for(var r in t)for(var s in t[r]){var o=t[r][s];o>=2?e[r].strong+=1:1===o?e[r].good+=1:0===o?e[r].okay+=1:-1===o?e[r].weak+=1:o<=-2&&(e[r].problem+=1)}return e},vocabCount:function(t,e){var r={};for(var s in t)for(var a in t[s])r[a]=1;return o()(r).length}},computed:{classRecords:function(){return this.$store.getters.classRecords},classGroups:function(){return this.$store.getters.classGroups}}},c={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"instClass"}},[r("div",{staticClass:"bg-white mt-0 p-0"},[r("table",{staticClass:"table table-striped"},[t._m(0),t._v(" "),r("tbody",[t._l(t.classRecords,function(e,s){return[r("tr",{key:s},[r("td",{staticStyle:{width:"150px"}},[t._v(t._s(e.studentID))]),t._v(" "),r("td",{staticStyle:{width:"150px"}},[t._v(t._s(e.user))]),t._v(" "),r("td",[r("div",{staticStyle:{width:"70px",display:"inline-block"}},[r("b-icon-star-fill",{attrs:{variant:"warning","font-scale":"1.5"}}),t._v(" "+t._s(t.getLength(e.setRecord.starRecord))+"\n                          ")],1),t._v(" "),r("div",{staticStyle:{display:"inline-block"}},[r("b-form-select",{staticStyle:{width:"100px","overflow-y":"hidden"}},t._l(e.setRecord.starRecord,function(e,s){return r("option",{key:s},[t._v(" "+t._s(s)+" ")])}),0)],1)]),t._v(" "),r("td",[r("div",{staticStyle:{width:"70px",display:"inline-block"}},[r("b-icon-images",{attrs:{variant:"safe","font-scale":"1.5"}}),t._v(" "+t._s(t.getLength(e.setRecord.dictRecord))+"\n                          ")],1),t._v(" "),r("div",{staticStyle:{display:"inline-block"}},[r("b-form-select",{staticStyle:{width:"100px","overflow-y":"hidden",display:"inline"}},t._l(e.setRecord.dictRecord,function(e,s){return r("option",{key:s},[t._v(" "+t._s(s)+" ")])}),0)],1)]),t._v(" "),r("td",[r("div",{staticStyle:{width:"70px",display:"inline-block"}},[r("b-icon-arrow-up-circle-fill",{attrs:{variant:"info","font-scale":"1.5"}}),t._v(" "+t._s(t.getLength(e.setRecord.addRecord))+"\n                          ")],1),t._v(" "),r("div",{staticStyle:{display:"inline-block"}},[r("b-form-select",{staticStyle:{width:"100px","overflow-y":"hidden"}},t._l(e.setRecord.addRecord,function(e,s){return r("option",{key:s},[t._v(" "+t._s(s)+" ")])}),0)],1)]),t._v(" "),r("td",[r("b-icon",{attrs:{icon:"bar-chart-fill",variant:"alert","font-scale":"1.5"},on:{click:function(e){return t.showScores(s)}}}),t._v(" "+t._s(t.vocabCount(e.userRecord,e.user))+"\n                        ")],1)]),t._v(" "),r("transition",{key:s,attrs:{name:"tableboard"}},[s.toString()in t.scoreShow&&1===t.scoreShow[s.toString()]?r("tr",[r("td",{attrs:{colspan:"6"}},t._l(t.userRecItems(e.userRecord),function(e,s){return r("b-row",{key:s},[r("b-col",{attrs:{cols:"2",align:"right"}},[t._v("\n                                  "+t._s(t.counterKeys[s])+"\n                                ")]),t._v(" "),r("b-col",[t.valueSum(e)>0?r("div",[r("b-progress",{staticStyle:{height:"20px"},attrs:{"show-value":""}},[r("b-progress-bar",{attrs:{value:e.problem,variant:t.getVariant("problem")}}),t._v(" "),r("b-progress-bar",{attrs:{value:e.weak,variant:t.getVariant("weak")}}),t._v(" "),r("b-progress-bar",{attrs:{value:e.okay,variant:t.getVariant("okay")}}),t._v(" "),r("b-progress-bar",{attrs:{value:e.good,variant:t.getVariant("good")}}),t._v(" "),r("b-progress-bar",{attrs:{value:e.strong,variant:t.getVariant("strong")}})],1)],1):t._e()])],1)}),1)]):t._e()])]})],2)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[t._v("ID")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("Student")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("Favs")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("Pics")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("Adds")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("Stats")])])])}]};var l=r("VU/8")(i,c,!1,function(t){r("HGT9")},"data-v-0a535968",null);e.default=l.exports}});
//# sourceMappingURL=17.f55d14f29e1c9fb1e343.js.map