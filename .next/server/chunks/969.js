"use strict";
exports.id = 969;
exports.ids = [969];
exports.modules = {

/***/ 969:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Add),
/* harmony export */   "url": () => (/* binding */ url)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primereact_inputtext__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primereact_inputnumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(514);
/* harmony import */ var primereact_inputnumber__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primereact_inputnumber__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(447);
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primereact_datatable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(145);
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primereact_column__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(648);
/* harmony import */ var primereact_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(333);
/* harmony import */ var primereact_toast__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primereact_toast__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(179);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_7__]);
axios__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const url = "https://project-gym-chi.vercel.app";
// export const url = "http://localhost:3000";
function Add() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const [year, setYear] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const [customers, setCustomers] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const getCustomers = ()=>{
        axios__WEBPACK_IMPORTED_MODULE_7__["default"].get(`${url}/api/customers`).then((res)=>{
            setCustomers(res.data);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        getCustomers();
    }, []);
    const actionButton = (rowData)=>{
        const handleButtonClick = ()=>{
            // هنا يمكنك إرسال بيانات المستخدم المحدد عند النقر على الزر
            (0,primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_9__.confirmDialog)({
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
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
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
    const toast = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    const accept = (e)=>{
        console.log("accept", e);
        axios__WEBPACK_IMPORTED_MODULE_7__["default"]["delete"](`${url}/api/customers/${e}`).then(()=>{
            getCustomers();
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_toast__WEBPACK_IMPORTED_MODULE_8__.Toast, {
                ref: toast
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_9__.ConfirmDialog, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-content-between mb-5 flex-wrap",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        type: "button",
                        label: "اضافة زبون",
                        onClick: ()=>{
                            router.push("/customers/add-customer");
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
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
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(primereact_datatable__WEBPACK_IMPORTED_MODULE_5__.DataTable, {
                    value: customers,
                    showGridlines: true,
                    tableStyle: {
                        width: "100%"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_6__.Column, {
                            className: "text-center",
                            field: "name",
                            header: "الاسم"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_6__.Column, {
                            className: "text-center",
                            field: "date",
                            header: "تاريخ التسجيل"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_6__.Column, {
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