webpackJsonp([5],{R4x1:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"TransCh",components:{Toolbar:s("djO7").default},props:{s3:String,exit:Boolean},data:function(){return{pageHead:"Chinese >> English",testType:"transCh",title:"Chinese >> English",toolbarShow:!0,max:100,value:20,hover:!1,hoverAns:!1,showAnswers:!1,showTest:!1,answerData:[],filter:null,testItems:[],settings:{},fields:["Chinese","English"],activeStyle:{background:"#4a758b",color:"#E8804C"},neutralStyle:{background:"#d8ecf1",color:"#205372"},buttonStyle:{0:this.neutralStyle,1:this.neutralStyle,2:this.neutralStyle,3:this.neutralStyle,4:this.neutralStyle,5:this.neutralStyle},replay:!1,startTime:null,endTime:null,qCount:0,sCount:0,markerIcon:null}},computed:{starGet:function(){return this.$store.getters.starGet},dictGet:function(){return this.$store.getters.makeList}},methods:{recordAnswer:function(t,e,s){this.qCount+=1;var i=void 0,n=void 0;s===t?(i=1,this.sCount+=1,n="safe"):(i=-1,n="warn");var a={English:t,Chinese:e,Choice:s,Score:i,_rowVariant:n};this.answerData.push(a),this.filter+1<this.testItems.length?"sdEx"===this.settings.sound?(this.filter+=1,this.replay=!1,this.playCycle()):this.filter+=1:this.cancel()},start:function(t){for(var e in this.buttonStyle)this.buttonStyle[e]=this.neutralStyle;this.sCount=0,this.qCount=0,this.startTime=new Date,this.showAnswers=!1,this.filter=0,this.answerData=[],this.showTest=!0,this.$store.dispatch("testActive",!0),t&&(this.testItems=t.test,this.settings=JSON.parse(t.settings)),"sdEx"===this.settings.sound&&this.playCycle()},checkAnswers:function(){this.showAnswers=!0,this.replay=!1,this.$store.dispatch("testActive",!1),this.$store.dispatch("updateRecord",{mode:"transCh",answerData:this.answerData,settingsData:this.settings})},cancel:function(){this.filter=null,this.showTest=!1,this.endTime=new Date,this.replay=!1,this.showModal(),this.checkAnswers()},addStar:function(t,e){this.$store.dispatch("newStar",{word:t,set:e})},showModal:function(){this.$refs.complete.show()},hideModal:function(t){"complete"===t?this.$refs.complete.hide():(this.$refs.fail.hide(),this.msg=null,this.waiting=!0)},timeSpan:function(){var t=(this.endTime-this.startTime)/1e3,e=0,s=0;return t>59?(e=Math.floor(t/60),s=Math.floor(t-60*e),e.toString()+" minutes "+s.toString()+" seconds"):Math.floor(t).toString()+" seconds"},playAudio:function(t){var e=document.getElementById("audio");e.src=t,e.play()},playAnswer:function(t){var e=this.dictGet.filter(function(e){return e.English===t});(console.log("PLAY",e),this.audioMarker)&&document.getElementById(this.audioMarker).setAttribute("class","");this.audioMarker=t;var s=document.getElementById(t);s.setAttribute("class","text-warn");var i=e[0].mp3en,n=document.getElementById("audio");n.src=i,n.play(),n.onended=function(){s.setAttribute("class","")}},playCycle:function(){for(var t in this.buttonStyle)this.buttonStyle[t]=this.neutralStyle;var e=document.getElementById("cycle"),s=0,i=this,n=this.testItems[this.filter].Choices[s].sdEn;e.src=n,e.play(),this.buttonStyle[s]=this.activeStyle,e.onended=function(){i.buttonStyle[s]=i.neutralStyle,s<i.settings.choices-1?(s+=1,i.buttonStyle[s]=i.activeStyle,n=i.testItems[i.filter].Choices[s].sdEn,e.src=n,e.play()):i.showTest&&(i.replay=!0)}}},watch:{filter:function(){var t=this.testItems[this.filter];t&&"sdTy"===this.settings.sound&&this.playAudio(t.sdEn)},hover:function(){if(this.hover){var t=this.testItems[this.filter];this.playAudio(t.sdCh)}},hoverAns:function(){if(null!==this.hoverAns&&this.replay&&"sdEx"===this.settings.sound){var t=this.hoverAns;this.playAudio(t)}},exit:function(){this.cancel()}},created:function(){this.$store.getters.isAuthenticated||this.$router.push("login")}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"TransCh"},[s("audio",{attrs:{id:"audio"}}),t._v(" "),s("audio",{attrs:{id:"cycle"}}),t._v(" "),s("div",{class:t.getClass("second","cream","mt-2 p-2 head")},[s("h2",{attrs:{align:"center"}},[t._v(" "+t._s(t.title)+" ")])]),t._v(" "),s("Toolbar",{attrs:{toolbarShow:t.showTest,showAnswers:t.showAnswers,testType:t.testType,title:t.title},on:{newTest:function(e){return t.start(e)},retry:function(e){return t.start()}}}),t._v(" "),t.showTest?s("div",[s("b-progress",{staticStyle:{height:"30px"},attrs:{value:t.filter,max:t.testItems.length,variant:"warn-light","show-progress":"",animated:""}}),t._v(" "),s("div",{staticClass:"bg-grey"},t._l(t.testItems,function(e,i){return s("div",{key:i},[t.testItems.indexOf(e)===t.filter?s("div",[s("button",{staticClass:"questionDiv bg-second",class:{active:t.hover},on:{mouseover:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1}}},["lbOn"===t.settings.label||"lbQu"===t.settings.label?s("span",[t._v("   ("+t._s(e.Gr)+") ")]):t._e(),t._v(" "),s("span",[t._v(" "+t._s(e.Chinese)+" ")])]),t._v(" "),s("div",{staticClass:"p-3"},t._l(e.Choices,function(i,n){return s("div",{key:n},[s("button",{staticClass:"answerBtn",style:t.buttonStyle[n],attrs:{block:""},on:{click:function(s){return t.recordAnswer(e.English,e.Chinese,i.English)}}},["sdEx"===t.settings.sound?s("span",[s("b-icon-soundwave",{attrs:{"font-scale":"1.5"}})],1):"lbAn"===t.settings.label||"sdEx"!==t.settings.sound?s("span",[t._v(" ("+t._s(i.Gr)+")    "+t._s(i.English)+" ")]):s("span",[t._v(t._s(i.English))])]),t._v(" "),s("br"),t._v(" "),s("br")])}),0)]):t._e()])}),0),t._v(" "),t.replay&&t.showTest?s("div",{staticClass:"bg-grey pb-3"},[s("b-row",[s("b-col",{attrs:{align:"center"}},[s("button",{staticClass:"buttonDiv bg-alert px-3",staticStyle:{width:"45%",height:"50px"},on:{click:function(e){t.playCycle(),t.replay=!1}}},[s("b-icon-arrow-clockwise",{attrs:{variant:"cream","font-scale":"1.5"}})],1)])],1)],1):t._e()],1):t._e(),t._v(" "),t.showAnswers?s("div",{staticClass:"bg-smoke"},[s("b-table",{attrs:{striped:"",hover:"",fixed:"",items:t.answerData,fields:t.fields},scopedSlots:t._u([{key:"head(chinese)",fn:function(e){return[s("div",{attrs:{align:"right"}},[e?s("span",[t._v("Chinese")]):t._e()])]}},{key:"cell(chinese)",fn:function(e){return[s("div",{staticStyle:{float:"left"}},[e.item.English in t.starGet?[s("b-icon-star-fill",{attrs:{variant:"warn"},on:{click:function(s){return t.addStar(e.item.English,0)}}})]:[s("b-icon-star",{attrs:{variant:"grey"},on:{click:function(s){return t.addStar(e.item.English,1)}}})]],2),t._v(" "),s("div",{attrs:{align:"right"}},[t._v("\n          "+t._s(e.value)+"\n        ")])]}},{key:"cell(english)",fn:function(e){return["warn"===e.item._rowVariant?s("div",[s("b-icon",{attrs:{icon:"x",variant:"alert","font-scale":"1"}}),t._v(" "),s("span",{attrs:{id:e.item.Choice},on:{click:function(s){return t.playAnswer(e.item.Choice)}}},[t._v(" "+t._s(e.item.Choice))]),t._v(" "),s("br"),t._v(" "),s("b-icon",{attrs:{icon:"check2",variant:"safe","font-scale":"1"}}),t._v(" "),s("span",{attrs:{id:e.item.English},on:{click:function(s){return t.playAnswer(e.item.English)}}},[t._v(" "+t._s(e.item.English))])],1):s("div",[s("span",{attrs:{id:e.item.English},on:{click:function(s){return t.playAnswer(e.item.English)}}},[t._v(" "+t._s(e.item.English))])])]}}],null,!1,3082524403)})],1):t._e(),t._v(" "),s("b-modal",{ref:"complete",attrs:{"hide-header-close":"","no-close-on-esc":"","no-close-on-backdrop":"",align:"center","hide-footer":"",title:"Test Complete"}},[s("div",{staticClass:"d-block"},[s("h3",[t._v(" "+t._s(t.sCount)+"/"+t._s(t.qCount)+" ")]),t._v(" "),s("h3",[t._v(" "+t._s(t.timeSpan())+"  ")])]),t._v(" "),s("button",{staticClass:"buttonDiv mt-3 bg-prime text-cream",staticStyle:{width:"60%"},on:{click:function(e){return t.hideModal("complete")}}},[t._v("Close")])])],1)},staticRenderFns:[]};var a=s("VU/8")(i,n,!1,function(t){s("cKEJ")},"data-v-a3976b2a",null);e.default=a.exports},cKEJ:function(t,e){}});
//# sourceMappingURL=5.f142d508c19fde6a70be.js.map