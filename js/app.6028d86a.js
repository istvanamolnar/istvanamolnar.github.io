(function(e){function t(t){for(var n,o,r=t[0],c=t[1],u=t[2],d=0,m=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(m.length)m.shift()();return i.push.apply(i,u||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],n=!0,r=1;r<s.length;r++){var c=s[r];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=s[0]))}return e}var n={},a={app:0},i=[];function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=n,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var l=c;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0385":function(e,t,s){"use strict";var n=s("895b"),a=s.n(n);a.a},"2aa1":function(e,t,s){"use strict";var n=s("546d"),a=s.n(n);a.a},"3db6":function(e,t,s){"use strict";var n=s("e5a2"),a=s.n(n);a.a},"3fd1":function(e,t,s){},4585:function(e,t,s){},"4c8b":function(e,t,s){},5441:function(e,t,s){"use strict";var n=s("4c8b"),a=s.n(n);a.a},"546d":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("router-view")},i=[],o={name:"app"},r=o,c=s("2877"),u=Object(c["a"])(r,a,i,!1,null,null,null),l=u.exports,d=(s("4989"),s("a89b"),s("8c4f")),m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"main",staticClass:"d-flex align-items-center h-100 m-0 main"},[s("div",{staticClass:"top"},[s("div",{ref:"chooseTheme",staticClass:"h3 p-2 m-0 chose-theme"},[e._v("Choose theme:")]),s("div",{staticClass:"container-fluid bg-transparent p-0 m-0 d-flex justify-content-center"},[s("div",{staticClass:"row m-0 justify-content-center"},e._l(e.themes,(function(t){return s("img",{key:t,staticClass:"theme",attrs:{src:e.imagesURL+"/images/"+t+".png",alt:t},on:{click:e.changeTheme}})})),0)])]),s("div",{staticClass:"bottom"},[s("div",{staticClass:"question-range"},[s("p",{ref:"questionCounter",staticClass:"num-of-questions"},[e._v("number of questions: \n        "),s("output",{ref:"rangeValue",attrs:{id:"rangevalue"}},[e._v(e._s(e.numOfQuestions))])]),s("div",{attrs:{id:"slider"}},[s("input",e._g({ref:"value",staticClass:"bar",attrs:{type:"range",id:"rangeinput",value:"4",min:"4",max:"12",onchange:"rangevalue.value=value"},on:{mousemove:e.changeValue}},e.handlers)),s("span",{staticClass:"highlight"}),s("br")])]),s("div",{staticClass:"d-flex flex-column align-items-center button-container"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.nickname,expression:"nickname"}],ref:"nameInput",staticClass:"text",attrs:{type:"text",onfocus:"this.value = this.value === 'Enter your name' ? '' : this.value",onblur:"this.value = this.value === '' ? 'Enter your name' : this.value",required:""},domProps:{value:e.nickname},on:{input:function(t){t.target.composing||(e.nickname=t.target.value)}}}),s("div",{ref:"startButton",staticClass:"letsplay btn btn-success",on:{click:function(t){return e.startGame()}}},[e._v("Let's play!")])])]),s("welcome-page"),s("img",{staticClass:"manage-questions",attrs:{src:e.imagesURL+"/images/settings.png"},on:{click:function(t){return e.$router.push("manage")}}}),s("a",{attrs:{href:"https://gitlab.com/istvanamolnar/whatistheoutput-fe",target:"_blank"}},[s("img",{staticClass:"gitlab-icon",attrs:{src:e.imagesURL+"/images/gitlab.png"}})])],1)},f=[],h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"welcome-page",staticClass:"modal fade p-3",attrs:{id:"welcomepage",tabindex:"-1",role:"dialog"}},[e._m(0)])},p=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"modal-dialog mx-auto my-3 welcome-container",attrs:{role:"document"}},[s("div",{staticClass:"welcome-content modal-content d-flex flex-column align-items-center"},[s("div",{staticClass:"modal-body py-0"},[s("div",{staticClass:"welcome-text"},[e._v("Welcome to")]),s("div",{staticClass:"welcome-text"},[e._v("What Is The Output quiz!")]),s("div",{staticClass:"rules my-3"},[e._v("In this game, you will get tricky JavaScript interview questions.")]),s("div",{staticClass:"rules"},[e._v("Afterwards, you can claim your well deserved reward, according to your score.")]),s("div",{staticClass:"rules my-2 font-weight-bold"},[e._v("Have fun!")])]),s("div",{staticClass:"okay-button btn btn-success mb-3",attrs:{"data-dismiss":"modal"}},[e._v("Okay")])])])}],g={name:"WelcomePage"},v=g,b=(s("2aa1"),Object(c["a"])(v,h,p,!1,null,"ee55573c",null)),C=b.exports,w=s("bc3a"),y=s.n(w),x=s("1157"),k=s.n(x),_={name:"SelectTheme",components:{"welcome-page":C},data:function(){var e=this;return{nickname:"Enter your name",numOfQuestions:4,imagesURL:"https://raw.githubusercontent.com/istvanamolnar/istvanamolnar.github.io/master",theme:"d-bicycles",themes:["d-bicycles","d-shattered","l-alchemy","l-ahoy"],disabledPlayButton:!1,handlers:{touchmove:e.divTouchmove}}},mounted:function(){setTimeout((function(){k()(document).ready((function(){k()("#welcomepage").modal("show")}))}),500),this.$refs.main.style.backgroundImage="url('".concat(this.imagesURL,"/images/d-bicycles.png')"),this.$refs.chooseTheme.style.backgroundColor="rgba(0, 0, 0, 0.6)",this.$refs.chooseTheme.style.color="rgba(255, 255, 255, 0.9)",this.$refs.nameInput.style.backgroundColor="rgba(0, 0, 0)",this.$refs.nameInput.style.color="#009b48",this.$refs.questionCounter.style.backgroundColor="rgba(0, 0, 0, 0.9)",this.$refs.questionCounter.style.color="rgba(255, 255, 255, 0.9)",this.$refs.rangeValue.style.color="#3ca744",this.$refs.startButton.style.backgroundColor="#009b48",this.$refs.startButton.style.color="rgba(255, 255, 255, 0.9)"},methods:{changeValue:function(){this.numOfQuestions=this.$refs.value.value,this.$refs.rangeValue.value>9?this.$refs.rangeValue.style.color="#f00":this.$refs.rangeValue.value>6?this.$refs.rangeValue.style.color="#ffd500":this.$refs.rangeValue.style.color="#3ca744"},startGame:function(){var e=this;if(this.numOfQuestions=this.$refs.value.value,""===this.$refs.nameInput.value||"Enter your name"===this.$refs.nameInput.value||this.disabledPlayButton){var t="rgb(0, 0, 0)"===this.$refs.nameInput.style.backgroundColor;this.$refs.nameInput.style.backgroundColor=t?"rgb(255, 255, 255)":"rgb(0, 0, 0)"}else this.disabledPlayButton=!0,Pe.user={game:"whatistheoutput",name:this.nickname,theme:this.theme,themes:["d-bicycles","d-shattered","l-alchemy","l-ahoy"],currentGame:{answers:[],numOfQuestions:this.numOfQuestions,questions:[],score:0}},y.a.get("".concat("https://k607d0xw9g.execute-api.eu-central-1.amazonaws.com/prod","/whatistheoutput?numOfQuestions=").concat(this.numOfQuestions),{crossdomain:!0}).then((function(e){Pe.user.currentGame.questions=e.data})).then((function(){return e.$router.push("letsplay")})).catch((function(e){return console.log(e)}))},changeTheme:function(e){this.theme=e.target.alt,"d"===this.theme[0]?(this.$refs.nameInput.style.backgroundColor="rgb(0, 0, 0)",this.$refs.nameInput.style.color="#009b48",this.$refs.chooseTheme.style.backgroundColor="rgba(0, 0, 0, 0.6)",this.$refs.chooseTheme.style.color="#fff",this.$refs.questionCounter.style.backgroundColor="rgba(0, 0, 0, 0.6)",this.$refs.questionCounter.style.color="rgba(255, 255, 255, 0.9)"):"l"===this.theme[0]?(this.$refs.nameInput.style.backgroundColor="rgb(255, 255, 255)",this.$refs.nameInput.style.color="#009b48",this.$refs.chooseTheme.style.backgroundColor="rgba(255, 255, 255, 0.6)",this.$refs.chooseTheme.style.color="#000",this.$refs.questionCounter.style.backgroundColor="rgba(255, 255, 255, 0.9)",this.$refs.questionCounter.style.color="rgba(0, 0, 0, 0.9)"):console.log("Something went wrong"),this.$refs.main.style.backgroundImage="url('".concat(this.imagesURL,"/images/").concat(this.theme,".png')")},divTouchmove:function(){this.numOfQuestions=this.$refs.value.value,this.$refs.rangeValue.value>9?this.$refs.rangeValue.style.color="#f00":this.$refs.rangeValue.value>6?this.$refs.rangeValue.style.color="#ffd500":this.$refs.rangeValue.style.color="#3ca744"}}},$=_,q=(s("8456"),Object(c["a"])($,m,f,!1,null,"3d4fadcb",null)),Q=q.exports,O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.user?s("div",{ref:"mainContainer",staticClass:"main-container d-flex flex-column align-items-center m-auto h-100"},[s("div",{ref:"title",staticClass:"title"},[e._v("What Is The Output?")]),e.currentQuestion?s("div",{ref:"quizContainer",staticClass:"mx-auto d-flex align-items-center quiz-container"},[s("div",{ref:"questionCounter",staticClass:"score text-center"},[e._v("\n      Question: "+e._s(e.user.currentGame.numOfQuestions-e.user.currentGame.questions.length)+" / "+e._s(e.user.currentGame.numOfQuestions)+"\n      "),s("br"),e._v("Score: "+e._s(e.user.currentGame.score)+"\n    ")]),s("question-field",{key:e.currentQuestion.question,staticClass:"m-auto",attrs:{questionText:e.currentQuestion.question}}),s("div",{staticClass:"answers-actionbuttons-container d-flex flex-column"},[s("answers-field",{staticClass:"mx-auto p-2",attrs:{selected:e.selected,currentQuestion:e.currentQuestion,mode:e.mode},on:{chosenAnswer:e.handleSelected}}),e.nextButtonRevealed?s("div",{key:e.currentQuestion._id,ref:"buttonContainer",staticClass:"action-buttons mx-auto px-2 py-0 d-flex flex-row justify-content-between"},[s("div",{staticClass:"mx-0 my-1 btn-outline-warning explain",attrs:{"data-toggle":"modal","data-target":"#seedetails"}},[e._v("Explain")]),s("div",{staticClass:"mx-0 my-1 btn-outline-success next",on:{click:function(t){return e.getAQuestion()}}},[e._v("Next")])]):e._e()],1)],1):e._e(),s("div",{ref:"themeSelector",staticClass:"theme-selector"},e._l(e.themes,(function(t){return s("img",{key:t,staticClass:"theme",attrs:{src:e.imagesURL+"/images/"+t+".png",alt:t},on:{click:e.changeTheme}})})),0),s("explain-modal",{key:e.theme,attrs:{description:e.currentQuestion.description,questionText:e.currentQuestion.question}})],1):e._e()},j=[],L=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"questionField",staticClass:"question-field bounce"},[s("highlight-code",{staticClass:"question-text m-auto p-2",attrs:{lang:"javascript"}},[e._v("\n    "+e._s(e.questionText)+"\n  ")])],1)},I=[],P={name:"QuestionField",props:["questionText"]},T=P,E=(s("3db6"),Object(c["a"])(T,L,I,!1,null,"4b2cf247",null)),U=E.exports,R=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.currentQuestion?s("div",{ref:"answersField",staticClass:"container py-2 d-flex flex-column"},e._l(e.currentQuestion.answers,(function(t){return s("div",{key:t._id,ref:t.isCorrect,refInFor:!0,staticClass:"mx-auto my-1 p-0 btn btn-outline-success option",attrs:{"data-id":t._id},on:{click:function(s){return e.selectAnswer(s,t)}}},[s("highlight-code",{staticClass:"m-auto",attrs:{lang:"javascript"}},[e._v("\n      "+e._s(t.answer)+"\n    ")])],1)})),0):e._e()},A=[],S=(s("6762"),s("2fdb"),s("7514"),s("ac6a"),{name:"AnswersField",props:["currentQuestion","mode","selected"],data:function(){return{serverURL:"https://k607d0xw9g.execute-api.eu-central-1.amazonaws.com/prod",theme:Pe.user.theme}},mounted:function(){var e=this;"manage"===this.mode?(this.$refs[!0][0].classList.add("btn-success","active"),this.$refs[!1].forEach((function(e){e.classList.add("disabled")}))):"summary"===this.mode&&(this.$refs[!0][0].classList.add("btn-success","active"),this.$refs[!1].forEach((function(t){t.dataset.id===e.selected._id?(t.classList.remove("btn-outline-success"),t.classList.add("btn-danger","active")):t.classList.add("disabled")})))},methods:{selectAnswer:function(e,t){var s=this;if(null===this.selected){this.$emit("chosenAnswer",t);var n=this.currentQuestion.answers.find((function(e){return e._id===t._id})),a=this.$refs[!0][0];a.dataset.id===n._id?(a.classList.remove("btn-outline-success"),a.classList.add("active"),this.$refs[!1].forEach((function(e){return e.classList.add("disabled")}))):(a.classList.add("disabled"),this.$refs[!1].forEach((function(e){e.classList.add(e.dataset.id===t._id?"active":"disabled")}))),setTimeout((function(){a.classList.add("bounce-in","active"),a.classList.remove("disabled");for(var e=1;e<5;e++)setTimeout((function(){a.className.includes("active")?(a.classList.remove("active"),a.classList.add("btn-outline-success","disabled")):(a.classList.remove("btn-outline-success","disabled"),a.classList.add("active"))}),500*e);!1===n.isCorrect&&s.$refs[!1].forEach((function(e){e.dataset.id===n._id?(e.classList.remove("btn-outline-success","btn-success"),e.classList.add("btn-danger","bounce-out")):e.classList.add("disabled")}))}),1500)}}}}),G=S,z=(s("d279"),Object(c["a"])(G,R,A,!1,null,"0d4f3518",null)),B=z.exports,N=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"modal fade",attrs:{id:"seedetails",tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered d-flex justify-content-center align-items-center",attrs:{role:"document"}},[s("div",{ref:"title",staticClass:"modal-content"},[s("div",{staticClass:"modal-header mx-auto p-1"},[s("div",{attrs:{id:"DetailsLabel"}},[s("highlight-code",{staticClass:"m-auto p-1 explain-code",attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.questionText)+"\n          ")])],1)]),s("div",{ref:"details",staticClass:"modal-body mx-auto explanation"},[s("p",{staticClass:"m-0"},[e._v(e._s(e.description))])]),s("button",{staticClass:"btn btn-success mx-auto mb-3 font-weight-bold",attrs:{type:"button","data-dismiss":"modal"}},[e._v("Thanks")])])])])},V=[],D={name:"ExplainModal",props:["description","questionText"],data:function(){return{theme:Pe.user.theme}},mounted:function(){"d"===this.theme[0]?(this.$refs.title.style.backgroundColor="#0f0f0f",this.$refs.details.style.color="#bbb",this.$refs.details.style.backgroundColor="#0f0f0f"):"l"===this.theme[0]&&(this.$refs.title.style.backgroundColor="#f0f0f0",this.$refs.details.style.color="#444",this.$refs.details.style.backgroundColor="#f0f0f0")}},F=D,W=(s("b9f2"),Object(c["a"])(F,N,V,!1,null,"4d3210e2",null)),M=W.exports,H={name:"QuizArea",components:{"answers-field":B,"question-field":U,"explain-modal":M},data:function(){return{currentQuestion:Object,imagesURL:"https://raw.githubusercontent.com/istvanamolnar/istvanamolnar.github.io/master",mode:"quiz",nextButtonRevealed:!1,scoreCounter:0,selected:null,theme:Pe.user.theme,themes:["d-bicycles","d-shattered","l-alchemy","l-ahoy"],user:Pe.user}},created:function(){this.getAQuestion()},mounted:function(){this.$refs.mainContainer.style.backgroundImage="url('".concat("https://raw.githubusercontent.com/istvanamolnar/istvanamolnar.github.io/master","/images/").concat(Pe.user.theme,".png')"),"d"===this.theme[0]?(this.$refs.quizContainer.style.backgroundColor="#111",this.$refs.quizContainer.style.color="#eee",this.$refs.title.style.color="#ddd",this.$refs.questionCounter.style.backgroundColor="#111",this.$refs.questionCounter.style.color="#ddd"):"l"===this.theme[0]&&(this.$refs.quizContainer.style.backgroundColor="#eee",this.$refs.quizContainer.style.color="#333",this.$refs.title.style.color="#222",this.$refs.questionCounter.style.backgroundColor="#eee",this.$refs.questionCounter.style.color="#222")},methods:{changeTheme:function(e){Pe.user.theme=e.target.alt,this.theme=e.target.alt,this.$refs.mainContainer.style.backgroundImage="url('".concat("https://raw.githubusercontent.com/istvanamolnar/istvanamolnar.github.io/master","/images/").concat(Pe.user.theme,".png')"),"d"===this.theme[0]?(this.$refs.quizContainer.style.backgroundColor="#111",this.$refs.quizContainer.style.color="#eee",this.$refs.title.style.color="#ddd",this.$refs.questionCounter.style.color="#ddd",this.$refs.questionCounter.style.backgroundColor="#111"):"l"===this.theme[0]?(this.$refs.quizContainer.style.backgroundColor="#eee",this.$refs.quizContainer.style.color="#333",this.$refs.title.style.color="#222",this.$refs.questionCounter.style.color="#222",this.$refs.questionCounter.style.backgroundColor="#eee"):console.log("Something went wrong")},getAQuestion:function(){this.nextButtonRevealed=!1,this.selected=null,0===this.user.currentGame.questions.length?(delete Pe.user.currentGame.questions,this.finishGame()):(this.scoreCounter=Date.now(),this.currentQuestion=this.user.currentGame.questions[0],this.user.currentGame.questions=this.user.currentGame.questions.slice(1))},handleSelected:function(e){var t=this;this.selected?(this.currentQuestion=null,this.getAQuestion()):(this.selected=e,Pe.user.currentGame.answers.push({answers:this.currentQuestion.answers,question:this.currentQuestion.question,selectedAnswer:e,description:this.currentQuestion.description}),setTimeout((function(){t.nextButtonRevealed=!0}),1499),setTimeout((function(){!0===e.isCorrect&&(Pe.user.currentGame.score+=Math.floor((Date.now()-t.scoreCounter)/100))}),1500))},finishGame:function(){this.$router.push("summary")}}},Z=H,Y=(s("7984"),Object(c["a"])(Z,O,j,!1,null,"6f942be1",null)),J=Y.exports,X=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.theme?s("div",{ref:"claimContainer",staticClass:"container-fluid align-items-center claim-container"},[s("transition",{attrs:{name:"slide-fade"}},[s("div",{ref:"claimBackground",staticClass:"d-flex flex-column align-items-center claim-background"},[s("transition",{attrs:{name:"bounceIn"}},[e.show?s("div",{ref:"claimHeader",staticClass:"d-flex flex-column justify-content-center"},[s("h1",{staticClass:"claim-header font-weight-bold"},[e._v("Well done "+e._s(e.name)+"!")])]):e._e()]),s("div",{staticClass:"d-flex align-items-center justify-content-center"},[s("h2",{ref:"claimScore",staticClass:"claim-score"},[e._v("Your score is:")]),s("transition",{attrs:{name:"bounceIn"}},[e.show?s("div",{staticClass:"final-score"},[e._v(e._s(e.score))]):e._e()])],1),s("h3",{ref:"claimText",staticClass:"claim-text"},[e._v("\n        You won:\n      ")]),s("div",{staticClass:"lootbox-text"},[e._v("Epic Chest")]),s("img",{staticClass:"treasure-chest",attrs:{src:e.imagesURL+"/images/treasure.png",alt:"treasure"}}),s("transition",{attrs:{name:"bounceIn"}},[e.show?s("div",{staticClass:"mt-3 btn btn-success d-flex justify-content-center align-items-center font-weight-bold claim-button",attrs:{"data-toggle":"modal","data-target":"#rewardpage"}},[e._v("OPEN")]):e._e()]),s("transition",{attrs:{name:"bounceIn"}},[e.show?s("div",{staticClass:"mt-3 btn btn-info d-flex justify-content-center align-items-center font-weight-bold claim-button",attrs:{"data-toggle":"modal","data-target":"#questionSummary"}},[e._v("SUMMARY")]):e._e()])],1)]),s("reward-page"),s("question-summary")],1):e._e()},K=[],ee=(s("7f7f"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"rewardPage",staticClass:"modal fade p-3",attrs:{id:"rewardpage",tabindex:"-2",role:"dialog"}},[e.dogPhoto?s("div",{key:e.dogPhoto.toString(),staticClass:"modal-dialog mx-auto my-3",attrs:{role:"document"}},[s("div",{ref:"rewardContainer",staticClass:"reward-content modal-content d-flex flex-column"},[s("div",{staticClass:"congratulations"},[e._v("Congratulations!")]),s("div",{staticClass:"congratulations"},[e._v("You have won:")]),s("div",{staticClass:"reward"},[e._v("A random dog photo:")]),s("div",{staticClass:"d-flex justify-content-center align-items-center"},[s("img",{staticClass:"dog-photo bounce",attrs:{src:e.dogPhoto,alt:"Random dog photo"}})]),s("div",{staticClass:"d-flex justify-content-center"},[s("div",{staticClass:"btn btn-success finish-button",on:{click:function(t){return e.openImage()}}},[e._v(e._s(e.opened?"New game":"Nice, cheers!"))]),s("div",{staticClass:"btn btn-outline-danger finish-button",on:{click:e.getDogPhoto}},[e._v("I don't like this one")])])])]):e._e()])}),te=[],se={name:"RewardPage",data:function(){return{dogPhoto:null,opened:!1}},mounted:function(){this.getDogPhoto(),this.saveUserData()},methods:{getDogPhoto:function(){var e=this;this.opened=!1,y.a.get("https://dog.ceo/api/breeds/image/random").then((function(t){e.dogPhoto=t.data.message})).catch((function(e){console.log(e)}))},saveUserData:function(){y()({method:"post",url:"".concat("https://k607d0xw9g.execute-api.eu-central-1.amazonaws.com/prod","/user"),data:{name:Pe.user.name,score:Pe.user.currentGame.score,userAnswers:Pe.user.currentGame.answers,game:Pe.user.game}}).then((function(e){return console.log(e.data.message)})).catch((function(e){console.log(e)}))},openImage:function(){this.opened?window.location.href="/":(window.open(this.dogPhoto,"_blank"),this.opened=!0)}}},ne=se,ae=(s("0385"),Object(c["a"])(ne,ee,te,!1,null,"6ac1b3c2",null)),ie=ae.exports,oe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"modal fade h-100 m-0 p-0",attrs:{id:"questionSummary",tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered d-flex justify-content-center align-items-center dialog-container",attrs:{role:"document"}},[s("div",{ref:"title",staticClass:"modal-content summary-container"},[e.answers?s("div",{staticClass:"d-flex flex-column align-items-center summary-background"},[e._m(0),e._l(e.answers,(function(t){return s("div",{key:t._id,ref:"correctContainer",refInFor:!0,staticClass:"d-flex flex-column align-items-center justify-content-center correct-container"},[s("question-field",{staticClass:"mx-auto mt-2",attrs:{questionText:t.question,theme:e.theme}}),s("answers-field",{staticClass:"mx-auto p-2",attrs:{currentQuestion:t,mode:e.mode,selected:t.selectedAnswer,theme:e.theme}}),s("div",{ref:"details",refInFor:!0,staticClass:"modal-body mx-auto hint"},[e._v("\n            "+e._s(t.description)+"\n          ")])],1)}))],2):e._e()])])])},re=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"close-button-container"},[s("button",{staticClass:"btn btn-info close-summary",attrs:{type:"submit","data-dismiss":"modal"}},[e._v("Close")])])}],ce={name:"QuestionSummary",components:{"answers-field":B,"question-field":U},data:function(){return{mode:"summary",answers:Pe.user.currentGame.answers,theme:Pe.user.theme,imagesURL:"https://raw.githubusercontent.com/istvanamolnar/istvanamolnar.github.io/master"}},mounted:function(){"d"===this.theme[0]?(this.$refs.correctContainer.forEach((function(e){return e.style.backgroundColor="#0f0f0f"})),this.$refs.details.forEach((function(e){return e.style.backgroundColor="#0f0f0f"}))):"l"===this.theme[0]&&(this.$refs.correctContainer.forEach((function(e){return e.style.backgroundColor="#f0f0f0"})),this.$refs.details.forEach((function(e){return e.style.backgroundColor="#f0f0f0"})))}},ue=ce,le=(s("5441"),Object(c["a"])(ue,oe,re,!1,null,"5e09ae78",null)),de=le.exports,me={name:"SummaryPage",components:{"reward-page":ie,"question-summary":de},data:function(){return{answers:Pe.user.currentGame.answers,name:Pe.user.name,score:Pe.user.currentGame.score,imagesURL:"https://raw.githubusercontent.com/istvanamolnar/istvanamolnar.github.io/master",show:!1,theme:Pe.user.theme}},mounted:function(){var e=this;this.show=!0,setTimeout((function(){e.$refs.claimContainer.style.backgroundImage="url('".concat(e.imagesURL,"/images/").concat(e.theme,".png')"),"d"===e.theme[0]?(e.$refs.claimHeader.style.color="#ddd",e.$refs.claimScore.style.color="#ddd",e.$refs.claimText.style.color="#ddd"):(e.$refs.claimHeader.style.color="#333",e.$refs.claimScore.style.color="#333",e.$refs.claimText.style.color="#333")}),0)}},fe=me,he=(s("be51"),Object(c["a"])(fe,X,K,!1,null,"f7120b88",null)),pe=he.exports,ge=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"manageContainer",staticClass:"manage-container"},[s("nav",{staticClass:"navbar"},[s("div",{staticClass:"btn btn-success new-question",attrs:{"data-target":"#editquestion","data-toggle":"modal"},on:{click:e.newQuestion}},[e._v("Add new question")])]),e.questions?s("div",{staticClass:"d-flex flex-column align-items-center"},e._l(e.questions,(function(t){return s("div",{key:t._id,ref:t._id,refInFor:!0,staticClass:"d-flex flex-column align-items-center justify-content-center answer-check"},[s("img",{staticClass:"edit-icon",attrs:{src:e.imagesURL+"/images/wrench.png",alt:"Edit icon","data-toggle":"modal","data-target":"#editquestion"},on:{click:function(s){return e.handleQuestion(t)}}}),s("question-field",{staticClass:"question mx-auto mt-2",attrs:{questionText:t.question,theme:e.theme}}),s("answers-field",{staticClass:"answers mx-auto p-2",attrs:{currentQuestion:t,mode:e.mode,theme:e.theme}})],1)})),0):e._e(),s("handle-question",{attrs:{operation:e.operation,pickedQuestion:e.pickedQuestion,theme:e.theme}}),s("img",{staticClass:"manage-questions",attrs:{src:e.imagesURL+"/images/settings.png"},on:{click:function(t){return e.$router.push("/")}}})],1)},ve=[],be=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"modal fade",attrs:{id:"editquestion",tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered d-flex justify-content-center align-items-center",attrs:{role:"document"}},[s("div",{ref:"title",staticClass:"modal-content handle-content"},[s("div",{ref:"details",staticClass:"handlemodal-body mx-auto"},[e.operation?s("div",{staticClass:"handleContainer"},[s("form",{staticClass:"add-question d-flex flex-column align-items-left"},[s("div",{staticClass:"d-flex flex-column mb-2"},[s("label",{attrs:{for:"question"}},[e._v("Question")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.pickedQuestion.question,expression:"pickedQuestion.question"}],staticClass:"question-area",attrs:{type:"text",rows:"3",placeholder:"Enter question here",required:""},domProps:{value:e.pickedQuestion.question},on:{input:function(t){t.target.composing||e.$set(e.pickedQuestion,"question",t.target.value)}}})]),s("div",{staticClass:"mb-2"},[s("label",{attrs:{for:"answers-field"}},[e._v("Answers")]),s("div",{staticClass:"input-group answers-area"},[s("div",{staticClass:"input-group-prepend"},[s("div",{staticClass:"input-group-text"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.pickedQuestion.correctOne,expression:"pickedQuestion.correctOne"}],attrs:{type:"radio",name:"is-correct",value:"0","aria-label":"Answer one",required:""},domProps:{checked:e._q(e.pickedQuestion.correctOne,"0")},on:{change:function(t){return e.$set(e.pickedQuestion,"correctOne","0")}}})])]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.pickedQuestion.answers[0].answer,expression:"pickedQuestion.answers[0].answer"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Answer one",required:""},domProps:{value:e.pickedQuestion.answers[0].answer},on:{input:function(t){t.target.composing||e.$set(e.pickedQuestion.answers[0],"answer",t.target.value)}}})]),s("div",{staticClass:"input-group"},[s("div",{staticClass:"input-group-prepend"},[s("div",{staticClass:"input-group-text"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.pickedQuestion.correctOne,expression:"pickedQuestion.correctOne"}],attrs:{type:"radio",name:"is-correct",value:"1","aria-label":"Answer two",required:""},domProps:{checked:e._q(e.pickedQuestion.correctOne,"1")},on:{change:function(t){return e.$set(e.pickedQuestion,"correctOne","1")}}})])]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.pickedQuestion.answers[1].answer,expression:"pickedQuestion.answers[1].answer"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Answer two",required:""},domProps:{value:e.pickedQuestion.answers[1].answer},on:{input:function(t){t.target.composing||e.$set(e.pickedQuestion.answers[1],"answer",t.target.value)}}})]),s("div",{staticClass:"input-group"},[s("div",{staticClass:"input-group-prepend"},[s("div",{staticClass:"input-group-text"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.pickedQuestion.correctOne,expression:"pickedQuestion.correctOne"}],attrs:{type:"radio",name:"is-correct",value:"2","aria-label":"Answer three",required:""},domProps:{checked:e._q(e.pickedQuestion.correctOne,"2")},on:{change:function(t){return e.$set(e.pickedQuestion,"correctOne","2")}}})])]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.pickedQuestion.answers[2].answer,expression:"pickedQuestion.answers[2].answer"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Answer three"},domProps:{value:e.pickedQuestion.answers[2].answer},on:{input:function(t){t.target.composing||e.$set(e.pickedQuestion.answers[2],"answer",t.target.value)}}})]),s("div",{staticClass:"input-group"},[s("div",{staticClass:"input-group-prepend"},[s("div",{staticClass:"input-group-text"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.pickedQuestion.correctOne,expression:"pickedQuestion.correctOne"}],attrs:{type:"radio",name:"is-correct",value:"3","aria-label":"Answer four",required:""},domProps:{checked:e._q(e.pickedQuestion.correctOne,"3")},on:{change:function(t){return e.$set(e.pickedQuestion,"correctOne","3")}}})])]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.pickedQuestion.answers[3].answer,expression:"pickedQuestion.answers[3].answer"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Answer four"},domProps:{value:e.pickedQuestion.answers[3].answer},on:{input:function(t){t.target.composing||e.$set(e.pickedQuestion.answers[3],"answer",t.target.value)}}})]),s("small",{staticClass:"form-text text-muted",attrs:{id:"answerHelp"}},[e._v("\n                Add at least two, up to four answers and select the correct one")])]),s("div",{staticClass:"d-flex flex-column"},[s("label",{attrs:{for:"reference"}},[e._v("Reference")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.pickedQuestion.reference,expression:"pickedQuestion.reference"}],staticClass:"mb-2 form-control",attrs:{type:"email",id:"reference",placeholder:"domain@link"},domProps:{value:e.pickedQuestion.reference},on:{input:function(t){t.target.composing||e.$set(e.pickedQuestion,"reference",t.target.value)}}})]),s("div",{staticClass:"d-flex flex-column mb-2"},[s("label",{attrs:{for:"description"}},[e._v("Description")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.pickedQuestion.description,expression:"pickedQuestion.description"}],staticClass:"description-area",attrs:{type:"text",rows:"3",id:"description",placeholder:"Add explaination",required:""},domProps:{value:e.pickedQuestion.description},on:{input:function(t){t.target.composing||e.$set(e.pickedQuestion,"description",t.target.value)}}})]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.secretCode,expression:"secretCode"}],staticClass:"mb-4 form-control",attrs:{type:"password",placeholder:"Secret code"},domProps:{value:e.secretCode},on:{input:function(t){t.target.composing||(e.secretCode=t.target.value)}}}),s("div",{staticClass:"d-flex justify-content-around w-100"},[s("button",{staticClass:"btn btn-light submit-button",attrs:{type:"submit","data-dismiss":"modal"}},[e._v("Cancel")]),"edit"===e.operation?s("button",{staticClass:"btn btn-danger submit-button",attrs:{type:"submit","data-dismiss":"modal"},on:{click:function(t){return t.preventDefault(),e.deleteQuestion(e.pickedQuestion)}}},[e._v("Remove")]):e._e(),"edit"===e.operation?s("button",{staticClass:"btn btn-primary submit-button",attrs:{type:"submit","data-dismiss":"modal"},on:{click:function(t){return t.preventDefault(),e.editQuestion(e.pickedQuestion)}}},[e._v("Update")]):e._e(),"new"===e.operation?s("button",{staticClass:"btn btn-success submit-button",attrs:{type:"submit","data-dismiss":"modal"},on:{click:function(t){return t.preventDefault(),e.addQuestion(e.pickedQuestion)}}},[e._v("Submit")]):e._e()])])]):e._e()])])])])},Ce=[],we={name:"HandleQuestion",props:["operation","pickedQuestion","theme"],data:function(){return{secretCode:""}},methods:{addQuestion:function(e){":lof4sz"===e.secretCode?y()({data:e,headers:{"x-api-key":"1xW6U1uXOp2FZWUZwg1bR8wVIkg4rBUl6moIBvne"},method:"post",url:"".concat("https://k607d0xw9g.execute-api.eu-central-1.amazonaws.com/prod","/questions")}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})):console.log("access denied!"),this.$emit("resetMethod",0)},deleteQuestion:function(e){e.secretCode=this.secretCode,y()({data:e,headers:{"x-api-key":"1xW6U1uXOp2FZWUZwg1bR8wVIkg4rBUl6moIBvne"},method:"delete",url:"".concat("https://k607d0xw9g.execute-api.eu-central-1.amazonaws.com/prod","/questions?questionId=").concat(e._id)},{crossdomain:!0}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},editQuestion:function(e){e.game="whatistheoutput",e.secretCode=this.secretCode,y()({data:e,headers:{"x-api-key":"1xW6U1uXOp2FZWUZwg1bR8wVIkg4rBUl6moIBvne"},method:"put",url:"".concat("https://k607d0xw9g.execute-api.eu-central-1.amazonaws.com/prod","/questions")}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}}},ye=we,xe=(s("6746"),Object(c["a"])(ye,be,Ce,!1,null,"53f33a5a",null)),ke=xe.exports,_e={name:"ManageQuestions",components:{"answers-field":B,"handle-question":ke,"question-field":U},data:function(){return{mode:"manage",operation:null,questions:[],imagesURL:"https://raw.githubusercontent.com/istvanamolnar/istvanamolnar.github.io/master",serverURL:"https://k607d0xw9g.execute-api.eu-central-1.amazonaws.com/prod",theme:"d-shattered",pickedQuestion:{answers:[{answer:""},{answer:""},{answer:""},{answer:""}],correctOne:null,description:[],question:[],reference:""}}},created:function(){var e=this;y()(this.serverURL+"/whatistheoutput").then((function(t){e.questions=t.data})).catch((function(e){console.log(e)}))},mounted:function(){this.$refs.manageContainer.style.backgroundImage="url('".concat(this.imagesURL,"/images/").concat(this.theme,".png')")},methods:{handleQuestion:function(e){var t=this;this.operation="edit",this.pickedQuestion=e,this.pickedQuestion.answers.forEach((function(e,s){e.isCorrect&&(t.pickedQuestion.correctOne=s)}))},newQuestion:function(){this.operation="new",this.pickedQuestion={answers:[{answer:""},{answer:""},{answer:""},{answer:""}],correctOne:null,description:[],question:[],reference:""}}}},$e=_e,qe=(s("94df"),Object(c["a"])($e,ge,ve,!1,null,"1acd8ae8",null)),Qe=qe.exports;n["a"].use(d["a"]);var Oe=new d["a"]({mode:"history",routes:[{path:"/",name:"start",component:Q},{path:"/letsplay",name:"letsplay",component:J},{path:"/manage",name:"manage",component:Qe},{path:"/summary",name:"summary",component:pe}]}),je=s("c964"),Le=s("4dd1"),Ie=s.n(Le);s("a9ab");s.d(t,"eventBus",(function(){return Pe})),n["a"].use(je["a"],{languages:{javascript:Ie.a}}),n["a"].config.productionTip=!1;var Pe=new n["a"];new n["a"]({router:Oe,render:function(e){return e(l)}}).$mount("#app")},6746:function(e,t,s){"use strict";var n=s("3fd1"),a=s.n(n);a.a},"6db5":function(e,t,s){},7984:function(e,t,s){"use strict";var n=s("f845"),a=s.n(n);a.a},"7fda":function(e,t,s){},8456:function(e,t,s){"use strict";var n=s("9b11"),a=s.n(n);a.a},"895b":function(e,t,s){},"94df":function(e,t,s){"use strict";var n=s("7fda"),a=s.n(n);a.a},"9b11":function(e,t,s){},a89b:function(e,t,s){},b9f2:function(e,t,s){"use strict";var n=s("e991"),a=s.n(n);a.a},be51:function(e,t,s){"use strict";var n=s("4585"),a=s.n(n);a.a},d279:function(e,t,s){"use strict";var n=s("6db5"),a=s.n(n);a.a},e5a2:function(e,t,s){},e991:function(e,t,s){},f845:function(e,t,s){}});
//# sourceMappingURL=app.6028d86a.js.map