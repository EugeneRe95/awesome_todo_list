(this.webpackJsonpawesome_todo_list=this.webpackJsonpawesome_todo_list||[]).push([[0],{38:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(0),c=a(9),i=a.n(c),r=(a(38),a(12)),l=a(3),o=a(6),d="TAKS/ADD_TASK",j="TAKS/DELETE_TASK",u="TAKS/FINISH_TASK",b="USER/ADD_USER",O="ALL/DELETE_ALL";var p={deleteEverything:function(){return{type:O}}},h=Object(o.b)((function(e){return{user:e.user}}),p)((function(e){var t=e.user,a=e.deleteEverything;return Object(s.jsx)("header",{children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"user-name",children:t?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("i",{className:"fas fa-trash-alt",title:"Delete User",onClick:function(){window.confirm("You are going to clear user name and all tasks, aren't you?")&&a()}}),Object(s.jsxs)("span",{className:"animate__animated animate__zoomIn",children:["Hello",Object(s.jsx)("br",{})," ",t]})]}):null}),Object(s.jsx)("nav",{children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(r.b,{exact:!0,activeClassName:"active",to:"/",children:"All tasks"})}),Object(s.jsx)("li",{children:Object(s.jsx)(r.b,{activeClassName:"active",to:"/active-tasks",children:"Active"})}),Object(s.jsx)("li",{children:Object(s.jsx)(r.b,{activeClassName:"active",to:"/today-tasks",children:"Today's"})}),Object(s.jsx)("li",{children:Object(s.jsx)(r.b,{activeClassName:"active",to:"/done-tasks",children:"Done"})})]})})]})})})),m=a(27),x=a(28),k=a(18),f=a(31),v=a(30),g=a(29),y=[(new Date).getDate(),(new Date).getMonth()+1,(new Date).getFullYear()],N=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var s;return Object(m.a)(this,a),(s=t.call(this)).dateCheck=s.dateCheck.bind(Object(k.a)(s)),s}return Object(x.a)(a,[{key:"dateCheck",value:function(e){var t=y,a=e.date.split(".");return a.join(".")===t.join(".")?Object(s.jsx)("span",{className:"today",children:"Today"}):"no deadline"!==e.date?t[2]>a[2]?Object(s.jsx)("span",{className:"expired",title:"expired",children:e.date}):t[1]>a[1]?(console.log(t+"/"+a),Object(s.jsx)("span",{className:"expired",title:"expired",children:e.date})):t[0]>a[0]?Object(s.jsx)("span",{className:"expired",title:"expired",children:e.date}):Object(s.jsx)("span",{children:e.date}):Object(s.jsx)("span",{children:e.date})}},{key:"render",value:function(){var e=this;return Object(s.jsx)(g.a,{enterAnimation:"elevator",appearAnimation:"elevator",leaveAnimation:"elevator",duration:700,staggerDelayBy:100,className:"container",children:0!==this.props.tasks.length?this.props.tasks.map((function(t){return Object(s.jsxs)("div",{id:t.title+t.date,className:"item"+(t.complete?" complete":""),children:[Object(s.jsxs)("h3",{children:[t.title," ",e.dateCheck(t)]}),Object(s.jsxs)("div",{className:"item-tools",children:[Object(s.jsx)("button",{onClick:function(){e.props.finishTask(t)},children:Object(s.jsx)("i",{className:"fas fa-check-circle"})}),Object(s.jsx)("button",{onClick:function(){e.props.deleteTask(t)},children:Object(s.jsx)("i",{className:"fas fa-minus-circle"})})]})]},t.title+"/"+t.date)})):Object(s.jsx)("h3",{children:this.props.noTasks})})}}]),a}(n.Component),T={deleteTask:function(e){return{type:j,payload:e}},finishTask:function(e){return{type:u,payload:e}}},S=Object(o.b)(null,T)(N);var _=Object(o.b)((function(e){return{tasks:e.tasks}}),null)((function(e){var t=e.tasks;return Object(s.jsx)("div",{className:"list",children:Object(s.jsx)(S,{tasks:t,noTasks:"No tasks yet"})})}));var D=[(new Date).getDate(),(new Date).getMonth()+1,(new Date).getFullYear()],w=Object(o.b)((function(e){return{tasks:e.tasks.filter((function(e){return e.date===D.join(".")}))}}),null)((function(e){var t=e.tasks;return Object(s.jsx)("div",{className:"list",children:Object(s.jsx)(S,{tasks:t,noTasks:"No tasks for today"})})}));var A=Object(o.b)((function(e){return{tasks:e.tasks.filter((function(e){return!0===e.complete}))}}),null)((function(e){var t=e.tasks;return Object(s.jsx)("div",{className:"list",children:Object(s.jsx)(S,{tasks:t,noTasks:"No tasks completed"})})}));a(25),a(44);var C=Object(o.b)((function(e){return{tasks:e.tasks.filter((function(e){return!1===e.complete}))}}),null)((function(e){var t=e.tasks;return Object(s.jsx)("div",{className:"list",children:Object(s.jsx)(S,{tasks:t,noTasks:"No active tasks"})})})),L=a(15);var I={addUser:function(e){return{type:b,payload:e}}},E=Object(o.b)((function(e){return{user:e.user}}),I)((function(e){var t=e.addUser,a=e.user,c=Object(n.useState)(""),i=Object(L.a)(c,2),r=i[0],l=i[1];return a?null:Object(s.jsx)("div",{id:"greeting",children:Object(s.jsxs)("form",{className:"animate__animated animate__fadeInUp",children:[Object(s.jsx)("input",{type:"text",placeholder:"Your name",value:r,onChange:function(e){l(e.target.value)}}),Object(s.jsx)("button",{onClick:function(){""!==r?(t(r),localStorage.setItem("todoList_User",r),l("")):alert("Please, put down your name!")},children:"Submit"})]})})}));var U={addTask:function(e){return{type:d,payload:e}}},J=Object(o.b)((function(e){return{tasks:e.tasks}}),U)((function(e){var t=e.addTask,a=e.tasks,c=Object(n.useState)(""),i=Object(L.a)(c,2),r=i[0],l=i[1],o=Object(n.useState)(""),d=Object(L.a)(o,2),j=d[0],u=d[1],b=[(new Date).getDate(),(new Date).getMonth()+1,(new Date).getFullYear()];return Object(s.jsx)("section",{id:"toolbar",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{id:"numbers",children:[Object(s.jsxs)("p",{children:["All: ",Object(s.jsx)("span",{children:a.length})]}),Object(s.jsxs)("p",{children:["Active: ",Object(s.jsx)("span",{children:a.filter((function(e){return!1===e.complete})).length})]}),Object(s.jsxs)("p",{children:["Today's: ",Object(s.jsx)("span",{children:a.filter((function(e){return e.date===b.join(".")})).length})]}),Object(s.jsxs)("p",{children:["Done: ",Object(s.jsx)("span",{children:a.filter((function(e){return!0===e.complete})).length})]})]}),Object(s.jsxs)("div",{className:"add-task-tool",children:[Object(s.jsx)("input",{type:"text",placeholder:"Task name",value:r,onChange:function(e){l(e.target.value)}}),Object(s.jsx)("input",{type:"date",value:j,onChange:function(e){u(e.target.value)}}),Object(s.jsx)("button",{onClick:function(){a.filter((function(e){return e.title===r&&(""!==j?e.date===j.split("-").reverse().join("."):"no deadline"===e.date)})).length>0?alert("Already exists"):""!==r?(t({title:r,complete:!1,date:""!==j?j.split("-").reverse().join("."):["no deadline"].join()}),l("")):alert("Put down the task name")},children:"Add Task"})]})]})})})),F=a(48),K=a(47);var Y=function(){return Object(s.jsx)(r.a,{children:Object(s.jsx)(l.a,{render:function(e){var t=e.location;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(h,{}),Object(s.jsx)("div",{id:"main-wrapper",children:Object(s.jsxs)("div",{id:"content",children:[Object(s.jsx)(J,{}),Object(s.jsx)(F.a,{children:Object(s.jsx)(K.a,{classNames:"fade",timeout:900,children:Object(s.jsxs)(l.c,{location:t,children:[Object(s.jsx)(l.a,{exact:!0,path:"/",component:_}),Object(s.jsx)(l.a,{exact:!0,path:"/active-tasks",component:C}),Object(s.jsx)(l.a,{exact:!0,path:"/today-tasks",component:w}),Object(s.jsx)(l.a,{exact:!0,path:"/done-tasks",component:A})]})},t.key)})]})}),Object(s.jsx)(E,{})]})}})})},M=a(10),B=JSON.parse(localStorage.getItem("todoList_Tasks")),H={tasks:B||[],user:localStorage.getItem("todoList_User")};var P=a(17),R=Object(P.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0,a=JSON.parse(localStorage.getItem("todoList_Tasks"));switch(t.type){case O:return localStorage.removeItem("todoList_Tasks"),localStorage.removeItem("todoList_User"),Object(M.a)(Object(M.a)({},e),{},{user:null,tasks:[]});case d:return a?localStorage.setItem("todoList_Tasks",JSON.stringify([t.payload].concat(a))):localStorage.setItem("todoList_Tasks",JSON.stringify([t.payload])),Object(M.a)(Object(M.a)({},e),{},{tasks:[t.payload].concat(e.tasks)});case j:return localStorage.setItem("todoList_Tasks",JSON.stringify(a.filter((function(e){return e.title!==t.payload.title||e.date!==t.payload.date})))),Object(M.a)(Object(M.a)({},e),{},{tasks:e.tasks.filter((function(e){return e.title!==t.payload.title||e.date!==t.payload.date}))});case u:return localStorage.setItem("todoList_Tasks",JSON.stringify(a.map((function(e){return e.title===t.payload.title&&e.date===t.payload.date?{title:e.title,complete:!0,date:e.date}:{title:e.title,complete:e.complete,date:e.date}})))),Object(M.a)(Object(M.a)({},e),{},{tasks:e.tasks.map((function(e){return e.title===t.payload.title&&e.date===t.payload.date?{title:e.title,complete:!0,date:e.date}:{title:e.title,complete:e.complete,date:e.date}}))});case b:return Object(M.a)(Object(M.a)({},e),{},{user:t.payload});default:return e}}));i.a.render(Object(s.jsx)(o.a,{store:R,children:Object(s.jsx)(Y,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.d31e9b06.chunk.js.map