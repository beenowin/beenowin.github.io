"use strict";
(globalThis["webpackChunkq_front"] = globalThis["webpackChunkq_front"] || []).push([[575],{

/***/ 4394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PostPage)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(9835);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/PostPage.vue?vue&type=template&id=ad01e2ac

const _hoisted_1 = {
  class: "single-post"
};
const _hoisted_2 = {
  class: "post-container container"
};
const _hoisted_3 = {
  key: 0
};
const _hoisted_4 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
  style: {
    "transform": "translateY(-6px)"
  }
}, "←", -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-link");
  const _component_post_item = (0,runtime_core_esm_bundler/* resolveComponent */.up)("post-item");
  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [$setup.post ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_3, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_link, {
    class: "back-button",
    to: "/"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_4]),
    _: 1
  }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_post_item, {
    post: $setup.post,
    "is-post-page": true
  }, null, 8, ["post"])])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)])]);
}
;// CONCATENATED MODULE: ./src/pages/PostPage.vue?vue&type=template&id=ad01e2ac

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(9665);
// EXTERNAL MODULE: ./src/components/PostItem.vue + 4 modules
var PostItem = __webpack_require__(2820);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm-bundler.js
var vuex_esm_bundler = __webpack_require__(61);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.mjs
var vue_router = __webpack_require__(8339);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/PostPage.vue?vue&type=script&lang=js






/* harmony default export */ const PostPagevue_type_script_lang_js = ({
  components: {
    PostItem: PostItem/* default */.Z
    // Head,
    // Comments,
  },

  setup() {
    const store = (0,vuex_esm_bundler/* useStore */.oR)();
    const route = (0,vue_router/* useRoute */.yj)();
    const router = (0,vue_router/* useRouter */.tv)();
    const post = (0,runtime_core_esm_bundler/* computed */.Fl)(() => store.getters['post/item']);
    (0,runtime_core_esm_bundler/* onMounted */.bv)(async () => {
      try {
        await store.dispatch('post/loadPost', route.params.id);
        if (!post.value) {
          return router.push('/not-found');
        }
        if (post.value.messageId) {
          // await loadComments()
        }
      } catch (e) {
        console.log(e);
      }
    });
    (0,runtime_core_esm_bundler/* onUnmounted */.Ah)(() => {
      store.commit('post/setPost', null);
    });
    return {
      post
      // head,
    };
  }
});
;// CONCATENATED MODULE: ./src/pages/PostPage.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(1639);
;// CONCATENATED MODULE: ./src/pages/PostPage.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(PostPagevue_type_script_lang_js, [['render',render]])

/* harmony default export */ const PostPage = (__exports__);

/***/ })

}]);
//# sourceMappingURL=575.2b580018.js.map