webpackJsonp([7],{"7BEm":function(t,s){},R4x1:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n={name:"TransCh",components:{Toolbar:e("djO7").default},data:function(){return{pageHead:"Chinese --\x3e English",toolbarShow:!0,max:100,value:20,testType:"transCh",title:"Chinese --\x3e English",buttonRotate:null,hover:!1,hoverAns:!1,showAnswers:!1,showTest:!1,answerData:[],filter:null,testItems:[],settings:{},timer:null,fields:["Chinese","English","Choice"],prime:"#205372",warn:"#E8804C",buttonStyle:{0:{color:this.prime},1:{color:this.prime},2:{color:this.prime},3:{color:this.prime},4:{color:this.prime},5:{color:this.prime}}}},methods:{recordAnswer:function(t,s,e){console.log(t,s,e);var n=void 0,i=void 0;e===t?(n=1,i="safe"):(n=-1,i="warn");var o={English:t,Chinese:s,Choice:e,Score:n,_rowVariant:i};this.answerData.push(o),this.filter+1<this.testItems.length?(console.log("filterCheck",this.filter,this.testItems.length),"sdEx"===this.settings.sound&&(this.buttonStyle[this.buttonRotate-1]={color:this.prime},clearInterval(this.timer),this.buttonRotate=0,this.timerSet()),this.filter+=1):(console.log("filterMax"),clearInterval(this.timer),this.filter=null,this.showTest=!1,this.checkAnswers())},start:function(t){this.showAnswers=!1,this.filter=0,this.answerData=[],this.showTest=!0,t&&(this.testItems=t.test,this.settings=JSON.parse(t.settings)),"sdEx"===this.settings.sound&&(this.buttonRotate=0,this.timerSet())},checkAnswers:function(){this.showAnswers=!0,this.$store.dispatch("updateRecord",{mode:"transCh",answerData:this.answerData,settingsData:this.settings})},playAudio:function(t){document.getElementById("audio").src=t},cancel:function(){console.log("cancel"),clearInterval(this.timer),this.filter=null,this.showTest=!1,this.checkAnswers()},timerSet:function(){var t=this;this.timer=setInterval(function(){if(console.log("buttonRotate",t.buttonRotate,t.settings.choices,t.testItems[t.filter]),t.buttonStyle[t.buttonRotate-1]={color:t.prime},t.buttonStyle[t.buttonRotate]={color:t.warn},t.buttonRotate<t.settings.choices){var s=t.testItems[t.filter].Choices[t.buttonRotate];t.playAudio(s.sdEn),t.buttonRotate+=1,console.log("plus1")}else console.log("clear"),t.buttonRotate=null,clearInterval(t.timer)},1800)}},watch:{filter:function(){var t=this.testItems[this.filter];t&&"sdOff"!==this.settings.sound&&null===this.buttonRotate&&this.playAudio(t.sdEn)},hover:function(){if(!0===this.hover&&null===this.buttonRotate){console.log("hover_active");var t=this.testItems[this.filter];this.playAudio(t.sdCh)}},hoverAns:function(){if(null!==this.hoverAns&&null===this.buttonRotate&&"sdEx"===this.settings.sound){console.log("hoverAns_active");var t=this.hoverAns;this.playAudio(t)}}},created:function(){this.$store.getters.isAuthenticated||this.$router.push("login")}},i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"TransCh"},[e("audio",{attrs:{id:"audio",autoplay:""}}),t._v(" "),e("Toolbar",{attrs:{toolbarShow:t.showTest,showAnswers:t.showAnswers,testType:t.testType,title:t.title},on:{newTest:function(s){return t.start(s)},retry:function(s){return t.start()}}}),t._v(" "),t.showTest?e("b-row",{attrs:{"no-gutters":""}},[e("b-col",{attrs:{cols:"11"}},[e("b-progress",{staticStyle:{height:"30px"},attrs:{value:t.filter,max:t.testItems.length,variant:"warn-light","show-progress":"",animated:""}})],1),t._v(" "),e("b-col",{attrs:{cols:"1"}},[e("button",{staticClass:"buttonDiv bg-warn",staticStyle:{height:"30px",width:"100%"},on:{click:function(s){return t.cancel()}}},[e("b-icon",{attrs:{icon:"x-circle",variant:"cream"}})],1)])],1):t._e(),t._v(" "),t.showTest?e("div",{staticClass:"bg-grey"},t._l(t.testItems,function(s,n){return e("div",{key:n},[t.testItems.indexOf(s)===t.filter?e("div",[e("button",{staticClass:"questionDiv bg-second",class:{active:t.hover},on:{mouseover:function(s){t.hover=!0},mouseleave:function(s){t.hover=!1}}},["lbOn"===t.settings.label||"lbQu"===t.settings.label?e("span",[t._v("   ("+t._s(s.Gr)+") ")]):t._e(),t._v(" "),e("span",[t._v(" "+t._s(s.Chinese)+" ")])]),t._v(" "),e("div",{staticClass:"p-3"},t._l(s.Choices,function(n,i){return e("div",{key:i},[e("button",{staticClass:"answerBtn",style:t.buttonStyle[i],attrs:{block:""},on:{click:function(e){return t.recordAnswer(s.English,s.Chinese,n.English)}}},["sdEx"===t.settings.sound?e("span",[e("b-icon-soundwave",{attrs:{"font-scale":"1.5"},on:{mouseover:function(s){t.hoverAns=n.sdEn},mouseleave:function(s){t.hoverAns=null}}})],1):"lbAn"===t.settings.label||"sdEx"!==t.settings.sound?e("span",[t._v(" ("+t._s(n.Gr)+")    "+t._s(n.English)+" ")]):e("span",[t._v(t._s(n.English))])]),t._v(" "),e("br"),t._v(" "),e("br")])}),0)]):t._e()])}),0):t._e(),t._v(" "),t.showAnswers?e("div",{staticClass:"bg-smoke"},[e("b-table",{attrs:{striped:"",hover:"",items:t.answerData,fields:t.fields}})],1):t._e()],1)},staticRenderFns:[]};var o=e("VU/8")(n,i,!1,function(t){e("7BEm")},"data-v-28875260",null);s.default=o.exports}});
//# sourceMappingURL=7.cdc006da349414543caf.js.map