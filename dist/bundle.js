/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://animeapp/./src/sass/style.scss?");

/***/ }),

/***/ "./src/js/Home.js":
/*!************************!*\
  !*** ./src/js/Home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => (/* binding */ Home)\n/* harmony export */ });\nconst Home = (argument = \" \") => {\n    console.log(\"Home\", argument);\n}\n\n\n\n\n//# sourceURL=webpack://animeapp/./src/js/Home.js?");

/***/ }),

/***/ "./src/js/PageDetail.js":
/*!******************************!*\
  !*** ./src/js/PageDetail.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageDetail\": () => (/* binding */ PageDetail)\n/* harmony export */ });\nconst PageDetail = (argument = \" \") => {\n\n    let slug = window.location.hash.substring(1).split(\"/\")[1]\n    console.log(slug)\n\n    const fetchPokemon = () => {\n        fetch(`https://pokeapi.co/api/v2//pokemon/${slug}`,\n        )\n            .then((response) => response.json())\n            .then((response) => {\n                let { game_indices, name, sprites, stats, height, weight, types } = response;\n                console.log(response), displayPokemon(game_indices, name, sprites, stats, height, weight, types)\n            })\n    }\n\n\n\n    const displayPokemon = (game_indices, name, sprites, stats, height, weight, types) => {\n\n        document.querySelector('#pageContent').innerHTML =\n            `<div class=\"card\" id=${game_indices[18].game_index}>\n            <div class=\"container\">\n            <a href=\"#pagedetail/${name}\"><img id=\"picture-pokemon\" src=\"${sprites.front_default}\" ></a>\n            </div>\n            <div id=\"info-pokemon\">\n              <a class=\"index-pokemon\">${game_indices[18].game_index} </a>\n              <a  class=\"name-pokemon\">${name}</a>\n            </div>\n        </div>`\n\n    }\n\n\n    const render = () => {\n        pageContent.innerHTML =\n            `<div class=\"card\" id=\"pokemon-detail\">\n        <p>Waiting<p>\n        </div>\n        `\n        fetchPokemon()\n    }\n    render()\n}\n\n\n\n\n\n\n\n//# sourceURL=webpack://animeapp/./src/js/PageDetail.js?");

/***/ }),

/***/ "./src/js/PageList.js":
/*!****************************!*\
  !*** ./src/js/PageList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageList\": () => (/* binding */ PageList)\n/* harmony export */ });\nconst search = () => {\n  let input = document.getElementById('input-search').value\n  \n    // only display the pokemon with the corresponding name\n  }\n\nwindow.search = search;\n\nconst PageList = () => {\n\n  async function fetchPokemons() {\n    let j = 10\n\n    for (let i = 1; i < j; i++) {\n      fetch(`https://pokeapi.co/api/v2//pokemon/${i}`,\n      )\n        .then((response) => response.json())\n        .then((response) => {\n          let { game_indices, name, sprites} = response;\n          console.log(response), displayPokemons(game_indices, name, sprites)\n        })\n    }\n  }\n\n \n  \n  fetchPokemons()\n\n  const displayPokemons = (game_indices, name, sprites) => {\n    \n    document.querySelector('#pageContent').innerHTML +=\n      `<div class=\"card\" id=${game_indices[18].game_index}>\n        <div class=\"container\">\n        <a href=\"#pagedetail/${name}\"><img id=\"picture-pokemon\" src=\"${sprites.front_default}\" ></a>\n        </div>\n        <div id=\"info-pokemon\">\n          <a class=\"index-pokemon\">${game_indices[18].game_index} </a>\n          <a  class=\"name-pokemon\">${name}</a>\n        </div>\n    </div>`\n\n  }\n}\n\nPageList()\n\n\n\n//# sourceURL=webpack://animeapp/./src/js/PageList.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ \"./src/js/routes.js\");\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\");\n\n\n\n\nlet pageArgument;\n\nconst setRoute = () => {\n  let path = window.location.hash.substring(1).split(\"/\");\n  pageArgument = path[1] || \"\";\n\n  var pageContent = document.getElementById(\"pageContent\");\n  _routes__WEBPACK_IMPORTED_MODULE_0__.routes[path[0]](pageArgument);\n  return true;\n};\n\nwindow.addEventListener(\"hashchange\", () => setRoute());\nwindow.addEventListener(\"DOMContentLoaded\", () => setRoute());\n\n\n//# sourceURL=webpack://animeapp/./src/js/index.js?");

/***/ }),

/***/ "./src/js/routes.js":
/*!**************************!*\
  !*** ./src/js/routes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => (/* binding */ routes)\n/* harmony export */ });\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ \"./src/js/Home.js\");\n/* harmony import */ var _PageList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageList */ \"./src/js/PageList.js\");\n/* harmony import */ var _PageDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageDetail */ \"./src/js/PageDetail.js\");\n\n\n\n\nconst routes = {\n    \"\": _Home__WEBPACK_IMPORTED_MODULE_0__.Home,\n    \"pagelist\": _PageList__WEBPACK_IMPORTED_MODULE_1__.PageList,\n    \"pagedetail\": _PageDetail__WEBPACK_IMPORTED_MODULE_2__.PageDetail,\n};\n\n\n\n//# sourceURL=webpack://animeapp/./src/js/routes.js?");

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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;