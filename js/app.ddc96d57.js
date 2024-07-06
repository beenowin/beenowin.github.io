/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 8019:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(1957);
// EXTERNAL MODULE: ./node_modules/quasar/src/vue-plugin.js
var vue_plugin = __webpack_require__(1947);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(499);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(9835);
// EXTERNAL MODULE: ./src/assets/img/min.gif
var min = __webpack_require__(9182);
var min_default = /*#__PURE__*/__webpack_require__.n(min);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/App.vue?vue&type=template&id=eb8c73cc


const _hoisted_1 = {
  key: 0,
  class: "loader"
};
const _hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
  class: "loader-image",
  src: (min_default()),
  alt: ""
}, null, -1);
const _hoisted_3 = [_hoisted_2];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-view");
  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", null, [$setup.loading ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, _hoisted_3)) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_view)]);
}
;// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=eb8c73cc

// EXTERNAL MODULE: ./src/services/index.js + 9 modules
var services = __webpack_require__(4569);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/App.vue?vue&type=script&lang=js



/* harmony default export */ const Appvue_type_script_lang_js = ({
  setup() {
    window.app = {
      methods: {}
    };
    const {
      loading
    } = (0,services/* PreloaderService */.Cf)();
    return {
      loading
    };
  },
  computed: {
    layout() {
      return this.$route.meta.layout || 'default';
    }
  }
});
;// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(1639);
;// CONCATENATED MODULE: ./src/App.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Appvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const App = (__exports__);
// EXTERNAL MODULE: ./src/store/index.js + 2 modules
var src_store = __webpack_require__(5215);
// EXTERNAL MODULE: ./node_modules/quasar/wrappers/index.mjs
var wrappers = __webpack_require__(3340);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.mjs
var vue_router = __webpack_require__(8339);
;// CONCATENATED MODULE: ./src/router/index.js


// import initMiddlewares, { test } from "../middlewares"; // loadChats
// import store from "@/store";
// import Home from '@/pages/Home'
const Home = () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(64), __webpack_require__.e(543)]).then(__webpack_require__.bind(__webpack_require__, 6455));
const Post = () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(64), __webpack_require__.e(898)]).then(__webpack_require__.bind(__webpack_require__, 4394));
const NotFound = () => __webpack_require__.e(/* import() */ 771).then(__webpack_require__.bind(__webpack_require__, 1771));
// import Profile from '@/pages/Profile'
// import Chat from '@/pages/Chat'
// import Auth from '@/pages/Auth'
// import User from '@/pages/User'
// import Post from '@/pages/Post'
// import NotFound from '@/pages/404.vue'

const routes = [{
  path: "/",
  name: "Home",
  component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(64), __webpack_require__.e(190)]).then(__webpack_require__.bind(__webpack_require__, 190)),
  children: [{
    path: "",
    component: Home
  }]
}, {
  path: "/posts/:id",
  name: "Post",
  component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(64), __webpack_require__.e(190)]).then(__webpack_require__.bind(__webpack_require__, 190)),
  children: [{
    path: "",
    component: Post
  }]
}, {
  path: "/settings",
  name: "Settings",
  component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(64), __webpack_require__.e(857)]).then(__webpack_require__.bind(__webpack_require__, 5857)),
  children: [{
    path: "",
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(64), __webpack_require__.e(418)]).then(__webpack_require__.bind(__webpack_require__, 8418))
  }]
}, {
  path: "/:pathMatch(.*)*",
  name: "NotFound",
  component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(64), __webpack_require__.e(857)]).then(__webpack_require__.bind(__webpack_require__, 5857)),
  children: [{
    path: "",
    component: NotFound
  }]
}
// {
//   path: '/my-feed',
//   name: 'MyFeed',
//   component: Home,
//   meta: {
//     layout: 'posts',
//     middleware: [test],
//   },
// },
// {
//   path: '/profile',
//   name: 'Profile',
//   component: Profile,
//   meta: {
//     middleware: [test],
//   },
// },
// {
//   path: '/user/:id',
//   name: 'User',
//   component: User,
//   meta: {
//     middleware: [test],
//   },
// },
// {
//   path: '/chat/:id',
//   name: 'SingleChat',
//   component: Chat,
//   meta: {
//     middleware: [loadChats, test],
//   },
// },
// {
//   path: '/chat',
//   name: 'Chat',
//   component: Chat,
//   meta: {
//     middleware: [loadChats, test],
//   },
// },

// {
//   path: '/auth',
//   name: 'Auth',
//   component: Auth,
//   meta: {
//     layout: 'auth',
//     middleware: [test],
//   },
// },
];

// router.beforeEach(initMiddlewares(store));
/* harmony default export */ const src_router = ((0,wrappers/* route */.BC)(() => {
  const Router = (0,vue_router/* createRouter */.p7)({
    history: (0,vue_router/* createWebHistory */.PO)("/"),
    scrollBehavior(to, from) {
      const res = {};
      if (from.params.id) {
        res["el"] = `#post-${from.params.id}`;
      } else {
        res["top"] = 0;
      }
      return res;
    },
    routes
  });
  return Router;
}));
;// CONCATENATED MODULE: ./.quasar/app.js
/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.config.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/






/* harmony default export */ async function app(createAppFn, quasarUserOptions) {
  // Create the app instance.
  // Here we inject into it the Quasar UI, the router & possibly the store.
  const app = createAppFn(App);
  app.config.performance = true;
  app.use(vue_plugin/* default */.Z, quasarUserOptions);
  const store = typeof src_store/* default */.Z === 'function' ? await (0,src_store/* default */.Z)({}) : src_store/* default */.Z;

  // obtain Vuex injection key in case we use TypeScript
  const {
    storeKey
  } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 5215));
  const router = (0,reactivity_esm_bundler/* markRaw */.Xl)(typeof src_router === 'function' ? await src_router({
    store
  }) : src_router);

  // make router instance available in store

  store.$router = router;

  // Expose the app, the router and the store.
  // Note that we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return {
    app,
    store,
    storeKey,
    router
  };
}
// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Notify.js + 1 modules
var Notify = __webpack_require__(4328);
;// CONCATENATED MODULE: ./.quasar/quasar-user-options.js
/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.config.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/


/* harmony default export */ const quasar_user_options = ({
  config: {},
  plugins: {
    Notify: Notify/* default */.Z
  }
});
// EXTERNAL MODULE: ./node_modules/register-service-worker/index.js
var register_service_worker = __webpack_require__(368);
;// CONCATENATED MODULE: ./src-pwa/register-service-worker.js


// The ready(), registered(), cached(), updatefound() and updated()
// events passes a ServiceWorkerRegistration instance in their arguments.
// ServiceWorkerRegistration: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration

if ('serviceWorker' in navigator) {
  // declaring scope manually
  navigator.serviceWorker.register('/service-worker.js', {
    scope: '/'
  }).then(registration => {
    console.log('Service worker registration succeeded:', registration);
  }, /*catch*/error => {
    console.error(`Service worker registration failed: ${error}`);
  });
} else {
  console.error('Service workers are not supported.');
}
(0,register_service_worker/* register */.z)("/service-worker.js", {
  // The registrationOptions object will be passed as the second argument
  // to ServiceWorkerContainer.register()
  // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#Parameter

  // registrationOptions: { scope: './' },

  ready( /* registration */
  ) {
    console.log('Service worker is active.');
  },
  registered(registration) {
    console.log('Service worker has been registered.');
    setInterval(() => registration.update(), 1000 * 60 * 60);
  },
  cached( /* registration */
  ) {
    console.log('Content has been cached for offline use.');
  },
  updatefound( /* registration */
  ) {
    console.log('New content is downloading.');
  },
  updated(registration) {
    console.log('New content is available; please refresh.');
    console.log('registration', registration);
    document.dispatchEvent(new CustomEvent('refreshApp', {
      detail: registration
    }));
  },
  offline() {
    console.log('No internet connection found. App is running in offline mode.');
  },
  error(err) {
    console.error('Error during service worker registration:', err);
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.unshift.js
var es_array_unshift = __webpack_require__(6890);
;// CONCATENATED MODULE: ./.quasar/client-prefetch.js

/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.config.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/


let appPrefetch = typeof App.preFetch === 'function' ? App.preFetch :
// Class components return the component options (and the preFetch hook) inside __c property
App.__c !== void 0 && typeof App.__c.preFetch === 'function' ? App.__c.preFetch : false;
function getMatchedComponents(to, router) {
  const route = to ? to.matched ? to : router.resolve(to).route : router.currentRoute.value;
  if (!route) {
    return [];
  }
  const matched = route.matched.filter(m => m.components !== void 0);
  if (matched.length === 0) {
    return [];
  }
  return Array.prototype.concat.apply([], matched.map(m => {
    return Object.keys(m.components).map(key => {
      const comp = m.components[key];
      return {
        path: m.path,
        c: comp
      };
    });
  }));
}
function addPreFetchHooks({
  router,
  store,
  publicPath
}) {
  // Add router hook for handling preFetch.
  // Doing it after initial route is resolved so that we don't double-fetch
  // the data that we already have. Using router.beforeResolve() so that all
  // async components are resolved.
  router.beforeResolve((to, from, next) => {
    const urlPath = window.location.href.replace(window.location.origin, ''),
      matched = getMatchedComponents(to, router),
      prevMatched = getMatchedComponents(from, router);
    let diffed = false;
    const preFetchList = matched.filter((m, i) => {
      return diffed || (diffed = !prevMatched[i] || prevMatched[i].c !== m.c || m.path.indexOf('/:') > -1 // does it has params?
      );
    }).filter(m => m.c !== void 0 && (typeof m.c.preFetch === 'function'
    // Class components return the component options (and the preFetch hook) inside __c property
    || m.c.__c !== void 0 && typeof m.c.__c.preFetch === 'function')).map(m => m.c.__c !== void 0 ? m.c.__c.preFetch : m.c.preFetch);
    if (appPrefetch !== false) {
      preFetchList.unshift(appPrefetch);
      appPrefetch = false;
    }
    if (preFetchList.length === 0) {
      return next();
    }
    let hasRedirected = false;
    const redirect = url => {
      hasRedirected = true;
      next(url);
    };
    const proceed = () => {
      if (hasRedirected === false) {
        next();
      }
    };
    preFetchList.reduce((promise, preFetch) => promise.then(() => hasRedirected === false && preFetch({
      store,
      currentRoute: to,
      previousRoute: from,
      redirect,
      urlPath,
      publicPath
    })), Promise.resolve()).then(proceed).catch(e => {
      console.error(e);
      proceed();
    });
  });
}
;// CONCATENATED MODULE: ./.quasar/client-entry.js
/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.config.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/













































































































// We load Quasar stylesheet file







const publicPath = `/`;
async function start({
  app,
  router,
  store,
  storeKey
}, bootFiles) {
  let hasRedirected = false;
  const getRedirectUrl = url => {
    try {
      return router.resolve(url).href;
    } catch (err) {}
    return Object(url) === url ? null : url;
  };
  const redirect = url => {
    hasRedirected = true;
    if (typeof url === 'string' && /^https?:\/\//.test(url)) {
      window.location.href = url;
      return;
    }
    const href = getRedirectUrl(url);

    // continue if we didn't fail to resolve the url
    if (href !== null) {
      window.location.href = href;
    }
  };
  const urlPath = window.location.href.replace(window.location.origin, '');
  for (let i = 0; hasRedirected === false && i < bootFiles.length; i++) {
    try {
      await bootFiles[i]({
        app,
        router,
        store,
        ssrContext: null,
        redirect,
        urlPath,
        publicPath
      });
    } catch (err) {
      if (err && err.url) {
        redirect(err.url);
        return;
      }
      console.error('[Quasar] boot error:', err);
      return;
    }
  }
  if (hasRedirected === true) {
    return;
  }
  app.use(router);
  app.use(store, storeKey);
  addPreFetchHooks({
    router,
    store
  });
  app.mount('#q-app');
}
app(runtime_dom_esm_bundler/* createApp */.ri, quasar_user_options).then(app => {
  // eventually remove this when Cordova/Capacitor/Electron support becomes old
  const [method, mapFn] = Promise.allSettled !== void 0 ? ['allSettled', bootFiles => bootFiles.map(result => {
    if (result.status === 'rejected') {
      console.error('[Quasar] boot error:', result.reason);
      return;
    }
    return result.value.default;
  })] : ['all', bootFiles => bootFiles.map(entry => entry.default)];
  return Promise[method]([Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1764))]).then(bootFiles => {
    const boot = mapFn(bootFiles).filter(entry => typeof entry === 'function');
    start(app, boot);
  });
});

/***/ }),

/***/ 1764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ i18n)
});

// EXTERNAL MODULE: ./node_modules/vue-i18n/dist/vue-i18n.mjs + 3 modules
var vue_i18n = __webpack_require__(6647);
;// CONCATENATED MODULE: ./src/i18n/en.js
/* harmony default export */ const en = ({
  settings: 'Settings',
  night_mode: 'Night mode',
  language: 'Language',
  channels_controls: 'Channels controls',
  cookie_message: 'This site uses Google Analytics, which (or which), in turn, uses cookies, about which the European Union requires you to warn.\nWarning! This site uses cookies.',
  thanks: 'Thanks',
  load_more: 'Load more',
  subscribe: 'Subscribe',
  unsubscribe: 'Unsubscribe',
  subscribed: 'subscribed to channel',
  unsubscribed: 'unsubscribed from channel',
  you: 'You',
  share: "Share",
  source: "Source",
  original_text: "Show original text",
  translate: "Translate",
  show_translate: "Show translate",
  translated_with: "Translated with ",
  can_has_errors: "May contain errors and inaccuracies. Check the information carefully.",
  about_project: "About project",
  project_description: "<b>Beenow</b> is an aggregator of news about science, IT, digital technologies, art, and culture, launched in 2022. Our service collects materials — news and everything related to it — from mass media and author channels on Telegram, combining them into a news feed. The service is based on software code, meaning the news feed is formed automatically, not by editors. Links posted in the news feed should not be considered as endorsements by the author of the Beenow web portal of the views expressed on the respective web pages. Some links may be advertisements. There may also be satirical news that is not genuine. Therefore, do not trust everything that may be written. Verify information from sources. Think for yourself 🧠 and don't fall for manipulations. Enjoy using the Beenow service! 😉",
  for_contact: "To contact the author of the project, write to this email address:"
});
;// CONCATENATED MODULE: ./src/i18n/uk.js
/* harmony default export */ const uk = ({
  "settings": "Налаштування",
  "night_mode": "Нічний режим",
  "language": "Мова",
  "channels_controls": "Керування каналами",
  "cookie_message": "На цьому сайті використовується Google Analytics, який (або яке), у свою\nчергу, використовує cookies, про що Євросоюз вимагає вас попередити.\nПопереджаємо! Цей сайт використовує кукі(cookies).",
  "thanks": "Дякую",
  "load_more": "Завантажити ще",
  "subscribe": "Підписатися",
  "unsubscribe": "Відписатися",
  "subscribed": "підписались на канал",
  "unsubscribed": "відписались від каналу",
  "you": "Ви",
  "share": "Поділитися",
  "source": "Джерело",
  "original_text": "Показати оригінальний текст",
  "translate": "Переклад",
  "show_translate": "Показати переклад",
  "translated_with": "Перекладено за допомогою",
  "can_has_errors": "Може містити помилки та неточності. Уважно перевіряйте інформацію.",
  "about_project": "Про проект",
  "project_description": "<b>Beenow</b> – це агрегатор новин про науку, IT, цифрові технології, мистецтво та культуру, запущений у 2022 році. Наш сервіс збирає матеріали — новини і все з ними пов'язане — із засобів масової інформації та авторських каналів у телеграмі, об'єднуючи їх у новинну стрічку. Сервіс базується на програмному коді, тобто, інформаційна стрічка формується автоматично, а не руками редакторів. Посилання, що розміщуються у стрічці новин, не слід розглядати як схвалення автором інтернет-порталу Beenow поглядів, що висловлюються на відповідних інтернет-сторінках. Деякі посилання можуть бути рекламними. Також можуть бути новини сатиричного характеру, які не є справжніми новинами. Тому не довіряйте всьому, що може бути написано. Перевіряйте інформацію у джерелах. Думайте своєю головою 🧠 і не піддавайтеся на маніпуляції. Приємного користування сервісом Beenow! 😉",
  "for_contact": "Для зв'язку та контакту з автором проекту пишіть на цю електронну адресу:"
});
;// CONCATENATED MODULE: ./src/i18n/ru.js
/* harmony default export */ const ru = ({
  "settings": "Настройки",
  "night_mode": "Ночной режим",
  "language": "Язык",
  "channels_controls": "Управление каналами",
  "cookie_message": "На этом сайте используется Google Analytics, который (или которое), в свою\nочередь, использует cookies, о чем Евросоюз требует вас предупредить.\nПредупреждаем! Этот сайт использует кукис(cookies).",
  "thanks": "Спасибо",
  "load_more": "Загрузить еще",
  "subscribe": "Подписаться",
  "unsubscribe": "Отписаться",
  "subscribed": "подписались на канал",
  "unsubscribed": "отписались от канала",
  "you": "Вы",
  "share": "Поделиться",
  "source": "Источник",
  "original_text": "Показать оригинальный текст",
  "translate": "Перевод",
  "show_translate": "Показать перевод",
  "translated_with": "Переведено с помощью ",
  "can_has_errors": "Может содержать ошибки и неточности. Внимательно проверяйте информацию.",
  "about_project": "О проекте",
  "project_description": "<b>Beenow</b> – это агрегатор новостей украинского (и не только) интернета 🇺🇦 запущен в 2022 году. Наш сервис собирает материалы - новости и все с ними  связанное — из средств массовой информации и авторских каналов и объединяет в новостную ленту. Сервис базируется на программном коде, то есть, информационная лента формируется автоматически, а не руками редакторов. Ссылки, размещаемые в новостной ленте, не следует рассматривать как одобрение автором интернет-портала Beenow взглядов, что высказываются на соответствующих интернет-страницах. Некоторые ссылки могут быть рекламными. Также могут быть новости сатирического характера, которые не являются подлинными новостями. Поэтому не доверяйте всему, что может быть написано. Проверяйте информацию в источниках. Думайте своей головой 🧠 и не поддавайтесь на манипуляции. Приятного использования сервисом Beenow! 😉",
  "for_contact": "Для связи и контакта с автором проекта пишите на этот электронный адрес:"
});
;// CONCATENATED MODULE: ./src/i18n/index.js



/* harmony default export */ const src_i18n = ({
  'en': en,
  'uk': uk,
  'ru': ru
});
// EXTERNAL MODULE: ./src/constants.js
var constants = __webpack_require__(3725);
;// CONCATENATED MODULE: ./src/boot/i18n.js



/* harmony default export */ const i18n = (({
  app
}) => {
  // Create I18n instance
  const i18n = (0,vue_i18n/* createI18n */.o)({
    locale: localStorage.getItem('locale') || constants/* DEFAULT_LANGUAGE */.k,
    legacy: false,
    globalInjection: true,
    messages: src_i18n
  });

  // Tell app to use the I18n instance
  app.use(i18n);
});

/***/ }),

/***/ 3725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ VUE_APP_API_HOST),
/* harmony export */   k: () => (/* binding */ DEFAULT_LANGUAGE)
/* harmony export */ });
const DEFAULT_LANGUAGE = 'uk';
const VUE_APP_API_HOST = 'https://beenow.space';
// const VUE_APP_API_HOST = 'http://localhost:3000';


/***/ }),

/***/ 4569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Tj: () => (/* reexport */ ChannelService),
  al: () => (/* reexport */ ChatService),
  DarkModeService: () => (/* reexport */ DarkModeService),
  LY: () => (/* reexport */ PostService),
  i$: () => (/* reexport */ PostsCounterService),
  Cf: () => (/* reexport */ PreloaderService),
  qD: () => (/* reexport */ RequestPreloadQueue),
  V1: () => (/* reexport */ StorageService),
  sK: () => (/* reexport */ TranslateService)
});

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9981);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(8761);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./src/constants.js
var constants = __webpack_require__(3725);
;// CONCATENATED MODULE: ./src/services/channel.service.js


// import { RequestPreloadQueue } from './request-preload-queue.service';
// import categoriesList from '../../../data/categories.json';

class _ChannelService {
  constructor() {
    defineProperty_default()(this, "channels", {});
    defineProperty_default()(this, "storageChannels", null);
    defineProperty_default()(this, "categories", []);
    this.getChannelsCategories = async () => {
      const categoriesList = (await axios_default().get(`${constants/* VUE_APP_API_HOST */.M}/api/categories`)).data;
      return [{
        name: 'all',
        title: 'Всі',
        uk: 'Всі',
        ru: 'Все',
        en: 'All',
        visible: true
      }].concat(categoriesList);
    };
    this.getChannels = async category => {
      const channelsList = (await axios_default().get(`${constants/* VUE_APP_API_HOST */.M}/api/channels`)).data;
      if (category) {
        return channelsList.filter(channel => channel.category === category);
      }
      const channels = channelsList.reduce((res, channel) => {
        const nickname = channel.telegramName || channel.channelNickname;
        res[nickname] = channel;
        return res;
      }, {});
      return channels;
    };
    this.loadChannels = async () => {
      this.channels = await this.getChannels();
      // this.storageChannels = JSON.parse(
      //   localStorage.getItem('channels') || null,
      // );

      // if (this.storageChannels) {
      //   Object.keys(this.storageChannels).forEach((key) => {
      //     const channel = this.storageChannels[key];

      //     const nickname = channel.telegramName || channel.channelNickname;
      //     this.storageChannels[key].channelNickname = nickname;
      //   });
      // }
      // if (!this.storageChannels) {
      //   Object.keys(this.channels).forEach((key) => {
      //     const channel = this.channels[key];
      //     this.channels[key].channelNickname =
      //       channel.telegramName || channel.channelNickname;
      //   });

      //   localStorage.setItem('channels', JSON.stringify(this.channels));
      // } else {
      //   Object.keys(this.storageChannels).forEach((key) => {
      //     if (this.channels[key]) {
      //       this.channels[key] = {
      //         ...this.channels[key],
      //         active: this.storageChannels[key]?.hasOwnProperty('active')
      //           ? this.storageChannels[key].active
      //           : this.channels[key].active,
      //       };
      //     } else {
      //       delete this.storageChannels[key];
      //     }
      //   });

      //   localStorage.setItem('channels', JSON.stringify(this.channels));
      // }
    };

    this.getActiveChannels = async () => {
      const channels = await this.getChannels();
      return Object.keys(channels).filter(key => channels[key].active);
    };
    this.getStorageChannels = async () => {
      this.storageChannels = await this.getChannels();
    };
  }
}
const ChannelService = new _ChannelService();
;// CONCATENATED MODULE: ./src/services/post.service.js



const limit = 10;
let page = 1;
let totalPages = 0;
const getChannels = async category => {
  return ChannelService.getChannels(category);
};
const fetchPosts = async (page, category) => {
  console.log('fetchPosts', category);
  const channels = Object.values(await getChannels(category));
  return axios_default().post(`${constants/* VUE_APP_API_HOST */.M}/api/posts-list`, {
    data: {
      channels,
      // timestamps: Date.now(),channel
      pageSize: limit,
      page
    }
  });
};
const getPosts = async category => {
  page = 1;
  const postsData = await fetchPosts(page, category);
  totalPages = postsData.data;
  return postsData.data.rows;
};
const getPostById = async id => {
  try {
    const post = await axios_default().get(`${constants/* VUE_APP_API_HOST */.M}/api/posts/${id}`);
    return {
      ...post.data._doc,
      childrens: post.data.childrens
    };
  } catch (err) {
    console.error(err);
    return null;
  }
};
const loadMorePosts = async category => {
  if (page >= totalPages) {
    return [];
  }
  ;
  page += 1;
  const postsData = await fetchPosts(page, category);
  return postsData.data.rows;
};
class PostService {
  constructor() {
    this.getChannels = getChannels;
    this.fetchPosts = fetchPosts;
    this.getPosts = getPosts;
    this.getPostById = getPostById;
    this.loadMorePosts = loadMorePosts;
  }
}
;// CONCATENATED MODULE: ./src/services/storage.service.js
class StorageService {
  set(key, value, ttl) {
    const now = new Date();
    const item = {
      value,
      expiry: now.getTime() + ttl
    };
    localStorage.setItem(key, JSON.stringify(item));
  }
  get(key) {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;
    const {
      value,
      expiry
    } = JSON.parse(itemStr);
    const now = new Date();
    if (now.getTime() > expiry) {
      localStorage.removeItem(key);
      return null;
    }
    return value;
  }
}
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(499);
;// CONCATENATED MODULE: ./src/services/dark-mode.service.js


class _DarkModeService {
  constructor() {
    defineProperty_default()(this, "darkMode", (0,reactivity_esm_bundler/* ref */.iH)(false));
    this.darkMode = (0,reactivity_esm_bundler/* ref */.iH)(false);
    this.loadDarkModeFromLocalStorage();
    this.toggleDarkModeClass();
  }
  loadDarkModeFromLocalStorage() {
    if (!localStorage) {
      return;
    }
    this.darkMode.value = localStorage.getItem("darkMode") === "true";
  }
  toggleDarkModeClass() {
    if (!document) {
      return;
    }
    document.body.classList[this.darkMode.value ? "add" : "remove"]("darkMode");
  }
  toggleDarkMode() {
    DarkModeService.darkMode.value = !DarkModeService.darkMode.value;
    localStorage.setItem("darkMode", DarkModeService.darkMode.value);
    DarkModeService.toggleDarkModeClass();
  }
}
const DarkModeService = new _DarkModeService();
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(9835);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(9665);
;// CONCATENATED MODULE: ./src/services/request-preload-queue.service.js



class _RequestPreloadQueue {
  constructor() {
    defineProperty_default()(this, "queue", []);
    defineProperty_default()(this, "worked", (0,reactivity_esm_bundler/* ref */.iH)(false));
  }
  async addRequest(request) {
    this.worked.value ? await request() : this.queue.push(request);
  }
  removeRequest(request) {
    this.queue = this.queue.filter(r => r !== request);
  }
  getQueue() {
    return this.queue;
  }
  async callRequests() {
    await Promise.all(this.queue.map(request => request()));
    this.queue = [];
    this.worked.value = true;
  }
}
const RequestPreloadQueue = new _RequestPreloadQueue();
// EXTERNAL MODULE: ./src/utils.js
var utils = __webpack_require__(9471);
;// CONCATENATED MODULE: ./src/services/preloader.service.js



const PreloaderService = () => {
  const loading = (0,reactivity_esm_bundler/* ref */.iH)(true);
  const showScrollBtn = (0,reactivity_esm_bundler/* ref */.iH)(false);
  const inited = (0,reactivity_esm_bundler/* ref */.iH)(false);
  const showHeaderOnScroll = async () => {
    await (0,utils/* sleep */._v)(500);
    const header = document.querySelector('.app-header');
    const makeFixed = (st, el, offset = 0, id) => {
      try {
        if (!el) {
          return;
        }
        const elHeight = el.offsetHeight;
        if (st > lastScrollTop) {
          el.style.top = `-${elHeight}px`;
        } else {
          el.style.top = offset + 'px';
        }
        if (st > 0) {
          el.style.position = 'fixed';
          el.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
          el.style.backdropFilter = 'blur(10px)';
        } else {
          el.style.position = 'relative';
          el.style.backgroundColor = 'transparent';
          el.style.backdropFilter = 'blur(10px)';
          el.style.top = '0px';
        }
      } catch (error) {
        console.log(id, error);
      }
    };
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      makeFixed(st, header, 0, 'a');
      lastScrollTop = st <= 0 ? 0 : st;
    });
  };
  const handleScroll = () => {
    if (window.scrollY > 1200) {
      showScrollBtn.value = true;
    } else {
      showScrollBtn.value = false;
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const init = async () => {
    await (0,utils/* sleep */._v)(1000);
    await RequestPreloadQueue.callRequests();
    document.body.style.overflow = 'auto';
    loading.value = false;
  };
  (0,runtime_core_esm_bundler/* onMounted */.bv)(async () => {
    window.addEventListener('scroll', handleScroll);
    if (window.screen.width < 768) {
      await showHeaderOnScroll();
    }
    if (inited.value) {
      return;
    }
    await init();
    inited.value = true;
  });
  (0,runtime_core_esm_bundler/* onUnmounted */.Ah)(() => {
    window.removeEventListener('scroll', handleScroll);
  });
  return {
    loading,
    showScrollBtn,
    scrollToTop,
    init
  };
};
;// CONCATENATED MODULE: ./src/services/posts-counter.service.js


const NEW_POSTS_TIMEOUT = 1000 * 60 * 2;
class PostsCounterService {
  constructor(store) {
    this.store = store;
    this.postService = new PostService();
    this.posts = (0,runtime_core_esm_bundler/* computed */.Fl)(() => this.store.getters['post/items']);
  }
  async getNewPostsCount() {
    const {
      data: {
        rows: newPosts
      }
    } = await this.postService.fetchPosts(1);
    const lastLoadedPostDate = this.posts.value[0].date;
    let count = newPosts.filter(post => post.date > lastLoadedPostDate).length;
    if (!newPosts.some(post => post.date === lastLoadedPostDate)) {
      count = 10;
    }
    this.store.commit('post/updateNewPostsCount', count);
  }
  initPostsCountInterval() {
    this.clearPostsCountInterval();
    this.postsCountInterval = setInterval(() => {
      this.getNewPostsCount();
    }, NEW_POSTS_TIMEOUT);
  }
  clearPostsCountInterval() {
    this.store.commit('post/updateNewPostsCount', 0);
    clearInterval(this.postsCountInterval);
    this.postsCountInterval = null;
  }
}
;// CONCATENATED MODULE: ./src/services/translate.service.js


class TranslateService {
  static async translate({
    text,
    to
  }) {
    const response = await axios_default().get(`${constants/* VUE_APP_API_HOST */.M}/api/translate`, {
      params: {
        from: 'auto',
        text,
        to
      }
    });
    return response.data.translation;
  }
}
;// CONCATENATED MODULE: ./src/services/chat.service.js


class ChatService {
  async createChat(message) {
    return axios_default().post(`${constants/* VUE_APP_API_HOST */.M}/api/chat/create`, {
      message
    });
  }
  async send(id, message) {
    return axios_default().post(`${constants/* VUE_APP_API_HOST */.M}/api/chat/send-message`, {
      id,
      message
    });
  }
  async close(id) {
    return axios_default().get(`${constants/* VUE_APP_API_HOST */.M}/api/chat/${id}/close`);
  }
}
;// CONCATENATED MODULE: ./src/services/index.js










/***/ }),

/***/ 5215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ store)
});

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm-bundler.js
var vuex_esm_bundler = __webpack_require__(61);
// EXTERNAL MODULE: ./src/services/index.js + 9 modules
var services = __webpack_require__(4569);
;// CONCATENATED MODULE: ./src/store/modules/post.js

const service = new services/* PostService */.LY();
/* harmony default export */ const post = ({
  namespaced: true,
  state: () => {
    return {
      posts: [],
      newPostsCount: 0,
      post: null
    };
  },
  getters: {
    items: state => state.posts,
    item: state => state.post,
    newPostsCount: state => state.newPostsCount
  },
  mutations: {
    setPost(state, post) {
      state.post = post;
    },
    updateNewPostsCount(state, count) {
      state.newPostsCount = count;
    },
    addPosts(state, posts) {
      if (state.posts.length === 0) {
        state.posts = posts;
        return;
      }

      // Add new posts to the existing posts and delete post clones
      const currentPostsCount = state.posts.length;
      const newPosts = posts.filter(post => {
        return !state.posts.slice(currentPostsCount - 10, currentPostsCount).some(p => p.id === post.id);
      });
      state.posts = [...state.posts, ...newPosts];
    },
    reset(state) {
      state.posts = [];
    }
  },
  actions: {
    async loadPost({
      commit
    }, id) {
      try {
        const post = await service.getPostById(id);
        commit('setPost', post);
      } catch (error) {
        console.log(error.message);
      }
    },
    async loadPosts({
      commit
    }, {
      category
    }) {
      try {
        commit('reset');
        console.log('loadPosts', category);
        const posts = await service.getPosts(category);
        commit('addPosts', posts);
      } catch (error) {
        console.log(error.message);
      }
    },
    async loadMorePosts({
      commit
    }, {
      category
    }) {
      try {
        const posts = await service.loadMorePosts(category);
        commit('addPosts', posts);
      } catch (error) {
        console.log(error.message);
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/store/modules/index.js


;// CONCATENATED MODULE: ./src/store/index.js


/* harmony default export */ const store = ((0,vuex_esm_bundler/* createStore */.MT)({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    post: post
  }
}));

/***/ }),

/***/ 9471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F5: () => (/* binding */ extractTextFromHtml),
/* harmony export */   R0: () => (/* binding */ toggleBodyScroll),
/* harmony export */   _v: () => (/* binding */ sleep),
/* harmony export */   c_: () => (/* binding */ replaceTagWithInnerText)
/* harmony export */ });
/* unused harmony export document */
const getDocument = () => {
  return typeof window !== 'undefined' ? window.document : undefined;
};
const extractTextFromHtml = html => {
  const div = getDocument().createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText || '';
};
const replaceTagWithInnerText = (str, tag) => {
  const regex = new RegExp(`&lt;${tag}.*?&gt;(.*?)&lt;/${tag}&gt;`, 'g');
  const matches = str.match(regex);
  if (!matches) {
    return str;
  }
  return matches.reduce((acc, match) => {
    const innerText = extractTextFromHtml(match);
    return acc.replace(match, innerText);
  }, str);
};
const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
const toggleBodyScroll = isShow => {
  const document = getDocument();
  if (!document) {
    return;
  }
  const app = document.querySelector('#q-app');
  app.style.overflow = isShow ? 'hidden' : 'auto';
  document.body.classList.toggle('no-scroll', isShow);
};
const document = getDocument();


/***/ }),

/***/ 9182:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/min.678e212e.gif";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + (chunkId === 64 ? "chunk-common" : chunkId) + "." + {"64":"74a2bd32","190":"93add478","418":"be764216","543":"3ca7e15f","771":"b08ff39f","857":"473562c8","898":"dfe9875c"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "css/" + chunkId + "." + {"190":"5b84e20a","418":"cb40d4fc","543":"7cb6277a","771":"f600840c","857":"e2777194","898":"872f3a68"}[chunkId] + ".css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "q-front:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = (chunkId, fullhref, oldTag, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			143: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = (chunkId, promises) => {
/******/ 			var cssChunks = {"190":1,"418":1,"543":1,"771":1,"857":1,"898":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(() => {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, (e) => {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			143: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkq_front"] = globalThis["webpackChunkq_front"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [736], () => (__webpack_require__(8019)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.ddc96d57.js.map