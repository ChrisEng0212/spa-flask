webpackJsonp([3,15],{"/bQp":function(t,e){t.exports={}},"3fs2":function(t,e,i){var n=i("RY/4"),s=i("dSzd")("iterator"),r=i("/bQp");t.exports=i("FeBl").getIteratorMethod=function(t){if(void 0!=t)return t[s]||t["@@iterator"]||r[n(t)]}},"5zde":function(t,e,i){i("zQR9"),i("qyJz"),t.exports=i("FeBl").Array.from},"880/":function(t,e,i){t.exports=i("hJx8")},"94VQ":function(t,e,i){"use strict";var n=i("Yobk"),s=i("X8DO"),r=i("e6n0"),o={};i("hJx8")(o,i("dSzd")("iterator"),function(){return this}),t.exports=function(t,e,i){t.prototype=n(o,{next:s(1,i)}),r(t,e+" Iterator")}},Gu7T:function(t,e,i){"use strict";e.__esModule=!0;var n,s=i("c/Tr"),r=(n=s)&&n.__esModule?n:{default:n};e.default=function(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return(0,r.default)(t)}},Mhyx:function(t,e,i){var n=i("/bQp"),s=i("dSzd")("iterator"),r=Array.prototype;t.exports=function(t){return void 0!==t&&(n.Array===t||r[s]===t)}},PzxK:function(t,e,i){var n=i("D2L2"),s=i("sB3e"),r=i("ax3d")("IE_PROTO"),o=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=s(t),n(t,r)?t[r]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?o:null}},QJKF:function(t,e){},RPLV:function(t,e,i){var n=i("7KvD").document;t.exports=n&&n.documentElement},"RY/4":function(t,e,i){var n=i("R9M2"),s=i("dSzd")("toStringTag"),r="Arguments"==n(function(){return arguments}());t.exports=function(t){var e,i,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(i=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),s))?i:r?n(e):"Object"==(o=n(e))&&"function"==typeof e.callee?"Arguments":o}},UIH9:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Dd8w"),s=i.n(n),r=i("Gu7T"),o=i.n(r),a=i("c2yy"),c={name:"Dictionary",props:{s3:String},components:{DictPict:a.default},data:function(){return{fields:[{key:"English",label:"Vocab",sortable:!0},{key:"ChineseExt",label:"Chinese",sortable:!0}],pields:[{key:"link",label:"Picture",sortable:!0},{key:"def",label:"Info",sortable:!0}],visibleRows:[],selected:[null,null,null],optionsA:[{value:null,text:"---"}],gValue:"---",optionsG:[{value:null,text:"---"},{value:"n.",text:"nouns"},{value:"v.",text:"verbs"},{value:"adj.",text:"adjectives"},{value:"adv.",text:"adverbs"},{value:"conj.",text:"conjunctions"},{value:"prep.",text:"prepositions"},{value:"phr.",text:"phrases"}],optionsP:[{value:null,text:"---"},{value:"v.",text:"verbs"},{value:"adj.",text:"adjectives"},{value:"n.",text:"nouns"},{value:"phr.",text:"phrases"},{value:"abbr.",text:"abbreviations"},{value:"prop.",text:"proper nouns"}],optionsR:[{value:-2,text:"--"},{value:-1,text:"-"},{value:0,text:"o"},{value:1,text:"+"},{value:2,text:"++"}],color:{2:"safe",1:"third",0:"smoke","-1":"warn","-2":"alert"},colors:{null:"smoke",1:"safe",2:"alert",3:"warn",4:"p1",5:"p2"},noteCodes:{null:null,1:"Good",2:"Grammar",3:"Punctuation",4:"Detail",5:"Spelling"},wordDetails:{gl:null,defch1:null,defch2:"",added:!1},vocabList:null,picture:!1,pictWord:null,pictCh:null,note:null,audioMarker:[null,null],soundCount:0,addWait:!1,showPictures:!1}},computed:{activeQuiz:function(){return this.$store.state.instructor.activeQuiz},generalGet:function(){return this.$store.getters.generalGet},starGet:function(){return console.log("stars",this.$store.getters.starGet),this.$store.getters.starGet},tableItems:function(){return this.$store.getters.makeList},getList:function(){var t=this.$store.state.instructor.testRecords,e=this.$store.state.instructor.activeQuiz,i=[];for(var n in e)if(t[n])for(var s in t[n].list)i.push(t[n].list[s]);return i},optionsCheck:function(){return this.$store.getters.checkQuiz?this.optionsG:this.optionsP},pictList:function(){var t=this.$store.getters.pictGet;console.log(t);var e=[];for(var i in t.length>1&&delete t.add,t)e.push(this.$store.getters.pictGet[i]);return console.log("pictList",e),e}},methods:{showAlert:function(){this.$refs.alert.show()},hideAlert:function(t){this.$refs.alert.hide(),this.note=null},showClear:function(){this.$refs.clear.show()},showAdd:function(){this.$refs.add.show()},hideClear:function(t){this.$refs.clear.hide(),"clear"===t&&this.$store.dispatch("newStar",{word:null,set:3})},hideAdd:function(t){this.$refs.add.hide(),"add"===t&&this.addAllStars()},addAllStars:function(){for(var t in this.getList)this.addStar(this.getList[t],1)},getIcon:function(t){return this.selected[1]===t?{"*":"warn","+":"info",p:"safe",q:"grape-light"}[t]:"cream"},getSoundwave:function(){return 0===this.soundCount?"cream":1===this.soundCount?"info":"alert"},getSoundButton:function(){return 0===this.soundCount?"buttonDiv bg-second p-1":"buttonDiv bg-cream p-1"},getImage:function(t,e){if("add"===e)return"https://vocab-lms.s3-ap-northeast-1.amazonaws.com/public/add.jpg";var i=this.$store.state.userProfile,n=this.s3+i.userID+"/"+i.vocab+"/"+t+e+".jpg";return console.log(n),n},getColors:function(t){return"bg-"+this.colors[this.getStatus(t)]+" text-cream"},getStatus:function(t){var e=0;return this.$store.state.instructor.studentNotes[t]&&(e=this.$store.state.instructor.studentNotes[t].status),e},getNote:function(t){if(this.$store.state.instructor.studentNotes[t]){var e=this.noteCodes[this.$store.state.instructor.studentNotes[t].status];return this.$store.state.instructor.studentNotes[t].note?e+": "+this.$store.state.instructor.studentNotes[t].note:e}return null},getNotes:function(){this.$store.dispatch("instructorLogs",{student:this.$store.state.userProfile.userID,group:this.$store.state.userProfile.classroom,action:"getNotesStudent"})},getVariant:function(t,e){var i="prime";return t&&(i="success"),this.getStatus(e)&&(i=this.colors[this.getStatus(e)]),i},tapSound:function(){2===this.soundCount?this.soundCount=0:this.soundCount+=1},filterPicture:function(t,e){this.pictWord=t,this.pictCh=e,this.selected[2]=null,this.selected[1]=t,this.selected[0]=t,this.selected=[].concat(o()(this.selected))},changeSelected:function(t){if(!this.$store.state.userProfile.classroom&&["+","p"].includes(t))return this.note="Please join a classroom to access extra features",this.showAlert(),!1;this.selected[0]="",this.picture=!1,this.showPictures=!1,this.selected[1]="grade"===t?null:t,this.selected=[].concat(o()(this.selected)),console.log(this.selected)},nullClick:function(t,e){console.log("NULL"),this.selected=[null,null,null],this.selected=[].concat(o()(this.selected)),this.picture=!1},randomLet:function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");this.shuffle(t),this.selected=[t[0],null,null]},filterTable:function(t,e){if(null===e[0])return!1;if("*"===e[1]){if(t.Star)return!0}else if("+"===e[1]){if("new"===t.Origin)return!0}else{if(e[1]===t.English)return!0;if("p"===e[1]){if(t.Picture)return!0}else if("q"===e[1]){if(this.getList.includes(t.English))return!0}else if("abbr."===e[1]||"prop."===e[1]){if(t.Gr===e[1])return!0}else if(null!=e[2]){if(t.totalScore===e[2]&&t.tested)return!0}else{if(null===e[0].trim()||""===e[0].trim())return!1;if(null!=e[0].trim()&&1===e[0].trim().length){if(t.English[0].trim().toLowerCase()===e[0].trim().toLowerCase()){if(e[1]&&t.Gr===e[1])return!0;if(!e[1])return!0}}else{if(null==e[0].trim())return!1;if(t.English.toLowerCase().includes(e[0].trim().toLowerCase())){if(e[1]&&t.Gr===e[1])return!0;if(!e[1])return!0}}}}},filterPics:function(t,e){if(null===e[0])return!0;if(null!=e[0].trim()&&1===e[0].trim().length){if(t.word[0].trim().toLowerCase()===e[0].trim().toLowerCase())return!0}else if(null!=e[0].trim()&&t.word.toLowerCase().includes(e[0].trim().toLowerCase()))return!0},alphabet:function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZ";for(var e in t)this.optionsA.push({value:t[e],text:t[e]})},playAudio:function(t,e,i,n){var s=document.getElementById(this.audioMarker[0]+this.audioMarker[1]);console.log(s,i),s&&s.setAttribute("class","text-prime");var r=void 0;r=n?"text-warn":"text-"+this.getSoundwave(),this.audioMarker=[t,e];var o=document.getElementById(t+e);o.setAttribute("class",r);var a=document.getElementById("audio");a.src=i;var c=this;a.addEventListener("error",function(t){console.log("Logging playback error: "+t),o.setAttribute("class","text-prime"),c.note="Sorry, no audio available",c.showAlert()}),a.play(),a.onended=function(){o.setAttribute("class","text-prime")}},onAdd:function(t){t.preventDefault(),null===this.wordDetails.gl||null===this.wordDetails.defch1?(this.note="Please make sure Grammar Label and Chinese are complete",this.showAlert()):this.addWord(null,1)},addStar:function(t,e){this.$store.dispatch("newStar",{word:t,set:e})},addWord:function(t,e){console.log(t,e,this.wordDetails,this.generalGet[t]);var i=this.selected[0].trim();if(0===e)this.note="Your entry -"+t+"- has been removed from the dictionary",this.showAlert(),this.$store.dispatch("newAdd",{word:t,details:this.wordDetails,set:e});else if(this.generalGet[i])this.wordDetails.added=!1,this.sendAdd(e,i);else{this.wordDetails.added=!0,this.addWait=!0;var n=this;this.$store.dispatch("newAudio",{word:i,chinese:this.wordDetails.defch1,set:e}).then(function(t){console.log("AUDIO RESPONSE",t),t.defch2?t.defch2!==n.wordDetails.defch1&&(n.wordDetails.defch2=t.defch2):console.log("No chinese audio added"),n.sendAdd(e,i),n.addWait=!1})}},sendAdd:function(t,e){this.$store.dispatch("newAdd",{word:e,details:s()({},this.wordDetails),set:t}),this.wordDetails.gl=null,this.wordDetails.defch1=null,this.wordDetails.defch２=""},shuffle:function(t){for(var e=t.length-1;e>0;e--){var i=Math.floor(Math.random()*(e+1)),n=[t[i],t[e]];t[e]=n[0],t[i]=n[1]}return t}},created:function(){this.randomLet(),this.vocabList=this.$store.state.userProfile.vocab,this.$store.getters.isAuthenticated||this.$router.push("login")},beforeMount:function(){this.$store.getters.isAuthenticated||this.$router.push("login")},beforeDestroy:function(){}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dict"},[i("audio",{attrs:{id:"audio"}}),t._v(" "),i("div",{staticClass:"mt-2 bg-prime p-2 head"},[i("div",{attrs:{align:"center"}},[i("b-row",[i("b-col",[i("h3",{staticClass:"text-cream"},[t._v(" Word List ")])])],1)],1)]),t._v(" "),i("div",{staticClass:"bg-grey p-2"},[i("b-row",{staticClass:"mb-2",attrs:{align:"center"}},[i("b-col",[i("b-form-input",{staticStyle:{"font-size":"30px",width:"70%","text-align":"center"},attrs:{align:"center",autocapitalize:"none",autocomplete:"off",id:"type"},on:{focus:function(e){return t.nullClick()},change:function(e){t.selected[2]=null}},model:{value:t.selected[0],callback:function(e){t.$set(t.selected,0,e)},expression:"selected[0]"}})],1)],1),t._v(" "),i("b-row",[i("b-col",{attrs:{align:"center"}},[Object.keys(t.activeQuiz).length>0?i("button",{staticClass:"buttonDiv bg-second p-1",staticStyle:{width:"60px"},on:{click:function(e){return t.changeSelected("q")}}},[i("b-icon-card-checklist",{attrs:{variant:t.getIcon("q"),"font-scale":"1.5"}}),i("br"),i("span",{staticClass:"text-cream",staticStyle:{"font-size":"10pt"}},[t._v("QUIZ")])],1):t._e(),t._v(" "),i("button",{staticClass:"buttonDiv bg-second p-1",staticStyle:{width:"60px"},on:{click:function(e){t.changeSelected("p"),t.getNotes()}}},[i("b-icon-images",{attrs:{variant:t.getIcon("p"),"font-scale":"1.5"}}),i("br"),i("span",{staticClass:"text-cream",staticStyle:{"font-size":"10pt"}},[t._v("PICT")])],1),t._v(" "),i("button",{staticClass:"buttonDiv bg-second p-1",staticStyle:{width:"60px"},on:{click:function(e){return t.changeSelected("*")}}},[i("b-icon-star-fill",{attrs:{variant:t.getIcon("*"),"font-scale":"1.5"}}),i("br"),i("span",{staticClass:"text-cream",staticStyle:{"font-size":"10pt"}},[t._v("STAR")])],1),t._v(" "),t.$store.state.instructor.activeQuiz?i("div",{staticClass:"d-lg-none"},[i("br")]):t._e(),t._v(" "),t.$store.getters.checkQuiz?i("button",{staticClass:"buttonDiv bg-second p-1",staticStyle:{width:"60px"},on:{click:function(e){return t.changeSelected("+")}}},[i("b-icon-arrow-up-circle-fill",{attrs:{variant:t.getIcon("+"),"font-scale":"1.5"}}),i("br"),i("span",{staticClass:"text-cream",staticStyle:{"font-size":"10pt"}},[t._v("ADD")])],1):t._e(),t._v(" "),i("button",{class:t.getSoundButton(),staticStyle:{width:"60px"},on:{click:function(e){return t.tapSound()}}},[i("b-icon-soundwave",{attrs:{variant:t.getSoundwave(),"font-scale":"1.5"}}),i("br"),i("span",{staticClass:"text-cream",staticStyle:{"font-size":"10pt"}},[t._v("TEST")])],1),t._v(" "),i("b-form-select",{staticClass:"bg-second text-cream",staticStyle:{width:"10%","overflow-y":"hidden"},attrs:{options:t.optionsCheck,"select-size":1},on:{change:function(e){t.selected[2]=null}},model:{value:t.selected[1],callback:function(e){t.$set(t.selected,1,e)},expression:"selected[1]"}})],1)],1),t._v(" "),i("b-row",{staticClass:"mt-3",attrs:{align:"center"}},[i("b-col",[i("b-form-group",[i("b-form-radio-group",{staticStyle:{width:"100%",color:"red"},attrs:{id:"btn-radios-2",options:t.optionsR,buttons:"","button-variant":t.color[t.selected[2]],size:"lg",name:"radio-btn-outline"},on:{change:function(e){return t.changeSelected("grade")}},model:{value:t.selected[2],callback:function(e){t.$set(t.selected,2,e)},expression:"selected[2]"}})],1)],1)],1)],1),t._v(" "),"p"!==t.selected[1]||t.showPictures?t._e():i("div",{attrs:{align:"center"}},[i("button",{staticClass:"buttonDiv bg-success px-3",staticStyle:{width:"100%"},on:{click:function(e){t.showPictures=!t.showPictures}}},[i("b-icon-images",{attrs:{variant:"cream","font-scale":"1.5"}}),t._v(" "),i("span",{staticClass:"text-cream"},[t._v("See all Images")])],1)]),t._v(" "),t.showPictures?i("div",{attrs:{align:"center"}},[i("button",{staticClass:"buttonDiv bg-warn px-3",staticStyle:{width:"100%"},on:{click:function(e){t.showPictures=!t.showPictures}}},[i("b-icon-images",{attrs:{variant:"cream","font-scale":"1.5"}}),t._v(" "),i("span",{staticClass:"text-cream"},[t._v("Hide Images")])],1)]):t._e(),t._v(" "),"*"===t.selected[1]?i("div",{attrs:{align:"center"}},[i("button",{staticClass:"buttonDiv bg-secondary px-3",staticStyle:{width:"100%"},on:{click:function(e){return t.showClear()}}},[i("b-icon-star-fill",{attrs:{variant:"warn","font-scale":"1.5"}}),t._v(" "),i("span",{staticClass:"text-cream"},[t._v(" Clear all stars ")])],1)]):t._e(),t._v(" "),"q"===t.selected[1]?i("div",{attrs:{align:"center"}},[i("button",{staticClass:"buttonDiv bg-secondary px-3",staticStyle:{width:"100%"},on:{click:function(e){return t.showAdd()}}},[i("b-icon-star-fill",{attrs:{variant:"grape-light","font-scale":"1.5"}}),t._v(" "),i("span",{staticClass:"text-cream"},[t._v(" Add all quiz words ")])],1)]):t._e(),t._v(" "),i("transition",{attrs:{name:"board"}},[t.picture?i("DictPict",{attrs:{s3:t.s3,vocabList:t.vocabList,pictWord:t.pictWord,pictCh:t.pictCh,colors:t.getColors(t.pictWord),note:t.getNote(t.pictWord)},on:{pictureFalse:function(e){t.picture=!1}}}):t._e()],1),t._v(" "),t.showPictures?i("div",[i("b-table",{attrs:{striped:"",hover:"",items:t.pictList,fields:t.pields,filter:t.selected,"filter-function":t.filterPics,"head-variant":"dark"},scopedSlots:t._u([{key:"cell(link)",fn:function(e){return[i("h5",[t._v(" "+t._s(e.item.word)+" ")]),t._v(" "),i("h5",[t._v(" "+t._s(e.item.chinese)+" ")]),t._v(" "),i("b-img",{staticStyle:{"max-width":"100px"},attrs:{thumbnail:"",fluid:"",src:t.getImage(e.item.word,e.item.link),alt:t.pictWord}})]}},{key:"cell(def)",fn:function(e){return[i("span",{staticStyle:{color:"green"}},[t._v(" "+t._s(e.value)+" ")]),t._v(" "),i("hr"),t._v("\n       "+t._s(e.item.text)+"\n\n       "),t.getNote(e.item.word)?i("div",{on:{click:function(i){t.picture=!t.picture,t.filterPicture(e.item.word,e.item.chinese),t.showPictures=!t.showPictures}}},[i("hr"),t._v(" "),i("span",{class:t.getColors(e.item.word)},[t._v("    "),i("b-icon-card-image"),t._v("    "+t._s(t.getNote(e.item.word))+" ")],1)]):t._e()]}}])})],1):i("div",{staticClass:"mb-0"},[i("b-table",{attrs:{striped:"",hover:"",items:t.tableItems,fields:t.fields,filter:t.selected,"filter-function":t.filterTable,"show-empty":"",fixed:"","head-variant":"dark"},scopedSlots:t._u([{key:"cell(english)",fn:function(e){return[i("b-row",{attrs:{"no-gutters":""}},[i("b-col",{attrs:{cols:"3"}},[e.item.Star?[i("b-icon-star-fill",{attrs:{variant:"warn"},on:{click:function(i){return t.addStar(e.value,0)}}}),t._v(" "),i("span",{staticClass:"d-lg-none"},[t._v("   "),i("br")])]:[i("b-icon-star",{on:{click:function(i){return t.addStar(e.value,1)}}}),t._v("   "),i("br",{staticClass:"d-lg-none"})],t._v(" "),i("b-icon-card-image",{attrs:{variant:t.getVariant(e.item.Picture,e.value)},on:{click:function(i){t.picture=!t.picture,t.filterPicture(e.value,e.item.Chinese)}}}),t._v("    "),i("br",{staticClass:"d-lg-none"})],2),t._v(" "),i("b-col",[1!==t.soundCount?i("span",{attrs:{id:e.value+"_en/"},on:{click:function(i){return t.playAudio(e.value,"_en/",e.item.mp3en,!0)}}},[t._v(" "+t._s(e.value)+" "),i("br"),t._v(" ("+t._s(e.item.Gr)+") ")]):i("span",{attrs:{align:"center"}},[i("b-icon-soundwave",{staticClass:"text-prime",attrs:{"font-scale":"1.5",id:e.value+"_en/"},on:{click:function(i){return t.playAudio(e.value,"_en/",e.item.mp3en,!1)}}})],1)])],1)]}},{key:"cell(chineseext)",fn:function(e){return[i("b-row",[i("b-col",[2!==t.soundCount?i("span",{attrs:{id:e.item.English+"_ch/"},on:{click:function(i){return t.playAudio(e.item.English,"_ch/",e.item.mp3ch,!0)}}},[t._v(" "+t._s(e.value)+" ")]):i("span",{attrs:{align:"center"}},[i("b-icon-soundwave",{staticClass:"text-prime",attrs:{"font-scale":"1.5",id:e.item.English+"_ch/"},on:{click:function(i){return t.playAudio(e.item.English,"_ch/",e.item.mp3ch,!1)}}})],1),t._v(" "),"new"===e.item.Origin?i("b-icon-trash-fill",{staticStyle:{float:"right"},attrs:{variant:"info"},on:{click:function(i){return t.addWord(e.item.English,0)}}}):t._e(),t._v(" "),i("br",{staticClass:"d-lg-none"})],1)],1)]}}],null,!1,1179242421),model:{value:t.visibleRows,callback:function(e){t.visibleRows=e},expression:"visibleRows"}})],1),t._v(" "),i("transition",{attrs:{name:"board"}},[!1===t.addWait&&t.visibleRows.length<5&&null!==t.selected[0]&&t.selected[0].length>1&&!t.visibleRows.find(function(e){return e.English===t.selected[0]})&&null===t.selected[1]&&t.$store.getters.checkQuiz?i("div",{staticClass:"bg-third p-2"},[i("b-form",{on:{submit:t.onAdd}},[i("b-input-group",{staticClass:"my-2 p-6"},[i("b-input-group-prepend",{attrs:{inline:"","is-text":""}},[i("b-icon",{attrs:{icon:"hash"}})],1),t._v(" "),i("b-form-input",{attrs:{disabled:""},model:{value:t.selected[0],callback:function(e){t.$set(t.selected,0,e)},expression:"selected[0]"}})],1),t._v(" "),i("b-input-group",{staticClass:"my-2 p-6",attrs:{label:"Chinese","label-for":"exampleInput2"}},[i("b-input-group-prepend",{attrs:{inline:"","is-text":""}},[i("b-icon",{attrs:{icon:"filter-left"}})],1),t._v(" "),i("b-form-textarea",{attrs:{placeholder:"Add Chinese",rows:"2"},model:{value:t.wordDetails.defch1,callback:function(e){t.$set(t.wordDetails,"defch1",e)},expression:"wordDetails.defch1"}})],1),t._v(" "),i("b-row",[i("b-col",{attrs:{align:"center"}},[i("b-form-select",{staticClass:"bg-grey",staticStyle:{width:"100%","overflow-y":"hidden"},attrs:{options:t.optionsG,"select-size":1},model:{value:t.wordDetails.gl,callback:function(e){t.$set(t.wordDetails,"gl",e)},expression:"wordDetails.gl"}}),t._v(" "),i("button",{staticClass:"buttonDiv bg-info px-3 mt-2",attrs:{type:"submit"}},[i("b-icon-arrow-up-circle-fill",{attrs:{variant:"cream","font-scale":"1.5"}}),t._v(" "),i("span",{staticClass:"text-cream",staticStyle:{"font-weight":"bold"}},[t._v("Add to Dictionary ")])],1)],1)],1)],1)],1):t.addWait?i("div",{staticClass:"p-3 bg-third",attrs:{align:"center"}},[i("h4",{staticClass:"text-prime"},[t._v(" Adding New Word ")]),t._v(" "),i("b-icon",{attrs:{icon:"three-dots",animation:"cylon",variant:"prime","font-scale":"6"}})],1):t._e()]),t._v(" "),i("b-modal",{ref:"alert",attrs:{"hide-header-close":"","no-close-on-esc":"","no-close-on-backdrop":"",align:"center","hide-footer":"",title:"Alert"}},[i("div",{staticClass:"d-block"},[i("h3",[t._v(" "+t._s(t.note)+" ")])]),t._v(" "),i("button",{staticClass:"buttonDiv mt-3 bg-alert text-cream",staticStyle:{width:"60%"},on:{click:function(e){return t.hideAlert("alert")}}},[t._v("Close")])]),t._v(" "),i("b-modal",{ref:"clear",attrs:{"hide-header-close":"","no-close-on-esc":"","no-close-on-backdrop":"",align:"center","hide-footer":"",title:"Alert"}},[i("div",{staticClass:"d-block"},[i("h3",[t._v(" Are you sure you want to clear your star list? ")])]),t._v(" "),i("button",{staticClass:"buttonDiv mt-3 bg-alert text-cream",staticStyle:{width:"60%"},on:{click:function(e){return t.hideClear("clear")}}},[t._v("Clear")]),t._v(" "),i("button",{staticClass:"buttonDiv mt-3 bg-secondary text-cream",staticStyle:{width:"60%"},on:{click:function(e){return t.hideClear("cancel")}}},[t._v("Cancel")])]),t._v(" "),i("b-modal",{ref:"add",attrs:{"hide-header-close":"","no-close-on-esc":"","no-close-on-backdrop":"",align:"center","hide-footer":"",title:"Alert"}},[i("div",{staticClass:"d-block"},[i("h3",[t._v(" Would you like to add all quiz words to your star list? ")])]),t._v(" "),i("button",{staticClass:"buttonDiv mt-3 bg-grape text-cream",staticStyle:{width:"60%"},on:{click:function(e){return t.hideAdd("add")}}},[t._v("Add")]),t._v(" "),i("button",{staticClass:"buttonDiv mt-3 bg-secondary text-cream",staticStyle:{width:"60%"},on:{click:function(e){return t.hideAdd("cancel")}}},[t._v("Cancel")])])],1)},staticRenderFns:[]};var u=i("VU/8")(c,l,!1,function(t){i("tr4s")},"data-v-4c0255c2",null);e.default=u.exports},Yobk:function(t,e,i){var n=i("77Pl"),s=i("qio6"),r=i("xnc9"),o=i("ax3d")("IE_PROTO"),a=function(){},c=function(){var t,e=i("ON07")("iframe"),n=r.length;for(e.style.display="none",i("RPLV").appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;n--;)delete c.prototype[r[n]];return c()};t.exports=Object.create||function(t,e){var i;return null!==t?(a.prototype=n(t),i=new a,a.prototype=null,i[o]=t):i=c(),void 0===e?i:s(i,e)}},"c/Tr":function(t,e,i){t.exports={default:i("5zde"),__esModule:!0}},c2yy:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Dd8w"),s=i.n(n),r=i("mvHQ"),o=i.n(r),a=i("0xDb"),c=i("gyMJ"),l={name:"DictPict",props:{s3:String,pictWord:String,pictCh:String,vocabList:String,note:String,colors:String},data:function(){return{imageData:null,msg:"Action Complete",waiting:!1,newWord:{word:this.pictWord,text:null,def:null,chinese:this.pictCh,link:null,code:this.codeGen(),vocab:this.vocabList,note:null,status:null}}},computed:{pictGet:function(){return console.log("pictGet",this.$store.state.setRecord.dictRecord),this.$store.getters.pictGet},getPict:function(){if("add"===this.newWord.link)return"https://vocab-lms.s3-ap-northeast-1.amazonaws.com/public/add.jpg";if(this.newWord.link){var t=this.s3+this.$store.state.userProfile.userID+"/"+this.newWord.vocab+"/"+this.pictWord+this.newWord.link+".jpg";return console.log(t),t}return"https://vocab-lms.s3-ap-northeast-1.amazonaws.com/public/standin.png"}},methods:{browse:function(){document.getElementById("file").click()},showModal:function(){this.$refs.success.show()},showDelete:function(){this.$refs.delete.show()},hideModal:function(t){"success"===t?this.$refs.success.hide():"cancel"===t?(this.$refs.delete.hide(),this.msg=null):(this.$refs.delete.hide(),this.msg=null,this.deletePict(),this.$emit("pictureFalse"))},deleteAlert:function(){this.msg="Are you you sure you want to delete picture?",this.showDelete()},deletePict:function(){this.$store.dispatch("deletePict",{word:this.pictWord}),console.log(this.pictGet),this.showModal()},onSubmit:function(t){t.preventDefault()},codeGen:function(){var t=new Date,e=t.getMinutes().toString()+t.getSeconds().toString();return console.log(e),e},getText:function(t){return this.pictGet[t]?this.pictGet[t].text:""},handleFileUpload:function(){Object(a.c)(document.getElementById("file"))},saveWord:function(){var t=this;return"null"===localStorage.imageData&&null===this.newWord.link?(alert("please add image"),!1):this.newWord.text?this.newWord.def?localStorage.imageData.length<1?void t.$store.dispatch("newPicture",{newWord:o()(t.newWord)}):(this.waiting=!0,Object(c.b)({imageData:localStorage.imageData,wordData:t.newWord,userID:t.$store.state.userProfile.userID}).then(function(e){console.log("response",e.data),localStorage.imageData&&1===e.data.status&&t.$store.dispatch("newPicture",{newWord:o()(t.newWord)}),t.newWord=s()({},e.data.obj),t.waiting=!1,t.msg="New image/sentence added",t.showModal()}).catch(function(e){t.waiting=!1,t.msg="sorry, new image/sentence could not be added",t.showModal(),console.log("Error Registering: ",e)})):(alert("please add definition"),!1):(alert("please add sentence"),!1)}},created:function(){localStorage.imageData=null,this.pictGet[this.pictWord]&&(this.newWord=this.pictGet[this.pictWord],this.newWord.code=this.codeGen())}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dictpict"},[i("div",{staticClass:"bg-safe-light p-2"},[t.waiting?i("div",{attrs:{align:"center"}},[i("h4",{staticClass:"text-prime"},[t._v(" Adding Picture ")]),t._v(" "),i("b-icon",{attrs:{icon:"three-dots",animation:"cylon",variant:"prime","font-scale":"6"}})],1):i("div",[i("b-form",{on:{submit:t.onSubmit}},[i("b-row",[i("b-col",{attrs:{align:"center"}},[t.newWord.link?i("div",{on:{click:function(e){return t.browse()}}},[i("b-img",{staticStyle:{"max-height":"200px"},attrs:{thumbnail:"",fluid:"",src:t.getPict,alt:t.pictWord}})],1):t._e(),t._v(" "),i("div",{staticStyle:{"max-width":"250px"},attrs:{align:"left"}},[i("b-form-file",{ref:"file",attrs:{accept:"image/*",placeholder:"",type:"file",id:"file"},on:{change:function(e){return t.handleFileUpload()}}})],1)]),t._v(" "),i("b-col",{attrs:{md:"7"}},[i("b-input-group",{staticClass:"my-2 p-6",attrs:{"label-for":"exampleInput2"}},[i("b-input-group-prepend",{attrs:{inline:"","is-text":""}},[i("b-icon",{attrs:{icon:"filter-left"}})],1),t._v(" "),i("b-form-textarea",{attrs:{placeholder:"Add Definition / Synonyms",rows:"2"},model:{value:t.newWord.def,callback:function(e){t.$set(t.newWord,"def",e)},expression:"newWord.def"}})],1),t._v(" "),i("b-input-group",{staticClass:"my-2 p-6",attrs:{"label-for":"exampleInput3"}},[i("b-input-group-prepend",{attrs:{inline:"","is-text":""}},[i("b-icon",{attrs:{icon:"filter-left"}})],1),t._v(" "),i("b-form-textarea",{attrs:{placeholder:"Add Sentence",rows:"4"},model:{value:t.newWord.text,callback:function(e){t.$set(t.newWord,"text",e)},expression:"newWord.text"}})],1),t._v(" "),t.note?i("div",[i("hr"),t._v(" "),i("div",{class:t.colors},[t._v("\n                  "+t._s(t.note)+"\n                ")]),t._v(" "),i("br")]):t._e(),t._v(" "),i("div",{staticClass:" mt-2"},[i("button",{staticClass:"buttonDiv bg-success px-3",staticStyle:{width:"120px"},on:{click:function(e){return t.saveWord()}}},[i("b-icon",{attrs:{variant:"cream","font-scale":"1.5",icon:"arrow-up"}}),i("b-icon-card-image",{attrs:{variant:"cream","font-scale":"1.5"}})],1),t._v(" "),t.newWord.link?i("button",{staticClass:"buttonDiv bg-danger px-3",staticStyle:{width:"60px",float:"right"},on:{click:function(e){return t.deleteAlert()}}},[i("b-icon",{attrs:{variant:"cream","font-scale":"1.5",icon:"trash-fill"}})],1):t._e()])],1)],1)],1)],1)]),t._v(" "),i("b-modal",{ref:"success",attrs:{"hide-header-close":"","no-close-on-esc":"","no-close-on-backdrop":"",align:"center","hide-footer":"",title:"Image Adder"}},[i("div",{staticClass:"d-block"},[i("h3",[t._v(" "+t._s(t.msg)+" ")])]),t._v(" "),i("button",{staticClass:"buttonDiv mt-3 bg-warn text-cream",staticStyle:{width:"60%"},on:{click:function(e){return t.hideModal("success")}}},[t._v("Close")])]),t._v(" "),i("b-modal",{ref:"delete",attrs:{"hide-header-close":"","no-close-on-esc":"","no-close-on-backdrop":"",align:"center","hide-footer":"",title:"Delete Picture"}},[i("div",{staticClass:"d-block"},[i("h3",[t._v(" "+t._s(t.msg)+" ")])]),t._v(" "),i("button",{staticClass:"buttonDiv mt-3 bg-grey text-cream",staticStyle:{width:"60%"},on:{click:function(e){return t.hideModal("cancel")}}},[t._v("Cancel")]),t._v(" "),i("button",{staticClass:"buttonDiv mt-3 bg-alert text-cream",staticStyle:{width:"60%"},on:{click:function(e){return t.hideModal("delete")}}},[t._v("Delete")])])],1)},staticRenderFns:[]};var d=i("VU/8")(l,u,!1,function(t){i("QJKF")},"data-v-20dad598",null);e.default=d.exports},dSzd:function(t,e,i){var n=i("e8AB")("wks"),s=i("3Eo+"),r=i("7KvD").Symbol,o="function"==typeof r;(t.exports=function(t){return n[t]||(n[t]=o&&r[t]||(o?r:s)("Symbol."+t))}).store=n},dY0y:function(t,e,i){var n=i("dSzd")("iterator"),s=!1;try{var r=[7][n]();r.return=function(){s=!0},Array.from(r,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!s)return!1;var i=!1;try{var r=[7],o=r[n]();o.next=function(){return{done:i=!0}},r[n]=function(){return o},t(r)}catch(t){}return i}},e6n0:function(t,e,i){var n=i("evD5").f,s=i("D2L2"),r=i("dSzd")("toStringTag");t.exports=function(t,e,i){t&&!s(t=i?t:t.prototype,r)&&n(t,r,{configurable:!0,value:e})}},fBQ2:function(t,e,i){"use strict";var n=i("evD5"),s=i("X8DO");t.exports=function(t,e,i){e in t?n.f(t,e,s(0,i)):t[e]=i}},h65t:function(t,e,i){var n=i("UuGF"),s=i("52gC");t.exports=function(t){return function(e,i){var r,o,a=String(s(e)),c=n(i),l=a.length;return c<0||c>=l?t?"":void 0:(r=a.charCodeAt(c))<55296||r>56319||c+1===l||(o=a.charCodeAt(c+1))<56320||o>57343?t?a.charAt(c):r:t?a.slice(c,c+2):o-56320+(r-55296<<10)+65536}}},msXi:function(t,e,i){var n=i("77Pl");t.exports=function(t,e,i,s){try{return s?e(n(i)[0],i[1]):e(i)}catch(e){var r=t.return;throw void 0!==r&&n(r.call(t)),e}}},qio6:function(t,e,i){var n=i("evD5"),s=i("77Pl"),r=i("lktj");t.exports=i("+E39")?Object.defineProperties:function(t,e){s(t);for(var i,o=r(e),a=o.length,c=0;a>c;)n.f(t,i=o[c++],e[i]);return t}},qyJz:function(t,e,i){"use strict";var n=i("+ZMJ"),s=i("kM2E"),r=i("sB3e"),o=i("msXi"),a=i("Mhyx"),c=i("QRG4"),l=i("fBQ2"),u=i("3fs2");s(s.S+s.F*!i("dY0y")(function(t){Array.from(t)}),"Array",{from:function(t){var e,i,s,d,h=r(t),f="function"==typeof this?this:Array,v=arguments.length,p=v>1?arguments[1]:void 0,g=void 0!==p,b=0,m=u(h);if(g&&(p=n(p,v>2?arguments[2]:void 0,2)),void 0==m||f==Array&&a(m))for(i=new f(e=c(h.length));e>b;b++)l(i,b,g?p(h[b],b):h[b]);else for(d=m.call(h),i=new f;!(s=d.next()).done;b++)l(i,b,g?o(d,p,[s.value,b],!0):s.value);return i.length=b,i}})},tr4s:function(t,e){},"vIB/":function(t,e,i){"use strict";var n=i("O4g8"),s=i("kM2E"),r=i("880/"),o=i("hJx8"),a=i("/bQp"),c=i("94VQ"),l=i("e6n0"),u=i("PzxK"),d=i("dSzd")("iterator"),h=!([].keys&&"next"in[].keys()),f=function(){return this};t.exports=function(t,e,i,v,p,g,b){c(i,e,v);var m,w,_,y=function(t){if(!h&&t in k)return k[t];switch(t){case"keys":case"values":return function(){return new i(this,t)}}return function(){return new i(this,t)}},x=e+" Iterator",C="values"==p,S=!1,k=t.prototype,D=k[d]||k["@@iterator"]||p&&k[p],A=D||y(p),$=p?C?y("entries"):A:void 0,P="Array"==e&&k.entries||D;if(P&&(_=u(P.call(new t)))!==Object.prototype&&_.next&&(l(_,x,!0),n||"function"==typeof _[d]||o(_,d,f)),C&&D&&"values"!==D.name&&(S=!0,A=function(){return D.call(this)}),n&&!b||!h&&!S&&k[d]||o(k,d,A),a[e]=A,a[x]=f,p)if(m={values:C?A:y("values"),keys:g?A:y("keys"),entries:$},b)for(w in m)w in k||r(k,w,m[w]);else s(s.P+s.F*(h||S),e,m);return m}},zQR9:function(t,e,i){"use strict";var n=i("h65t")(!0);i("vIB/")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,i=this._i;return i>=e.length?{value:void 0,done:!0}:(t=n(e,i),this._i+=t.length,{value:t,done:!1})})}});
//# sourceMappingURL=3.595c721df064873200d1.js.map