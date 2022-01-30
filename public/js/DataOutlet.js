"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["DataOutlet"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/outlets/Data.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/outlets/Data.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      // field untuk b-table, pastikan keynya sesuai dengan field database
      // agar otomatis di render
      fields: [{
        key: "code",
        label: "Kode Outlet"
      }, {
        key: "name",
        label: "Nama Outlet"
      }, {
        key: "address",
        label: "Alamat"
      }, {
        key: "phone",
        label: "Telp"
      }, {
        key: "status",
        label: "Status"
      }, {
        key: "actions",
        label: "Actions"
      }],
      search: ""
    };
  },
  created: function created() {
    // sebelum componen diload, request data dari server
    this.getOutlets();
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)("outlet", {
    outlets: function outlets(state) {
      return state.outlets;
    }
  })), {}, {
    page: {
      get: function get() {
        // mengambil value page dari vuex module outlet
        return this.$store.state.outlet.page;
      },
      set: function set(val) {
        // apabila terjadi perubahan value dari page, maka state page
        // di vuex juga akan di ubah
        this.$store.commit("outlet/SET_PAGE", val);
      }
    }
  }),
  watch: {
    page: function page() {
      //   apabila value dari page brubah akan req data dari server
      this.getOutlets();
    },
    search: function search() {
      //apabila value dari search berubha
      //   maka akan req berdasarkan data search
      thi.getOutlets(this.search);
    }
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)("outlet", ["getOutlets", "removeOutlet"])), {}, {
    // ketika tombol remove/delete/hapus di klik, aka akan menjalankan method ini
    deleteOutlet: function deleteOutlet(id) {
      var _this = this;

      // tampilkan konfirmasi
      this.$swal({
        title: "Are you sure?",
        text: "this action will delete permanently",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Confirm"
      }).then(function (result) {
        //   jika setujui
        if (result.value) {
          // jalankan fungsi removeoutlet
          _this.removeOutlet(id);
        }
      });
    }
  })
});

/***/ }),

/***/ "./resources/js/views/outlets/Data.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/outlets/Data.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Data_vue_vue_type_template_id_0c7d3d9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Data.vue?vue&type=template&id=0c7d3d9c& */ "./resources/js/views/outlets/Data.vue?vue&type=template&id=0c7d3d9c&");
/* harmony import */ var _Data_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Data.vue?vue&type=script&lang=js& */ "./resources/js/views/outlets/Data.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Data_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Data_vue_vue_type_template_id_0c7d3d9c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Data_vue_vue_type_template_id_0c7d3d9c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/outlets/Data.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/outlets/Data.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/outlets/Data.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Data_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Data.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/outlets/Data.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Data_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/outlets/Data.vue?vue&type=template&id=0c7d3d9c&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/outlets/Data.vue?vue&type=template&id=0c7d3d9c& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Data_vue_vue_type_template_id_0c7d3d9c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Data_vue_vue_type_template_id_0c7d3d9c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Data_vue_vue_type_template_id_0c7d3d9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Data.vue?vue&type=template&id=0c7d3d9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/outlets/Data.vue?vue&type=template&id=0c7d3d9c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/outlets/Data.vue?vue&type=template&id=0c7d3d9c&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/outlets/Data.vue?vue&type=template&id=0c7d3d9c& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-md-12" }, [
    _c("div", { staticClass: "card" }, [
      _c(
        "div",
        { staticClass: "card-header" },
        [
          _c(
            "router-link",
            {
              staticClass: "btn btn-primary btn-sm btn-flat",
              attrs: { to: { name: "OutletAdd" } },
            },
            [_vm._v("Add Outlet")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "float-right" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.search,
                  expression: "search",
                },
              ],
              staticClass: "form-control",
              attrs: { type: "text", name: "Search", placeholder: "Search" },
              domProps: { value: _vm.search },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.search = $event.target.value
                },
              },
            }),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body" },
        [
          _c("b-table", {
            attrs: {
              striped: "",
              hover: "",
              bordered: "",
              items: _vm.outlets.data,
              fields: _vm.fields,
              "show-empty": "",
            },
            scopedSlots: _vm._u([
              {
                key: "cell(status)",
                fn: function (data) {
                  return [
                    data.item.status == 1
                      ? _c("span", { staticClass: "badge badge-success" }, [
                          _vm._v("Active"),
                        ])
                      : _c("span", { staticClass: "badge badge-default" }, [
                          _vm._v("Inactive"),
                        ]),
                  ]
                },
              },
              {
                key: "cell(actions)",
                fn: function (data) {
                  return [
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-warning btn-sm",
                        attrs: {
                          to: {
                            name: "OutletEdit",
                            params: { id: data.item.id },
                          },
                        },
                      },
                      [_vm._v("\n            Edit\n          ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger btn-sm",
                        on: {
                          click: function ($event) {
                            return _vm.deleteOutlet(data.item.id)
                          },
                        },
                      },
                      [_vm._v("\n            Delete\n          ")]
                    ),
                  ]
                },
              },
            ]),
          }),
          _vm._v(" "),
          _c("div", { staticClass: "row mt-2" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _vm.outlets.data
                ? _c("p", [
                    _c("i", {
                      staticClass: "fas fa-bars",
                      attrs: { "aria-hidden": "true" },
                    }),
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.outlets.data.length) +
                        " of " +
                        _vm._s(_vm.outlets.meta.total) +
                        " total data\n          "
                    ),
                  ])
                : _vm._e(),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c(
                "div",
                { staticClass: "float-right" },
                [
                  _vm.outlets.data && _vm.outlets.data.length > 0
                    ? _c("b-pagination", {
                        attrs: {
                          "total-rows": _vm.outlets.meta.total,
                          "per-page": _vm.outlets.meta.per_page,
                          "aria-controls": "outlets",
                        },
                        model: {
                          value: _vm.page,
                          callback: function ($$v) {
                            _vm.page = $$v
                          },
                          expression: "page",
                        },
                      })
                    : _vm._e(),
                ],
                1
              ),
            ]),
          ]),
        ],
        1
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);