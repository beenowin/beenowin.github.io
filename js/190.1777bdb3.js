(globalThis["webpackChunkq_front"] = globalThis["webpackChunkq_front"] || []).push([[190],{

/***/ 190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MainLayout)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(9835);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(6970);
// EXTERNAL MODULE: ./src/assets/img/arrow.svg
var arrow = __webpack_require__(8889);
var arrow_default = /*#__PURE__*/__webpack_require__.n(arrow);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/MainLayout.vue?vue&type=template&id=2eb62b28


const _hoisted_1 = {
  class: "footer-desc"
};
const _hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
  src: (arrow_default()),
  width: "24",
  height: "24",
  alt: "Вгору"
}, null, -1);
const _hoisted_3 = {
  key: 0,
  class: "new-posts-count"
};
const _hoisted_4 = {
  key: 0,
  class: "cookiePanel"
};
const _hoisted_5 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("br", null, null, -1);
const _hoisted_6 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("br", null, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_header = (0,runtime_core_esm_bundler/* resolveComponent */.up)("app-header");
  const _component_router_view = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-view");
  const _component_q_page_container = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page-container");
  const _component_q_layout = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-layout");
  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_layout, {
    class: "default-layout"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_app_header), ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_page_container, {
      key: Number(!_ctx.showChannelsModal),
      class: "main-box"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_view)]),
      _: 1
    })), (0,runtime_core_esm_bundler/* createElementVNode */._)("p", _hoisted_1, "Ⓒ 2022 - " + (0,shared_esm_bundler/* toDisplayString */.zw)(new Date().getFullYear()) + ", Beenow", 1), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
      class: (0,shared_esm_bundler/* normalizeClass */.C_)(["toTopButton", {
        active: _ctx.showScrollBtn
      }]),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.scrollToTop && _ctx.scrollToTop(...args))
    }, [_hoisted_2, _ctx.newPostsCount !== 0 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("span", _hoisted_3, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.newPostsCount > 9 ? "10+" : _ctx.newPostsCount), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)], 2), _ctx.showCookiePanel ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_4, [(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.$t("cookie_message")) + " ", 1), _hoisted_5, _hoisted_6, (0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" " + (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.$t("thanks")) + "! ", 1)]), (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
      class: "close-btn",
      title: "Закрити",
      onClick: _cache[1] || (_cache[1] = (...args) => _ctx.closeCookiesPanel && _ctx.closeCookiesPanel(...args))
    }, " + ")])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/layouts/MainLayout.vue?vue&type=template&id=2eb62b28

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(499);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm-bundler.js
var vuex_esm_bundler = __webpack_require__(61);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(9665);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(1957);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/AppHeader.vue?vue&type=template&id=04b0f410


const AppHeadervue_type_template_id_04b0f410_hoisted_1 = {
  class: "app-header container"
};
const AppHeadervue_type_template_id_04b0f410_hoisted_2 = {
  class: "top-box"
};
const AppHeadervue_type_template_id_04b0f410_hoisted_3 = ["src"];
const AppHeadervue_type_template_id_04b0f410_hoisted_4 = {
  class: "buttons-box"
};
const AppHeadervue_type_template_id_04b0f410_hoisted_5 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  width: "50",
  height: "50",
  viewBox: "0 0 50 50"
}, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("path", {
  d: "M47.16,21.221l-5.91-0.966c-0.346-1.186-0.819-2.326-1.411-3.405l3.45-4.917c0.279-0.397,0.231-0.938-0.112-1.282 l-3.889-3.887c-0.347-0.346-0.893-0.391-1.291-0.104l-4.843,3.481c-1.089-0.602-2.239-1.08-3.432-1.427l-1.031-5.886 C28.607,2.35,28.192,2,27.706,2h-5.5c-0.49,0-0.908,0.355-0.987,0.839l-0.956,5.854c-1.2,0.345-2.352,0.818-3.437,1.412l-4.83-3.45 c-0.399-0.285-0.942-0.239-1.289,0.106L6.82,10.648c-0.343,0.343-0.391,0.883-0.112,1.28l3.399,4.863 c-0.605,1.095-1.087,2.254-1.438,3.46l-5.831,0.971c-0.482,0.08-0.836,0.498-0.836,0.986v5.5c0,0.485,0.348,0.9,0.825,0.985 l5.831,1.034c0.349,1.203,0.831,2.362,1.438,3.46l-3.441,4.813c-0.284,0.397-0.239,0.942,0.106,1.289l3.888,3.891 c0.343,0.343,0.884,0.391,1.281,0.112l4.87-3.411c1.093,0.601,2.248,1.078,3.445,1.424l0.976,5.861C21.3,47.647,21.717,48,22.206,48 h5.5c0.485,0,0.9-0.348,0.984-0.825l1.045-5.89c1.199-0.353,2.348-0.833,3.43-1.435l4.905,3.441 c0.398,0.281,0.938,0.232,1.282-0.111l3.888-3.891c0.346-0.347,0.391-0.894,0.104-1.292l-3.498-4.857 c0.593-1.08,1.064-2.222,1.407-3.408l5.918-1.039c0.479-0.084,0.827-0.5,0.827-0.985v-5.5C47.999,21.718,47.644,21.3,47.16,21.221z M25,32c-3.866,0-7-3.134-7-7c0-3.866,3.134-7,7-7s7,3.134,7,7C32,28.866,28.866,32,25,32z"
})], -1);
const AppHeadervue_type_template_id_04b0f410_hoisted_6 = [AppHeadervue_type_template_id_04b0f410_hoisted_5];
const _hoisted_7 = {
  class: "lists-tab lists-tab-slider-box slider"
};
const _hoisted_8 = {
  id: "lists-tab-slider"
};
const _hoisted_9 = {
  class: "swiper-wrapper"
};
const _hoisted_10 = ["title", "onClick"];
const _hoisted_11 = {
  key: 0,
  class: "modal"
};
const _hoisted_12 = ["innerHTML"];
const _hoisted_13 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("br", null, null, -1);
const _hoisted_14 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("a", {
  href: "mailto:beenow_support@protonmail.com"
}, "beenow_support@protonmail.com", -1);
function AppHeadervue_type_template_id_04b0f410_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-link");
  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", null, [(0,runtime_core_esm_bundler/* createElementVNode */._)("header", AppHeadervue_type_template_id_04b0f410_hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", AppHeadervue_type_template_id_04b0f410_hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_link, {
    to: "/",
    class: "logo-box",
    onClick: (0,runtime_dom_esm_bundler/* withModifiers */.iM)(_ctx.refreshPage, ["prevent"])
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
      class: "mobile-logo",
      src: _ctx.darkLogo,
      alt: "Beenow",
      width: "120",
      height: "60",
      title: "Beenow - агрегатор новин"
    }, null, 8, AppHeadervue_type_template_id_04b0f410_hoisted_3)]),
    _: 1
  }, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", AppHeadervue_type_template_id_04b0f410_hoisted_4, [(0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
    title: "Налаштування",
    class: "settings-btn",
    onClick: _cache[0] || (_cache[0] = $event => _ctx.router.push('/settings'))
  }, AppHeadervue_type_template_id_04b0f410_hoisted_6), (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
    title: "Про проєкт",
    class: "about-btn",
    onClick: _cache[1] || (_cache[1] = $event => _ctx.modal(true))
  }, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.$t('about_project')), 1)])]), (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_7, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_8, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_9, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.lists, list => {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
      key: list.id,
      class: "swiper-slide"
    }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
      title: list.title,
      class: (0,shared_esm_bundler/* normalizeClass */.C_)(["list-tab-button", {
        active: list.name === _ctx.activeListName
      }]),
      onClick: $event => _ctx.changeActiveCategory(list.name)
    }, (0,shared_esm_bundler/* toDisplayString */.zw)(list.title), 11, _hoisted_10)]);
  }), 128))])])], 512), [[runtime_dom_esm_bundler/* vShow */.F8, _ctx.isHomePage]])]), _ctx.showModal ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_11, [(0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
    class: "close-btn",
    onClick: _cache[2] || (_cache[2] = $event => _ctx.modal(false))
  }, "+"), (0,runtime_core_esm_bundler/* createElementVNode */._)("p", {
    innerHTML: _ctx.$t('project_description')
  }, null, 8, _hoisted_12), _hoisted_13, (0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.$t('for_contact')) + " ", 1), _hoisted_14])])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]);
}
;// CONCATENATED MODULE: ./src/components/AppHeader.vue?vue&type=template&id=04b0f410

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.mjs
var vue_router = __webpack_require__(8339);
// EXTERNAL MODULE: ./src/utils.js
var utils = __webpack_require__(9471);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.esm.js + 90 modules
var swiper_esm = __webpack_require__(7847);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/AppHeader.vue?vue&type=script&lang=js





const useHeader = () => {
  const activeListName = (0,reactivity_esm_bundler/* ref */.iH)(localStorage.getItem('category') || 'all');
  const router = (0,vue_router/* useRouter */.tv)();
  const route = (0,vue_router/* useRoute */.yj)();
  const lists = (0,reactivity_esm_bundler/* ref */.iH)([]);
  const isHomePage = (0,runtime_core_esm_bundler/* computed */.Fl)(() => route.path === '/');
  const refreshPage = () => {
    if (!isHomePage.value) {
      return;
    }
    location.reload();
  };
  const changeActiveCategory = name => {
    activeListName.value = name;
    window.app.methods.changeActiveCategory(name);
  };
  const showModal = (0,reactivity_esm_bundler/* ref */.iH)(false);
  const modal = isShow => {
    showModal.value = isShow;
    (0,utils/* toggleBodyScroll */.R0)(isShow);
  };
  const swiper = (0,reactivity_esm_bundler/* ref */.iH)();
  const loadListsSlider = async () => {
    if (!isHomePage.value) {
      return;
    }
    if (swiper.value) {
      (0,runtime_core_esm_bundler/* nextTick */.Y3)(() => {
        swiper.value.update();
      });
      return swiper.value;
    }
    return new swiper_esm/* default */.ZP('#lists-tab-slider', {
      slidesPerView: 'auto',
      loop: false,
      centeredSlides: false,
      spaceBetween: 10,
      freeMode: true
    });
  };
  const loadHeader = async () => {
    if (!isHomePage.value) {
      return;
    }
    setTimeout(async () => {
      await window.app.methods.setCategoryLists(lists);
      swiper.value = await loadListsSlider();
    }, 10);
  };
  (0,runtime_core_esm_bundler/* onMounted */.bv)(() => {
    (0,runtime_core_esm_bundler/* nextTick */.Y3)(async () => {
      await loadHeader();
    });
  });
  (0,runtime_core_esm_bundler/* watch */.YP)(isHomePage, async () => {
    await loadHeader();
  });
  (0,runtime_core_esm_bundler/* onUnmounted */.Ah)(() => {
    if (swiper.value) {
      swiper.value.destroy();
    }
  });
  return {
    activeListName,
    isHomePage,
    lists,
    router,
    refreshPage,
    changeActiveCategory,
    modal,
    showModal,
    darkLogo: __webpack_require__(113)
  };
};
/* harmony default export */ const AppHeadervue_type_script_lang_js = ({
  name: 'AppHeader',
  setup() {
    return useHeader();
  }
});
;// CONCATENATED MODULE: ./src/components/AppHeader.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(1639);
;// CONCATENATED MODULE: ./src/components/AppHeader.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(AppHeadervue_type_script_lang_js, [['render',AppHeadervue_type_template_id_04b0f410_render]])

/* harmony default export */ const AppHeader = (__exports__);
// EXTERNAL MODULE: ./src/services/index.js + 9 modules
var services = __webpack_require__(4569);
// EXTERNAL MODULE: ./src/files/index.js
var files = __webpack_require__(8926);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/MainLayout.vue?vue&type=script&lang=js






/* harmony default export */ const MainLayoutvue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: "MainLayout",
  components: {
    AppHeader: AppHeader
  },
  setup() {
    const showCookiePanel = (0,reactivity_esm_bundler/* ref */.iH)(true);
    const showChannelsModal = (0,reactivity_esm_bundler/* ref */.iH)(false);
    const store = (0,vuex_esm_bundler/* useStore */.oR)();
    const storageService = new services/* StorageService */.V1();
    const {
      scrollToTop,
      showScrollBtn
    } = (0,services/* PreloaderService */.Cf)();
    const isHideCookiePanel = storageService.get("isHideCookiePanel");
    const newPostsCount = (0,runtime_core_esm_bundler/* computed */.Fl)(() => store.getters["post/newPostsCount"]);
    if (isHideCookiePanel) {
      showCookiePanel.value = false;
    }
    const channelModalToggle = async isShow => {
      if (!isShow) {
        await store.dispatch("post/loadPosts");
      }
      showChannelsModal.value = isShow;
      (0,utils/* toggleBodyScroll */.R0)(isShow);
    };
    const closeCookiesPanel = () => {
      showCookiePanel.value = false;
      storageService.set("isHideCookiePanel", true, 1.21e6 * 1000);
    };
    return {
      showCookiePanel,
      showChannelsModal,
      gridImg: files.gridImg,
      newPostsCount,
      scrollToTop,
      showScrollBtn,
      closeCookiesPanel,
      channelModalToggle
    };
  }
}));
;// CONCATENATED MODULE: ./src/layouts/MainLayout.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/layout/QLayout.js + 3 modules
var QLayout = __webpack_require__(1967);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPageContainer.js
var QPageContainer = __webpack_require__(2133);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(9984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/layouts/MainLayout.vue




;


const MainLayout_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(MainLayoutvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const MainLayout = (MainLayout_exports_);
;


runtime_auto_import_default()(MainLayoutvue_type_script_lang_js, 'components', {QLayout: QLayout/* default */.Z,QPageContainer: QPageContainer/* default */.Z});


/***/ }),

/***/ 8889:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDIwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDdMOS43NDI4NiAxTDE5IDciIHN0cm9rZT0iIzAwNTdCNyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="

/***/ })

}]);
//# sourceMappingURL=190.1777bdb3.js.map