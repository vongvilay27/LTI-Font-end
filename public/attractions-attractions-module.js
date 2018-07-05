(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["attractions-attractions-module"],{

/***/ "./src/app/attractions/attractions-detail/attractions-detail.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/attractions/attractions-detail/attractions-detail.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#pic1{\r\n    height: 50%;\r\n    background: url('mdesign1.jpg') no-repeat center center fixed;\r\n    /*background-color: #ffeb3b;*/\r\n    background-size: cover;\r\n\r\n}\r\n\r\n.carousel {\r\n    background: #EEE;\r\n}\r\n\r\n.carousel img {\r\n    display: block;\r\n    height: 200px;\r\n}\r\n\r\n@media screen and ( min-width: 768px ) {\r\n    .carousel img {\r\n        height: 400px;\r\n    }\r\n}\r\n\r\n.gallery-slide {\r\n    height: 500px;\r\n    z-index: 0;\r\n}\r\n\r\nagm-map {\r\n    height: 500px;\r\n}\r\n\r\n.ruleText{\r\n    display: block;\r\n}\r\n\r\n/*Icon Button*/\r\n\r\n.faShares {\r\n    padding-top: 1em;\r\n    font-size: 30px;\r\n    width: 50px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    margin: 5px 2px;\r\n}\r\n\r\n.fa:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\n.fa-facebookc {\r\n    background: #3B5998;\r\n    color: white;\r\n}\r\n\r\n.fa-twitterc {\r\n    background: #55ACEE;\r\n    color: white;\r\n}\r\n\r\n.fa-googlec {\r\n    background: #dd4b39;\r\n    color: white;\r\n}\r\n\r\n.fa-youtubec {\r\n    background: #bb0000;\r\n    color: white;\r\n}\r\n\r\n.fa-instagramc {\r\n    background: #125688;\r\n    color: white;\r\n}\r\n\r\n.fa-skypec {\r\n    background: #00aff0;\r\n    color: white;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/attractions/attractions-detail/attractions-detail.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/attractions/attractions-detail/attractions-detail.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"attractions['name']\">\r\n  <gallery class=\"gallery-slide img-fluid\" id=\"ex1\" [items]=\"items\" [thumb]=\"false\"></gallery>\r\n  <!--<gallery id=\"{{galleryId}}\"></gallery>-->\r\n  <div>\r\n  <div class=\"card text-white bg-primary\">\r\n    <div class=\"card-header mt-3\">\r\n      <h1 class=\"card-title\">{{attractions['name']}}</h1>\r\n      <p class=\"card-subtitle\">ປະເພດ: <b>{{attractions['attractions_type']['name']}}</b></p>\r\n    </div>\r\n  </div>\r\n    <ul class=\"nav nav-tabs nav-pills nav-justified bg-primary\" id=\"attractionsTab\" role=\"tablist\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link active\" id=\"att-overview\" data-toggle=\"tab\" href=\"#overviewT\" role=\"tab\" aria-controls=\"overviewT\" aria-selected=\"true\">Overview</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" id=\"att-photo\" data-toggle=\"tab\" href=\"#photoT\" role=\"tab\" aria-controls=\"photoT\" aria-selected=\"false\">ຮູບພາບ</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" id=\"att-about\" data-toggle=\"tab\" href=\"#aboutT\" role=\"tab\" aria-controls=\"aboutT\" aria-selected=\"false\">ກ່ຽວກັບ</a>\r\n      </li>\r\n    </ul>\r\n  <div class=\"tab-content\" id=\"attractionsContent\">\r\n    <div class=\"tab-pane fade show active mb-3\" id=\"overviewT\" role=\"tabpanel\" aria-labelledby=\"overviewT\">\r\n      <div class=\"row d-flex justify-content-center\">\r\n        <a *ngIf=\"attractions['location']\" href=\"https://www.google.com/maps/dir/{{lat}},{{lng}}/{{attractions['location']['lat']}},{{attractions['location']['long']}}\" target=\"_blank\" class=\"col-5 btn btn-primary btn-lg p-3\">\r\n          <i class=\"fa fa-map-pin\"></i> ນຳທາງ\r\n        </a>\r\n        <button class=\"col-5 btn btn-primary btn-lg 9-3\" data-toggle=\"modal\" data-target=\"#sheareModal\">\r\n          <i class=\"fa fa-share\"></i> ແຊ\r\n        </button>\r\n      </div>\r\n      <div *ngIf=\"attractions['socials'].length\">\r\n        <h5>ສື່ອອນລາຍ</h5>\r\n        <table class=\"table\">\r\n          <tr *ngFor=\"let social of attractions['socials']\">\r\n            <td><a href=\"{{social['url']}}\">{{social['name']}}</a></td>\r\n            <td><a href=\"{{social['url']}}\">{{social['url']}}</a></td>\r\n          </tr>\r\n        </table>\r\n        <span ></span>\r\n      </div>\r\n      <h5>ຕິດຕໍ່</h5>\r\n      <table class=\"table\">\r\n        <tr>\r\n          <td><i class=\"fa fa-phone\"></i> </td>\r\n          <td>{{attractions['tel']}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td><i class=\"fa fa-envelope\"></i></td>\r\n          <td>{{attractions['email']}}</td>\r\n        </tr>\r\n      </table>\r\n      <h5>ທີ່ຢູ່</h5>\r\n      <table class=\"table\">\r\n        <tr>\r\n          <td><i class=\"fa fa-address-card\"></i> ບ້ານ{{attractions['address']['village']}}</td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td><i class=\"fa fa-map-signs\"></i> ເມືອງ{{attractions['address']['district']['district']}}</td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td><i class=\"fa fa-map-marker\"></i> ແຂວງ{{attractions['address']['district']['province']['province']}}</td>\r\n\r\n        </tr>\r\n      </table>\r\n      <h5 *ngIf=\"weather['temp_c']\">ອຸນຫະພູມ</h5>\r\n        <div class=\"row\"  *ngIf=\"weather['temp_c']\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"weather\">\r\n              <div class=\"current\">\r\n                <div class=\"info\">\r\n                  <div>&nbsp;</div>\r\n                  <span class=\"display-1\">{{weather['temp_c']}}&deg;<small>C</small></span> <sup><img [src]=\"weather['icon_url']\" alt=\"weather icon\"></sup> <small>{{weather['weather']}}</small>\r\n                  <div class=\"h3\"><small><small>ແຮງລົມ:</small></small> {{weather['wind_string']}}</div>\r\n                  <div>&nbsp;</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      <h5>Map</h5>\r\n      <div class=\"map\">\r\n        <agm-map \r\n          [latitude]=\"attractions['location']['lat']\"\r\n          [longitude]=\"attractions['location']['long']\"\r\n          [zoom]=\"zoom\"\r\n          [disableDefaultUI]=\"false\"\r\n          [zoomControl]=\"true\">\r\n          \r\n          <agm-marker\r\n              [latitude]=\"attractions['location']['lat']\" \r\n              [longitude]=\"attractions['location']['long']\">\r\n              <agm-info-window>\r\n                  <strong>{{attractions['name']}}</strong>\r\n              </agm-info-window>\r\n            </agm-marker>\r\n  \r\n        </agm-map>\r\n      </div>\r\n    </div>\r\n    <div class=\"tab-pane fade mb-3 m-1\" id=\"photoT\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">\r\n      <span class=\"m-1\"></span>\r\n      <h5><b>ຮູບພາບ</b></h5>\r\n      <div class=\"grid row mt-3\">\r\n        <div class=\"grid-item col-md-4 col-sm-6\"\r\n            *ngFor=\"let item of items; let i = index\"\r\n            (click)=\"openLightbox(i)\">\r\n          <img [src]=\"item['data']['src']\" class=\"img-fluid m-1\">\r\n        </div>\r\n      </div>\r\n      <span class=\"m-1\"></span>\r\n      <h5><b>ວີດີໂອ</b></h5>\r\n      <div class=\"row\">\r\n        <iframe class=\"col-12 mt-3\" height=\"540px\" [src]=\"safeVideoUrl()\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen *ngIf=\"safeVideoUrl()\"></iframe>\r\n      </div>\r\n    </div>\r\n    <div class=\"tab-pane fade mb-3\" id=\"aboutT\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">\r\n      <span class=\"m-1\"></span>\r\n      <h5 *ngIf=\"attractions['details']\"><b>ກ່ຽວກັບສະຖານທີ່ທ່ອງທ່ຽວ</b></h5>\r\n      <div class=\"m-1\" *ngIf=\"attractions['details']\">\r\n        <p class=\"col-12\"> {{attractions['details']}}</p>\r\n      </div>\r\n      <span class=\"m-1\"></span>\r\n      <h5 *ngIf=\"attractions['rules']\"><b>ກົດລະບຽບ ຫຼື ຂໍ້ຫ້າມຕ່າງໆ</b></h5>\r\n      <div class=\"m-1 row\" *ngIf=\"attractions['rules']\">\r\n        <p class=\"col-12\"> {{attractions['rules']}}</p>\r\n      </div>\r\n      <span class=\"m-1\"></span>\r\n      <h5 *ngIf=\"attractions['activities']\"><b>ກິດຈະກຳຕ່າງໆ</b></h5>\r\n      <div class=\"m-1 row\" *ngIf=\"attractions['activities']\">\r\n        <p class=\"col-12\"> {{attractions['activities']}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n  <!--Sheare Social Modal-->\r\n  <div class=\"modal fade\" id=\"sheareModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"sheareModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"sheareModalLabel\">ແຊອອນລາຍ</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body d-flex justify-content-center\">\r\n          <a href=\"http://www.facebook.com/sharer.php?u=https://laotour-info.firebaseapp.com//#/attraction/detail/{{attractions['_id']}}\" class=\"btn bmd-btn-fab fa fa-facebook fa-facebookc faShares\" target=\"_blank\"></a>\r\n          <a href=\"http://twitter.com/share?text={{attractions['name']}}&url=https://laotour-info.firebaseapp.com//#/attraction/detail/{{attractions['_id']}}\" class=\"btn bmd-btn-fab fa fa-twitter fa-twitterc faShares\" target=\"_blank\"></a>\r\n          <a href=\"#\" class=\"btn bmd-btn-fab fa fa-instagram fa-instagramc faShares\" target=\"_blank\"></a>\r\n          <a href=\"https://plus.google.com/share?url=https://laotour-info.firebaseapp.com//#/attraction/detail/{{attractions['_id']}}\" class=\"btn bmd-btn-fab fa fa-google fa-googlec faShares\" target=\"_blank\"></a>\r\n          <a href=\"#\" class=\"btn bmd-btn-fab fa fa-skype fa-skypec faShares\" target=\"_blank\"></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<div id=\"pic1\" *ngIf=\"info_near_by['attractionses']\">\r\n    <div class=\"text-center p-4 mt-5\">\r\n      <h1><b>ສະຖານທີ່ຕ່າງໆທີ່ຢູ່ໃກ້ຄຽງ</b></h1>\r\n    </div>\r\n    <div class=\"container\">\r\n      <div class=\"row mb-5\">\r\n        <div class=\"col-md-4\" *ngFor=\"let restaurant of info_near_by['restaurants']\">\r\n          <div class=\"card mb-3\">\r\n            <img class=\"card-img-top\" [src]=\"restaurant['images'][0]\" alt=\"Card image cap\">\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\">{{restaurant['name']}}</h5>\r\n              <p class=\"card-text\"></p>\r\n              <a class=\"btn btn-primary btnIfo\" [routerLink]=\"['/restaurant', 'detail', restaurant['_id']]\">ລາຍລະອຽດ</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\" *ngFor=\"let shelter of info_near_by['shelters']\">\r\n          <div class=\"card mb-3\">\r\n            <img class=\"card-img-top\" [src]=\"shelter['images'][0]\" alt=\"Card image cap\">\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\">{{shelter['name']}}</h5>\r\n              <p class=\"card-text\"></p>\r\n              <a class=\"btn btn-primary btnIfo\" [routerLink]=\"['/shelter', 'detail', shelter['_id']]\">ລາຍລະອຽດ</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\" *ngFor=\"let transportation of info_near_by['transportations']\">\r\n          <div class=\"card mb-3\">\r\n            <img class=\"card-img-top\" [src]=\"transportation['images'][0]\" alt=\"Card image cap\">\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\">{{transportation['name']}}</h5>\r\n              <p class=\"card-text\"></p>\r\n              <a class=\"btn btn-primary btnIfo\" [routerLink]=\"['/transportation', 'detail', transportation['_id']]\">ລາຍລະອຽດ</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\" *ngFor=\"let att of info_near_by['attractionses']\">\r\n          <div class=\"card mb-3\">\r\n            <img class=\"card-img-top\" [src]=\"att['images'][0]\" alt=\"Card image cap\">\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\">{{att['name']}}</h5>\r\n              <p class=\"card-text\"></p>\r\n              <a class=\"btn btn-primary btnIfo\" [routerLink]=\"['/attraction', 'detail', att['_id']]\">ລາຍລະອຽດ</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\" *ngFor=\"let another of info_near_by['another_places']['anothers']\">\r\n          <div class=\"card mb-3\">\r\n            <img class=\"card-img-top\" [src]=\"another['images'][0]\" alt=\"Card image cap\">\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\">{{another['name']}}</h5>\r\n              <p class=\"card-text\"></p>\r\n              <button class=\"btn btn-primary btnIfo\" [routerLink]=\"['/another', 'detail', another['_id']]\">ລາຍລະອຽດ</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\" *ngFor=\"let internet of info_near_by['another_places']['internets']\">\r\n          <div class=\"card mb-3\">\r\n            <img class=\"card-img-top\" [src]=\"internet['images'][0]\" alt=\"Card image cap\">\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\">{{internet['name']}}</h5>\r\n              <p class=\"card-text\"></p>\r\n              <button class=\"btn btn-primary btnIfo\" [routerLink]=\"['/another', 'internet', 'detail', internet['_id']]\">ລາຍລະອຽດ</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/attractions/attractions-detail/attractions-detail.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/attractions/attractions-detail/attractions-detail.component.ts ***!
  \********************************************************************************/
/*! exports provided: AttractionsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttractionsDetailComponent", function() { return AttractionsDetailComponent; });
/* harmony import */ var _services_detail_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/detail.service */ "./src/app/services/detail.service.ts");
/* harmony import */ var _services_locationcheck_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/locationcheck.service */ "./src/app/services/locationcheck.service.ts");
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-progressbar */ "./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-gallery/core */ "./node_modules/@ngx-gallery/core/esm5/ngx-gallery-core.js");
/* harmony import */ var _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-gallery/lightbox */ "./node_modules/@ngx-gallery/lightbox/esm5/ngx-gallery-lightbox.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AttractionsDetailComponent = /** @class */ (function () {
    function AttractionsDetailComponent(gallery, lightbox, ngProgress, route, router, safeSanitizer, locationService, detailService) {
        var _this = this;
        this.gallery = gallery;
        this.lightbox = lightbox;
        this.ngProgress = ngProgress;
        this.route = route;
        this.router = router;
        this.safeSanitizer = safeSanitizer;
        this.locationService = locationService;
        this.detailService = detailService;
        this.attractions = {};
        this.weather = {};
        this.info_near_by = {};
        this.zoom = 10;
        this.imageData = [];
        this.ngProgress.start();
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            if (_this.id) {
                var attSubscript_1 = _this.detailService.getAttractions(_this.id).subscribe(function (att_res) {
                    _this.attractions = att_res.json()['data'];
                    _this.ngProgress.done();
                    var nearSubscript = _this.detailService.getInfoNearby(_this.attractions['_id'], _this.attractions['location']['lat']
                        + ',' +
                        _this.attractions['location']['long'])
                        .subscribe(function (near_res) {
                        _this.info_near_by = near_res.json()['data'];
                        console.log(_this.info_near_by);
                        nearSubscript.unsubscribe();
                    }, function (near_error) {
                        nearSubscript.unsubscribe();
                    });
                    var apiSubscript = _this.locationService.getLocalWeater(_this.attractions['location']['lat'], _this.attractions['location']['long']).subscribe(function (api_res) {
                        _this.weather = api_res.json()['current_observation'];
                        apiSubscript.unsubscribe();
                    }, function (api_error) {
                        apiSubscript.unsubscribe();
                    });
                    for (var i = 0; i < _this.attractions['images'].length; i++) {
                        _this.imageData[i] = {
                            srcUrl: _this.attractions['images'][i],
                            previewUrl: _this.attractions['images'][i]
                        };
                    }
                    _this.items = _this.imageData.map(function (item) { return new _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_4__["ImageItem"](item.srcUrl, item.previewUrl); });
                    _this.gallery.ref('lightbox').load(_this.items);
                    attSubscript_1.unsubscribe();
                }, function (att_error) {
                    _this.ngProgress.done();
                    attSubscript_1.unsubscribe();
                    _this.router.navigate(['/home']);
                });
            }
        });
    }
    AttractionsDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
            });
        }
    };
    AttractionsDetailComponent.prototype.openLightbox = function (index) {
        this.lightbox.open(index, 'lightbox', {
            panelClass: 'fullscreen'
        });
    };
    AttractionsDetailComponent.prototype.safeVideoUrl = function () {
        var url = '';
        if (this.attractions['video_url']) {
            url = this.attractions['video_url'];
        }
        var new_url = url.split('&')[0];
        var urlArray = new_url.split('=');
        if (urlArray[0] === 'https://www.youtube.com/watch?v') {
            var youtube_id = urlArray[1];
            var youtube_domain = urlArray[0].split('watch')[0];
            var youtube_embed_url = youtube_domain + 'embed/' + youtube_id;
            return this.safeSanitizer.bypassSecurityTrustResourceUrl(youtube_embed_url);
        }
        return this.safeSanitizer.bypassSecurityTrustResourceUrl(url);
    };
    AttractionsDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-attractions-detail',
            template: __webpack_require__(/*! ./attractions-detail.component.html */ "./src/app/attractions/attractions-detail/attractions-detail.component.html"),
            styles: [__webpack_require__(/*! ./attractions-detail.component.css */ "./src/app/attractions/attractions-detail/attractions-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_gallery_core__WEBPACK_IMPORTED_MODULE_4__["Gallery"],
            _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_5__["Lightbox"],
            ngx_progressbar__WEBPACK_IMPORTED_MODULE_2__["NgProgress"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"],
            _services_locationcheck_service__WEBPACK_IMPORTED_MODULE_1__["LocationcheckService"],
            _services_detail_service__WEBPACK_IMPORTED_MODULE_0__["DetailService"]])
    ], AttractionsDetailComponent);
    return AttractionsDetailComponent;
}());



/***/ }),

/***/ "./src/app/attractions/attractions-list/attractions-list.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/attractions/attractions-list/attractions-list.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tableList {\r\n    cursor: pointer;\r\n}\r\n\r\nagm-map {\r\n    height: 500px;\r\n}"

/***/ }),

/***/ "./src/app/attractions/attractions-list/attractions-list.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/attractions/attractions-list/attractions-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<table class=\"table table-hover tableList\">\r\n  <thead>\r\n    <th><button class=\"btn btn-info\" data-toggle=\"collapse\" title=\"ຈຸດທີ່ຢູ່ຂອງເຈົ້າ\" data-target=\"#collapse-map\"><i class=\"fa fa-map\"></i></button></th>\r\n  </thead>\r\n  <tr class=\"collapse\" id=\"collapse-map\">\r\n    <div class=\"map\">\r\n      <agm-map \r\n        [latitude]=\"latitude\"\r\n        [longitude]=\"longitude\"\r\n        [zoom]=\"zoom\"\r\n        [disableDefaultUI]=\"false\"\r\n        [zoomControl]=\"true\">\r\n        \r\n        <agm-marker *ngFor=\"let attractions of attractionses\"\r\n            [latitude]=\"attractions['location']['lat']\" \r\n            [longitude]=\"attractions['location']['long']\">\r\n            <agm-info-window>\r\n                <a [routerLink]=\"['/attraction', 'detail', attractions['_id']]\">{{attractions['name']}}</a>\r\n            </agm-info-window>\r\n          </agm-marker>\r\n\r\n          \r\n        <agm-circle \r\n            [latitude]=\"latitude\"\r\n            [longitude]=\"longitude\" \r\n            [radius]=\"2000\"\r\n            [fillColor]=\"'green'\"\r\n            [circleDraggable]=\"true\"\r\n            [editable]=\"true\">\r\n          </agm-circle>\r\n      </agm-map>\r\n    </div>\r\n  </tr>\r\n  <tr class=\"card\" *ngFor=\"let attrac of attractionses\">\r\n    <td (click)=\"showAttracdetail(attrac['_id'])\">\r\n      <img [src]=\"attrac['images'][0]\" width=\"30%\" class=\"rounded float-right\" alt=\"\">\r\n      <h5 class=\"{{hD}}\"><b>{{attrac['name']}}</b></h5>\r\n      <p class=\"card-subtitle\">ປະເພດ: <b>{{attrac['attractions_type']['name']}}</b></p>\r\n      <p class=\"{{hideText}}\">{{attrac['details']}}</p>\r\n    </td>\r\n  </tr>\r\n\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/attractions/attractions-list/attractions-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/attractions/attractions-list/attractions-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: AttractionsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttractionsListComponent", function() { return AttractionsListComponent; });
/* harmony import */ var _services_all_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/all.service */ "./src/app/services/all.service.ts");
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-progressbar */ "./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var _services_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/type.service */ "./src/app/services/type.service.ts");
/* harmony import */ var _services_locationcheck_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/locationcheck.service */ "./src/app/services/locationcheck.service.ts");
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






var AttractionsListComponent = /** @class */ (function () {
    function AttractionsListComponent(router, route, ngProgress, locationService, typeService, allService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.ngProgress = ngProgress;
        this.locationService = locationService;
        this.typeService = typeService;
        this.allService = allService;
        this.hD = 'h3';
        this.attractionses = [];
        this.zoom = 10;
        this.route.params.subscribe(function (params) {
            _this.typeid = params['typeid'];
            if (_this.typeid) {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (position) {
                        var lat = position.coords.latitude;
                        var lng = position.coords.longitude;
                        _this.latitude = lat;
                        _this.longitude = lng;
                        var subscript = _this.locationService.getLocalWeater(lat, lng).subscribe(function (res) {
                            var api_data = res.json()['current_observation']['observation_location'];
                            var attSubscript = _this.typeService.getTypeAttractionses(_this.typeid, api_data['country'], lat + ',' + lng).subscribe(function (att_res) {
                                _this.attractionses = att_res.json()['data'];
                                _this.ngProgress.done();
                                attSubscript.unsubscribe();
                            }, function (att_error) {
                                _this.ngProgress.done();
                                attSubscript.unsubscribe();
                            });
                            subscript.unsubscribe();
                        }, function (error) {
                            _this.ngProgress.done();
                            subscript.unsubscribe();
                        });
                    }, function () {
                        var subscript = _this.typeService.getTypeAttractionses(_this.typeid, 'CTC', '0,0').subscribe(function (res) {
                            _this.attractionses = res.json()['data'];
                            _this.ngProgress.done();
                            subscript.unsubscribe();
                        }, function (error) {
                            _this.ngProgress.done();
                            subscript.unsubscribe();
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
                            var attSubscript = _this.allService.getAttractionses(api_data['country'], lat + ',' + lng).subscribe(function (att_res) {
                                _this.attractionses = att_res.json()['data'];
                                _this.ngProgress.done();
                                attSubscript.unsubscribe();
                            }, function (att_error) {
                                _this.ngProgress.done();
                                attSubscript.unsubscribe();
                            });
                            subscript.unsubscribe();
                        }, function (error) {
                            _this.ngProgress.done();
                            subscript.unsubscribe();
                        });
                    }, function () {
                        var subscript = _this.allService.getAttractionses('CTC', '0,0').subscribe(function (res) {
                            _this.attractionses = res.json()['data'];
                            _this.ngProgress.done();
                            subscript.unsubscribe();
                        }, function (error) {
                            _this.ngProgress.done();
                            subscript.unsubscribe();
                        });
                    });
                }
            }
        });
    }
    AttractionsListComponent.prototype.ngOnInit = function () {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth <= 560) {
            this.hideText = 'text-hide';
            this.hD = 'h5';
        }
    };
    AttractionsListComponent.prototype.showAttracdetail = function (attracid) {
        this.router.navigate(['/attraction', 'detail', attracid]);
    };
    AttractionsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-attractions-list',
            template: __webpack_require__(/*! ./attractions-list.component.html */ "./src/app/attractions/attractions-list/attractions-list.component.html"),
            styles: [__webpack_require__(/*! ./attractions-list.component.css */ "./src/app/attractions/attractions-list/attractions-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            ngx_progressbar__WEBPACK_IMPORTED_MODULE_1__["NgProgress"],
            _services_locationcheck_service__WEBPACK_IMPORTED_MODULE_3__["LocationcheckService"],
            _services_type_service__WEBPACK_IMPORTED_MODULE_2__["TypeService"],
            _services_all_service__WEBPACK_IMPORTED_MODULE_0__["AllService"]])
    ], AttractionsListComponent);
    return AttractionsListComponent;
}());



/***/ }),

/***/ "./src/app/attractions/attractions-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/attractions/attractions-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AttractionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttractionsRoutingModule", function() { return AttractionsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _attractions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attractions.component */ "./src/app/attractions/attractions.component.ts");
/* harmony import */ var _attractions_list_attractions_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attractions-list/attractions-list.component */ "./src/app/attractions/attractions-list/attractions-list.component.ts");
/* harmony import */ var _attractions_detail_attractions_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attractions-detail/attractions-detail.component */ "./src/app/attractions/attractions-detail/attractions-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '',
        component: _attractions_component__WEBPACK_IMPORTED_MODULE_2__["AttractionsComponent"],
        children: [
            {
                path: '',
                component: _attractions_list_attractions_list_component__WEBPACK_IMPORTED_MODULE_3__["AttractionsListComponent"]
            },
            {
                path: 'detail/:id',
                component: _attractions_detail_attractions_detail_component__WEBPACK_IMPORTED_MODULE_4__["AttractionsDetailComponent"]
            },
            {
                path: 'type/:typeid',
                component: _attractions_list_attractions_list_component__WEBPACK_IMPORTED_MODULE_3__["AttractionsListComponent"]
            }
        ]
    }];
var AttractionsRoutingModule = /** @class */ (function () {
    function AttractionsRoutingModule() {
    }
    AttractionsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        })
    ], AttractionsRoutingModule);
    return AttractionsRoutingModule;
}());



/***/ }),

/***/ "./src/app/attractions/attractions.component.css":
/*!*******************************************************!*\
  !*** ./src/app/attractions/attractions.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spaceEp {\r\n    margin-top: 4.8em;\r\n}"

/***/ }),

/***/ "./src/app/attractions/attractions.component.html":
/*!********************************************************!*\
  !*** ./src/app/attractions/attractions.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container mt-5 mb-5\">\n    <div class=\"row spaceEp\"></div>\n    <div class=\"row ml-1 d-block\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/attractions/attractions.component.ts":
/*!******************************************************!*\
  !*** ./src/app/attractions/attractions.component.ts ***!
  \******************************************************/
/*! exports provided: AttractionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttractionsComponent", function() { return AttractionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-progressbar */ "./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AttractionsComponent = /** @class */ (function () {
    function AttractionsComponent(ngProgress, route) {
        this.ngProgress = ngProgress;
        this.route = route;
    }
    AttractionsComponent.prototype.ngOnInit = function () {
        /*Progressstatus*/
        /** request started */
        this.ngProgress.start();
        this.ngProgress.done();
    };
    AttractionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-attractions',
            template: __webpack_require__(/*! ./attractions.component.html */ "./src/app/attractions/attractions.component.html"),
            styles: [__webpack_require__(/*! ./attractions.component.css */ "./src/app/attractions/attractions.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_progressbar__WEBPACK_IMPORTED_MODULE_1__["NgProgress"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AttractionsComponent);
    return AttractionsComponent;
}());



/***/ }),

/***/ "./src/app/attractions/attractions.module.ts":
/*!***************************************************!*\
  !*** ./src/app/attractions/attractions.module.ts ***!
  \***************************************************/
/*! exports provided: AttractionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttractionsModule", function() { return AttractionsModule; });
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _attractions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attractions.component */ "./src/app/attractions/attractions.component.ts");
/* harmony import */ var _attractions_list_attractions_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attractions-list/attractions-list.component */ "./src/app/attractions/attractions-list/attractions-list.component.ts");
/* harmony import */ var _attractions_detail_attractions_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attractions-detail/attractions-detail.component */ "./src/app/attractions/attractions-detail/attractions-detail.component.ts");
/* harmony import */ var _attractions_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attractions-routing.module */ "./src/app/attractions/attractions-routing.module.ts");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-gallery/core */ "./node_modules/@ngx-gallery/core/esm5/ngx-gallery-core.js");
/* harmony import */ var _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-gallery/lightbox */ "./node_modules/@ngx-gallery/lightbox/esm5/ngx-gallery-lightbox.js");
/* harmony import */ var _ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-gallery/gallerize */ "./node_modules/@ngx-gallery/gallerize/esm5/ngx-gallery-gallerize.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var Attractions_component = [
    _attractions_component__WEBPACK_IMPORTED_MODULE_3__["AttractionsComponent"],
    _attractions_list_attractions_list_component__WEBPACK_IMPORTED_MODULE_4__["AttractionsListComponent"],
    _attractions_detail_attractions_detail_component__WEBPACK_IMPORTED_MODULE_5__["AttractionsDetailComponent"]
];
var AttractionsModule = /** @class */ (function () {
    function AttractionsModule() {
    }
    AttractionsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _attractions_routing_module__WEBPACK_IMPORTED_MODULE_6__["AttractionsRoutingModule"],
                _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_7__["GalleryModule"].forRoot(),
                _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_8__["LightboxModule"].forRoot(),
                _ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_9__["GallerizeModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_0__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBXoeOmRRzSl0b4iUBadAz8M-_Zva0DpfQ'
                })
            ],
            declarations: Attractions_component.slice(),
            exports: [_attractions_component__WEBPACK_IMPORTED_MODULE_3__["AttractionsComponent"]]
        })
    ], AttractionsModule);
    return AttractionsModule;
}());



/***/ })

}]);
//# sourceMappingURL=attractions-attractions-module.js.map