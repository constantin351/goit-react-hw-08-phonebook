"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[422],{4422:function(n,e,t){t.r(e),t.d(e,{default:function(){return X}});var r,a,o,i,s,d,c,x,f,l,p,u=t(168),h=t(2791),m=t(9434),g=t(4270),b=t(3634),v=function(n){return n.contacts.contacts},Z=function(n){return n.contacts.isLoading},j=function(n){return n.contacts.error},y=function(n){return n.filter},w=t(3081),k=t(184),I=w.Z.div(r||(r=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: space-between;\n  width: 340px;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  border-bottom: 1px dashed black;\n  padding: 10px 0;\n"]))),z=w.Z.p(a||(a=(0,u.Z)(["\n  margin-right: 10px;\n"]))),T=w.Z.p(o||(o=(0,u.Z)(["\n  margin-right: 10px;\n"]))),C=w.Z.button(i||(i=(0,u.Z)(["\n  width: 100px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 8px;\n  color: #ffffff;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  border: none;\n  background: #1976d2;\n  cursor: pointer;\n  /* box-shadow: 1px 1px 6px 2px rgba(12, 0, 0, 0.37); */\n\n  &:hover,\n  :focus {\n    background-color: orangered;\n    box-shadow: 1px 1px 6px 2px rgba(12, 0, 0, 0.37);\n  }\n"]))),G=function(n){var e=n.contact,t=(0,m.I0)();return(0,k.jsxs)(I,{children:[(0,k.jsxs)(z,{children:[e.name,": "]}),(0,k.jsx)(T,{children:e.number}),(0,k.jsx)(C,{type:"button",onClick:function(){return t((0,b.GK)(e.id))},children:"Delete"})]})},S=function(){var n=function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}((0,m.v9)(v),(0,m.v9)(y));return(0,k.jsx)("ul",{children:n.map((function(n){return(0,k.jsx)("li",{children:(0,k.jsx)(G,{contact:n})},n.id)}))})},U=w.Z.div(s||(s=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 20px 0;\n  margin-top: 96px;\n"]))),V=w.Z.h2(d||(d=(0,u.Z)(["\n  font-size: 28px;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: 700;\n  text-align: center;\n  margin-bottom: 14px;\n"]))),A=w.Z.form(c||(c=(0,u.Z)(["\n  width: 340px;\n"]))),F=w.Z.label(x||(x=(0,u.Z)(["\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n  font-weight: 700;\n"]))),_=w.Z.input(f||(f=(0,u.Z)(["\n  margin-top: 8px;\n  height: 30px;\n  padding: 6px 8px;\n  border-radius: 8px;\n  outline: none;\n  border: 1px solid black;\n  font-size: 16px;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: 500;\n\n  &:hover,\n  :focus,\n  :active {\n    border: 1px solid orangered;\n    background-color: #f3f3f3;\n    box-shadow: 1px 1px 6px 2px rgba(12, 0, 0, 0.37);\n  }\n"]))),q=w.Z.button(l||(l=(0,u.Z)(["\n  width: 100%;\n  padding: 10px 0;\n  font-size: 16px;\n  font-weight: 800;\n  border-radius: 8px;\n  color: #ffffff;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  border: none;\n  background: #1976d2;\n  cursor: pointer;\n  /* box-shadow: 1px 1px 6px 2px rgba(12, 0, 0, 0.37); */\n\n  &:hover,\n  :focus {\n    background-color: green;\n    box-shadow: 1px 1px 6px 2px rgba(12, 0, 0, 0.37);\n  }\n"]))),D=function(){var n=(0,m.I0)(),e=(0,m.v9)(v);return(0,k.jsxs)(U,{children:[(0,k.jsx)(V,{children:"Add your contacts here"}),(0,k.jsxs)(A,{onSubmit:function(t){t.preventDefault();var r=t.target,a=r.elements.name.value,o=r.elements.number.value;e.some((function(n){return n.name===a}))?alert("".concat(a," is already in the phonebook")):n((0,b.uK)({name:a,number:o})),r.reset()},children:[(0,k.jsxs)(F,{children:["Name",(0,k.jsx)(_,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,k.jsxs)(F,{children:["Number",(0,k.jsx)(_,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,k.jsx)(q,{type:"submit",children:"Add contact"})]})]})},L=t(9822),N=w.Z.div(p||(p=(0,u.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"])));var K,P,B,E,J,M=function(){return(0,k.jsx)(N,{children:(0,k.jsx)(L.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})},W=t(9636),Y=w.Z.div(K||(K=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 12px;\n  width: 340px;\n"]))),$=w.Z.label(P||(P=(0,u.Z)(["\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n"]))),H=w.Z.input(B||(B=(0,u.Z)(["\n  margin-top: 8px;\n  height: 30px;\n  padding: 6px 8px;\n  border-radius: 8px;\n  outline: none;\n  border: 1px solid black;\n  font-size: 16px;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: 500;\n  width: 330px;\n\n  &:hover, :focus, :active {\n    border: 1px solid orangered;\n    background-color: #F3F3F3;\n    box-shadow: 1px 1px 6px 2px rgba(12, 0, 0, 0.37);\n  }\n"]))),O=function(){var n=(0,m.I0)();return(0,k.jsx)(Y,{children:(0,k.jsxs)($,{children:["Find contacts with name",(0,k.jsx)(H,{type:"text",name:"filter",onChange:function(e){n((0,W.T)(e.currentTarget.value))}})]})})},Q=w.Z.div(E||(E=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),R=w.Z.h2(J||(J=(0,u.Z)(["\n    font-size: 26px;\n    font-family: 'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;\n    font-weight: 700;\n    text-align: center;\n"])));function X(){var n=(0,m.I0)(),e=(0,m.v9)(Z),t=(0,m.v9)(j);return(0,h.useEffect)((function(){n((0,b.yF)())}),[n]),(0,k.jsxs)(Q,{children:[(0,k.jsx)(g.q,{children:(0,k.jsx)("title",{children:"Your Phonebook"})}),(0,k.jsx)(D,{}),(0,k.jsx)(R,{children:"Contacts:"}),(0,k.jsx)(O,{}),(0,k.jsx)(S,{}),e&&!t&&(0,k.jsx)(M,{})]})}}}]);
//# sourceMappingURL=422.8f6fe9c9.chunk.js.map