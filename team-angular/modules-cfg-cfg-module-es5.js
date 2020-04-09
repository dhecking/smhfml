(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-cfg-cfg-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/cfg/cfg.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/cfg/cfg.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesCfgCfgComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"cfg\"></div>\n";
    /***/
  },

  /***/
  "./src/app/modules/cfg/cfg-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/modules/cfg/cfg-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: CfgRoutingModule */

  /***/
  function srcAppModulesCfgCfgRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CfgRoutingModule", function () {
      return CfgRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _cfg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cfg.component */
    "./src/app/modules/cfg/cfg.component.ts");

    const routes = [{
      path: "",
      component: _cfg_component__WEBPACK_IMPORTED_MODULE_3__["CfgComponent"]
    }];
    let CfgRoutingModule = class CfgRoutingModule {
      constructor() {
        console.log("CfgRoutingModule::constructor");
      }

    };
    CfgRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: []
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CfgRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/cfg/cfg.component.css":
  /*!***********************************************!*\
    !*** ./src/app/modules/cfg/cfg.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesCfgCfgComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#settings {\n  height: 100%;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jZmcvY2ZnLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jZmcvY2ZnLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2V0dGluZ3Mge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/modules/cfg/cfg.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/modules/cfg/cfg.component.ts ***!
    \**********************************************/

  /*! exports provided: CfgComponent */

  /***/
  function srcAppModulesCfgCfgComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CfgComponent", function () {
      return CfgComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let CfgComponent = class CfgComponent {
      constructor() {
        console.log("CfgComponent::constructor");
      }

    };
    CfgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-cfg",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cfg.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/cfg/cfg.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cfg.component.css */
      "./src/app/modules/cfg/cfg.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CfgComponent);
    /***/
  },

  /***/
  "./src/app/modules/cfg/cfg.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/modules/cfg/cfg.module.ts ***!
    \*******************************************/

  /*! exports provided: CfgModule */

  /***/
  function srcAppModulesCfgCfgModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CfgModule", function () {
      return CfgModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _cfg_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cfg-routing.module */
    "./src/app/modules/cfg/cfg-routing.module.ts");
    /* harmony import */


    var _cfg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./cfg.component */
    "./src/app/modules/cfg/cfg.component.ts");

    let CfgModule = class CfgModule {
      constructor() {
        console.log("CfgModule::constructor");
      }

    };
    CfgModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_cfg_component__WEBPACK_IMPORTED_MODULE_4__["CfgComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _cfg_routing_module__WEBPACK_IMPORTED_MODULE_3__["CfgRoutingModule"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CfgModule);
    /***/
  }
}]);
//# sourceMappingURL=modules-cfg-cfg-module-es5.js.map