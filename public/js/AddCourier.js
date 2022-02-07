"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["AddCourier"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/courier/Add.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/courier/Add.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_CourierForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/CourierForm */ "./resources/js/views/courier/components/CourierForm.vue");
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
  components: {
    CourierForm: _components_CourierForm__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    submitForm: function submitForm() {
      //   console.log("submit form dlu");
      //mengirimkan submit pada ref formCourier dimana itu adalah komponen dari courier form
      // jadi membuat si komponen ini seolah2 mempunya submit
      // referensi https://v2.vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements
      this.$refs.formCourier.submit();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/courier/components/CourierForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/courier/components/CourierForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      courier: {
        name: "",
        email: "",
        password: "",
        outlet_id: "",
        photo: ""
      }
    };
  },
  created: function created() {
    this.getOutletOptions();

    if (this.routeName === "CourierEdit") {
      console.log("ini halaman edit"); //fungsi untuk mengambil data yang akan diedit dijalankan berdasarkan parameter id yang ada di query url
    }
  },
  destroyed: function destroyed() {
    this.clearForm();
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["errors"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)("outlet", {
    outlets: function outlets(state) {
      return state.outletOptions;
    }
  })), {}, {
    routeName: function routeName() {
      return this.$route.name;
    }
  }),
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)("outlet", ["getOutletOptions"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)("courier", ["submitCourier", "updateCourier", "getCourier"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)("courier", ["SET_ID_UPDATE"])), {}, {
    // ambil file ketika file diupload di form input file
    uploadImage: function uploadImage(event) {
      this.courier.photo = event.target.files[0];
    },
    submit: function submit() {
      var _this = this;

      // buat dlu formdata untuk menampung nilai pada field input termasuk input file
      var courierForm = new FormData();
      courierForm.append("name", this.courier.name);
      courierForm.append("email", this.courier.email);
      courierForm.append("password", this.courier.password);
      courierForm.append("outlet_id", this.courier.outlet_id);
      courierForm.append("photo", this.courier.photo);

      switch (this.routeName) {
        case "CourierAdd":
          console.log("this and example for add a courier"); //   kirim data ke vuex action dengan membawa payload

          this.submitCourier(courierForm).then(function () {
            _this.clearForm();

            _this.$router.push({
              name: "CourierData"
            });

            setTimeout(function () {
              _this.$swal({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                icon: "success",
                title: "Courier has been successfully added"
              });
            }, 1000);
          });
          break;

        case "CourierEdit":
          console.log("this is an example for edit a courier");
          this.SET_ID_UPDATE(this.$route.params.id);
          this.updateCourier(courierForm).then(function () {
            _this.clearForm();

            _this.$router.push({
              name: "CourierData"
            });

            setTimeout(function () {
              _this.$swal({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                icon: "success",
                title: "Courier has been successfully updated"
              });
            }, 1000);
          });
          break;

        default:
          console.log("error on switch expression");
      }
    },
    clearForm: function clearForm() {
      this.courier = {
        name: "",
        email: "",
        password: "",
        outlet_id: "",
        photo: ""
      };
    }
  })
});

/***/ }),

/***/ "./resources/js/views/courier/Add.vue":
/*!********************************************!*\
  !*** ./resources/js/views/courier/Add.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Add_vue_vue_type_template_id_be020420_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=be020420&scoped=true& */ "./resources/js/views/courier/Add.vue?vue&type=template&id=be020420&scoped=true&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/js/views/courier/Add.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_be020420_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Add_vue_vue_type_template_id_be020420_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "be020420",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/courier/Add.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/courier/components/CourierForm.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/courier/components/CourierForm.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CourierForm_vue_vue_type_template_id_bbed964e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CourierForm.vue?vue&type=template&id=bbed964e&scoped=true& */ "./resources/js/views/courier/components/CourierForm.vue?vue&type=template&id=bbed964e&scoped=true&");
/* harmony import */ var _CourierForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CourierForm.vue?vue&type=script&lang=js& */ "./resources/js/views/courier/components/CourierForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CourierForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CourierForm_vue_vue_type_template_id_bbed964e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CourierForm_vue_vue_type_template_id_bbed964e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "bbed964e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/courier/components/CourierForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/courier/Add.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/courier/Add.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/courier/Add.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/courier/components/CourierForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/courier/components/CourierForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CourierForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CourierForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/courier/components/CourierForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CourierForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/courier/Add.vue?vue&type=template&id=be020420&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/courier/Add.vue?vue&type=template&id=be020420&scoped=true& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_be020420_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_be020420_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_be020420_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add.vue?vue&type=template&id=be020420&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/courier/Add.vue?vue&type=template&id=be020420&scoped=true&");


/***/ }),

/***/ "./resources/js/views/courier/components/CourierForm.vue?vue&type=template&id=bbed964e&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/views/courier/components/CourierForm.vue?vue&type=template&id=bbed964e&scoped=true& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourierForm_vue_vue_type_template_id_bbed964e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourierForm_vue_vue_type_template_id_bbed964e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourierForm_vue_vue_type_template_id_bbed964e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CourierForm.vue?vue&type=template&id=bbed964e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/courier/components/CourierForm.vue?vue&type=template&id=bbed964e&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/courier/Add.vue?vue&type=template&id=be020420&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/courier/Add.vue?vue&type=template&id=be020420&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body" },
        [_c("courier-form", { ref: "formCourier" })],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "card-footer" }, [
        _c(
          "div",
          { staticClass: "form-group" },
          [
            _c(
              "button",
              {
                staticClass: "btn btn-primary btn-sm",
                on: {
                  click: function ($event) {
                    $event.preventDefault()
                    return _vm.submitForm.apply(null, arguments)
                  },
                },
              },
              [
                _c("i", {
                  staticClass: "fa fa-save fa-fw mr-1",
                  attrs: { "aria-hidden": "true" },
                }),
                _vm._v("\n          Save\n        "),
              ]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "btn btn-warning btn-sm",
                attrs: { to: { name: "CourierData" } },
              },
              [_vm._v("Cancel")]
            ),
          ],
          1
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Add New Courier")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/courier/components/CourierForm.vue?vue&type=template&id=bbed964e&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/courier/components/CourierForm.vue?vue&type=template&id=bbed964e&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _vm.errors != ""
        ? _c(
            "b-alert",
            { attrs: { show: "", variant: "danger", dismissible: "" } },
            [_vm._v("Warning the given data was invalid")]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "name" } }, [_vm._v("Nama Lengkap")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.courier.name,
              expression: "courier.name",
            },
          ],
          staticClass: "form-control",
          class: { "is-invalid": _vm.errors.name },
          attrs: {
            type: "text",
            name: "name",
            id: "name",
            readonly: _vm.$route.name === "CourierEdit",
          },
          domProps: { value: _vm.courier.name },
          on: {
            input: function ($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.courier, "name", $event.target.value)
            },
          },
        }),
        _vm._v(" "),
        _vm.errors.name
          ? _c("span", { staticClass: "error invalid-feedback" }, [
              _vm._v(_vm._s(_vm.errors.name[0])),
            ])
          : _vm._e(),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "email" } }, [_vm._v("Email")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.courier.email,
              expression: "courier.email",
            },
          ],
          staticClass: "form-control",
          class: { "is-invalid": _vm.errors.email },
          attrs: { type: "email", name: "email", id: "email" },
          domProps: { value: _vm.courier.email },
          on: {
            input: function ($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.courier, "email", $event.target.value)
            },
          },
        }),
        _vm._v(" "),
        _vm.errors.email
          ? _c("span", { staticClass: "error invalid-feedback" }, [
              _vm._v(_vm._s(_vm.errors.email[0])),
            ])
          : _vm._e(),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "password" } }, [_vm._v("Password")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.courier.password,
              expression: "courier.password",
            },
          ],
          staticClass: "form-control",
          class: { "is-invalid": _vm.errors.password },
          attrs: { type: "password", name: "password", id: "password" },
          domProps: { value: _vm.courier.password },
          on: {
            input: function ($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.courier, "password", $event.target.value)
            },
          },
        }),
        _vm._v(" "),
        _vm.errors.password
          ? _c("span", { staticClass: "error invalid-feedback" }, [
              _vm._v(_vm._s(_vm.errors.password[0])),
            ])
          : _vm._e(),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "outlet" } }, [_vm._v("Outlet")]),
        _vm._v(" "),
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.courier.outlet_id,
                expression: "courier.outlet_id",
              },
            ],
            staticClass: "form-control",
            class: { "is-invalid": _vm.errors.outlet_id },
            attrs: { name: "outlet", id: "outlet" },
            on: {
              change: function ($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function (o) {
                    return o.selected
                  })
                  .map(function (o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.$set(
                  _vm.courier,
                  "outlet_id",
                  $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                )
              },
            },
          },
          [
            _c("option", { attrs: { value: "" } }, [
              _vm._v("Silahkan Pilih Outlet"),
            ]),
            _vm._v(" "),
            _vm._l(_vm.outlets.data, function (row, index) {
              return _c("option", { key: index, domProps: { value: row.id } }, [
                _vm._v("\n        " + _vm._s(row.name) + "\n      "),
              ])
            }),
          ],
          2
        ),
        _vm._v(" "),
        _vm.errors.outlet_id
          ? _c("span", { staticClass: "error invalid-feedback" }, [
              _vm._v(_vm._s(_vm.errors.outlet_id[0])),
            ])
          : _vm._e(),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("div", { staticClass: "custom-file" }, [
          _c("input", {
            staticClass: "custom-file-input",
            class: { "is-invalid": _vm.errors.photo },
            attrs: {
              type: "file",
              id: "photo",
              name: "photo",
              accept: "image/*",
            },
            on: {
              change: function ($event) {
                return _vm.uploadImage($event)
              },
            },
          }),
          _vm._v(" "),
          _c(
            "label",
            { staticClass: "custom-file-label", attrs: { for: "photo" } },
            [_vm._v("Choose file")]
          ),
          _vm._v(" "),
          _vm.errors.photo
            ? _c("span", { staticClass: "error invalid-feedback" }, [
                _vm._v(_vm._s(_vm.errors.photo[0])),
              ])
            : _vm._e(),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);