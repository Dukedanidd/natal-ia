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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5CDaniel%5CDesktop%5CPortafolio%5Chacknight%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CDaniel%5CDesktop%5CPortafolio%5Chacknight&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5CDaniel%5CDesktop%5CPortafolio%5Chacknight%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CDaniel%5CDesktop%5CPortafolio%5Chacknight&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Daniel_Desktop_Portafolio_hacknight_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.js */ \"(rsc)/./app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Daniel\\\\Desktop\\\\Portafolio\\\\hacknight\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Daniel_Desktop_Portafolio_hacknight_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNEYW5pZWwlNUNEZXNrdG9wJTVDUG9ydGFmb2xpbyU1Q2hhY2tuaWdodCU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDRGFuaWVsJTVDRGVza3RvcCU1Q1BvcnRhZm9saW8lNUNoYWNrbmlnaHQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQzBDO0FBQ3ZIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxEYW5pZWxcXFxcRGVza3RvcFxcXFxQb3J0YWZvbGlvXFxcXGhhY2tuaWdodFxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxEYW5pZWxcXFxcRGVza3RvcFxcXFxQb3J0YWZvbGlvXFxcXGhhY2tuaWdodFxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5CDaniel%5CDesktop%5CPortafolio%5Chacknight%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CDaniel%5CDesktop%5CPortafolio%5Chacknight&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/next-auth */ \"(rsc)/./libs/next-auth.js\");\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_libs_next_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQUNjO0FBRS9DLE1BQU1FLFVBQVVGLGdEQUFRQSxDQUFDQyx3REFBV0E7QUFFTyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxEYW5pZWxcXERlc2t0b3BcXFBvcnRhZm9saW9cXGhhY2tuaWdodFxcYXBwXFxhcGlcXGF1dGhcXFsuLi5uZXh0YXV0aF1cXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIkAvbGlicy9uZXh0LWF1dGhcIjtcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XHJcblxyXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07XHJcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsImF1dGhPcHRpb25zIiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst config = {\n    // REQUIRED\n    appName: \"Escuelita Starter\",\n    // REQUIRED: a short description of your app for SEO tags (can be overwritten)\n    appDescription: \"Escuelita Starter is a template to start creating your own projects FAST\",\n    // REQUIRED (no https://, not trialing slash at the end, just the naked domain)\n    domainName: \"escuelitamaker.com\",\n    email: {\n        supportEmail: \"escuelitamaker@gmail.com\",\n        noReplyEmail: \"no-reply@escuelitamaker.com\"\n    },\n    socials: {\n        twitter: \"https://twitter.com/escuelitamaker\",\n        youtube: \"https://www.youtube.com/@escuelitamaker\",\n        facebook: \"https://www.facebook.com/escuelitamaker\",\n        instagram: \"https://www.instagram.com/escuelitamaker\",\n        linkedin: \"https://www.linkedin.com/company/escuelitamaker\",\n        tiktok: \"https://www.tiktok.com/@escuelita.maker\",\n        github: \"https://github.com/escuelitamaker\"\n    },\n    auth: {\n        // REQUIRED — the path to log in users. It's use to protect private routes (like /dashboard). It's used in apiClient (/libs/api.js) upon 401 errors from our API\n        loginUrl: \"/auth/signin\",\n        // REQUIRED — the path you want to redirect users after successfull login (i.e. /dashboard, /private). This is normally a private page for users to manage their accounts. It's used in apiClient (/libs/api.js) upon 401 errors from our API & in ButtonSignin.js\n        callbackUrl: \"/dashboard\"\n    },\n    stripe: {\n        // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId\n        plans: [\n            {\n                // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)\n                priceId:  true ? \"price_1Niyy5AxyNprDp7iZIqEyD2h\" : 0,\n                //  REQUIRED - Name of the plan, displayed on the pricing page\n                name: \"Starter\",\n                // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others\n                description: \"Perfect for small projects\",\n                // The price you want to display, the one user will be charged on Stripe.\n                price: 79,\n                // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty\n                priceAnchor: 99,\n                features: [\n                    {\n                        name: \"NextJS boilerplate\"\n                    },\n                    {\n                        name: \"User oauth\"\n                    },\n                    {\n                        name: \"Database\"\n                    },\n                    {\n                        name: \"Emails\"\n                    }\n                ]\n            },\n            {\n                // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true\n                isFeatured: true,\n                priceId:  true ? \"price_1O5KtcAxyNprDp7iftKnrrpw\" : 0,\n                name: \"Advanced\",\n                description: \"You need more power\",\n                price: 99,\n                priceAnchor: 149,\n                features: [\n                    {\n                        name: \"NextJS boilerplate\"\n                    },\n                    {\n                        name: \"User oauth\"\n                    },\n                    {\n                        name: \"Database\"\n                    },\n                    {\n                        name: \"Emails\"\n                    },\n                    {\n                        name: \"1 year of updates\"\n                    },\n                    {\n                        name: \"24/7 support\"\n                    }\n                ]\n            }\n        ]\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9jb25maWcuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFNBQVM7SUFDYixXQUFXO0lBQ1hDLFNBQVM7SUFDVCw4RUFBOEU7SUFDOUVDLGdCQUNFO0lBQ0YsK0VBQStFO0lBQy9FQyxZQUFZO0lBQ1pDLE9BQU87UUFDTEMsY0FBYztRQUNkQyxjQUFjO0lBQ2hCO0lBQ0FDLFNBQVM7UUFDUEMsU0FBUztRQUNUQyxTQUFTO1FBQ1RDLFVBQVU7UUFDVkMsV0FBVztRQUNYQyxVQUFVO1FBQ1ZDLFFBQVE7UUFDUkMsUUFBUTtJQUNWO0lBQ0FDLE1BQU07UUFDSixnS0FBZ0s7UUFDaEtDLFVBQVU7UUFDVixrUUFBa1E7UUFDbFFDLGFBQWE7SUFDZjtJQUNBQyxRQUFRO1FBQ04sK0lBQStJO1FBQy9JQyxPQUFPO1lBQ0w7Z0JBQ0UsbUlBQW1JO2dCQUNuSUMsU0FDRUMsS0FBc0MsR0FDbEMsbUNBQ0EsQ0FBVztnQkFDakIsOERBQThEO2dCQUM5REMsTUFBTTtnQkFDTiwrR0FBK0c7Z0JBQy9HQyxhQUFhO2dCQUNiLHlFQUF5RTtnQkFDekVDLE9BQU87Z0JBQ1Asc0hBQXNIO2dCQUN0SEMsYUFBYTtnQkFDYkMsVUFBVTtvQkFDUjt3QkFDRUosTUFBTTtvQkFDUjtvQkFDQTt3QkFBRUEsTUFBTTtvQkFBYTtvQkFDckI7d0JBQUVBLE1BQU07b0JBQVc7b0JBQ25CO3dCQUFFQSxNQUFNO29CQUFTO2lCQUNsQjtZQUNIO1lBQ0E7Z0JBQ0UsOEhBQThIO2dCQUM5SEssWUFBWTtnQkFDWlAsU0FDRUMsS0FBc0MsR0FDbEMsbUNBQ0EsQ0FBVztnQkFDakJDLE1BQU07Z0JBQ05DLGFBQWE7Z0JBQ2JDLE9BQU87Z0JBQ1BDLGFBQWE7Z0JBQ2JDLFVBQVU7b0JBQ1I7d0JBQ0VKLE1BQU07b0JBQ1I7b0JBQ0E7d0JBQUVBLE1BQU07b0JBQWE7b0JBQ3JCO3dCQUFFQSxNQUFNO29CQUFXO29CQUNuQjt3QkFBRUEsTUFBTTtvQkFBUztvQkFDakI7d0JBQUVBLE1BQU07b0JBQW9CO29CQUM1Qjt3QkFBRUEsTUFBTTtvQkFBZTtpQkFDeEI7WUFDSDtTQUNEO0lBQ0g7QUFDRjtBQUVBLGlFQUFldEIsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxEYW5pZWxcXERlc2t0b3BcXFBvcnRhZm9saW9cXGhhY2tuaWdodFxcY29uZmlnLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbmZpZyA9IHtcclxuICAvLyBSRVFVSVJFRFxyXG4gIGFwcE5hbWU6IFwiRXNjdWVsaXRhIFN0YXJ0ZXJcIixcclxuICAvLyBSRVFVSVJFRDogYSBzaG9ydCBkZXNjcmlwdGlvbiBvZiB5b3VyIGFwcCBmb3IgU0VPIHRhZ3MgKGNhbiBiZSBvdmVyd3JpdHRlbilcclxuICBhcHBEZXNjcmlwdGlvbjpcclxuICAgIFwiRXNjdWVsaXRhIFN0YXJ0ZXIgaXMgYSB0ZW1wbGF0ZSB0byBzdGFydCBjcmVhdGluZyB5b3VyIG93biBwcm9qZWN0cyBGQVNUXCIsXHJcbiAgLy8gUkVRVUlSRUQgKG5vIGh0dHBzOi8vLCBub3QgdHJpYWxpbmcgc2xhc2ggYXQgdGhlIGVuZCwganVzdCB0aGUgbmFrZWQgZG9tYWluKVxyXG4gIGRvbWFpbk5hbWU6IFwiZXNjdWVsaXRhbWFrZXIuY29tXCIsXHJcbiAgZW1haWw6IHtcclxuICAgIHN1cHBvcnRFbWFpbDogXCJlc2N1ZWxpdGFtYWtlckBnbWFpbC5jb21cIixcclxuICAgIG5vUmVwbHlFbWFpbDogXCJuby1yZXBseUBlc2N1ZWxpdGFtYWtlci5jb21cIixcclxuICB9LFxyXG4gIHNvY2lhbHM6IHtcclxuICAgIHR3aXR0ZXI6IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9lc2N1ZWxpdGFtYWtlclwiLFxyXG4gICAgeW91dHViZTogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9AZXNjdWVsaXRhbWFrZXJcIixcclxuICAgIGZhY2Vib29rOiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9lc2N1ZWxpdGFtYWtlclwiLFxyXG4gICAgaW5zdGFncmFtOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZXNjdWVsaXRhbWFrZXJcIixcclxuICAgIGxpbmtlZGluOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L2VzY3VlbGl0YW1ha2VyXCIsXHJcbiAgICB0aWt0b2s6IFwiaHR0cHM6Ly93d3cudGlrdG9rLmNvbS9AZXNjdWVsaXRhLm1ha2VyXCIsXHJcbiAgICBnaXRodWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2VzY3VlbGl0YW1ha2VyXCIsXHJcbiAgfSxcclxuICBhdXRoOiB7XHJcbiAgICAvLyBSRVFVSVJFRCDigJQgdGhlIHBhdGggdG8gbG9nIGluIHVzZXJzLiBJdCdzIHVzZSB0byBwcm90ZWN0IHByaXZhdGUgcm91dGVzIChsaWtlIC9kYXNoYm9hcmQpLiBJdCdzIHVzZWQgaW4gYXBpQ2xpZW50ICgvbGlicy9hcGkuanMpIHVwb24gNDAxIGVycm9ycyBmcm9tIG91ciBBUElcclxuICAgIGxvZ2luVXJsOiBcIi9hdXRoL3NpZ25pblwiLFxyXG4gICAgLy8gUkVRVUlSRUQg4oCUIHRoZSBwYXRoIHlvdSB3YW50IHRvIHJlZGlyZWN0IHVzZXJzIGFmdGVyIHN1Y2Nlc3NmdWxsIGxvZ2luIChpLmUuIC9kYXNoYm9hcmQsIC9wcml2YXRlKS4gVGhpcyBpcyBub3JtYWxseSBhIHByaXZhdGUgcGFnZSBmb3IgdXNlcnMgdG8gbWFuYWdlIHRoZWlyIGFjY291bnRzLiBJdCdzIHVzZWQgaW4gYXBpQ2xpZW50ICgvbGlicy9hcGkuanMpIHVwb24gNDAxIGVycm9ycyBmcm9tIG91ciBBUEkgJiBpbiBCdXR0b25TaWduaW4uanNcclxuICAgIGNhbGxiYWNrVXJsOiBcIi9kYXNoYm9hcmRcIixcclxuICB9LFxyXG4gIHN0cmlwZToge1xyXG4gICAgLy8gQ3JlYXRlIG11bHRpcGxlIHBsYW5zIGluIHlvdXIgU3RyaXBlIGRhc2hib2FyZCwgdGhlbiBhZGQgdGhlbSBoZXJlLiBZb3UgY2FuIGFkZCBhcyBtYW55IHBsYW5zIGFzIHlvdSB3YW50LCBqdXN0IG1ha2Ugc3VyZSB0byBhZGQgdGhlIHByaWNlSWRcclxuICAgIHBsYW5zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICAvLyBSRVFVSVJFRCDigJQgd2UgdXNlIHRoaXMgdG8gZmluZCB0aGUgcGxhbiBpbiB0aGUgd2ViaG9vayAoZm9yIGluc3RhbmNlIGlmIHlvdSB3YW50IHRvIHVwZGF0ZSB0aGUgdXNlcidzIGNyZWRpdHMgYmFzZWQgb24gdGhlIHBsYW4pXHJcbiAgICAgICAgcHJpY2VJZDpcclxuICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCJcclxuICAgICAgICAgICAgPyBcInByaWNlXzFOaXl5NUF4eU5wckRwN2laSXFFeUQyaFwiXHJcbiAgICAgICAgICAgIDogXCJwcmljZV80NTZcIixcclxuICAgICAgICAvLyAgUkVRVUlSRUQgLSBOYW1lIG9mIHRoZSBwbGFuLCBkaXNwbGF5ZWQgb24gdGhlIHByaWNpbmcgcGFnZVxyXG4gICAgICAgIG5hbWU6IFwiU3RhcnRlclwiLFxyXG4gICAgICAgIC8vIEEgZnJpZW5kbHkgZGVzY3JpcHRpb24gb2YgdGhlIHBsYW4sIGRpc3BsYXllZCBvbiB0aGUgcHJpY2luZyBwYWdlLiBUaXA6IGV4cGxhaW4gd2h5IHRoaXMgcGxhbiBhbmQgbm90IG90aGVyc1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlBlcmZlY3QgZm9yIHNtYWxsIHByb2plY3RzXCIsXHJcbiAgICAgICAgLy8gVGhlIHByaWNlIHlvdSB3YW50IHRvIGRpc3BsYXksIHRoZSBvbmUgdXNlciB3aWxsIGJlIGNoYXJnZWQgb24gU3RyaXBlLlxyXG4gICAgICAgIHByaWNlOiA3OSxcclxuICAgICAgICAvLyBJZiB5b3UgaGF2ZSBhbiBhbmNob3IgcHJpY2UgKGkuZS4gJDI5KSB0aGF0IHlvdSB3YW50IHRvIGRpc3BsYXkgY3Jvc3NlZCBvdXQsIHB1dCBpdCBoZXJlLiBPdGhlcndpc2UsIGxlYXZlIGl0IGVtcHR5XHJcbiAgICAgICAgcHJpY2VBbmNob3I6IDk5LFxyXG4gICAgICAgIGZlYXR1cmVzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiTmV4dEpTIGJvaWxlcnBsYXRlXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcIlVzZXIgb2F1dGhcIiB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcIkRhdGFiYXNlXCIgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJFbWFpbHNcIiB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAvLyBUaGlzIHBsYW4gd2lsbCBsb29rIGRpZmZlcmVudCBvbiB0aGUgcHJpY2luZyBwYWdlLCBpdCB3aWxsIGJlIGhpZ2hsaWdodGVkLiBZb3UgY2FuIG9ubHkgaGF2ZSBvbmUgcGxhbiB3aXRoIGlzRmVhdHVyZWQ6IHRydWVcclxuICAgICAgICBpc0ZlYXR1cmVkOiB0cnVlLFxyXG4gICAgICAgIHByaWNlSWQ6XHJcbiAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiXHJcbiAgICAgICAgICAgID8gXCJwcmljZV8xTzVLdGNBeHlOcHJEcDdpZnRLbnJycHdcIlxyXG4gICAgICAgICAgICA6IFwicHJpY2VfNDU2XCIsXHJcbiAgICAgICAgbmFtZTogXCJBZHZhbmNlZFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIllvdSBuZWVkIG1vcmUgcG93ZXJcIixcclxuICAgICAgICBwcmljZTogOTksXHJcbiAgICAgICAgcHJpY2VBbmNob3I6IDE0OSxcclxuICAgICAgICBmZWF0dXJlczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIk5leHRKUyBib2lsZXJwbGF0ZVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJVc2VyIG9hdXRoXCIgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJEYXRhYmFzZVwiIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwiRW1haWxzXCIgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCIxIHllYXIgb2YgdXBkYXRlc1wiIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwiMjQvNyBzdXBwb3J0XCIgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xyXG4iXSwibmFtZXMiOlsiY29uZmlnIiwiYXBwTmFtZSIsImFwcERlc2NyaXB0aW9uIiwiZG9tYWluTmFtZSIsImVtYWlsIiwic3VwcG9ydEVtYWlsIiwibm9SZXBseUVtYWlsIiwic29jaWFscyIsInR3aXR0ZXIiLCJ5b3V0dWJlIiwiZmFjZWJvb2siLCJpbnN0YWdyYW0iLCJsaW5rZWRpbiIsInRpa3RvayIsImdpdGh1YiIsImF1dGgiLCJsb2dpblVybCIsImNhbGxiYWNrVXJsIiwic3RyaXBlIiwicGxhbnMiLCJwcmljZUlkIiwicHJvY2VzcyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwicHJpY2VBbmNob3IiLCJmZWF0dXJlcyIsImlzRmVhdHVyZWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./config.js\n");

/***/ }),

/***/ "(rsc)/./libs/mongo.js":
/*!***********************!*\
  !*** ./libs/mongo.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\n// This lib is use just to connect to the database in next-auth.\n// We don't use it anywhere else in the API routes—we use mongoose.js instead (to be able to use models)\n// See /libs/nextauth.js file.\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (!uri) {\n    console.group(\"⚠️ MONGODB_URI missing from .env\");\n    console.error(\"It's not mandatory but a database is required for Magic Links.\");\n    console.error(\"If you don't need it, remove the code from /libs/next-auth.js (see connectMongo())\");\n    console.groupEnd();\n} else if (true) {\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWJzL21vbmdvLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzQztBQUV0QyxnRUFBZ0U7QUFDaEUsd0dBQXdHO0FBQ3hHLDhCQUE4QjtBQUU5QixNQUFNQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFDbkMsTUFBTUMsVUFBVSxDQUFDO0FBRWpCLElBQUlDO0FBQ0osSUFBSUM7QUFFSixJQUFJLENBQUNOLEtBQUs7SUFDUk8sUUFBUUMsS0FBSyxDQUFDO0lBQ2RELFFBQVFFLEtBQUssQ0FDWDtJQUVGRixRQUFRRSxLQUFLLENBQ1g7SUFFRkYsUUFBUUcsUUFBUTtBQUNsQixPQUFPLElBQUlULElBQXNDLEVBQUU7SUFDakQsSUFBSSxDQUFDVSxPQUFPQyxtQkFBbUIsRUFBRTtRQUMvQlAsU0FBUyxJQUFJTixnREFBV0EsQ0FBQ0MsS0FBS0k7UUFDOUJPLE9BQU9DLG1CQUFtQixHQUFHUCxPQUFPUSxPQUFPO0lBQzdDO0lBQ0FQLGdCQUFnQkssT0FBT0MsbUJBQW1CO0FBQzVDLE9BQU8sRUFHTjtBQUVELGlFQUFlTixhQUFhQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXERhbmllbFxcRGVza3RvcFxcUG9ydGFmb2xpb1xcaGFja25pZ2h0XFxsaWJzXFxtb25nby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcblxyXG4vLyBUaGlzIGxpYiBpcyB1c2UganVzdCB0byBjb25uZWN0IHRvIHRoZSBkYXRhYmFzZSBpbiBuZXh0LWF1dGguXHJcbi8vIFdlIGRvbid0IHVzZSBpdCBhbnl3aGVyZSBlbHNlIGluIHRoZSBBUEkgcm91dGVz4oCUd2UgdXNlIG1vbmdvb3NlLmpzIGluc3RlYWQgKHRvIGJlIGFibGUgdG8gdXNlIG1vZGVscylcclxuLy8gU2VlIC9saWJzL25leHRhdXRoLmpzIGZpbGUuXHJcblxyXG5jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcclxuY29uc3Qgb3B0aW9ucyA9IHt9O1xyXG5cclxubGV0IGNsaWVudDtcclxubGV0IGNsaWVudFByb21pc2U7XHJcblxyXG5pZiAoIXVyaSkge1xyXG4gIGNvbnNvbGUuZ3JvdXAoXCLimqDvuI8gTU9OR09EQl9VUkkgbWlzc2luZyBmcm9tIC5lbnZcIik7XHJcbiAgY29uc29sZS5lcnJvcihcclxuICAgIFwiSXQncyBub3QgbWFuZGF0b3J5IGJ1dCBhIGRhdGFiYXNlIGlzIHJlcXVpcmVkIGZvciBNYWdpYyBMaW5rcy5cIlxyXG4gICk7XHJcbiAgY29uc29sZS5lcnJvcihcclxuICAgIFwiSWYgeW91IGRvbid0IG5lZWQgaXQsIHJlbW92ZSB0aGUgY29kZSBmcm9tIC9saWJzL25leHQtYXV0aC5qcyAoc2VlIGNvbm5lY3RNb25nbygpKVwiXHJcbiAgKTtcclxuICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xyXG4gIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcclxuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xyXG4gICAgZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xyXG4gIH1cclxuICBjbGllbnRQcm9taXNlID0gZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2U7XHJcbn0gZWxzZSB7XHJcbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XHJcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2U7XHJcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsIm9wdGlvbnMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiY29uc29sZSIsImdyb3VwIiwiZXJyb3IiLCJncm91cEVuZCIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./libs/mongo.js\n");

/***/ }),

/***/ "(rsc)/./libs/next-auth.js":
/*!***************************!*\
  !*** ./libs/next-auth.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth/mongodb-adapter */ \"(rsc)/./node_modules/@auth/mongodb-adapter/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/config */ \"(rsc)/./config.js\");\n/* harmony import */ var _mongo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mongo */ \"(rsc)/./libs/mongo.js\");\n\n\n\n\nconst authOptions = {\n    secret: process.env.NEXTAUTH_SECRET,\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET,\n            async profile (profile) {\n                return {\n                    id: profile.sub,\n                    name: profile.given_name ? profile.given_name : profile.name,\n                    email: profile.email,\n                    image: profile.picture,\n                    createdAt: new Date(),\n                    role: \"user\",\n                    lastLogin: new Date()\n                };\n            }\n        })\n    ],\n    // Configure custom signin page\n    pages: {\n        signIn: _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].auth.loginUrl\n    },\n    // MongoDB adapter configuration\n    ..._mongo__WEBPACK_IMPORTED_MODULE_3__[\"default\"] && {\n        adapter: (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_1__.MongoDBAdapter)(_mongo__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\n    },\n    callbacks: {\n        signIn: async ({ user, account })=>{\n            if (account && user) {\n                try {\n                    const User = (await __webpack_require__.e(/*! import() */ \"_rsc_models_User_js\").then(__webpack_require__.bind(__webpack_require__, /*! @/models/User */ \"(rsc)/./models/User.js\"))).default;\n                    await User.findByIdAndUpdate(user.id, {\n                        lastLogin: new Date()\n                    });\n                    user.lastLogin = new Date();\n                } catch (error) {\n                    console.error(\"Error updating lastLogin:\", error);\n                }\n            }\n            return true;\n        },\n        jwt: async ({ token, user, account, profile })=>{\n            if (account && user) {\n                token.role = user.role;\n                token.lastLogin = user.lastLogin;\n            }\n            return token;\n        },\n        session: async ({ session, token })=>{\n            if (session?.user) {\n                session.user.id = token.sub;\n                session.user.role = token.role;\n                session.user.lastLogin = token.lastLogin;\n            }\n            return session;\n        }\n    },\n    session: {\n        strategy: \"jwt\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWJzL25leHQtYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3RDtBQUNEO0FBQ3pCO0FBQ0s7QUFFNUIsTUFBTUksY0FBYztJQUN6QkMsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxlQUFlO0lBQ25DQyxXQUFXO1FBQ1RULHNFQUFjQSxDQUFDO1lBQ2JVLFVBQVVKLFFBQVFDLEdBQUcsQ0FBQ0ksU0FBUztZQUMvQkMsY0FBY04sUUFBUUMsR0FBRyxDQUFDTSxhQUFhO1lBQ3ZDLE1BQU1DLFNBQVFBLE9BQU87Z0JBQ25CLE9BQU87b0JBQ0xDLElBQUlELFFBQVFFLEdBQUc7b0JBQ2ZDLE1BQU1ILFFBQVFJLFVBQVUsR0FBR0osUUFBUUksVUFBVSxHQUFHSixRQUFRRyxJQUFJO29CQUM1REUsT0FBT0wsUUFBUUssS0FBSztvQkFDcEJDLE9BQU9OLFFBQVFPLE9BQU87b0JBQ3RCQyxXQUFXLElBQUlDO29CQUNmQyxNQUFNO29CQUNOQyxXQUFXLElBQUlGO2dCQUNqQjtZQUNGO1FBQ0Y7S0FDRDtJQUNELCtCQUErQjtJQUMvQkcsT0FBTztRQUNMQyxRQUFRekIsK0NBQU1BLENBQUMwQixJQUFJLENBQUNDLFFBQVE7SUFDOUI7SUFFQSxnQ0FBZ0M7SUFDaEMsR0FBSTFCLDhDQUFZQSxJQUFJO1FBQUUyQixTQUFTN0IscUVBQWNBLENBQUNFLDhDQUFZQTtJQUFFLENBQUM7SUFFN0Q0QixXQUFXO1FBQ1RKLFFBQVEsT0FBTyxFQUFFSyxJQUFJLEVBQUVDLE9BQU8sRUFBRTtZQUM5QixJQUFJQSxXQUFXRCxNQUFNO2dCQUNuQixJQUFJO29CQUNGLE1BQU1FLE9BQU8sQ0FBQyxNQUFNLCtKQUFzQixFQUFHQyxPQUFPO29CQUVwRCxNQUFNRCxLQUFLRSxpQkFBaUIsQ0FBQ0osS0FBS2pCLEVBQUUsRUFBRTt3QkFDcENVLFdBQVcsSUFBSUY7b0JBQ2pCO29CQUVBUyxLQUFLUCxTQUFTLEdBQUcsSUFBSUY7Z0JBQ3ZCLEVBQUUsT0FBT2MsT0FBTztvQkFDZEMsUUFBUUQsS0FBSyxDQUFDLDZCQUE2QkE7Z0JBQzdDO1lBQ0Y7WUFDQSxPQUFPO1FBQ1Q7UUFFQUUsS0FBSyxPQUFPLEVBQUVDLEtBQUssRUFBRVIsSUFBSSxFQUFFQyxPQUFPLEVBQUVuQixPQUFPLEVBQUU7WUFDM0MsSUFBSW1CLFdBQVdELE1BQU07Z0JBQ25CUSxNQUFNaEIsSUFBSSxHQUFHUSxLQUFLUixJQUFJO2dCQUN0QmdCLE1BQU1mLFNBQVMsR0FBR08sS0FBS1AsU0FBUztZQUNsQztZQUNBLE9BQU9lO1FBQ1Q7UUFFQUMsU0FBUyxPQUFPLEVBQUVBLE9BQU8sRUFBRUQsS0FBSyxFQUFFO1lBQ2hDLElBQUlDLFNBQVNULE1BQU07Z0JBQ2pCUyxRQUFRVCxJQUFJLENBQUNqQixFQUFFLEdBQUd5QixNQUFNeEIsR0FBRztnQkFDM0J5QixRQUFRVCxJQUFJLENBQUNSLElBQUksR0FBR2dCLE1BQU1oQixJQUFJO2dCQUM5QmlCLFFBQVFULElBQUksQ0FBQ1AsU0FBUyxHQUFHZSxNQUFNZixTQUFTO1lBQzFDO1lBQ0EsT0FBT2dCO1FBQ1Q7SUFDRjtJQUNBQSxTQUFTO1FBQ1BDLFVBQVU7SUFDWjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGFuaWVsXFxEZXNrdG9wXFxQb3J0YWZvbGlvXFxoYWNrbmlnaHRcXGxpYnNcXG5leHQtYXV0aC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XHJcbmltcG9ydCB7IE1vbmdvREJBZGFwdGVyIH0gZnJvbSBcIkBhdXRoL21vbmdvZGItYWRhcHRlclwiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCJAL2NvbmZpZ1wiO1xyXG5pbXBvcnQgY29ubmVjdE1vbmdvIGZyb20gXCIuL21vbmdvXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XHJcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBHb29nbGVQcm92aWRlcih7XHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfSUQsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX1NFQ1JFVCxcclxuICAgICAgYXN5bmMgcHJvZmlsZShwcm9maWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlkOiBwcm9maWxlLnN1YixcclxuICAgICAgICAgIG5hbWU6IHByb2ZpbGUuZ2l2ZW5fbmFtZSA/IHByb2ZpbGUuZ2l2ZW5fbmFtZSA6IHByb2ZpbGUubmFtZSxcclxuICAgICAgICAgIGVtYWlsOiBwcm9maWxlLmVtYWlsLFxyXG4gICAgICAgICAgaW1hZ2U6IHByb2ZpbGUucGljdHVyZSxcclxuICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgICAgIHJvbGU6IFwidXNlclwiLFxyXG4gICAgICAgICAgbGFzdExvZ2luOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIC8vIENvbmZpZ3VyZSBjdXN0b20gc2lnbmluIHBhZ2VcclxuICBwYWdlczoge1xyXG4gICAgc2lnbkluOiBjb25maWcuYXV0aC5sb2dpblVybCxcclxuICB9LFxyXG5cclxuICAvLyBNb25nb0RCIGFkYXB0ZXIgY29uZmlndXJhdGlvblxyXG4gIC4uLihjb25uZWN0TW9uZ28gJiYgeyBhZGFwdGVyOiBNb25nb0RCQWRhcHRlcihjb25uZWN0TW9uZ28pIH0pLFxyXG5cclxuICBjYWxsYmFja3M6IHtcclxuICAgIHNpZ25JbjogYXN5bmMgKHsgdXNlciwgYWNjb3VudCB9KSA9PiB7XHJcbiAgICAgIGlmIChhY2NvdW50ICYmIHVzZXIpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgVXNlciA9IChhd2FpdCBpbXBvcnQoXCJAL21vZGVscy9Vc2VyXCIpKS5kZWZhdWx0O1xyXG5cclxuICAgICAgICAgIGF3YWl0IFVzZXIuZmluZEJ5SWRBbmRVcGRhdGUodXNlci5pZCwge1xyXG4gICAgICAgICAgICBsYXN0TG9naW46IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICB1c2VyLmxhc3RMb2dpbiA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBsYXN0TG9naW46XCIsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIGp3dDogYXN5bmMgKHsgdG9rZW4sIHVzZXIsIGFjY291bnQsIHByb2ZpbGUgfSkgPT4ge1xyXG4gICAgICBpZiAoYWNjb3VudCAmJiB1c2VyKSB7XHJcbiAgICAgICAgdG9rZW4ucm9sZSA9IHVzZXIucm9sZTtcclxuICAgICAgICB0b2tlbi5sYXN0TG9naW4gPSB1c2VyLmxhc3RMb2dpbjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdG9rZW47XHJcbiAgICB9LFxyXG5cclxuICAgIHNlc3Npb246IGFzeW5jICh7IHNlc3Npb24sIHRva2VuIH0pID0+IHtcclxuICAgICAgaWYgKHNlc3Npb24/LnVzZXIpIHtcclxuICAgICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi5zdWI7XHJcbiAgICAgICAgc2Vzc2lvbi51c2VyLnJvbGUgPSB0b2tlbi5yb2xlO1xyXG4gICAgICAgIHNlc3Npb24udXNlci5sYXN0TG9naW4gPSB0b2tlbi5sYXN0TG9naW47XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHNlc3Npb247XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2Vzc2lvbjoge1xyXG4gICAgc3RyYXRlZ3k6IFwiand0XCIsXHJcbiAgfSxcclxufTtcclxuIl0sIm5hbWVzIjpbIkdvb2dsZVByb3ZpZGVyIiwiTW9uZ29EQkFkYXB0ZXIiLCJjb25maWciLCJjb25uZWN0TW9uZ28iLCJhdXRoT3B0aW9ucyIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUQVVUSF9TRUNSRVQiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsIkdPT0dMRV9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9TRUNSRVQiLCJwcm9maWxlIiwiaWQiLCJzdWIiLCJuYW1lIiwiZ2l2ZW5fbmFtZSIsImVtYWlsIiwiaW1hZ2UiLCJwaWN0dXJlIiwiY3JlYXRlZEF0IiwiRGF0ZSIsInJvbGUiLCJsYXN0TG9naW4iLCJwYWdlcyIsInNpZ25JbiIsImF1dGgiLCJsb2dpblVybCIsImFkYXB0ZXIiLCJjYWxsYmFja3MiLCJ1c2VyIiwiYWNjb3VudCIsIlVzZXIiLCJkZWZhdWx0IiwiZmluZEJ5SWRBbmRVcGRhdGUiLCJlcnJvciIsImNvbnNvbGUiLCJqd3QiLCJ0b2tlbiIsInNlc3Npb24iLCJzdHJhdGVneSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./libs/next-auth.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/oidc-token-hash","vendor-chunks/@auth","vendor-chunks/preact"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5CDaniel%5CDesktop%5CPortafolio%5Chacknight%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CDaniel%5CDesktop%5CPortafolio%5Chacknight&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();