(this.webpackJsonpmathsclub2=this.webpackJsonpmathsclub2||[]).push([[0],{11:function(e,t,n){},20:function(e,t,n){e.exports=n(27)},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);n(21);var a,i=n(0),s=n.n(i),l=n(16),r=n.n(l),o=(n(26),n(2)),u=n(3),c=n(14),m=n(9),h=n(8),b=(n(11),n(12)),p=n(10),d=function(){function e(t){Object(o.a)(this,e),this.tableName=t,this.questionsToAnswer=[],this.start=1,this.end=12,this.tableName=t,this.generateFullTable()}return Object(u.a)(e,[{key:"generateFullTable",value:function(){for(var e=this.start;e<=this.end;e++)this.questionsToAnswer.push(String(e))}},{key:"isEmpty",value:function(){return 0===this.questionsToAnswer.length}},{key:"getNextEntry",value:function(){var e=this.getRandomPositon(),t=this.questionsToAnswer[e],n=this.questionsToAnswer.indexOf(t,0);return n>-1&&this.questionsToAnswer.splice(n,1),Number(t)}},{key:"getQuestionsRemaining",value:function(){return this.questionsToAnswer.length}},{key:"getRandomPositon",value:function(){var e=this.questionsToAnswer.length-1;return 0+Math.floor(Math.random()*(e-0+1))}}]),e}();!function(e){e.MULTIPLY="*",e.DIVIDE="&divide;"}(a||(a={}));var f=function(){function e(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.MULTIPLY;Object(o.a)(this,e),this.param1=t,this.param2=n,this.operator=i,this.decimails=!1,this.result=void 0,this.blank=void 0,this.result=this.calculateResult(),this.blank=this.getRandomBlank()}return Object(u.a)(e,[{key:"getRandomBlank",value:function(){return 1+Math.floor(3*Math.random())}},{key:"calculateResult",value:function(){switch(this.operator){case a.MULTIPLY:return this.param1*this.param2;case a.DIVIDE:return this.param1/this.param2}}},{key:"getDisplay",value:function(){return this.displayNumber(this.param1,1)+" "+this.operator+" "+this.displayNumber(this.param2,2)+" = "+this.displayNumber(this.result,3)}},{key:"displayNumber",value:function(e,t){return t===this.blank?"__":e.toString()}},{key:"maybe",value:function(){return Math.random()>=.5}},{key:"shuffleParameters",value:function(){if(this.maybe()){var e=this.param1;this.param1=this.param2,this.param2=e}}},{key:"maybeConvertToDivision",value:function(){if(this.maybe()){this.operator=a.DIVIDE;var e=this.param1;this.param1=this.result,this.result=e}}},{key:"convertToDecimals",value:function(){this.maybe()?(this.param1=this.param1/10,this.result=this.result/10):(this.param2=this.param2/10,this.result=this.result/10)}}]),e}(),v=function(){function e(){Object(o.a)(this,e),this.tables=[]}return Object(u.a)(e,[{key:"addTable",value:function(e){this.tables.push(new d(e))}},{key:"getRandomTable",value:function(){return this.tables[this.getRandomTableIndex()]}},{key:"getRandomTableIndex",value:function(){var e=this.tables.length-1;return 0+Math.floor(Math.random()*(e-0+1))}},{key:"getNextSum",value:function(){if(this.isEmpty())throw new Error("Bank has no sums remaining");var e=this.getRandomTable(),t=e.getNextEntry();if(e.isEmpty()){var n=this.tables.indexOf(e,0);n>-1&&this.tables.splice(n,1)}return new f(e.tableName,t)}},{key:"isEmpty",value:function(){return 0===this.tables.length}},{key:"getTotalSumsRemaining",value:function(){var e=0;return this.tables.forEach((function(t){e+=t.getQuestionsRemaining()})),e}}]),e}(),E=function(){function e(t){Object(o.a)(this,e),this.criteria=t,this.bank=new v}return Object(u.a)(e,[{key:"generateSums",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.criteria.numberOfQuestions,t=[],n=0;n<e;n++){this.bank.isEmpty()&&this.populateSumBank();var a=this.bank.getNextSum();a.shuffleParameters(),this.criteria.decimals&&(a.decimails=!0,a.convertToDecimals()),this.criteria.divisions&&a.maybeConvertToDivision(),t.push(a)}return t}},{key:"populateSumBank",value:function(){var e=this;this.criteria.timesTables.forEach((function(t){e.bank.addTable(t)}))}}]),e}();var y=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"displayNumber",value:function(e,t){return t===this.props.value.blank?"_____":e.toString()}},{key:"render",value:function(){var e=this.props.value,t=s.a.createElement("span",null,"*");return e.operator===a.DIVIDE&&(t=s.a.createElement("span",{dangerouslySetInnerHTML:{__html:"&divide;"}})),s.a.createElement("h3",null,this.displayNumber(e.param1,1),"\xa0",t,"\xa0",this.displayNumber(e.param2,2),"\xa0=\xa0",this.displayNumber(e.result,3))}}]),n}(s.a.Component),k=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.questions.map((function(e,t){return s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement(y,{key:t,value:e})))}));return s.a.createElement("div",{className:"col-sm-4"},s.a.createElement("table",{className:"table"},e))}}]),n}(s.a.Component),O=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=function(e,t){for(var n=Math.floor(Math.round(e.length/t)),a=0,i=[],s=0;s<t;s++){var l=a+n,r=e.slice(a,l);i.push(r),a=l}return i}(new E(this.props.club).generateSums(),2);return s.a.createElement(b.a,null,s.a.createElement(p.a,null,s.a.createElement("h1",null,this.props.club.name," Club")),s.a.createElement(p.a,null,s.a.createElement("h5",null,this.props.club.description)),s.a.createElement(p.a,null,s.a.createElement("br",null)),s.a.createElement(p.a,null,s.a.createElement(k,{key:1,questions:e[0]}),s.a.createElement(k,{key:2,questions:e[1]})))}}]),n}(s.a.Component),g={name:"Decimal",description:"99 Questions on all tables including decimals",numberOfQuestions:99,timesTables:[2,3,4,5,6,7,8,9,10],divisions:!0,decimals:!0},S={name:"99",description:"99 Questions on all tables",numberOfQuestions:99,timesTables:[2,3,4,5,6,7,8,9,10],divisions:!0,decimals:!1},T={name:"88",description:"88 Questions on all tables except 9",numberOfQuestions:88,timesTables:[2,3,4,5,6,7,8,10],divisions:!0,decimals:!1},j={name:"77",description:"77 Questions on tables 2,3,4,5,6,7,10",numberOfQuestions:77,timesTables:[2,3,4,5,6,7,10],divisions:!0,decimals:!1},w={name:"66",description:"66 Questions on tables 2,3,4,5,6,10",numberOfQuestions:66,timesTables:[2,3,4,5,6,10],divisions:!0,decimals:!1},Q={name:"55",description:"55 Questions on tables 2,3,4,5,10",numberOfQuestions:55,timesTables:[2,3,4,5,10],divisions:!0,decimals:!1},N={name:"44",description:"44 Questions on tables 2,3,4,5,10",numberOfQuestions:44,timesTables:[2,3,4,5,10],divisions:!0,decimals:!1},I={name:"33",description:"33 Questions on tables 2,3,5,10",numberOfQuestions:33,timesTables:[2,3,5,10],divisions:!0,decimals:!1},M={name:"22",description:"22 Questions on tables 2,5,10",numberOfQuestions:22,timesTables:[2,5,10],divisions:!1,decimals:!1},C={name:"11",description:"11 Questions on tables 2,5,10",numberOfQuestions:11,timesTables:[2,5,10],divisions:!1,decimals:!1},D=n(18),R=n(7),x=n(13),q=n(19),_=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"handleClick",value:function(){this.props.onSelection(this.props.club)}},{key:"render",value:function(){return s.a.createElement(x.a,{style:{width:"15rem"}},s.a.createElement(x.a.Body,null,s.a.createElement(x.a.Title,null,this.props.club.name," Club"),s.a.createElement(x.a.Text,null,this.props.club.description),s.a.createElement(q.a,{variant:"primary",onClick:this.handleClick.bind(this)},"Select")))}}]),n}(s.a.Component),A=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return s.a.createElement(b.a,null,s.a.createElement(D.a,null,s.a.createElement("h1",null,"Maths Club"),s.a.createElement("p",null,"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.")),s.a.createElement(p.a,null,s.a.createElement(R.a,null,s.a.createElement(_,{onSelection:this.props.onSelection,club:C})),s.a.createElement(R.a,null,s.a.createElement(_,{onSelection:this.props.onSelection,club:M})),s.a.createElement(R.a,null,s.a.createElement(_,{onSelection:this.props.onSelection,club:I})),s.a.createElement(R.a,null,s.a.createElement(_,{onSelection:this.props.onSelection,club:N}))),s.a.createElement(p.a,null,s.a.createElement(R.a,null,s.a.createElement(_,{onSelection:this.props.onSelection,club:Q})),s.a.createElement(R.a,null,s.a.createElement(_,{onSelection:this.props.onSelection,club:w})),s.a.createElement(R.a,null,s.a.createElement(_,{onSelection:this.props.onSelection,club:j})),s.a.createElement(R.a,null,s.a.createElement(_,{onSelection:this.props.onSelection,club:T}))),s.a.createElement(p.a,null,s.a.createElement(R.a,null,s.a.createElement(_,{onSelection:this.props.onSelection,club:S})),s.a.createElement(R.a,null,s.a.createElement(_,{onSelection:this.props.onSelection,club:g})),s.a.createElement(R.a,null),s.a.createElement(R.a,null)))}}]),n}(s.a.Component),B=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).clubSelected=a.clubSelected.bind(Object(c.a)(a)),a}return Object(u.a)(n,[{key:"clubSelected",value:function(e){this.setState({clubSelected:e}),console.log(e)}},{key:"render",value:function(){var e=s.a.createElement(A,{onSelection:this.clubSelected});return this.state&&(e=s.a.createElement(O,{club:this.state.clubSelected})),s.a.createElement(b.a,null,e)}}]),n}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.a0c7e0af.chunk.js.map