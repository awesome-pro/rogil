"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@nextui-org+use-is-mounted@2.0.6_react@19.0.0-rc-66855b96-20241106";
exports.ids = ["vendor-chunks/@nextui-org+use-is-mounted@2.0.6_react@19.0.0-rc-66855b96-20241106"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@nextui-org+use-is-mounted@2.0.6_react@19.0.0-rc-66855b96-20241106/node_modules/@nextui-org/use-is-mounted/dist/index.mjs":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@nextui-org+use-is-mounted@2.0.6_react@19.0.0-rc-66855b96-20241106/node_modules/@nextui-org/use-is-mounted/dist/index.mjs ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useIsMounted: () => (/* binding */ useIsMounted)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@15.0.3_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96-20241106__react@19_sapas4glnvlv4fivlryvslai7a/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js\");\n// src/index.ts\n\nfunction useIsMounted(props = {}) {\n  const { rerender = false, delay = 0 } = props;\n  const isMountedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);\n  const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    isMountedRef.current = true;\n    let timer = null;\n    if (rerender) {\n      if (delay > 0) {\n        timer = setTimeout(() => {\n          setIsMounted(true);\n        }, delay);\n      } else {\n        setIsMounted(true);\n      }\n    }\n    return () => {\n      isMountedRef.current = false;\n      if (rerender) {\n        setIsMounted(false);\n      }\n      if (timer) {\n        clearTimeout(timer);\n      }\n    };\n  }, [rerender]);\n  return [(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => isMountedRef.current, []), isMounted];\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQG5leHR1aS1vcmcrdXNlLWlzLW1vdW50ZWRAMi4wLjZfcmVhY3RAMTkuMC4wLXJjLTY2ODU1Yjk2LTIwMjQxMTA2L25vZGVfbW9kdWxlcy9AbmV4dHVpLW9yZy91c2UtaXMtbW91bnRlZC9kaXN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ2lFO0FBQ2pFLGdDQUFnQztBQUNoQyxVQUFVLDhCQUE4QjtBQUN4Qyx1QkFBdUIsNkNBQU07QUFDN0Isb0NBQW9DLCtDQUFRO0FBQzVDLEVBQUUsZ0RBQVM7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxVQUFVLGtEQUFXO0FBQ3JCO0FBR0UiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmhpbmFuZGFuL0Rvd25sb2Fkcy9rb2JpbC13ZWJzaXRlL25vZGVfbW9kdWxlcy8ucG5wbS9AbmV4dHVpLW9yZyt1c2UtaXMtbW91bnRlZEAyLjAuNl9yZWFjdEAxOS4wLjAtcmMtNjY4NTViOTYtMjAyNDExMDYvbm9kZV9tb2R1bGVzL0BuZXh0dWktb3JnL3VzZS1pcy1tb3VudGVkL2Rpc3QvaW5kZXgubWpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9pbmRleC50c1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuZnVuY3Rpb24gdXNlSXNNb3VudGVkKHByb3BzID0ge30pIHtcbiAgY29uc3QgeyByZXJlbmRlciA9IGZhbHNlLCBkZWxheSA9IDAgfSA9IHByb3BzO1xuICBjb25zdCBpc01vdW50ZWRSZWYgPSB1c2VSZWYoZmFsc2UpO1xuICBjb25zdCBbaXNNb3VudGVkLCBzZXRJc01vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlzTW91bnRlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICBsZXQgdGltZXIgPSBudWxsO1xuICAgIGlmIChyZXJlbmRlcikge1xuICAgICAgaWYgKGRlbGF5ID4gMCkge1xuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNldElzTW91bnRlZCh0cnVlKTtcbiAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0SXNNb3VudGVkKHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaXNNb3VudGVkUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIGlmIChyZXJlbmRlcikge1xuICAgICAgICBzZXRJc01vdW50ZWQoZmFsc2UpO1xuICAgICAgfVxuICAgICAgaWYgKHRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW3JlcmVuZGVyXSk7XG4gIHJldHVybiBbdXNlQ2FsbGJhY2soKCkgPT4gaXNNb3VudGVkUmVmLmN1cnJlbnQsIFtdKSwgaXNNb3VudGVkXTtcbn1cbmV4cG9ydCB7XG4gIHVzZUlzTW91bnRlZFxufTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@nextui-org+use-is-mounted@2.0.6_react@19.0.0-rc-66855b96-20241106/node_modules/@nextui-org/use-is-mounted/dist/index.mjs\n");

/***/ })

};
;