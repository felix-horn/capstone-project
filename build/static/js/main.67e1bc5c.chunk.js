(this["webpackJsonpcapstone-project"]=this["webpackJsonpcapstone-project"]||[]).push([[0],{48:function(e,t,n){"use strict";n.r(t);var c=n(3),i=n(0),o=n.n(i),a=n(15),d=n.n(a),r=n(6),s=n(11),l=n(14),b=n(13),u=n(65);var j=n(8),h=n(64);function p(e){var t=e.title,n=e.isChecked,i=e.onToggle;return Object(c.jsxs)(I,{checked:n,children:[Object(c.jsx)(m,{type:"checkbox",color:"default",checked:n,onChange:i}),Object(c.jsx)(f,{children:t})]})}var I=j.b.label.withConfig({displayName:"ListItem__ListItemStyled",componentId:"xw4fk9-0"})(["display:flex;align-items:center;text-decoration:",";opacity:",";"],(function(e){return e.checked?"line-through":"none"}),(function(e){return e.checked?.5:1})),m=Object(j.b)(h.a).withConfig({displayName:"ListItem__CheckboxStyled",componentId:"xw4fk9-1"})([""]),f=j.b.span.withConfig({displayName:"ListItem__TitleStyled",componentId:"xw4fk9-2"})(["margin-left:9px;"]);function O(e){var t=e.list,n=e.currywurst,i=e.toggleIsChecked;return Object(c.jsx)(c.Fragment,{children:t.allIds.length>0&&Object(c.jsx)(g,{children:n.map((function(e){var n=t.byId[e],o=n.title,a=n.isChecked;return Object(c.jsx)(p,{title:o,isChecked:a,onToggle:function(){return i(e)}},e)}))})})}var g=j.b.div.withConfig({displayName:"List__ListStyled",componentId:"va7d36-0"})(["display:grid;margin:3px 2px 10px;"]),x=n(31),y=n.n(x);function k(e){var t=e.addListItem;return Object(c.jsx)("form",{onSubmit:function(e){e.preventDefault();var n=e.target,c=n.elements.title;t(c.value),n.reset()},children:Object(c.jsxs)(C,{children:[Object(c.jsx)(v,{}),Object(c.jsx)(w,{name:"title",type:"text",placeholder:"Listeneintrag"})]})})}var C=j.b.label.withConfig({displayName:"InputForm__InputFormStyled",componentId:"sc-8l8mud-0"})(["margin-left:10px;display:flex;align-items:center;"]),v=Object(j.b)(y.a).withConfig({displayName:"InputForm__AddIconStyled",componentId:"sc-8l8mud-1"})(["color:#878889;"]),w=j.b.input.withConfig({displayName:"InputForm__InputFieldStyled",componentId:"sc-8l8mud-2"})(["margin-left:15px;border:none;&::placeholder{color:#b2b2b2;}&:focus{outline:none;}"]);function _(){var e=function(){var e=Object(i.useState)({byId:{},allIds:[]}),t=Object(b.a)(e,2),n=t[0],c=t[1],o=Object(i.useState)([]),a=Object(b.a)(o,2),d=a[0],j=a[1],h=Object(i.useState)([]),p=Object(b.a)(h,2),I=p[0],m=p[1];return{list:n,addListItem:function(e){var t=Object(u.a)();c({byId:Object(l.a)(Object(l.a)({},n.byId),{},Object(s.a)({},t,{id:t,title:e,isChecked:!1})),allIds:[].concat(Object(r.a)(n.allIds),[t])}),j([].concat(Object(r.a)(d),[t]))},toggleIsChecked:function(e){c({byId:Object(l.a)(Object(l.a)({},n.byId),{},Object(s.a)({},e,Object(l.a)(Object(l.a)({},n.byId[e]),{},{isChecked:!n.byId[e].isChecked}))),allIds:Object(r.a)(n.allIds)}),m(!1===n.byId[e].isChecked?[].concat(Object(r.a)(I),[e]):Object(r.a)(I.filter((function(t){return t===e})))),j(!1===n.byId[e].isChecked?[].concat(Object(r.a)(d),[e]):Object(r.a)(d.filter((function(t){return t===e})))),console.log("checkedIds: ",I),console.log("uncheckedIds: ",d)},uncheckedIds:d,checkedIds:I}}(),t=e.list,n=e.addListItem,o=e.toggleIsChecked,a=e.uncheckedIds,d=e.checkedIds;return Object(c.jsxs)("div",{children:[Object(c.jsx)(O,{list:t,currywurst:a,toggleIsChecked:o}),Object(c.jsx)(k,{addListItem:n}),Object(c.jsx)(O,{list:t,currywurst:d,toggleIsChecked:o})]})}var S=n(32);function L(){var e=Object(S.a)(["\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    width: 100%;\n    max-width: 450px;\n    padding: 30px;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1em;\n    font-weight: 400;\n    color: #212121;\n    }\n\ninput, textarea, button, select, link, textarea {\n    font-family: inherit;\n    font-weight: inherit;\n    color: inherit;\n    font-size: inherit;\n}\n\n"]);return L=function(){return e},e}var N=Object(j.a)(L());d.a.render(Object(c.jsxs)(o.a.StrictMode,{children:[Object(c.jsx)(N,{}),Object(c.jsx)(_,{})]}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.67e1bc5c.chunk.js.map