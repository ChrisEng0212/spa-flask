webpackJsonp([1,5],{"/ylZ":function(e,t){},OAQr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={name:"TransEngMatch",components:{ToolbarMatch:s("LR+Q").default},props:{testType:String,p1:Number,p1name:String,p2:Number,p2name:String,player:String,socket:Object,s3:String},data:function(){return{waiting:0,pageHead:"English --\x3e Chinese",toolbarShow:!0,showToolbar:!0,showAnswers:!1,showTest:!1,showProgress:!0,hover:!1,ready:[],answered:[],answerData:[],filter:null,testItems:[],settings:{},fields:["English","Chinese"],time:null,clock:null,progressValues:{p1:0,p2:0,warn:0}}},methods:{setCountdown:function(){this.time=5e3;var e=this;this.clock=setInterval(function(){0===e.time?e.disableAll():e.time-=100},100)},start:function(){this.showAnswers=!1,this.filter=0,this.answerData=[],this.showTest=!0,this.setCountdown()},readyCheck:function(){if(console.log("length",this.ready,this.ready.length),2===this.ready.length){this.waiting=2;var e=this;setTimeout(function(){e.start(),e.$store.dispatch("testActive"),e.waiting=0,e.ready=[]},3e3)}},recordAnswer:function(e,t,s){var n=e+s,r=s===t;console.log("RESULT",r),this.socket.emit("answer",{room:this.p1,name:e,chinese:t,btnID:n,player:this.player,state:r})},disableAll:function(){var e=this,t=this.testItems[this.filter].English,s=this.testItems[this.filter].Chinese,n=document.getElementsByName(t);for(var r in console.log(n),n)console.log("buttons",r,n[r]),n[r-1].disbaled=!0;setTimeout(function(){e.answered=0,e.answerData.length===e.filter?(e.enterResult(t,s,null,!1),e.time=5e3,e.filterToggle()):console.log("duplicate answer","timeout")},2e3)},disable:function(e,t,s,n,r){var i="bg-"+s,a=document.getElementById(t);n?a.classList.add("text-safe"):a.classList.add("text-alert"),a.classList.add(i),a.disabled=!0;var o=document.getElementsByName(e);if(console.log(o),s===this.player)for(var l=0;l<o.length;l++)o[l].disabled=!0;if(n)for(var c=0;c<o.length;c++)o[c].disabled=!0;if(this.answered+=1,n||this.answered>1){var h=this;setTimeout(function(){h.answered=0,h.answerData.length===h.filter?(h.enterResult(e,r,s,n),h.filterToggle()):console.log("duplicate answer",s)},2e3)}},enterResult:function(e,t,s,n){console.log(n);var r="warn";n&&(r=s);var i={English:e,Chinese:t,_rowVariant:r};this.progressValues[r]+=1,console.log(r,this.progressValues),this.answerData.push(i)},filterToggle:function(){this.filter+1<this.testItems.length?(console.log(this.filter,this.testItems.length),this.filter+=1):(console.log("filterMax"),this.$store.dispatch("testActive"),this.filter=null,this.showTest=!1,this.checkAnswers())},checkAnswers:function(){this.showAnswers=!0},playAudio:function(e){document.getElementById("audio").src=e}},watch:{filter:function(){var e=this.testItems[this.filter];e&&"sdOff"!==this.sound&&this.playAudio(e.sdEn)},hover:function(){if(!0===this.hover){console.log("hover_active");var e=this.testItems[this.filter];this.playAudio(e.sdEn)}}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}},mounted:function(){var e=this;e.socket.on("go",function(t){console.log("roomReady",t,t.testItems.length),e.room=t.room,t.testItems.length>0&&(e.testItems=t.testItems),e.ready.includes(t.player)||(e.ready.push(t.player),console.log(t.player)),e.readyCheck()}),e.socket.on("answer",function(t){e.disable(t.name,t.btnID,t.player,t.state,t.chinese)})}},r={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"TransEng"},[s("audio",{attrs:{id:"audio",autoplay:""}}),e._v(" "),e.showProgress?s("div",{staticClass:"bg-second p-3"},[s("div",{staticClass:"mt-2 bg-third p-2",staticStyle:{height:"100px"},attrs:{align:"center"}},[s("div",{staticStyle:{width:"45%",height:"70px",display:"inline-block"}},[s("b-avatar",{attrs:{src:e.s3+e.p1.toString()+".jpg",size:"72px",badge:e.p1name,"badge-offset":"-0.5em","badge-variant":"p1"}}),e._v(" "),e.ready.includes("p1")?s("b-avatar",{attrs:{icon:"person-check",variant:"safe"}}):e._e()],1),e._v(" "),s("div",{staticStyle:{width:"45%",height:"70px",display:"inline-block"}},[s("b-avatar",{attrs:{src:e.s3+e.p2.toString()+".jpg",size:"72px",badge:e.p2name,"badge-offset":"-0.5em","badge-variant":"p2"}}),e._v(" "),e.ready.includes("p2")?s("b-avatar",{attrs:{icon:"person-check",variant:"safe"}}):e._e()],1)]),e._v(" "),s("div",[s("b-progress",{staticClass:"mt-2",staticStyle:{height:"30px"},attrs:{max:e.testItems.length,"show-value":""}},[s("b-progress-bar",{attrs:{value:e.progressValues.p1,variant:"p1"}}),e._v(" "),s("b-progress-bar",{attrs:{value:e.progressValues.warn,variant:"warn-light"}}),e._v(" "),s("b-progress-bar",{attrs:{value:e.progressValues.p2,variant:"p2"}})],1),e._v(" "),s("br"),e._v(" "),e.time?s("b-progress",{attrs:{value:e.time,max:"5000",animated:"",variant:"alert"}}):e._e()],1)]):e._e(),e._v(" "),s("ToolbarMatch",{attrs:{toolbarShow:e.showTest,p1:e.p1,p2:e.p2,p1name:e.p1name,p2name:e.p2name,socket:e.socket,player:e.player,waiting:e.waiting,showAnswers:e.showAnswers,testType:e.testType},on:{waitUpdate:function(t){e.waiting=1}}}),e._v(" "),e.showTest?s("div",e._l(e.testItems,function(t,n){return s("div",{key:n},[e.testItems.indexOf(t)===e.filter?s("div",{staticClass:"bg-third p-3",class:{active:e.hover},attrs:{align:"center"},on:{mouseover:function(t){e.hover=!0},mouseleave:function(t){e.hover=!1}}},[s("h3",["sdEx"!==e.settings.sound||1==e.hover?s("span",[e._v(" "+e._s(t.English)+" ")]):e._e(),e._v(" "),"sdEx"==e.settings.sound||"sdOn"==e.settings.sound?s("span",[s("b-icon-soundwave")],1):e._e()])]):e._e(),e._v(" "),e.testItems.indexOf(t)===e.filter?s("div",e._l(t.Choices,function(n,r){return s("div",{key:r},[s("button",{staticClass:"answerBtn bg-grey",attrs:{name:t.English,id:t.English+n.Chinese,block:""},on:{click:function(s){return e.recordAnswer(t.English,t.Chinese,n.Chinese)}}},[e._v("\n              "+e._s(n.Chinese)+"\n            ")]),e._v(" "),s("br"),e._v(" "),s("br")])}),0):e._e()])}),0):e._e(),e._v(" "),e.showAnswers?s("div",[s("div",{staticClass:"mt-2"},[s("b-table",{attrs:{striped:"",hover:"",items:e.answerData,fields:e.fields}})],1)]):e._e()],1)},staticRenderFns:[]};var i=s("VU/8")(n,r,!1,function(e){s("qg3V")},"data-v-646fe240",null);t.default=i.exports},dHcL:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("mvHQ"),r=s.n(n),i=s("OAQr"),a=s("OLUw"),o={name:"Match",props:{s3:String},components:{TransEngMatch:i.default},data:function(){return{pageHead:"Match Area",username:null,userID:null,onlineUsers:{},userList:[],challengeUsers:{},challengeList:[],socket:null,testType:null,p1:null,p2:null,p1name:null,p2name:null,player:null}},methods:{joinRoom:function(){this.socket.emit("join_room",{room:this.room,username:this.username,userID:this.userID})},startRoom:function(){this.socket.emit("start_room",{room:this.room,username:this.username,userID:this.userID})},sayHi:function(e){this.socket.emit("sayHi",{userID:this.userID,username:this.username,target:e})},challenge:function(e,t){this.socket.emit("challenge",{userID:this.userID,username:this.username,target:e,mode:t})},declineChallenge:function(e){console.log("sid",e,this.challengeUsers);var t={};for(var s in this.challengeUsers)console.log(s,e),parseInt(s)!==e&&(t[s]=this.challengeUsers[s]);this.challengeUsers=t,console.log("change",this.challengeUsers)},acceptChallenge:function(e,t,s){this.socket.emit("accept",{p2:this.userID,p2name:this.username,p1:e,p1name:t,mode:s})},startSocket:function(){this.socket=Object(a.a)()},closeSocket:function(){this.socket.emit("offline",{userProfile:this.$store.state.userProfile}),this.socket.close()}},watch:{onlineUsers:function(){for(var e in this.userList=[],this.onlineUsers)this.userList.push(this.onlineUsers[e].userID);console.log(this.userList)},challengeUsers:function(){for(var e in this.challengeList=[],this.challengeUsers)this.challengeList.push(this.challengeUsers[e].userID);console.log(this.challengeList)}},created:function(){if(!this.$store.getters.isAuthenticated)return this.$router.push("login"),!1;this.userID=this.$store.state.userProfile.userID,this.username=this.$store.state.userProfile.username,this.startSocket()},beforeDestroy:function(){console.log("beforeDestroyMatch"),this.closeSocket()},mounted:function(){var e=this;e.socket.on("onlineUsers",function(t){console.log("onlineUsers",t),e.onlineUsers=JSON.parse(t.userList)}),e.socket.on("sayHi",function(e){console.log(e),alert("Hello, from "+e.sender)}),e.socket.on("disconnect",function(e){console.log("disconnect")}),e.socket.on("challenge",function(t){console.log("challenge",t);var s={sender:t.sender,mode:t.mode,userID:t.userID};for(var n in e.challengeUsers)if(console.log(e.challengeUsers[n],s),e.challengeUsers[n].userID===s.userID)return console.log("found"),!1;e.challengeUsers[s.userID]=s,e.challengeUsers=JSON.parse(r()(e.challengeUsers)),console.log(e.challengeUsers,e.challengeList)}),e.socket.on("start",function(t){console.log("start",t),e.testType=t.mode,e.p1=t.p1,e.p1name=t.p1name,e.p2=t.p2,e.p2name=t.p2name,e.p1===e.$store.state.userProfile.userID?e.player="p1":e.player="p2",console.log("player",e.player)})}},l={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",["TransEng"===e.testType?s("TransEngMatch",{attrs:{testType:e.testType,p1:e.p1,p2:e.p2,p1name:e.p1name,p2name:e.p2name,player:e.player,socket:e.socket}}):e._e(),e._v(" "),null===e.testType?s("b-container",[s("div",{staticClass:"mt-2 bg-secondary p-2"},[s("h2",{staticClass:"text-sand",attrs:{align:"center"}},[e._v("\n            Online Area\n          ")])]),e._v(" "),s("div",[s("h3",[e._v(" Friends Online  ")]),e._v(" "),s("b-list-group",e._l(e.onlineUsers,function(t,n){return s("div",{key:n},[e.challengeList.includes(t.userID)?e._e():s("b-list-group-item",{staticClass:"d-flex align-items-center"},[s("b-avatar",{staticClass:"mr-3",attrs:{src:e.s3+t.userID+".jpg",text:t.username[0]}}),e._v(" "),s("span",{staticClass:"mr-auto"},[e._v(e._s(t.username))]),e._v(" "),t.userID!==e.userID?s("div",[s("b-button",{on:{click:function(s){return e.sayHi(t.userID)}}},[e._v(" Say Hi ")]),e._v(" "),s("b-button",{on:{click:function(s){return e.challenge(t.userID,"TransEng")}}},[e._v(" TransEng Match ")])],1):e._e()],1)],1)}),0)],1),e._v(" "),s("div",[s("h3",[e._v(" Challengers ")]),e._v(" "),s("b-list-group",e._l(e.challengeUsers,function(t,n){return s("div",{key:n},[e.userList.includes(t.userID)?s("b-list-group-item",{staticClass:"d-flex align-items-center"},[s("b-avatar",{staticClass:"mr-3",attrs:{id:n,src:e.s3+t.userID+".jpg",text:t.sender[0]}}),e._v(" "),s("span",{staticClass:"mr-auto"},[e._v(e._s(t.sender))]),e._v(" "),s("span",{staticClass:"mr-auto"},[e._v(e._s(t.mode))]),e._v(" "),s("b-button",{on:{click:function(s){return e.acceptChallenge(t.userID,t.sender,t.mode)}}},[e._v(" Accept ")]),e._v(" "),s("b-button",{on:{click:function(s){return e.declineChallenge(t.userID)}}},[e._v(" Decline ")])],1):e._e()],1)}),0)],1)]):e._e()],1)},staticRenderFns:[]};var c=s("VU/8")(o,l,!1,function(e){s("/ylZ")},"data-v-7a9598e9",null);t.default=c.exports},qg3V:function(e,t){}});
//# sourceMappingURL=1.9ca88ca03c8c64449143.js.map