"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["SetPermission"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/setting/roles/SetPermission.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/setting/roles/SetPermission.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
      role_user: {
        role: "",
        user_id: ""
      },
      role_selected: "",
      new_permissions: [],
      loading: false,
      alert_permission: false,
      alert_role: false
    };
  },
  created: function created() {
    this.getRoles(), this.getAllPermissions(), this.getUserLists();
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["errors"])), mapsState(["user", {
    users: function users(state) {
      return state.users;
    }
  }])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["rolePermission", {
    roles: function roles(state) {
      return state.roles;
    },
    permissions: function permissions(state) {
      return state.permissions;
    },
    rolePermissions: function rolePermissions(state) {
      return state.rolePermissions;
    }
  }])),
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)("user", ["getUserLists", "getUserAuthenticated"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)("rolePermission", ["setRoleUser", "getALLRoles", "getAllPermissions", "getRolePermission", "setRolePermission"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)("rolePermission", ["CLEAR_ROLE_PERMISSION"])), {}, {
    setRole: function setRole() {
      var _this = this;

      this.setRoleUser(this.role_user).then(function () {
        _this.alert_role = true;
        setTimeout(function () {
          _this.role_user = {
            role: "",
            user_id: ""
          };
          _this.alert_role = false;
        }, 1000);
      });
    },
    addPermission: function addPermission(name) {
      var index = this.new_permission.findIndex(function (x) {
        return x == name;
      });

      if (index == -1) {
        this.new_permission.push(name);
      } else {
        this.new_permission.splice(index, 1);
      }
    },
    checkPermission: function checkPermission() {
      var _this2 = this;

      this.loading = true;
      this.getRolePermission(this.role_selected).then(function () {
        _this2.loading = false;
        _this2.new_permission = _this2.role_permission;
      });
    },
    setPermission: function setPermission() {
      var _this3 = this;

      this.setRolePermission({
        role_id: this.role_selected,
        permissions: this.new_permission
      }).then(function () {
        if (res.status == "success") {
          _this3.alert_permission = true;
          setTimeout(function () {
            _this3.role_selected = "";
            _this3.new_permission = [];
            _this3.loading = false;
            _this3.alert_permission = false;

            _this3.CLEAR_ROLE_PERMISSION();
          }, 1000);
        }
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/setting/roles/SetPermission.vue?vue&type=style&index=0&id=3ac1a771&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/setting/roles/SetPermission.vue?vue&type=style&index=0&id=3ac1a771&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.tab-pane[data-v-3ac1a771] {\n  height: 150px;\n  overflow-y: scroll;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/setting/roles/SetPermission.vue?vue&type=style&index=0&id=3ac1a771&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/setting/roles/SetPermission.vue?vue&type=style&index=0&id=3ac1a771&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SetPermission_vue_vue_type_style_index_0_id_3ac1a771_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SetPermission.vue?vue&type=style&index=0&id=3ac1a771&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/setting/roles/SetPermission.vue?vue&type=style&index=0&id=3ac1a771&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SetPermission_vue_vue_type_style_index_0_id_3ac1a771_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SetPermission_vue_vue_type_style_index_0_id_3ac1a771_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/setting/roles/SetPermission.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/setting/roles/SetPermission.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SetPermission_vue_vue_type_template_id_3ac1a771_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SetPermission.vue?vue&type=template&id=3ac1a771&scoped=true& */ "./resources/js/views/setting/roles/SetPermission.vue?vue&type=template&id=3ac1a771&scoped=true&");
/* harmony import */ var _SetPermission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SetPermission.vue?vue&type=script&lang=js& */ "./resources/js/views/setting/roles/SetPermission.vue?vue&type=script&lang=js&");
/* harmony import */ var _SetPermission_vue_vue_type_style_index_0_id_3ac1a771_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SetPermission.vue?vue&type=style&index=0&id=3ac1a771&scoped=true&lang=css& */ "./resources/js/views/setting/roles/SetPermission.vue?vue&type=style&index=0&id=3ac1a771&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SetPermission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SetPermission_vue_vue_type_template_id_3ac1a771_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SetPermission_vue_vue_type_template_id_3ac1a771_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3ac1a771",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/setting/roles/SetPermission.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/setting/roles/SetPermission.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/setting/roles/SetPermission.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SetPermission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SetPermission.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/setting/roles/SetPermission.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SetPermission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/setting/roles/SetPermission.vue?vue&type=style&index=0&id=3ac1a771&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/views/setting/roles/SetPermission.vue?vue&type=style&index=0&id=3ac1a771&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SetPermission_vue_vue_type_style_index_0_id_3ac1a771_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SetPermission.vue?vue&type=style&index=0&id=3ac1a771&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/setting/roles/SetPermission.vue?vue&type=style&index=0&id=3ac1a771&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/setting/roles/SetPermission.vue?vue&type=template&id=3ac1a771&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/views/setting/roles/SetPermission.vue?vue&type=template&id=3ac1a771&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SetPermission_vue_vue_type_template_id_3ac1a771_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SetPermission_vue_vue_type_template_id_3ac1a771_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SetPermission_vue_vue_type_template_id_3ac1a771_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SetPermission.vue?vue&type=template&id=3ac1a771&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/setting/roles/SetPermission.vue?vue&type=template&id=3ac1a771&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/setting/roles/SetPermission.vue?vue&type=template&id=3ac1a771&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/setting/roles/SetPermission.vue?vue&type=template&id=3ac1a771&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-5" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _vm.alert_role
              ? _c(
                  "div",
                  {
                    staticClass: "alert alert-primary",
                    attrs: { role: "alert" },
                  },
                  [_vm._v("\n            Role has been added\n          ")]
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "form",
              {
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.setRole.apply(null, arguments)
                  },
                },
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "roleUser" } }, [
                    _vm._v("Role User"),
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.role_user.role,
                          expression: "role_user.role",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { name: "roleUser", id: "roleUser" },
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
                            _vm.role_user,
                            "role",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                      },
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [
                        _vm._v("Select Role"),
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.roles, function (row, index) {
                        return _c(
                          "option",
                          { key: index, domProps: { value: row.name } },
                          [
                            _vm._v(
                              "\n                  " +
                                _vm._s(row.name) +
                                "\n                "
                            ),
                          ]
                        )
                      }),
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _vm.errors.role_id
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.errors.role_id[0]) +
                            "\n              "
                        ),
                      ])
                    : _vm._e(),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "user" } }, [_vm._v("User")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.role_user.user_id,
                          expression: "role_user.user_id",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { name: "user", id: "user" },
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
                            _vm.role_user,
                            "user_id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                      },
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [
                        _vm._v("Select User"),
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.users, function (row, index) {
                        return _c(
                          "option",
                          { key: index, domProps: { value: row.id } },
                          [
                            _vm._v(
                              "\n                  " +
                                _vm._s(row.name) +
                                " - " +
                                _vm._s(row.email) +
                                "\n                "
                            ),
                          ]
                        )
                      }),
                    ],
                    2
                  ),
                ]),
                _vm._v(" "),
                _vm._m(1),
              ]
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col md-7" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(2),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "form",
              {
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.setPermission.apply(null, arguments)
                  },
                },
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "role" } }, [_vm._v("Role")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.role_selected,
                          expression: "role_selected",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { name: "role", id: "role" },
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
                          _vm.role_selected = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        },
                      },
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [
                        _vm._v("Select Role"),
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.roles, function (row, index) {
                        return _c(
                          "option",
                          { key: index, domProps: { value: row.id } },
                          [
                            _vm._v(
                              "\n                  " +
                                _vm._s(row.name) +
                                "\n                "
                            ),
                          ]
                        )
                      }),
                    ],
                    2
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary btn sm",
                      on: { click: _vm.checkPermission },
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.loading ? "Loading..." : "Check") +
                          "\n              "
                      ),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _vm.alert_permission
                    ? _c(
                        "div",
                        {
                          staticClass: "alert alert-primary",
                          attrs: { role: "alert" },
                        },
                        [
                          _vm._v(
                            "\n                Permission Has been assigned\n              "
                          ),
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "nav-tab-custom" }, [
                    _vm._m(3),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "tab-content",
                        attrs: { id: "myPermissionTab" },
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "tab-pane fade show active",
                            attrs: {
                              id: "tab_1",
                              role: "tabpanel",
                              "aria-labelledby": "tab-1",
                            },
                          },
                          [
                            _vm._l(_vm.permissions, function (row, index) {
                              return [
                                _c("input", {
                                  key: index,
                                  staticClass: "minimal-red",
                                  attrs: { type: "checkbox" },
                                  domProps: {
                                    value: row.name,
                                    checked:
                                      _vm.role_permission.findIndex(function (
                                        x
                                      ) {
                                        return x.name == row.name
                                      }) != -1,
                                  },
                                  on: {
                                    click: function ($event) {
                                      return _vm.addPermission(row.name)
                                    },
                                  },
                                }),
                                _vm._v(_vm._s(row.name) + " "),
                                _c("br", { key: "row" + index }),
                                _vm._v(" "),
                                (index + 1) % 4 === 0
                                  ? _c("br", { key: "enter" + index })
                                  : _vm._e(),
                              ]
                            }),
                          ],
                          2
                        ),
                      ]
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _vm._m(4),
              ]
            ),
          ]),
        ]),
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
      _c("h3", { staticClass: "card-title" }, [_vm._v("Assing Role to User")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c(
        "button",
        { staticClass: "btn btn-sm btn-primary", attrs: { type: "submit" } },
        [_vm._v("\n                Set Role\n              ")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Set Permission")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "ul",
      {
        staticClass: "nav nav-tabs",
        attrs: { id: "permissiontab", role: "tablist" },
      },
      [
        _c("li", { staticClass: "nav-item", attrs: { role: "presentation" } }, [
          _c(
            "a",
            {
              staticClass: "nav-link active",
              attrs: {
                href: "#tab_1",
                id: "tab1",
                "data-toggle": "tab",
                role: "tab",
                "aria-controls": "tab1",
                "aria-selected": "true",
              },
            },
            [_vm._v("Permission")]
          ),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c(
        "button",
        { staticClass: "btn btn-sm btn-primary", attrs: { type: "submit" } },
        [
          _c("i", { staticClass: "fas fa-save fa-fw mr-1" }),
          _vm._v("\n                Save & Set Permission\n              "),
        ]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);