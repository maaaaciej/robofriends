(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),c=a.n(o);a(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(3),l=a(4),s=a(6),h=a(5),u=function(e){var t=e.name,a=e.email,n=e.id;return r.a.createElement("div",{className:"bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://www.robohash.org/".concat(n,"?200x200"),alt:"Robot profile."}),r.a.createElement("div",{className:"tc"},r.a.createElement("h2",null,t),r.a.createElement("p",null,a)))},m=function(e){var t=e.robots,a=t.map((function(e,a){return r.a.createElement(u,{key:t[a].id,id:t[a].id,name:t[a].name,email:t[a].email})}));return r.a.createElement("div",{className:""},a)},d=function(e){e.searchField;var t=e.searchChange;return r.a.createElement("div",null,r.a.createElement("input",{className:"pa3 ba b--blue bg-lightest-blue",type:"text",placeholder:"Search RoboFriends",onChange:t}))},b=function(e){return r.a.createElement("div",{style:{marginTop:"2%",overflowY:"scroll",border:"1px solid black",height:"72vh"}},e.children)},f=function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onSearchChange=function(e){n.setState({searchField:e.target.value})},n.state={robots:[],searchField:""},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"tc"},"RoboFriends"),r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(b,null," ",r.a.createElement(m,{robots:t})))}}]),a}(r.a.Component);a(13);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.f53610d7.chunk.js.map