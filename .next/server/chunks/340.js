"use strict";
exports.id = 340;
exports.ids = [340];
exports.modules = {

/***/ 193:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "useLoader", ({
    enumerable: true,
    get: ()=>useLoader
}));
const _react = __webpack_require__(689);
function useLoader() {
    const [loader, setLoader] = (0, _react.useState)("hidden");
    //    const obj = {loader , setLoader}
    return {
        loader,
        setLoader
    };
}
module.exports = {
    useLoader
};


/***/ }),

/***/ 312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
// Layout.js


const Layout = ({ visible , children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "loader",
                style: {
                    visibility: `${visible}`
                }
            }),
            children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);


/***/ }),

/***/ 340:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Add),
/* harmony export */   "url": () => (/* binding */ url)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(518);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(447);
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primereact_datatable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(145);
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primereact_column__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(648);
/* harmony import */ var primereact_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(333);
/* harmony import */ var primereact_toast__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primereact_toast__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(179);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _hook_useLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(193);
/* harmony import */ var _hook_useLoader__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_hook_useLoader__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _component_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(312);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_5__]);
axios__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const url = "https://project-gym-chi.vercel.app";
// export const url = "http://localhost:3000";
function Add() {
    const { loader , setLoader  } = (0,_hook_useLoader__WEBPACK_IMPORTED_MODULE_9__.useLoader)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const [customers, setCustomers] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const getCustomers = ()=>{
        setLoader("visible");
        axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(`${url}/api/customers`).then((res)=>{
            setCustomers(res.data);
        }).finally(()=>{
            setLoader("hidden");
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        getCustomers();
    }, []);
    const actionButton = (rowData)=>{
        const handleButtonClick = ()=>{
            // هنا يمكنك إرسال بيانات المستخدم المحدد عند النقر على الزر
            (0,primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_7__.confirmDialog)({
                message: "Do you want to delete this record?",
                header: "Delete Confirmation",
                defaultFocus: "reject",
                acceptClassName: "p-button-danger",
                accept: ()=>{
                    accept(rowData._id);
                },
                reject: ()=>{}
            });
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_1__.Button, {
                className: "bg-red-800 border-none outline-none",
                onClick: handleButtonClick,
                label: "حذف"
            })
        });
    };
    // const dateString = "2024-10-4";
    // const dateObject = new Date(dateString);
    // console.log(dateObject.getDate());
    // console.log(dateObject.getMonth() + 1);
    // console.log(dateObject.getFullYear());
    // console.log(searchCustomer);
    const toast = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const accept = (e)=>{
        axios__WEBPACK_IMPORTED_MODULE_5__["default"]["delete"](`${url}/api/customers/${e}`).then(()=>{
            getCustomers();
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_component_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        visible: loader,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_toast__WEBPACK_IMPORTED_MODULE_6__.Toast, {
                ref: toast
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_7__.ConfirmDialog, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-content-between mb-5 flex-wrap",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        type: "button",
                        label: "اضافة زبون",
                        onClick: ()=>{
                            router.push("/customers/add-customer");
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        type: "button",
                        label: "بحث عن زبون",
                        onClick: ()=>{
                            router.push("/customers/search-customer");
                        }
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "card",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(primereact_datatable__WEBPACK_IMPORTED_MODULE_3__.DataTable, {
                    value: customers,
                    showGridlines: true,
                    tableStyle: {
                        width: "100%"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_4__.Column, {
                            className: "text-center",
                            field: "name",
                            header: "الاسم"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_4__.Column, {
                            className: "text-center",
                            field: "date",
                            header: "تاريخ التسجيل"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_4__.Column, {
                            className: "text-center",
                            body: actionButton,
                            header: "تاريخ التسجيل"
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;