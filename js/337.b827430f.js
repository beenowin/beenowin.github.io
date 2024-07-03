"use strict";
(globalThis["webpackChunkq_front"] = globalThis["webpackChunkq_front"] || []).push([[337],{

/***/ 337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SettingsPage)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(9835);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(6970);
// EXTERNAL MODULE: ./src/assets/img/loader.gif
var loader = __webpack_require__(9901);
var loader_default = /*#__PURE__*/__webpack_require__.n(loader);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/SettingsPage.vue?vue&type=template&id=3c467202


const _hoisted_1 = {
  key: 0,
  class: "settings"
};
const _hoisted_2 = {
  class: ""
};
const _hoisted_3 = {
  class: "setting-title"
};
const _hoisted_4 = {
  class: "setting-item"
};
const _hoisted_5 = {
  class: "setting-label"
};
const _hoisted_6 = {
  class: "setting-item"
};
const _hoisted_7 = {
  class: "setting-label"
};
const _hoisted_8 = {
  class: "setting-title"
};
const _hoisted_9 = {
  key: 1,
  class: "settings-loader"
};
const _hoisted_10 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
  src: (loader_default()),
  alt: ""
}, null, -1);
const _hoisted_11 = [_hoisted_10];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_toggle_button = (0,runtime_core_esm_bundler/* resolveComponent */.up)("toggle-button");
  const _component_q_select = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-select");
  const _component_channels_grid = (0,runtime_core_esm_bundler/* resolveComponent */.up)("channels-grid");
  return !$setup.loading ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createElementVNode */._)("h5", _hoisted_3, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.$t('settings')), 1), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_4, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_5, [(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.$t('night_mode')), 1)]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_toggle_button, {
    class: "dark-mode-toggle-btn",
    val: $setup.darkMode,
    toggle: $setup.toggleDarkMode
  }, null, 8, ["val", "toggle"])]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_6, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_7, [(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.$t('language')), 1)]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_select, {
    modelValue: $setup.locale,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.locale = $event),
    options: $setup.localeOptions,
    label: "",
    dense: "",
    borderless: "",
    "emit-value": "",
    "map-options": "",
    "options-dense": "",
    class: "setting-select",
    style: {
      "min-width": "150px",
      "font-size": "18px"
    }
  }, null, 8, ["modelValue", "options"])]), (0,runtime_core_esm_bundler/* createElementVNode */._)("h5", _hoisted_8, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.$t("channels_controls")), 1)]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_channels_grid)])) : ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_9, _hoisted_11));
}
;// CONCATENATED MODULE: ./src/pages/SettingsPage.vue?vue&type=template&id=3c467202

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/ChannelsGrid.vue?vue&type=template&id=59033ab9

const ChannelsGridvue_type_template_id_59033ab9_hoisted_1 = {
  class: "channels-grid"
};
const ChannelsGridvue_type_template_id_59033ab9_hoisted_2 = {
  class: "categories"
};
const ChannelsGridvue_type_template_id_59033ab9_hoisted_3 = {
  class: "category-title"
};
const ChannelsGridvue_type_template_id_59033ab9_hoisted_4 = {
  class: "channels-grid-box"
};
const ChannelsGridvue_type_template_id_59033ab9_hoisted_5 = ["onClick"];
const ChannelsGridvue_type_template_id_59033ab9_hoisted_6 = {
  class: "left-box"
};
const ChannelsGridvue_type_template_id_59033ab9_hoisted_7 = {
  class: "channel-icon"
};
const ChannelsGridvue_type_template_id_59033ab9_hoisted_8 = ["src"];
const ChannelsGridvue_type_template_id_59033ab9_hoisted_9 = {
  class: "bg-placeholder"
};
const ChannelsGridvue_type_template_id_59033ab9_hoisted_10 = {
  style: {
    "text-align": "center"
  }
};
const ChannelsGridvue_type_template_id_59033ab9_hoisted_11 = {
  key: 0,
  class: "active"
};
const _hoisted_12 = ["src"];
const _hoisted_13 = ["innerHTML"];
const _hoisted_14 = {
  class: "right-box"
};
function ChannelsGridvue_type_template_id_59033ab9_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_toggle_button = (0,runtime_core_esm_bundler/* resolveComponent */.up)("toggle-button");
  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", ChannelsGridvue_type_template_id_59033ab9_hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", ChannelsGridvue_type_template_id_59033ab9_hoisted_2, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($setup.categories, category => {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
      key: category.name,
      class: "category"
    }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("h5", ChannelsGridvue_type_template_id_59033ab9_hoisted_3, (0,shared_esm_bundler/* toDisplayString */.zw)(category[$setup.locale]), 1), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", ChannelsGridvue_type_template_id_59033ab9_hoisted_4, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(category.channels, channel => {
      return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
        key: channel.telegramName || channel.channelNickname,
        class: "channel",
        onClick: $event => $setup.toggleActive(channel.telegramName || channel.channelNickname)
      }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", ChannelsGridvue_type_template_id_59033ab9_hoisted_6, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", ChannelsGridvue_type_template_id_59033ab9_hoisted_7, [(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
        src: channel.photoImage,
        loading: "lazy",
        alt: ""
      }, null, 8, ChannelsGridvue_type_template_id_59033ab9_hoisted_8), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", ChannelsGridvue_type_template_id_59033ab9_hoisted_9, [(0,runtime_core_esm_bundler/* createElementVNode */._)("p", ChannelsGridvue_type_template_id_59033ab9_hoisted_10, (0,shared_esm_bundler/* toDisplayString */.zw)(channel.channelName ? channel.channelName.slice(0, 1) : '?'), 1)]), channel.active ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", ChannelsGridvue_type_template_id_59033ab9_hoisted_11, [(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
        src: $setup.activeImg,
        alt: "activeState"
      }, null, 8, _hoisted_12)])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
        class: "channel-name",
        innerHTML: channel.channelName
      }, null, 8, _hoisted_13)]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_14, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_toggle_button, {
        val: channel.active
      }, null, 8, ["val"])])], 8, ChannelsGridvue_type_template_id_59033ab9_hoisted_5);
    }), 128))])]);
  }), 128))])]);
}
;// CONCATENATED MODULE: ./src/components/ChannelsGrid.vue?vue&type=template&id=59033ab9

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(499);
// EXTERNAL MODULE: ./node_modules/vue-i18n/dist/vue-i18n.mjs + 3 modules
var vue_i18n = __webpack_require__(6647);
// EXTERNAL MODULE: ./src/services/index.js + 8 modules
var services = __webpack_require__(373);
// EXTERNAL MODULE: ./src/files/index.js
var files = __webpack_require__(8926);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/ToggleButton.vue?vue&type=template&id=ac6f2936

function ToggleButtonvue_type_template_id_ac6f2936_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
    onClick: _cache[0] || (_cache[0] = (...args) => $setup.toggleSwitch && $setup.toggleSwitch(...args)),
    class: (0,shared_esm_bundler/* normalizeClass */.C_)({
      'np-outer-switch': true,
      'np-outer-switch-on': $setup.isEnabled,
      'np-outer-switch-off': !$setup.isEnabled
    })
  }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
    class: (0,shared_esm_bundler/* normalizeClass */.C_)({
      'np-inner-switch': true,
      'np-inner-switch-left': !$setup.isEnabled,
      'np-inner-switch-right': $setup.isEnabled
    })
  }, null, 2)], 2);
}
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/ToggleButton.vue?vue&type=script&lang=js

/* harmony default export */ const ToggleButtonvue_type_script_lang_js = ({
  props: ['val', 'toggle'],
  setup(props) {
    const isEnabled = (0,reactivity_esm_bundler/* ref */.iH)(props.val);
    const toggleSwitch = () => {
      isEnabled.value = !isEnabled.value;
      if (props.toggle) {
        props.toggle();
      }
    };
    return {
      isEnabled,
      toggleSwitch
    };
  }
});
;// CONCATENATED MODULE: ./src/components/ToggleButton.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(1639);
;// CONCATENATED MODULE: ./src/components/ToggleButton.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ToggleButtonvue_type_script_lang_js, [['render',ToggleButtonvue_type_template_id_ac6f2936_render]])

/* harmony default export */ const ToggleButton = (__exports__);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/ChannelsGrid.vue?vue&type=script&lang=js





/* harmony default export */ const ChannelsGridvue_type_script_lang_js = ({
  components: {
    ToggleButton: ToggleButton
  },
  setup() {
    const categories = (0,reactivity_esm_bundler/* ref */.iH)(services/* ChannelService */.Tj.categories);
    const channels = (0,reactivity_esm_bundler/* ref */.iH)(services/* ChannelService */.Tj.getStorageChannels());
    const {
      locale
    } = (0,vue_i18n/* useI18n */.QT)({
      useScope: 'global'
    });
    categories.value = categories.value.map(category => {
      return {
        ...category,
        channels: Object.values(channels.value || []).filter(channel => channel.category === category.name).sort((a, b) => a.channelNickname < b.channelNickname ? -1 : 1)
      };
    });
    categories.value = categories.value.filter(category => category.name !== 'all');
    const toggleActive = async channelNickname => {
      const active = !channels.value[channelNickname].active;
      services/* ChannelService */.Tj.updateChannel(channelNickname, {
        active
      });
      channels.value[channelNickname].active = active;
    };
    return {
      channels,
      categories,
      activeImg: files.activeImg,
      locale,
      toggleActive
    };
  }
});
;// CONCATENATED MODULE: ./src/components/ChannelsGrid.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/components/ChannelsGrid.vue




;


const ChannelsGrid_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ChannelsGridvue_type_script_lang_js, [['render',ChannelsGridvue_type_template_id_59033ab9_render]])

/* harmony default export */ const ChannelsGrid = (ChannelsGrid_exports_);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm-bundler.js
var vuex_esm_bundler = __webpack_require__(61);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 27 modules
var QSelect = __webpack_require__(8210);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/SettingsPage.vue?vue&type=script&lang=js







/* harmony default export */ const SettingsPagevue_type_script_lang_js = ({
  name: 'SettingsPage',
  components: {
    ChannelsGrid: ChannelsGrid,
    ToggleButton: ToggleButton,
    QSelect: QSelect/* default */.Z
  },
  setup() {
    const store = (0,vuex_esm_bundler/* useStore */.oR)();
    const preloaderService = (0,services/* PreloaderService */.Cf)();
    const {
      locale
    } = (0,vue_i18n/* useI18n */.QT)({
      useScope: 'global'
    });
    (0,runtime_core_esm_bundler/* watch */.YP)(() => locale.value, newLocale => {
      localStorage.setItem('locale', newLocale);
    });
    (0,runtime_core_esm_bundler/* onUnmounted */.Ah)(async () => {
      store.commit('post/reset');
    });
    return {
      loading: preloaderService.loading,
      darkMode: services.DarkModeService.darkMode,
      toggleDarkMode: services.DarkModeService.toggleDarkMode,
      locale,
      localeOptions: [{
        value: 'en',
        label: 'English'
      }, {
        value: 'uk',
        label: 'Українська'
      }, {
        value: 'ru',
        label: 'Русский'
      }]
    };
  }
});
;// CONCATENATED MODULE: ./src/pages/SettingsPage.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/field/QField.js
var QField = __webpack_require__(8149);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(9984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/SettingsPage.vue




;


const SettingsPage_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(SettingsPagevue_type_script_lang_js, [['render',render]])

/* harmony default export */ const SettingsPage = (SettingsPage_exports_);
;


runtime_auto_import_default()(SettingsPagevue_type_script_lang_js, 'components', {QSelect: QSelect/* default */.Z,QField: QField/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=337.b827430f.js.map