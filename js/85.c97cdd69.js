"use strict";
(globalThis["webpackChunkq_front"] = globalThis["webpackChunkq_front"] || []).push([[85],{

/***/ 9761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HomePage)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(9835);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(6970);
// EXTERNAL MODULE: ./src/assets/img/loader.gif
var loader = __webpack_require__(9901);
var loader_default = /*#__PURE__*/__webpack_require__.n(loader);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/HomePage.vue?vue&type=template&id=68744872


const _hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  id: "tgme_background",
  class: "tgme_background"
}, null, -1);
const _hoisted_2 = {
  id: "lists-tab-box"
};
const _hoisted_3 = {
  class: ""
};
const _hoisted_4 = ["title", "onClick"];
const _hoisted_5 = ["title"];
const _hoisted_6 = {
  ref: "scrollComponent",
  class: "posts"
};
const _hoisted_7 = {
  class: "post-loading"
};
const _hoisted_8 = {
  key: 0,
  src: (loader_default()),
  alt: ""
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_post_item = (0,runtime_core_esm_bundler/* resolveComponent */.up)("post-item");
  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page");
  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_page, {
    class: "home container"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_1, (0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
      class: (0,shared_esm_bundler/* normalizeClass */.C_)(["lists-tab sidebar", {
        'stick-to-top': $setup.isSticky
      }])
    }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_3, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($setup.lists, list => {
      return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
        key: list.id
      }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
        title: list[$setup.locale],
        class: (0,shared_esm_bundler/* normalizeClass */.C_)(["list-tab-button", {
          active: list.name === $setup.activeListName
        }]),
        onClick: $event => $setup.changeActiveCategory(list.name)
      }, (0,shared_esm_bundler/* toDisplayString */.zw)(list[$setup.locale]), 11, _hoisted_4)]);
    }), 128))])])], 2), $setup.newPostsCount !== 0 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("button", {
      key: 0,
      class: "load-new-posts",
      title: `${_ctx.$t('load_more')}(${$setup.newPostsCount})`,
      onClick: _cache[0] || (_cache[0] = (...args) => $setup.loadNewPosts && $setup.loadNewPosts(...args))
    }, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.$t('load_more')) + "(" + (0,shared_esm_bundler/* toDisplayString */.zw)($setup.newPostsCount > 9 ? '10+' : $setup.newPostsCount) + ") ", 9, _hoisted_5)) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_6, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($setup.posts, post => {
      return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_post_item, {
        key: post._id,
        post: post
      }, null, 8, ["post"]);
    }), 128)), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_7, [$setup.isLoading ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("img", _hoisted_8)) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)])], 512)]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/pages/HomePage.vue?vue&type=template&id=68744872

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.unshift.js
var es_array_unshift = __webpack_require__(6890);
// EXTERNAL MODULE: ./src/components/PostItem.vue + 4 modules
var PostItem = __webpack_require__(2820);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm-bundler.js
var vuex_esm_bundler = __webpack_require__(61);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(499);
// EXTERNAL MODULE: ./node_modules/vue-i18n/dist/vue-i18n.mjs + 3 modules
var vue_i18n = __webpack_require__(6647);
// EXTERNAL MODULE: ./src/services/index.js + 8 modules
var services = __webpack_require__(373);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/HomePage.vue?vue&type=script&lang=js








/* harmony default export */ const HomePagevue_type_script_lang_js = ({
  components: {
    PostItem: PostItem/* default */.Z
  },
  setup() {
    const scrollComponent = (0,reactivity_esm_bundler/* ref */.iH)(null);
    const isSticky = (0,reactivity_esm_bundler/* ref */.iH)(false);
    const lists = (0,reactivity_esm_bundler/* ref */.iH)([]);
    const activeCategory = localStorage.getItem('category') || 'all';
    const {
      locale
    } = (0,vue_i18n/* useI18n */.QT)({
      useScope: 'global'
    });
    const activeListName = (0,reactivity_esm_bundler/* ref */.iH)(activeCategory);
    const isLoading = (0,reactivity_esm_bundler/* ref */.iH)(false);
    const store = (0,vuex_esm_bundler/* useStore */.oR)();
    const postsCounterService = new services/* PostsCounterService */.i$(store);
    const posts = (0,runtime_core_esm_bundler/* computed */.Fl)(() => store.getters['post/items']);
    const newPostsCount = (0,runtime_core_esm_bundler/* computed */.Fl)(() => store.getters['post/newPostsCount']);
    const loadPosts = async () => {
      isLoading.value = true;
      postsCounterService.clearPostsCountInterval();
      await store.dispatch('post/loadPosts');
      postsCounterService.initPostsCountInterval();
      isLoading.value = false;
    };
    const loadNewPosts = async () => {
      await loadPosts();
    };
    const loadMorePosts = async () => {
      isLoading.value = true;
      await store.dispatch('post/loadMorePosts');
      isLoading.value = false;
    };
    const changeActiveCategory = async name => {
      if (typeof window === 'undefined') {
        return;
      }
      if (isLoading.value) {
        return;
      }
      activeListName.value = name;
      localStorage.setItem('category', name);
      await loadPosts();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    window.app.methods.changeActiveCategory = changeActiveCategory;
    const handleScroll = async () => {
      if (typeof window === 'undefined') {
        return;
      }
      if (window.scrollY > 80) {
        isSticky.value = true;
      } else {
        isSticky.value = false;
      }
      if (isLoading.value) {
        return;
      }
      let element = scrollComponent.value;
      if (element.getBoundingClientRect().bottom - 30 < window.innerHeight) {
        await loadMorePosts();
      }
    };
    const setCategoryLists = async lists => {
      lists.value = await services/* ChannelService */.Tj.getChannelsCategories();
      // move active category to first position
      const activeCategoryIndex = lists.value.findIndex(list => list.name === activeListName.value);
      const activeCategory = lists.value.splice(activeCategoryIndex, 1);
      lists.value = lists.value.filter(list => list.visible);
      lists.value.unshift(activeCategory[0]);
    };
    window.app.methods.setCategoryLists = setCategoryLists;
    (0,runtime_core_esm_bundler/* onMounted */.bv)(async () => {
      if (!posts.value.length) {
        await services/* RequestPreloadQueue */.qD.addRequest(loadPosts);
      }
      await setCategoryLists(lists);
      window.addEventListener('scroll', handleScroll);
    });
    (0,runtime_core_esm_bundler/* onUnmounted */.Ah)(() => {
      window.removeEventListener('scroll', handleScroll);
      postsCounterService.clearPostsCountInterval();
    });
    return {
      isSticky,
      activeListName,
      lists,
      scrollComponent,
      posts,
      isLoading,
      locale,
      newPostsCount,
      loadMorePosts,
      loadNewPosts,
      changeActiveCategory
    };
  }
});
;// CONCATENATED MODULE: ./src/pages/HomePage.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(1639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(9885);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(9984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/HomePage.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(HomePagevue_type_script_lang_js, [['render',render]])

/* harmony default export */ const HomePage = (__exports__);
;

runtime_auto_import_default()(HomePagevue_type_script_lang_js, 'components', {QPage: QPage/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=85.c97cdd69.js.map