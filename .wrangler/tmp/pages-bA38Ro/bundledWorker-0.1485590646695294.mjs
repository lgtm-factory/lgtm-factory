// _worker.js/index.js
import("node:buffer")
  .then(({ Buffer: Buffer2 }) => {
    globalThis.Buffer = Buffer2;
  })
  .catch(() => null);
var __ALSes_PROMISE__ = import("node:async_hooks")
  .then(({ AsyncLocalStorage }) => {
    globalThis.AsyncLocalStorage = AsyncLocalStorage;
    const envAsyncLocalStorage = new AsyncLocalStorage();
    const requestContextAsyncLocalStorage = new AsyncLocalStorage();
    globalThis.process = {
      env: new Proxy(
        {},
        {
          ownKeys: () => Reflect.ownKeys(envAsyncLocalStorage.getStore()),
          getOwnPropertyDescriptor: (_, ...args) =>
            Reflect.getOwnPropertyDescriptor(
              envAsyncLocalStorage.getStore(),
              ...args,
            ),
          get: (_, property) =>
            Reflect.get(envAsyncLocalStorage.getStore(), property),
          set: (_, property, value) =>
            Reflect.set(envAsyncLocalStorage.getStore(), property, value),
        },
      ),
    };
    globalThis[Symbol.for("__cloudflare-request-context__")] = new Proxy(
      {},
      {
        ownKeys: () =>
          Reflect.ownKeys(requestContextAsyncLocalStorage.getStore()),
        getOwnPropertyDescriptor: (_, ...args) =>
          Reflect.getOwnPropertyDescriptor(
            requestContextAsyncLocalStorage.getStore(),
            ...args,
          ),
        get: (_, property) =>
          Reflect.get(requestContextAsyncLocalStorage.getStore(), property),
        set: (_, property, value) =>
          Reflect.set(
            requestContextAsyncLocalStorage.getStore(),
            property,
            value,
          ),
      },
    );
    return { envAsyncLocalStorage, requestContextAsyncLocalStorage };
  })
  .catch(() => null);
var st = Object.create;
var j = Object.defineProperty;
var at = Object.getOwnPropertyDescriptor;
var it = Object.getOwnPropertyNames;
var nt = Object.getPrototypeOf;
var ct = Object.prototype.hasOwnProperty;
var N = (t, e) => () => (t && (e = t((t = 0))), e);
var U = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
var rt = (t, e, a, s) => {
  if ((e && typeof e == "object") || typeof e == "function")
    for (let n of it(e))
      !ct.call(t, n) &&
        n !== a &&
        j(t, n, {
          get: () => e[n],
          enumerable: !(s = at(e, n)) || s.enumerable,
        });
  return t;
};
var V = (t, e, a) => (
  (a = t != null ? st(nt(t)) : {}),
  rt(
    e || !t || !t.__esModule
      ? j(a, "default", { value: t, enumerable: true })
      : a,
    t,
  )
);
var y;
var d = N(() => {
  y = { collectedLocales: [] };
});
var h;
var f = N(() => {
  h = {
    version: 3,
    routes: {
      none: [
        {
          src: "^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$",
          headers: { Location: "/$1" },
          status: 308,
          continue: true,
        },
        {
          src: "^/_next/__private/trace$",
          dest: "/404",
          status: 404,
          continue: true,
        },
        {
          src: "^/404/?$",
          status: 404,
          continue: true,
          missing: [{ type: "header", key: "x-prerender-revalidate" }],
        },
        { src: "^/500$", status: 500, continue: true },
        {
          src: "^/?$",
          has: [{ type: "header", key: "rsc" }],
          dest: "/index.rsc",
          headers: {
            vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch",
          },
          continue: true,
          override: true,
        },
        {
          src: "^/((?!.+\\.rsc).+?)(?:/)?$",
          has: [{ type: "header", key: "rsc" }],
          dest: "/$1.rsc",
          headers: {
            vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch",
          },
          continue: true,
          override: true,
        },
      ],
      filesystem: [
        { src: "^/index(\\.action|\\.rsc)$", dest: "/", continue: true },
        { src: "^/_next/data/(.*)$", dest: "/_next/data/$1", check: true },
        {
          src: "^/\\.prefetch\\.rsc$",
          dest: "/__index.prefetch.rsc",
          check: true,
        },
        {
          src: "^/(.+)/\\.prefetch\\.rsc$",
          dest: "/$1.prefetch.rsc",
          check: true,
        },
        { src: "^/\\.rsc$", dest: "/index.rsc", check: true },
        { src: "^/(.+)/\\.rsc$", dest: "/$1.rsc", check: true },
      ],
      miss: [
        {
          src: "^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media)/.+$",
          status: 404,
          check: true,
          dest: "$0",
        },
      ],
      rewrite: [{ src: "^/_next/data/(.*)$", dest: "/404", status: 404 }],
      resource: [{ src: "^/.*$", status: 404 }],
      hit: [
        {
          src: "^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media|FEqqveOKdDrzCVQoeLgOr)/.+$",
          headers: { "cache-control": "public,max-age=31536000,immutable" },
          continue: true,
          important: true,
        },
        {
          src: "^/index(?:/)?$",
          headers: { "x-matched-path": "/" },
          continue: true,
          important: true,
        },
        {
          src: "^/((?!index$).*?)(?:/)?$",
          headers: { "x-matched-path": "/$1" },
          continue: true,
          important: true,
        },
      ],
      error: [
        { src: "^/.*$", dest: "/404", status: 404 },
        { src: "^/.*$", dest: "/500", status: 500 },
      ],
    },
    images: {
      domains: [],
      sizes: [
        640, 750, 828, 1080, 1200, 1920, 2048, 3840, 16, 32, 48, 64, 96, 128,
        256, 384,
      ],
      remotePatterns: [],
      minimumCacheTTL: 60,
      formats: ["image/webp"],
      dangerouslyAllowSVG: false,
      contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
      contentDispositionType: "inline",
    },
    overrides: {
      "404.html": { path: "404", contentType: "text/html; charset=utf-8" },
      "500.html": { path: "500", contentType: "text/html; charset=utf-8" },
      "_error.rsc.json": {
        path: "_error.rsc",
        contentType: "application/json",
      },
      "_app.rsc.json": { path: "_app.rsc", contentType: "application/json" },
      "_document.rsc.json": {
        path: "_document.rsc",
        contentType: "application/json",
      },
      "404.rsc.json": { path: "404.rsc", contentType: "application/json" },
    },
    framework: { version: "14.2.5" },
    crons: [],
  };
});
var m;
var p = N(() => {
  m = {
    "/404.html": {
      type: "override",
      path: "/404.html",
      headers: { "content-type": "text/html; charset=utf-8" },
    },
    "/404.rsc.json": {
      type: "override",
      path: "/404.rsc.json",
      headers: { "content-type": "application/json" },
    },
    "/500.html": {
      type: "override",
      path: "/500.html",
      headers: { "content-type": "text/html; charset=utf-8" },
    },
    "/_app.rsc.json": {
      type: "override",
      path: "/_app.rsc.json",
      headers: { "content-type": "application/json" },
    },
    "/_document.rsc.json": {
      type: "override",
      path: "/_document.rsc.json",
      headers: { "content-type": "application/json" },
    },
    "/_error.rsc.json": {
      type: "override",
      path: "/_error.rsc.json",
      headers: { "content-type": "application/json" },
    },
    "/_next/static/FEqqveOKdDrzCVQoeLgOr/_buildManifest.js": { type: "static" },
    "/_next/static/FEqqveOKdDrzCVQoeLgOr/_ssgManifest.js": { type: "static" },
    "/_next/static/chunks/160-f13bde5f268f85cc.js": { type: "static" },
    "/_next/static/chunks/173-32f9ff9bdfb525b3.js": { type: "static" },
    "/_next/static/chunks/23-b75664ace61c0abb.js": { type: "static" },
    "/_next/static/chunks/app/_not-found/page-05886c10710171db.js": {
      type: "static",
    },
    "/_next/static/chunks/app/layout-0e22f9ba527b521d.js": { type: "static" },
    "/_next/static/chunks/app/page-bd37832a27ca406d.js": { type: "static" },
    "/_next/static/chunks/fd9d1056-2821b0f0cabcd8bd.js": { type: "static" },
    "/_next/static/chunks/framework-f66176bb897dc684.js": { type: "static" },
    "/_next/static/chunks/main-219e0d31fb88e8b4.js": { type: "static" },
    "/_next/static/chunks/main-app-d55e105b2a3d24e5.js": { type: "static" },
    "/_next/static/chunks/pages/_app-6a626577ffa902a4.js": { type: "static" },
    "/_next/static/chunks/pages/_error-1be831200e60c5c0.js": { type: "static" },
    "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js": { type: "static" },
    "/_next/static/chunks/webpack-46d4120e39d4fef2.js": { type: "static" },
    "/_next/static/css/02e7a1087f041e47.css": { type: "static" },
    "/_next/static/css/a6d41d71e6fd5f0b.css": { type: "static" },
    "/_next/static/css/f9fdf5fcc18b4377.css": { type: "static" },
    "/_next/static/media/004f4099441b36b9-s.woff2": { type: "static" },
    "/_next/static/media/00c209c181938572-s.woff2": { type: "static" },
    "/_next/static/media/01721b474504e7d6-s.woff2": { type: "static" },
    "/_next/static/media/02ae8675603bbc24-s.woff2": { type: "static" },
    "/_next/static/media/035951aefad7b653-s.p.woff2": { type: "static" },
    "/_next/static/media/0604c96ad92a310a-s.woff2": { type: "static" },
    "/_next/static/media/0679c86f0065300f-s.woff2": { type: "static" },
    "/_next/static/media/07889df3c60cc4ab-s.woff2": { type: "static" },
    "/_next/static/media/079674be2211a851-s.woff2": { type: "static" },
    "/_next/static/media/0b70d69f72f0cf78-s.woff2": { type: "static" },
    "/_next/static/media/0e072041ce79ee9d-s.woff2": { type: "static" },
    "/_next/static/media/0e546879f9fadcf3-s.woff2": { type: "static" },
    "/_next/static/media/1091eb5790ef1a01-s.woff2": { type: "static" },
    "/_next/static/media/136ae42764b7e0db-s.woff2": { type: "static" },
    "/_next/static/media/13b547f74fe76fa6-s.woff2": { type: "static" },
    "/_next/static/media/13c66c395720a492-s.woff2": { type: "static" },
    "/_next/static/media/14bf87d9c02dbec5-s.woff2": { type: "static" },
    "/_next/static/media/16ce24457705c532-s.woff2": { type: "static" },
    "/_next/static/media/16f0fd2b7d4a79d6-s.woff2": { type: "static" },
    "/_next/static/media/175742aa1f3159f8-s.woff2": { type: "static" },
    "/_next/static/media/176d8670a49ca204-s.p.woff2": { type: "static" },
    "/_next/static/media/1814dee0042d7695-s.woff2": { type: "static" },
    "/_next/static/media/18ad1b43b7531c84-s.woff2": { type: "static" },
    "/_next/static/media/19060bbcca4ecb84-s.woff2": { type: "static" },
    "/_next/static/media/19fc70611c7ee6d5-s.woff2": { type: "static" },
    "/_next/static/media/1b946bf4a6b2ff6c-s.woff2": { type: "static" },
    "/_next/static/media/1e0eb4a7325b5d14-s.woff2": { type: "static" },
    "/_next/static/media/1f7bbbf73f7bd82b-s.woff2": { type: "static" },
    "/_next/static/media/1fd428ecfa2def7c-s.woff2": { type: "static" },
    "/_next/static/media/2342b516d90d0777-s.woff2": { type: "static" },
    "/_next/static/media/2446fecc381e449b-s.woff2": { type: "static" },
    "/_next/static/media/2561f1cefe0c60e1-s.woff2": { type: "static" },
    "/_next/static/media/268b7ed46fafc55d-s.woff2": { type: "static" },
    "/_next/static/media/2c046152d69c8665-s.woff2": { type: "static" },
    "/_next/static/media/2e1b830192b7974a-s.woff2": { type: "static" },
    "/_next/static/media/2e3fe16cfb6500ab-s.woff2": { type: "static" },
    "/_next/static/media/2f2005254cf8138e-s.woff2": { type: "static" },
    "/_next/static/media/2f648bc58d3c7a5c-s.woff2": { type: "static" },
    "/_next/static/media/3044774e1d54cc1c-s.woff2": { type: "static" },
    "/_next/static/media/3281a323710833ec-s.woff2": { type: "static" },
    "/_next/static/media/34515b185c8766ed-s.woff2": { type: "static" },
    "/_next/static/media/3478b6abef19b3b3-s.p.woff2": { type: "static" },
    "/_next/static/media/34eea13cb394a425-s.woff2": { type: "static" },
    "/_next/static/media/35886f795600c88f-s.woff2": { type: "static" },
    "/_next/static/media/38a46bc2cf9558d2-s.woff2": { type: "static" },
    "/_next/static/media/39bee220242d700f-s.woff2": { type: "static" },
    "/_next/static/media/3aa27b2eb5f698f7-s.woff2": { type: "static" },
    "/_next/static/media/3b90323dd4c53e9a-s.woff2": { type: "static" },
    "/_next/static/media/3ccf24bed29cbb82-s.woff2": { type: "static" },
    "/_next/static/media/3dc859ca773b41e7-s.woff2": { type: "static" },
    "/_next/static/media/40bfb1458eaec497-s.woff2": { type: "static" },
    "/_next/static/media/45a0cfac6c6fe56d-s.woff2": { type: "static" },
    "/_next/static/media/463cef7d4672ba68-s.p.woff2": { type: "static" },
    "/_next/static/media/48a0c4a37e7d2d96-s.woff2": { type: "static" },
    "/_next/static/media/4aca5df20d631376-s.woff2": { type: "static" },
    "/_next/static/media/4bb43c6f0975b94e-s.woff2": { type: "static" },
    "/_next/static/media/4bbfd3ce143f8440-s.woff2": { type: "static" },
    "/_next/static/media/4cb59d5337a9cd85-s.woff2": { type: "static" },
    "/_next/static/media/4d1e2ef00c7cb50b-s.woff2": { type: "static" },
    "/_next/static/media/4e11f55e1ef60921-s.woff2": { type: "static" },
    "/_next/static/media/4ef432ab7e1a16e8-s.woff2": { type: "static" },
    "/_next/static/media/4f99be100b0e27b2-s.woff2": { type: "static" },
    "/_next/static/media/502d6ad489d0f30f-s.woff2": { type: "static" },
    "/_next/static/media/520117a66a7ba836-s.woff2": { type: "static" },
    "/_next/static/media/524be5e37a616f9b-s.woff2": { type: "static" },
    "/_next/static/media/529bd20adcb56129-s.woff2": { type: "static" },
    "/_next/static/media/53ba8f94df10191f-s.woff2": { type: "static" },
    "/_next/static/media/5532623b75065c2e-s.woff2": { type: "static" },
    "/_next/static/media/563e927f5a0fe1a0-s.woff2": { type: "static" },
    "/_next/static/media/56f1c56542934af8-s.woff2": { type: "static" },
    "/_next/static/media/57699fff66d5761c-s.woff2": { type: "static" },
    "/_next/static/media/5a7dbca54c2fc4dd-s.woff2": { type: "static" },
    "/_next/static/media/5c1407982727089d-s.woff2": { type: "static" },
    "/_next/static/media/5eaaf3d545ca615e-s.woff2": { type: "static" },
    "/_next/static/media/5f85be03e9dd17c2-s.woff2": { type: "static" },
    "/_next/static/media/618a0f909c630fd3-s.woff2": { type: "static" },
    "/_next/static/media/62e83259d2bcfe22-s.woff2": { type: "static" },
    "/_next/static/media/63cada980727a453-s.woff2": { type: "static" },
    "/_next/static/media/65014f1194bb04e2-s.woff2": { type: "static" },
    "/_next/static/media/653e1a6f7e8644bf-s.woff2": { type: "static" },
    "/_next/static/media/684e5662d94c69e1-s.p.woff2": { type: "static" },
    "/_next/static/media/6c1d3e1a02c4bd06-s.woff2": { type: "static" },
    "/_next/static/media/6c8a8389560494b7-s.woff2": { type: "static" },
    "/_next/static/media/6d081f3f73093e7e-s.woff2": { type: "static" },
    "/_next/static/media/6da023689f345cf7-s.woff2": { type: "static" },
    "/_next/static/media/712b58b540412943-s.woff2": { type: "static" },
    "/_next/static/media/71e44265cd6baae6-s.woff2": { type: "static" },
    "/_next/static/media/7524e759b2d52ce2-s.woff2": { type: "static" },
    "/_next/static/media/7d2ae9263deff332-s.woff2": { type: "static" },
    "/_next/static/media/7daac35721d0ddd3-s.woff2": { type: "static" },
    "/_next/static/media/7f6ebdf3c3f97420-s.woff2": { type: "static" },
    "/_next/static/media/7fefb60548894a38-s.woff2": { type: "static" },
    "/_next/static/media/83feb047e42e457a-s.woff2": { type: "static" },
    "/_next/static/media/84fd05e253f7fd33-s.woff2": { type: "static" },
    "/_next/static/media/85577d0930f647c9-s.woff2": { type: "static" },
    "/_next/static/media/85e882c981d7477f-s.woff2": { type: "static" },
    "/_next/static/media/882939abc0b2803c-s.woff2": { type: "static" },
    "/_next/static/media/892780af3fb026ed-s.woff2": { type: "static" },
    "/_next/static/media/8b650c63969d5385-s.woff2": { type: "static" },
    "/_next/static/media/8e2878f35543a4c9-s.woff2": { type: "static" },
    "/_next/static/media/8ea51a27e153ec43-s.woff2": { type: "static" },
    "/_next/static/media/8fc78b5a33cc414c-s.woff2": { type: "static" },
    "/_next/static/media/9101c4f9a2fa2f40-s.woff2": { type: "static" },
    "/_next/static/media/933f24feb95e5b64-s.woff2": { type: "static" },
    "/_next/static/media/97b12f7b815cdf76-s.woff2": { type: "static" },
    "/_next/static/media/98b9ea372b08b751-s.woff2": { type: "static" },
    "/_next/static/media/98bcafdc59ee6d65-s.p.woff2": { type: "static" },
    "/_next/static/media/9a13da787b75cead-s.woff2": { type: "static" },
    "/_next/static/media/9ae1ac821a4debaf-s.woff2": { type: "static" },
    "/_next/static/media/a498d11e2da60f85-s.woff2": { type: "static" },
    "/_next/static/media/a690d484a1c0b3db-s.woff2": { type: "static" },
    "/_next/static/media/a7f64a09f7737545-s.woff2": { type: "static" },
    "/_next/static/media/a94db81185bfcb96-s.woff2": { type: "static" },
    "/_next/static/media/abb68bc4015e0e57-s.woff2": { type: "static" },
    "/_next/static/media/ad3743ffcdde31f9-s.woff2": { type: "static" },
    "/_next/static/media/af9118001ee64e13-s.woff2": { type: "static" },
    "/_next/static/media/b0362587474384cd-s.woff2": { type: "static" },
    "/_next/static/media/b06ce8ef4a357eda-s.woff2": { type: "static" },
    "/_next/static/media/b17f4305e2f0c22a-s.woff2": { type: "static" },
    "/_next/static/media/b21ea768b838ad24-s.woff2": { type: "static" },
    "/_next/static/media/b27412c4d8ac9e78-s.woff2": { type: "static" },
    "/_next/static/media/b6f2eee8808a2bb4-s.woff2": { type: "static" },
    "/_next/static/media/b73117315ab8e409-s.woff2": { type: "static" },
    "/_next/static/media/bbc68ae119ea66c6-s.woff2": { type: "static" },
    "/_next/static/media/bc2003170c651d45-s.woff2": { type: "static" },
    "/_next/static/media/bcacafc6021aa5b2-s.woff2": { type: "static" },
    "/_next/static/media/bd5f611dd152c2b3-s.woff2": { type: "static" },
    "/_next/static/media/be2416cbb012c256-s.p.woff2": { type: "static" },
    "/_next/static/media/bff888c74e444362-s.woff2": { type: "static" },
    "/_next/static/media/c690761783507ad4-s.p.woff2": { type: "static" },
    "/_next/static/media/c7a7b8e4e54792d7-s.woff2": { type: "static" },
    "/_next/static/media/c7dddb0aa3786a9d-s.woff2": { type: "static" },
    "/_next/static/media/c9232105d639dc4b-s.woff2": { type: "static" },
    "/_next/static/media/c973a1445980a649-s.woff2": { type: "static" },
    "/_next/static/media/cc85df078d97f01a-s.woff2": { type: "static" },
    "/_next/static/media/ce562f20499ad585-s.woff2": { type: "static" },
    "/_next/static/media/d08be8d6d7602db8-s.woff2": { type: "static" },
    "/_next/static/media/d130f18b660bb2cf-s.woff2": { type: "static" },
    "/_next/static/media/d2bdce22c69889c2-s.woff2": { type: "static" },
    "/_next/static/media/d43ef4503e5571d0-s.woff2": { type: "static" },
    "/_next/static/media/d4e99c199dab3055-s.woff2": { type: "static" },
    "/_next/static/media/d52181ec8545aa95-s.woff2": { type: "static" },
    "/_next/static/media/d607327a37a507c7-s.woff2": { type: "static" },
    "/_next/static/media/de321ba1d8eb8113-s.woff2": { type: "static" },
    "/_next/static/media/de9f77d5d44c0fc2-s.woff2": { type: "static" },
    "/_next/static/media/e490b1ecb6589d48-s.woff2": { type: "static" },
    "/_next/static/media/e9f5af7ba17d31f0-s.woff2": { type: "static" },
    "/_next/static/media/ea105787fbc8b550-s.woff2": { type: "static" },
    "/_next/static/media/ea30bc9c1bb91041-s.woff2": { type: "static" },
    "/_next/static/media/ebec2867f40f78ec-s.woff2": { type: "static" },
    "/_next/static/media/ec1b1cbc512bc43e-s.woff2": { type: "static" },
    "/_next/static/media/ec286e88baa6fd80-s.woff2": { type: "static" },
    "/_next/static/media/ec802b205347a603-s.woff2": { type: "static" },
    "/_next/static/media/eeb32f96af7caca6-s.woff2": { type: "static" },
    "/_next/static/media/f2b81d53dcc8a342-s.woff2": { type: "static" },
    "/_next/static/media/f2ccc18bac42a8aa-s.woff2": { type: "static" },
    "/_next/static/media/f6a747e87a944fde-s.woff2": { type: "static" },
    "/_next/static/media/f75d2e2a0746afb1-s.woff2": { type: "static" },
    "/_next/static/media/fadedf84d5a3abda-s.woff2": { type: "static" },
    "/_next/static/media/ffb0d388d6fb81de-s.woff2": { type: "static" },
    "/_next/static/media/logo.ed4f4112.svg": { type: "static" },
    "/_next/static/media/tepe.c1bb34b9.svg": { type: "static" },
    "/bg-dark.png": { type: "static" },
    "/github-social-preview.png": { type: "static" },
    "/logo-black.svg": { type: "static" },
    "/logo-white.svg": { type: "static" },
    "/api/v1/lgtm-images": {
      type: "function",
      entrypoint: "__next-on-pages-dist__/functions/api/v1/lgtm-images.func.js",
    },
    "/api/v1/lgtm-images.rsc": {
      type: "function",
      entrypoint: "__next-on-pages-dist__/functions/api/v1/lgtm-images.func.js",
    },
    "/404": {
      type: "override",
      path: "/404.html",
      headers: { "content-type": "text/html; charset=utf-8" },
    },
    "/500": {
      type: "override",
      path: "/500.html",
      headers: { "content-type": "text/html; charset=utf-8" },
    },
    "/_error.rsc": {
      type: "override",
      path: "/_error.rsc.json",
      headers: { "content-type": "application/json" },
    },
    "/_app.rsc": {
      type: "override",
      path: "/_app.rsc.json",
      headers: { "content-type": "application/json" },
    },
    "/_document.rsc": {
      type: "override",
      path: "/_document.rsc.json",
      headers: { "content-type": "application/json" },
    },
    "/404.rsc": {
      type: "override",
      path: "/404.rsc.json",
      headers: { "content-type": "application/json" },
    },
    "/apple-icon.png": {
      type: "override",
      path: "/apple-icon.png",
      headers: {
        "cache-control": "public, immutable, no-transform, max-age=31536000",
        "content-type": "image/png",
        "x-next-cache-tags":
          "_N_T_/layout,_N_T_/apple-icon.png/layout,_N_T_/apple-icon.png/route,_N_T_/apple-icon.png",
        vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch",
      },
    },
    "/favicon.ico": {
      type: "override",
      path: "/favicon.ico",
      headers: {
        "cache-control": "public, max-age=0, must-revalidate",
        "content-type": "image/x-icon",
        "x-next-cache-tags":
          "_N_T_/layout,_N_T_/favicon.ico/layout,_N_T_/favicon.ico/route,_N_T_/favicon.ico",
        vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch",
      },
    },
    "/icon.svg": {
      type: "override",
      path: "/icon.svg",
      headers: {
        "cache-control": "public, immutable, no-transform, max-age=31536000",
        "content-type": "image/svg+xml",
        "x-next-cache-tags":
          "_N_T_/layout,_N_T_/icon.svg/layout,_N_T_/icon.svg/route,_N_T_/icon.svg",
        vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch",
      },
    },
    "/index.html": {
      type: "override",
      path: "/index.html",
      headers: {
        "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/",
        vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch",
      },
    },
    "/index": {
      type: "override",
      path: "/index.html",
      headers: {
        "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/",
        vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch",
      },
    },
    "/": {
      type: "override",
      path: "/index.html",
      headers: {
        "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/",
        vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch",
      },
    },
    "/index.rsc": {
      type: "override",
      path: "/index.rsc",
      headers: {
        "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/",
        vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch",
        "content-type": "text/x-component",
      },
    },
    "/manifest.json": {
      type: "override",
      path: "/manifest.json",
      headers: {
        "cache-control": "public, immutable, no-transform, max-age=31536000",
        "content-type": "application/manifest+json",
        "x-next-cache-tags":
          "_N_T_/layout,_N_T_/manifest.json/layout,_N_T_/manifest.json/route,_N_T_/manifest.json",
        vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch",
      },
    },
  };
});
var F = U((Gt, q) => {
  "use strict";
  d();
  f();
  p();
  function w(t, e) {
    t = String(t || "").trim();
    let a = t,
      s,
      n = "";
    if (/^[^a-zA-Z\\\s]/.test(t)) {
      s = t[0];
      let r = t.lastIndexOf(s);
      (n += t.substring(r + 1)), (t = t.substring(1, r));
    }
    let i = 0;
    return (
      (t = ft(t, (r) => {
        if (/^\(\?[P<']/.test(r)) {
          let o = /^\(\?P?[<']([^>']+)[>']/.exec(r);
          if (!o)
            throw new Error(
              `Failed to extract named captures from ${JSON.stringify(r)}`,
            );
          let u = r.substring(o[0].length, r.length - 1);
          return e && (e[i] = o[1]), i++, `(${u})`;
        }
        return r.substring(0, 3) === "(?:" || i++, r;
      })),
      (t = t.replace(/\[:([^:]+):\]/g, (r, o) => w.characterClasses[o] || r)),
      new w.PCRE(t, n, a, n, s)
    );
  }
  function ft(t, e) {
    let a = 0,
      s = 0,
      n = false;
    for (let c = 0; c < t.length; c++) {
      let i = t[c];
      if (n) {
        n = false;
        continue;
      }
      switch (i) {
        case "(":
          s === 0 && (a = c), s++;
          break;
        case ")":
          if (s > 0 && (s--, s === 0)) {
            let r = c + 1,
              o = a === 0 ? "" : t.substring(0, a),
              u = t.substring(r),
              l = String(e(t.substring(a, r)));
            (t = o + l + u), (c = a);
          }
          break;
        case "\\":
          n = true;
          break;
        default:
          break;
      }
    }
    return t;
  }
  (function (t) {
    class e extends RegExp {
      constructor(s, n, c, i, r) {
        super(s, n),
          (this.pcrePattern = c),
          (this.pcreFlags = i),
          (this.delimiter = r);
      }
    }
    (t.PCRE = e),
      (t.characterClasses = {
        alnum: "[A-Za-z0-9]",
        word: "[A-Za-z0-9_]",
        alpha: "[A-Za-z]",
        blank: "[ \\t]",
        cntrl: "[\\x00-\\x1F\\x7F]",
        digit: "\\d",
        graph: "[\\x21-\\x7E]",
        lower: "[a-z]",
        print: "[\\x20-\\x7E]",
        punct: "[\\]\\[!\"#$%&'()*+,./:;<=>?@\\\\^_`{|}~-]",
        space: "\\s",
        upper: "[A-Z]",
        xdigit: "[A-Fa-f0-9]",
      });
  })(w || (w = {}));
  w.prototype = w.PCRE.prototype;
  q.exports = w;
});
var X = U((H) => {
  "use strict";
  d();
  f();
  p();
  H.parse = Rt;
  H.serialize = vt;
  var bt = Object.prototype.toString,
    E = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  function Rt(t, e) {
    if (typeof t != "string")
      throw new TypeError("argument str must be a string");
    for (var a = {}, s = e || {}, n = s.decode || Pt, c = 0; c < t.length; ) {
      var i = t.indexOf("=", c);
      if (i === -1) break;
      var r = t.indexOf(";", c);
      if (r === -1) r = t.length;
      else if (r < i) {
        c = t.lastIndexOf(";", i - 1) + 1;
        continue;
      }
      var o = t.slice(c, i).trim();
      if (a[o] === void 0) {
        var u = t.slice(i + 1, r).trim();
        u.charCodeAt(0) === 34 && (u = u.slice(1, -1)), (a[o] = Tt(u, n));
      }
      c = r + 1;
    }
    return a;
  }
  function vt(t, e, a) {
    var s = a || {},
      n = s.encode || St;
    if (typeof n != "function") throw new TypeError("option encode is invalid");
    if (!E.test(t)) throw new TypeError("argument name is invalid");
    var c = n(e);
    if (c && !E.test(c)) throw new TypeError("argument val is invalid");
    var i = t + "=" + c;
    if (s.maxAge != null) {
      var r = s.maxAge - 0;
      if (isNaN(r) || !isFinite(r))
        throw new TypeError("option maxAge is invalid");
      i += "; Max-Age=" + Math.floor(r);
    }
    if (s.domain) {
      if (!E.test(s.domain)) throw new TypeError("option domain is invalid");
      i += "; Domain=" + s.domain;
    }
    if (s.path) {
      if (!E.test(s.path)) throw new TypeError("option path is invalid");
      i += "; Path=" + s.path;
    }
    if (s.expires) {
      var o = s.expires;
      if (!Ct(o) || isNaN(o.valueOf()))
        throw new TypeError("option expires is invalid");
      i += "; Expires=" + o.toUTCString();
    }
    if (
      (s.httpOnly && (i += "; HttpOnly"),
      s.secure && (i += "; Secure"),
      s.priority)
    ) {
      var u =
        typeof s.priority == "string" ? s.priority.toLowerCase() : s.priority;
      switch (u) {
        case "low":
          i += "; Priority=Low";
          break;
        case "medium":
          i += "; Priority=Medium";
          break;
        case "high":
          i += "; Priority=High";
          break;
        default:
          throw new TypeError("option priority is invalid");
      }
    }
    if (s.sameSite) {
      var l =
        typeof s.sameSite == "string" ? s.sameSite.toLowerCase() : s.sameSite;
      switch (l) {
        case true:
          i += "; SameSite=Strict";
          break;
        case "lax":
          i += "; SameSite=Lax";
          break;
        case "strict":
          i += "; SameSite=Strict";
          break;
        case "none":
          i += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return i;
  }
  function Pt(t) {
    return t.indexOf("%") !== -1 ? decodeURIComponent(t) : t;
  }
  function St(t) {
    return encodeURIComponent(t);
  }
  function Ct(t) {
    return bt.call(t) === "[object Date]" || t instanceof Date;
  }
  function Tt(t, e) {
    try {
      return e(t);
    } catch {
      return t;
    }
  }
});
d();
f();
p();
d();
f();
p();
d();
f();
p();
var R = "INTERNAL_SUSPENSE_CACHE_HOSTNAME.local";
d();
f();
p();
d();
f();
p();
d();
f();
p();
d();
f();
p();
var $ = V(F());
function C(t, e, a) {
  if (e == null) return { match: null, captureGroupKeys: [] };
  let s = a ? "" : "i",
    n = [];
  return {
    match: (0, $.default)(`%${t}%${s}`, n).exec(e),
    captureGroupKeys: n,
  };
}
function v(t, e, a, { namedOnly: s } = {}) {
  return t.replace(/\$([a-zA-Z0-9_]+)/g, (n, c) => {
    let i = a.indexOf(c);
    return s && i === -1 ? n : (i === -1 ? e[parseInt(c, 10)] : e[i + 1]) || "";
  });
}
function I(t, { url: e, cookies: a, headers: s, routeDest: n }) {
  switch (t.type) {
    case "host":
      return { valid: e.hostname === t.value };
    case "header":
      return t.value !== void 0
        ? M(t.value, s.get(t.key), n)
        : { valid: s.has(t.key) };
    case "cookie": {
      let c = a[t.key];
      return c && t.value !== void 0
        ? M(t.value, c, n)
        : { valid: c !== void 0 };
    }
    case "query":
      return t.value !== void 0
        ? M(t.value, e.searchParams.get(t.key), n)
        : { valid: e.searchParams.has(t.key) };
  }
}
function M(t, e, a) {
  let { match: s, captureGroupKeys: n } = C(t, e);
  return a && s && n.length
    ? { valid: !!s, newRouteDest: v(a, s, n, { namedOnly: true }) }
    : { valid: !!s };
}
d();
f();
p();
function D(t) {
  let e = new Headers(t.headers);
  return (
    t.cf &&
      (e.set("x-vercel-ip-city", encodeURIComponent(t.cf.city)),
      e.set("x-vercel-ip-country", t.cf.country),
      e.set("x-vercel-ip-country-region", t.cf.regionCode),
      e.set("x-vercel-ip-latitude", t.cf.latitude),
      e.set("x-vercel-ip-longitude", t.cf.longitude)),
    e.set("x-vercel-sc-host", R),
    new Request(t, { headers: e })
  );
}
d();
f();
p();
function x(t, e, a) {
  let s = e instanceof Headers ? e.entries() : Object.entries(e);
  for (let [n, c] of s) {
    let i = n.toLowerCase(),
      r = a?.match ? v(c, a.match, a.captureGroupKeys) : c;
    i === "set-cookie" ? t.append(i, r) : t.set(i, r);
  }
}
function P(t) {
  return /^https?:\/\//.test(t);
}
function g(t, e) {
  for (let [a, s] of e.entries()) {
    let n = /^nxtP(.+)$/.exec(a),
      c = /^nxtI(.+)$/.exec(a);
    n?.[1]
      ? (t.set(a, s), t.set(n[1], s))
      : c?.[1]
        ? t.set(c[1], s.replace(/(\(\.+\))+/, ""))
        : (!t.has(a) || (!!s && !t.getAll(a).includes(s))) && t.append(a, s);
  }
}
function L(t, e) {
  let a = new URL(e, t.url);
  return (
    g(a.searchParams, new URL(t.url).searchParams),
    (a.pathname = a.pathname
      .replace(/\/index.html$/, "/")
      .replace(/\.html$/, "")),
    new Request(a, t)
  );
}
function S(t) {
  return new Response(t.body, t);
}
function O(t) {
  return t
    .split(",")
    .map((e) => {
      let [a, s] = e.split(";"),
        n = parseFloat((s ?? "q=1").replace(/q *= */gi, ""));
      return [a.trim(), isNaN(n) ? 1 : n];
    })
    .sort((e, a) => a[1] - e[1])
    .map(([e]) => (e === "*" || e === "" ? [] : e))
    .flat();
}
d();
f();
p();
function A(t) {
  switch (t) {
    case "none":
      return "filesystem";
    case "filesystem":
      return "rewrite";
    case "rewrite":
      return "resource";
    case "resource":
      return "miss";
    default:
      return "miss";
  }
}
async function T(
  t,
  { request: e, assetsFetcher: a, ctx: s },
  { path: n, searchParams: c },
) {
  let i,
    r = new URL(e.url);
  g(r.searchParams, c);
  let o = new Request(r, e);
  try {
    switch (t?.type) {
      case "function":
      case "middleware": {
        let u = await import(t.entrypoint);
        try {
          i = await u.default(o, s);
        } catch (l) {
          let _ = l;
          throw _.name === "TypeError" &&
            _.message.endsWith("default is not a function")
            ? new Error(
                `An error occurred while evaluating the target edge function (${t.entrypoint})`,
              )
            : l;
        }
        break;
      }
      case "override": {
        (i = S(await a.fetch(L(o, t.path ?? n)))),
          t.headers && x(i.headers, t.headers);
        break;
      }
      case "static": {
        i = await a.fetch(L(o, n));
        break;
      }
      default:
        i = new Response("Not Found", { status: 404 });
    }
  } catch (u) {
    return (
      console.error(u), new Response("Internal Server Error", { status: 500 })
    );
  }
  return S(i);
}
function B(t, e) {
  let a = "^//?(?:",
    s = ")/(.*)$";
  return !t.startsWith(a) || !t.endsWith(s)
    ? false
    : t
        .slice(a.length, -s.length)
        .split("|")
        .every((c) => e.has(c));
}
d();
f();
p();
function pt(t, { protocol: e, hostname: a, port: s, pathname: n }) {
  return !(
    (e && t.protocol.replace(/:$/, "") !== e) ||
    !new RegExp(a).test(t.hostname) ||
    (s && !new RegExp(s).test(t.port)) ||
    (n && !new RegExp(n).test(t.pathname))
  );
}
function ut(t, e) {
  if (t.method !== "GET") return;
  let { origin: a, searchParams: s } = new URL(t.url),
    n = s.get("url"),
    c = Number.parseInt(s.get("w") ?? "", 10),
    i = Number.parseInt(s.get("q") ?? "75", 10);
  if (
    !n ||
    Number.isNaN(c) ||
    Number.isNaN(i) ||
    !e?.sizes?.includes(c) ||
    i < 0 ||
    i > 100
  )
    return;
  let r = new URL(n, a);
  if (r.pathname.endsWith(".svg") && !e?.dangerouslyAllowSVG) return;
  let o = n.startsWith("//"),
    u = n.startsWith("/") && !o;
  if (
    !u &&
    !e?.domains?.includes(r.hostname) &&
    !e?.remotePatterns?.find((b) => pt(r, b))
  )
    return;
  let l = t.headers.get("Accept") ?? "",
    _ = e?.formats?.find((b) => l.includes(b))?.replace("image/", "");
  return {
    isRelative: u,
    imageUrl: r,
    options: { width: c, quality: i, format: _ },
  };
}
function lt(t, e, a) {
  let s = new Headers();
  if (
    (a?.contentSecurityPolicy &&
      s.set("Content-Security-Policy", a.contentSecurityPolicy),
    a?.contentDispositionType)
  ) {
    let c = e.pathname.split("/").pop(),
      i = c
        ? `${a.contentDispositionType}; filename="${c}"`
        : a.contentDispositionType;
    s.set("Content-Disposition", i);
  }
  t.headers.has("Cache-Control") ||
    s.set("Cache-Control", `public, max-age=${a?.minimumCacheTTL ?? 60}`);
  let n = S(t);
  return x(n.headers, s), n;
}
async function G(t, { buildOutput: e, assetsFetcher: a, imagesConfig: s }) {
  let n = ut(t, s);
  if (!n)
    return new Response("Invalid image resizing request", { status: 400 });
  let { isRelative: c, imageUrl: i } = n,
    o = await (c && i.pathname in e ? a.fetch.bind(a) : fetch)(i);
  return lt(o, i, s);
}
d();
f();
p();
d();
f();
p();
var ht = "x-vercel-cache-tags";
var mt = "x-next-cache-soft-tags";
var yt = Symbol.for("__cloudflare-request-context__");
async function W(t) {
  let e = `https://${R}/v1/suspense-cache/`;
  if (!t.url.startsWith(e)) return null;
  try {
    let a = new URL(t.url),
      s = await _t();
    if (a.pathname === "/v1/suspense-cache/revalidate") {
      let c = a.searchParams.get("tags")?.split(",") ?? [];
      for (let i of c) await s.revalidateTag(i);
      return new Response(null, { status: 200 });
    }
    let n = a.pathname.replace("/v1/suspense-cache/", "");
    if (!n.length) return new Response("Invalid cache key", { status: 400 });
    switch (t.method) {
      case "GET": {
        let c = z(t, mt),
          i = await s.get(n, { softTags: c });
        return i
          ? new Response(JSON.stringify(i.value), {
              status: 200,
              headers: {
                "Content-Type": "application/json",
                "x-vercel-cache-state": "fresh",
                age: `${(Date.now() - (i.lastModified ?? Date.now())) / 1e3}`,
              },
            })
          : new Response(null, { status: 404 });
      }
      case "POST": {
        let c = globalThis[yt],
          i = async () => {
            let r = await t.json();
            r.data.tags === void 0 && (r.tags ??= z(t, ht) ?? []),
              await s.set(n, r);
          };
        return (
          c ? c.ctx.waitUntil(i()) : await i(),
          new Response(null, { status: 200 })
        );
      }
      default:
        return new Response(null, { status: 405 });
    }
  } catch (a) {
    return (
      console.error(a),
      new Response("Error handling cache request", { status: 500 })
    );
  }
}
async function _t() {
  return process.env.__NEXT_ON_PAGES__KV_SUSPENSE_CACHE
    ? K("kv")
    : K("cache-api");
}
async function K(t) {
  let e = await import(`./__next-on-pages-dist__/cache/${t}.js`);
  return new e.default();
}
function z(t, e) {
  return t.headers.get(e)?.split(",")?.filter(Boolean);
}
function Z() {
  globalThis[J] || (xt(), (globalThis[J] = true));
}
function xt() {
  let t = globalThis.fetch;
  globalThis.fetch = async (...e) => {
    let a = new Request(...e),
      s = await gt(a);
    return s || ((s = await W(a)), s) ? s : (wt(a), t(a));
  };
}
async function gt(t) {
  if (t.url.startsWith("blob:"))
    try {
      let a = (
          await import(
            `./__next-on-pages-dist__/assets/${new URL(t.url).pathname}.bin`
          )
        ).default,
        s = {
          async arrayBuffer() {
            return a;
          },
          get body() {
            return new ReadableStream({
              start(n) {
                let c = Buffer.from(a);
                n.enqueue(c), n.close();
              },
            });
          },
          async text() {
            return Buffer.from(a).toString();
          },
          async json() {
            let n = Buffer.from(a);
            return JSON.stringify(n.toString());
          },
          async blob() {
            return new Blob(a);
          },
        };
      return (s.clone = () => ({ ...s })), s;
    } catch {}
  return null;
}
function wt(t) {
  t.headers.has("user-agent") ||
    t.headers.set("user-agent", "Next.js Middleware");
}
var J = Symbol.for("next-on-pages fetch patch");
d();
f();
p();
var Q = V(X());
var k = class {
  constructor(e, a, s, n, c) {
    this.routes = e;
    this.output = a;
    this.reqCtx = s;
    (this.url = new URL(s.request.url)),
      (this.cookies = (0, Q.parse)(s.request.headers.get("cookie") || "")),
      (this.path = this.url.pathname || "/"),
      (this.headers = { normal: new Headers(), important: new Headers() }),
      (this.searchParams = new URLSearchParams()),
      g(this.searchParams, this.url.searchParams),
      (this.checkPhaseCounter = 0),
      (this.middlewareInvoked = []),
      (this.wildcardMatch = c?.find((i) => i.domain === this.url.hostname)),
      (this.locales = new Set(n.collectedLocales));
  }
  url;
  cookies;
  wildcardMatch;
  path;
  status;
  headers;
  searchParams;
  body;
  checkPhaseCounter;
  middlewareInvoked;
  locales;
  checkRouteMatch(e, { checkStatus: a, checkIntercept: s }) {
    let n = C(e.src, this.path, e.caseSensitive);
    if (
      !n.match ||
      (e.methods &&
        !e.methods
          .map((i) => i.toUpperCase())
          .includes(this.reqCtx.request.method.toUpperCase()))
    )
      return;
    let c = {
      url: this.url,
      cookies: this.cookies,
      headers: this.reqCtx.request.headers,
      routeDest: e.dest,
    };
    if (
      !e.has?.find((i) => {
        let r = I(i, c);
        return r.newRouteDest && (c.routeDest = r.newRouteDest), !r.valid;
      }) &&
      !e.missing?.find((i) => I(i, c).valid) &&
      !(a && e.status !== this.status)
    ) {
      if (s && e.dest) {
        let i = /\/(\(\.+\))+/,
          r = i.test(e.dest),
          o = i.test(this.path);
        if (r && !o) return;
      }
      return { routeMatch: n, routeDest: c.routeDest };
    }
  }
  processMiddlewareResp(e) {
    let a = "x-middleware-override-headers",
      s = e.headers.get(a);
    if (s) {
      let o = new Set(s.split(",").map((u) => u.trim()));
      for (let u of o.keys()) {
        let l = `x-middleware-request-${u}`,
          _ = e.headers.get(l);
        this.reqCtx.request.headers.get(u) !== _ &&
          (_
            ? this.reqCtx.request.headers.set(u, _)
            : this.reqCtx.request.headers.delete(u)),
          e.headers.delete(l);
      }
      e.headers.delete(a);
    }
    let n = "x-middleware-rewrite",
      c = e.headers.get(n);
    if (c) {
      let o = new URL(c, this.url),
        u = this.url.hostname !== o.hostname;
      (this.path = u ? `${o}` : o.pathname),
        g(this.searchParams, o.searchParams),
        e.headers.delete(n);
    }
    let i = "x-middleware-next";
    e.headers.get(i)
      ? e.headers.delete(i)
      : !c && !e.headers.has("location")
        ? ((this.body = e.body), (this.status = e.status))
        : e.headers.has("location") &&
          e.status >= 300 &&
          e.status < 400 &&
          (this.status = e.status),
      x(this.reqCtx.request.headers, e.headers),
      x(this.headers.normal, e.headers),
      (this.headers.middlewareLocation = e.headers.get("location"));
  }
  async runRouteMiddleware(e) {
    if (!e) return true;
    let a = e && this.output[e];
    if (!a || a.type !== "middleware") return (this.status = 500), false;
    let s = await T(a, this.reqCtx, {
      path: this.path,
      searchParams: this.searchParams,
      headers: this.headers,
      status: this.status,
    });
    return (
      this.middlewareInvoked.push(e),
      s.status === 500
        ? ((this.status = s.status), false)
        : (this.processMiddlewareResp(s), true)
    );
  }
  applyRouteOverrides(e) {
    !e.override ||
      ((this.status = void 0),
      (this.headers.normal = new Headers()),
      (this.headers.important = new Headers()));
  }
  applyRouteHeaders(e, a, s) {
    !e.headers ||
      (x(this.headers.normal, e.headers, { match: a, captureGroupKeys: s }),
      e.important &&
        x(this.headers.important, e.headers, {
          match: a,
          captureGroupKeys: s,
        }));
  }
  applyRouteStatus(e) {
    !e.status || (this.status = e.status);
  }
  applyRouteDest(e, a, s) {
    if (!e.dest) return this.path;
    let n = this.path,
      c = e.dest;
    this.wildcardMatch &&
      /\$wildcard/.test(c) &&
      (c = c.replace(/\$wildcard/g, this.wildcardMatch.value)),
      (this.path = v(c, a, s));
    let i = /\/index\.rsc$/i.test(this.path),
      r = /^\/(?:index)?$/i.test(n),
      o = /^\/__index\.prefetch\.rsc$/i.test(n);
    i && !r && !o && (this.path = n);
    let u = /\.rsc$/i.test(this.path),
      l = /\.prefetch\.rsc$/i.test(this.path),
      _ = this.path in this.output;
    u && !l && !_ && (this.path = this.path.replace(/\.rsc/i, ""));
    let b = new URL(this.path, this.url);
    return (
      g(this.searchParams, b.searchParams),
      P(this.path) || (this.path = b.pathname),
      n
    );
  }
  applyLocaleRedirects(e) {
    if (
      !e.locale?.redirect ||
      (!/^\^(.)*$/.test(e.src) && e.src !== this.path) ||
      this.headers.normal.has("location")
    )
      return;
    let {
        locale: { redirect: s, cookie: n },
      } = e,
      c = n && this.cookies[n],
      i = O(c ?? ""),
      r = O(this.reqCtx.request.headers.get("accept-language") ?? ""),
      l = [...i, ...r].map((_) => s[_]).filter(Boolean)[0];
    if (l) {
      !this.path.startsWith(l) &&
        (this.headers.normal.set("location", l), (this.status = 307));
      return;
    }
  }
  getLocaleFriendlyRoute(e, a) {
    return !this.locales || a !== "miss"
      ? e
      : B(e.src, this.locales)
        ? { ...e, src: e.src.replace(/\/\(\.\*\)\$$/, "(?:/(.*))?$") }
        : e;
  }
  async checkRoute(e, a) {
    let s = this.getLocaleFriendlyRoute(a, e),
      { routeMatch: n, routeDest: c } =
        this.checkRouteMatch(s, {
          checkStatus: e === "error",
          checkIntercept: e === "rewrite",
        }) ?? {},
      i = { ...s, dest: c };
    if (
      !n?.match ||
      (i.middlewarePath && this.middlewareInvoked.includes(i.middlewarePath))
    )
      return "skip";
    let { match: r, captureGroupKeys: o } = n;
    if (
      (this.applyRouteOverrides(i),
      this.applyLocaleRedirects(i),
      !(await this.runRouteMiddleware(i.middlewarePath)))
    )
      return "error";
    if (this.body !== void 0 || this.headers.middlewareLocation) return "done";
    this.applyRouteHeaders(i, r, o), this.applyRouteStatus(i);
    let l = this.applyRouteDest(i, r, o);
    if (i.check && !P(this.path))
      if (l === this.path) {
        if (e !== "miss") return this.checkPhase(A(e));
        this.status = 404;
      } else if (e === "miss") {
        if (
          !(this.path in this.output) &&
          !(this.path.replace(/\/$/, "") in this.output)
        )
          return this.checkPhase("filesystem");
        this.status === 404 && (this.status = void 0);
      } else return this.checkPhase("none");
    return !i.continue || (i.status && i.status >= 300 && i.status <= 399)
      ? "done"
      : "next";
  }
  async checkPhase(e) {
    if (this.checkPhaseCounter++ >= 50)
      return (
        console.error(
          `Routing encountered an infinite loop while checking ${this.url.pathname}`,
        ),
        (this.status = 500),
        "error"
      );
    this.middlewareInvoked = [];
    let a = true;
    for (let c of this.routes[e]) {
      let i = await this.checkRoute(e, c);
      if (i === "error") return "error";
      if (i === "done") {
        a = false;
        break;
      }
    }
    if (
      e === "hit" ||
      P(this.path) ||
      this.headers.normal.has("location") ||
      !!this.body
    )
      return "done";
    if (e === "none")
      for (let c of this.locales) {
        let i = new RegExp(`/${c}(/.*)`),
          o = this.path.match(i)?.[1];
        if (o && o in this.output) {
          this.path = o;
          break;
        }
      }
    let s = this.path in this.output;
    if (!s && this.path.endsWith("/")) {
      let c = this.path.replace(/\/$/, "");
      (s = c in this.output), s && (this.path = c);
    }
    if (e === "miss" && !s) {
      let c = !this.status || this.status < 400;
      this.status = c ? 404 : this.status;
    }
    let n = "miss";
    return (
      s || e === "miss" || e === "error" ? (n = "hit") : a && (n = A(e)),
      this.checkPhase(n)
    );
  }
  async run(e = "none") {
    this.checkPhaseCounter = 0;
    let a = await this.checkPhase(e);
    return (
      this.headers.normal.has("location") &&
        (!this.status || this.status < 300 || this.status >= 400) &&
        (this.status = 307),
      a
    );
  }
};
async function Y(t, e, a, s) {
  let n = new k(e.routes, a, t, s, e.wildcard),
    c = await tt(n);
  return Et(t, c, a);
}
async function tt(t, e = "none", a = false) {
  return (await t.run(e)) === "error" || (!a && t.status && t.status >= 400)
    ? tt(t, "error", true)
    : {
        path: t.path,
        status: t.status,
        headers: t.headers,
        searchParams: t.searchParams,
        body: t.body,
      };
}
async function Et(
  t,
  { path: e = "/404", status: a, headers: s, searchParams: n, body: c },
  i,
) {
  let r = s.normal.get("location");
  if (r) {
    if (r !== s.middlewareLocation) {
      let l = [...n.keys()].length ? `?${n.toString()}` : "";
      s.normal.set("location", `${r ?? "/"}${l}`);
    }
    return new Response(null, { status: a, headers: s.normal });
  }
  let o;
  if (c !== void 0) o = new Response(c, { status: a });
  else if (P(e)) {
    let l = new URL(e);
    g(l.searchParams, n), (o = await fetch(l, t.request));
  } else
    o = await T(i[e], t, { path: e, status: a, headers: s, searchParams: n });
  let u = s.normal;
  return (
    x(u, o.headers),
    x(u, s.important),
    (o = new Response(o.body, { ...o, status: a || o.status, headers: u })),
    o
  );
}
d();
f();
p();
function et() {
  globalThis.__nextOnPagesRoutesIsolation ??= {
    _map: /* @__PURE__ */ new Map(),
    getProxyFor: kt,
  };
}
function kt(t) {
  let e = globalThis.__nextOnPagesRoutesIsolation._map.get(t);
  if (e) return e;
  let a = Nt();
  return globalThis.__nextOnPagesRoutesIsolation._map.set(t, a), a;
}
function Nt() {
  let t = /* @__PURE__ */ new Map();
  return new Proxy(globalThis, {
    get: (e, a) => (t.has(a) ? t.get(a) : Reflect.get(globalThis, a)),
    set: (e, a, s) =>
      Mt.has(a) ? Reflect.set(globalThis, a, s) : (t.set(a, s), true),
  });
}
var Mt = /* @__PURE__ */ new Set([
  "_nextOriginalFetch",
  "fetch",
  "__incrementalCache",
]);
var ms = {
  async fetch(t, e, a) {
    et(), Z();
    let s = await __ALSes_PROMISE__;
    if (!s) {
      let i = new URL(t.url),
        r = await e.ASSETS.fetch(
          `${i.protocol}//${i.host}/cdn-cgi/errors/no-nodejs_compat.html`,
        ),
        o = r.ok
          ? r.body
          : "Error: Could not access built-in Node.js modules. Please make sure that your Cloudflare Pages project has the 'nodejs_compat' compatibility flag set.";
      return new Response(o, { status: 503 });
    }
    let { envAsyncLocalStorage: n, requestContextAsyncLocalStorage: c } = s;
    return n.run(
      { ...e, NODE_ENV: "production", SUSPENSE_CACHE_URL: R },
      async () =>
        c.run({ env: e, ctx: a, cf: t.cf }, async () => {
          if (new URL(t.url).pathname.startsWith("/_next/image"))
            return G(t, {
              buildOutput: m,
              assetsFetcher: e.ASSETS,
              imagesConfig: h.images,
            });
          let r = D(t);
          return Y({ request: r, ctx: a, assetsFetcher: e.ASSETS }, h, m, y);
        }),
    );
  },
};
export { ms as default };
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
//# sourceMappingURL=bundledWorker-0.1485590646695294.mjs.map
