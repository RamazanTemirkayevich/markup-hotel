/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/FirstTab.js":
/*!************************************!*\
  !*** ./src/js/modules/FirstTab.js ***!
  \************************************/
/***/ ((module) => {

eval("function FirstTab() {\n    let tab = function (e) {\n        let tabNav = document.querySelectorAll('.tab-block__tabs-items__item'),\n            tabContent = document.querySelectorAll('.tab-block-slide'),\n            tabName;\n    \n        tabNav.forEach(item => {\n            item.addEventListener('click', selectTabNav)\n        });\n    \n        function selectTabNav() {\n            tabNav.forEach(item => {\n                item.classList.remove('tab-block__tabs-items__item--active');\n            });\n            this.classList.add('tab-block__tabs-items__item--active');\n            tabName = this.getAttribute('data-tab-name');\n            selectTabContent(tabName);\n        }\n    \n        function selectTabContent(tabName) {\n            tabContent.forEach(item => {\n                item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');\n            })\n        }\n    \n    };\n    \n    \n    tab();\n}\n\nmodule.exports = FirstTab;\n\n//# sourceURL=webpack://markup-hotel/./src/js/modules/FirstTab.js?");

/***/ }),

/***/ "./src/js/modules/SecondTab.js":
/*!*************************************!*\
  !*** ./src/js/modules/SecondTab.js ***!
  \*************************************/
/***/ ((module) => {

eval("function SecondTab() {\n\n    let tabSecond = document.querySelectorAll('.fourth-block__tabs-items__item');\n    \n    tabSecond.forEach(item => {\n        item.addEventListener('click', selectTabNav);\n    });\n\n    function selectTabNav() {\n        tabSecond.forEach(item => {\n            item.classList.remove('active');\n        });\n        this.classList.toggle('active');\n    };\n}\n\nmodule.exports = SecondTab;\n\n//# sourceURL=webpack://markup-hotel/./src/js/modules/SecondTab.js?");

/***/ }),

/***/ "./src/js/modules/slide.js":
/*!*********************************!*\
  !*** ./src/js/modules/slide.js ***!
  \*********************************/
/***/ ((module) => {

eval("function slide() {\n    const buttons = document.querySelectorAll(\"[data-carousel-button]\")\n\n    buttons.forEach(button => {\n        button.addEventListener(\"click\", () => {\n            const offset = button.dataset.carouselButton === \"next\" ? 1 : -1\n            const slides = button\n            .closest(\"[data-carousel]\")\n            .querySelector(\"[data-slides]\")\n\n            const activeSlide = slides.querySelector(\"[data-active]\")\n            let newIndex = [...slides.children].indexOf(activeSlide) + offset\n            if (newIndex < 0) newIndex = slides.children.length - 1\n            if (newIndex >= slides.children.length) newIndex = 0\n\n            slides.children[newIndex].dataset.active = true\n            delete activeSlide.dataset.active\n        });\n    });\n}\n\nmodule.exports = slide;\n\n//# sourceURL=webpack://markup-hotel/./src/js/modules/slide.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("window.addEventListener('DOMContentLoaded', () => {\n    const FirstTab = __webpack_require__(/*! ./modules/FirstTab */ \"./src/js/modules/FirstTab.js\"),\n        SecondTab = __webpack_require__(/*! ./modules/SecondTab */ \"./src/js/modules/SecondTab.js\"),\n        slide = __webpack_require__(/*! ./modules/slide */ \"./src/js/modules/slide.js\");\n\n    FirstTab();\n    SecondTab();\n    slide();\n});\n\n//# sourceURL=webpack://markup-hotel/./src/js/script.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;