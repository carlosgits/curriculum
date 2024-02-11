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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/../node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _features_plans_userSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/plans/userSlice */ \"(app-pages-browser)/./app/features/plans/userSlice.js\");\n/* harmony import */ var _features_plans_planSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../features/plans/planSlice */ \"(app-pages-browser)/./app/features/plans/planSlice.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Footer() {\n    _s();\n    const counterS = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_features_plans_userSlice__WEBPACK_IMPORTED_MODULE_3__.selectCounter);\n    const planS = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_features_plans_planSlice__WEBPACK_IMPORTED_MODULE_4__.selectPlanSelected);\n    const addonS = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_features_plans_planSlice__WEBPACK_IMPORTED_MODULE_4__.selectAddonSelected);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [currentStep, setCurrentStep] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    const userResetS = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_features_plans_userSlice__WEBPACK_IMPORTED_MODULE_3__.resetPersonalInfo);\n    const planResetS = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_features_plans_planSlice__WEBPACK_IMPORTED_MODULE_4__.resetPlans);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Al montar el componente, navega al primer paso\n        router.push(\"/pages/page1\");\n    }, [\n        router\n    ]);\n    const handleNext = ()=>{\n        if (currentStep === 1 & counterS === 3) {\n            const newStep = currentStep + 1;\n            setCurrentStep(newStep);\n            router.push(\"/pages/page\".concat(newStep));\n        // Dispara un evento personalizado para el siguiente paso\n        }\n        if (currentStep === 2 & planS !== \"none\") {\n            const newStep = currentStep + 1;\n            setCurrentStep(newStep);\n            router.push(\"/pages/page\".concat(newStep));\n        // Dispara un evento personalizado para el siguiente paso\n        }\n        if (currentStep === 3 & addonS.length !== 0) {\n            const newStep = currentStep + 1;\n            setCurrentStep(newStep);\n            router.push(\"/pages/page\".concat(newStep));\n        // Dispara un evento personalizado para el siguiente paso\n        }\n        if (currentStep === 4) {\n            const newStep = currentStep + 1;\n            setCurrentStep(newStep);\n            router.push(\"/pages/page\".concat(newStep));\n        // Dispara un evento personalizado para el siguiente paso\n        }\n    };\n    const handleBack = ()=>{\n        if (currentStep > 1) {\n            const newStep = currentStep - 1;\n            setCurrentStep(newStep);\n            router.push(\"/pages/page\".concat(newStep));\n        }\n    };\n    const handleReset = ()=>{\n        dispatch(userResetS);\n        dispatch(planResetS);\n        router.push(\"/pages/page1\");\n        setCurrentStep(1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[375px] h-[72px] flex flex-row justify-between absolute bottom-0 bg-white ${} \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"button w-[93px] h-[38px] ml-2 mt-2 pt-2 text-center \".concat(currentStep === 1 ? \"text-gray-300\" : currentStep === 5 ? \"text-white\" : \"text-gray-500\"),\n                onClick: handleBack,\n                disabled: currentStep === 1 || currentStep === 5,\n                children: \"Go back\"\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/multi-step-nr/app/components/footer.jsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"button w-[93px] h-[38px] bg-[#001C4A] mr-2 mt-2 pt-2 text-center rounded-md text-white \".concat(currentStep === 4 ? \"bg-blue-800 text-white\" : \"\"),\n                onClick: currentStep === 5 ? handleReset : handleNext,\n                children: currentStep === 4 ? \"Confirm\" : currentStep === 5 ? \"Start Over\" : \"Next Step\"\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/multi-step-nr/app/components/footer.jsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Desktop/multi-step-nr/app/components/footer.jsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_s(Footer, \"XhH70UCeSbovh/89hxXQ9I24nCc=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector\n    ];\n});\n_c = Footer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2Zvb3Rlci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUU0QztBQUNBO0FBQ1c7QUFDSztBQUl2QjtBQUMyQjtBQUNQO0FBRXpELFNBQVNVOztJQUNQLE1BQU1DLFdBQVdSLHdEQUFXQSxDQUFDRSxvRUFBYUE7SUFDMUMsTUFBTU8sUUFBUVQsd0RBQVdBLENBQUNHLHlFQUFrQkE7SUFDNUMsTUFBTU8sU0FBU1Ysd0RBQVdBLENBQUNJLDBFQUFtQkE7SUFDOUMsTUFBTU8sU0FBU2QsMERBQVNBO0lBQ3hCLE1BQU0sQ0FBQ2UsYUFBYUMsZUFBZSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNZ0IsV0FBV2Isd0RBQVdBO0lBQzVCLE1BQU1jLGFBQWFmLHdEQUFXQSxDQUFDSyx3RUFBaUJBO0lBQ2hELE1BQU1XLGFBQWFoQix3REFBV0EsQ0FBQ00saUVBQVVBO0lBRXpDUCxnREFBU0EsQ0FBQztRQUNSLGlEQUFpRDtRQUNqRFksT0FBT00sSUFBSSxDQUFDO0lBQ2QsR0FBRztRQUFDTjtLQUFPO0lBRVgsTUFBTU8sYUFBYTtRQUNqQixJQUFJLGdCQUFpQixJQUFNVixhQUFhLEdBQUk7WUFDMUMsTUFBTVcsVUFBVVAsY0FBYztZQUM5QkMsZUFBZU07WUFDZlIsT0FBT00sSUFBSSxDQUFDLGNBQXNCLE9BQVJFO1FBQzFCLHlEQUF5RDtRQUMzRDtRQUNBLElBQUksZ0JBQWlCLElBQU1WLFVBQVUsUUFBUztZQUM1QyxNQUFNVSxVQUFVUCxjQUFjO1lBQzlCQyxlQUFlTTtZQUNmUixPQUFPTSxJQUFJLENBQUMsY0FBc0IsT0FBUkU7UUFDMUIseURBQXlEO1FBQzNEO1FBQ0EsSUFBSSxnQkFBaUIsSUFBTVQsT0FBT1UsTUFBTSxLQUFLLEdBQUk7WUFDL0MsTUFBTUQsVUFBVVAsY0FBYztZQUM5QkMsZUFBZU07WUFDZlIsT0FBT00sSUFBSSxDQUFDLGNBQXNCLE9BQVJFO1FBQzFCLHlEQUF5RDtRQUMzRDtRQUNBLElBQUlQLGdCQUFnQixHQUFHO1lBQ3JCLE1BQU1PLFVBQVVQLGNBQWM7WUFDOUJDLGVBQWVNO1lBQ2ZSLE9BQU9NLElBQUksQ0FBQyxjQUFzQixPQUFSRTtRQUMxQix5REFBeUQ7UUFDM0Q7SUFDRjtJQUVBLE1BQU1FLGFBQWE7UUFDakIsSUFBSVQsY0FBYyxHQUFHO1lBQ25CLE1BQU1PLFVBQVVQLGNBQWM7WUFDOUJDLGVBQWVNO1lBQ2ZSLE9BQU9NLElBQUksQ0FBQyxjQUFzQixPQUFSRTtRQUM1QjtJQUNGO0lBRUEsTUFBTUcsY0FBYztRQUNsQlIsU0FBU0M7UUFDVEQsU0FBU0U7UUFDVEwsT0FBT00sSUFBSSxDQUFDO1FBQ1pKLGVBQWU7SUFDakI7SUFFQSxxQkFDRSw4REFBQ1U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUNDRCxXQUFXLHVEQU1WLE9BTENaLGdCQUFnQixJQUNaLGtCQUNBQSxnQkFBZ0IsSUFDaEIsZUFDQTtnQkFFTmMsU0FBU0w7Z0JBQ1RNLFVBQVVmLGdCQUFnQixLQUFLQSxnQkFBZ0I7MEJBQ2hEOzs7Ozs7MEJBR0QsOERBQUNhO2dCQUNDRCxXQUFXLDBGQUVWLE9BRENaLGdCQUFnQixJQUFJLDJCQUEyQjtnQkFFakRjLFNBQVNkLGdCQUFnQixJQUFJVSxjQUFjSjswQkFFMUNOLGdCQUFnQixJQUNiLFlBQ0FBLGdCQUFnQixJQUNoQixlQUNBOzs7Ozs7Ozs7Ozs7QUFJWjtHQXZGU0w7O1FBQ1VQLG9EQUFXQTtRQUNkQSxvREFBV0E7UUFDVkEsb0RBQVdBO1FBQ1hILHNEQUFTQTtRQUdQSSxvREFBV0E7UUFDVEQsb0RBQVdBO1FBQ1hBLG9EQUFXQTs7O0tBVHZCTztBQXlGVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9mb290ZXIuanN4PzkwODkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc2VsZWN0Q291bnRlciB9IGZyb20gXCIuLi9mZWF0dXJlcy9wbGFucy91c2VyU2xpY2VcIjtcbmltcG9ydCB7XG4gIHNlbGVjdFBsYW5TZWxlY3RlZCxcbiAgc2VsZWN0QWRkb25TZWxlY3RlZCxcbn0gZnJvbSBcIi4uL2ZlYXR1cmVzL3BsYW5zL3BsYW5TbGljZVwiO1xuaW1wb3J0IHsgcmVzZXRQZXJzb25hbEluZm8gfSBmcm9tIFwiLi4vZmVhdHVyZXMvcGxhbnMvdXNlclNsaWNlXCI7XG5pbXBvcnQgeyByZXNldFBsYW5zIH0gZnJvbSBcIi4uL2ZlYXR1cmVzL3BsYW5zL3BsYW5TbGljZVwiO1xuXG5mdW5jdGlvbiBGb290ZXIoKSB7XG4gIGNvbnN0IGNvdW50ZXJTID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q291bnRlcik7XG4gIGNvbnN0IHBsYW5TID0gdXNlU2VsZWN0b3Ioc2VsZWN0UGxhblNlbGVjdGVkKTtcbiAgY29uc3QgYWRkb25TID0gdXNlU2VsZWN0b3Ioc2VsZWN0QWRkb25TZWxlY3RlZCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbY3VycmVudFN0ZXAsIHNldEN1cnJlbnRTdGVwXSA9IHVzZVN0YXRlKDEpO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgdXNlclJlc2V0UyA9IHVzZVNlbGVjdG9yKHJlc2V0UGVyc29uYWxJbmZvKTtcbiAgY29uc3QgcGxhblJlc2V0UyA9IHVzZVNlbGVjdG9yKHJlc2V0UGxhbnMpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQWwgbW9udGFyIGVsIGNvbXBvbmVudGUsIG5hdmVnYSBhbCBwcmltZXIgcGFzb1xuICAgIHJvdXRlci5wdXNoKFwiL3BhZ2VzL3BhZ2UxXCIpO1xuICB9LCBbcm91dGVyXSk7XG5cbiAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICBpZiAoKGN1cnJlbnRTdGVwID09PSAxKSAmIChjb3VudGVyUyA9PT0gMykpIHtcbiAgICAgIGNvbnN0IG5ld1N0ZXAgPSBjdXJyZW50U3RlcCArIDE7XG4gICAgICBzZXRDdXJyZW50U3RlcChuZXdTdGVwKTtcbiAgICAgIHJvdXRlci5wdXNoKGAvcGFnZXMvcGFnZSR7bmV3U3RlcH1gKTtcbiAgICAgIC8vIERpc3BhcmEgdW4gZXZlbnRvIHBlcnNvbmFsaXphZG8gcGFyYSBlbCBzaWd1aWVudGUgcGFzb1xuICAgIH1cbiAgICBpZiAoKGN1cnJlbnRTdGVwID09PSAyKSAmIChwbGFuUyAhPT0gXCJub25lXCIpKSB7XG4gICAgICBjb25zdCBuZXdTdGVwID0gY3VycmVudFN0ZXAgKyAxO1xuICAgICAgc2V0Q3VycmVudFN0ZXAobmV3U3RlcCk7XG4gICAgICByb3V0ZXIucHVzaChgL3BhZ2VzL3BhZ2Uke25ld1N0ZXB9YCk7XG4gICAgICAvLyBEaXNwYXJhIHVuIGV2ZW50byBwZXJzb25hbGl6YWRvIHBhcmEgZWwgc2lndWllbnRlIHBhc29cbiAgICB9XG4gICAgaWYgKChjdXJyZW50U3RlcCA9PT0gMykgJiAoYWRkb25TLmxlbmd0aCAhPT0gMCkpIHtcbiAgICAgIGNvbnN0IG5ld1N0ZXAgPSBjdXJyZW50U3RlcCArIDE7XG4gICAgICBzZXRDdXJyZW50U3RlcChuZXdTdGVwKTtcbiAgICAgIHJvdXRlci5wdXNoKGAvcGFnZXMvcGFnZSR7bmV3U3RlcH1gKTtcbiAgICAgIC8vIERpc3BhcmEgdW4gZXZlbnRvIHBlcnNvbmFsaXphZG8gcGFyYSBlbCBzaWd1aWVudGUgcGFzb1xuICAgIH1cbiAgICBpZiAoY3VycmVudFN0ZXAgPT09IDQpIHtcbiAgICAgIGNvbnN0IG5ld1N0ZXAgPSBjdXJyZW50U3RlcCArIDE7XG4gICAgICBzZXRDdXJyZW50U3RlcChuZXdTdGVwKTtcbiAgICAgIHJvdXRlci5wdXNoKGAvcGFnZXMvcGFnZSR7bmV3U3RlcH1gKTtcbiAgICAgIC8vIERpc3BhcmEgdW4gZXZlbnRvIHBlcnNvbmFsaXphZG8gcGFyYSBlbCBzaWd1aWVudGUgcGFzb1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVCYWNrID0gKCkgPT4ge1xuICAgIGlmIChjdXJyZW50U3RlcCA+IDEpIHtcbiAgICAgIGNvbnN0IG5ld1N0ZXAgPSBjdXJyZW50U3RlcCAtIDE7XG4gICAgICBzZXRDdXJyZW50U3RlcChuZXdTdGVwKTtcbiAgICAgIHJvdXRlci5wdXNoKGAvcGFnZXMvcGFnZSR7bmV3U3RlcH1gKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2godXNlclJlc2V0Uyk7XG4gICAgZGlzcGF0Y2gocGxhblJlc2V0Uyk7XG4gICAgcm91dGVyLnB1c2goXCIvcGFnZXMvcGFnZTFcIik7XG4gICAgc2V0Q3VycmVudFN0ZXAoMSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzM3NXB4XSBoLVs3MnB4XSBmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBhYnNvbHV0ZSBib3R0b20tMCBiZy13aGl0ZSAke30gXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17YGJ1dHRvbiB3LVs5M3B4XSBoLVszOHB4XSBtbC0yIG10LTIgcHQtMiB0ZXh0LWNlbnRlciAke1xuICAgICAgICAgIGN1cnJlbnRTdGVwID09PSAxXG4gICAgICAgICAgICA/IFwidGV4dC1ncmF5LTMwMFwiXG4gICAgICAgICAgICA6IGN1cnJlbnRTdGVwID09PSA1XG4gICAgICAgICAgICA/IFwidGV4dC13aGl0ZVwiXG4gICAgICAgICAgICA6IFwidGV4dC1ncmF5LTUwMFwiXG4gICAgICAgIH1gfVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVCYWNrfVxuICAgICAgICBkaXNhYmxlZD17Y3VycmVudFN0ZXAgPT09IDEgfHwgY3VycmVudFN0ZXAgPT09IDV9XG4gICAgICA+XG4gICAgICAgIEdvIGJhY2tcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e2BidXR0b24gdy1bOTNweF0gaC1bMzhweF0gYmctWyMwMDFDNEFdIG1yLTIgbXQtMiBwdC0yIHRleHQtY2VudGVyIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSAke1xuICAgICAgICAgIGN1cnJlbnRTdGVwID09PSA0ID8gXCJiZy1ibHVlLTgwMCB0ZXh0LXdoaXRlXCIgOiBcIlwiXG4gICAgICAgIH1gfVxuICAgICAgICBvbkNsaWNrPXtjdXJyZW50U3RlcCA9PT0gNSA/IGhhbmRsZVJlc2V0IDogaGFuZGxlTmV4dH1cbiAgICAgID5cbiAgICAgICAge2N1cnJlbnRTdGVwID09PSA0XG4gICAgICAgICAgPyBcIkNvbmZpcm1cIlxuICAgICAgICAgIDogY3VycmVudFN0ZXAgPT09IDVcbiAgICAgICAgICA/IFwiU3RhcnQgT3ZlclwiXG4gICAgICAgICAgOiBcIk5leHQgU3RlcFwifVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJzZWxlY3RDb3VudGVyIiwic2VsZWN0UGxhblNlbGVjdGVkIiwic2VsZWN0QWRkb25TZWxlY3RlZCIsInJlc2V0UGVyc29uYWxJbmZvIiwicmVzZXRQbGFucyIsIkZvb3RlciIsImNvdW50ZXJTIiwicGxhblMiLCJhZGRvblMiLCJyb3V0ZXIiLCJjdXJyZW50U3RlcCIsInNldEN1cnJlbnRTdGVwIiwiZGlzcGF0Y2giLCJ1c2VyUmVzZXRTIiwicGxhblJlc2V0UyIsInB1c2giLCJoYW5kbGVOZXh0IiwibmV3U3RlcCIsImxlbmd0aCIsImhhbmRsZUJhY2siLCJoYW5kbGVSZXNldCIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/footer.jsx\n"));

/***/ })

});