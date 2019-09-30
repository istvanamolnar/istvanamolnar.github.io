(function(e){function t(t){for(var n,o,r=t[0],c=t[1],u=t[2],d=0,m=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(m.length)m.shift()();return i.push.apply(i,u||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],n=!0,r=1;r<s.length;r++){var c=s[r];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=s[0]))}return e}var n={},a={app:0},i=[];function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=n,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var l=c;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"011b":function(e,t,s){"use strict";var n=s("ce7a"),a=s.n(n);a.a},"0536":function(e,t,s){"use strict";var n=s("bc86"),a=s.n(n);a.a},"0757":function(e,t,s){"use strict";var n=s("3324"),a=s.n(n);a.a},"08a1":function(e,t,s){},"0a59":function(e,t,s){},"2d06":function(e,t,s){},"2e1e":function(e,t,s){"use strict";var n=s("776e"),a=s.n(n);a.a},3324:function(e,t,s){},"33b6":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("router-view")},i=[],o={name:"app"},r=o,c=s("2877"),u=Object(c["a"])(r,a,i,!1,null,null,null),l=u.exports,d=(s("4989"),s("a89b"),s("8c4f")),m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"main",staticClass:"d-flex align-items-center bg-dark h-100 m-0 main"},[s("div",{staticClass:"top"},[s("div",{ref:"chooseTheme",staticClass:"h3 p-2 m-0 chose-theme"},[e._v("Choose theme:")]),s("div",{staticClass:"container-fluid bg-transparent p-0 m-0 d-flex justify-content-center"},[s("div",{staticClass:"row m-0 justify-content-center"},e._l(e.themes,(function(t){return s("img",{key:t,staticClass:"theme",attrs:{src:e.imagesURL+"/images/"+t+".png",alt:t},on:{click:e.changeTheme}})})),0)])]),s("div",{staticClass:"bottom"},[s("div",{staticClass:"questionRange"},[s("p",{ref:"questionCounter",staticClass:"numOfQuestions"},[e._v("number of questions: \n        "),s("output",{attrs:{id:"rangevalue"}},[e._v(e._s(e.numOfQuestions))])]),s("div",{attrs:{id:"slider"}},[s("input",e._g({ref:"value",staticClass:"bar",attrs:{type:"range",id:"rangeinput",value:"8",min:"4",max:"12",onchange:"rangevalue.value=value"},on:{mousemove:function(t){e.numOfQuestions=e.$refs.value.value}}},e.handlers)),s("span",{staticClass:"highlight"}),s("br")])]),s("div",{staticClass:"d-flex flex-column align-items-center button-container"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.nickname,expression:"nickname"}],ref:"nameInput",staticClass:"text",attrs:{type:"text",placeholder:"Enter your name",required:""},domProps:{value:e.nickname},on:{input:function(t){t.target.composing||(e.nickname=t.target.value)}}}),s("div",{ref:"startButton",staticClass:"letsplay btn btn-success",on:{click:function(t){return e.startGame()}}},[e._v("Let's play!")])])]),s("welcome-page")],1)},f=[],h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"welcome-page",staticClass:"modal fade p-3",attrs:{id:"welcomepage",tabindex:"-1",role:"dialog"}},[e._m(0)])},p=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"modal-dialog mx-auto my-3",attrs:{role:"document"}},[s("div",{staticClass:"welcome-content modal-content d-flex flex-column align-items-center"},[s("div",{staticClass:"modal-body pt-0"},[s("div",{staticClass:"welcome-text"},[e._v("Welcome to")]),s("div",{staticClass:"welcome-text"},[e._v("What Is The Output quiz!")]),s("div",{staticClass:"rules my-3"},[e._v("In this game, you will get tricky JavaScript interview questions.")]),s("div",{staticClass:"rules"},[e._v("Afterwards, you can claim your well deserved reward, according to your score.")]),s("div",{staticClass:"rules my-2 font-weight-bold"},[e._v("Have fun!")])]),s("div",{staticClass:"okay-button btn btn-success mb-3",attrs:{"data-dismiss":"modal"}},[e._v("Okay")])])])}],g={name:"WelcomePage"},v=g,b=(s("5b18"),Object(c["a"])(v,h,p,!1,null,"05b80b53",null)),w=b.exports,C=s("bc3a"),x=s.n(C),y=s("1157"),k=s.n(y),_={name:"SelectTheme",components:{"welcome-page":w},data:function(){var e=this;return{nickname:"",numOfQuestions:8,imagesURL:"https://raw.githubusercontent.com/istvanamolnar/istvanamolnar.github.io/master",theme:"d-bicycles",themes:["d-bicycles","d-shattered","l-alchemy","l-restaurant"],disabledPlayButton:!1,handlers:{touchmove:e.divTouchmove}}},mounted:function(){setTimeout((function(){k()(document).ready((function(){k()("#welcomepage").modal("show")}))}),500),this.$refs.main.style.backgroundImage="url('".concat(this.imagesURL,"/images/d-bicycles.png')"),this.$refs.chooseTheme.style.backgroundColor="rgba(0, 0, 0, 0.6)",this.$refs.chooseTheme.style.color="rgba(255, 255, 255, 0.9)",this.$refs.nameInput.style.backgroundColor="rgba(0, 0, 0)",this.$refs.nameInput.style.color="#009b48",this.$refs.questionCounter.style.backgroundColor="rgba(0, 0, 0, 0.9)",this.$refs.questionCounter.style.color="rgba(255, 255, 255, 0.9)",this.$refs.startButton.style.backgroundColor="#009b48",this.$refs.startButton.style.color="rgba(255, 255, 255, 0.9)"},methods:{startGame:function(){var e=this;if(this.numOfQuestions=this.$refs.value.value,this.$refs.nameInput.value&&!this.disabledPlayButton)this.disabledPlayButton=!0,Ne.user={game:"whatistheoutput",name:this.nickname,theme:this.theme,currentGame:{answers:[],numOfQuestions:this.numOfQuestions,questions:[],score:0}},x.a.get("".concat("https://k607d0xw9g.execute-api.eu-central-1.amazonaws.com/prod","/whatistheoutput?numOfQuestions=").concat(this.numOfQuestions),{crossdomain:!0}).then((function(e){Ne.user.currentGame.questions=e.data})).then((function(){return e.$router.push("letsplay")})).catch((function(e){return console.log(e)}));else{var t="rgb(0, 0, 0)"===this.$refs.nameInput.style.backgroundColor;this.$refs.nameInput.style.backgroundColor=t?"rgb(255, 255, 255)":"rgb(0, 0, 0)"}},changeTheme:function(e){this.theme=e.target.alt,"d"===this.theme[0]?(this.$refs.nameInput.style.backgroundColor="rgb(0, 0, 0)",this.$refs.nameInput.style.color="#009b48",this.$refs.chooseTheme.style.backgroundColor="rgba(0, 0, 0, 0.6)",this.$refs.chooseTheme.style.color="#fff",this.$refs.questionCounter.style.backgroundColor="rgba(0, 0, 0, 0.6)",this.$refs.questionCounter.style.color="rgba(255, 255, 255, 0.9)"):"l"===this.theme[0]?(this.$refs.nameInput.style.backgroundColor="rgb(255, 255, 255)",this.$refs.nameInput.style.color="#009b48",this.$refs.chooseTheme.style.backgroundColor="rgba(255, 255, 255, 0.6)",this.$refs.chooseTheme.style.color="#000",this.$refs.questionCounter.style.backgroundColor="rgba(255, 255, 255, 0.9)",this.$refs.questionCounter.style.color="rgba(0, 0, 0, 0.9)"):console.log("Something went wrong"),this.$refs.main.style.backgroundImage="url('".concat(this.imagesURL,"/images/").concat(this.theme,".png')")},divTouchmove:function(){this.numOfQuestions=this.$refs.value.value}}},Q=_,$=(s("7ca4"),Object(c["a"])(Q,m,f,!1,null,"4350648a",null)),q=$.exports,O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.user?s("div",{ref:"main_container",staticClass:"main-container d-flex flex-column m-auto p-0 h-100"},[s("div",{ref:"title",staticClass:"title mx-auto"},[e._v("What Is The Output?")]),s("transition",{attrs:{name:"slide-fade"}},[e.currentQuestion?s("div",{staticClass:"mx-auto my-2 d-flex rotated"},[s("question-field",{staticClass:"m-auto",attrs:{questionText:e.currentQuestion.question,theme:e.theme}}),s("answers-field",{staticClass:"mx-auto p-2",attrs:{selected:e.selected,currentQuestion:e.currentQuestion,theme:e.theme,mode:e.mode},on:{chosenAnswer:e.handleSelected}})],1):e._e()]),s("div",{ref:"questionCounter",staticClass:"score text-center"},[e._v("\n    Question: "+e._s(e.user.currentGame.numOfQuestions-e.user.currentGame.questions.length)+" / "+e._s(e.user.currentGame.numOfQuestions)+"\n    "),s("br"),e._v("Score: "+e._s(e.user.currentGame.score)+"\n  ")])],1):e._e()},j=[],T=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{name:"bounce"}},[e.show?s("div",{ref:"questionField",staticClass:"question-field"},[s("highlight-code",{staticClass:"question-text m-auto p-2",attrs:{lang:"javascript"}},[e._v("\n      "+e._s(e.questionText)+"\n    ")])],1):e._e()])},P=[],N={name:"QuestionField",props:["questionText","theme"],data:function(){return{show:!1}},mounted:function(){var e=this;this.show=!0,setTimeout((function(){e.$refs.questionField.style.backgroundColor="d"===e.theme[0]?"rgba(0, 0, 0, 0.6)":"rgba(255, 255, 255, 0.6)"}),0)}},I=N,A=(s("ebc8"),Object(c["a"])(I,T,P,!1,null,"98a9ef24",null)),E=A.exports,S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.currentQuestion?s("div",{ref:"answersField",staticClass:"container py-2 d-flex flex-column rounded"},[e._l(e.currentQuestion.answers,(function(t){return s("div",{key:t._id,ref:t.isCorrect,refInFor:!0,staticClass:"mx-auto my-1 btn btn-outline-success option",attrs:{"data-id":t._id},on:{click:function(s){return e.selectAnswer(s,t)}}},[s("highlight-code",{staticClass:"m-auto",attrs:{lang:"javascript"}},[e._v("\n      "+e._s(t.answer)+"\n    ")])],1)})),s("div",{ref:"buttonContainer",staticClass:"action-buttons mx-auto p-0 d-flex flex-row justify-content-between"},[s("transition",{attrs:{name:"slide-fade"}},[e.reveal?s("div",{ref:"explainButton",staticClass:"mx-0 my-1 btn-outline-warning explain",attrs:{"data-toggle":"modal","data-target":"#seedetails"},on:{click:function(t){return e.checkSolution(t)}}},[e._v("Explain")]):e._e()]),s("transition",{attrs:{name:"slide-fade"}},[e.reveal?s("div",{ref:"nextButton",staticClass:"mx-0 my-1 btn-outline-success next",on:{click:function(t){return e.getNextQuestion()}}},[e._v("Next")]):e._e()])],1),s("explain-modal",{attrs:{description:e.currentQuestion.description,questionText:e.currentQuestion.question,theme:e.theme}})],2):e._e()},G=[],R=(s("6762"),s("2fdb"),s("7514"),s("ac6a"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"modal fade",attrs:{id:"seedetails",tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered d-flex justify-content-center align-items-center",attrs:{role:"document"}},[s("div",{ref:"title",staticClass:"modal-content"},[s("div",{staticClass:"modal-header mx-auto p-1"},[s("div",{attrs:{id:"DetailsLabel"}},[s("highlight-code",{staticClass:"m-auto p-1 explain-code",attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.questionText)+"\n          ")])],1)]),s("div",{ref:"details",staticClass:"modal-body mx-auto explanation"},[s("p",{staticClass:"m-0"},[e._v(e._s(e.description))])]),s("button",{staticClass:"btn btn-success mx-auto mb-3",attrs:{type:"button","data-dismiss":"modal"}},[e._v("Thanks")])])])])}),U=[],L={name:"ExplainModal",props:["description","questionText","theme"],data:function(){return{showModal:!1}},mounted:function(){"d"===this.theme[0]?(this.$refs.title.style.backgroundColor="#0f0f0f",this.$refs.details.style.color="#bbb",this.$refs.details.style.backgroundColor="#0f0f0f"):"l"===this.theme[0]&&(this.$refs.title.style.backgroundColor="#f0f0f0",this.$refs.details.style.color="#444",this.$refs.details.style.backgroundColor="#f0f0f0")}},B=L,z=(s("ccfa"),Object(c["a"])(B,R,U,!1,null,"9628d010",null)),D=z.exports,F={name:"AnswersField",components:{"explain-modal":D},props:["currentQuestion","mode","picked","selected","theme"],data:function(){return{reveal:!1,serverURL:"https://k607d0xw9g.execute-api.eu-central-1.amazonaws.com/prod"}},mounted:function(){var e=this;this.$refs.answersField.style.backgroundColor="d"===this.theme[0]?"rgba(0, 0, 0, 0.8)":"rgba(255, 255, 255, 0.8)","manage"===this.mode?this.$refs[!0][0].className="mx-auto my-1 p-0 btn btn-success active disabled":"summary"===this.mode&&(this.$refs[!0][0].className="mx-auto my-1 p-0 btn btn-success active",this.$refs[!1].forEach((function(t){t.className=t.dataset.id===e.picked._id?"mx-auto my-1 p-0 btn btn-danger active":"mx-auto my-1 p-0 btn btn-outline-success disabled"})))},methods:{checkSolution:function(e){e.target.className+=" active"},getNextQuestion:function(){this.reveal=!1,this.$emit("chosenAnswer",null)},selectAnswer:function(e,t){var s=this;if(null===this.selected){this.$emit("chosenAnswer",t);var n=this.currentQuestion.answers.find((function(e){return e._id===t._id})),a=this.$refs[!0][0];a.dataset.id===n._id?(a.className="mx-auto my-1 p-0 btn btn-success active",this.$refs[!1].forEach((function(e){return e.className+=" disabled"}))):(a.className+=" disabled",this.$refs[!1].forEach((function(e){e.dataset.id===t._id?e.className="mx-auto my-1 p-0 btn btn-success active":e.className+=" disabled"}))),setTimeout((function(){a.className="mx-auto my-1 p-0 btn btn-success active";for(var e=1;e<5;e++)setTimeout((function(){a.className.includes("active")?a.className="mx-auto my-1 p-0 btn btn-outline-success disabled":a.className="mx-auto my-1 p-0 btn btn-success active"}),500*e);!1===n.isCorrect&&s.$refs[!1].forEach((function(e){e.dataset.id===n._id?e.className="mx-auto my-1 p-0 btn btn-danger active":e.className="mx-auto my-1 p-0 btn btn-outline-success disabled"})),s.reveal=!0}),1500)}}}},M=F,H=(s("011b"),Object(c["a"])(M,S,G,!1,null,"c0e3f5ca",null)),W=H.exports,Y={name:"QuizArea",components:{"answers-field":W,"question-field":E},data:function(){return{currentQuestion:Object,mode:"quiz",scoreCounter:0,selected:null,theme:Ne.user.theme,user:Ne.user}},created:function(){this.getAQuestion()},mounted:function(){this.$refs.main_container.style.backgroundImage="url('".concat("https://raw.githubusercontent.com/istvanamolnar/istvanamolnar.github.io/master","/images/").concat(Ne.user.theme,".png')"),"d"===this.theme[0]?(this.$refs.title.style.color="#ddd",this.$refs.questionCounter.style.color="#ddd"):"l"===this.theme[0]&&(this.$refs.title.style.color="#222",this.$refs.questionCounter.style.color="#222")},methods:{getAQuestion:function(){0===this.user.currentGame.questions.length?(delete Ne.user.currentGame.questions,this.finishGame()):(this.scoreCounter=Date.now(),this.currentQuestion=this.user.currentGame.questions[0],this.user.currentGame.questions=this.user.currentGame.questions.slice(1))},handleSelected:function(e){var t=this;this.selected?(this.selected=null,this.currentQuestion=null,setTimeout((function(){t.getAQuestion()}),400)):(this.selected=e._id,Ne.user.currentGame.answers.push({question:this.currentQuestion.question,answers:this.currentQuestion.answers,selectedAnswer:e,description:this.currentQuestion.description}),setTimeout((function(){!0===e.isCorrect&&(Ne.user.currentGame.score+=Math.floor((Date.now()-t.scoreCounter)/100))}),2e3))},finishGame:function(){this.$router.push("summary")}}},J=Y,Z=(s("5ee0"),Object(c["a"])(J,O,j,!1,null,"1fb08ac2",null)),V=Z.exports,X=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"claimContainer",staticClass:"container-fluid justify-content-center align-items-center claimContainer"},[s("transition",{attrs:{name:"slide-fade"}},[s("div",{ref:"claimBackground",staticClass:"d-flex flex-column align-items-center claimBackground"},[s("transition",{attrs:{name:"bounceIn"}},[e.show?s("div",{ref:"claimHeader",staticClass:"d-flex flex-column align-items-center justify-content-center"},[s("h1",{staticClass:"claimHeader font-weight-bold"},[e._v("Well done "+e._s(e.name)+"!")])]):e._e()]),s("div",{staticClass:"d-flex align-items-center justify-content-center"},[s("h2",{ref:"claimScore",staticClass:"claimScore"},[e._v("Your score is:")]),s("transition",{attrs:{name:"bounceIn"}},[e.show?s("div",{staticClass:"finalScore"},[e._v(e._s(e.score))]):e._e()])],1),s("h3",{ref:"claimText",staticClass:"claimText"},[e._v("\n        You won:\n      ")]),s("div",{staticClass:"lootboxText 2"},[e._v("Epic Chest")]),s("img",{staticClass:"treasure-chest",attrs:{src:e.imagesURL+"/images/treasure.png",alt:"treasure"}}),s("transition",{attrs:{name:"bounceIn"}},[e.show?s("div",{staticClass:"mt-3 btn btn-success d-flex justify-content-center align-items-center font-weight-bold claimButton",attrs:{"data-toggle":"modal","data-target":"#rewardpage"}},[e._v("OPEN")]):e._e()]),s("transition",{attrs:{name:"bounceIn"}},[e.show?s("div",{staticClass:"mt-3 btn btn-info d-flex justify-content-center align-items-center font-weight-bold claimButton",attrs:{"data-toggle":"modal","data-target":"#questionSummary"}},[e._v("SUMMARY")]):e._e()])],1)]),s("reward-page"),s("question-summary")],1)},K=[],ee=(s("7f7f"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"rewardPage",staticClass:"modal fade p-3",attrs:{id:"rewardpage",tabindex:"-2",role:"dialog"}},[e.dogPhoto?s("div",{staticClass:"modal-dialog mx-auto my-3",attrs:{role:"document"}},[s("div",{ref:"rewardContainer",staticClass:"reward-content modal-content d-flex flex-column"},[s("div",{staticClass:"congratulations"},[e._v("Congratulations!")]),s("div",{staticClass:"congratulations"},[e._v("You have won:")]),s("div",{staticClass:"reward"},[e._v("A random dog photo:")]),s("div",{staticClass:"d-flex justify-content-center align-items-center"},[s("img",{staticClass:"dog-photo",attrs:{src:e.dogPhoto,alt:"Random dog photo"}})]),s("div",{staticClass:"d-flex justify-content-center"},[s("div",{staticClass:"btn btn-success finish-button",on:{click:function(t){return e.openImage()}}},[e._v(e._s(e.opened?"New game":"Nice, cheers!"))]),s("div",{staticClass:"btn btn-outline-danger finish-button",on:{click:e.getDogPhoto}},[e._v("I don't like this one")])])])]):e._e()])}),te=[],se={name:"RewardPage",data:function(){return{dogPhoto:String,opened:!1,theme:Ne.user.theme}},mounted:function(){this.getDogPhoto(),this.saveUserData(),"d"===this.theme[0]?(this.$refs.rewardContainer.style.backgroundColor="#333",this.$refs.rewardContainer.style.color="#ddd"):"l"===this.theme[0]&&(this.$refs.rewardContainer.style.backgroundColor="#ddd",this.$refs.rewardContainer.style.color="#333")},methods:{getDogPhoto:function(){var e=this;this.opened=!1,x.a.get("https://dog.ceo/api/breeds/image/random").then((function(t){e.dogPhoto=t.data.message})).catch((function(e){console.log(e)}))},saveUserData:function(){x()({method:"post",url:"".concat("https://k607d0xw9g.execute-api.eu-central-1.amazonaws.com/prod","/user"),data:{name:Ne.user.name,score:Ne.user.currentGame.score,userAnswers:Ne.user.currentGame.answers,game:Ne.user.game}}).catch((function(e){console.log(e)}))},openImage:function(){this.opened?window.location.href="/":(window.open(this.dogPhoto,"_blank"),this.opened=!0)}}},ne=se,ae=(s("0757"),Object(c["a"])(ne,ee,te,!1,null,"2d455797",null)),ie=ae.exports,oe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"modal fade h-100 m-0 p-0",attrs:{id:"questionSummary",tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered d-flex justify-content-center align-items-center",attrs:{role:"document"}},[s("div",{ref:"title",staticClass:"modal-content summary-container"},[e._m(0),e.answers?s("div",{staticClass:"d-flex flex-column align-items-center summary-background"},e._l(e.answers,(function(t){return s("div",{key:t._id,ref:t._id,refInFor:!0,staticClass:"d-flex flex-column align-items-center justify-content-center correct-container"},[s("question-field",{staticClass:"question mx-auto mt-2",attrs:{questionText:t.question,theme:e.theme}}),s("answers-field",{staticClass:"answers mx-auto p-2",attrs:{currentQuestion:t,mode:e.mode,picked:t.selectedAnswer,theme:e.theme}}),s("div",{ref:"details",refInFor:!0,staticClass:"modal-body mx-auto hint"},[e._v("\n            "+e._s(t.description)+"\n          ")])],1)})),0):e._e()])])])},re=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"close-button-container"},[s("button",{staticClass:"btn btn-info close-summary",attrs:{type:"submit","data-dismiss":"modal"}},[e._v("Close")])])}],ce={name:"QuestionSummary",components:{"answers-field":W,"question-field":E},data:function(){return{mode:"summary",answers:Ne.user.currentGame.answers,theme:Ne.user.theme,imagesURL:"https://raw.githubusercontent.com/istvanamolnar/istvanamolnar.github.io/master"}},mounted:function(){"d"===this.theme[0]?this.$refs.title.style.backgroundColor="#0f0f0f":"l"===this.theme[0]&&(this.$refs.title.style.backgroundColor="#f0f0f0")}},ue=ce,le=(s("96c7"),Object(c["a"])(ue,oe,re,!1,null,"9ef091b0",null)),de=le.exports,me={name:"SummaryPage",components:{"reward-page":ie,"question-summary":de},data:function(){return{answers:Ne.user.currentGame.answers,name:Ne.user.name,score:Ne.user.currentGame.score,imagesURL:"https://raw.githubusercontent.com/istvanamolnar/istvanamolnar.github.io/master",show:!1,theme:Ne.user.theme}},mounted:function(){var e=this;this.show=!0,setTimeout((function(){e.$refs.claimContainer.style.backgroundImage="url('".concat(e.imagesURL,"/images/").concat(e.theme,".png')"),"d"===e.theme[0]?(e.$refs.claimHeader.style.color="#ddd",e.$refs.claimScore.style.color="#ddd",e.$refs.claimText.style.color="#ddd"):(e.$refs.claimHeader.style.color="#333",e.$refs.claimScore.style.color="#333",e.$refs.claimText.style.color="#333")}),0)}},fe=me,he=(s("2e1e"),Object(c["a"])(fe,X,K,!1,null,"6fe8fcd5",null)),pe=he.exports,ge=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"manageContainer",staticClass:"manageContainer"},[s("nav",{staticClass:"navbar"},[s("div",{staticClass:"btn btn-success new-question",attrs:{"data-target":"#editquestion","data-toggle":"modal"},on:{click:e.newQuestion}},[e._v("Add new question")])]),e.questions?s("div",{staticClass:"d-flex flex-column align-items-center"},e._l(e.questions,(function(t){return s("div",{key:t._id,ref:t._id,refInFor:!0,staticClass:"d-flex flex-column align-items-center justify-content-center answerCheck"},[s("question-field",{staticClass:"question mx-auto mt-2",attrs:{questionText:t.question,theme:e.theme}}),s("answers-field",{staticClass:"answers mx-auto p-2",attrs:{currentQuestion:t,mode:e.mode,theme:e.theme}}),s("div",[s("img",{staticClass:"edit-icon",attrs:{src:e.imagesURL+"/images/wrench.png",alt:"Edit icon","data-toggle":"modal","data-target":"#editquestion"},on:{click:function(s){return e.handleQuestion(t)}}})])],1)})),0):e._e(),s("handle-question",{attrs:{pickedQuestion:e.pickedQuestion,theme:e.theme}})],1)},ve=[],be=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"modal fade",attrs:{id:"editquestion",tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered d-flex justify-content-center align-items-center",attrs:{role:"document"}},[s("div",{ref:"title",staticClass:"modal-content handle-content"},[s("div",{ref:"details",staticClass:"handlemodal-body mx-auto"},[s("div",{staticClass:"handleContainer"},[s("form",{staticClass:"add-question d-flex flex-column align-items-left"},[s("div",{staticClass:"d-flex flex-column mb-2"},[s("label",{attrs:{for:"question"}},[e._v("Question")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.pickedQuestion.question,expression:"pickedQuestion.question"}],staticClass:"question-area",attrs:{type:"text",rows:"3",placeholder:"Enter question here",required:""},domProps:{value:e.pickedQuestion.question},on:{input:function(t){t.target.composing||e.$set(e.pickedQuestion,"question",t.target.value)}}})]),s("div",{staticClass:"mb-2"},[s("label",{attrs:{for:"answers-field"}},[e._v("Answers")]),s("div",{staticClass:"input-group answers-area"},[s("div",{staticClass:"input-group-prepend"},[s("div",{staticClass:"input-group-text"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.pickedQuestion.correctOne,expression:"pickedQuestion.correctOne"}],attrs:{type:"radio",name:"is-correct",value:"0","aria-label":"Answer one",required:""},domProps:{checked:e._q(e.pickedQuestion.correctOne,"0")},on:{change:function(t){return e.$set(e.pickedQuestion,"correctOne","0")}}})])]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.pickedQuestion.answers[0].answer,expression:"pickedQuestion.answers[0].answer"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Answer one",required:""},domProps:{value:e.pickedQuestion.answers[0].answer},on:{input:function(t){t.target.composing||e.$set(e.pickedQuestion.answers[0],"answer",t.target.value)}}})]),s("div",{staticClass:"input-group"},[s("div",{staticClass:"input-group-prepend"},[s("div",{staticClass:"input-group-text"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.pickedQuestion.correctOne,expression:"pickedQuestion.correctOne"}],attrs:{type:"radio",name:"is-correct",value:"1","aria-label":"Answer two",required:""},domProps:{checked:e._q(e.pickedQuestion.correctOne,"1")},on:{change:function(t){return e.$set(e.pickedQuestion,"correctOne","1")}}})])]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.pickedQuestion.answers[1].answer,expression:"pickedQuestion.answers[1].answer"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Answer two",required:""},domProps:{value:e.pickedQuestion.answers[1].answer},on:{input:function(t){t.target.composing||e.$set(e.pickedQuestion.answers[1],"answer",t.target.value)}}})]),s("div",{staticClass:"input-group"},[s("div",{staticClass:"input-group-prepend"},[s("div",{staticClass:"input-group-text"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.pickedQuestion.correctOne,expression:"pickedQuestion.correctOne"}],attrs:{type:"radio",name:"is-correct",value:"2","aria-label":"Answer three",required:""},domProps:{checked:e._q(e.pickedQuestion.correctOne,"2")},on:{change:function(t){return e.$set(e.pickedQuestion,"correctOne","2")}}})])]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.pickedQuestion.answers[2].answer,expression:"pickedQuestion.answers[2].answer"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Answer three"},domProps:{value:e.pickedQuestion.answers[2].answer},on:{input:function(t){t.target.composing||e.$set(e.pickedQuestion.answers[2],"answer",t.target.value)}}})]),s("div",{staticClass:"input-group"},[s("div",{staticClass:"input-group-prepend"},[s("div",{staticClass:"input-group-text"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.pickedQuestion.correctOne,expression:"pickedQuestion.correctOne"}],attrs:{type:"radio",name:"is-correct",value:"3","aria-label":"Answer four",required:""},domProps:{checked:e._q(e.pickedQuestion.correctOne,"3")},on:{change:function(t){return e.$set(e.pickedQuestion,"correctOne","3")}}})])]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.pickedQuestion.answers[3].answer,expression:"pickedQuestion.answers[3].answer"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Answer four"},domProps:{value:e.pickedQuestion.answers[3].answer},on:{input:function(t){t.target.composing||e.$set(e.pickedQuestion.answers[3],"answer",t.target.value)}}})]),s("small",{staticClass:"form-text text-muted",attrs:{id:"answerHelp"}},[e._v("\n                Add at least two, up to four answers and select the correct one")])]),s("div",{staticClass:"d-flex flex-column"},[s("label",{attrs:{for:"reference"}},[e._v("Reference")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.pickedQuestion.reference,expression:"pickedQuestion.reference"}],staticClass:"mb-2 form-control",attrs:{type:"email",id:"reference",placeholder:"domain@link"},domProps:{value:e.pickedQuestion.reference},on:{input:function(t){t.target.composing||e.$set(e.pickedQuestion,"reference",t.target.value)}}})]),s("div",{staticClass:"d-flex flex-column mb-2"},[s("label",{attrs:{for:"description"}},[e._v("Description")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.pickedQuestion.description,expression:"pickedQuestion.description"}],staticClass:"description-area",attrs:{type:"text",rows:"3",id:"description",placeholder:"Add explaination",required:""},domProps:{value:e.pickedQuestion.description},on:{input:function(t){t.target.composing||e.$set(e.pickedQuestion,"description",t.target.value)}}})]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.secretCode,expression:"secretCode"}],staticClass:"mb-4 form-control",attrs:{type:"password",placeholder:"Secret code"},domProps:{value:e.secretCode},on:{input:function(t){t.target.composing||(e.secretCode=t.target.value)}}}),s("div",{staticClass:"d-flex justify-content-between w-100"},[s("button",{staticClass:"btn btn-light submit-button",attrs:{type:"submit","data-dismiss":"modal"}},[e._v("Cancel")]),s("button",{staticClass:"btn btn-danger submit-button",attrs:{type:"submit","data-dismiss":"modal"},on:{click:function(t){return t.preventDefault(),e.deleteQuestion(e.pickedQuestion)}}},[e._v("Remove")]),s("button",{staticClass:"btn btn-primary submit-button",attrs:{type:"submit","data-dismiss":"modal"},on:{click:function(t){return t.preventDefault(),e.editQuestion(e.pickedQuestion)}}},[e._v("Update")]),s("button",{staticClass:"btn btn-success submit-button",attrs:{type:"submit","data-dismiss":"modal"},on:{click:function(t){return t.preventDefault(),e.addQuestion(e.pickedQuestion)}}},[e._v("Submit")])])])])])])])])},we=[],Ce={name:"HandleQuestion",props:["pickedQuestion","theme"],data:function(){return{secretCode:""}},methods:{addQuestion:function(e){"lof4sz"===e.secretCode?x()({method:"post",headers:{"x-api-key":"1xW6U1uXOp2FZWUZwg1bR8wVIkg4rBUl6moIBvne"},url:"".concat("https://k607d0xw9g.execute-api.eu-central-1.amazonaws.com/prod","/questions"),data:e}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})):console.log("access denied!"),this.$emit("resetMethod",0)},deleteQuestion:function(e){e.secretCode=this.secretCode,x()({method:"delete",url:"".concat("https://k607d0xw9g.execute-api.eu-central-1.amazonaws.com/prod","/questions?questionId=").concat(e._id),data:e},{crossdomain:!0}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},editQuestion:function(e){e.game="whatistheoutput",e.secretCode=this.secretCode,x()({method:"put",url:"".concat("https://k607d0xw9g.execute-api.eu-central-1.amazonaws.com/prod","/questions"),data:e}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}}},xe=Ce,ye=(s("7e82"),Object(c["a"])(xe,be,we,!1,null,"7a7dce68",null)),ke=ye.exports,_e={name:"ManageQuestions",components:{"answers-field":W,"handle-question":ke,"question-field":E},data:function(){return{mode:"manage",questions:[],imagesURL:"https://raw.githubusercontent.com/istvanamolnar/istvanamolnar.github.io/master",serverURL:"https://k607d0xw9g.execute-api.eu-central-1.amazonaws.com/prod",theme:"d-shattered",pickedQuestion:{answers:[{answer:""},{answer:""},{answer:""},{answer:""}],correctOne:null,description:[],question:[],reference:""}}},created:function(){var e=this;x()(this.serverURL+"/whatistheoutput").then((function(t){e.questions=t.data})).catch((function(e){console.log(e)}))},mounted:function(){this.$refs.manageContainer.style.backgroundImage="url('".concat(this.imagesURL,"/images/").concat(this.theme,".png')")},methods:{handleQuestion:function(e){var t=this;this.pickedQuestion=e,this.pickedQuestion.answers.forEach((function(e,s){e.isCorrect&&(t.pickedQuestion.correctOne=s)}))},newQuestion:function(){this.pickedQuestion={answers:[{answer:""},{answer:""},{answer:""},{answer:""}],correctOne:null,description:[],question:[],reference:""}}}},Qe=_e,$e=(s("0536"),Object(c["a"])(Qe,ge,ve,!1,null,null,null)),qe=$e.exports;n["a"].use(d["a"]);var Oe=new d["a"]({mode:"history",routes:[{path:"/",name:"start",component:q},{path:"/letsplay",name:"quiz",component:V},{path:"/manage",name:"manage",component:qe},{path:"/summary",name:"summary",component:pe}]}),je=s("c964"),Te=s("4dd1"),Pe=s.n(Te);s("a9ab");s.d(t,"eventBus",(function(){return Ne})),n["a"].use(je["a"],{languages:{javascript:Pe.a}}),n["a"].config.productionTip=!1;var Ne=new n["a"];new n["a"]({router:Oe,render:function(e){return e(l)}}).$mount("#app")},"5b18":function(e,t,s){"use strict";var n=s("0a59"),a=s.n(n);a.a},"5ee0":function(e,t,s){"use strict";var n=s("b843"),a=s.n(n);a.a},"776e":function(e,t,s){},"7ca4":function(e,t,s){"use strict";var n=s("7fc2"),a=s.n(n);a.a},"7e82":function(e,t,s){"use strict";var n=s("33b6"),a=s.n(n);a.a},"7fc2":function(e,t,s){},"96c7":function(e,t,s){"use strict";var n=s("08a1"),a=s.n(n);a.a},a89b:function(e,t,s){},b843:function(e,t,s){},bc86:function(e,t,s){},ccfa:function(e,t,s){"use strict";var n=s("2d06"),a=s.n(n);a.a},ce7a:function(e,t,s){},e372:function(e,t,s){},ebc8:function(e,t,s){"use strict";var n=s("e372"),a=s.n(n);a.a}});
//# sourceMappingURL=app.ff2c3768.js.map