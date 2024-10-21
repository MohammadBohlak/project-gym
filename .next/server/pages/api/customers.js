"use strict";
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
exports.id = "pages/api/customers";
exports.ids = ["pages/api/customers"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ "(api)/./models/mydata.js":
/*!**************************!*\
  !*** ./models/mydata.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst mydataSchema = new mongoose.Schema({\n    name: String,\n    date: String\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose.models.mydata || mongoose.model(\"mydata\", mydataSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvbXlkYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxXQUFXQyxtQkFBT0EsQ0FBQztBQUd6QixNQUFNQyxlQUFlLElBQUlGLFNBQVNHLE1BQU0sQ0FBQztJQUNyQ0MsTUFBT0M7SUFDUEMsTUFBT0Q7QUFDWDtBQUdBLGlFQUFlTCxTQUFTTyxNQUFNLENBQUNDLE1BQU0sSUFBSVIsU0FBU1MsS0FBSyxDQUFDLFVBQVNQLGFBQUFBLEVBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teW1vbmdvZGF0YS8uL21vZGVscy9teWRhdGEuanM/MjJjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XG5cblxuY29uc3QgbXlkYXRhU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgbmFtZSA6IFN0cmluZyAsIFxuICAgIGRhdGUgOiBTdHJpbmdcbn0pXG5cblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLm15ZGF0YSB8fCBtb25nb29zZS5tb2RlbCgnbXlkYXRhJyxteWRhdGFTY2hlbWEgKSJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJteWRhdGFTY2hlbWEiLCJTY2hlbWEiLCJuYW1lIiwiU3RyaW5nIiwiZGF0ZSIsIm1vZGVscyIsIm15ZGF0YSIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/mydata.js\n");

/***/ }),

/***/ "(api)/./pages/api/customers/index.js":
/*!**************************************!*\
  !*** ./pages/api/customers/index.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_mydata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/mydata */ \"(api)/./models/mydata.js\");\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/dbConnect */ \"(api)/./utils/dbConnect.js\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-connect */ \"next-connect\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_2__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n(0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().get(async (req, res)=>{\n    try {\n        const customers = await _models_mydata__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({});\n        res.send(customers);\n    } catch (error) {\n        return res.status(400).json({\n            message: \"Sorry something went wrong !\"\n        });\n    }\n}).post(async (req, res)=>{\n    const { name , date  } = req.body;\n    const newCustomers = new _models_mydata__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        name,\n        date\n    });\n    try {\n        await newCustomers.save();\n        res.send(\"New Customer added !\");\n    } catch (error) {\n        return res.status(400).json({\n            message: \"Sorry something went wrong !\"\n        });\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3VzdG9tZXJzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBcUM7QUFDSztBQUNaO0FBRTlCQyw0REFBU0E7QUFHVCxNQUFNRSxVQUFVRCx3REFBRUEsR0FBR0UsR0FBRyxDQUFDLE9BQU1DLEtBQUtDLE1BQVE7SUFFeEMsSUFBSTtRQUNBLE1BQU1DLFlBQVksTUFBTVAsMkRBQVcsQ0FBQyxDQUFDO1FBQ3JDTSxJQUFJRyxJQUFJLENBQUNGO0lBQ2IsRUFBRSxPQUFPRyxPQUFPO1FBQ1osT0FBUUosSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFDQyxTQUFRO1FBQThCO0lBQ3hFO0FBR0YsR0FBR0MsSUFBSSxDQUFDLE9BQU1ULEtBQUtDLE1BQVE7SUFDekIsTUFBTSxFQUFDUyxLQUFJLEVBQUVDLEtBQUksRUFBQyxHQUFHWCxJQUFJWSxJQUFJO0lBQzdCLE1BQU1DLGVBQWUsSUFBSWxCLHNEQUFNQSxDQUFDO1FBQUNlO1FBQU1DO0lBQUk7SUFDM0MsSUFBSTtRQUNDLE1BQU1FLGFBQWFDLElBQUk7UUFDeEJiLElBQUlHLElBQUksQ0FBQztJQUNiLEVBQUUsT0FBT0MsT0FBTztRQUNaLE9BQVFKLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBQ0MsU0FBUTtRQUE4QjtJQUN4RTtBQUNGO0FBSUEsaUVBQWVWLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teW1vbmdvZGF0YS8uL3BhZ2VzL2FwaS9jdXN0b21lcnMvaW5kZXguanM/YzIwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXlEYXRhIGZyb20gXCJAL21vZGVscy9teWRhdGFcIjtcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIkAvdXRpbHMvZGJDb25uZWN0XCI7XG5pbXBvcnQgbmMgZnJvbSBcIm5leHQtY29ubmVjdFwiO1xuXG5kYkNvbm5lY3QoKVxuXG5cbmNvbnN0IGhhbmRsZXIgPSBuYygpLmdldChhc3luYyhyZXEsIHJlcykgPT4ge1xuICAgXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY3VzdG9tZXJzID0gYXdhaXQgTXlEYXRhLmZpbmQoe30pXG4gICAgICAgIHJlcy5zZW5kKGN1c3RvbWVycyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuICByZXMuc3RhdHVzKDQwMCkuanNvbih7bWVzc2FnZTonU29ycnkgc29tZXRoaW5nIHdlbnQgd3JvbmcgISd9KTtcbiAgICB9XG4gICBcbiAgIFxuICB9KS5wb3N0KGFzeW5jKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3Qge25hbWUsIGRhdGV9ID0gcmVxLmJvZHlcbiAgICBjb25zdCBuZXdDdXN0b21lcnMgPSBuZXcgTXlEYXRhKHtuYW1lLCBkYXRlfSlcbiAgICB0cnkge1xuICAgICAgICAgYXdhaXQgbmV3Q3VzdG9tZXJzLnNhdmUoKVxuICAgICAgICByZXMuc2VuZCgnTmV3IEN1c3RvbWVyIGFkZGVkICEnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gIHJlcy5zdGF0dXMoNDAwKS5qc29uKHttZXNzYWdlOidTb3JyeSBzb21ldGhpbmcgd2VudCB3cm9uZyAhJ30pO1xuICAgIH1cbiAgfSlcblxuXG5cbiAgZXhwb3J0IGRlZmF1bHQgaGFuZGxlciJdLCJuYW1lcyI6WyJNeURhdGEiLCJkYkNvbm5lY3QiLCJuYyIsImhhbmRsZXIiLCJnZXQiLCJyZXEiLCJyZXMiLCJjdXN0b21lcnMiLCJmaW5kIiwic2VuZCIsImVycm9yIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJwb3N0IiwibmFtZSIsImRhdGUiLCJib2R5IiwibmV3Q3VzdG9tZXJzIiwic2F2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/customers/index.js\n");

/***/ }),

/***/ "(api)/./utils/dbConnect.js":
/*!****************************!*\
  !*** ./utils/dbConnect.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dbConnect)\n/* harmony export */ });\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nasync function dbConnect() {\n    try {\n        await mongoose.connect(\"mongodb+srv://mohammad:mohammad@cluster0.apvdq.mongodb.net/mydata\", {\n            useUnifiedTopology: true,\n            useNewUrlParser: true\n        });\n        console.log(\"Connected successfully !\");\n    } catch (error) {\n        console.log(error);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYkNvbm5lY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFdBQVdDLG1CQUFPQSxDQUFDO0FBRVQsZUFBZUMsWUFBWTtJQUN2QyxJQUFJO1FBQ0YsTUFBTUYsU0FBU0csT0FBTyxDQUFDLHFFQUN2QjtZQUFDQyxvQkFBbUIsSUFBSTtZQUFHQyxpQkFBZ0IsSUFBSTtRQUFBO1FBRS9DQyxRQUFRQyxHQUFHLENBQUM7SUFFZCxFQUFFLE9BQU9DLE9BQU87UUFDWkYsUUFBUUMsR0FBRyxDQUFDQztJQUNoQjtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teW1vbmdvZGF0YS8uL3V0aWxzL2RiQ29ubmVjdC5qcz9jM2NlIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcblxuZXhwb3J0IGRlZmF1bHQgIGFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdCgnbW9uZ29kYitzcnY6Ly9tb2hhbW1hZDptb2hhbW1hZEBjbHVzdGVyMC5hcHZkcS5tb25nb2RiLm5ldC9teWRhdGEnICxcbiAgICAgIHt1c2VVbmlmaWVkVG9wb2xvZ3k6dHJ1ZSAsIHVzZU5ld1VybFBhcnNlcjp0cnVlfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgc3VjY2Vzc2Z1bGx5ICEnKVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxufVxuXG4gIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsImRiQ29ubmVjdCIsImNvbm5lY3QiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VOZXdVcmxQYXJzZXIiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/dbConnect.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/customers/index.js"));
module.exports = __webpack_exports__;

})();