"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/footer.jsx":
/*!***********************************!*\
  !*** ./app/components/footer.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/../node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _features_plans_userSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/plans/userSlice */ \"(app-pages-browser)/./app/features/plans/userSlice.js\");\n/* harmony import */ var _features_plans_planSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../features/plans/planSlice */ \"(app-pages-browser)/./app/features/plans/planSlice.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Footer() {\n    _s();\n    const counterS = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_features_plans_userSlice__WEBPACK_IMPORTED_MODULE_3__.selectCounter);\n    const planS = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_features_plans_planSlice__WEBPACK_IMPORTED_MODULE_4__.selectPlanSelected);\n    const addonS = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_features_plans_planSlice__WEBPACK_IMPORTED_MODULE_4__.selectAddonSelected);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [currentStep, setCurrentStep] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Al montar el componente, navega al primer paso\n        router.push(\"/pages/page1\");\n    }, [\n        router\n    ]);\n    const handleNext = ()=>{\n        if (currentStep === 1 & counterS === 3) {\n            const newStep = currentStep + 1;\n            setCurrentStep(newStep);\n            router.push(\"/pages/page\".concat(newStep));\n        // Dispara un evento personalizado para el siguiente paso\n        }\n        if (currentStep === 2 & planS !== \"none\") {\n            const newStep = currentStep + 1;\n            setCurrentStep(newStep);\n            router.push(\"/pages/page\".concat(newStep));\n        // Dispara un evento personalizado para el siguiente paso\n        }\n        if (currentStep === 3 & addonS.length !== 0) {\n            const newStep = currentStep + 1;\n            setCurrentStep(newStep);\n            router.push(\"/pages/page\".concat(newStep));\n        // Dispara un evento personalizado para el siguiente paso\n        }\n        if (currentStep === 4) {\n            const newStep = currentStep + 1;\n            setCurrentStep(newStep);\n            router.push(\"/pages/page\".concat(newStep));\n        // Dispara un evento personalizado para el siguiente paso\n        }\n    };\n    const handleBack = ()=>{\n        if (currentStep > 1) {\n            const newStep = currentStep - 1;\n            setCurrentStep(newStep);\n            router.push(\"/pages/page\".concat(newStep));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[375px] h-[72px] flex flex-row justify-between absolute bottom-0 bg-white ${}\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"button w-[93px] h-[38px] ml-2 mt-2 pt-2 text-center \".concat(currentStep === 1 ? \"text-gray-300\" : \"text-gray-500\"),\n                onClick: handleBack,\n                disabled: currentStep === 1 || currentStep === 5,\n                children: \"Go back\"\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/multi-step-nr/app/components/footer.jsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"button w-[93px] h-[38px] bg-[#001C4A] mr-2 mt-2 pt-2 text-center rounded-md text-white \".concat(currentStep === 4 ? \"bg-blue-800 text-white\" : \"\"),\n                onClick: handleNext,\n                disabled: currentStep === 5,\n                children: currentStep === 4 ? \"Confirm\" : \"Next Step\"\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/multi-step-nr/app/components/footer.jsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Desktop/multi-step-nr/app/components/footer.jsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_s(Footer, \"vLw63xGasR+YNzi6xXwZtj+UMlY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Footer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2Zvb3Rlci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUU0QztBQUNBO0FBQ1c7QUFDSztBQUN5QjtBQUdyRixTQUFTUTs7SUFDUCxNQUFNQyxXQUFXTix3REFBV0EsQ0FBQ0Usb0VBQWFBO0lBQzFDLE1BQU1LLFFBQVFQLHdEQUFXQSxDQUFDRyx5RUFBa0JBO0lBQzVDLE1BQU1LLFNBQVNSLHdEQUFXQSxDQUFDSSwwRUFBbUJBO0lBQzlDLE1BQU1LLFNBQVNaLDBEQUFTQTtJQUN4QixNQUFNLENBQUNhLGFBQWFDLGVBQWUsR0FBR2IsK0NBQVFBLENBQUM7SUFHL0NDLGdEQUFTQSxDQUFDO1FBQ1IsaURBQWlEO1FBQ2pEVSxPQUFPRyxJQUFJLENBQUM7SUFDZCxHQUFHO1FBQUNIO0tBQU87SUFFWCxNQUFNSSxhQUFhO1FBRWpCLElBQUlILGdCQUFnQixJQUFJSixhQUFhLEdBQUc7WUFDdEMsTUFBTVEsVUFBVUosY0FBYztZQUM5QkMsZUFBZUc7WUFDZkwsT0FBT0csSUFBSSxDQUFDLGNBQXNCLE9BQVJFO1FBQzFCLHlEQUF5RDtRQUUzRDtRQUNBLElBQUlKLGdCQUFnQixJQUFJSCxVQUFVLFFBQVE7WUFDeEMsTUFBTU8sVUFBVUosY0FBYztZQUM5QkMsZUFBZUc7WUFDZkwsT0FBT0csSUFBSSxDQUFDLGNBQXNCLE9BQVJFO1FBQzFCLHlEQUF5RDtRQUUzRDtRQUNBLElBQUlKLGdCQUFnQixJQUFJRixPQUFPTyxNQUFNLEtBQUssR0FBRztZQUMzQyxNQUFNRCxVQUFVSixjQUFjO1lBQzlCQyxlQUFlRztZQUNmTCxPQUFPRyxJQUFJLENBQUMsY0FBc0IsT0FBUkU7UUFDMUIseURBQXlEO1FBRTNEO1FBQ0EsSUFBSUosZ0JBQWdCLEdBQUk7WUFDdEIsTUFBTUksVUFBVUosY0FBYztZQUM5QkMsZUFBZUc7WUFDZkwsT0FBT0csSUFBSSxDQUFDLGNBQXNCLE9BQVJFO1FBQzFCLHlEQUF5RDtRQUUzRDtJQUNGO0lBRUEsTUFBTUUsYUFBYTtRQUNqQixJQUFJTixjQUFjLEdBQUc7WUFDbkIsTUFBTUksVUFBVUosY0FBYztZQUM5QkMsZUFBZUc7WUFDZkwsT0FBT0csSUFBSSxDQUFDLGNBQXNCLE9BQVJFO1FBQzVCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUNDRCxXQUFXLHVEQUVWLE9BRENSLGdCQUFnQixJQUFJLGtCQUFrQjtnQkFFeENVLFNBQVNKO2dCQUNUSyxVQUFVWCxnQkFBZ0IsS0FBS0EsZ0JBQWdCOzBCQUNoRDs7Ozs7OzBCQUdELDhEQUFDUztnQkFDQ0QsV0FBVywwRkFBMkksT0FBakRSLGdCQUFnQixJQUFHLDJCQUEyQjtnQkFDbkpVLFNBQVNQO2dCQUNUUSxVQUFVWCxnQkFBZ0I7MEJBR2pDQSxnQkFBZ0IsSUFBSSxZQUFZOzs7Ozs7Ozs7Ozs7QUFLakM7R0EzRVNMOztRQUNVTCxvREFBV0E7UUFDZEEsb0RBQVdBO1FBQ1ZBLG9EQUFXQTtRQUNYSCxzREFBU0E7OztLQUpqQlE7QUE2RVQsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvZm9vdGVyLmpzeD85MDg5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc2VsZWN0Q291bnRlciB9IGZyb20gXCIuLi9mZWF0dXJlcy9wbGFucy91c2VyU2xpY2VcIjtcbmltcG9ydCB7IHNlbGVjdFBsYW5TZWxlY3RlZCxzZWxlY3RBZGRvblNlbGVjdGVkIH0gZnJvbSBcIi4uL2ZlYXR1cmVzL3BsYW5zL3BsYW5TbGljZVwiO1xuXG5cbmZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgY29uc3QgY291bnRlclMgPSB1c2VTZWxlY3RvcihzZWxlY3RDb3VudGVyKVxuICBjb25zdCBwbGFuUyA9IHVzZVNlbGVjdG9yKHNlbGVjdFBsYW5TZWxlY3RlZClcbiAgY29uc3QgYWRkb25TID0gdXNlU2VsZWN0b3Ioc2VsZWN0QWRkb25TZWxlY3RlZClcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtjdXJyZW50U3RlcCwgc2V0Q3VycmVudFN0ZXBdID0gdXNlU3RhdGUoMSk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEFsIG1vbnRhciBlbCBjb21wb25lbnRlLCBuYXZlZ2EgYWwgcHJpbWVyIHBhc29cbiAgICByb3V0ZXIucHVzaChcIi9wYWdlcy9wYWdlMVwiKTtcbiAgfSwgW3JvdXRlcl0pO1xuXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XG5cbiAgICBpZiAoY3VycmVudFN0ZXAgPT09IDEgJiBjb3VudGVyUyA9PT0gMykge1xuICAgICAgY29uc3QgbmV3U3RlcCA9IGN1cnJlbnRTdGVwICsgMTtcbiAgICAgIHNldEN1cnJlbnRTdGVwKG5ld1N0ZXApO1xuICAgICAgcm91dGVyLnB1c2goYC9wYWdlcy9wYWdlJHtuZXdTdGVwfWApO1xuICAgICAgLy8gRGlzcGFyYSB1biBldmVudG8gcGVyc29uYWxpemFkbyBwYXJhIGVsIHNpZ3VpZW50ZSBwYXNvXG4gICAgXG4gICAgfVxuICAgIGlmIChjdXJyZW50U3RlcCA9PT0gMiAmIHBsYW5TICE9PSBcIm5vbmVcIikge1xuICAgICAgY29uc3QgbmV3U3RlcCA9IGN1cnJlbnRTdGVwICsgMTtcbiAgICAgIHNldEN1cnJlbnRTdGVwKG5ld1N0ZXApO1xuICAgICAgcm91dGVyLnB1c2goYC9wYWdlcy9wYWdlJHtuZXdTdGVwfWApO1xuICAgICAgLy8gRGlzcGFyYSB1biBldmVudG8gcGVyc29uYWxpemFkbyBwYXJhIGVsIHNpZ3VpZW50ZSBwYXNvXG4gICAgXG4gICAgfVxuICAgIGlmIChjdXJyZW50U3RlcCA9PT0gMyAmIGFkZG9uUy5sZW5ndGggIT09IDApIHtcbiAgICAgIGNvbnN0IG5ld1N0ZXAgPSBjdXJyZW50U3RlcCArIDE7XG4gICAgICBzZXRDdXJyZW50U3RlcChuZXdTdGVwKTtcbiAgICAgIHJvdXRlci5wdXNoKGAvcGFnZXMvcGFnZSR7bmV3U3RlcH1gKTtcbiAgICAgIC8vIERpc3BhcmEgdW4gZXZlbnRvIHBlcnNvbmFsaXphZG8gcGFyYSBlbCBzaWd1aWVudGUgcGFzb1xuICAgIFxuICAgIH1cbiAgICBpZiAoY3VycmVudFN0ZXAgPT09IDQgKSB7XG4gICAgICBjb25zdCBuZXdTdGVwID0gY3VycmVudFN0ZXAgKyAxO1xuICAgICAgc2V0Q3VycmVudFN0ZXAobmV3U3RlcCk7XG4gICAgICByb3V0ZXIucHVzaChgL3BhZ2VzL3BhZ2Uke25ld1N0ZXB9YCk7XG4gICAgICAvLyBEaXNwYXJhIHVuIGV2ZW50byBwZXJzb25hbGl6YWRvIHBhcmEgZWwgc2lndWllbnRlIHBhc29cbiAgICBcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQmFjayA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudFN0ZXAgPiAxKSB7XG4gICAgICBjb25zdCBuZXdTdGVwID0gY3VycmVudFN0ZXAgLSAxO1xuICAgICAgc2V0Q3VycmVudFN0ZXAobmV3U3RlcCk7XG4gICAgICByb3V0ZXIucHVzaChgL3BhZ2VzL3BhZ2Uke25ld1N0ZXB9YCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LVszNzVweF0gaC1bNzJweF0gZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gYWJzb2x1dGUgYm90dG9tLTAgYmctd2hpdGUgJHt9XCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17YGJ1dHRvbiB3LVs5M3B4XSBoLVszOHB4XSBtbC0yIG10LTIgcHQtMiB0ZXh0LWNlbnRlciAke1xuICAgICAgICAgIGN1cnJlbnRTdGVwID09PSAxID8gXCJ0ZXh0LWdyYXktMzAwXCIgOiBcInRleHQtZ3JheS01MDBcIlxuICAgICAgICB9YH1cbiAgICAgICAgb25DbGljaz17aGFuZGxlQmFja31cbiAgICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRTdGVwID09PSAxIHx8IGN1cnJlbnRTdGVwID09PSA1fVxuICAgICAgPlxuICAgICAgICBHbyBiYWNrXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtgYnV0dG9uIHctWzkzcHhdIGgtWzM4cHhdIGJnLVsjMDAxQzRBXSBtci0yIG10LTIgcHQtMiB0ZXh0LWNlbnRlciByb3VuZGVkLW1kIHRleHQtd2hpdGUgJHtjdXJyZW50U3RlcCA9PT0gNCA/XCJiZy1ibHVlLTgwMCB0ZXh0LXdoaXRlXCIgOiBcIlwifWB9XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHR9XG4gICAgICAgIGRpc2FibGVkPXtjdXJyZW50U3RlcCA9PT0gNX1cbiAgICAgID5cblxue2N1cnJlbnRTdGVwID09PSA0ID8gXCJDb25maXJtXCIgOiBcIk5leHQgU3RlcFwiICB9XG5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwic2VsZWN0Q291bnRlciIsInNlbGVjdFBsYW5TZWxlY3RlZCIsInNlbGVjdEFkZG9uU2VsZWN0ZWQiLCJGb290ZXIiLCJjb3VudGVyUyIsInBsYW5TIiwiYWRkb25TIiwicm91dGVyIiwiY3VycmVudFN0ZXAiLCJzZXRDdXJyZW50U3RlcCIsInB1c2giLCJoYW5kbGVOZXh0IiwibmV3U3RlcCIsImxlbmd0aCIsImhhbmRsZUJhY2siLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/footer.jsx\n"));

/***/ })

});