(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{16:function(t,e,n){t.exports={filterLabel:"Filter_filterLabel__3iz37",filterInput:"Filter_filterInput__3cB4y"}},29:function(t,e,n){"use strict";n.r(e);var c,a=n(0),o=n(10),r=n.n(o),i=n(3),s=n(4),u=n(5),l=n(18),b=n(2),m=n(30),d=Object(s.b)("contacts/add",(function(t){var e=t.name,n=t.number;return{payload:{id:Object(m.a)(),name:e,number:n}}})),j=Object(s.b)("contacts/filter",(function(t){return{payload:t.target.value}})),f={addContact:d,deleteContact:Object(s.b)("contacts/delete"),filterContacts:j},O=Object(s.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(c={},Object(u.a)(c,f.addContact,(function(t,e){return[e.payload].concat(Object(l.a)(t))})),Object(u.a)(c,f.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),p=Object(s.c)("",Object(u.a)({},f.filterContacts,(function(t,e){return e.payload}))),h=Object(b.b)({items:O,filter:p}),C=Object(s.a)({reducer:{contacts:h}}),_=n(1);function x(t){var e=t.children;return Object(_.jsx)("div",{className:"mainContainer",children:e})}var v=n(8),N=n(17),I=n(7),L=n.n(I);function F(t){var e=t.onSubmit,n={name:"",number:""},c=Object(a.useState)(n),o=Object(N.a)(c,2),r=o[0],i=o[1],s=Object(m.a)(),l=Object(m.a)(),b=function(t){var e=t.target,n=e.name,c=e.value;i((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(u.a)({},n,c))}))},d=function(){i(Object(v.a)({},n))},j=r.name,f=r.number;return Object(_.jsxs)("form",{className:L.a.contactForm,autoComplete:"on",onSubmit:function(t){t.preventDefault();var n=r.name,c=r.number;n&&c&&(e({name:n,number:c}),d())},children:[Object(_.jsx)("label",{className:L.a.contactLabel,htmlFor:s,children:"Name"}),Object(_.jsx)("input",{className:L.a.contactInput,type:"text",name:"name",value:j,id:s,onChange:b,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(_.jsx)("label",{htmlFor:l,className:L.a.contactLabel,children:"Phone number"}),Object(_.jsx)("input",{className:L.a.contactInput,type:"tel",name:"number",value:f,id:l,onChange:b,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(_.jsx)("button",{className:L.a.contactBtn,type:"submit",name:"submit",children:"Add Contact"})]})}var y={onSubmit:f.addContact},g=(Object(i.b)(null,y)(F),n(16)),B=n.n(g),A={onFilter:f.filterContacts},k=Object(i.b)((function(t){return{contacts:t.contacts.items,filterValue:t.contacts.filter}}),A)((function(t){t.contacts;var e=t.filterValue,n=t.onFilter;return Object(_.jsxs)("div",{children:[Object(_.jsx)("p",{children:"Find contacts by name"}),Object(_.jsx)("input",{className:B.a.filterInput,type:"text",name:"filter",value:e,onChange:n})]})})),w=n(6),z=n.n(w),S=Object(i.b)((function(t,e){var n=t.contacts.items.find((function(t){return e.id===t.id}));return Object(v.a)({},n)}),(function(t,e){return{onRemoveContact:function(){return t(f.deleteContact(e.id))}}}))((function(t){var e=t.name,n=t.number,c=t.onRemoveContact;return Object(_.jsxs)("li",{className:z.a.contactItem,children:[Object(_.jsx)("span",{className:z.a.contactItemName,children:e}),Object(_.jsx)("span",{className:z.a.contactItemNumber,children:n}),Object(_.jsx)("button",{className:z.a.contactBtn,type:"button",onClick:c,children:"Delete"})]})}));var R=Object(i.b)((function(t){var e=t.contacts,n=e.items,c=e.filter,a=c.toLowerCase();return{contacts:c?n.filter((function(t){return t.name.toLowerCase().includes(a)})):n}}))((function(t){var e=t.contacts,n=e.length>0;return Object(_.jsx)("div",{children:n&&Object(_.jsx)("ul",{className:z.a.contactList,children:e.map((function(t){var e=t.id;return Object(_.jsx)(S,{id:e},e)}))})})}));n(28);function H(){return Object(_.jsxs)(x,{children:[Object(_.jsx)("h1",{children:"Phonebook"}),Object(_.jsx)(F,{}),Object(_.jsx)(k,{}),Object(_.jsx)(R,{})]})}r.a.render(Object(_.jsx)(i.a,{store:C,children:Object(_.jsx)(H,{})}),document.getElementById("root"))},6:function(t,e,n){t.exports={contactList:"ContactList_contactList__1NlUK",contactItem:"ContactList_contactItem__1b0oH",contactBtn:"ContactList_contactBtn__169nR",contactItemName:"ContactList_contactItemName__35NlH",contactItemNumber:"ContactList_contactItemNumber__4LfvI"}},7:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__3dzac",contactInput:"ContactForm_contactInput__hy7jP",contactLabel:"ContactForm_contactLabel__1AhuL",contactBtn:"ContactForm_contactBtn__38X6F"}}},[[29,1,2]]]);
//# sourceMappingURL=main.ee61a4f1.chunk.js.map