"use strict";
(() => {
var exports = {};
exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(325);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

(0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
function handler(req, res) {
    res.status(200).json({
        name: "John Doe"
    });
}


/***/ }),

/***/ 325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ dbConnect)
/* harmony export */ });
const mongoose = __webpack_require__(185);
async function dbConnect() {
    try {
        await mongoose.connect("mongodb+srv://mohammad:mohammad@cluster0.apvdq.mongodb.net/mydata", {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log("Connected successfully !");
    } catch (error) {
        console.log(error);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(271));
module.exports = __webpack_exports__;

})();