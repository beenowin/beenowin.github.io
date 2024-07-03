(globalThis["webpackChunkq_front"] = globalThis["webpackChunkq_front"] || []).push([[857],{

/***/ 5857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ EmptyLayout)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(9835);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(6970);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/EmptyLayout.vue?vue&type=template&id=57dd60c1&scoped=true

const _withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-57dd60c1"), n = n(), (0,runtime_core_esm_bundler/* popScopeId */.Cn)(), n);
const _hoisted_1 = {
  class: "app-header empty"
};
const _hoisted_2 = ["src"];
const _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  style: {
    "transform": "rotate(45deg) translate(1px, -1px)"
  }
}, "+", -1));
const _hoisted_4 = {
  key: 0,
  class: "cookiePanel"
};
const _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("br", null, null, -1));
const _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("br", null, null, -1));
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-link");
  const _component_router_view = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-view");
  const _component_q_page_container = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page-container");
  const _component_q_layout = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-layout");
  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_layout, {
    class: "default-layout"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("header", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_link, {
      to: "/",
      class: "logo-box"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
        class: "mobile-logo",
        src: _ctx.darkMode ? _ctx.darkLogo : _ctx.darkLogo,
        alt: "Beenow",
        width: "120",
        height: "60",
        title: "Beenow - агрегатор новин"
      }, null, 8, _hoisted_2)]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_link, {
      to: _ctx.backUrl,
      class: "back-button"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_3]),
      _: 1
    }, 8, ["to"])]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_page_container, {
      class: "main-box empty"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_view)]),
      _: 1
    }), _ctx.showCookiePanel ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_4, [(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.$t("cookie_message")) + " ", 1), _hoisted_5, _hoisted_6, (0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" " + (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.$t("thanks")) + "! ", 1)]), (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
      class: "close-btn",
      title: "Закрити",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.closeCookiesPanel && _ctx.closeCookiesPanel(...args))
    }, " + ")])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/layouts/EmptyLayout.vue?vue&type=template&id=57dd60c1&scoped=true

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(499);
// EXTERNAL MODULE: ./src/services/index.js + 8 modules
var services = __webpack_require__(373);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/EmptyLayout.vue?vue&type=script&lang=js


/* harmony default export */ const EmptyLayoutvue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: 'MainLayout',
  setup() {
    const showCookiePanel = (0,reactivity_esm_bundler/* ref */.iH)(true);
    const storageService = new services/* StorageService */.V1();
    const isHideCookiePanel = storageService.get('isHideCookiePanel');
    const {
      darkMode
    } = services.DarkModeService;
    if (isHideCookiePanel) {
      showCookiePanel.value = false;
    }
    const closeCookiesPanel = () => {
      showCookiePanel.value = false;
      storageService.set('isHideCookiePanel', true, 1.21e6 * 1000);
    };
    const refreshPage = () => {
      location.reload();
    };
    return {
      showCookiePanel,
      darkMode,
      backUrl: history.state.back ? history.state.back : '/',
      darkLogo: __webpack_require__(113),
      whiteLogo: __webpack_require__(722),
      host: "beenowin.github.io",
      closeCookiesPanel,
      refreshPage
    };
  }
}));
;// CONCATENATED MODULE: ./src/layouts/EmptyLayout.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(1639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/layout/QLayout.js + 3 modules
var QLayout = __webpack_require__(1967);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPageContainer.js
var QPageContainer = __webpack_require__(2133);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(9984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/layouts/EmptyLayout.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(EmptyLayoutvue_type_script_lang_js, [['render',render],['__scopeId',"data-v-57dd60c1"]])

/* harmony default export */ const EmptyLayout = (__exports__);
;


runtime_auto_import_default()(EmptyLayoutvue_type_script_lang_js, 'components', {QLayout: QLayout/* default */.Z,QPageContainer: QPageContainer/* default */.Z});


/***/ }),

/***/ 722:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/white-logo.b58dc011.svg";

/***/ })

}]);
//# sourceMappingURL=857.eb99b6eb.js.map