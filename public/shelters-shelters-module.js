(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shelters-shelters-module"],{

/***/ "./src/app/shelters/shelter-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shelters/shelter-routing.module.ts ***!
  \****************************************************/
/*! exports provided: ShelterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShelterRoutingModule", function() { return ShelterRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shelters_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shelters.component */ "./src/app/shelters/shelters.component.ts");
/* harmony import */ var _shelters_list_shelters_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shelters-list/shelters-list.component */ "./src/app/shelters/shelters-list/shelters-list.component.ts");
/* harmony import */ var _shelters_detail_shelters_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shelters-detail/shelters-detail.component */ "./src/app/shelters/shelters-detail/shelters-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





;
var routes = [{
        path: '',
        component: _shelters_component__WEBPACK_IMPORTED_MODULE_2__["SheltersComponent"],
        children: [{
                path: '',
                component: _shelters_list_shelters_list_component__WEBPACK_IMPORTED_MODULE_3__["SheltersListComponent"]
            }, {
                path: 'detail/:id',
                component: _shelters_detail_shelters_detail_component__WEBPACK_IMPORTED_MODULE_4__["SheltersDetailComponent"]
            },
            {
                path: 'type/:typeid',
                component: _shelters_list_shelters_list_component__WEBPACK_IMPORTED_MODULE_3__["SheltersListComponent"]
            },
        ]
    }];
var ShelterRoutingModule = /** @class */ (function () {
    function ShelterRoutingModule() {
    }
    ShelterRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        })
    ], ShelterRoutingModule);
    return ShelterRoutingModule;
}());



/***/ }),

/***/ "./src/app/shelters/shelters-detail/shelters-detail.component.css":
/*!************************************************************************!*\
  !*** ./src/app/shelters/shelters-detail/shelters-detail.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.carousel {\r\n    background: #EEE;\r\n}\r\n\r\n.carousel img {\r\n    display: block;\r\n    height: 200px;\r\n}\r\n\r\n@media screen and ( min-width: 768px ) {\r\n    .carousel img {\r\n        height: 400px;\r\n    }\r\n}\r\n\r\n.gallery-slide {\r\n    height: 500px;\r\n    z-index: 0;\r\n}\r\n\r\n.ruleText{\r\n    display: block;\r\n}\r\n\r\n/*Icon Button*/\r\n\r\n.faShares {\r\n    padding-top: 1em;\r\n    font-size: 30px;\r\n    width: 50px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    margin: 5px 2px;\r\n}\r\n\r\n.fa:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\n.fa-facebookc {\r\n    background: #3B5998;\r\n    color: white;\r\n}\r\n\r\n.fa-twitterc {\r\n    background: #55ACEE;\r\n    color: white;\r\n}\r\n\r\n.fa-googlec {\r\n    background: #dd4b39;\r\n    color: white;\r\n}\r\n\r\n.fa-youtubec {\r\n    background: #bb0000;\r\n    color: white;\r\n}\r\n\r\n.fa-instagramc {\r\n    background: #125688;\r\n    color: white;\r\n}\r\n\r\n.fa-skypec {\r\n    background: #00aff0;\r\n    color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shelters/shelters-detail/shelters-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/shelters/shelters-detail/shelters-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<gallery class=\"gallery-slide img-fluid\" [items]=\"items\" [thumb]=\"false\"></gallery>\n<div>\n  <div class=\"card text-white bg-primary\">\n    <div class=\"card-header mt-3\">\n      <h1 class=\"card-title\">ຊື່ຮ້ານອາຫານ</h1>\n      <p class=\"card-subtitle\">ປະເພດ: <b>ຮ້ານອາຫານປະຈຳຊາດ</b></p>\n    </div>\n  </div>\n  <ul class=\"nav nav-tabs nav-pills nav-justified bg-primary\" id=\"shelterTab\" role=\"tablist\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" id=\"att-overview\" data-toggle=\"tab\" href=\"#overviewT\" role=\"tab\" aria-controls=\"overviewT\" aria-selected=\"true\">Overview</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" id=\"shel-room\" data-toggle=\"tab\" href=\"#roomT\" role=\"tab\" aria-controls=\"roomT\" aria-selected=\"false\">ຫ້ອງພັກ</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" id=\"shel-photo\" data-toggle=\"tab\" href=\"#photoT\" role=\"tab\" aria-controls=\"photoT\" aria-selected=\"false\">ຮູບພາບ</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" id=\"shel-about\" data-toggle=\"tab\" href=\"#aboutT\" role=\"tab\" aria-controls=\"aboutT\" aria-selected=\"false\">ກ່ຽວກັບ</a>\n    </li>\n  </ul>\n  <div class=\"tab-content\" id=\"shelterContent\">\n    <div class=\"tab-pane fade show active mb-3\" id=\"overviewT\" role=\"tabpanel\" aria-labelledby=\"overviewT\">\n      <div class=\"row d-flex justify-content-center\">\n        <button class=\"col-5 btn btn-primary btn-lg p-3\">\n          <i class=\"fa fa-map-pin\"></i> ນຳທາງ\n        </button>\n        <button class=\"col-5 btn btn-primary btn-lg 9-3\" data-toggle=\"modal\" data-target=\"#sheareModal\">\n          <i class=\"fa fa-share\"></i> ແຊ\n        </button>\n      </div>\n      <h5>ສື່ອອນລາຍ</h5>\n      <table class=\"table table-hover\">\n        <tr>\n          <td><i class=\"fa fa-facebook\"></i> </td>\n          <td><a href=\"#\">Facebook.com/ddddd</a></td>\n        </tr>\n        <tr>\n          <td><i class=\"fa fa-twitter\"></i></td>\n          <td><a href=\"#\">twitter.com/dsfjkdjf</a></td>\n        </tr>\n      </table>\n      <h5>ຕິດຕໍ່</h5>\n      <table class=\"table\">\n        <tr>\n          <td><i class=\"fa fa-phone\"></i> </td>\n          <td>020 545458485</td>\n        </tr>\n        <tr>\n          <td><i class=\"fa fa-file-text\"></i></td>\n          <td>adsf@gmail.com</td>\n        </tr>\n      </table>\n      <h5>ທີ່ຢູ່</h5>\n      <table class=\"table\">\n        <tr>\n          <td><i class=\"fa fa-address-card\"></i> ບ້ານ : <b>ມາເສຍໝາ</b></td>\n\n        </tr>\n        <tr>\n          <td><i class=\"fa fa-map-signs\"></i> ເມືອງ : <b>ມາເສຍໝາ</b></td>\n\n        </tr>\n        <tr>\n          <td><i class=\"fa fa-map-marker\"></i> ແຂວງ : <b>ມາເສຍໝາ</b></td>\n\n        </tr>\n      </table>\n      <h5>Map</h5>\n      <iframe class=\"col-12\"\n              width=\"600\"\n              height=\"450\"\n              frameborder=\"0\" style=\"border:0\"\n              src=\"https://www.google.com/maps/embed/v1/place?key=AIzaSyBYBMMN0dbUiPgZvbvevJg23HRvTjdjIB0\n    &q=Space+Needle,Seattle+WA\" allowfullscreen>\n      </iframe>\n    </div>\n    <div class=\"tab-pane fade mb-3 m-1\" id=\"roomT\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">\n      <span class=\"m-1\"></span>\n      <h5><b>ຫ້ອງພັກ</b></h5>\n      <div class=\"grid mt-3 {{cTainer}}\">\n        <table class=\"table table-hover\">\n          <tr class=\"grid-item col-md-4 col-sm-6\"\n              *ngFor=\"let item of rooms; let i = index\"\n              (click)=\"openMenubox(i)\">\n            <td>\n              <img [src]=\"item.data.src\" class=\"img-fluid m-1 float-right rounded-top\" width=\"30%\">\n              <h5 class=\"{{hD}}\"><b>ປະເພດ: <b>ຫ້ອງຕຽງຄູ່</b></b></h5>\n              <p class=\"{{hP}}\">ລາຄາ: <b>50,000 ກີບ</b></p>\n            </td>\n          </tr>\n        </table>\n      </div>\n\n    </div>\n    <div class=\"tab-pane fade mb-3 m-1\" id=\"photoT\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">\n      <span class=\"m-1\"></span>\n      <h5><b>ຮູບພາບ</b></h5>\n      <div class=\"grid row mt-3\">\n        <div class=\"grid-item col-md-4 col-sm-6\"\n             *ngFor=\"let item of items; let i = index\"\n             (click)=\"openLightbox(i)\">\n          <img [src]=\"item.data.src\" class=\"img-fluid m-1\">\n        </div>\n      </div>\n      <span class=\"m-1\"></span>\n      <h5><b>ວີດີໂອ</b></h5>\n      <div class=\"row\">\n        <iframe class=\"col-12 mt-3\" height=\"540px\" src=\"https://www.youtube.com/embed/IYhMgDA-KGg\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n      </div>\n    </div>\n    <div class=\"tab-pane fade mb-3\" id=\"aboutT\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">\n      <span class=\"m-1\"></span>\n      <h5><b>ປະຫວັດຄວາມເປັນມາ</b></h5>\n      <div class=\"m-1\">\n        <p class=\"col-12\">ຕາມຂໍ້ມູນຈາກສື່ທາງການ ໜັງສືພິມປະຊາຊົນ ແລະໜັງສືພິມວຽງຈັນໃໝ່ໂດຍອ້າງອີງຂໍ້ມູນຈາກຄະນະກວດກາສູນກາງພັກໃຫ້ຮູ້ວ່າ: ໃນປີ 2017 ຄະນະກວດກາສູນກາງພັກ ສາມາດກວດເຫັນ ການເອົາທີ່ດິນລັດແລກປ່ຽນ ແລະຊຳລະ ໂຄງການພື້ນຖານໂຄງລ່າງໂດຍບໍ່ມີການປະເມີນລາຄາເຮັດໃຫ້ລັດເສຍຫາຍ ຈຳນວນ 266 ຕື້ກີບ.</p>\n      </div>\n      <span class=\"m-1\"></span>\n      <h5><b>ກົດລະບຽບ</b></h5>\n      <div class=\"m-1 row\">\n        <p class=\"col-12\">ຕາມຂໍ້ມູນຈາກສື່ທາງການ ໜັງສືພິມປະຊາຊົນ ແລະໜັງສືພິມວຽງຈັນໃໝ່ໂດຍອ້າງອີງຂໍ້ມູນຈາກຄະນະກວດກາສູນກາງພັກໃຫ້ຮູ້ວ່າ: ໃນປີ 2017 ຄະນະກວດກາສູນກາງພັກ ສາມາດກວດເຫັນ ການເອົາທີ່ດິນລັດແລກປ່ຽນ ແລະຊຳລະ ໂຄງການພື້ນຖານໂຄງລ່າງໂດຍບໍ່ມີການປະເມີນລາຄາເຮັດໃຫ້ລັດເສຍຫາຍ ຈຳນວນ 266 ຕື້ກີບ.</p>\n      </div>\n    </div>\n  </div>\n\n\n  <!--Sheare Social Modal-->\n  <div class=\"modal fade\" id=\"sheareModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"sheareModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"sheareModalLabel\">ແຊອອນລາຍ</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body d-flex justify-content-center\">\n          <a href=\"http://www.facebook.com\" class=\"btn bmd-btn-fab fa fa-facebook fa-facebookc faShares\" target=\"_blank\"></a>\n          <a href=\"#\" class=\"btn bmd-btn-fab fa fa-twitter fa-twitterc faShares\" target=\"_blank\"></a>\n          <a href=\"#\" class=\"btn bmd-btn-fab fa fa-youtube fa-youtubec faShares\" target=\"_blank\"></a>\n          <a href=\"#\" class=\"btn bmd-btn-fab fa fa-instagram fa-instagramc faShares\" target=\"_blank\"></a>\n          <a href=\"#\" class=\"btn bmd-btn-fab fa fa-google fa-googlec faShares\" target=\"_blank\"></a>\n          <a href=\"#\" class=\"btn bmd-btn-fab fa fa-skype fa-skypec faShares\" target=\"_blank\"></a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/shelters/shelters-detail/shelters-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shelters/shelters-detail/shelters-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: SheltersDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SheltersDetailComponent", function() { return SheltersDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-gallery/core */ "./node_modules/@ngx-gallery/core/esm5/ngx-gallery-core.js");
/* harmony import */ var _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-gallery/lightbox */ "./node_modules/@ngx-gallery/lightbox/esm5/ngx-gallery-lightbox.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SheltersDetailComponent = /** @class */ (function () {
    function SheltersDetailComponent(gallery, lightbox, route) {
        this.gallery = gallery;
        this.lightbox = lightbox;
        this.route = route;
        this.cTainer = 'container';
        this.hD = 'h3';
        this.hP = 'h1';
        this.imageData = [
            {
                srcUrl: 'assets/1240x720.png',
                previewUrl: 'assets/1240x720.png'
            },
            {
                srcUrl: 'assets/1280x720.jpg',
                previewUrl: 'assets/1280x720.jpg'
            },
            {
                srcUrl: 'assets/1240x720.png',
                previewUrl: 'assets/1240x720.png'
            }
            // ... more items
        ];
        this.roomsData = [
            {
                srcUrl: 'assets/1240x720.png',
                previewUrl: 'assets/1240x720.png',
            },
            {
                srcUrl: 'assets/1280x720.jpg',
                previewUrl: 'assets/1280x720.jpg',
            },
        ];
    }
    SheltersDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            console.log(_this.id);
        });
        this.innerWidth = window.innerWidth;
        if (this.innerWidth <= 560) {
            this.cTainer = '';
            this.hD = 'h5';
            this.hP = '';
        }
        /*Shelters*/
        this.items = this.imageData.map(function (item) { return new _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ImageItem"](item.srcUrl, item.previewUrl); });
        console.log(this.items);
        this.gallery.ref('shelterlightbox').load(this.items);
        /*Rooms*/
        this.rooms = this.roomsData.map(function (item) { return new _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ImageItem"](item.srcUrl, item.previewUrl); });
        this.gallery.ref('roomslightbox').load(this.rooms);
    };
    SheltersDetailComponent.prototype.openLightbox = function (index) {
        this.lightbox.open(index, 'shelterlightbox', {
            panelClass: 'fullscreen'
        });
    };
    SheltersDetailComponent.prototype.openMenubox = function (index) {
        this.lightbox.open(index, 'roomslightbox', {});
    };
    SheltersDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shelters-detail',
            template: __webpack_require__(/*! ./shelters-detail.component.html */ "./src/app/shelters/shelters-detail/shelters-detail.component.html"),
            styles: [__webpack_require__(/*! ./shelters-detail.component.css */ "./src/app/shelters/shelters-detail/shelters-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["Gallery"], _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_2__["Lightbox"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SheltersDetailComponent);
    return SheltersDetailComponent;
}());



/***/ }),

/***/ "./src/app/shelters/shelters-list/shelters-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shelters/shelters-list/shelters-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tableList {\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/shelters/shelters-list/shelters-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shelters/shelters-list/shelters-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<table class=\"table table-hover tableList\">\r\n  <thead>\r\n  <th><button class=\"btn btn-info\" data-toggle=\"collapse\" data-target=\"#collapse-map\"><i class=\"fa fa-map\"></i></button></th>\r\n  </thead>\r\n  <tr class=\"collapse\" id=\"collapse-map\">\r\n    <iframe\r\n            width=\"600\"\r\n            height=\"450\"\r\n            frameborder=\"0\" style=\"border:0\"\r\n            src=\"https://www.google.com/maps/embed/v1/place?key=AIzaSyBYBMMN0dbUiPgZvbvevJg23HRvTjdjIB0\r\n    &q=Space+Needle,Seattle+WA\" allowfullscreen>\r\n    </iframe>\r\n  </tr>\r\n  <tr class=\"card\" *ngFor=\"let shelter of shelters\">\r\n    <td (click)=\"showShelterdetail(shelter['_id'])\">\r\n      <img [src]=\"shelt.img\" width=\"30%\" class=\"rounded float-right\" alt=\"\">\r\n      <h5 class=\"{{hD}}\"><b>{{shelter['name']}}</b></h5>\r\n      <p class=\"card-subtitle\">ປະເພດ: <b>{{shelter['shelter_type']['name']}}</b></p>\r\n      <p class=\"{{hideText}}\">{{shelter['detail']}}</p>\r\n    </td>\r\n  </tr>\r\n\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/shelters/shelters-list/shelters-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shelters/shelters-list/shelters-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: SheltersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SheltersListComponent", function() { return SheltersListComponent; });
/* harmony import */ var _services_all_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/all.service */ "./src/app/services/all.service.ts");
/* harmony import */ var _services_type_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/type.service */ "./src/app/services/type.service.ts");
/* harmony import */ var _services_locationcheck_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/locationcheck.service */ "./src/app/services/locationcheck.service.ts");
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-progressbar */ "./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SheltersListComponent = /** @class */ (function () {
    function SheltersListComponent(router, route, ngProgress, locationService, typeService, allService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.ngProgress = ngProgress;
        this.locationService = locationService;
        this.typeService = typeService;
        this.allService = allService;
        this.hD = 'h3';
        this.shelters = [];
        this.ngProgress.start();
        this.route.params.subscribe(function (params) {
            _this.typeid = params['typeid'];
            if (_this.typeid) {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (position) {
                        var lat = position.coords.latitude;
                        var lng = position.coords.longitude;
                        var subscript = _this.locationService.getLocalWeater(lat, lng).subscribe(function (res) {
                            var api_data = res.json()['current_observation']['observation_location'];
                            var sheltSubscript = _this.typeService.getTypeShelters(_this.typeid, api_data['country'], lat + ',' + lng).subscribe(function (shelt_res) {
                                _this.shelters = shelt_res.json()['data'];
                                _this.ngProgress.done();
                                sheltSubscript.unsubscribe();
                            }, function (shelt_error) {
                                _this.ngProgress.done();
                                sheltSubscript.unsubscribe();
                            });
                            subscript.unsubscribe();
                        }, function (error) {
                            _this.ngProgress.done();
                            subscript.unsubscribe();
                        });
                    }, function () {
                        var sheltSubscript = _this.typeService.getTypeShelters(_this.typeid, 'CTC', '0,0')
                            .subscribe(function (shelt_res) {
                            _this.shelters = shelt_res.json()['data'];
                            _this.ngProgress.done();
                            sheltSubscript.unsubscribe();
                        }, function (shelt_error) {
                            _this.ngProgress.done();
                            sheltSubscript.unsubscribe();
                        });
                    });
                }
            }
            else {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (position) {
                        var lat = position.coords.latitude;
                        var lng = position.coords.longitude;
                        var subscript = _this.locationService.getLocalWeater(lat, lng).subscribe(function (res) {
                            var api_data = res.json()['current_observation']['observation_location'];
                            var sheltSubscript = _this.allService.getShelters(api_data['country'], lat + ',' + lng).subscribe(function (shelt_res) {
                                _this.shelters = shelt_res.json()['data'];
                                _this.ngProgress.done();
                                sheltSubscript.unsubscribe();
                            }, function (shelt_error) {
                                _this.ngProgress.done();
                                sheltSubscript.unsubscribe();
                            });
                            subscript.unsubscribe();
                        }, function (error) {
                            _this.ngProgress.done();
                            subscript.unsubscribe();
                        });
                    }, function () {
                        var sheltSubscript = _this.allService.getShelters('CTC', '0,0')
                            .subscribe(function (shelt_res) {
                            _this.shelters = shelt_res.json()['data'];
                            _this.ngProgress.done();
                            sheltSubscript.unsubscribe();
                        }, function (shelt_error) {
                            _this.ngProgress.done();
                            sheltSubscript.unsubscribe();
                        });
                    });
                }
            }
        });
    }
    SheltersListComponent.prototype.ngOnInit = function () {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth <= 560) {
            this.hideText = 'text-hide';
            this.hD = 'h5';
        }
    };
    SheltersListComponent.prototype.showShelterdetail = function (sheltid) {
        this.router.navigate(['shelter/detail', sheltid]);
    };
    SheltersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-shelters-list',
            template: __webpack_require__(/*! ./shelters-list.component.html */ "./src/app/shelters/shelters-list/shelters-list.component.html"),
            styles: [__webpack_require__(/*! ./shelters-list.component.css */ "./src/app/shelters/shelters-list/shelters-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            ngx_progressbar__WEBPACK_IMPORTED_MODULE_3__["NgProgress"],
            _services_locationcheck_service__WEBPACK_IMPORTED_MODULE_2__["LocationcheckService"],
            _services_type_service__WEBPACK_IMPORTED_MODULE_1__["TypeService"],
            _services_all_service__WEBPACK_IMPORTED_MODULE_0__["AllService"]])
    ], SheltersListComponent);
    return SheltersListComponent;
}());



/***/ }),

/***/ "./src/app/shelters/shelters.component.css":
/*!*************************************************!*\
  !*** ./src/app/shelters/shelters.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spaceEp{\r\n    margin-top: 4.8em;\r\n}"

/***/ }),

/***/ "./src/app/shelters/shelters.component.html":
/*!**************************************************!*\
  !*** ./src/app/shelters/shelters.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container mt-5 mb-5\">\n  <div class=\"row spaceEp\"></div>\n  <div class=\"row ml-1 d-block\">\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shelters/shelters.component.ts":
/*!************************************************!*\
  !*** ./src/app/shelters/shelters.component.ts ***!
  \************************************************/
/*! exports provided: SheltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SheltersComponent", function() { return SheltersComponent; });
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


var SheltersComponent = /** @class */ (function () {
    function SheltersComponent(ngProgress) {
        this.ngProgress = ngProgress;
    }
    SheltersComponent.prototype.ngOnInit = function () {
        /*Progressstatus*/
        /** request started */
        this.ngProgress.start();
        /*        this.http.get(url).subscribe(res){
                    /!** request completed *!/
                    this.ngProgress.done();
                }*/
        this.ngProgress.done();
    };
    SheltersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shelters',
            template: __webpack_require__(/*! ./shelters.component.html */ "./src/app/shelters/shelters.component.html"),
            styles: [__webpack_require__(/*! ./shelters.component.css */ "./src/app/shelters/shelters.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_progressbar__WEBPACK_IMPORTED_MODULE_1__["NgProgress"]])
    ], SheltersComponent);
    return SheltersComponent;
}());



/***/ }),

/***/ "./src/app/shelters/shelters.module.ts":
/*!*********************************************!*\
  !*** ./src/app/shelters/shelters.module.ts ***!
  \*********************************************/
/*! exports provided: SheltersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SheltersModule", function() { return SheltersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shelters_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shelters.component */ "./src/app/shelters/shelters.component.ts");
/* harmony import */ var _shelters_list_shelters_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shelters-list/shelters-list.component */ "./src/app/shelters/shelters-list/shelters-list.component.ts");
/* harmony import */ var _shelters_detail_shelters_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shelters-detail/shelters-detail.component */ "./src/app/shelters/shelters-detail/shelters-detail.component.ts");
/* harmony import */ var _shelter_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shelter-routing.module */ "./src/app/shelters/shelter-routing.module.ts");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-gallery/core */ "./node_modules/@ngx-gallery/core/esm5/ngx-gallery-core.js");
/* harmony import */ var _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-gallery/lightbox */ "./node_modules/@ngx-gallery/lightbox/esm5/ngx-gallery-lightbox.js");
/* harmony import */ var _ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-gallery/gallerize */ "./node_modules/@ngx-gallery/gallerize/esm5/ngx-gallery-gallerize.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var Shelters_component = [
    _shelters_component__WEBPACK_IMPORTED_MODULE_2__["SheltersComponent"],
    _shelters_list_shelters_list_component__WEBPACK_IMPORTED_MODULE_3__["SheltersListComponent"],
    _shelters_detail_shelters_detail_component__WEBPACK_IMPORTED_MODULE_4__["SheltersDetailComponent"]
];
var SheltersModule = /** @class */ (function () {
    function SheltersModule() {
    }
    SheltersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shelter_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShelterRoutingModule"],
                // BrowserAnimationsModule,
                _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_6__["GalleryModule"].forRoot(),
                _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_7__["LightboxModule"].forRoot(),
                _ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_8__["GallerizeModule"]
            ],
            declarations: Shelters_component.slice(),
            exports: []
        })
    ], SheltersModule);
    return SheltersModule;
}());



/***/ })

}]);
//# sourceMappingURL=shelters-shelters-module.js.map