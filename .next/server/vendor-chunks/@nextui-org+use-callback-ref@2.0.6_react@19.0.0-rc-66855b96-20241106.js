"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@nextui-org+use-callback-ref@2.0.6_react@19.0.0-rc-66855b96-20241106";
exports.ids = ["vendor-chunks/@nextui-org+use-callback-ref@2.0.6_react@19.0.0-rc-66855b96-20241106"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@nextui-org+use-callback-ref@2.0.6_react@19.0.0-rc-66855b96-20241106/node_modules/@nextui-org/use-callback-ref/dist/index.mjs":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@nextui-org+use-callback-ref@2.0.6_react@19.0.0-rc-66855b96-20241106/node_modules/@nextui-org/use-callback-ref/dist/index.mjs ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useCallbackRef: () => (/* binding */ useCallbackRef)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19_sapas4glnvlv4fivlryvslai7a/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _nextui_org_use_safe_layout_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextui-org/use-safe-layout-effect */ \"(ssr)/./node_modules/.pnpm/@nextui-org+use-safe-layout-effect@2.0.6_react@19.0.0-rc-66855b96-20241106/node_modules/@nextui-org/use-safe-layout-effect/dist/index.mjs\");\n// src/index.ts\n\n\nfunction useCallbackRef(fn, deps = []) {\n  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(fn);\n  (0,_nextui_org_use_safe_layout_effect__WEBPACK_IMPORTED_MODULE_1__.useSafeLayoutEffect)(() => {\n    ref.current = fn;\n  });\n  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((...args) => {\n    var _a;\n    return (_a = ref.current) == null ? void 0 : _a.call(ref, ...args);\n  }, deps);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQG5leHR1aS1vcmcrdXNlLWNhbGxiYWNrLXJlZkAyLjAuNl9yZWFjdEAxOS4wLjAtcmMtNjY4NTViOTYtMjAyNDExMDYvbm9kZV9tb2R1bGVzL0BuZXh0dWktb3JnL3VzZS1jYWxsYmFjay1yZWYvZGlzdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDNEM7QUFDNkI7QUFDekU7QUFDQSxjQUFjLDZDQUFNO0FBQ3BCLEVBQUUsdUZBQW1CO0FBQ3JCO0FBQ0EsR0FBRztBQUNILFNBQVMsa0RBQVc7QUFDcEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUdFIiwic291cmNlcyI6WyIvVXNlcnMvYWJoaW5hbmRhbi9Eb3dubG9hZHMva29iaWwtd2Vic2l0ZS9ub2RlX21vZHVsZXMvLnBucG0vQG5leHR1aS1vcmcrdXNlLWNhbGxiYWNrLXJlZkAyLjAuNl9yZWFjdEAxOS4wLjAtcmMtNjY4NTViOTYtMjAyNDExMDYvbm9kZV9tb2R1bGVzL0BuZXh0dWktb3JnL3VzZS1jYWxsYmFjay1yZWYvZGlzdC9pbmRleC5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2luZGV4LnRzXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTYWZlTGF5b3V0RWZmZWN0IH0gZnJvbSBcIkBuZXh0dWktb3JnL3VzZS1zYWZlLWxheW91dC1lZmZlY3RcIjtcbmZ1bmN0aW9uIHVzZUNhbGxiYWNrUmVmKGZuLCBkZXBzID0gW10pIHtcbiAgY29uc3QgcmVmID0gdXNlUmVmKGZuKTtcbiAgdXNlU2FmZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgcmVmLmN1cnJlbnQgPSBmbjtcbiAgfSk7XG4gIHJldHVybiB1c2VDYWxsYmFjaygoLi4uYXJncykgPT4ge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gKF9hID0gcmVmLmN1cnJlbnQpID09IG51bGwgPyB2b2lkIDAgOiBfYS5jYWxsKHJlZiwgLi4uYXJncyk7XG4gIH0sIGRlcHMpO1xufVxuZXhwb3J0IHtcbiAgdXNlQ2FsbGJhY2tSZWZcbn07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@nextui-org+use-callback-ref@2.0.6_react@19.0.0-rc-66855b96-20241106/node_modules/@nextui-org/use-callback-ref/dist/index.mjs\n");

/***/ })

};
;