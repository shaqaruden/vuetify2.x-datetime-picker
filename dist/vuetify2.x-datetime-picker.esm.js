import e from"moment";import t,{VDialog as i,VTextField as a,VDatePicker as n,VTimePicker as o,VSpacer as r,VBtn as d}from"vuetify/lib";import{Ripple as l}from"vuetify/lib/directives";import"vuetify/dist/vuetify.min.css";var s=function(e,t,i,a,n,o,r,d,l,s){"boolean"!=typeof r&&(l=d,d=r,r=!1);var u,c="function"==typeof i?i.options:i;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,n&&(c.functional=!0)),a&&(c._scopeId=a),o?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=u):t&&(u=r?function(){t.call(this,s(this.$root.$options.shadowRoot))}:function(e){t.call(this,d(e))}),u)if(c.functional){var m=c.render;c.render=function(e,t){return u.call(t),m(e,t)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,u):[u]}return i}({render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-dialog",{ref:"date_dialog",attrs:{"return-value":e.date,persistent:"","full-width":"",width:e.pickerWidth+"px"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[i("v-text-field",e._g({ref:"dateTime",attrs:{label:e.label,"prepend-icon":e.icon,filled:e.filled},model:{value:e.date_time,callback:function(t){e.date_time=t},expression:"date_time"}},a))]}}]),model:{value:e.date_modal,callback:function(t){e.date_modal=t},expression:"date_modal"}},[e._v(" "),i("v-date-picker",{attrs:{scrollable:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},[i("v-spacer"),e._v(" "),i("v-dialog",{ref:"time_dialog",attrs:{"return-value":e.date,persistent:"","full-width":"",width:e.pickerWidth+"px"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[i("v-btn",e._g({attrs:{text:""}},a),[e._v("OK")])]}}]),model:{value:e.time_modal,callback:function(t){e.time_modal=t},expression:"time_modal"}},[e._v(" "),i("v-time-picker",{attrs:{scrollable:""},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}},[i("v-spacer"),e._v(" "),i("v-btn",{attrs:{text:""},on:{click:e.updateDate}},[e._v("OK")])],1)],1)],1)],1)},staticRenderFns:[]},void 0,{name:"Vuetify2.xDatetimePicker",props:{value:{type:String},dateFormat:{type:String,default:"YYYY-MM-DD"},timeFormat:{type:String,default:"HH:mm"},pickerWidth:{type:String,default:"290"},label:{type:String,default:"Date/Time Picker"},icon:{type:String,default:"event"},filled:{type:Boolean,default:!1}},computed:{date_time:function(){return this.date+" "+this.time+":00"}},data:function(){return{date_modal:!1,time_modal:!1,date:e(this.value).format(this.dateFormat),time:e(this.value).format(this.timeFormat)}},methods:{updateDate:function(){console.log("Calling updateDate"),this.date_modal=!1,this.time_modal=!1,this.$emit("input",this.date_time),this.$emit("save",this.date_time)}}},void 0,!1,void 0,void 0,void 0);function u(e){u.installed||(u.installed=!0,e.component("v-datetime-picker",s),e.use(t,{components:{VDialog:i,VTextField:a,VDatePicker:n,VTimePicker:o,VSpacer:r,VBtn:d},directives:{Ripple:l}}))}var c={install:u},m=null;"undefined"!=typeof window?m=window.Vue:"undefined"!=typeof global&&(m=global.Vue),m&&m.use(c),s.install=u;export default s;
