"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pages/page5/page",{

/***/ "(app-pages-browser)/./app/pages/page5/page.jsx":
/*!**********************************!*\
  !*** ./app/pages/page5/page.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst page5 = ()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (currentStep === 5) {\n            // Aquí despachamos la acción para resetear la información personal\n            dispatch(resetPersonalInfo());\n            dispatch(resetPlans());\n        }\n    }, [\n        currentStep,\n        dispatch\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[343px] h-[475px] bg-white pt-10 px-5  flex flex-col space-y-5 rounded-[10px] text-black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                src: \"/media/Check.svg\",\n                width: 56,\n                height: 56,\n                alt: \"Picture of the author\",\n                className: \"mx-auto\"\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/multi-step-nr/app/pages/page5/page.jsx\",\n                lineNumber: 22,\n                columnNumber: 12\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-bold text-center text-[24px]\",\n                children: \"Thank you\"\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/multi-step-nr/app/pages/page5/page.jsx\",\n                lineNumber: 29,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-center text-[gray]\",\n                children: \"Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.\"\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/multi-step-nr/app/pages/page5/page.jsx\",\n                lineNumber: 30,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Desktop/multi-step-nr/app/pages/page5/page.jsx\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, undefined);\n};\n_s(page5, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page5);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlcy9wYWdlNS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUM4QjtBQUNjO0FBQ0E7QUFDVztBQUd2RCxNQUFPTSxRQUFROztJQUliSCxnREFBU0EsQ0FBQztRQUNSLElBQUlJLGdCQUFnQixHQUFHO1lBQ3JCLG1FQUFtRTtZQUNuRUMsU0FBU0M7WUFDVEQsU0FBU0U7UUFDWDtJQUNGLEdBQUc7UUFBQ0g7UUFBYUM7S0FBUztJQUV4QixxQkFDSSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ1osOERBQUNaLGtEQUFLQTtnQkFDWGEsS0FBSTtnQkFDSkMsT0FBTztnQkFDUEMsUUFBUTtnQkFDUkMsS0FBSTtnQkFDSkosV0FBVTs7Ozs7OzBCQUVaLDhEQUFDSztnQkFBR0wsV0FBVTswQkFBb0M7Ozs7OzswQkFDbEQsOERBQUNNO2dCQUFFTixXQUFVOzBCQUEwQjs7Ozs7Ozs7Ozs7O0FBRzNDO0dBekJPTjtBQTJCUCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZXMvcGFnZTUvcGFnZS5qc3g/MDM5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuXG5jb25zdCAgcGFnZTUgPSAoKSA9PiB7XG5cbiBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjdXJyZW50U3RlcCA9PT0gNSkge1xuICAgICAgLy8gQXF1w60gZGVzcGFjaGFtb3MgbGEgYWNjacOzbiBwYXJhIHJlc2V0ZWFyIGxhIGluZm9ybWFjacOzbiBwZXJzb25hbFxuICAgICAgZGlzcGF0Y2gocmVzZXRQZXJzb25hbEluZm8oKSk7XG4gICAgICBkaXNwYXRjaChyZXNldFBsYW5zKCkpXG4gICAgfVxuICB9LCBbY3VycmVudFN0ZXAsIGRpc3BhdGNoXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzM0M3B4XSBoLVs0NzVweF0gYmctd2hpdGUgcHQtMTAgcHgtNSAgZmxleCBmbGV4LWNvbCBzcGFjZS15LTUgcm91bmRlZC1bMTBweF0gdGV4dC1ibGFja1wiPlxuICAgICAgICAgICA8SW1hZ2VcbiAgICAgIHNyYz1cIi9tZWRpYS9DaGVjay5zdmdcIlxuICAgICAgd2lkdGg9ezU2fVxuICAgICAgaGVpZ2h0PXs1Nn1cbiAgICAgIGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiXG4gICAgICBjbGFzc05hbWU9J214LWF1dG8nXG4gICAgLz5cbiAgICA8aDEgY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC1jZW50ZXIgdGV4dC1bMjRweF0nPlRoYW5rIHlvdTwvaDE+XG4gICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciB0ZXh0LVtncmF5XSc+VGhhbmtzIGZvciBjb25maXJtaW5nIHlvdXIgc3Vic2NyaXB0aW9uISBXZSBob3BlIHlvdSBoYXZlIGZ1biB1c2luZyBvdXIgcGxhdGZvcm0uIElmIHlvdSBldmVyIG5lZWQgc3VwcG9ydCwgcGxlYXNlIGZlZWwgZnJlZSB0byBlbWFpbCB1cyBhdCBzdXBwb3J0QGxvcmVtZ2FtaW5nLmNvbS48L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlNTsiXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJwYWdlNSIsImN1cnJlbnRTdGVwIiwiZGlzcGF0Y2giLCJyZXNldFBlcnNvbmFsSW5mbyIsInJlc2V0UGxhbnMiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImgxIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/pages/page5/page.jsx\n"));

/***/ })

});