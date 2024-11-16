/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FUsers%2Fusuario%2FDocuments%2FGitHub%2Fhacknight%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fusuario%2FDocuments%2FGitHub%2Fhacknight&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FUsers%2Fusuario%2FDocuments%2FGitHub%2Fhacknight%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fusuario%2FDocuments%2FGitHub%2Fhacknight&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_usuario_Documents_GitHub_hacknight_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.js */ \"(rsc)/./app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/Users/usuario/Documents/GitHub/hacknight/app/api/auth/[...nextauth]/route.js\",\n    nextConfigOutput,\n    userland: _Users_usuario_Documents_GitHub_hacknight_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRnVzdWFyaW8lMkZEb2N1bWVudHMlMkZHaXRIdWIlMkZoYWNrbmlnaHQlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGdXN1YXJpbyUyRkRvY3VtZW50cyUyRkdpdEh1YiUyRmhhY2tuaWdodCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDNkI7QUFDMUc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy91c3VhcmlvL0RvY3VtZW50cy9HaXRIdWIvaGFja25pZ2h0L2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy91c3VhcmlvL0RvY3VtZW50cy9HaXRIdWIvaGFja25pZ2h0L2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FUsers%2Fusuario%2FDocuments%2FGitHub%2Fhacknight%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fusuario%2FDocuments%2FGitHub%2Fhacknight&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.js":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/next-auth */ \"(rsc)/./libs/next-auth.js\");\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_libs_next_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQUNjO0FBRS9DLE1BQU1FLFVBQVVGLGdEQUFRQSxDQUFDQyx3REFBV0E7QUFFTyIsInNvdXJjZXMiOlsiL1VzZXJzL3VzdWFyaW8vRG9jdW1lbnRzL0dpdEh1Yi9oYWNrbmlnaHQvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIkAvbGlicy9uZXh0LWF1dGhcIjtcblxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcblxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9O1xuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiYXV0aE9wdGlvbnMiLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst config = {\n    // REQUIRED\n    appName: \"Escuelita Starter\",\n    // REQUIRED: a short description of your app for SEO tags (can be overwritten)\n    appDescription: \"Escuelita Starter is a template to start creating your own projects FAST\",\n    // REQUIRED (no https://, not trialing slash at the end, just the naked domain)\n    domainName: \"escuelitamaker.com\",\n    email: {\n        supportEmail: \"escuelitamaker@gmail.com\",\n        noReplyEmail: \"no-reply@escuelitamaker.com\"\n    },\n    socials: {\n        twitter: \"https://twitter.com/escuelitamaker\",\n        youtube: \"https://www.youtube.com/@escuelitamaker\",\n        facebook: \"https://www.facebook.com/escuelitamaker\",\n        instagram: \"https://www.instagram.com/escuelitamaker\",\n        linkedin: \"https://www.linkedin.com/company/escuelitamaker\",\n        tiktok: \"https://www.tiktok.com/@escuelita.maker\",\n        github: \"https://github.com/escuelitamaker\"\n    },\n    auth: {\n        // REQUIRED — the path to log in users. It's use to protect private routes (like /dashboard). It's used in apiClient (/libs/api.js) upon 401 errors from our API\n        loginUrl: \"/auth/signin\",\n        // REQUIRED — the path you want to redirect users after successfull login (i.e. /dashboard, /private). This is normally a private page for users to manage their accounts. It's used in apiClient (/libs/api.js) upon 401 errors from our API & in ButtonSignin.js\n        callbackUrl: \"/dashboard\"\n    },\n    stripe: {\n        // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId\n        plans: [\n            {\n                // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)\n                priceId:  true ? \"price_1Niyy5AxyNprDp7iZIqEyD2h\" : 0,\n                //  REQUIRED - Name of the plan, displayed on the pricing page\n                name: \"Starter\",\n                // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others\n                description: \"Perfect for small projects\",\n                // The price you want to display, the one user will be charged on Stripe.\n                price: 79,\n                // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty\n                priceAnchor: 99,\n                features: [\n                    {\n                        name: \"NextJS boilerplate\"\n                    },\n                    {\n                        name: \"User oauth\"\n                    },\n                    {\n                        name: \"Database\"\n                    },\n                    {\n                        name: \"Emails\"\n                    }\n                ]\n            },\n            {\n                // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true\n                isFeatured: true,\n                priceId:  true ? \"price_1O5KtcAxyNprDp7iftKnrrpw\" : 0,\n                name: \"Advanced\",\n                description: \"You need more power\",\n                price: 99,\n                priceAnchor: 149,\n                features: [\n                    {\n                        name: \"NextJS boilerplate\"\n                    },\n                    {\n                        name: \"User oauth\"\n                    },\n                    {\n                        name: \"Database\"\n                    },\n                    {\n                        name: \"Emails\"\n                    },\n                    {\n                        name: \"1 year of updates\"\n                    },\n                    {\n                        name: \"24/7 support\"\n                    }\n                ]\n            }\n        ]\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9jb25maWcuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFNBQVM7SUFDYixXQUFXO0lBQ1hDLFNBQVM7SUFDVCw4RUFBOEU7SUFDOUVDLGdCQUNFO0lBQ0YsK0VBQStFO0lBQy9FQyxZQUFZO0lBQ1pDLE9BQU87UUFDTEMsY0FBYztRQUNkQyxjQUFjO0lBQ2hCO0lBQ0FDLFNBQVM7UUFDUEMsU0FBUztRQUNUQyxTQUFTO1FBQ1RDLFVBQVU7UUFDVkMsV0FBVztRQUNYQyxVQUFVO1FBQ1ZDLFFBQVE7UUFDUkMsUUFBUTtJQUNWO0lBQ0FDLE1BQU07UUFDSixnS0FBZ0s7UUFDaEtDLFVBQVU7UUFDVixrUUFBa1E7UUFDbFFDLGFBQWE7SUFDZjtJQUNBQyxRQUFRO1FBQ04sK0lBQStJO1FBQy9JQyxPQUFPO1lBQ0w7Z0JBQ0UsbUlBQW1JO2dCQUNuSUMsU0FDRUMsS0FBc0MsR0FDbEMsbUNBQ0EsQ0FBVztnQkFDakIsOERBQThEO2dCQUM5REMsTUFBTTtnQkFDTiwrR0FBK0c7Z0JBQy9HQyxhQUFhO2dCQUNiLHlFQUF5RTtnQkFDekVDLE9BQU87Z0JBQ1Asc0hBQXNIO2dCQUN0SEMsYUFBYTtnQkFDYkMsVUFBVTtvQkFDUjt3QkFDRUosTUFBTTtvQkFDUjtvQkFDQTt3QkFBRUEsTUFBTTtvQkFBYTtvQkFDckI7d0JBQUVBLE1BQU07b0JBQVc7b0JBQ25CO3dCQUFFQSxNQUFNO29CQUFTO2lCQUNsQjtZQUNIO1lBQ0E7Z0JBQ0UsOEhBQThIO2dCQUM5SEssWUFBWTtnQkFDWlAsU0FDRUMsS0FBc0MsR0FDbEMsbUNBQ0EsQ0FBVztnQkFDakJDLE1BQU07Z0JBQ05DLGFBQWE7Z0JBQ2JDLE9BQU87Z0JBQ1BDLGFBQWE7Z0JBQ2JDLFVBQVU7b0JBQ1I7d0JBQ0VKLE1BQU07b0JBQ1I7b0JBQ0E7d0JBQUVBLE1BQU07b0JBQWE7b0JBQ3JCO3dCQUFFQSxNQUFNO29CQUFXO29CQUNuQjt3QkFBRUEsTUFBTTtvQkFBUztvQkFDakI7d0JBQUVBLE1BQU07b0JBQW9CO29CQUM1Qjt3QkFBRUEsTUFBTTtvQkFBZTtpQkFDeEI7WUFDSDtTQUNEO0lBQ0g7QUFDRjtBQUVBLGlFQUFldEIsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL3VzdWFyaW8vRG9jdW1lbnRzL0dpdEh1Yi9oYWNrbmlnaHQvY29uZmlnLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbmZpZyA9IHtcbiAgLy8gUkVRVUlSRURcbiAgYXBwTmFtZTogXCJFc2N1ZWxpdGEgU3RhcnRlclwiLFxuICAvLyBSRVFVSVJFRDogYSBzaG9ydCBkZXNjcmlwdGlvbiBvZiB5b3VyIGFwcCBmb3IgU0VPIHRhZ3MgKGNhbiBiZSBvdmVyd3JpdHRlbilcbiAgYXBwRGVzY3JpcHRpb246XG4gICAgXCJFc2N1ZWxpdGEgU3RhcnRlciBpcyBhIHRlbXBsYXRlIHRvIHN0YXJ0IGNyZWF0aW5nIHlvdXIgb3duIHByb2plY3RzIEZBU1RcIixcbiAgLy8gUkVRVUlSRUQgKG5vIGh0dHBzOi8vLCBub3QgdHJpYWxpbmcgc2xhc2ggYXQgdGhlIGVuZCwganVzdCB0aGUgbmFrZWQgZG9tYWluKVxuICBkb21haW5OYW1lOiBcImVzY3VlbGl0YW1ha2VyLmNvbVwiLFxuICBlbWFpbDoge1xuICAgIHN1cHBvcnRFbWFpbDogXCJlc2N1ZWxpdGFtYWtlckBnbWFpbC5jb21cIixcbiAgICBub1JlcGx5RW1haWw6IFwibm8tcmVwbHlAZXNjdWVsaXRhbWFrZXIuY29tXCIsXG4gIH0sXG4gIHNvY2lhbHM6IHtcbiAgICB0d2l0dGVyOiBcImh0dHBzOi8vdHdpdHRlci5jb20vZXNjdWVsaXRhbWFrZXJcIixcbiAgICB5b3V0dWJlOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL0Blc2N1ZWxpdGFtYWtlclwiLFxuICAgIGZhY2Vib29rOiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9lc2N1ZWxpdGFtYWtlclwiLFxuICAgIGluc3RhZ3JhbTogXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2VzY3VlbGl0YW1ha2VyXCIsXG4gICAgbGlua2VkaW46IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvZXNjdWVsaXRhbWFrZXJcIixcbiAgICB0aWt0b2s6IFwiaHR0cHM6Ly93d3cudGlrdG9rLmNvbS9AZXNjdWVsaXRhLm1ha2VyXCIsXG4gICAgZ2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9lc2N1ZWxpdGFtYWtlclwiLFxuICB9LFxuICBhdXRoOiB7XG4gICAgLy8gUkVRVUlSRUQg4oCUIHRoZSBwYXRoIHRvIGxvZyBpbiB1c2Vycy4gSXQncyB1c2UgdG8gcHJvdGVjdCBwcml2YXRlIHJvdXRlcyAobGlrZSAvZGFzaGJvYXJkKS4gSXQncyB1c2VkIGluIGFwaUNsaWVudCAoL2xpYnMvYXBpLmpzKSB1cG9uIDQwMSBlcnJvcnMgZnJvbSBvdXIgQVBJXG4gICAgbG9naW5Vcmw6IFwiL2F1dGgvc2lnbmluXCIsXG4gICAgLy8gUkVRVUlSRUQg4oCUIHRoZSBwYXRoIHlvdSB3YW50IHRvIHJlZGlyZWN0IHVzZXJzIGFmdGVyIHN1Y2Nlc3NmdWxsIGxvZ2luIChpLmUuIC9kYXNoYm9hcmQsIC9wcml2YXRlKS4gVGhpcyBpcyBub3JtYWxseSBhIHByaXZhdGUgcGFnZSBmb3IgdXNlcnMgdG8gbWFuYWdlIHRoZWlyIGFjY291bnRzLiBJdCdzIHVzZWQgaW4gYXBpQ2xpZW50ICgvbGlicy9hcGkuanMpIHVwb24gNDAxIGVycm9ycyBmcm9tIG91ciBBUEkgJiBpbiBCdXR0b25TaWduaW4uanNcbiAgICBjYWxsYmFja1VybDogXCIvZGFzaGJvYXJkXCIsXG4gIH0sXG4gIHN0cmlwZToge1xuICAgIC8vIENyZWF0ZSBtdWx0aXBsZSBwbGFucyBpbiB5b3VyIFN0cmlwZSBkYXNoYm9hcmQsIHRoZW4gYWRkIHRoZW0gaGVyZS4gWW91IGNhbiBhZGQgYXMgbWFueSBwbGFucyBhcyB5b3Ugd2FudCwganVzdCBtYWtlIHN1cmUgdG8gYWRkIHRoZSBwcmljZUlkXG4gICAgcGxhbnM6IFtcbiAgICAgIHtcbiAgICAgICAgLy8gUkVRVUlSRUQg4oCUIHdlIHVzZSB0aGlzIHRvIGZpbmQgdGhlIHBsYW4gaW4gdGhlIHdlYmhvb2sgKGZvciBpbnN0YW5jZSBpZiB5b3Ugd2FudCB0byB1cGRhdGUgdGhlIHVzZXIncyBjcmVkaXRzIGJhc2VkIG9uIHRoZSBwbGFuKVxuICAgICAgICBwcmljZUlkOlxuICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCJcbiAgICAgICAgICAgID8gXCJwcmljZV8xTml5eTVBeHlOcHJEcDdpWklxRXlEMmhcIlxuICAgICAgICAgICAgOiBcInByaWNlXzQ1NlwiLFxuICAgICAgICAvLyAgUkVRVUlSRUQgLSBOYW1lIG9mIHRoZSBwbGFuLCBkaXNwbGF5ZWQgb24gdGhlIHByaWNpbmcgcGFnZVxuICAgICAgICBuYW1lOiBcIlN0YXJ0ZXJcIixcbiAgICAgICAgLy8gQSBmcmllbmRseSBkZXNjcmlwdGlvbiBvZiB0aGUgcGxhbiwgZGlzcGxheWVkIG9uIHRoZSBwcmljaW5nIHBhZ2UuIFRpcDogZXhwbGFpbiB3aHkgdGhpcyBwbGFuIGFuZCBub3Qgb3RoZXJzXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlBlcmZlY3QgZm9yIHNtYWxsIHByb2plY3RzXCIsXG4gICAgICAgIC8vIFRoZSBwcmljZSB5b3Ugd2FudCB0byBkaXNwbGF5LCB0aGUgb25lIHVzZXIgd2lsbCBiZSBjaGFyZ2VkIG9uIFN0cmlwZS5cbiAgICAgICAgcHJpY2U6IDc5LFxuICAgICAgICAvLyBJZiB5b3UgaGF2ZSBhbiBhbmNob3IgcHJpY2UgKGkuZS4gJDI5KSB0aGF0IHlvdSB3YW50IHRvIGRpc3BsYXkgY3Jvc3NlZCBvdXQsIHB1dCBpdCBoZXJlLiBPdGhlcndpc2UsIGxlYXZlIGl0IGVtcHR5XG4gICAgICAgIHByaWNlQW5jaG9yOiA5OSxcbiAgICAgICAgZmVhdHVyZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIk5leHRKUyBib2lsZXJwbGF0ZVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIlVzZXIgb2F1dGhcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJEYXRhYmFzZVwiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIkVtYWlsc1wiIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBUaGlzIHBsYW4gd2lsbCBsb29rIGRpZmZlcmVudCBvbiB0aGUgcHJpY2luZyBwYWdlLCBpdCB3aWxsIGJlIGhpZ2hsaWdodGVkLiBZb3UgY2FuIG9ubHkgaGF2ZSBvbmUgcGxhbiB3aXRoIGlzRmVhdHVyZWQ6IHRydWVcbiAgICAgICAgaXNGZWF0dXJlZDogdHJ1ZSxcbiAgICAgICAgcHJpY2VJZDpcbiAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiXG4gICAgICAgICAgICA/IFwicHJpY2VfMU81S3RjQXh5TnByRHA3aWZ0S25ycnB3XCJcbiAgICAgICAgICAgIDogXCJwcmljZV80NTZcIixcbiAgICAgICAgbmFtZTogXCJBZHZhbmNlZFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJZb3UgbmVlZCBtb3JlIHBvd2VyXCIsXG4gICAgICAgIHByaWNlOiA5OSxcbiAgICAgICAgcHJpY2VBbmNob3I6IDE0OSxcbiAgICAgICAgZmVhdHVyZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIk5leHRKUyBib2lsZXJwbGF0ZVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIlVzZXIgb2F1dGhcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJEYXRhYmFzZVwiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIkVtYWlsc1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIjEgeWVhciBvZiB1cGRhdGVzXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiMjQvNyBzdXBwb3J0XCIgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcbiJdLCJuYW1lcyI6WyJjb25maWciLCJhcHBOYW1lIiwiYXBwRGVzY3JpcHRpb24iLCJkb21haW5OYW1lIiwiZW1haWwiLCJzdXBwb3J0RW1haWwiLCJub1JlcGx5RW1haWwiLCJzb2NpYWxzIiwidHdpdHRlciIsInlvdXR1YmUiLCJmYWNlYm9vayIsImluc3RhZ3JhbSIsImxpbmtlZGluIiwidGlrdG9rIiwiZ2l0aHViIiwiYXV0aCIsImxvZ2luVXJsIiwiY2FsbGJhY2tVcmwiLCJzdHJpcGUiLCJwbGFucyIsInByaWNlSWQiLCJwcm9jZXNzIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJwcmljZUFuY2hvciIsImZlYXR1cmVzIiwiaXNGZWF0dXJlZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./config.js\n");

/***/ }),

/***/ "(rsc)/./libs/mongo.js":
/*!***********************!*\
  !*** ./libs/mongo.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\n// This lib is use just to connect to the database in next-auth.\n// We don't use it anywhere else in the API routes—we use mongoose.js instead (to be able to use models)\n// See /libs/nextauth.js file.\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (!uri) {\n    console.group(\"⚠️ MONGODB_URI missing from .env\");\n    console.error(\"It's not mandatory but a database is required for Magic Links.\");\n    console.error(\"If you don't need it, remove the code from /libs/next-auth.js (see connectMongo())\");\n    console.groupEnd();\n} else if (true) {\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWJzL21vbmdvLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzQztBQUV0QyxnRUFBZ0U7QUFDaEUsd0dBQXdHO0FBQ3hHLDhCQUE4QjtBQUU5QixNQUFNQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFDbkMsTUFBTUMsVUFBVSxDQUFDO0FBRWpCLElBQUlDO0FBQ0osSUFBSUM7QUFFSixJQUFJLENBQUNOLEtBQUs7SUFDUk8sUUFBUUMsS0FBSyxDQUFDO0lBQ2RELFFBQVFFLEtBQUssQ0FDWDtJQUVGRixRQUFRRSxLQUFLLENBQ1g7SUFFRkYsUUFBUUcsUUFBUTtBQUNsQixPQUFPLElBQUlULElBQXNDLEVBQUU7SUFDakQsSUFBSSxDQUFDVSxPQUFPQyxtQkFBbUIsRUFBRTtRQUMvQlAsU0FBUyxJQUFJTixnREFBV0EsQ0FBQ0MsS0FBS0k7UUFDOUJPLE9BQU9DLG1CQUFtQixHQUFHUCxPQUFPUSxPQUFPO0lBQzdDO0lBQ0FQLGdCQUFnQkssT0FBT0MsbUJBQW1CO0FBQzVDLE9BQU8sRUFHTjtBQUVELGlFQUFlTixhQUFhQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvdXN1YXJpby9Eb2N1bWVudHMvR2l0SHViL2hhY2tuaWdodC9saWJzL21vbmdvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuLy8gVGhpcyBsaWIgaXMgdXNlIGp1c3QgdG8gY29ubmVjdCB0byB0aGUgZGF0YWJhc2UgaW4gbmV4dC1hdXRoLlxuLy8gV2UgZG9uJ3QgdXNlIGl0IGFueXdoZXJlIGVsc2UgaW4gdGhlIEFQSSByb3V0ZXPigJR3ZSB1c2UgbW9uZ29vc2UuanMgaW5zdGVhZCAodG8gYmUgYWJsZSB0byB1c2UgbW9kZWxzKVxuLy8gU2VlIC9saWJzL25leHRhdXRoLmpzIGZpbGUuXG5cbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xuY29uc3Qgb3B0aW9ucyA9IHt9O1xuXG5sZXQgY2xpZW50O1xubGV0IGNsaWVudFByb21pc2U7XG5cbmlmICghdXJpKSB7XG4gIGNvbnNvbGUuZ3JvdXAoXCLimqDvuI8gTU9OR09EQl9VUkkgbWlzc2luZyBmcm9tIC5lbnZcIik7XG4gIGNvbnNvbGUuZXJyb3IoXG4gICAgXCJJdCdzIG5vdCBtYW5kYXRvcnkgYnV0IGEgZGF0YWJhc2UgaXMgcmVxdWlyZWQgZm9yIE1hZ2ljIExpbmtzLlwiXG4gICk7XG4gIGNvbnNvbGUuZXJyb3IoXG4gICAgXCJJZiB5b3UgZG9uJ3QgbmVlZCBpdCwgcmVtb3ZlIHRoZSBjb2RlIGZyb20gL2xpYnMvbmV4dC1hdXRoLmpzIChzZWUgY29ubmVjdE1vbmdvKCkpXCJcbiAgKTtcbiAgY29uc29sZS5ncm91cEVuZCgpO1xufSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcbiAgICBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XG4gIH1cbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlO1xufSBlbHNlIHtcbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XG4gIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlO1xuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwidXJpIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwib3B0aW9ucyIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJjb25zb2xlIiwiZ3JvdXAiLCJlcnJvciIsImdyb3VwRW5kIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./libs/mongo.js\n");

/***/ }),

/***/ "(rsc)/./libs/next-auth.js":
/*!***************************!*\
  !*** ./libs/next-auth.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth/mongodb-adapter */ \"(rsc)/./node_modules/@auth/mongodb-adapter/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/config */ \"(rsc)/./config.js\");\n/* harmony import */ var _mongo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mongo */ \"(rsc)/./libs/mongo.js\");\n\n\n\n\nconst authOptions = {\n    secret: process.env.NEXTAUTH_SECRET,\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET,\n            async profile (profile) {\n                return {\n                    id: profile.sub,\n                    name: profile.given_name ? profile.given_name : profile.name,\n                    email: profile.email,\n                    image: profile.picture,\n                    createdAt: new Date(),\n                    role: \"user\",\n                    lastLogin: new Date()\n                };\n            }\n        })\n    ],\n    // Configure custom signin page\n    pages: {\n        signIn: _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].auth.loginUrl\n    },\n    // MongoDB adapter configuration\n    ..._mongo__WEBPACK_IMPORTED_MODULE_3__[\"default\"] && {\n        adapter: (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_1__.MongoDBAdapter)(_mongo__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\n    },\n    callbacks: {\n        signIn: async ({ user, account })=>{\n            if (account && user) {\n                try {\n                    const User = (await __webpack_require__.e(/*! import() */ \"_rsc_models_User_js\").then(__webpack_require__.bind(__webpack_require__, /*! @/models/User */ \"(rsc)/./models/User.js\"))).default;\n                    await User.findByIdAndUpdate(user.id, {\n                        lastLogin: new Date()\n                    });\n                    user.lastLogin = new Date();\n                } catch (error) {\n                    console.error(\"Error updating lastLogin:\", error);\n                }\n            }\n            return true;\n        },\n        jwt: async ({ token, user, account, profile })=>{\n            if (account && user) {\n                token.role = user.role;\n                token.lastLogin = user.lastLogin;\n            }\n            return token;\n        },\n        session: async ({ session, token })=>{\n            if (session?.user) {\n                session.user.id = token.sub;\n                session.user.role = token.role;\n                session.user.lastLogin = token.lastLogin;\n            }\n            return session;\n        }\n    },\n    session: {\n        strategy: \"jwt\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWJzL25leHQtYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3RDtBQUNEO0FBQ3pCO0FBQ0s7QUFFNUIsTUFBTUksY0FBYztJQUN6QkMsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxlQUFlO0lBQ25DQyxXQUFXO1FBQ1RULHNFQUFjQSxDQUFDO1lBQ2JVLFVBQVVKLFFBQVFDLEdBQUcsQ0FBQ0ksU0FBUztZQUMvQkMsY0FBY04sUUFBUUMsR0FBRyxDQUFDTSxhQUFhO1lBQ3ZDLE1BQU1DLFNBQVFBLE9BQU87Z0JBQ25CLE9BQU87b0JBQ0xDLElBQUlELFFBQVFFLEdBQUc7b0JBQ2ZDLE1BQU1ILFFBQVFJLFVBQVUsR0FBR0osUUFBUUksVUFBVSxHQUFHSixRQUFRRyxJQUFJO29CQUM1REUsT0FBT0wsUUFBUUssS0FBSztvQkFDcEJDLE9BQU9OLFFBQVFPLE9BQU87b0JBQ3RCQyxXQUFXLElBQUlDO29CQUNmQyxNQUFNO29CQUNOQyxXQUFXLElBQUlGO2dCQUNqQjtZQUNGO1FBQ0Y7S0FDRDtJQUNELCtCQUErQjtJQUMvQkcsT0FBTztRQUNMQyxRQUFRekIsK0NBQU1BLENBQUMwQixJQUFJLENBQUNDLFFBQVE7SUFDOUI7SUFFQSxnQ0FBZ0M7SUFDaEMsR0FBSTFCLDhDQUFZQSxJQUFJO1FBQUUyQixTQUFTN0IscUVBQWNBLENBQUNFLDhDQUFZQTtJQUFFLENBQUM7SUFFN0Q0QixXQUFXO1FBQ1RKLFFBQVEsT0FBTyxFQUFFSyxJQUFJLEVBQUVDLE9BQU8sRUFBRTtZQUM5QixJQUFJQSxXQUFXRCxNQUFNO2dCQUNuQixJQUFJO29CQUNGLE1BQU1FLE9BQU8sQ0FBQyxNQUFNLCtKQUFzQixFQUFHQyxPQUFPO29CQUVwRCxNQUFNRCxLQUFLRSxpQkFBaUIsQ0FBQ0osS0FBS2pCLEVBQUUsRUFBRTt3QkFDcENVLFdBQVcsSUFBSUY7b0JBQ2pCO29CQUVBUyxLQUFLUCxTQUFTLEdBQUcsSUFBSUY7Z0JBQ3ZCLEVBQUUsT0FBT2MsT0FBTztvQkFDZEMsUUFBUUQsS0FBSyxDQUFDLDZCQUE2QkE7Z0JBQzdDO1lBQ0Y7WUFDQSxPQUFPO1FBQ1Q7UUFFQUUsS0FBSyxPQUFPLEVBQUVDLEtBQUssRUFBRVIsSUFBSSxFQUFFQyxPQUFPLEVBQUVuQixPQUFPLEVBQUU7WUFDM0MsSUFBSW1CLFdBQVdELE1BQU07Z0JBQ25CUSxNQUFNaEIsSUFBSSxHQUFHUSxLQUFLUixJQUFJO2dCQUN0QmdCLE1BQU1mLFNBQVMsR0FBR08sS0FBS1AsU0FBUztZQUNsQztZQUNBLE9BQU9lO1FBQ1Q7UUFFQUMsU0FBUyxPQUFPLEVBQUVBLE9BQU8sRUFBRUQsS0FBSyxFQUFFO1lBQ2hDLElBQUlDLFNBQVNULE1BQU07Z0JBQ2pCUyxRQUFRVCxJQUFJLENBQUNqQixFQUFFLEdBQUd5QixNQUFNeEIsR0FBRztnQkFDM0J5QixRQUFRVCxJQUFJLENBQUNSLElBQUksR0FBR2dCLE1BQU1oQixJQUFJO2dCQUM5QmlCLFFBQVFULElBQUksQ0FBQ1AsU0FBUyxHQUFHZSxNQUFNZixTQUFTO1lBQzFDO1lBQ0EsT0FBT2dCO1FBQ1Q7SUFDRjtJQUNBQSxTQUFTO1FBQ1BDLFVBQVU7SUFDWjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIi9Vc2Vycy91c3VhcmlvL0RvY3VtZW50cy9HaXRIdWIvaGFja25pZ2h0L2xpYnMvbmV4dC1hdXRoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcbmltcG9ydCB7IE1vbmdvREJBZGFwdGVyIH0gZnJvbSBcIkBhdXRoL21vbmdvZGItYWRhcHRlclwiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiQC9jb25maWdcIjtcbmltcG9ydCBjb25uZWN0TW9uZ28gZnJvbSBcIi4vbW9uZ29cIjtcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcbiAgcHJvdmlkZXJzOiBbXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX1NFQ1JFVCxcbiAgICAgIGFzeW5jIHByb2ZpbGUocHJvZmlsZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiBwcm9maWxlLnN1YixcbiAgICAgICAgICBuYW1lOiBwcm9maWxlLmdpdmVuX25hbWUgPyBwcm9maWxlLmdpdmVuX25hbWUgOiBwcm9maWxlLm5hbWUsXG4gICAgICAgICAgZW1haWw6IHByb2ZpbGUuZW1haWwsXG4gICAgICAgICAgaW1hZ2U6IHByb2ZpbGUucGljdHVyZSxcbiAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICAgICAgcm9sZTogXCJ1c2VyXCIsXG4gICAgICAgICAgbGFzdExvZ2luOiBuZXcgRGF0ZSgpLFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgLy8gQ29uZmlndXJlIGN1c3RvbSBzaWduaW4gcGFnZVxuICBwYWdlczoge1xuICAgIHNpZ25JbjogY29uZmlnLmF1dGgubG9naW5VcmwsXG4gIH0sXG5cbiAgLy8gTW9uZ29EQiBhZGFwdGVyIGNvbmZpZ3VyYXRpb25cbiAgLi4uKGNvbm5lY3RNb25nbyAmJiB7IGFkYXB0ZXI6IE1vbmdvREJBZGFwdGVyKGNvbm5lY3RNb25nbykgfSksXG5cbiAgY2FsbGJhY2tzOiB7XG4gICAgc2lnbkluOiBhc3luYyAoeyB1c2VyLCBhY2NvdW50IH0pID0+IHtcbiAgICAgIGlmIChhY2NvdW50ICYmIHVzZXIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBVc2VyID0gKGF3YWl0IGltcG9ydChcIkAvbW9kZWxzL1VzZXJcIikpLmRlZmF1bHQ7XG5cbiAgICAgICAgICBhd2FpdCBVc2VyLmZpbmRCeUlkQW5kVXBkYXRlKHVzZXIuaWQsIHtcbiAgICAgICAgICAgIGxhc3RMb2dpbjogbmV3IERhdGUoKSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHVzZXIubGFzdExvZ2luID0gbmV3IERhdGUoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgbGFzdExvZ2luOlwiLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG5cbiAgICBqd3Q6IGFzeW5jICh7IHRva2VuLCB1c2VyLCBhY2NvdW50LCBwcm9maWxlIH0pID0+IHtcbiAgICAgIGlmIChhY2NvdW50ICYmIHVzZXIpIHtcbiAgICAgICAgdG9rZW4ucm9sZSA9IHVzZXIucm9sZTtcbiAgICAgICAgdG9rZW4ubGFzdExvZ2luID0gdXNlci5sYXN0TG9naW47XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcblxuICAgIHNlc3Npb246IGFzeW5jICh7IHNlc3Npb24sIHRva2VuIH0pID0+IHtcbiAgICAgIGlmIChzZXNzaW9uPy51c2VyKSB7XG4gICAgICAgIHNlc3Npb24udXNlci5pZCA9IHRva2VuLnN1YjtcbiAgICAgICAgc2Vzc2lvbi51c2VyLnJvbGUgPSB0b2tlbi5yb2xlO1xuICAgICAgICBzZXNzaW9uLnVzZXIubGFzdExvZ2luID0gdG9rZW4ubGFzdExvZ2luO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgfSxcbiAgc2Vzc2lvbjoge1xuICAgIHN0cmF0ZWd5OiBcImp3dFwiLFxuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJHb29nbGVQcm92aWRlciIsIk1vbmdvREJBZGFwdGVyIiwiY29uZmlnIiwiY29ubmVjdE1vbmdvIiwiYXV0aE9wdGlvbnMiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJHT09HTEVfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfU0VDUkVUIiwicHJvZmlsZSIsImlkIiwic3ViIiwibmFtZSIsImdpdmVuX25hbWUiLCJlbWFpbCIsImltYWdlIiwicGljdHVyZSIsImNyZWF0ZWRBdCIsIkRhdGUiLCJyb2xlIiwibGFzdExvZ2luIiwicGFnZXMiLCJzaWduSW4iLCJhdXRoIiwibG9naW5VcmwiLCJhZGFwdGVyIiwiY2FsbGJhY2tzIiwidXNlciIsImFjY291bnQiLCJVc2VyIiwiZGVmYXVsdCIsImZpbmRCeUlkQW5kVXBkYXRlIiwiZXJyb3IiLCJjb25zb2xlIiwiand0IiwidG9rZW4iLCJzZXNzaW9uIiwic3RyYXRlZ3kiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./libs/next-auth.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/oidc-token-hash","vendor-chunks/@auth","vendor-chunks/preact"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FUsers%2Fusuario%2FDocuments%2FGitHub%2Fhacknight%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fusuario%2FDocuments%2FGitHub%2Fhacknight&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();