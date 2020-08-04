(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{27:function(t,e,n){t.exports=n(45)},39:function(t,e,n){},40:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),l=n(7),o=n.n(l),i=n(4),u=n(5),s=n(3),m=n(6),b=n(25),p=n(24),f=Object(u.b)("@contacts/add",(function(t,e){return{payload:{id:Object(p.v4)(),name:t,number:e}}})),d=Object(u.b)("@contact/delete"),E=Object(u.b)("@contact/storage"),h=Object(u.b)("@contact/filter",(function(t){return{payload:t.target.value}})),O=Object(u.c)([],(a={},Object(m.a)(a,f,(function(t,e){var n=e.payload;return[].concat(Object(b.a)(t),[n])})),Object(m.a)(a,d,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Object(m.a)(a,E,(function(t,e){return e.payload})),a)),v=Object(u.c)("",Object(m.a)({},h,(function(t,e){return e.payload}))),j=Object(s.c)({items:O,filter:v}),g=Object(u.a)({reducer:{contacts:j},devTools:!1}),N=n(12),y=n(13),C=n(15),S=n(14),F=n(46),I=n(9),k=(n(39),function(t){Object(C.a)(n,t);var e=Object(S.a)(n);function n(){var t;Object(N.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).formInitialState={name:"",number:""},t.state=Object(I.a)(Object(I.a)({},t.formInitialState),{},{alert:!1}),t.inputHandler=function(e){var n=e.target,a=n.value,c=n.name;t.setState(Object(m.a)({},c,a))},t.submitHandler=function(e){var n=t.state,a=n.name,c=n.number,r=n.alert;if(e.preventDefault(),t.props.contacts.find((function(t){return t.name===a})))return t.toggleAlert(r),t.reset();t.props.addContact(a,c),t.reset()},t.reset=function(){t.setState(Object(I.a)({},t.formInitialState))},t.toggleAlert=function(e){t.setState({alert:!e})},t}return Object(y.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.name,a=e.number,c=e.alert;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{in:c,classNames:"Alert",timeout:1500,unmountOnExit:!0,onEntered:function(){return t.setState({alert:!c})}},r.a.createElement("button",{onClick:this.toggleAlert,className:"AlertBtn"},"Contact already exists!")),r.a.createElement("form",{className:"ContactsForm",onSubmit:this.submitHandler},r.a.createElement("label",{className:"InputName"},"Name",r.a.createElement("br",null),r.a.createElement("input",{className:"InputForm",type:"text",name:"name",placeholder:"Add name",value:n,onChange:this.inputHandler})),r.a.createElement("br",null),r.a.createElement("label",{className:"InputName"},"Number",r.a.createElement("br",null),r.a.createElement("input",{className:"InputForm",type:"text",name:"number",placeholder:"Add phone number",value:a,onChange:this.inputHandler})),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"SubmitBtn"},"Create contact")))}}]),n}(c.Component)),A={addContact:f},w=Object(i.b)((function(t){return{contacts:t.contacts.items,filter:t.contacts.filter}}),A)(k),x=n(47),B=(n(40),Object(i.b)((function(t,e){var n=t.contacts.items.find((function(t){return t.id===e.id}));return Object(I.a)({},n)}),(function(t,e){return{deleteContact:function(){return t(d(e.id))}}}))((function(t){var e=t.name,n=t.number,a=t.deleteContact;return r.a.createElement("li",{className:"Contact"},r.a.createElement("h4",null,e),r.a.createElement("p",null,n),r.a.createElement("button",{className:"DelBtn",type:"button",onClick:a},"\u2718"))}))),H=(n(41),Object(i.b)((function(t){var e=t.contacts,n=e.items,a=e.filter.toLowerCase();return{contacts:n.filter((function(t){return t.name.toLowerCase().includes(a)}))}}))((function(t){var e=t.contacts;return r.a.createElement(x.a,{component:"ul",className:"ContactList"},e.map((function(t){var e=t.id;return r.a.createElement(F.a,{key:e,classNames:"ListItem",timeout:250},r.a.createElement(B,{id:e}))})))}))),L=(n(42),{handleFilter:h}),D=Object(i.b)((function(t){return{filter:t.contacts.filter}}),L)((function(t){var e=t.filter,n=t.handleFilter;return r.a.createElement("div",{className:"FilterBox"},r.a.createElement("label",{className:"InputLabel"},"Find contacts by name",r.a.createElement("br",null),r.a.createElement("input",{className:"FilterForm",type:"text",name:"filter",placeholder:"Find contact",value:e,onChange:n})))})),J=(n(43),function(t){Object(C.a)(n,t);var e=Object(S.a)(n);function n(){var t;Object(N.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={animation:!1},t}return Object(y.a)(n,[{key:"componentDidMount",value:function(){this.setState((function(t){return{animation:!t.animation}}));var t=localStorage.getItem("contacts");t&&this.props.contactStorage(JSON.parse(t))}},{key:"componentDidUpdate",value:function(t){var e=this.props.contacts;t.contacts!==e&&localStorage.setItem("contacts",JSON.stringify(e))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Container"},r.a.createElement(F.a,{in:!0,appear:!0,classNames:"Title-slideIn",timeout:500,unmountOnExit:!0},r.a.createElement("h1",{className:"AppTitle"},"Phonebook")),r.a.createElement(w,null),0===this.props.contacts.length&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"ContactTitle"},"Contacts"),r.a.createElement("p",null,"Contacts list is empty. Please, create new cotnact!")),r.a.createElement(F.a,{in:this.props.contacts.length>1,classNames:"FilterAnimation",timeout:250,unmountOnExit:!0},r.a.createElement(D,null)),r.a.createElement(H,null))}}]),n}(c.Component)),T={contactStorage:E},P=Object(i.b)((function(t){return{contacts:t.contacts.items}}),T)(J);n(44);o.a.render(r.a.createElement(i.a,{store:g},r.a.createElement(P,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.06431915.chunk.js.map