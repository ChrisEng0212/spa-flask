webpackJsonp([13],{n22M:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"TransEngTest",components:{Toolbar:s("djO7").default},props:{s3:String,exit:Boolean},data:function(){return{pageHead:"English >> Chinese",testType:"transEng",title:"English >> Chinese",toolbarShow:!0,hover:!1,showAnswers:!1,showTest:!1,answerData:[],filter:null,testItems:[],settings:{},startTime:null,endTime:null,qCount:0,sCount:0,fields:["English","Chinese"]}},computed:{starGet:function(){return this.$store.getters.starGet},dictGet:function(){return this.$store.getters.makeList}},methods:{recordAnswer:function(t,e,s){this.qCount+=1;var n=void 0,i=void 0;s===e?(n=1,this.sCount+=1,i="safe"):(n=-1,i="warn");var o={English:t,Chinese:e,Choice:s,Score:n,_rowVariant:i};this.answerData.push(o),this.filter+1<this.testItems.length?this.filter+=1:(console.log("filterMax"),this.cancel())},start:function(t){this.sCount=0,this.qCount=0,this.startTime=new Date,this.showAnswers=!1,this.filter=0,this.answerData=[],this.showTest=!0,t&&(this.testItems=t.test,this.settings=JSON.parse(t.settings)),this.$store.dispatch("testActive",!0)},checkAnswers:function(){console.log("testEnded"),this.showAnswers=!0,this.$store.dispatch("testActive",!1),this.$store.dispatch("updateRecord",{mode:"transEng",answerData:this.answerData,settingsData:this.settings})},cancel:function(){console.log("cancel"),this.filter=null,this.showTest=!1,this.endTime=new Date,this.showModal(),this.checkAnswers()},addStar:function(t,e){this.$store.dispatch("newStar",{word:t,set:e})},showModal:function(){this.$refs.complete.show()},hideModal:function(t){"complete"===t?this.$refs.complete.hide():(this.$refs.fail.hide(),this.msg=null,this.waiting=!0)},timeSpan:function(){var t=(this.endTime-this.startTime)/1e3,e=0,s=0;return t>59?(e=Math.floor(t/60),s=Math.floor(t-60*e),e.toString()+" minutes "+s.toString()+" seconds"):Math.floor(t).toString()+" seconds"},playAudio:function(t){console.log("PLAY",t);var e=document.getElementById("audio");e.src=t,e.play()},playAnswer:function(t){var e=this.dictGet.filter(function(e){return e.English===t});(console.log("PLAY",e),this.audioMarker)&&document.getElementById(this.audioMarker).setAttribute("class","");this.audioMarker=t;var s=document.getElementById(t);s.setAttribute("class","text-warn");var n=e[0].mp3en,i=document.getElementById("audio");i.src=n,i.play(),i.onended=function(){s.setAttribute("class","")}}},watch:{filter:function(){var t=this.testItems[this.filter];t&&"sdOff"!==this.sound&&this.playAudio(t.sdEn)},hover:function(){if(this.hover){console.log("hover_active");var t=this.testItems[this.filter];this.playAudio(t.sdEn)}},exit:function(){this.cancel()}},created:function(){this.$store.getters.isAuthenticated||this.$router.push("login")}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"TransEng"},[s("audio",{attrs:{id:"audio",autoplay:""}}),t._v(" "),s("div",{class:t.getClass("second","cream","mt-2 p-2 head")},[s("h2",{attrs:{align:"center"}},[t._v(" "+t._s(t.title)+" ")])]),t._v(" "),s("Toolbar",{attrs:{toolbarShow:t.showTest,showAnswers:t.showAnswers,testType:t.testType,title:t.title},on:{newTest:function(e){return t.start(e)},retry:function(e){return t.start()}}}),t._v(" "),t.showTest?s("div",[s("b-progress",{staticStyle:{height:"30px"},attrs:{value:t.filter,max:t.testItems.length,variant:"warn-light","show-progress":"",animated:""}}),t._v(" "),s("div",{staticClass:"bg-grey"},t._l(t.testItems,function(e,n){return s("div",{key:n},[t.testItems.indexOf(e)===t.filter?s("div",[s("button",{staticClass:"questionDiv bg-second",class:{active:t.hover},on:{mouseover:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1}}},["sdEx"!==t.settings.sound||1==t.hover?s("span",[t._v(" "+t._s(e.English)+" ")]):t._e(),t._v(" "),"lbOn"===t.settings.label&&"sdEx"!==t.settings.sound?s("span",[t._v("   ("+t._s(e.Gr)+") ")]):t._e(),t._v(" "),"sdEx"==t.settings.sound||"sdOn"==t.settings.sound?s("span",[s("b-icon-soundwave")],1):t._e()]),t._v(" "),s("div",{staticClass:"p-3"},t._l(e.Choices,function(n,i){return s("div",{key:i},[s("button",{staticClass:"answerBtn bg-smoke",on:{click:function(s){return t.recordAnswer(e.English,e.Chinese,n.Chinese)}}},["lbAn"===t.settings.label||"lbOn"===t.settings.label?s("span",[t._v(" ("+t._s(n.Gr)+")   ")]):t._e(),t._v("  "+t._s(n.Chinese)+"\n                              ")]),t._v(" "),s("br"),t._v(" "),s("br")])}),0)]):t._e()])}),0)],1):t._e(),t._v(" "),t.showAnswers?s("div",{staticClass:"bg-smoke"},[s("b-table",{attrs:{striped:"",hover:"",fixed:"",items:t.answerData,fields:t.fields},scopedSlots:t._u([{key:"head(english)",fn:function(e){return[s("div",{attrs:{align:"right"}},[t._v("\n          English\n        ")])]}},{key:"cell(english)",fn:function(e){return[s("div",{staticStyle:{float:"left"}},[e.item.English in t.starGet?[s("b-icon-star-fill",{attrs:{variant:"warn"},on:{click:function(s){return t.addStar(e.item.English,0)}}})]:[s("b-icon-star",{attrs:{variant:"grey"},on:{click:function(s){return t.addStar(e.item.English,1)}}})]],2),t._v(" "),s("div",{attrs:{align:"right"}},[s("span",{attrs:{id:e.item.English},on:{click:function(s){return t.playAnswer(e.item.English)}}},[t._v(" "+t._s(e.item.English))])])]}},{key:"cell(chinese)",fn:function(e){return["warn"===e.item._rowVariant?s("div",[s("b-icon",{attrs:{icon:"x",variant:"alert","font-scale":"1"}}),t._v(" "+t._s(e.item.Choice)),s("br"),t._v(" "),s("b-icon",{attrs:{icon:"check2",variant:"safe","font-scale":"1"}}),t._v(" "+t._s(e.item.Chinese)+"\n        ")],1):s("div",[t._v("\n          "+t._s(e.item.Chinese)+"\n        ")])]}}],null,!1,3297805528)})],1):t._e(),t._v(" "),s("b-modal",{ref:"complete",attrs:{"hide-header-close":"","no-close-on-esc":"","no-close-on-backdrop":"",align:"center","hide-footer":"",title:"Test Complete"}},[s("div",{staticClass:"d-block"},[s("h3",[t._v(" "+t._s(t.sCount)+"/"+t._s(t.qCount)+" ")]),t._v(" "),s("h3",[t._v(" "+t._s(t.timeSpan())+"  ")])]),t._v(" "),s("button",{staticClass:"buttonDiv mt-3 bg-prime text-cream",staticStyle:{width:"60%"},on:{click:function(e){return t.hideModal("complete")}}},[t._v("Close")])])],1)},staticRenderFns:[]};var o=s("VU/8")(n,i,!1,function(t){s("vYGd")},"data-v-0bd048fa",null);e.default=o.exports},vYGd:function(t,e){}});
//# sourceMappingURL=13.4ac22e22cfc3ceac66c0.js.map