webpackJsonp([10],{"8i2c":function(t,e){},N7IE:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r("fZjL"),o=r.n(s),a=r("Dd8w"),n=r.n(a),i={data:function(){return{master:this.classRecords,scores:{}}},methods:{getClass:function(){this.$store.dispatch("classRecords",{userID:this.$store.state.userProfile.userID,classroom:this.$store.state.userProfile.classroom})},getVariant:function(t){return{strong:"spanDiv bg-safe-light text-prime",good:"spanDiv bg-third text-prime",okay:"spanDiv bg-grey text-prime",weak:"spanDiv bg-warn-light text-prime",problem:"spanDiv bg-alert-light text-prime","not tested":"spanDiv bg-cream text-prime"}[t]},showScores:function(t){this.scores[t]&&0!==this.scores[t]?this.scores[t]=0:this.scores[t]=1,this.scores=n()({},this.scores),console.log(t,this.scores)},valueSum:function(t){var e=0;for(var r in t)e+=t[r];return e},getLength:function(t){return o()(t).length},getDates:function(t){var e={};for(var r in t){var s=r.substring(4,7);e[s]||"ce"===s?"ce"!==s&&(e[s]+=1):e[s]=1}return e},userRecItems:function(t){var e={transEng:{strong:0,good:0,okay:0,weak:0,problem:0},transCh:{strong:0,good:0,okay:0,weak:0,problem:0},typeTest:{strong:0,good:0,okay:0,weak:0,problem:0},matchTrans:{strong:0,good:0,okay:0,weak:0,problem:0},matchType:{strong:0,good:0,okay:0,weak:0,problem:0}};for(var r in t)for(var s in t[r]){var o=t[r][s];o>=2?e[r].strong+=1:1===o?e[r].good+=1:0===o?e[r].okay+=1:-1===o?e[r].weak+=1:o<=-2&&(e[r].problem+=1)}return e},vocabCount:function(t,e){var r={},s=0;for(var a in t)for(var n in console.log(t[a]),t[a]){r[n]=1,s+=t[a][n]}return[o()(r).length,s]}},created:function(){},computed:{classRecords:function(){return console.log("computed"),this.$store.getters.classRecords}}},c={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-container",[r("div",{staticClass:"bg-grey p-3"},[r("b-row",[r("b-col",{attrs:{align:"center"}},[r("button",{staticClass:"buttonDiv bg-alert px-3",staticStyle:{width:"45%",height:"50px"},on:{click:function(e){return t.getClass()}}},[r("b-icon-arrow-clockwise",{attrs:{variant:"cream","font-scale":"1.5"}})],1)])],1)],1),t._v(" "),r("table",{staticClass:"table"},[r("tbody",t._l(t.classRecords,function(e,s){return r("div",{key:s},[r("tr",[r("td",{staticStyle:{width:"150px"}},[t._v(t._s(s)+"# "+t._s(e.user))]),t._v(" "),r("td"),t._v(" "),r("td",[r("b-form-select",{staticStyle:{width:"50px","overflow-y":"hidden"}},t._l(t.getDates(e.logsRecord.logs),function(e,s){return r("option",{key:e[0]},[t._v(" "+t._s(s)+": "+t._s(e)+"  ")])}),0)],1),r("td",[r("div",{staticStyle:{display:"inline-block"}},[r("b-icon-star-fill",{attrs:{variant:"warning","font-scale":"1.5"}}),t._v(" ("+t._s(t.getLength(e.setRecord.starRecord))+")\n                          ")],1),t._v(" "),r("div",{staticStyle:{display:"inline-block"}},[r("b-form-select",{staticStyle:{width:"100px","overflow-y":"hidden"}},t._l(e.setRecord.starRecord,function(e,s){return r("option",{key:s},[t._v(" "+t._s(s)+" ")])}),0)],1)]),t._v(" "),r("td",[r("div",{staticStyle:{display:"inline-block"}},[r("b-icon-images",{attrs:{variant:"safe","font-scale":"1.5"}}),t._v(" ("+t._s(t.getLength(e.setRecord.dictRecord))+")\n                          ")],1),t._v(" "),r("div",{staticStyle:{display:"inline-block"}},[r("b-form-select",{staticStyle:{width:"100px","overflow-y":"hidden",display:"inline"}},t._l(e.setRecord.dictRecord,function(e,s){return r("option",{key:s},[t._v(" "+t._s(s)+" ")])}),0)],1)]),t._v(" "),r("td",[r("div",{staticStyle:{display:"inline-block"}},[r("b-icon-arrow-up-circle-fill",{attrs:{variant:"info","font-scale":"1.5"}}),t._v(" ("+t._s(t.getLength(e.setRecord.addRecord))+")\n                          ")],1),t._v(" "),r("div",{staticStyle:{display:"inline-block"}},[r("b-form-select",{staticStyle:{width:"100px","overflow-y":"hidden"}},t._l(e.setRecord.addRecord,function(e,s){return r("option",{key:s},[t._v(" "+t._s(s)+" ")])}),0)],1)]),t._v(" "),r("td",[r("b-icon",{attrs:{icon:"bar-chart-fill",variant:"alert","font-scale":"1.5"},on:{click:function(e){return t.showScores(s)}}}),t._v(" "+t._s(t.vocabCount(e.userRecord,e.user))+"\n                        ")],1)]),t._v(" "),s.toString()in t.scores&&1===t.scores[s.toString()]?r("div",t._l(t.userRecItems(e.userRecord),function(e,s){return r("div",{key:s},[t.valueSum(e)>0?r("div",[t._v("\n                           "+t._s(s)+"\n                            "),r("b-progress",{staticStyle:{height:"20px"},attrs:{"show-value":""}},[r("b-progress-bar",{attrs:{value:e.problem,variant:t.getVariant("problem")}}),t._v(" "),r("b-progress-bar",{attrs:{value:e.weak,variant:t.getVariant("weak")}}),t._v(" "),r("b-progress-bar",{attrs:{value:e.okay,variant:t.getVariant("okay")}}),t._v(" "),r("b-progress-bar",{attrs:{value:e.good,variant:t.getVariant("good")}}),t._v(" "),r("b-progress-bar",{attrs:{value:e.strong,variant:t.getVariant("strong")}})],1)],1):t._e()])}),0):t._e()])}),0)])])],1)},staticRenderFns:[]};var l=r("VU/8")(i,c,!1,function(t){r("8i2c")},"data-v-198a55e8",null);e.default=l.exports}});
//# sourceMappingURL=10.4fff36c8da1cc020ddbd.js.map