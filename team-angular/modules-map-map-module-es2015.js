(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-map-map-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/map/map.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/map/map.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #googlemaps id=\"googlemaps\"></div>");

/***/ }),

/***/ "./src/app/modules/map/map-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/map/map-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MapRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapRoutingModule", function() { return MapRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map.component */ "./src/app/modules/map/map.component.ts");




const routes = [
    {
        path: "",
        component: _map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"]
    }
];
let MapRoutingModule = class MapRoutingModule {
    constructor() {
        console.log("MapRoutingModule::constructor");
    }
};
MapRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: []
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MapRoutingModule);



/***/ }),

/***/ "./src/app/modules/map/map.component.css":
/*!***********************************************!*\
  !*** ./src/app/modules/map/map.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#googlemaps {\n  height: 100%;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYXAvbWFwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYXAvbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZ29vZ2xlbWFwcyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/modules/map/map.component.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/map/map.component.ts ***!
  \**********************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const MapOpts = {
    disableDefaultUI: true,
    gestureHandling: "none",
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 18,
    backgroundColor: "#1d2c4d",
    noClear: true,
    styles: [
        {
            elementType: "geometry",
            stylers: [
                {
                    color: "#1d2c4d"
                }
            ]
        },
        {
            elementType: "labels",
            stylers: [
                {
                    visibility: "off"
                }
            ]
        },
        {
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#8ec3b9"
                }
            ]
        },
        {
            elementType: "labels.text.stroke",
            stylers: [
                {
                    color: "#1a3646"
                }
            ]
        },
        {
            featureType: "administrative.country",
            elementType: "geometry.stroke",
            stylers: [
                {
                    color: "#4b6878"
                }
            ]
        },
        {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#64779e"
                }
            ]
        },
        {
            featureType: "administrative.neighborhood",
            stylers: [
                {
                    visibility: "off"
                }
            ]
        },
        {
            featureType: "administrative.province",
            elementType: "geometry.stroke",
            stylers: [
                {
                    color: "#4b6878"
                }
            ]
        },
        {
            featureType: "landscape.man_made",
            elementType: "geometry.stroke",
            stylers: [
                {
                    color: "#334e87"
                }
            ]
        },
        {
            featureType: "landscape.natural",
            elementType: "geometry",
            stylers: [
                {
                    color: "#023e58"
                }
            ]
        },
        {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
                {
                    color: "#283d6a"
                }
            ]
        },
        {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#6f9ba5"
                }
            ]
        },
        {
            featureType: "poi",
            elementType: "labels.text.stroke",
            stylers: [
                {
                    color: "#1d2c4d"
                }
            ]
        },
        {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#023e58"
                }
            ]
        },
        {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#3C7680"
                }
            ]
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [
                {
                    color: "#304a7d"
                }
            ]
        },
        {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#98a5be"
                }
            ]
        },
        {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [
                {
                    color: "#1d2c4d"
                }
            ]
        },
        {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
                {
                    color: "#2c6675"
                }
            ]
        },
        {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
                {
                    color: "#255763"
                }
            ]
        },
        {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#b0d5ce"
                }
            ]
        },
        {
            featureType: "road.highway",
            elementType: "labels.text.stroke",
            stylers: [
                {
                    color: "#023e58"
                }
            ]
        },
        {
            featureType: "transit",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#98a5be"
                }
            ]
        },
        {
            featureType: "transit",
            elementType: "labels.text.stroke",
            stylers: [
                {
                    color: "#1d2c4d"
                }
            ]
        },
        {
            featureType: "transit.line",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#283d6a"
                }
            ]
        },
        {
            featureType: "transit.station",
            elementType: "geometry",
            stylers: [
                {
                    color: "#3a4762"
                }
            ]
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [
                {
                    color: "#0e1626"
                }
            ]
        },
        {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#4e6d70"
                }
            ]
        }
    ]
};
const SymOpts = {
    path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
    fillColor: "#bff",
    fillOpacity: 0.8,
    scale: 10,
    strokeColor: '#4cf',
    strokeWeight: 2
};
const GeoOpts = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};
let MapComponent = class MapComponent {
    constructor() {
        this.geoSpeed = 0;
        this.geoHeading = 0;
        this.geoAltitude = 0;
        this.deviceAbsolute = true;
        this.deviceBank = 0;
        this.devicePitch = 0;
        this.deviceDirection = 0;
        this.deviceHeading = 0;
        this.deviceHeadingAccuracy = 0;
        console.log("MapComponent::constructor");
    }
    ngOnInit() {
        console.log("MapComponent::ngOnInit");
        this.initMap();
    }
    ngAfterViewInit() {
        console.log("MapComponent::ngAfterViewInit");
    }
    ngOnDestroy() {
        console.log("MapComponent::ngOnDestroy(" + this.watchPositionId + ")");
        navigator.geolocation.clearWatch(this.watchPositionId);
    }
    initMap() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.geoLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                    this.map = new google.maps.Map(this.mapElement.nativeElement, MapOpts);
                this.map.setCenter(this.geoLocation);
                this.marker = new google.maps.Marker();
                this.marker.setMap(this.map);
                this.marker.setPosition(this.geoLocation);
                this.marker.setIcon(SymOpts);
            }, (error) => {
                console.error(error.message);
            }, GeoOpts);
            this.watchPositionId = navigator.geolocation.watchPosition((position) => {
                this.geoLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                    this.map.panTo(this.geoLocation);
                this.marker.setPosition(this.geoLocation);
                this.updateDashboard(position);
            }, (error) => {
                console.error(error.message);
            }, GeoOpts);
            window.addEventListener('deviceorientation', (event) => {
                this.displayDeviceOrientation(event);
            }, true);
        }
    }
    updateDashboard(position) {
        this.geoSpeed = parseInt(Math.round(position.coords.speed).toFixed(0), 10);
        this.geoHeading = parseInt(Math.round(position.coords.heading).toFixed(0), 10);
        this.geoAltitude = parseInt(Math.round(position.coords.altitude).toFixed(0), 10);
        // document.getElementById("geoSpeed").innerText = this.geoSpeed + "";
        // document.getElementById("geoHeading").innerText = this.geoHeading + "";
        // document.getElementById("geoAltitude").innerText = this.geoAltitude + "";
    }
    displayDeviceOrientation(event) {
        this.deviceAbsolute = event.absolute;
        this.deviceBank = parseInt(Math.round(event.alpha).toFixed(0), 10);
        this.devicePitch = parseInt(Math.round(event.beta).toFixed(0), 10);
        this.deviceDirection = parseInt(Math.round(event.gamma).toFixed(0), 10);
        // document.getElementById("deviceDirection").innerText = this.deviceDirection + "";
        // document.getElementById("deviceHeading").innerText = this.deviceHeading + "";
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("googlemaps", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], MapComponent.prototype, "mapElement", void 0);
MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-map",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/map/map.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./map.component.css */ "./src/app/modules/map/map.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MapComponent);



/***/ }),

/***/ "./src/app/modules/map/map.module.ts":
/*!*******************************************!*\
  !*** ./src/app/modules/map/map.module.ts ***!
  \*******************************************/
/*! exports provided: MapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModule", function() { return MapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-routing.module */ "./src/app/modules/map/map-routing.module.ts");
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map.component */ "./src/app/modules/map/map.component.ts");




let MapModule = class MapModule {
    constructor() {
        console.log("MapModule::constructor");
    }
};
MapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"]],
        imports: [_map_routing_module__WEBPACK_IMPORTED_MODULE_2__["MapRoutingModule"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MapModule);



/***/ })

}]);
//# sourceMappingURL=modules-map-map-module-es2015.js.map