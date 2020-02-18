(function(t){function e(e){for(var o,c,a=e[0],d=e[1],l=e[2],s=0,f=[];s<a.length;s++)c=a[s],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(t[o]=d[o]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var d=n[a];0!==r[d]&&(o=!1)}o&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},r={app:0},i=[];function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/vue.js-to-do/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],d=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=d;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"container"},[n("AddItem",{on:{"add-item":t.addItem}}),n("TodoList",{attrs:{todos:t.todos},on:{"del-item":t.deleteItem}})],1)],1)},i=[],c=(n("99af"),n("4de4"),n("2909")),a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("DESIGN YOUR DAY!!")])])}],l={name:"Header"},u=l,s=(n("5c61"),n("2877")),f=Object(s["a"])(u,a,d,!1,null,"01fc35c8",null),p=f.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{on:{submit:function(e){return e.preventDefault(),t.addTodo(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"item",placeholder:"Things to do..."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),n("button",{attrs:{type:"submit"}},[t._v("Add")])])])},v=[],h=n("11c1"),b=n.n(h),_={name:"AddItem",data:function(){return{title:""}},methods:{addTodo:function(){var t={id:b.a.v4(),title:this.title,completed:!1};this.$emit("add-item",t),this.title=""}}},y=_,O=(n("f5b3"),Object(s["a"])(y,m,v,!1,null,"7c5373b2",null)),j=O.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},t._l(t.todos,(function(e){return n("div",{key:e.id},[n("TodoItem",{attrs:{todo:e},on:{"del-item":function(n){return t.$emit("del-item",e.id)}}})],1)})),0)},x=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo-item"},[n("p",[n("input",{attrs:{type:"checkbox"},domProps:{checked:t.todo.completed},on:{click:t.isCompleted}}),n("span",{class:{"is-completed":t.todo.completed}},[t._v(t._s(t.todo.title))]),n("button",{on:{click:function(e){return t.$emit("del-item",t.todo.id)}}},[t._v("Delete")])])])},T=[],I={name:"TodoItem",props:["todo"],methods:{isCompleted:function(){this.todo.completed=!this.todo.completed}}},$=I,k=(n("9ba2"),Object(s["a"])($,w,T,!1,null,"42c8d25e",null)),P=k.exports,E={name:"TodoList",props:["todos"],components:{TodoItem:P}},A=E,S=Object(s["a"])(A,g,x,!1,null,null,null),C=S.exports,D={name:"App",components:{Header:p,AddItem:j,TodoList:C},data:function(){return{todos:[{id:1,title:"Learn how to use Vue.js",completed:!1},{id:2,title:"Drink coffe",completed:!0},{id:3,title:"Watch all episodes of The Mandalorian",completed:!1}]}},methods:{addItem:function(t){this.todos=[].concat(Object(c["a"])(this.todos),[t])},deleteItem:function(t){this.todos=this.todos.filter((function(e){return e.id!==t}))}}},M=D,L=(n("034f"),Object(s["a"])(M,r,i,!1,null,null,null)),H=L.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(H)}}).$mount("#app")},"5c61":function(t,e,n){"use strict";var o=n("818d"),r=n.n(o);r.a},"60aa":function(t,e,n){},7352:function(t,e,n){},"818d":function(t,e,n){},"85ec":function(t,e,n){},"9ba2":function(t,e,n){"use strict";var o=n("60aa"),r=n.n(o);r.a},f5b3:function(t,e,n){"use strict";var o=n("7352"),r=n.n(o);r.a}});
//# sourceMappingURL=app.f444036f.js.map