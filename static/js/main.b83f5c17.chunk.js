(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={filterLabel:"Filter_filterLabel__3iz37",filterInput:"Filter_filterInput__3cB4y"}},29:function(t,e,n){"use strict";n.r(e);var c,a=n(0),r=n.n(a),o=n(10),i=n.n(o),s=n(3),u=n(4),b=n(5),l=n(17),m=n(2),d=n(8),j=n(30),O=Object(u.b)("contacts/add",(function(t){return{payload:Object(d.a)({id:Object(j.a)()},t)}})),f=Object(u.b)("contacts/filter"),p={addContact:O,deleteContact:Object(u.b)("contacts/delete"),filterContacts:f},h=Object(u.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(c={},Object(b.a)(c,p.addContact,(function(t,e){var n=e.payload;return[].concat(Object(l.a)(t),[n])})),Object(b.a)(c,p.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),C=Object(u.c)("",Object(b.a)({},p.filterContacts,(function(t,e){return e.payload}))),_=Object(m.b)({items:h,filter:C}),x=Object(u.a)({reducer:{contacts:_}}),v=n(1);function N(t){var e=t.children;return Object(v.jsx)("div",{className:"mainContainer",children:e})}var L=n(16),I=function(t){return t.contacts.filter},y=function(t){return t.contacts.items},F=function(t){var e=y(t),n=I(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},g=n(7),B=n.n(g);function w(){var t={name:"",number:""},e=Object(a.useState)(t),n=Object(L.a)(e,2),c=n[0],r=n[1],o=Object(s.c)(y),i=Object(s.b)(),u=Object(j.a)(),l=Object(j.a)(),m=function(t){var e=t.target,n=e.name,c=e.value;r((function(t){return Object(d.a)(Object(d.a)({},t),{},Object(b.a)({},n,c))}))},O=function(){r(Object(d.a)({},t))},f=c.name,h=c.number;return Object(v.jsxs)("form",{className:B.a.contactForm,autoComplete:"on",onSubmit:function(t){t.preventDefault();var e=c.name,n=c.number;if(o.find((function(t){return t.name.toLowerCase()===e.toLowerCase()})))return O(),void alert("".concat(e," is already in contacts"));i(p.addContact({name:e,number:n})),O()},children:[Object(v.jsx)("label",{className:B.a.contactLabel,htmlFor:u,children:"Name"}),Object(v.jsx)("input",{className:B.a.contactInput,type:"text",name:"name",value:f,id:u,onChange:m,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(v.jsx)("label",{htmlFor:l,className:B.a.contactLabel,children:"Phone number"}),Object(v.jsx)("input",{className:B.a.contactInput,type:"tel",name:"number",value:h,id:l,onChange:m,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(v.jsx)("button",{className:B.a.contactBtn,type:"submit",name:"submit",children:"Add Contact"})]})}var A=n(15),k=n.n(A),z=function(){var t=Object(s.b)(),e=Object(s.c)(I);return Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{children:"Find contacts by name"}),Object(v.jsx)("input",{className:k.a.filterInput,type:"text",name:"filter",value:e,onChange:function(e){t(p.filterContacts(e.target.value))}})]})},S=n(6),H=n.n(S);function J(t){var e=t.name,n=t.number,c=t.remove,a=t.id;return Object(v.jsxs)("li",{className:H.a.contactItem,children:[Object(v.jsx)("span",{className:H.a.contactItemName,children:e}),Object(v.jsx)("span",{className:H.a.contactItemNumber,children:n}),Object(v.jsx)("button",{className:H.a.contactBtn,type:"button",onClick:c,children:"Delete"})]},a)}function P(){var t=Object(s.b)(),e=Object(s.c)(F),n=e.length>0;return Object(v.jsx)("div",{children:n&&Object(v.jsx)("ul",{className:H.a.contactList,children:e.map((function(e){var n=e.id,c=e.name,a=e.number;return Object(v.jsx)(J,{id:n,name:c,number:a,remove:function(){return function(e){return t(p.deleteContact(e))}(n)}},n)}))})})}n(28);function Z(){return Object(v.jsxs)(N,{children:[Object(v.jsx)("h1",{children:"Phonebook"}),Object(v.jsx)(w,{}),Object(v.jsx)(z,{}),Object(v.jsx)(P,{})]})}i.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(s.a,{store:x,children:Object(v.jsx)(Z,{})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={contactList:"ContactList_contactList__1NlUK",contactItem:"ContactList_contactItem__1b0oH",contactBtn:"ContactList_contactBtn__169nR",contactItemName:"ContactList_contactItemName__35NlH",contactItemNumber:"ContactList_contactItemNumber__4LfvI"}},7:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__3dzac",contactInput:"ContactForm_contactInput__hy7jP",contactLabel:"ContactForm_contactLabel__1AhuL",contactBtn:"ContactForm_contactBtn__38X6F"}}},[[29,1,2]]]);
//# sourceMappingURL=main.b83f5c17.chunk.js.map