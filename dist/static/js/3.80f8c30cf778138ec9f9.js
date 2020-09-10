webpackJsonp([3],{UIH9:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("0xDb"),s=o("gyMJ"),n={name:"Dictionary",props:{s3:String},data:function(){return{fields:[{key:"English",label:"Vocab",sortable:!0},{key:"Gr",label:"Gr.",sortable:!1},{key:"ChineseExt",label:"Chinese",sortable:!0}],fields2:[{key:"English",label:"Vocab",sortable:!0},{key:"ChineseExt",label:"Chinese",sortable:!0}],tableItems:null,selected:["A",null,null],optionsA:[],optionsG:[{value:null,text:"---"},{value:"v.",text:"verbs"},{value:"adj.",text:"adjectives"},{value:"n.",text:"nouns"},{value:"phr.",text:"phrases"},{value:"abbr.",text:"abbreviations"},{value:"prop.",text:"proper nouns"}],optionsR:[{value:null,text:"none"},{value:-2,text:"--"},{value:-1,text:"-"},{value:0,text:"o"},{value:1,text:"+"},{value:2,text:"++"}],color:{2:"safe",1:"third",0:"smoke","-1":"warn","-2":"alert"},entry:!0,imageData:null,newWord:{word:null,text:null},mainProps:{center:!0,fluidGrow:!0,"max-width":"50px",class:"my-5"},vocabList:null}},computed:{wordList:function(){return this.$store.state.dictRecord},imageLink:function(){var t=this.$store.state.userProfile;return this.s3+t.userID+"/"+t.vocab+"/"}},methods:{filterTable:function(t,e){if(null!=e[2]){if(t.totalScore===e[2]&&t.tested)return!0}else{if(null!==e[1])return t.Category===e[0]&&t.Gr===e[1];if(t.Category===e[0])return!0}},alphabet:function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZ";for(var e in t)this.optionsA.push({value:t[e],text:t[e]})},editWord:function(t){this.newWord.word=t},getVariant:function(t){var e="prime";for(var o in this.$store.state.dictRecord)o===t&&(e="safe");return e},playAudio:function(t,e){var o="https://vocab-lms.s3-ap-northeast-1.amazonaws.com/public/"+{tourism:"audio",food:"foodio"}[this.vocabList]+e+t+".mp3";console.log(o),document.getElementById("audio").src=o},onSubmit:function(t){t.preventDefault(),this.saveWord()},handleFileUpload:function(){Object(a.b)(document.getElementById("file"))},saveWord:function(){console.log(localStorage.imageData);var t=this;return Object(s.a)({imageData:localStorage.imageData,word:t.newWord,vocab:t.$store.state.userProfile.vocab,userID:t.$store.state.userProfile.userID}).then(function(e){console.log("response",e.data),t.$store.dispatch("newWord",{newWord:t.newWord}),t.newWord.word="a",t.newWord.text=null,localStorage.imageData=null}).catch(function(t){alert("New word could not be added"),console.log("Error Registering: ",t)})},deleteWord:function(t){this.$store.dispatch("deleteWord",{word:t})}},created:function(){this.alphabet(),this.vocabList=this.$store.state.userProfile.vocab,this.tableItems=this.$store.getters.makeList,this.$store.getters.isAuthenticated||this.$router.push("login")},beforeMount:function(){this.$store.getters.isAuthenticated||this.$router.push("login")},beforeDestroy:function(){}},r={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"dict"},[o("audio",{attrs:{id:"audio",autoplay:""}}),t._v(" "),o("div",{staticClass:"mt-2 bg-second p-2",attrs:{align:"center"}},[t.newWord.word?o("div",[o("b-row",{attrs:{"align-h":"end"}},[o("b-col",{attrs:{cols:"6"}},[o("h3",{staticClass:"text-cream"},[t._v(" My Words ")])]),t._v(" "),o("b-col",{attrs:{cols:"3"}},[o("button",{staticClass:"buttonDiv bg-prime px-3",staticStyle:{width:"60px",float:"right"},on:{click:function(e){t.newWord.word=null}}},[o("b-icon-card-list",{attrs:{variant:"cream","font-scale":"1.5"}})],1)])],1)],1):o("div",[o("b-row",{attrs:{"align-h":"end"}},[o("b-col",{attrs:{cols:"6"}},[o("h2",{staticClass:"text-cream"},[t._v(" Word List ")])]),t._v(" "),o("b-col",{attrs:{cols:"3"}},[o("button",{staticClass:"buttonDiv bg-warn px-3",staticStyle:{width:"60px",float:"right"},on:{click:function(e){t.newWord.word="a"}}},[o("b-icon-images",{attrs:{variant:"cream","font-scale":"1.5"}})],1)])],1)],1)]),t._v(" "),t.newWord.word?t._e():o("div",{staticClass:"bg-grey p-2"},[o("b-row",[o("b-col",[t._v("\n        Search by Letter:\n        "),o("b-form-select",{staticClass:"bg-warn-light",attrs:{options:t.optionsA,"select-size":7},model:{value:t.selected[0],callback:function(e){t.$set(t.selected,0,e)},expression:"selected[0]"}})],1),t._v(" "),o("b-col",[t._v("\n        Search by Grammar:\n        "),o("b-form-select",{staticClass:"bg-third",staticStyle:{"overflow-y":"hidden"},attrs:{options:t.optionsG,"select-size":7},model:{value:t.selected[1],callback:function(e){t.$set(t.selected,1,e)},expression:"selected[1]"}})],1)],1),t._v(" "),o("b-row",{staticClass:"mt-3 pb-3",attrs:{align:"center"}},[o("b-col",[t._v("\n          Search by Score:\n          "),o("br"),t._v(" "),o("br"),t._v(" "),o("b-form-group",[o("b-form-radio-group",{staticStyle:{width:"100%",color:"red"},attrs:{id:"btn-radios-2",options:t.optionsR,buttons:"","button-variant":t.color[this.selected[2]],size:"lg",name:"radio-btn-outline"},model:{value:t.selected[2],callback:function(e){t.$set(t.selected,2,e)},expression:"selected[2]"}})],1)],1)],1)],1),t._v(" "),t.newWord.word?t._e():o("div",[o("b-table",{attrs:{striped:"",hover:"",items:t.tableItems,fields:t.fields,filter:t.selected,"filter-function":t.filterTable,"head-variant":"dark","sticky-header":"400px"},scopedSlots:t._u([{key:"cell(english)",fn:function(e){return[o("b-icon-card-image",{attrs:{variant:t.getVariant(e.value)},on:{click:function(o){return t.editWord(e.value)}}}),t._v("  \n           "+t._s(e.value)+"   \n           "),o("b-icon-soundwave",{on:{click:function(o){return t.playAudio(e.value,"_en/")}}}),t._v("  \n           "),o("b-icon-soundwave",{on:{click:function(o){return t.playAudio(e.value,"_ch/")}}}),t._v("  \n       ")]}}],null,!1,3175369952)})],1),t._v(" "),t.newWord.word&&"a"!==t.newWord.word?o("div",{staticClass:"bg-grey p-2"},[o("b-form",{on:{submit:t.onSubmit}},[o("b-input-group",{staticClass:"my-2 p-6"},[o("b-input-group-prepend",{attrs:{inline:"","is-text":""}},[o("b-icon",{attrs:{icon:"hash"}})],1),t._v(" "),o("b-form-input",{attrs:{disabled:""},model:{value:t.newWord.word,callback:function(e){t.$set(t.newWord,"word",e)},expression:"newWord.word"}})],1),t._v(" "),o("b-form-file",{ref:"file",attrs:{accept:"image/*",placeholder:"Change Image",type:"file",id:"file"},on:{change:function(e){return t.handleFileUpload()}}}),t._v(" "),o("b-input-group",{staticClass:"my-2 p-6",attrs:{label:"Student ID:","label-for":"exampleInput2"}},[o("b-input-group-prepend",{attrs:{inline:"","is-text":""}},[o("b-icon",{attrs:{icon:"filter-left"}})],1),t._v(" "),o("b-form-textarea",{attrs:{placeholder:"Add Sentence",rows:"2"},model:{value:t.newWord.text,callback:function(e){t.$set(t.newWord,"text",e)},expression:"newWord.text"}})],1),t._v(" "),o("div",{staticClass:"d-flex justify-content-between"},[o("div",[o("button",{staticClass:"buttonDiv bg-safe px-3",staticStyle:{width:"120px"},attrs:{type:"submit"}},[o("b-icon-plus",{attrs:{variant:"cream","font-scale":"1.5"}})],1)])])],1)],1):t._e(),t._v(" "),t.newWord.word?o("div",[o("table",{staticClass:"table table-striped table-hover table-sm table-borderless"},[o("tbody",t._l(t.wordList,function(e,a){return o("tr",{key:a},[o("td",{staticStyle:{"max-width":"300px"}},[o("span",[o("b-img",{directives:[{name:"bins",rawName:"v-bins",value:t.mainProps,expression:"mainProps"}],attrs:{thumbnail:"",fluid:"",src:t.imageLink+a+".jpg",alt:a}})],1)]),t._v(" "),o("td",[o("h6",[t._v(t._s(a))])]),t._v(" "),o("td",[o("span",{staticClass:"pr-5"},[t._v(t._s(e))])]),t._v(" "),o("td",[o("button",{staticClass:"buttonDiv",on:{click:function(e){t.newWord.word=a,t.newWord.text=t.$store.state.dictRecord[a]}}},[t._v("Edit")]),t._v(" "),o("button",{staticClass:"buttonDiv",on:{click:function(e){return t.deleteWord(a)}}},[t._v(" Delete")])])])}),0)])]):t._e()])},staticRenderFns:[]};var i=o("VU/8")(n,r,!1,function(t){o("knUn")},"data-v-725c2610",null);e.default=i.exports},knUn:function(t,e){}});
//# sourceMappingURL=3.80f8c30cf778138ec9f9.js.map