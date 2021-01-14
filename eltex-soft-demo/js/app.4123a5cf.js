(function(a){function e(e){for(var s,n,l=e[0],i=e[1],c=e[2],u=0,m=[];u<l.length;u++)n=l[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&m.push(r[n][0]),r[n]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(a[s]=i[s]);d&&d(e);while(m.length)m.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var a,e=0;e<o.length;e++){for(var t=o[e],s=!0,l=1;l<t.length;l++){var i=t[l];0!==r[i]&&(s=!1)}s&&(o.splice(e--,1),a=n(n.s=t[0]))}return a}var s={},r={app:0},o=[];function n(e){if(s[e])return s[e].exports;var t=s[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=a,n.c=s,n.d=function(a,e,t){n.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:t})},n.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},n.t=function(a,e){if(1&e&&(a=n(a)),8&e)return a;if(4&e&&"object"===typeof a&&a&&a.__esModule)return a;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var s in a)n.d(t,s,function(e){return a[e]}.bind(null,s));return t},n.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return n.d(e,"a",e),e},n.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=i;o.push([0,"chunk-vendors"]),t()})({0:function(a,e,t){a.exports=t("56d7")},"034f":function(a,e,t){"use strict";t("85ec")},"56d7":function(a,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var s=t("2b0e"),r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"app"}},[t("SignUpForm")],1)},o=[],n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ValidationObserver",{ref:"validationObserver",scopedSlots:a._u([{key:"default",fn:function(e){var s=e.handleSubmit;return[t("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),s(a.submitHandler)}}},[t("h2",{staticClass:"form__title"},[a._v("Sign up")]),t("div",{staticClass:"form__labels-group"},[t("ValidationProvider",{staticClass:"form__label",attrs:{tag:"label",name:"First name",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var s=e.errors;return[t("strong",{staticClass:"form__label-name"},[a._v("First name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.data.firstName,expression:"data.firstName"}],staticClass:"form__label-input",attrs:{type:"text"},domProps:{value:a.data.firstName},on:{input:function(e){e.target.composing||a.$set(a.data,"firstName",e.target.value)}}}),t("span",{staticClass:"form__label-error"},[a._v(a._s(s[0]))])]}}],null,!0)}),t("ValidationProvider",{staticClass:"form__label",attrs:{tag:"label",name:"Last name",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var s=e.errors;return[t("strong",{staticClass:"form__label-name"},[a._v("First name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.data.lastName,expression:"data.lastName"}],staticClass:"form__label-input",attrs:{type:"text"},domProps:{value:a.data.lastName},on:{input:function(e){e.target.composing||a.$set(a.data,"lastName",e.target.value)}}}),t("span",{staticClass:"form__label-error"},[a._v(a._s(s[0]))])]}}],null,!0)})],1),t("ValidationProvider",{staticClass:"form__label",attrs:{tag:"div",name:"Personal phone number",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var s=e.errors;return[t("strong",{staticClass:"form__label-name"},[a._v("Personal phone number")]),t("VuePhoneNumberInput",{attrs:{"valid-color":"#008405","error-color":"#FC0202"},model:{value:a.data.personalPhone,callback:function(e){a.$set(a.data,"personalPhone",e)},expression:"data.personalPhone"}}),t("span",{staticClass:"form__label-error"},[a._v(a._s(s[0]))])]}}],null,!0)}),t("div",{staticClass:"form__labels-group"},[t("ValidationProvider",{staticClass:"form__label",attrs:{tag:"label",name:"Email",rules:"required|email"},scopedSlots:a._u([{key:"default",fn:function(e){var s=e.errors;return[t("strong",{staticClass:"form__label-name"},[a._v("Email")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.data.email,expression:"data.email"}],staticClass:"form__label-input",attrs:{type:"email"},domProps:{value:a.data.email},on:{input:function(e){e.target.composing||a.$set(a.data,"email",e.target.value)}}}),t("span",{staticClass:"form__label-error"},[a._v(a._s(s[0]))])]}}],null,!0)}),t("label",{staticClass:"form__label form__checkbox-label"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.data.sendEmailCheckbox,expression:"data.sendEmailCheckbox"}],staticClass:"form__label-checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(a.data.sendEmailCheckbox)?a._i(a.data.sendEmailCheckbox,null)>-1:a.data.sendEmailCheckbox},on:{change:function(e){var t=a.data.sendEmailCheckbox,s=e.target,r=!!s.checked;if(Array.isArray(t)){var o=null,n=a._i(t,o);s.checked?n<0&&a.$set(a.data,"sendEmailCheckbox",t.concat([o])):n>-1&&a.$set(a.data,"sendEmailCheckbox",t.slice(0,n).concat(t.slice(n+1)))}else a.$set(a.data,"sendEmailCheckbox",r)}}}),t("strong",{staticClass:"form__label-name"},[a._v("Send me email in plain text")])])],1),t("ValidationProvider",{staticClass:"form__label",attrs:{tag:"label",name:"Company name",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var s=e.errors;return[t("strong",{staticClass:"form__label-name"},[a._v("Company name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.data.companyName,expression:"data.companyName"}],staticClass:"form__label-input",attrs:{type:"text"},domProps:{value:a.data.companyName},on:{input:function(e){e.target.composing||a.$set(a.data,"companyName",e.target.value)}}}),t("span",{staticClass:"form__label-error"},[a._v(a._s(s[0]))])]}}],null,!0)}),t("ValidationProvider",{staticClass:"form__label",attrs:{tag:"div",name:"Company address",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var s=e.errors;return[t("strong",{staticClass:"form__label-name"},[a._v("Company address")]),t("vue-google-autocomplete",{attrs:{id:"map",classname:"form__label-input",placeholder:""},on:{placechanged:a.getAddressData,inputChange:a.getAddressData},model:{value:a.data.companyAddress,callback:function(e){a.$set(a.data,"companyAddress",e)},expression:"data.companyAddress"}}),t("span",{staticClass:"form__label-error"},[a._v(a._s(s[0]))])]}}],null,!0)}),t("ValidationProvider",{staticClass:"form__label",attrs:{tag:"div",name:"Company phone number",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var s=e.errors;return[t("strong",{staticClass:"form__label-name"},[a._v("Company phone number")]),t("VuePhoneNumberInput",{attrs:{"valid-color":"#008405","error-color":"#FC0202"},model:{value:a.data.companyPhone,callback:function(e){a.$set(a.data,"companyPhone",e)},expression:"data.companyPhone"}}),t("span",{staticClass:"form__label-error"},[a._v(a._s(s[0]))])]}}],null,!0)}),t("div",{staticClass:"form__labels-group"},[t("ValidationProvider",{class:["form__label",a.getPasswordStrength.class],attrs:{tag:"label",name:"Password",rules:"min:10|required",vid:"confirmation"},scopedSlots:a._u([{key:"default",fn:function(e){var s=e.errors;return[t("strong",{staticClass:"form__label-name"},[a._v("Password")]),a.data.password?t("b",{staticClass:"form__password-status"},[a._v(a._s(a.getPasswordStrength.status))]):a._e(),"checkbox"===(a.showPassword?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:a.data.password,expression:"data.password"}],staticClass:"form__label-input form__label-password-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(a.data.password)?a._i(a.data.password,null)>-1:a.data.password},on:{change:function(e){var t=a.data.password,s=e.target,r=!!s.checked;if(Array.isArray(t)){var o=null,n=a._i(t,o);s.checked?n<0&&a.$set(a.data,"password",t.concat([o])):n>-1&&a.$set(a.data,"password",t.slice(0,n).concat(t.slice(n+1)))}else a.$set(a.data,"password",r)}}}):"radio"===(a.showPassword?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:a.data.password,expression:"data.password"}],staticClass:"form__label-input form__label-password-input",attrs:{type:"radio"},domProps:{checked:a._q(a.data.password,null)},on:{change:function(e){return a.$set(a.data,"password",null)}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:a.data.password,expression:"data.password"}],staticClass:"form__label-input form__label-password-input",attrs:{type:a.showPassword?"text":"password"},domProps:{value:a.data.password},on:{input:function(e){e.target.composing||a.$set(a.data,"password",e.target.value)}}}),t("button",{directives:[{name:"show",rawName:"v-show",value:a.data.password,expression:"data.password"}],class:["form__password-show-btn",{"is-showed":a.showPassword}],attrs:{type:"button"},on:{click:function(e){a.showPassword=!a.showPassword}}}),t("span",{staticClass:"form__label-error"},[a._v(a._s(s[0]))])]}}],null,!0)}),t("ValidationProvider",{staticClass:"form__label",attrs:{tag:"label",name:"Confirm password",rules:"confirmed:confirmation|required"},scopedSlots:a._u([{key:"default",fn:function(e){var s=e.errors;return[t("strong",{staticClass:"form__label-name"},[a._v("Confirm password")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.data.confirmedPassword,expression:"data.confirmedPassword"}],staticClass:"form__label-input",attrs:{type:"password"},domProps:{value:a.data.confirmedPassword},on:{input:function(e){e.target.composing||a.$set(a.data,"confirmedPassword",e.target.value)}}}),t("span",{staticClass:"form__label-error"},[a._v(" "+a._s(s[0]))])]}}],null,!0)})],1),t("ValidationProvider",{staticClass:"form__label form__checkbox-label",attrs:{tag:"label",name:"Accepted privacy policy",rules:"is_checked"},scopedSlots:a._u([{key:"default",fn:function(e){var s=e.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.data.acceptedPolicyCheckbox,expression:"data.acceptedPolicyCheckbox"}],staticClass:"form__label-checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(a.data.acceptedPolicyCheckbox)?a._i(a.data.acceptedPolicyCheckbox,null)>-1:a.data.acceptedPolicyCheckbox},on:{change:function(e){var t=a.data.acceptedPolicyCheckbox,s=e.target,r=!!s.checked;if(Array.isArray(t)){var o=null,n=a._i(t,o);s.checked?n<0&&a.$set(a.data,"acceptedPolicyCheckbox",t.concat([o])):n>-1&&a.$set(a.data,"acceptedPolicyCheckbox",t.slice(0,n).concat(t.slice(n+1)))}else a.$set(a.data,"acceptedPolicyCheckbox",r)}}}),t("strong",{staticClass:"form__label-name"},[a._v("Accept "),t("a",{staticClass:"form__policy-link",attrs:{href:"#"}},[a._v("Privacy Policy")])]),t("span",{staticClass:"form__label-error"},[a._v(a._s(s[0]))])]}}],null,!0)}),t("div",{staticClass:"form__footer"},[t("button",{staticClass:"form__submit-btn",attrs:{type:"submit"}},[a._v("Sign in")])])],1)]}}])})},l=[],i=(t("4160"),t("b64b"),t("159b"),t("5530")),c=t("7bb1"),d=t("4c93"),u=t("7bec"),m=t.n(u),p=t("0118");t("4413");Object.keys(d).forEach((function(a){switch(a){case"required":Object(c["c"])(a,Object(i["a"])(Object(i["a"])({},d[a]),{},{message:"{_field_} is required"}));break;case"min":Object(c["c"])(a,Object(i["a"])(Object(i["a"])({},d[a]),{},{message:"{_field_} field must be at least 10 characters"}));break;default:Object(c["c"])(a,d[a])}})),Object(c["c"])("is_checked",{validate:function(a){return a},computesRequired:!0,message:"{_field_} is required"});var f={name:"SignUpForm",components:{ValidationObserver:c["a"],ValidationProvider:c["b"],VuePhoneNumberInput:m.a,VueGoogleAutocomplete:p["a"]},data:function(){return{data:{firstName:"",lastName:"",personalPhone:"",email:"",sendEmailCheckbox:!1,companyName:"",companyAddress:"",companyPhone:"",password:"",confirmedPassword:"",acceptedPolicyCheckbox:!1},showPassword:!1}},computed:{getPasswordStrength:function(){switch(!0){case/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/g.test(this.data.password):return{status:"Strong",class:"is-strong"};case/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/g.test(this.data.password):return{status:"Medium",class:"is-medium"};case/([a-z])/g.test(this.data.password):return{status:"Week",class:"is-week"}}return{}}},methods:{submitHandler:function(){var a=this;alert(JSON.stringify(this.data,null,2)),setTimeout((function(){a.data={firstName:"",lastName:"",personalPhone:"",email:"",sendEmailCheckbox:!1,companyName:"",companyAddress:"",companyPhone:"",password:"",confirmedPassword:"",acceptedPolicyCheckbox:!1},a.$nextTick((function(){a.$nextTick((function(){a.$refs.validationObserver.reset()}))}))}),100)},getAddressData:function(a){this.data.companyAddress=a.newVal}},mounted:function(){var a=this;setTimeout((function(){a.data={firstName:"",lastName:"",personalPhone:"",email:"",sendEmailCheckbox:!1,companyName:"",companyAddress:"",companyPhone:"",password:"",confirmedPassword:"",acceptedPolicyCheckbox:!1}}),2e3)}},_=f,b=(t("b6aa"),t("e0e2"),t("2877")),v=Object(b["a"])(_,n,l,!1,null,"527e3724",null),h=v.exports,y={name:"App",components:{SignUpForm:h}},w=y,g=(t("034f"),Object(b["a"])(w,r,o,!1,null,null,null)),C=g.exports;s["default"].config.productionTip=!1,new s["default"]({render:function(a){return a(C)}}).$mount("#app")},"85ec":function(a,e,t){},b6aa:function(a,e,t){"use strict";t("b933")},b933:function(a,e,t){},ce04:function(a,e,t){},e0e2:function(a,e,t){"use strict";t("ce04")}});
//# sourceMappingURL=app.4123a5cf.js.map