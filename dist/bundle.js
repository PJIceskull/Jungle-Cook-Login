/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _route_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route.js */ \"./src/route.js\");\n/* harmony import */ var _route_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_route_js__WEBPACK_IMPORTED_MODULE_0__);\n// import functions into index file\r\n\r\n// function changeRoute() {\r\n//   let hashTag = window.location.hash;\r\n//   let pageID = hashTag.replace(\"#\", \"\");\r\n//   console.log(hashTag + \" \" + pageID);\r\n\r\n//   if (pageID != \"\") {\r\n//     $.get(`pages/${pageID}.html`, function (data) {\r\n//       console.log(\"data \" + data);\r\n//       $(\"#app\").html(data);\r\n//     }).fail(function () {\r\n//       console.log(pageID, \"page not found\");\r\n//       alert(pageID + \" page not found.\");\r\n//     });\r\n//   } else {\r\n//     $.get(`pages/login.html`, function (data) {\r\n//       console.log(\"data \" + data);\r\n//       $(\"#app\").html(data);\r\n//     }).fail(function () {\r\n//       alert(pageID + \" page not found.\");\r\n//     });\r\n//   }\r\n// }\r\n\r\nfunction initURLListener() {\r\n  $(window).on(\"hashchange\", _route_js__WEBPACK_IMPORTED_MODULE_0__.changeRoute);\r\n  (0,_route_js__WEBPACK_IMPORTED_MODULE_0__.changeRoute)();\r\n}\r\n\r\nfunction initListeners() {\r\n  // Hamburger Menu\r\n  // Using Jquery\r\n  $(\".hamburger-menu\").on(\"click\", function () {\r\n    $(this).toggleClass(\"open\");\r\n  });\r\n}\r\n\r\n$(document).ready(function () {\r\n  initURLListener();\r\n  initListeners();\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0I7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsa0RBQVc7QUFDeEMsRUFBRSxzREFBVztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanVuZ2xlLWNvb2svLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgZnVuY3Rpb25zIGludG8gaW5kZXggZmlsZVxyXG5pbXBvcnQgeyBjaGFuZ2VSb3V0ZSB9IGZyb20gXCIuL3JvdXRlLmpzXCI7XHJcbi8vIGZ1bmN0aW9uIGNoYW5nZVJvdXRlKCkge1xyXG4vLyAgIGxldCBoYXNoVGFnID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XHJcbi8vICAgbGV0IHBhZ2VJRCA9IGhhc2hUYWcucmVwbGFjZShcIiNcIiwgXCJcIik7XHJcbi8vICAgY29uc29sZS5sb2coaGFzaFRhZyArIFwiIFwiICsgcGFnZUlEKTtcclxuXHJcbi8vICAgaWYgKHBhZ2VJRCAhPSBcIlwiKSB7XHJcbi8vICAgICAkLmdldChgcGFnZXMvJHtwYWdlSUR9Lmh0bWxgLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4vLyAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgXCIgKyBkYXRhKTtcclxuLy8gICAgICAgJChcIiNhcHBcIikuaHRtbChkYXRhKTtcclxuLy8gICAgIH0pLmZhaWwoZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICBjb25zb2xlLmxvZyhwYWdlSUQsIFwicGFnZSBub3QgZm91bmRcIik7XHJcbi8vICAgICAgIGFsZXJ0KHBhZ2VJRCArIFwiIHBhZ2Ugbm90IGZvdW5kLlwiKTtcclxuLy8gICAgIH0pO1xyXG4vLyAgIH0gZWxzZSB7XHJcbi8vICAgICAkLmdldChgcGFnZXMvbG9naW4uaHRtbGAsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBcIiArIGRhdGEpO1xyXG4vLyAgICAgICAkKFwiI2FwcFwiKS5odG1sKGRhdGEpO1xyXG4vLyAgICAgfSkuZmFpbChmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgIGFsZXJ0KHBhZ2VJRCArIFwiIHBhZ2Ugbm90IGZvdW5kLlwiKTtcclxuLy8gICAgIH0pO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuZnVuY3Rpb24gaW5pdFVSTExpc3RlbmVyKCkge1xyXG4gICQod2luZG93KS5vbihcImhhc2hjaGFuZ2VcIiwgY2hhbmdlUm91dGUpO1xyXG4gIGNoYW5nZVJvdXRlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRMaXN0ZW5lcnMoKSB7XHJcbiAgLy8gSGFtYnVyZ2VyIE1lbnVcclxuICAvLyBVc2luZyBKcXVlcnlcclxuICAkKFwiLmhhbWJ1cmdlci1tZW51XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcIm9wZW5cIik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICBpbml0VVJMTGlzdGVuZXIoKTtcclxuICBpbml0TGlzdGVuZXJzKCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/route.js":
/*!**********************!*\
  !*** ./src/route.js ***!
  \**********************/
/***/ (() => {

eval("function changeRoute() {\r\n  let hashTag = window.location.hash;\r\n  let pageID = hashTag.replace(\"#\", \"\");\r\n  console.log(hashTag + \" \" + pageID);\r\n\r\n  if (pageID != \"\") {\r\n    $.get(`pages/${pageID}.html`, function (data) {\r\n      console.log(\"data \" + data);\r\n      $(\"#app\").html(data);\r\n    }).fail(function () {\r\n      console.log(pageID, \"page not found\");\r\n      alert(pageID + \" page not found.\");\r\n    });\r\n  } else {\r\n    $.get(`pages/login.html`, function (data) {\r\n      //   console.log(\"data \" + data);\r\n      $(\"#app\").html(data);\r\n    }).fail(function () {\r\n      alert(pageID + \" page not found.\");\r\n    });\r\n  }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGUuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2p1bmdsZS1jb29rLy4vc3JjL3JvdXRlLmpzP2QzMDciXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY2hhbmdlUm91dGUoKSB7XHJcbiAgbGV0IGhhc2hUYWcgPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcclxuICBsZXQgcGFnZUlEID0gaGFzaFRhZy5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcclxuICBjb25zb2xlLmxvZyhoYXNoVGFnICsgXCIgXCIgKyBwYWdlSUQpO1xyXG5cclxuICBpZiAocGFnZUlEICE9IFwiXCIpIHtcclxuICAgICQuZ2V0KGBwYWdlcy8ke3BhZ2VJRH0uaHRtbGAsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBcIiArIGRhdGEpO1xyXG4gICAgICAkKFwiI2FwcFwiKS5odG1sKGRhdGEpO1xyXG4gICAgfSkuZmFpbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHBhZ2VJRCwgXCJwYWdlIG5vdCBmb3VuZFwiKTtcclxuICAgICAgYWxlcnQocGFnZUlEICsgXCIgcGFnZSBub3QgZm91bmQuXCIpO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgICQuZ2V0KGBwYWdlcy9sb2dpbi5odG1sYCwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgLy8gICBjb25zb2xlLmxvZyhcImRhdGEgXCIgKyBkYXRhKTtcclxuICAgICAgJChcIiNhcHBcIikuaHRtbChkYXRhKTtcclxuICAgIH0pLmZhaWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICBhbGVydChwYWdlSUQgKyBcIiBwYWdlIG5vdCBmb3VuZC5cIik7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/route.js\n");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;