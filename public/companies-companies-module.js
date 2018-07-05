(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["companies-companies-module"],{

/***/ "./src/app/companies/companies-detail/companies-detail.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/companies/companies-detail/companies-detail.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.carousel {\r\n    background: #EEE;\r\n}\r\n\r\n.carousel img {\r\n    display: block;\r\n    height: 200px;\r\n}\r\n\r\n@media screen and ( min-width: 768px ) {\r\n    .carousel img {\r\n        height: 400px;\r\n    }\r\n}\r\n\r\n.gallery-slide {\r\n    height: 500px;\r\n    z-index: 0;\r\n}\r\n\r\n.ruleText{\r\n    display: block;\r\n}\r\n\r\n/*Icon Button*/\r\n\r\n.faShares {\r\n    padding-top: 1em;\r\n    font-size: 30px;\r\n    width: 50px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    margin: 5px 2px;\r\n}\r\n\r\n.fa:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\n.fa-facebookc {\r\n    background: #3B5998;\r\n    color: white;\r\n}\r\n\r\n.fa-twitterc {\r\n    background: #55ACEE;\r\n    color: white;\r\n}\r\n\r\n.fa-googlec {\r\n    background: #dd4b39;\r\n    color: white;\r\n}\r\n\r\n.fa-youtubec {\r\n    background: #bb0000;\r\n    color: white;\r\n}\r\n\r\n.fa-instagramc {\r\n    background: #125688;\r\n    color: white;\r\n}\r\n\r\n.fa-skypec {\r\n    background: #00aff0;\r\n    color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/companies/companies-detail/companies-detail.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/companies/companies-detail/companies-detail.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<gallery class=\"gallery-slide img-fluid\" id=\"ex1\" [items]=\"items\" [thumb]=\"false\"></gallery>\n<!--<gallery id=\"{{galleryId}}\"></gallery>-->\n<div>\n  <div class=\"card text-white bg-primary\">\n    <div class=\"card-header mt-3\">\n      <h1 class=\"card-title\">ຊື່ບໍລິສັດນຳທ່ຽວ</h1>\n    </div>\n  </div>\n  <ul class=\"nav nav-tabs nav-pills nav-justified bg-primary\" id=\"companiesTab\" role=\"tablist\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" id=\"com-overview\" data-toggle=\"tab\" href=\"#overviewT\" role=\"tab\" aria-controls=\"overviewT\" aria-selected=\"true\">Overview</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" id=\"com-photo\" data-toggle=\"tab\" href=\"#photoT\" role=\"tab\" aria-controls=\"photoT\" aria-selected=\"false\">ຮູບພາບ</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" id=\"com-about\" data-toggle=\"tab\" href=\"#aboutT\" role=\"tab\" aria-controls=\"aboutT\" aria-selected=\"false\">ກ່ຽວກັບ</a>\n    </li>\n  </ul>\n  <div class=\"tab-content\" id=\"companiesContent\">\n    <div class=\"tab-pane fade show active mb-3\" id=\"overviewT\" role=\"tabpanel\" aria-labelledby=\"overviewT\">\n      <div class=\"row d-flex justify-content-center\">\n        <button class=\"col-5 btn btn-primary btn-lg p-3\">\n          <i class=\"fa fa-map-pin\"></i> ນຳທາງ\n        </button>\n        <button class=\"col-5 btn btn-primary btn-lg 9-3\" data-toggle=\"modal\" data-target=\"#sheareModal\">\n          <i class=\"fa fa-share\"></i> ແຊ\n        </button>\n      </div>\n      <h5>ສື່ອອນລາຍ</h5>\n      <table class=\"table table-hover\">\n        <tr>\n          <td><i class=\"fa fa-facebook\"></i> </td>\n          <td><a href=\"#\">Facebook.com/ddddd</a></td>\n        </tr>\n        <tr>\n          <td><i class=\"fa fa-twitter\"></i></td>\n          <td><a href=\"#\">twitter.com/dsfjkdjf</a></td>\n        </tr>\n      </table>\n      <h5>ຕິດຕໍ່</h5>\n      <table class=\"table\">\n        <tr>\n          <td><i class=\"fa fa-phone\"></i> </td>\n          <td>020 545458485</td>\n        </tr>\n        <tr>\n          <td><i class=\"fa fa-file-text\"></i></td>\n          <td>adsf@gmail.com</td>\n        </tr>\n      </table>\n      <h5>ທີ່ຢູ່</h5>\n      <table class=\"table\">\n        <tr>\n          <td><i class=\"fa fa-address-card\"></i> ບ້ານ : <b>ມາເສຍໝາ</b></td>\n\n        </tr>\n        <tr>\n          <td><i class=\"fa fa-map-signs\"></i> ເມືອງ : <b>ມາເສຍໝາ</b></td>\n\n        </tr>\n        <tr>\n          <td><i class=\"fa fa-map-marker\"></i> ແຂວງ : <b>ມາເສຍໝາ</b></td>\n\n        </tr>\n      </table>\n      <h5>Map</h5>\n      <iframe class=\"col-12\"\n              width=\"600\"\n              height=\"450\"\n              frameborder=\"0\" style=\"border:0\"\n              src=\"https://www.google.com/maps/embed/v1/place?key=AIzaSyBYBMMN0dbUiPgZvbvevJg23HRvTjdjIB0\n    &q=Space+Needle,Seattle+WA\" allowfullscreen>\n      </iframe>\n    </div>\n    <div class=\"tab-pane fade mb-3 m-1\" id=\"photoT\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">\n      <span class=\"m-1\"></span>\n      <h5><b>ຮູບພາບ</b></h5>\n      <div class=\"grid row mt-3\">\n        <div class=\"grid-item col-md-4 col-sm-6\"\n             *ngFor=\"let item of items; let i = index\"\n             (click)=\"openLightbox(i)\">\n          <img [src]=\"item.data.src\" class=\"img-fluid m-1\">\n        </div>\n      </div>\n      <span class=\"m-1\"></span>\n      <h5><b>ວີດີໂອ</b></h5>\n      <div class=\"row\">\n        <iframe class=\"col-12 mt-3\" height=\"540px\" src=\"https://www.youtube.com/embed/IYhMgDA-KGg\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n      </div>\n    </div>\n    <div class=\"tab-pane fade mb-3\" id=\"aboutT\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">\n      <span class=\"m-1\"></span>\n      <h5><b>ປະຫວັດຄວາມເປັນມາ</b></h5>\n      <div class=\"m-1\">\n        <p class=\"col-12\">ຕາມຂໍ້ມູນຈາກສື່ທາງການ ໜັງສືພິມປະຊາຊົນ ແລະໜັງສືພິມວຽງຈັນໃໝ່ໂດຍອ້າງອີງຂໍ້ມູນຈາກຄະນະກວດກາສູນກາງພັກໃຫ້ຮູ້ວ່າ: ໃນປີ 2017 ຄະນະກວດກາສູນກາງພັກ ສາມາດກວດເຫັນ ການເອົາທີ່ດິນລັດແລກປ່ຽນ ແລະຊຳລະ ໂຄງການພື້ນຖານໂຄງລ່າງໂດຍບໍ່ມີການປະເມີນລາຄາເຮັດໃຫ້ລັດເສຍຫາຍ ຈຳນວນ 266 ຕື້ກີບ.</p>\n      </div>\n    </div>\n  </div>\n\n\n  <!--Sheare Social Modal-->\n  <div class=\"modal fade\" id=\"sheareModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"sheareModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"sheareModalLabel\">ແຊອອນລາຍ</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body d-flex justify-content-center\">\n          <a href=\"http://www.facebook.com\" class=\"btn bmd-btn-fab fa fa-facebook fa-facebookc faShares\" target=\"_blank\"></a>\n          <a href=\"#\" class=\"btn bmd-btn-fab fa fa-twitter fa-twitterc faShares\" target=\"_blank\"></a>\n          <a href=\"#\" class=\"btn bmd-btn-fab fa fa-youtube fa-youtubec faShares\" target=\"_blank\"></a>\n          <a href=\"#\" class=\"btn bmd-btn-fab fa fa-instagram fa-instagramc faShares\" target=\"_blank\"></a>\n          <a href=\"#\" class=\"btn bmd-btn-fab fa fa-google fa-googlec faShares\" target=\"_blank\"></a>\n          <a href=\"#\" class=\"btn bmd-btn-fab fa fa-skype fa-skypec faShares\" target=\"_blank\"></a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/companies/companies-detail/companies-detail.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/companies/companies-detail/companies-detail.component.ts ***!
  \**************************************************************************/
/*! exports provided: CompaniesDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesDetailComponent", function() { return CompaniesDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-gallery/core */ "./node_modules/@ngx-gallery/core/esm5/ngx-gallery-core.js");
/* harmony import */ var _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-gallery/lightbox */ "./node_modules/@ngx-gallery/lightbox/esm5/ngx-gallery-lightbox.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompaniesDetailComponent = /** @class */ (function () {
    // galleryId = 'mixed';
    // galleryRef: GalleryRef = this.gallery.ref(this.galleryId);
    function CompaniesDetailComponent(gallery, lightbox) {
        this.gallery = gallery;
        this.lightbox = lightbox;
        this.imageData = [
            {
                srcUrl: '../../../assets/1240x720.png',
                previewUrl: '../../../assets/1240x720.png'
            },
            {
                srcUrl: '../../../assets/1280x720.jpg',
                previewUrl: '../../../assets/1280x720.jpg'
            },
            {
                srcUrl: '../../../assets/1240x720.png',
                previewUrl: '../../../assets/1240x720.png'
            }
            // ... more items
        ];
    }
    CompaniesDetailComponent.prototype.ngOnInit = function () {
        this.items = this.imageData.map(function (item) { return new _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ImageItem"](item.srcUrl, item.previewUrl); });
        console.log(this.items);
        this.gallery.ref('lightbox').load(this.items);
    };
    CompaniesDetailComponent.prototype.openLightbox = function (index) {
        this.lightbox.open(index, 'lightbox', {
            panelClass: 'fullscreen'
        });
    };
    CompaniesDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-companies-detail',
            template: __webpack_require__(/*! ./companies-detail.component.html */ "./src/app/companies/companies-detail/companies-detail.component.html"),
            styles: [__webpack_require__(/*! ./companies-detail.component.css */ "./src/app/companies/companies-detail/companies-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["Gallery"], _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_2__["Lightbox"]])
    ], CompaniesDetailComponent);
    return CompaniesDetailComponent;
}());



/***/ }),

/***/ "./src/app/companies/companies-list/companies-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/companies/companies-list/companies-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tableList {\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/companies/companies-list/companies-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/companies/companies-list/companies-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<table class=\"table table-hover tableList\">\r\n  <thead>\r\n  <th><button class=\"btn btn-info\" data-toggle=\"collapse\" data-target=\"#collapse-map\"><i class=\"fa fa-map\"></i></button></th>\r\n  </thead>\r\n  <tr class=\"collapse\" id=\"collapse-map\">\r\n    <iframe\r\n            width=\"600\"\r\n            height=\"450\"\r\n            frameborder=\"0\" style=\"border:0\"\r\n            src=\"https://www.google.com/maps/embed/v1/place?key=AIzaSyBYBMMN0dbUiPgZvbvevJg23HRvTjdjIB0\r\n    &q=Space+Needle,Seattle+WA\" allowfullscreen>\r\n    </iframe>\r\n  </tr>\r\n  <tr class=\"card\" *ngFor=\"let company of tour_companies\">\r\n    <td (click)=\"showCompadetail(company['_id'])\">\r\n      <img [src]=\"company['images'][0]\" width=\"30%\" class=\"rounded float-right\" alt=\"\">\r\n      <h5 class=\"{{hD}}\"><b>{{company['name']}}</b></h5>\r\n      <p class=\"{{hideText}}\">{{company['about']}}</p>\r\n    </td>\r\n  </tr>\r\n\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/companies/companies-list/companies-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/companies/companies-list/companies-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: CompaniesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesListComponent", function() { return CompaniesListComponent; });
/* harmony import */ var _services_all_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/all.service */ "./src/app/services/all.service.ts");
/* harmony import */ var _services_locationcheck_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/locationcheck.service */ "./src/app/services/locationcheck.service.ts");
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-progressbar */ "./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompaniesListComponent = /** @class */ (function () {
    function CompaniesListComponent(router, route, ngProgress, locationService, allService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.ngProgress = ngProgress;
        this.locationService = locationService;
        this.allService = allService;
        this.hD = 'h3';
        this.tour_companies = [];
        this.ngProgress.start();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var lng = position.coords.longitude;
                var subscript = _this.locationService.getLocalWeater(lat, lng).subscribe(function (res) {
                    var api_data = res.json();
                    var comSubscript = _this.allService.getTourCompanies(api_data[''], lat + ',' + lng).subscribe(function (com_res) {
                        _this.tour_companies = com_res.json()['data'];
                        _this.ngProgress.done();
                        comSubscript.unsubscribe();
                    }, function (att_error) {
                        _this.ngProgress.done();
                        comSubscript.unsubscribe();
                    });
                    subscript.unsubscribe();
                }, function (error) {
                    _this.ngProgress.done();
                    subscript.unsubscribe();
                });
            }, function () {
                var comSubscript = _this.allService.getTourCompanies('CTC', '0,0')
                    .subscribe(function (com_res) {
                    _this.tour_companies = com_res.json()['data'];
                    _this.ngProgress.done();
                    comSubscript.unsubscribe();
                }, function (att_error) {
                    _this.ngProgress.done();
                    comSubscript.unsubscribe();
                });
            });
        }
    }
    CompaniesListComponent.prototype.ngOnInit = function () {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth <= 560) {
            this.hideText = 'text-hide';
            this.hD = 'h5';
        }
    };
    CompaniesListComponent.prototype.showCompadetail = function (compaid) {
        this.router.navigate(['/company', 'detail', compaid]);
    };
    CompaniesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-companies-list',
            template: __webpack_require__(/*! ./companies-list.component.html */ "./src/app/companies/companies-list/companies-list.component.html"),
            styles: [__webpack_require__(/*! ./companies-list.component.css */ "./src/app/companies/companies-list/companies-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            ngx_progressbar__WEBPACK_IMPORTED_MODULE_2__["NgProgress"],
            _services_locationcheck_service__WEBPACK_IMPORTED_MODULE_1__["LocationcheckService"],
            _services_all_service__WEBPACK_IMPORTED_MODULE_0__["AllService"]])
    ], CompaniesListComponent);
    return CompaniesListComponent;
}());



/***/ }),

/***/ "./src/app/companies/companies-routing-module.ts":
/*!*******************************************************!*\
  !*** ./src/app/companies/companies-routing-module.ts ***!
  \*******************************************************/
/*! exports provided: CompaniesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesRoutingModule", function() { return CompaniesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _companies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./companies.component */ "./src/app/companies/companies.component.ts");
/* harmony import */ var _companies_list_companies_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./companies-list/companies-list.component */ "./src/app/companies/companies-list/companies-list.component.ts");
/* harmony import */ var _companies_detail_companies_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./companies-detail/companies-detail.component */ "./src/app/companies/companies-detail/companies-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '',
        component: _companies_component__WEBPACK_IMPORTED_MODULE_2__["CompaniesComponent"],
        children: [
            {
                path: '',
                component: _companies_list_companies_list_component__WEBPACK_IMPORTED_MODULE_3__["CompaniesListComponent"]
            },
            {
                path: 'detail/:id',
                component: _companies_detail_companies_detail_component__WEBPACK_IMPORTED_MODULE_4__["CompaniesDetailComponent"]
            }
        ]
    }];
var CompaniesRoutingModule = /** @class */ (function () {
    function CompaniesRoutingModule() {
    }
    CompaniesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        })
    ], CompaniesRoutingModule);
    return CompaniesRoutingModule;
}());



/***/ }),

/***/ "./src/app/companies/companies.component.css":
/*!***************************************************!*\
  !*** ./src/app/companies/companies.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spaceEp{\r\n    margin-top: 4.8em;\r\n}"

/***/ }),

/***/ "./src/app/companies/companies.component.html":
/*!****************************************************!*\
  !*** ./src/app/companies/companies.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container mt-5 mb-5\">\r\n  <div class=\"row spaceEp\"></div>\r\n  <div class=\"row ml-1 d-block\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/companies/companies.component.ts":
/*!**************************************************!*\
  !*** ./src/app/companies/companies.component.ts ***!
  \**************************************************/
/*! exports provided: CompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesComponent", function() { return CompaniesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-progressbar */ "./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompaniesComponent = /** @class */ (function () {
    function CompaniesComponent(ngProgress) {
        this.ngProgress = ngProgress;
    }
    CompaniesComponent.prototype.ngOnInit = function () {
        /*Progressstatus*/
        /** request started */
        this.ngProgress.start();
        /*Another function here*/
        this.ngProgress.done();
    };
    CompaniesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-companies',
            template: __webpack_require__(/*! ./companies.component.html */ "./src/app/companies/companies.component.html"),
            styles: [__webpack_require__(/*! ./companies.component.css */ "./src/app/companies/companies.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_progressbar__WEBPACK_IMPORTED_MODULE_1__["NgProgress"]])
    ], CompaniesComponent);
    return CompaniesComponent;
}());



/***/ }),

/***/ "./src/app/companies/companies.module.ts":
/*!***********************************************!*\
  !*** ./src/app/companies/companies.module.ts ***!
  \***********************************************/
/*! exports provided: CompaniesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesModule", function() { return CompaniesModule; });
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _companies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./companies.component */ "./src/app/companies/companies.component.ts");
/* harmony import */ var _companies_list_companies_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./companies-list/companies-list.component */ "./src/app/companies/companies-list/companies-list.component.ts");
/* harmony import */ var _companies_detail_companies_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./companies-detail/companies-detail.component */ "./src/app/companies/companies-detail/companies-detail.component.ts");
/* harmony import */ var _companies_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./companies-routing-module */ "./src/app/companies/companies-routing-module.ts");
/* harmony import */ var _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-gallery/lightbox */ "./node_modules/@ngx-gallery/lightbox/esm5/ngx-gallery-lightbox.js");
/* harmony import */ var _ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-gallery/gallerize */ "./node_modules/@ngx-gallery/gallerize/esm5/ngx-gallery-gallerize.js");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-gallery/core */ "./node_modules/@ngx-gallery/core/esm5/ngx-gallery-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var Companies_component = [
    _companies_component__WEBPACK_IMPORTED_MODULE_3__["CompaniesComponent"],
    _companies_list_companies_list_component__WEBPACK_IMPORTED_MODULE_4__["CompaniesListComponent"],
    _companies_detail_companies_detail_component__WEBPACK_IMPORTED_MODULE_5__["CompaniesDetailComponent"]
];
var CompaniesModule = /** @class */ (function () {
    function CompaniesModule() {
    }
    CompaniesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _companies_routing_module__WEBPACK_IMPORTED_MODULE_6__["CompaniesRoutingModule"],
                _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_9__["GalleryModule"].forRoot(),
                _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_7__["LightboxModule"].forRoot(),
                _ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_8__["GallerizeModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_0__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBXoeOmRRzSl0b4iUBadAz8M-_Zva0DpfQ'
                })
            ],
            declarations: Companies_component.slice()
        })
    ], CompaniesModule);
    return CompaniesModule;
}());



/***/ })

}]);
//# sourceMappingURL=companies-companies-module.js.map