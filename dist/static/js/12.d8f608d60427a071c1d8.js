webpackJsonp([12],{IcMN:function(t,e){},a05V:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("UYEZ"),n=s("Lr5f"),o={name:"InstQuiz",components:{ToolbarQuiz:i.default,InstAns:n.default},props:{s3:String,exit:Boolean},data:function(){return{toolbarShow:!0,hover:!1,showAnswers:!1,showTest:!1,answerData:[],filter:null,testItems:[],settings:{},startTime:null,endTime:null,qCount:0,sCount:0,fields:["English","Chinese"],titles:{"C>E":"Chinese --\x3e English","E>C":"English --\x3e Chinese"}}},computed:{dictGet:function(){return this.$store.getters.makeList},starGet:function(){return console.log("stars",this.$store.getters.starGet),this.$store.getters.starGet},testType:function(){return console.log("testType",this.$store.state.testRecords[this.$store.state.activeQuiz].type),this.$store.state.testRecords[this.$store.state.activeQuiz].type}},methods:{recordAnswer:function(t,e,s){this.qCount+=1;var i=void 0,n=void 0;s===e?(i=1,this.sCount+=1,n="safe"):(i=-1,n="warn");var o={English:t,Chinese:e,Choice:s,Score:i,_rowVariant:n};this.answerData.push(o),this.filter+1<this.testItems.length?this.filter+=1:(console.log("filterMax"),this.cancel())},start:function(t){console.log(t),this.sCount=0,this.qCount=0,this.startTime=new Date,this.showAnswers=!1,this.filter=0,this.answerData=[],this.showTest=!0,t&&(this.testItems=t.test,this.settings=JSON.parse(t.settings)),this.$store.dispatch("testActive",!0)},checkAnswers:function(){console.log("testEnded"),this.$store.dispatch("testActive",!1),this.$emit("quizData",{answerData:this.answerData,score:this.sCount,time:this.timeSpan()})},cancel:function(){console.log("cancel"),this.filter=null,this.showTest=!1,this.endTime=new Date,this.showModal(),this.checkAnswers()},addStar:function(t,e){this.$store.dispatch("newStar",{word:t,set:e})},showModal:function(){this.$refs.complete.show()},hideModal:function(t){"complete"===t?this.$refs.complete.hide():(this.$refs.fail.hide(),this.msg=null,this.waiting=!0)},timeSpan:function(){var t=(this.endTime-this.startTime)/1e3,e=0,s=0;return t>59?(e=Math.floor(t/60),s=Math.floor(t-60*e),e.toString()+" m"+s.toString()+" s"):Math.floor(t).toString()+" seconds"},playAudio:function(t){console.log("PLAY",t);var e=document.getElementById("audio");e.src=t,e.play()},playAnswer:function(t){var e=this.dictGet.filter(function(e){return e.English===t});(console.log("PLAY",e),this.audioMarker)&&document.getElementById(this.audioMarker).setAttribute("class","");this.audioMarker=t;var s=document.getElementById(t);s.setAttribute("class","text-warn");var i=e[0].mp3en,n=document.getElementById("audio");n.src=i,n.play(),n.onended=function(){s.setAttribute("class","")}}},watch:{filter:function(){var t=this.testItems[this.filter];t&&"sdOff"!==this.settings.sound&&this.playAudio(t.sdQue)},hover:function(){if(this.hover){console.log("hover_active");var t=this.testItems[this.filter];this.playAudio(t.sdQue)}},exit:function(){this.cancel()}},created:function(){this.$store.getters.isAuthenticated||this.$router.push("login")}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"InstQuiz"},[s("audio",{attrs:{id:"audio",autoplay:""}}),t._v(" "),s("div",{class:t.getClass("second","cream","mt-2 p-2 head")},[s("h2",{attrs:{align:"center"}},[t._v(" "+t._s(t.titles[t.testType])+" ")])]),t._v(" "),s("ToolbarQuiz",{attrs:{toolbarShow:t.showTest,showAnswers:t.showAnswers,testType:t.testType},on:{newTest:function(e){return t.start(e)},cancel:function(e){return t.$emit("cancel")}}}),t._v(" "),t.showTest?s("div",[s("b-progress",{staticStyle:{height:"30px"},attrs:{value:t.filter,max:t.testItems.length,variant:"warn-light","show-progress":"",animated:""}}),t._v(" "),t.showTest?s("div",{staticClass:"bg-grey"},t._l(t.testItems,function(e,i){return s("div",{key:i},[t.testItems.indexOf(e)===t.filter?s("div",{staticClass:"bg-second questionDiv",class:{active:"active1"},attrs:{align:"center"},on:{mouseover:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1}}},[s("h3",["sdEx"!==t.settings.sound||1==t.hover?s("span",[t._v(" "+t._s(e.Question)+" ")]):t._e(),t._v(" "),"sdEx"==t.settings.sound||"sdOn"==t.settings.sound?s("span",[s("b-icon-soundwave")],1):t._e()])]):t._e(),t._v(" "),t.testItems.indexOf(e)===t.filter?s("div",{staticClass:"p-3"},t._l(e.Choices,function(i,n){return s("div",{key:n},[s("button",{staticClass:"answerBtn bg-prime text-cream",attrs:{name:e.Question,id:e.Question+i.Answer,block:""},on:{click:function(s){return t.recordAnswer(e.Question,e.Answer,i.Answer)}}},[t._v("\n              "+t._s(i.Answer)+"\n            ")]),t._v(" "),s("br"),t._v(" "),s("br")])}),0):t._e()])}),0):t._e()],1):t._e(),t._v(" "),s("b-modal",{ref:"complete",attrs:{"hide-header-close":"","no-close-on-esc":"","no-close-on-backdrop":"",align:"center","hide-footer":"",title:"Test Complete"}},[s("div",{staticClass:"d-block"},[s("h3",[t._v(" "+t._s(t.sCount)+"/"+t._s(t.qCount)+" ")]),t._v(" "),s("h3",[t._v(" "+t._s(t.timeSpan())+"  ")])]),t._v(" "),s("button",{staticClass:"buttonDiv mt-3 bg-prime text-cream",staticStyle:{width:"60%"},on:{click:function(e){return t.hideModal("complete")}}},[t._v("Close")])])],1)},staticRenderFns:[]};var a=s("VU/8")(o,r,!1,function(t){s("IcMN")},"data-v-525260e9",null);e.default=a.exports}});
//# sourceMappingURL=12.d8f608d60427a071c1d8.js.map