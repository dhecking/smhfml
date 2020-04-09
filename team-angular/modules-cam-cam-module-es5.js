(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-cam-cam-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/cam/cam.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/cam/cam.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesCamCamComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Camera -->\n<main id=\"cam\">\n    <!-- Camera sensor -->\n    <canvas id=\"cam--sensor\"></canvas>\n    <!-- Camera view -->\n    <video id=\"cam--view\" autoplay playsinline></video>\n    <!-- Camera output -->\n    <img src=\"//:0\" alt=\"\" id=\"cam--output\">\n    <!-- Camera trigger -->\n    <button id=\"cam--trigger\"></button>\n</main>";
    /***/
  },

  /***/
  "./src/app/modules/cam/cam-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/modules/cam/cam-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: CamRoutingModule */

  /***/
  function srcAppModulesCamCamRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CamRoutingModule", function () {
      return CamRoutingModule;
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


    var _cam_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cam.component */
    "./src/app/modules/cam/cam.component.ts");

    const routes = [{
      path: "",
      component: _cam_component__WEBPACK_IMPORTED_MODULE_3__["CamComponent"]
    }];
    let CamRoutingModule = class CamRoutingModule {
      constructor() {
        console.log("CamRoutingModule::constructor");
      }

    };
    CamRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: []
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CamRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/cam/cam.component.css":
  /*!***********************************************!*\
    !*** ./src/app/modules/cam/cam.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesCamCamComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#cam, #cam--view, #cam--sensor, #cam--output{\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n#cam--view, #cam--sensor, #cam--output{\n  -webkit-transform: scaleX(-1);\n          transform: scaleX(-1);\n  -webkit-filter: FlipH;\n          filter: FlipH;\n}\n\n#cam--trigger{\n  position: fixed;\n  bottom: 80px;\n  left: calc(50% - 40px);\n  width: 80px;\n  height: 80px;\n  border-radius: 90px;\n  background:  #bff;\n  border: 5px solid #4cf;\n}\n\n.taken{\n  height: 100px!important;\n  width: 100px!important;\n  -webkit-transition: all 0.5s ease-in;\n  transition: all 0.5s ease-in;\n  border: solid 3px white;\n  box-shadow: 0 5px 10px 0 rgba(0,0,0,0.2);\n  top: 20px;\n  right: 20px;\n  z-index: 2;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jYW0vY2FtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQkFBaUI7S0FBakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNkJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQixxQkFBYTtVQUFiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLG9DQUE0QjtFQUE1Qiw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLHdDQUF3QztFQUN4QyxTQUFTO0VBQ1QsV0FBVztFQUNYLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2FtL2NhbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NhbSwgI2NhbS0tdmlldywgI2NhbS0tc2Vuc29yLCAjY2FtLS1vdXRwdXR7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbiNjYW0tLXZpZXcsICNjYW0tLXNlbnNvciwgI2NhbS0tb3V0cHV0e1xuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gIGZpbHRlcjogRmxpcEg7XG59XG5cbiNjYW0tLXRyaWdnZXJ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA4MHB4O1xuICBsZWZ0OiBjYWxjKDUwJSAtIDQwcHgpO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA5MHB4O1xuICBiYWNrZ3JvdW5kOiAgI2JmZjtcbiAgYm9yZGVyOiA1cHggc29saWQgIzRjZjtcbn1cblxuLnRha2Vue1xuICBoZWlnaHQ6IDEwMHB4IWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMHB4IWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgYm9yZGVyOiBzb2xpZCAzcHggd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggMCByZ2JhKDAsMCwwLDAuMik7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIHotaW5kZXg6IDI7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/cam/cam.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/modules/cam/cam.component.ts ***!
    \**********************************************/

  /*! exports provided: CamComponent */

  /***/
  function srcAppModulesCamCamComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CamComponent", function () {
      return CamComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let CamComponent = class CamComponent {
      constructor() {
        console.log("CamComponent::constructor");
      }

      ngOnInit() {
        this.camView = document.querySelector("#cam--view");
        this.camOutput = document.querySelector("#cam--output");
        this.camSensor = document.querySelector("#cam--sensor");
        this.camTrigger = document.querySelector("#cam--trigger");
        this.camStart();
      }

      ngOnDestroy() {
        this.camStop();
      }

      camStart() {
        let deviceId;
        navigator.mediaDevices.enumerateDevices().then(devices => {
          devices = devices.filter(d => d.kind === "videoinput");
          console.log(devices);
          deviceId = devices[0].deviceId;
        }); // const constraints = { video: {deviceId}, audio: true };

        const hdConstraints = {
          video: {
            width: {
              min: 1280
            },
            height: {
              min: 720
            }
          }
        };
        navigator.mediaDevices.getUserMedia(hdConstraints).then(stream => {
          this.stream = stream;
          this.camView.srcObject = stream;
        }).catch(error => {
          console.log(error.message);
        });

        this.camTrigger.onclick = () => {
          this.camSensor.width = this.camView.videoWidth;
          this.camSensor.height = this.camView.videoHeight;
          this.camSensor.getContext("2d").drawImage(this.camView, 0, 0);
          this.camOutput.src = this.camSensor.toDataURL("image/webp");
          this.camOutput.classList.add("taken");
        };
      }

      camStop() {
        this.stream.getVideoTracks().forEach(track => track.stop());
        this.camView.srcObject = null;
      }

    };
    CamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-cam",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cam.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/cam/cam.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cam.component.css */
      "./src/app/modules/cam/cam.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CamComponent);
    /***/
  },

  /***/
  "./src/app/modules/cam/cam.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/modules/cam/cam.module.ts ***!
    \*******************************************/

  /*! exports provided: CamModule */

  /***/
  function srcAppModulesCamCamModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CamModule", function () {
      return CamModule;
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


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _cam_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./cam-routing.module */
    "./src/app/modules/cam/cam-routing.module.ts");
    /* harmony import */


    var _cam_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cam.component */
    "./src/app/modules/cam/cam.component.ts");

    let CamModule = class CamModule {
      constructor(matIconRegistry) {
        this.matIconRegistry = matIconRegistry;
        console.log("CamModule::constructor");
      }

    };

    CamModule.ctorParameters = () => [{
      type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"]
    }];

    CamModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_cam_component__WEBPACK_IMPORTED_MODULE_5__["CamComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _cam_routing_module__WEBPACK_IMPORTED_MODULE_4__["CamRoutingModule"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"]])], CamModule);
    /***/
  }
}]);
//# sourceMappingURL=modules-cam-cam-module-es5.js.map