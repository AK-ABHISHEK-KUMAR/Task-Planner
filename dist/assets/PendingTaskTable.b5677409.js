import{a as u,b as p,j as e,e as o,n as T,w as g,x as m,y as k,z as f}from"./index.c9cd9c0a.js";import{a as l}from"./ProductPage.b513c8ac.js";import{T as x}from"./Table.920b19e7.js";const w="/assets/TaskDone.54009f2c.svg";function C(){const d=u(t=>t.crudTodo.pendingTask),i=p(),c=t=>{const s=t.target.parentElement.id;l.put(`/todos/update/status/${s}`).then(n=>{n.status===200&&i(g(...n.data))}).catch(n=>console.log(n))},r=t=>{const s=t.target.id;t.target.checked?i(m(s)):i(k(s))},h=t=>{const s=t.target.parentElement.id,n=t.target.textContent;l.put(`/todos/update/title/${s}`,{title:n}).then(a=>{a.status===201&&i(f({id:s,newTitle:n}))}).catch(a=>console.log(a))};return e("div",{id:"pendingTaskTable",children:d.length===0?e("img",{src:w,alt:"Task List",style:{width:"auto",height:"58vh"}}):o(x,{striped:!0,hover:!0,className:"mt-4 mb-4",style:{fontWeight:"500"},children:[e("thead",{children:o("tr",{children:[e("th",{style:{width:"30px"}}),e("th",{style:{width:"10px"},children:"Task No."}),e("th",{children:"Title"}),e("th",{style:{width:"20px"},children:"Status"})]})}),e("tbody",{children:d.map((t,s)=>o("tr",{id:t._id,children:[e("td",{children:e(T.Check,{id:t._id,onChange:r})}),e("td",{children:t.taskNo}),e("td",{onMouseDown:n=>n.currentTarget.contentEditable=!0,onBlur:h,children:t.title}),e("td",{title:"Click when Done.",style:{cursor:"pointer"},onClick:c,children:t.status?"\u2705":"\u274C"})]},s))})]})})}export{C as default};
