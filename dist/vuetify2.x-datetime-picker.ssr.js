'use strict';Object.defineProperty(exports,'__esModule',{value:true});function _interopDefault(e){return(e&&(typeof e==='object')&&'default'in e)?e['default']:e}var moment=_interopDefault(require('moment')),Vuetify=require('vuetify/lib'),Vuetify__default=_interopDefault(Vuetify),directives=require('vuetify/lib/directives');require('vuetify/dist/vuetify.min.css');var script = {
  name: "Vuetify2.xDatetimePicker", // vue component name
  props: {
    value: {
      type: String
    },
    dateFormat: {
      type: String,
      default: "YYYY-MM-DD"
    },
    timeFormat: {
      type: String,
      default: "HH:mm"
    },
    pickerWidth: {
      type: String,
      default: "290"
    },
    label: {
      type: String,
      default: "Date/Time Picker"
    },
    icon: {
      type: String,
      default: "event"
    },
    filled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    date_time: function date_time() {
      return this.date + " " + this.time + ":00";
    }
  },
  data: function data() {
    return {
      date_modal: false,
      time_modal: false,
      date: moment(this.value).format(this.dateFormat),
      time: moment(this.value).format(this.timeFormat)
    };
  },
  methods: {
    updateDate: function updateDate() {
      console.log("Calling updateDate");
      this.date_modal = false;
      this.time_modal = false;
      this.$emit("input", this.date_time);
      this.$emit("save", this.date_time);
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-dialog',{ref:"date_dialog",attrs:{"return-value":_vm.date,"persistent":"","full-width":"","width":_vm.pickerWidth + 'px'},on:{"update:returnValue":function($event){_vm.date=$event;},"update:return-value":function($event){_vm.date=$event;}},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
return [_c('v-text-field',_vm._g({ref:"dateTime",attrs:{"label":_vm.label,"prepend-icon":_vm.icon,"filled":_vm.filled},model:{value:(_vm.date_time),callback:function ($$v) {_vm.date_time=$$v;},expression:"date_time"}},on))]}}]),model:{value:(_vm.date_modal),callback:function ($$v) {_vm.date_modal=$$v;},expression:"date_modal"}},[_vm._v(" "),_c('v-date-picker',{attrs:{"scrollable":""},model:{value:(_vm.date),callback:function ($$v) {_vm.date=$$v;},expression:"date"}},[_c('v-spacer'),_vm._v(" "),_c('v-dialog',{ref:"time_dialog",attrs:{"return-value":_vm.date,"persistent":"","full-width":"","width":_vm.pickerWidth + 'px'},on:{"update:returnValue":function($event){_vm.date=$event;},"update:return-value":function($event){_vm.date=$event;}},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
return [_c('v-btn',_vm._g({attrs:{"text":""}},on),[_vm._v("OK")])]}}]),model:{value:(_vm.time_modal),callback:function ($$v) {_vm.time_modal=$$v;},expression:"time_modal"}},[_vm._v(" "),_c('v-time-picker',{attrs:{"scrollable":""},model:{value:(_vm.time),callback:function ($$v) {_vm.time=$$v;},expression:"time"}},[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"text":""},on:{"click":_vm.updateDate}},[_vm._v("OK")])],1)],1)],1)],1)};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = "data-v-b84b0f40";
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var component = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );// Import vue component

// install function executed by Vue.use()
function install(Vue) {
  if (install.installed) { return; }
  install.installed = true;
  Vue.component('v-datetime-picker', component);
  Vue.use(Vuetify__default, {
    components: { VDialog: Vuetify.VDialog, VTextField: Vuetify.VTextField, VDatePicker: Vuetify.VDatePicker, VTimePicker: Vuetify.VTimePicker, VSpacer: Vuetify.VSpacer, VBtn: Vuetify.VBtn },
    directives: { Ripple: directives.Ripple }
  });
}

// Create module definition for Vue.use()
var plugin = {
  install: install,
};

// To auto-install when vue is found
/* global window global */
var GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()
component.install = install;

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;
exports.default=component;