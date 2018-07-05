(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["all-info-all-info-module"],{

/***/ "./src/app/all-info/all-info.component.css":
/*!*************************************************!*\
  !*** ./src/app/all-info/all-info.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/all-info/all-info.component.html":
/*!**************************************************!*\
  !*** ./src/app/all-info/all-info.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-5\" *ngIf=\"types['attractions_types']\">\r\n  <app-attractions-type [types]=\"types['attractions_types']\"></app-attractions-type>\r\n\r\n  <app-restaurants-type [types]=\"types['restaurant_types']\"></app-restaurants-type>\r\n\r\n\r\n  <app-shelters-type [types]=\"types['shelter_types']\"></app-shelters-type>\r\n\r\n  <app-transportations-type [types]=\"types['transportation_types']\"></app-transportations-type>\r\n\r\n  <app-otherplace-type></app-otherplace-type>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/all-info/all-info.component.ts":
/*!************************************************!*\
  !*** ./src/app/all-info/all-info.component.ts ***!
  \************************************************/
/*! exports provided: AllInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllInfoComponent", function() { return AllInfoComponent; });
/* harmony import */ var _services_type_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/type.service */ "./src/app/services/type.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-progressbar */ "./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllInfoComponent = /** @class */ (function () {
    function AllInfoComponent(ngProgress, typeService) {
        this.ngProgress = ngProgress;
        this.typeService = typeService;
        this.types = {};
    }
    AllInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngProgress.start();
        var subscription = this.typeService.getTypes().subscribe(function (res) {
            _this.types = res.json()['data'];
            _this.ngProgress.done();
            subscription.unsubscribe();
        }, function (error) {
            _this.ngProgress.done();
            subscription.unsubscribe();
        });
    };
    AllInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-info',
            template: __webpack_require__(/*! ./all-info.component.html */ "./src/app/all-info/all-info.component.html"),
            styles: [__webpack_require__(/*! ./all-info.component.css */ "./src/app/all-info/all-info.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_progressbar__WEBPACK_IMPORTED_MODULE_2__["NgProgress"],
            _services_type_service__WEBPACK_IMPORTED_MODULE_0__["TypeService"]])
    ], AllInfoComponent);
    return AllInfoComponent;
}());



/***/ }),

/***/ "./src/app/all-info/all-info.module.ts":
/*!*********************************************!*\
  !*** ./src/app/all-info/all-info.module.ts ***!
  \*********************************************/
/*! exports provided: AllInfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllInfoModule", function() { return AllInfoModule; });
/* harmony import */ var _allinfo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allinfo-routing.module */ "./src/app/all-info/allinfo-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _all_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-info.component */ "./src/app/all-info/all-info.component.ts");
/* harmony import */ var _restaurants_type_restaurants_type_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./restaurants-type/restaurants-type.component */ "./src/app/all-info/restaurants-type/restaurants-type.component.ts");
/* harmony import */ var _attractions_type_attractions_type_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attractions-type/attractions-type.component */ "./src/app/all-info/attractions-type/attractions-type.component.ts");
/* harmony import */ var _shelters_type_shelters_type_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shelters-type/shelters-type.component */ "./src/app/all-info/shelters-type/shelters-type.component.ts");
/* harmony import */ var _transportations_type_transportations_type_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transportations-type/transportations-type.component */ "./src/app/all-info/transportations-type/transportations-type.component.ts");
/* harmony import */ var _otherplace_type_otherplace_type_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./otherplace-type/otherplace-type.component */ "./src/app/all-info/otherplace-type/otherplace-type.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Component






var AllInfo_component = [
    _all_info_component__WEBPACK_IMPORTED_MODULE_3__["AllInfoComponent"],
    _restaurants_type_restaurants_type_component__WEBPACK_IMPORTED_MODULE_4__["RestaurantsTypeComponent"],
    _attractions_type_attractions_type_component__WEBPACK_IMPORTED_MODULE_5__["AttractionsTypeComponent"],
    _shelters_type_shelters_type_component__WEBPACK_IMPORTED_MODULE_6__["SheltersTypeComponent"],
    _transportations_type_transportations_type_component__WEBPACK_IMPORTED_MODULE_7__["TransportationsTypeComponent"],
    _otherplace_type_otherplace_type_component__WEBPACK_IMPORTED_MODULE_8__["OtherplaceTypeComponent"]
];
var AllInfoModule = /** @class */ (function () {
    function AllInfoModule() {
    }
    AllInfoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _allinfo_routing_module__WEBPACK_IMPORTED_MODULE_0__["AllInfoRoutingModule"]
            ],
            declarations: AllInfo_component.slice(),
            exports: [AllInfo_component],
            providers: []
        })
    ], AllInfoModule);
    return AllInfoModule;
}());



/***/ }),

/***/ "./src/app/all-info/allinfo-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/all-info/allinfo-routing.module.ts ***!
  \****************************************************/
/*! exports provided: AllInfoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllInfoRoutingModule", function() { return AllInfoRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _all_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-info.component */ "./src/app/all-info/all-info.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _all_info_component__WEBPACK_IMPORTED_MODULE_2__["AllInfoComponent"]
    }];
var AllInfoRoutingModule = /** @class */ (function () {
    function AllInfoRoutingModule() {
    }
    AllInfoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        })
    ], AllInfoRoutingModule);
    return AllInfoRoutingModule;
}());



/***/ }),

/***/ "./src/app/all-info/attractions-type/attractions-type.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/all-info/attractions-type/attractions-type.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toparea {\r\n    margin-top: 10em;\r\n}"

/***/ }),

/***/ "./src/app/all-info/attractions-type/attractions-type.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/all-info/attractions-type/attractions-type.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n  <div class=\"text-center p-3 mt-5\">\r\n    <h1 class=\"mt-5\"><b>ສະຖານທີ່ທ່ອງທ່ຽວ</b></h1>\r\n  </div>\r\n\r\n  <div class=\"container mb-2\">\r\n    <div class=\"row\">\r\n      <div class=\"col-6 col-md-4 col-lg-3\" *ngFor=\"let type of types\">\r\n        <div class=\"card bg-success text-white mb-3\">\r\n          <div class=\"card-header text-center\">\r\n            <h4 class=\"{{hTc}}\">{{type['name']}}</h4>\r\n          </div>\r\n          <div class=\"d-flex justify-content-center\">\r\n            <button class=\"btn bmd-btn-fab text-white\" [routerLink]=\"['/attraction','type',type['_id']]\">\r\n              <i class=\"fa fa-arrow-circle-right\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/all-info/attractions-type/attractions-type.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/all-info/attractions-type/attractions-type.component.ts ***!
  \*************************************************************************/
/*! exports provided: AttractionsTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttractionsTypeComponent", function() { return AttractionsTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AttractionsTypeComponent = /** @class */ (function () {
    function AttractionsTypeComponent(route) {
        this.route = route;
        this.hTc = 'h4';
    }
    AttractionsTypeComponent.prototype.ngOnInit = function () {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth <= 560) {
            this.hTc = 'h5';
        }
    };
    AttractionsTypeComponent.prototype.openTypeAttrac = function (attracType) {
        this.route.navigate(['/attraction', attracType]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AttractionsTypeComponent.prototype, "types", void 0);
    AttractionsTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-attractions-type',
            template: __webpack_require__(/*! ./attractions-type.component.html */ "./src/app/all-info/attractions-type/attractions-type.component.html"),
            styles: [__webpack_require__(/*! ./attractions-type.component.css */ "./src/app/all-info/attractions-type/attractions-type.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AttractionsTypeComponent);
    return AttractionsTypeComponent;
}());



/***/ }),

/***/ "./src/app/all-info/otherplace-type/otherplace-type.component.css":
/*!************************************************************************!*\
  !*** ./src/app/all-info/otherplace-type/otherplace-type.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/all-info/otherplace-type/otherplace-type.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/all-info/otherplace-type/otherplace-type.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n  <div class=\"text-center p-3 mt-3\">\r\n    <h1 class=\"mt-5\"><b>ຂໍ້ມູນເພີ່ມເຕີມ</b></h1>\r\n  </div>\r\n\r\n  <div class=\"container mb-2\">\r\n    <div class=\"row\">\r\n      <div class=\"col-6 col-md-4 col-lg-3\">\r\n        <div class=\"card bg-info text-white mb-3\">\r\n          <div class=\"card-header text-center\">\r\n            <h4 class=\"{{hTc}}\">ບໍລິສັດນຳທ່ຽວ</h4>\r\n          </div>\r\n          <div class=\"d-flex justify-content-center\">\r\n            <button class=\"btn bmd-btn-fab text-white\" [routerLink]=\"['/company']\">\r\n              <i class=\"fa fa-arrow-circle-right\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6 col-md-4 col-lg-3\">\r\n        <div class=\"card bg-info text-white mb-3\">\r\n          <div class=\"card-header text-center\">\r\n            <h4 class=\"{{hTc}}\">ສູນອິນເຕີເນັດ</h4>\r\n          </div>\r\n          <div class=\"d-flex justify-content-center\">\r\n            <button class=\"btn bmd-btn-fab text-white\" [routerLink]=\"['/another', 'internet']\">\r\n              <i class=\"fa fa-arrow-circle-right\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6 col-md-4 col-lg-3\">\r\n        <div class=\"card bg-info text-white mb-3\">\r\n          <div class=\"card-header text-center\">\r\n            <h4 class=\"{{hTc}}\">ສະຖານທີ່ອື່ນໆ</h4>\r\n          </div>\r\n          <div class=\"d-flex justify-content-center\">\r\n            <button class=\"btn bmd-btn-fab text-white\" [routerLink]=\"['/another']\" [queryParams]=\"{q:'info'}\">\r\n              <i class=\"fa fa-arrow-circle-right\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/all-info/otherplace-type/otherplace-type.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/all-info/otherplace-type/otherplace-type.component.ts ***!
  \***********************************************************************/
/*! exports provided: OtherplaceTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherplaceTypeComponent", function() { return OtherplaceTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OtherplaceTypeComponent = /** @class */ (function () {
    function OtherplaceTypeComponent() {
        this.hTc = 'h4';
    }
    OtherplaceTypeComponent.prototype.ngOnInit = function () {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth <= 560) {
            this.hTc = 'h5';
        }
    };
    OtherplaceTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-otherplace-type',
            template: __webpack_require__(/*! ./otherplace-type.component.html */ "./src/app/all-info/otherplace-type/otherplace-type.component.html"),
            styles: [__webpack_require__(/*! ./otherplace-type.component.css */ "./src/app/all-info/otherplace-type/otherplace-type.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OtherplaceTypeComponent);
    return OtherplaceTypeComponent;
}());



/***/ }),

/***/ "./src/app/all-info/restaurants-type/restaurants-type.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/all-info/restaurants-type/restaurants-type.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/all-info/restaurants-type/restaurants-type.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/all-info/restaurants-type/restaurants-type.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n  <div class=\"text-center p-3 mt-3\">\r\n    <h1 class=\"mt-5\"><b>ຮ້ານອາຫານ</b></h1>\r\n  </div>\r\n\r\n  <div class=\"container mb-2\">\r\n    <div class=\"row\">\r\n      <div class=\"col-6 col-md-4 col-lg-3\" *ngFor=\"let type of types\">\r\n        <div class=\"card bg-danger text-white mb-3\">\r\n          <div class=\"card-header text-center\" >\r\n            <h4 class=\"{{hTc}}\">{{type['name']}}</h4>\r\n          </div>\r\n          <div class=\"d-flex justify-content-center\">\r\n            <button class=\"btn bmd-btn-fab text-white\" [routerLink]=\"['/restaurant', 'type', type['_id']]\">\r\n              <i class=\"fa fa-arrow-circle-right\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/all-info/restaurants-type/restaurants-type.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/all-info/restaurants-type/restaurants-type.component.ts ***!
  \*************************************************************************/
/*! exports provided: RestaurantsTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantsTypeComponent", function() { return RestaurantsTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RestaurantsTypeComponent = /** @class */ (function () {
    function RestaurantsTypeComponent() {
        this.hTc = 'h4';
    }
    RestaurantsTypeComponent.prototype.ngOnInit = function () {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth <= 560) {
            this.hTc = 'h5';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], RestaurantsTypeComponent.prototype, "types", void 0);
    RestaurantsTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-restaurants-type',
            template: __webpack_require__(/*! ./restaurants-type.component.html */ "./src/app/all-info/restaurants-type/restaurants-type.component.html"),
            styles: [__webpack_require__(/*! ./restaurants-type.component.css */ "./src/app/all-info/restaurants-type/restaurants-type.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RestaurantsTypeComponent);
    return RestaurantsTypeComponent;
}());



/***/ }),

/***/ "./src/app/all-info/shelters-type/shelters-type.component.css":
/*!********************************************************************!*\
  !*** ./src/app/all-info/shelters-type/shelters-type.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/all-info/shelters-type/shelters-type.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/all-info/shelters-type/shelters-type.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n  <div class=\"text-center p-3 mt-3\">\r\n    <h1 class=\"mt-5\"><b>ສະຖານທີ່ພັກແຮມ</b></h1>\r\n  </div>\r\n\r\n  <div class=\"container mb-2\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-6 col-md-4 col-lg-3\" *ngFor=\"let type of types\">\r\n        <div class=\"card bg-primary text-white mb-3\">\r\n          <div class=\"card-header text-center\">\r\n            <h4 class=\"{{hTc}}\">{{type['name']}}</h4>\r\n          </div>\r\n          <div class=\"d-flex justify-content-center\">\r\n            <button class=\"btn bmd-btn-fab text-white\" [routerLink]=\"['/shelter/', 'type', type['_id']]\">\r\n              <i class=\"fa fa-arrow-circle-right\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/all-info/shelters-type/shelters-type.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/all-info/shelters-type/shelters-type.component.ts ***!
  \*******************************************************************/
/*! exports provided: SheltersTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SheltersTypeComponent", function() { return SheltersTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SheltersTypeComponent = /** @class */ (function () {
    function SheltersTypeComponent() {
        this.hTc = 'h4';
    }
    SheltersTypeComponent.prototype.ngOnInit = function () {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth <= 560) {
            this.hTc = 'h5';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SheltersTypeComponent.prototype, "types", void 0);
    SheltersTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shelters-type',
            template: __webpack_require__(/*! ./shelters-type.component.html */ "./src/app/all-info/shelters-type/shelters-type.component.html"),
            styles: [__webpack_require__(/*! ./shelters-type.component.css */ "./src/app/all-info/shelters-type/shelters-type.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SheltersTypeComponent);
    return SheltersTypeComponent;
}());



/***/ }),

/***/ "./src/app/all-info/transportations-type/transportations-type.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/all-info/transportations-type/transportations-type.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/all-info/transportations-type/transportations-type.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/all-info/transportations-type/transportations-type.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n  <div class=\"text-center p-3 mt-3\">\r\n    <h1 class=\"mt-5\"><b>ສະຖານີຂົນສົ່ງໂດຍສານ</b></h1>\r\n  </div>\r\n\r\n  <div class=\"container mb-2\">\r\n    <div class=\"row\">\r\n      <div class=\"col-6 col-md-4 col-lg-3\" *ngFor=\"let type of types\">\r\n        <div class=\"card bg-secondary text-white mb-3\">\r\n          <div class=\"card-header text-center\">\r\n            <h4 class=\"{{hTc}}\">{{type['name']}}</h4>\r\n          </div>\r\n          <div class=\"d-flex justify-content-center\">\r\n            <button class=\"btn bmd-btn-fab text-white\" [routerLink]=\"['/transportation', 'type', type['_id']]\">\r\n              <i class=\"fa fa-arrow-circle-right\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/all-info/transportations-type/transportations-type.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/all-info/transportations-type/transportations-type.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TransportationsTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportationsTypeComponent", function() { return TransportationsTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TransportationsTypeComponent = /** @class */ (function () {
    function TransportationsTypeComponent() {
        this.hTc = 'h4';
    }
    TransportationsTypeComponent.prototype.ngOnInit = function () {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth <= 560) {
            this.hTc = 'h5';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TransportationsTypeComponent.prototype, "types", void 0);
    TransportationsTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transportations-type',
            template: __webpack_require__(/*! ./transportations-type.component.html */ "./src/app/all-info/transportations-type/transportations-type.component.html"),
            styles: [__webpack_require__(/*! ./transportations-type.component.css */ "./src/app/all-info/transportations-type/transportations-type.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TransportationsTypeComponent);
    return TransportationsTypeComponent;
}());



/***/ })

}]);
//# sourceMappingURL=all-info-all-info-module.js.map