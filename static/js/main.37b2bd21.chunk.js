(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[0],{23:function(e,t,a){e.exports=a(33)},28:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),o=a.n(l),c=(a(28),a(8)),u=a(15),i=a(7),s=a(16),m=a(17),h=a(18),b=a(47),d=a(49),g=Object(b.a)({container:{},button:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px"}}),E=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={data:[{id:1,name:"Jan",age:12},{id:2,name:"Stanis\u0142aw",age:45}],i:0,myStyle:{fontsize:100,color:"#FF0000"}},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p,null)}}]),t}(r.a.Component),p=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).changeColor=function(){return a.setState({color:"Blue"})},a.helloAnswear=function(){return alert("General Kenobi!")},a.kick=function(){1+99*Math.random()>50?alert("Goal!"):alert("Miss!")},a.changeUsername=function(e){return a.setState({username:e.target.value})},a.changeUsername2=function(e){return a.setState({username2:e.target.value})},a.mySubmitHandler=function(e){e.preventDefault(),alert("You are submitting "+a.state.username2)},a.changeData=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(c.a)({},t,n))},a.state={brand:"Ford",model:"Mustang",year:1944,color:"Red",username:"",username2:"",username3:"",age:null},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"present",value:function(){return"I have a "+this.state.brand}},{key:"render",value:function(){return r.a.createElement("div",{className:g.container},r.a.createElement("h1",null,"My ",this.state.brand),r.a.createElement("br",null),r.a.createElement("p",{id:"text"},"This is a ",this.state.color," ",this.state.model," from ",this.state.year),r.a.createElement("br",null),r.a.createElement(d.a,{className:g.button,onClick:this.changeColor},"Change Color"),r.a.createElement("br",null),r.a.createElement(d.a,{className:g.button,onClick:this.helloAnswear},"Hello There!"),r.a.createElement("br",null),r.a.createElement(d.a,{className:g.button,onClick:this.kick},"Kick Football"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("form",null,r.a.createElement("h1",null,"Hello ",this.state.username),r.a.createElement("p",null,"Enter your name: "),r.a.createElement("input",{type:"text",onChange:this.changeUsername})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:this.mySubmitHandler},r.a.createElement("h1",null,"Hello ",this.state.username2),r.a.createElement("p",null,"Enter your name and submit:"),r.a.createElement("input",{type:"text",onChange:this.changeUsername2}),r.a.createElement("input",{type:"submit"})),r.a.createElement("form",null,r.a.createElement("h1",null,"Hello ",this.state.username3," ",this.state.age),r.a.createElement("p",null,"Enter your name and age:"),r.a.createElement("input",{type:"text",name:"username3",onChange:this.changeData}),r.a.createElement("br",null),r.a.createElement("input",{type:"number",name:"age",onChange:this.changeData})))}}]),t}(r.a.Component),f=new p("Ford");f.present(),(f=new(function(e){function t(e,a){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this))).model=a,n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"show",value:function(){return this.present()+", it is a "+this.model}}]),t}(p))("Ford","Mustang")).show();var y=E;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.37b2bd21.chunk.js.map