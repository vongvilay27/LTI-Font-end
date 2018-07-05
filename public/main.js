(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./all-info/all-info.module": [
		"./src/app/all-info/all-info.module.ts",
		"all-info-all-info-module"
	],
	"./another/another.module": [
		"./src/app/another/another.module.ts",
		"another-another-module~attractions-attractions-module~companies-companies-module~restaurants-restaur~3250f78a",
		"another-another-module"
	],
	"./attractions/attractions.module": [
		"./src/app/attractions/attractions.module.ts",
		"attractions-attractions-module~companies-companies-module~restaurants-restaurants-module~shelters-sh~a989ca3c",
		"another-another-module~attractions-attractions-module~companies-companies-module~restaurants-restaur~3250f78a",
		"attractions-attractions-module~restaurants-restaurants-module~shelters-shelters-module~transportatio~71e2bfbf",
		"attractions-attractions-module"
	],
	"./companies/companies.module": [
		"./src/app/companies/companies.module.ts",
		"attractions-attractions-module~companies-companies-module~restaurants-restaurants-module~shelters-sh~a989ca3c",
		"another-another-module~attractions-attractions-module~companies-companies-module~restaurants-restaur~3250f78a",
		"companies-companies-module"
	],
	"./restaurants/restaurants.module": [
		"./src/app/restaurants/restaurants.module.ts",
		"attractions-attractions-module~companies-companies-module~restaurants-restaurants-module~shelters-sh~a989ca3c",
		"another-another-module~attractions-attractions-module~companies-companies-module~restaurants-restaur~3250f78a",
		"attractions-attractions-module~restaurants-restaurants-module~shelters-shelters-module~transportatio~71e2bfbf",
		"restaurants-restaurants-module"
	],
	"./shelters/shelters.module": [
		"./src/app/shelters/shelters.module.ts",
		"attractions-attractions-module~companies-companies-module~restaurants-restaurants-module~shelters-sh~a989ca3c",
		"attractions-attractions-module~restaurants-restaurants-module~shelters-shelters-module~transportatio~71e2bfbf",
		"shelters-shelters-module"
	],
	"./transportations/transportations.module": [
		"./src/app/transportations/transportations.module.ts",
		"attractions-attractions-module~companies-companies-module~restaurants-restaurants-module~shelters-sh~a989ca3c",
		"attractions-attractions-module~restaurants-restaurants-module~shelters-shelters-module~transportatio~71e2bfbf",
		"transportations-transportations-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spaceEp{\r\n    margin-top: 6em;\r\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"spaceEp\"></div>\n  <div class=\"row\">\n    <h1 class=\"p-2\"><b>ກ່ຽວກັບເວບໄຊ໌ </b></h1>\n    <p class=\"p-2\">&nbsp;ເປັນອົງກອນໜຶ່ງທີ່ໃຫ້ບໍລິການສັງຄົມ ດ້ານເທັກໂນໂລຢີ ແລະການສື່ສານ. ພວກເຮົາເລີ່ມຕົ້ນຈາກສູນ ເລີ່ມຈາກຄົນກຸ່ມໜຶ່ງທີ່ມີຄວາມຝັນຄ້າຍຄືກັນ ທີ່ຕ້ອງການ “ເຮັດໃນສິ່ງທີ່ຮັກ”. ຫຼັງຈາກລວມຕົວກັນໃນຕົ້ນປີ 2017 ຈຶ່ງໄດ້ເລີ່ມສັນສ້າງຜົນງານຕາມຄວາມຖະໜັດ ເຊັ່ນ: ສ້າງເວັບໄຊ້, ຂຽນແອັບພລິເຄຊັ່ນ ແລະໃຫ້ການບໍລິການດ້ານສື່ໂຄສະນາຕ່າງໆ. ທຸກຢ່າງທີ່ພວກເຮົາເຮັດຂຶ້ນມາ ແມ່ນເພື່ອເປັນການຕອບໂຈດບັນຫາສັງຄົມ ໃຫ້ສັງຄົມໄດ້ຮັບຄວາມສະດວກສະບາຍ ແລະແກ້ໄຂຊີວິດການເປັນຢູ່ໃຫ້ສອດຄ່ອງກັບຍຸກສະໄໝ.</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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


var AboutComponent = /** @class */ (function () {
    function AboutComponent(ngProgress) {
        this.ngProgress = ngProgress;
    }
    AboutComponent.prototype.ngOnInit = function () {
        /*Progressstatus*/
        /** request started */
        this.ngProgress.start();
        /*        this.http.get(url).subscribe(res){
                    /!** request completed *!/
                    this.ngProgress.done();
                }*/
        this.ngProgress.done();
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_progressbar__WEBPACK_IMPORTED_MODULE_1__["NgProgress"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    },
    {
        path: 'shelter',
        loadChildren: './shelters/shelters.module#SheltersModule'
    },
    {
        path: 'transportation',
        loadChildren: './transportations/transportations.module#TransportationsModule'
    },
    {
        path: 'restaurant',
        loadChildren: './restaurants/restaurants.module#RestaurantsModule'
    },
    {
        path: 'attraction',
        loadChildren: './attractions/attractions.module#AttractionsModule'
    },
    {
        path: 'company',
        loadChildren: './companies/companies.module#CompaniesModule'
    },
    {
        path: 'another',
        loadChildren: './another/another.module#AnotherModule'
    },
    {
        path: 'allinfo',
        loadChildren: './all-info/all-info.module#AllInfoModule'
    },
    {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]
    },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"]
    },
    {
        path: 'search',
        component: _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]
    },
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: '**', redirectTo: 'home'
    }
];
var config = {
    useHash: true,
};
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, config)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.navbar .transparent .navbar-inverse .navbar-inner {\r\n    background-color: rgba(92, 184, 92, 0.8);\r\n}*/\r\n.navbar {\r\n    z-index: 2;\r\n}\r\n/*Sidenav bar*/\r\n.sidenav {\r\n    height: 100%;\r\n    width: 100%;\r\n    position: fixed;\r\n    z-index: 10;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #1A237E;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    padding-top: 60px;\r\n    -webkit-animation: fade 0.3s;\r\n            animation: fade 0.3s;\r\n}\r\n@-webkit-keyframes fade {\r\n    0%,30% { opacity: 0; }\r\n    100% { opacity: 1; }\r\n}\r\n@keyframes fade {\r\n    0%,30% { opacity: 0; }\r\n    100% { opacity: 1; }\r\n}\r\n.sidenav a {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 28px;\r\n    color: #818181;\r\n    display: block;\r\n    transition: 0.3s;\r\n}\r\n.sidenav a:hover {\r\n    color: #f1f1f1;\r\n}\r\n.sidenav .closebtn {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n    font-size: 36px;\r\n    margin-left: 50px;\r\n    cursor: pointer;\r\n\r\n}\r\n@media screen and (max-height: 450px) {\r\n    .sidenav {padding-top: 15px;}\r\n    .sidenav a {font-size: 18px;}\r\n}\r\n/*fix carousel on navbar*/\r\n.carousel-indicators{\r\n    /*  z-index: -1;*/\r\n\r\n}\r\n/*Footer*/\r\n.page-footer{\r\n    background-color: #2196F3;\r\n    color: white;\r\n}\r\n.list-group .list-group-item{\r\n    color: white;\r\n}\r\n.list-group-item:hover {\r\n    background-color: #BBDEFB;\r\n}\r\n/*Attraction Dropdown*/\r\n.dropdown:hover .dropdown-menu {\r\n    display: block;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-progress\r\n        [positionUsing]=\"'marginLeft'\" [minimum]=\"0.15\" [maximum]=\"1\"\r\n        [speed]=\"200\" [showSpinner]=\"false\" [direction]=\"'leftToRightIncreased'\"\r\n        [color]=\"'red'\" [trickleSpeed]=\"250\" [thick]=\"false\" [ease]=\"'linear'\"\r\n></ng-progress>\r\n<!--Navbar-->\r\n<header>\r\n  <nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-primary\">\r\n    <div class=\"btn-group\">\r\n      <button class=\"navbar-toggler\" (click)=\"opencNav()\" type=\"button\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand pl-2\" href=\"#\">LaoTourInfo</a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/']\">ໜ້າຫຼັັກ</a>\r\n        </li>\r\n        <li class=\"nav-item dropdown\" routerLinkActive=\"active\">\r\n<!--          <a class=\"nav-link\" [routerLink]=\"['/attractionmain']\">ສະຖານທີ່ທ່ອງທ່ຽວ</a>-->\r\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"attrac_type\" role=\"hover\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            ສະຖານທີ່ທ່ອງທ່ຽວ\r\n          </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n            <a class=\"dropdown-item\" *ngFor=\"let type of types\" [routerLink]=\"['/attraction','type',type['_id']]\">{{type['name']}}</a>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/allinfo']\">ຂໍ້ມູນທັງໝົດ</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/contact']\">ຕິດຕໍ່</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/about']\">ກ່ຽວກັບ</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"bmd-form-group bmd-collapse-inline\">\r\n      <button class=\"btn bmd-btn-icon\" for=\"search\" data-toggle=\"collapse\" data-target=\"#collapse-search\" aria-expanded=\"false\" aria-controls=\"collapse-search\">\r\n        <i class=\"fa fa-search text-white\"></i>\r\n      </button>\r\n      <span id=\"collapse-search\" class=\"collapse\">\r\n        <form novalidate [formGroup]=\"searchForm\" (ngSubmit)=\"doSearch()\">\r\n          <input class=\"form-control\" type=\"search\" formControlName=\"search_keyword\" id=\"search\" placeholder=\"ຄົ້ນຫາ\">\r\n        </form>\r\n      </span>\r\n    </div>\r\n\r\n  </nav>\r\n</header>\r\n<div *ngIf=\"mySidenav\" class=\"sidenav\">\r\n  <a class=\"closebtn\" (click)=\"opencNav()\">&times;</a>\r\n  <a routerLink=\"['/home']\" (click)=\"opencNav()\">ໜ້າຫຼັັກ</a>\r\n  <a [routerLink]=\"['/attractionmain']\" (click)=\"opencNav()\">ສະຖານທີ່ທ່ອງທ່ຽວ</a>\r\n  <a [routerLink]=\"['/allinfo']\" (click)=\"opencNav()\">ຂໍ້ມູນທັງໝົດ</a>\r\n  <a [routerLink]=\"['/contact']\" (click)=\"opencNav()\">ຕິດຕໍ່</a>\r\n  <a [routerLink]=\"['/about']\" (click)=\"opencNav()\">ກ່ຽວກັບ</a>\r\n</div>\r\n\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n\r\n  <!--Footer-->\r\n  <footer class=\"page-footer pt-4 mt-4\">\r\n    <!--Footer Links-->\r\n    <div class=\"container-fluid text-center text-md-left\">\r\n      <div class=\"row\">\r\n\r\n        <!--First column-->\r\n        <div class=\"col-md-6\">\r\n          <h3 class=\"text-uppercase ml-4\"><b>Lao Tour Info</b></h3>\r\n          <p class=\"ml-4\">ເກີດເປັນຄົນຢ່າ ລອບກັດ ເພາະມັນເປັນນິໄສຂອງສັດ ບໍ່ແມ່ນຂອງຄົນ</p>\r\n        </div>\r\n        <!--/.First column-->\r\n\r\n        <!--Second column-->\r\n        <div class=\"col-md-6\">\r\n          <h5 class=\"text-uppercase\">Links</h5>\r\n          <div class=\"list-group\">\r\n            <a [routerLink]=\"['home']\" class=\"list-group-item\">\r\n              ໜັາຫຼັກ\r\n            </a>\r\n            <a [routerLink]=\"['attractionmain']\" class=\"list-group-item\">ສະຖານທີ່ທ່ອງທ່ຽວ</a>\r\n            <a [routerLink]=\"['allinfo']\" class=\"list-group-item\">ຂໍ້ມູນທັງໝົດ</a>\r\n            <a [routerLink]=\"['about']\" class=\"list-group-item\">ກ່ຽວກັບ</a>\r\n            <a [routerLink]=\"['contact']\" class=\"list-group-item\">ຕິດຕໍ່</a>\r\n          </div>\r\n        </div>\r\n        <!--/.Second column-->\r\n      </div>\r\n    </div>\r\n    <!--/.Footer Links-->\r\n\r\n    <!--Copyright-->\r\n    <div class=\"py-3 text-center\">\r\n      © 2018 Copyright:\r\n      <a href=\"#\"> LaoTourInfo </a>\r\n    </div>\r\n    <!--/.Copyright-->\r\n  </footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_type_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/type.service */ "./src/app/services/type.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-progressbar */ "./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(ngProgress, typeService, formBuilder, router) {
        var _this = this;
        this.ngProgress = ngProgress;
        this.typeService = typeService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.types = [];
        this.mySidenav = false;
        this.searchForm = this.formBuilder.group({
            search_keyword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
        var subscription = this.typeService.getAttractionsTypes().subscribe(function (res) {
            _this.types = res.json()['data'];
            _this.ngProgress.done();
            subscription.unsubscribe();
        }, function (error) {
            _this.ngProgress.done();
            subscription.unsubscribe();
        });
    }
    AppComponent.prototype.inOninit = function () {
    };
    // Sidenavbar script
    AppComponent.prototype.opencNav = function () {
        this.mySidenav = !this.mySidenav;
        // this.searcheck = false;
        // if(this.btnsearch == "fa-close"){
        //     this.btnsearch = "fa-search"
        // }
    };
    AppComponent.prototype.doSearch = function () {
        if (this.searchForm.valid && this.searchForm.value['search_keyword'].trim()) {
            this.router.navigate(['/search'], {
                queryParams: {
                    q: this.searchForm.value['search_keyword'].trim()
                }
            });
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_progressbar__WEBPACK_IMPORTED_MODULE_3__["NgProgress"],
            _services_type_service__WEBPACK_IMPORTED_MODULE_1__["TypeService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _services_all_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/all.service */ "./src/app/services/all.service.ts");
/* harmony import */ var _services_type_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/type.service */ "./src/app/services/type.service.ts");
/* harmony import */ var _services_locationcheck_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/locationcheck.service */ "./src/app/services/locationcheck.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-progressbar */ "./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _services_detail_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/detail.service */ "./src/app/services/detail.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// Components






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ngx_progressbar__WEBPACK_IMPORTED_MODULE_9__["NgProgressModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_8__["HomeModule"]
            ],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_10__["APP_BASE_HREF"], useValue: '/' },
                _services_locationcheck_service__WEBPACK_IMPORTED_MODULE_2__["LocationcheckService"],
                _services_type_service__WEBPACK_IMPORTED_MODULE_1__["TypeService"],
                _services_all_service__WEBPACK_IMPORTED_MODULE_0__["AllService"],
                _services_detail_service__WEBPACK_IMPORTED_MODULE_15__["DetailService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact{\r\n    margin-top: 8em;\r\n}"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container contact\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 col-lg-6\">\r\n      <h1><b>ຕິດຕໍ່ເຮົາ</b></h1>\r\n      <p>ທີ່ຢູ່: <b>ບ້ານສສສສສສສສ ເມືອງນນນນນນນນນນນນ ແຂວງດດດດດດດດດດດດ</b></p>\r\n      <p>ເບີໂທລະສັບ: <b>020 555 555 55, 030 55 555 55</b></p>\r\n      <p>ອີເມວ: <b>laotourinfo@laotour.com</b></p>\r\n      <div>\r\n        <iframe\r\n                width=\"100%\"\r\n                height=\"450\"\r\n                frameborder=\"0\" style=\"border:0\"\r\n                src=\"https://www.google.com/maps/embed/v1/place?key=AIzaSyBYBMMN0dbUiPgZvbvevJg23HRvTjdjIB0\r\n    &q=Space+Needle,Seattle+WA\" allowfullscreen>\r\n        </iframe>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-lg-6\">\r\n      <form novalidate [formGroup]=\"contactForm\" class=\"card pt-4 p-3\">\r\n        <div class=\"form-group\">\r\n          <label for=\"nameText\" class=\"bmd-label-floating\">ຊື່ ແລະ ນາມສະກຸນ</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"nameText\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"emailText\" class=\"bmd-label-floating\">ອີເມວ</label>\r\n          <input type=\"email\" class=\"form-control\" id=\"emailText\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"titleText\" class=\"bmd-label-floating\">ຊື່ເລື່ອງ</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"titleText\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"storyTextarea\" class=\"bmd-label-floating\">ເນື້ອໃນ</label>\r\n          <textarea class=\"form-control\" id=\"storyTextarea\" rows=\"8\"></textarea>\r\n        </div>\r\n        <div class=\"d-flex justify-content-end\">\r\n          <button class=\"btn btn-default\">ຍົກເລີກ</button>\r\n          <button type=\"submit\" class=\"btn btn-info btn-raised\">ສົ່ງຂໍ້ມູນ</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-progressbar */ "./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = /** @class */ (function () {
    function ContactComponent(ngProgress, formBuilder) {
        this.ngProgress = ngProgress;
        this.formBuilder = formBuilder;
        this.contactForm = this.formBuilder.group({});
    }
    ContactComponent.prototype.ngOnInit = function () {
        /*Progressstatus*/
        /** request started */
        this.ngProgress.start();
        /*        this.http.get(url).subscribe(res){
                    /!** request completed *!/
                    this.ngProgress.done();
                }*/
        this.ngProgress.done();
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_progressbar__WEBPACK_IMPORTED_MODULE_1__["NgProgress"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/home-additional/home-additional.component.css":
/*!********************************************************************!*\
  !*** ./src/app/home/home-additional/home-additional.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btnIfo{\r\n    float: right;\r\n}"

/***/ }),

/***/ "./src/app/home/home-additional/home-additional.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/home/home-additional/home-additional.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center p-4 mt-5\">\r\n  <h1><b>ສະຖານທີ່ຄວນຮູ້ອື່ນໆ</b></h1>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"row mb-5\">\r\n    <div class=\"col-md-4\" *ngFor=\"let internet of anotherplaces['internets']\">\r\n      <div class=\"card mb-3\">\r\n        <img class=\"card-img-top\" [src]=\"internet['images'][0]\" alt=\"Card image cap\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">{{internet['name']}}</h5>\r\n          <p class=\"card-text\"></p>\r\n          <button class=\"btn btn-primary btnIfo\" >ລາຍລະອຽດ</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\" *ngFor=\"let another of anotherplaces['anothers']\">\r\n      <div class=\"card mb-3\">\r\n        <img class=\"card-img-top\" [src]=\"another['images'][0]\" alt=\"Card image cap\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">{{another['name']}}</h5>\r\n          <p class=\"card-text\"></p>\r\n          <button class=\"btn btn-primary btnIfo\">ລາຍລະອຽດ</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home-additional/home-additional.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/home-additional/home-additional.component.ts ***!
  \*******************************************************************/
/*! exports provided: HomeAdditionalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAdditionalComponent", function() { return HomeAdditionalComponent; });
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

var HomeAdditionalComponent = /** @class */ (function () {
    function HomeAdditionalComponent() {
    }
    HomeAdditionalComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HomeAdditionalComponent.prototype, "anotherplaces", void 0);
    HomeAdditionalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-additional',
            template: __webpack_require__(/*! ./home-additional.component.html */ "./src/app/home/home-additional/home-additional.component.html"),
            styles: [__webpack_require__(/*! ./home-additional.component.css */ "./src/app/home/home-additional/home-additional.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeAdditionalComponent);
    return HomeAdditionalComponent;
}());



/***/ }),

/***/ "./src/app/home/home-attractions/home-attractions.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/home/home-attractions/home-attractions.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*View card button*/\r\n.btncard {\r\n    position: absolute;\r\n    bottom: 15%;\r\n    right: 0;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n    background-color: #555;\r\n    color: white;\r\n    cursor: pointer;\r\n\r\n}\r\n.btncard:hover {\r\n    background-color: black;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home-attractions/home-attractions.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/home/home-attractions/home-attractions.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n  <div class=\"text-center p-3 mt-5\">\r\n    <h1><b>ສະຖານທີ່ທ່ອງທ່ຽວແນະນຳ</b></h1>\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row mb-5\" *ngIf=\"attractionses.length\">\r\n\r\n      <div class=\"col-lg-6\" *ngIf=\"attractionses[0]\">\r\n        <div class=\"card mb-3\">\r\n          <img class=\"card-img-top\" [src]=\"attractionses[0]['images'][0]\" alt=\"Card image cap\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">{{attractionses[0]['name']}}</h5>\r\n            <p class=\"card-text\">{{attractionses[0]['details']}}</p>\r\n            <p class=\"card-text\"><small class=\"text-muted\">{{attractionses[0]['attractions_type']['name']}}</small></p>\r\n            <button [routerLink]=\"['/attraction','detail',attractionses[0]['_id']]\" class=\"btn btn-raised btn-primary float-right bg-success text-white\">ອ່ານເພີ່ມ</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-6 col-md-6\" *ngIf=\"attractionses[1]\">\r\n            <div class=\"card mb-3\">\r\n              <img class=\"card-img-top\" [src]=\"attractionses[1]['images'][0]\" alt=\"Card image cap\">\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">{{attractionses[1]['name']}}</h5>\r\n                <p class=\"card-text\"><small class=\"text-muted\">{{attractionses[1]['attractions_type']['name']}}</small></p>\r\n              </div>\r\n              <button class=\"btn bmd-btn-fab btncard bg-success\" [routerLink]=\"['/attraction','detail',attractionses[1]['_id']]\"><i class=\"fa  fa-chevron-right\"></i></button>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-6 col-md-6\" *ngIf=\"attractionses[2]\">\r\n            <div class=\"card mb-3\">\r\n              <img class=\"card-img-top\" [src]=\"attractionses[2]['images'][0]\" alt=\"Card image cap\">\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">{{attractionses[2]['name']}}</h5>\r\n                <p class=\"card-text\"><small class=\"text-muted\">{{attractionses[2]['attractions_type']['name']}}</small></p>\r\n              </div>\r\n              <button class=\"btn bmd-btn-fab btncard bg-success\" [routerLink]=\"['/attraction','detail',attractionses[2]['_id']]\"><i class=\"fa  fa-chevron-right\"></i></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-6 col-md-6\" *ngIf=\"attractionses[3]\">\r\n            <div class=\"card mb-3\">\r\n              <img class=\"card-img-top\" [src]=\"attractionses[3]['images'][0]\" alt=\"Card image cap\">\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">{{attractionses[3]['name']}}</h5>\r\n                <p class=\"card-text\"><small class=\"text-muted\">{{attractionses[3]['attractions_type']['name']}}</small></p>\r\n              </div>\r\n              <button class=\"btn bmd-btn-fab btncard bg-success\" [routerLink]=\"['/attraction','detail',attractionses[3]['_id']]\"><i class=\"fa  fa-chevron-right\"></i></button>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-6 col-md-6\" *ngIf=\"attractionses[4]\">\r\n            <div class=\"card mb-3\">\r\n              <img class=\"card-img-top\" [src]=\"attractionses[4]['images'][0]\" alt=\"Card image cap\">\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">{{attractionses[4]['name']}}</h5>\r\n                <p class=\"card-text\"><small class=\"text-muted\">{{attractionses[4]['attractions_type']['name']}}</small></p>\r\n              </div>\r\n              <button class=\"btn bmd-btn-fab btncard bg-success\" [routerLink]=\"['/attraction','detail',attractionses[3]['_id']]\"><i class=\"fa  fa-chevron-right\"></i></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"row d-flex justify-content-end\">\r\n      <a [routerLink]=\"['/attraction']\" class=\"btn btn-info\"><i class=\"fa fa-caret-right\"></i> ເພີ່ມເຕີມ</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home-attractions/home-attractions.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home/home-attractions/home-attractions.component.ts ***!
  \*********************************************************************/
/*! exports provided: HomeAttractionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAttractionsComponent", function() { return HomeAttractionsComponent; });
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

var HomeAttractionsComponent = /** @class */ (function () {
    function HomeAttractionsComponent() {
    }
    HomeAttractionsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HomeAttractionsComponent.prototype, "attractionses", void 0);
    HomeAttractionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-attractions',
            template: __webpack_require__(/*! ./home-attractions.component.html */ "./src/app/home/home-attractions/home-attractions.component.html"),
            styles: [__webpack_require__(/*! ./home-attractions.component.css */ "./src/app/home/home-attractions/home-attractions.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeAttractionsComponent);
    return HomeAttractionsComponent;
}());



/***/ }),

/***/ "./src/app/home/home-companies/home-companies.component.css":
/*!******************************************************************!*\
  !*** ./src/app/home/home-companies/home-companies.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Company card===================================================*/\r\n\r\n\r\n/*body { font-family: sans-serif; }*/\r\n\r\n\r\n/*.carousel {*/\r\n\r\n\r\n/*background: #EEE;*/\r\n\r\n\r\n/*}*/\r\n\r\n\r\n.carousel-cell {\r\n    /*width: 28%;*/\r\n    height: 260px;\r\n    margin-right: 10px;\r\n    background: #FBE9E7;\r\n    /*border-radius: 5px;*/\r\n    /*counter-increment: carousel-cell;*/\r\n}\r\n\r\n\r\n.carousel-cell.is-selected {\r\n    background: #ED2;\r\n}\r\n\r\n\r\n/* cell number */\r\n\r\n\r\n.carousel-cell:before {\r\n    display: block;\r\n    text-align: center;\r\n    line-height: 200px;\r\n    font-size: 80px;\r\n    color: white;\r\n}\r\n\r\n\r\n.companyCard {\r\n    width: 20em;\r\n    margin-bottom: 2rem;\r\n    margin: 1rem;\r\n\r\n}\r\n\r\n\r\n.flickity-button:focus {\r\n    outline: none;\r\n    box-shadow: 0 0 0 5px #19F;\r\n}\r\n\r\n\r\n/*==============================================*/"

/***/ }),

/***/ "./src/app/home/home-companies/home-companies.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/home/home-companies/home-companies.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center p-4 mt-5\">\r\n  <h1 class=\"mt-3\"><b>ບໍລິສັດນຳທ່ຽວ</b></h1>\r\n</div>\r\n\r\n\r\n<div class=\"container mb-5\">\r\n  <div class=\"row d-flex justify-content-center\">\r\n\r\n      <div class=\"card companyCard\" *ngFor=\"let company of companies\">\r\n        <img class=\"card-img-top\" [src]=\"company['images'][0]\" alt=\"Card image cap\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">{{company['name']}}</h5>\r\n          <a class=\"btn btn-primary float-right bg-warning text-white\" [routerLink]=\"['/company/detail',company['_id']]\">ລາຍລະອຽດ</a>\r\n        </div>\r\n      </div>\r\n\r\n  </div>\r\n  <div class=\"row d-flex justify-content-end\">\r\n    <a [routerLink]=\"['/company']\" class=\"btn btn-raised btn-warning\"><i class=\"fa fa-caret-right\"></i> ເພີ່ມເຕີມ</a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home-companies/home-companies.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/home-companies/home-companies.component.ts ***!
  \*****************************************************************/
/*! exports provided: HomeCompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCompaniesComponent", function() { return HomeCompaniesComponent; });
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

var HomeCompaniesComponent = /** @class */ (function () {
    function HomeCompaniesComponent() {
    }
    HomeCompaniesComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HomeCompaniesComponent.prototype, "companies", void 0);
    HomeCompaniesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-companies',
            template: __webpack_require__(/*! ./home-companies.component.html */ "./src/app/home/home-companies/home-companies.component.html"),
            styles: [__webpack_require__(/*! ./home-companies.component.css */ "./src/app/home/home-companies/home-companies.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeCompaniesComponent);
    return HomeCompaniesComponent;
}());



/***/ }),

/***/ "./src/app/home/home-event/home-event.component.css":
/*!**********************************************************!*\
  !*** ./src/app/home/home-event/home-event.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spaceEm {\r\n    margin-top: 4.8em;\r\n}\r\n\r\n.carousel {\r\n    background: #FAFAFA;\r\n    z-index: 1;\r\n}\r\n\r\n.carousel-cell {\r\n    width: 100%;\r\n    height: 540px;\r\n    margin-right: 10px;\r\n    background: #8C8;\r\n    border-radius: 5px;\r\n    counter-increment: carousel-cell;\r\n}\r\n\r\n/* cell number */\r\n\r\n.carousel-cell:before {\r\n    display: block;\r\n    text-align: center;\r\n    content: counter(carousel-cell);\r\n    line-height: 200px;\r\n    font-size: 80px;\r\n    color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home-event/home-event.component.html":
/*!***********************************************************!*\
  !*** ./src/app/home/home-event/home-event.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spaceEm\"></div>\r\n<div id=\"myCarousel\" class=\"carousel slide mt-5\" data-ride=\"carousel\">\r\n  <div class=\"carousel-inner\">\r\n    <div class=\"carousel-item active\">\r\n      <img class=\"first-slide\" [src]=\"attractionses[0]['images'][0]\" width=\"100%\" alt=\"Slide 1\">\r\n      <div class=\"container\">\r\n        <div class=\"carousel-caption\">\r\n          <h1>{{attractionses[0]['name']}}</h1>\r\n          <p><a class=\"btn btn-lg btn-primary btn-raised\" [routerLink]=\"['/attraction','detail',attractionses[0]['_id']]\" role=\"button\">ລາຍລະອຽດ</a></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"carousel-item\" *ngFor=\"let attractions of attractionses | slice:1; let i=index\">\r\n      <img class=\"second-slide\" [src]=\"attractions['images'][0]\" width=\"100%\" alt=\"Slide {{i + 2}}\">\r\n      <div class=\"container\">\r\n        <div class=\"carousel-caption\">\r\n          <h1>{{attractions['name']}}</h1>\r\n          <p><a class=\"btn btn-lg btn-primary btn-raised\" [routerLink]=\"['/attraction','detail',attractions['_id']]\" role=\"button\">ລາຍລະອຽດ</a></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\r\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Previous</span>\r\n  </a>\r\n  <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\r\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Next</span>\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home-event/home-event.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/home-event/home-event.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeEventComponent", function() { return HomeEventComponent; });
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

var HomeEventComponent = /** @class */ (function () {
    function HomeEventComponent() {
    }
    HomeEventComponent.prototype.ngOnInit = function () {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth <= 560) {
            this.hideText = 'text-hide';
        }
    };
    HomeEventComponent.prototype.getImage = function (imageUrl) {
        if (navigator.onLine) {
            return imageUrl;
        }
        return 'assets/ic_image.png';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HomeEventComponent.prototype, "attractionses", void 0);
    HomeEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-event',
            template: __webpack_require__(/*! ./home-event.component.html */ "./src/app/home/home-event/home-event.component.html"),
            styles: [__webpack_require__(/*! ./home-event.component.css */ "./src/app/home/home-event/home-event.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeEventComponent);
    return HomeEventComponent;
}());



/***/ }),

/***/ "./src/app/home/home-restaurants/home-restaurants.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/home/home-restaurants/home-restaurants.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/*View card button*/\r\n.btncard {\r\n    position: absolute;\r\n    bottom: 15%;\r\n    right: 0;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n    background-color: #555;\r\n    color: white;\r\n    cursor: pointer;\r\n\r\n}\r\n.btncard:hover {\r\n    background-color: black;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home-restaurants/home-restaurants.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/home/home-restaurants/home-restaurants.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"text-center p-4 mt-5\">\r\n    <h1 class=\"mt-3\"><b>ຮ້ານອາຫານແນະນຳ</b></h1>\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row mb-5\">\r\n\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-6 col-md-6\" *ngIf=\"restaurants[4]\">\r\n            <div class=\"card mb-3\">\r\n              <img class=\"card-img-top\" [src]=\"restaurants[4]['images'][0]\" alt=\"Card image cap\">\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">{{restaurants[4]['name']}}</h5>\r\n                <p class=\"card-text\"><small class=\"text-muted\">{{restaurants[4]['restaurant_type']['name']}}</small></p>\r\n              </div>\r\n              <button class=\"btn bmd-btn-fab btncard bg-danger\" [routerLink]=\"['/restaurant','detail',restaurants[4]['_id']]\"><i class=\"fa  fa-chevron-right\"></i></button>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-6 col-md-6\" *ngIf=\"restaurants[3]\">\r\n            <div class=\"card mb-3\">\r\n              <img class=\"card-img-top\" [src]=\"restaurants[3]['images'][0]\" alt=\"Card image cap\">\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">{{restaurants[3]['name']}}</h5>\r\n                <p class=\"card-text\"><small class=\"text-muted\">{{restaurants[3]['restaurant_type']['name']}}</small></p>\r\n              </div>\r\n              <button class=\"btn bmd-btn-fab btncard bg-danger\" [routerLink]=\"['/restaurant','detail',restaurants[3]['_id']]\"><i class=\"fa  fa-chevron-right\"></i></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-6 col-md-6\" *ngIf=\"restaurants[2]\">\r\n            <div class=\"card mb-3\">\r\n              <img class=\"card-img-top\" [src]=\"restaurants[2]['images'][0]\" alt=\"Card image cap\">\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">{{restaurants[2]['name']}}</h5>\r\n                <p class=\"card-text\"><small class=\"text-muted\">{{restaurants[2]['restaurant_type']['name']}}</small></p>\r\n              </div>\r\n              <button class=\"btn bmd-btn-fab btncard bg-danger\" [routerLink]=\"['/restaurant','detail',restaurants[2]['_id']]\"><i class=\"fa  fa-chevron-right\"></i></button>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-6 col-md-6\" *ngIf=\"restaurants[1]\">\r\n            <div class=\"card mb-3\">\r\n              <img class=\"card-img-top\" [src]=\"restaurants[1]['images'][0]\" alt=\"Card image cap\">\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">{{restaurants[1]['name']}}</h5>\r\n                <p class=\"card-text\"><small class=\"text-muted\">{{restaurants[1]['restaurant_type']['name']}}</small></p>\r\n              </div>\r\n              <button class=\"btn bmd-btn-fab btncard bg-danger\" [routerLink]=\"['/restaurant','detail',restaurants[1]['_id']]\"><i class=\"fa  fa-chevron-right\"></i></button>\r\n\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-6\" *ngIf=\"restaurants[0]\">\r\n        <div class=\"card mb-3\">\r\n          <img class=\"card-img-top\" [src]=\"restaurants[0]['images'][0]\" alt=\"Card image cap\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">{{restaurants[0]['name']}}</h5>\r\n            <p class=\"card-text\">{{restaurants[0]['detail']}}</p>\r\n            <p class=\"card-text\"><small class=\"text-muted\">{{restaurants[0]['restaurant_type']['name']}}</small></p>\r\n            <button class=\"btn btn-raised bg-danger float-right text-white\" [routerLink]=\"['/restaurant/detail',restaurants[0]['_id']]\">ລາຍລະອຽດ</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"row d-flex justify-content-end\">\r\n      <a [routerLink]=\"['/restaurant']\"class=\"btn btn-raised btn-danger\"><i class=\"fa fa-caret-right\"></i> ເພີ່ມເຕີມ</a>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/home/home-restaurants/home-restaurants.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home/home-restaurants/home-restaurants.component.ts ***!
  \*********************************************************************/
/*! exports provided: HomeRestaurantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRestaurantsComponent", function() { return HomeRestaurantsComponent; });
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

var HomeRestaurantsComponent = /** @class */ (function () {
    function HomeRestaurantsComponent() {
    }
    HomeRestaurantsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HomeRestaurantsComponent.prototype, "restaurants", void 0);
    HomeRestaurantsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-restaurants',
            template: __webpack_require__(/*! ./home-restaurants.component.html */ "./src/app/home/home-restaurants/home-restaurants.component.html"),
            styles: [__webpack_require__(/*! ./home-restaurants.component.css */ "./src/app/home/home-restaurants/home-restaurants.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeRestaurantsComponent);
    return HomeRestaurantsComponent;
}());



/***/ }),

/***/ "./src/app/home/home-shelters/home-shelters.component.css":
/*!****************************************************************!*\
  !*** ./src/app/home/home-shelters/home-shelters.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/*View card button*/\r\n.btncard {\r\n    position: absolute;\r\n    bottom: 15%;\r\n    right: 0;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n    background-color: #555;\r\n    color: white;\r\n    cursor: pointer;\r\n\r\n}\r\n.btncard:hover {\r\n    background-color: black;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home-shelters/home-shelters.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/home/home-shelters/home-shelters.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"text-center p-4 mt-5\">\r\n    <h1><b>ທີ່ພັກອາໄສແນະນຳ</b></h1>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row mb-5\">\r\n\r\n      <div class=\"col-lg-6\" *ngIf=\"shelters[0]\">\r\n        <div class=\"card mb-3\">\r\n          <img class=\"card-img-top\" [src]=\"shelters[0]['images'][0]\" alt=\"Card image cap\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">{{shelters[0]['name']}}</h5>\r\n            <p class=\"card-text\">{{shelters[0]['detail']}}</p>\r\n            <p class=\"card-text\"><small class=\"text-muted\">{{shelters[0]['shelter_type']['name']}}</small></p>\r\n            <button class=\"btn btn-raised btn-primary float-right mb-5\" [routerLink]=\"['/shelter','detail', shelters[0]['_id']]\">ລາຍລະອຽດ</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-6 col-md-6\" *ngIf=\"shelters[1]\">\r\n            <div class=\"card mb-3\">\r\n              <img class=\"card-img-top\" [src]=\"shelters[1]['images'][0]\" alt=\"Card image cap\">\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">{{shelters[1]['name']}}</h5>\r\n                <p class=\"card-text\"><small class=\"text-muted\">{{shelters[1]['shelter_type']['name']}}</small></p>\r\n              </div>\r\n              <button class=\"btn bmd-btn-fab btncard bg-primary\" [routerLink]=\"['/shelter','detail',shelters[1]['_id']]\"><i class=\"fa  fa-chevron-right\"></i></button>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-6 col-md-6\" *ngIf=\"shelters[2]\">\r\n            <div class=\"card mb-3\">\r\n              <img class=\"card-img-top\" [src]=\"shelters[2]['images'][0]\" alt=\"Card image cap\">\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">{{shelters[2]['name']}}</h5>\r\n                <p class=\"card-text\"><small class=\"text-muted\">{{shelters[2]['shelter_type']['name']}}</small></p>\r\n              </div>\r\n              <button class=\"btn bmd-btn-fab btncard bg-primary\" [routerLink]=\"['/shelter','detail',shelters[2]['_id']]\"><i class=\"fa  fa-chevron-right\"></i></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-6 col-md-6\" *ngIf=\"shelters[3]\">\r\n            <div class=\"card mb-3\">\r\n              <img class=\"card-img-top\" [src]=\"shelters[3]['images'][0]\" alt=\"Card image cap\">\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">{{shelters[3]['name']}}</h5>\r\n                <p class=\"card-text\"><small class=\"text-muted\">{{shelters[3]['shelter_type']['name']}}</small></p>\r\n              </div>\r\n              <button class=\"btn bmd-btn-fab btncard bg-primary\" [routerLink]=\"['/shelter','detail',shelters[3]['_id']]\"><i class=\"fa  fa-chevron-right\"></i></button>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-6 col-md-6\" *ngIf=\"shelters[4]\">\r\n            <div class=\"card mb-3\">\r\n              <img class=\"card-img-top\" [src]=\"shelters[4]['images'][0]\" alt=\"Card image cap\">\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">{{shelters[4]['name']}}</h5>\r\n                <p class=\"card-text\"><small class=\"text-muted\">{{shelters[4]['shelter_type']['name']}}</small></p>\r\n              </div>\r\n              <button class=\"btn bmd-btn-fab btncard bg-primary\" [routerLink]=\"['/shelter', 'detail',shelters[4]['_id']]\"><i class=\"fa  fa-chevron-right\"></i></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row d-flex justify-content-end\">\r\n      <a [routerLink]=\"['/shelter']\" class=\"btn btn-raised btn-primary bg-primary text-white\"><i class=\"fa fa-caret-right\"></i> ເພີ່ມເຕີມ</a>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home-shelters/home-shelters.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/home-shelters/home-shelters.component.ts ***!
  \***************************************************************/
/*! exports provided: HomeSheltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeSheltersComponent", function() { return HomeSheltersComponent; });
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

var HomeSheltersComponent = /** @class */ (function () {
    function HomeSheltersComponent() {
    }
    HomeSheltersComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HomeSheltersComponent.prototype, "shelters", void 0);
    HomeSheltersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-shelters',
            template: __webpack_require__(/*! ./home-shelters.component.html */ "./src/app/home/home-shelters/home-shelters.component.html"),
            styles: [__webpack_require__(/*! ./home-shelters.component.css */ "./src/app/home/home-shelters/home-shelters.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeSheltersComponent);
    return HomeSheltersComponent;
}());



/***/ }),

/***/ "./src/app/home/home-transportations/home-transportations.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/home/home-transportations/home-transportations.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Company card===================================================*/\r\n\r\n\r\n/*body { font-family: sans-serif; }*/\r\n\r\n\r\n/*.carousel {*/\r\n\r\n\r\n/*background: #EEE;*/\r\n\r\n\r\n/*}*/\r\n\r\n\r\n.carousel-cell {\r\n    /*width: 28%;*/\r\n    height: 260px;\r\n    margin-right: 10px;\r\n    background: #FBE9E7;\r\n    /*border-radius: 5px;*/\r\n    /*counter-increment: carousel-cell;*/\r\n}\r\n\r\n\r\n.carousel-cell.is-selected {\r\n    background: #ED2;\r\n}\r\n\r\n\r\n/* cell number */\r\n\r\n\r\n.carousel-cell:before {\r\n    display: block;\r\n    text-align: center;\r\n    line-height: 200px;\r\n    font-size: 80px;\r\n    color: white;\r\n}\r\n\r\n\r\n.companyCard {\r\n    width: 15em;\r\n    margin-bottom: 2rem;\r\n    margin: 1rem;\r\n\r\n}\r\n\r\n\r\n.flickity-button:focus {\r\n    outline: none;\r\n    box-shadow: 0 0 0 5px #19F;\r\n}\r\n\r\n\r\n/*==============================================*/"

/***/ }),

/***/ "./src/app/home/home-transportations/home-transportations.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/home/home-transportations/home-transportations.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center p-4 mt-5\">\r\n  <h1 class=\"mt-3\"><b>ສະຖານີຂົນສົ່ງໂດຍສານ</b></h1>\r\n</div>\r\n\r\n\r\n<div class=\"container mb-5\">\r\n  <div class=\"row d-flex justify-content-center\">\r\n\r\n    <div class=\"card companyCard\" *ngFor=\"let transpotation of transpotations\">\r\n      <img class=\"card-img-top\" [src]=\"transpotation['images'][0]\" alt=\"Card image cap\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-subtitle\">{{transpotation['name']}}</h5>\r\n        <a class=\"btn btn-primary float-right bg-secondary text-white\" [routerLink]=\"['/transpotation','detail',transpotation['_id']]\">ອ່ານເພີ່ມ</a>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"row d-flex justify-content-end\">\r\n    <a [routerLink]=\"['/transportation']\" class=\"btn btn-raised btn-secondary\"><i class=\"fa fa-caret-right\"></i> ເພີ່ມເຕີມ</a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home-transportations/home-transportations.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/home/home-transportations/home-transportations.component.ts ***!
  \*****************************************************************************/
/*! exports provided: HomeTransportationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTransportationsComponent", function() { return HomeTransportationsComponent; });
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

var HomeTransportationsComponent = /** @class */ (function () {
    function HomeTransportationsComponent() {
    }
    HomeTransportationsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HomeTransportationsComponent.prototype, "transportations", void 0);
    HomeTransportationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-transportations',
            template: __webpack_require__(/*! ./home-transportations.component.html */ "./src/app/home/home-transportations/home-transportations.component.html"),
            styles: [__webpack_require__(/*! ./home-transportations.component.css */ "./src/app/home/home-transportations/home-transportations.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeTransportationsComponent);
    return HomeTransportationsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#pic1{\r\n    height: 50%;\r\n    background: url('mdesign1.jpg') no-repeat center center fixed;\r\n    /*background-color: #ffeb3b;*/\r\n    background-size: cover;\r\n\r\n}\r\n\r\n#pic2{\r\n    height: 50%;\r\n    /*  background: url(../assets/mpic/mdesign2.jpg) no-repeat center center fixed;*/\r\n    /*background-color: #03a9f4;*/\r\n    background-size: cover;\r\n\r\n}\r\n\r\n#pic3{\r\n    height: 50%;\r\n    background: url('mdesign2.jpg') no-repeat center center fixed;\r\n    /*background-color: #FF9800;*/\r\n    background-size: cover;\r\n\r\n}\r\n\r\n#pic4{\r\n    height: 50%;\r\n    background: url('mdsign4.png') no-repeat center center fixed;\r\n    /*background-color: #FF9800;*/\r\n    background-size: cover;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"data['attractionses']\">\r\n  <app-home-event [attractionses]=\"data['attractionses']\"></app-home-event>\r\n\r\n  <div>\r\n    <app-home-attractions [attractionses]=\"data['attractionses']\"></app-home-attractions>\r\n  </div>\r\n\r\n  <div id=\"pic1\">\r\n    <app-home-restaurants [restaurants]=\"data['restaurants']\"></app-home-restaurants>\r\n  </div>\r\n\r\n  <div>\r\n    <app-home-shelters [shelters]=\"data['shelters']\"></app-home-shelters>\r\n  </div>\r\n\r\n  <div id=\"pic3\">\r\n    <app-home-transportations [transportations]=\"data['transportations']\"></app-home-transportations>\r\n  </div>\r\n\r\n  <div>\r\n    <app-home-additional [anotherplaces]=\"data['another_places']\"></app-home-additional>\r\n  </div>\r\n\r\n  <div id=\"pic4\">\r\n    <app-home-companies [companies]=\"data['companies']\"></app-home-companies>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _services_locationcheck_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/locationcheck.service */ "./src/app/services/locationcheck.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-progressbar */ "./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/main.service */ "./src/app/services/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(ngProgress, locationService, mainService) {
        this.ngProgress = ngProgress;
        this.locationService = locationService;
        this.mainService = mainService;
        this.data = {};
        this.ngProgress.start();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var lng = position.coords.longitude;
                var subscript = _this.locationService.getLocalWeater(lat, lng).subscribe(function (res) {
                    var api_data = res.json()['current_observation']['observation_location'];
                    console.log(api_data);
                    var mainSubscript = _this.mainService.getMainPageData(api_data['country'], lat + ',' + lng).subscribe(function (main_res) {
                        _this.data = main_res.json()['data'];
                        _this.ngProgress.done();
                        mainSubscript.unsubscribe();
                    }, function (main_error) {
                        _this.ngProgress.done();
                        mainSubscript.unsubscribe();
                    });
                    subscript.unsubscribe();
                }, function (error) {
                    _this.ngProgress.done();
                    subscript.unsubscribe();
                });
            }, function () {
                var subscript = _this.mainService.getMainPageData('CTC', '0,0').subscribe(function (res) {
                    _this.data = res.json()['data'];
                    _this.ngProgress.done();
                    subscript.unsubscribe();
                }, function (error) {
                    _this.ngProgress.done();
                    subscript.unsubscribe();
                });
            });
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_progressbar__WEBPACK_IMPORTED_MODULE_2__["NgProgress"],
            _services_locationcheck_service__WEBPACK_IMPORTED_MODULE_0__["LocationcheckService"],
            _services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_event_home_event_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-event/home-event.component */ "./src/app/home/home-event/home-event.component.ts");
/* harmony import */ var _home_attractions_home_attractions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-attractions/home-attractions.component */ "./src/app/home/home-attractions/home-attractions.component.ts");
/* harmony import */ var _home_restaurants_home_restaurants_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-restaurants/home-restaurants.component */ "./src/app/home/home-restaurants/home-restaurants.component.ts");
/* harmony import */ var _home_shelters_home_shelters_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-shelters/home-shelters.component */ "./src/app/home/home-shelters/home-shelters.component.ts");
/* harmony import */ var _home_companies_home_companies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-companies/home-companies.component */ "./src/app/home/home-companies/home-companies.component.ts");
/* harmony import */ var _home_additional_home_additional_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-additional/home-additional.component */ "./src/app/home/home-additional/home-additional.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_transportations_home_transportations_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home-transportations/home-transportations.component */ "./src/app/home/home-transportations/home-transportations.component.ts");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Components











var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_12__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
                _home_event_home_event_component__WEBPACK_IMPORTED_MODULE_3__["HomeEventComponent"],
                _home_attractions_home_attractions_component__WEBPACK_IMPORTED_MODULE_4__["HomeAttractionsComponent"],
                _home_restaurants_home_restaurants_component__WEBPACK_IMPORTED_MODULE_5__["HomeRestaurantsComponent"],
                _home_shelters_home_shelters_component__WEBPACK_IMPORTED_MODULE_6__["HomeSheltersComponent"],
                _home_companies_home_companies_component__WEBPACK_IMPORTED_MODULE_7__["HomeCompaniesComponent"],
                _home_additional_home_additional_component__WEBPACK_IMPORTED_MODULE_8__["HomeAdditionalComponent"],
                _home_transportations_home_transportations_component__WEBPACK_IMPORTED_MODULE_10__["HomeTransportationsComponent"]
            ],
            exports: [],
            providers: [_services_main_service__WEBPACK_IMPORTED_MODULE_11__["MainService"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nearbyTitle{\r\n    top: 5em;\r\n    width: 100%;\r\n}\r\n.nearbyMenu {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 4.9em;\r\n    z-index: 1;\r\n    margin-left: 0.5em;\r\n}\r\n.tableList {\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"row nearbyMenu\">\r\n    <div class=\"dropdown\">\r\n      <button class=\"btn btn-raised btn-success dropdown-toggle\" type=\"button\" id=\"ex1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        ຄົ້ນຫາທັງໝົດ\r\n      </button>\r\n      <div class=\"dropdown-menu dropdown-menu-left\" aria-labelledby=\"ex1\">\r\n        <div class=\" dropdown-item btn-group-toggle\" data-toggle=\"buttons\">\r\n          <label class=\"btn\">\r\n            <input type=\"checkbox\" checked autocomplete=\"off\"> ຄົ້ນຫາແບບ Global\r\n          </label>\r\n        </div>\r\n        <div class=\"dropdown-divider\"></div>\r\n        <button class=\"dropdown-item\" type=\"button\">ສະຖານທີ່ທ່ອງທ່ຽວ</button>\r\n        <button class=\"dropdown-item\" type=\"button\">ຮ້ານອາຫານ</button>\r\n        <button class=\"dropdown-item\" type=\"button\">ທີ່ພັກແຮມ</button>\r\n        <button class=\"dropdown-item\" type=\"button\">ສະຖານີຂົນສົ່ງໂດຍສານ</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"nearbyTitle ml-2 alert alert-light\" role=\"alert\">\r\n    <h5 class=\"mt-2\">ຄົ້ນຫາ : <b>ທຳມະຊາດ</b></h5>\r\n  </div>\r\n  <span class=\"m-1\"></span>\r\n\r\n<!--List-->\r\n  <div class=\"container mt-5 mb-5\">\r\n    <div class=\"row ml-1 d-block\">\r\n      <table class=\"table table-hover tableList\">\r\n        <thead>\r\n        <th><button class=\"btn btn-info\" data-toggle=\"collapse\" data-target=\"#collapse-map\"><i class=\"fa fa-map\"></i></button></th>\r\n        </thead>\r\n        <tr class=\"collapse\" id=\"collapse-map\">\r\n<!--          <iframe\r\n                  width=\"600\"\r\n                  height=\"450\"\r\n                  frameborder=\"0\" style=\"border:0\"\r\n                  src=\"https://www.google.com/maps/embed/v1/place?key=AIzaSyBXoeOmRRzSl0b4iUBadAz8M-_Zva0DpfQ\r\n    &q=Eiffel+Tower,Paris+France\" allowfullscreen>\r\n          </iframe>-->\r\n        </tr>\r\n        <tr class=\"card\">\r\n          <td>\r\n            <img src=\"assets/ສະຖານທີ່ທ່ອງທ່ຽວຕາດກວາງຊີ.jpg\" width=\"30%\" class=\"rounded float-right\" alt=\"\">\r\n            <h5 class=\"{{hD}}\"><b>ສະຖານທີ່ທ່ອງທ່ຽວຕາດກວາງຊີ</b></h5>\r\n            <p class=\"card-subtitle\">ປະເພດ: <b>ສະຖານທີ່ທ່ອງທ່ຽວທາງທຳມະຊາດ</b></p>\r\n            <p class=\"{{hideText}}\" data-toggle=\"collapse\" aria-expanded=\"true\">ນ້ຳຕົກຕາດກວາງຊີ ເປັນນ້ຳຕົກຫີນປູນຂະໜາດໃຫຍ່ສູງປະມານ 7 0 ແມັດ ມີສາຍນ້ຳໄຫລອາບມາຕາມໜ້າຜາຜ່ານໂຂດຫີນນ້ອຍໃຫຍ່</p>\r\n          </td>\r\n        </tr>\r\n        <tr class=\"card\">\r\n          <td>\r\n            <img src=\"assets/ສະຖານທີ່ທ່ອງທ່ຽວນ້ຳກັດຢໍລະປາ.jpg\" width=\"30%\" class=\"rounded float-right\" alt=\"\">\r\n            <h5 class=\"{{hD}}\"><b>ສະຖານທີ່ທ່ອງທ່ຽວນ້ຳກັດຢໍລະປາ</b></h5>\r\n            <p class=\"card-subtitle\">ປະເພດ: <b>ສະຖານທີ່ທ່ອງທ່ຽວທາງທຳມະຊາດ</b></p>\r\n            <p class=\"{{hideText}}\" data-toggle=\"collapse\" aria-expanded=\"true\">ສະຖານທີ່ທ່ອງທ່ຽວນ້ຳກັດຢໍລະປາເປັນນ້ຳຕົກມີສາຍນ້ຳໄຫລອາບມາຕາມໜ້າຜາຜ່ານໂຂດຫີນນ້ອຍໃຫຍ່</p>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-progressbar */ "./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var _services_locationcheck_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/locationcheck.service */ "./src/app/services/locationcheck.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(ngProgress, LocaService) {
        this.ngProgress = ngProgress;
        this.LocaService = LocaService;
        this.hD = 'h3';
    }
    SearchComponent.prototype.ngOnInit = function () {
        /*Progressstatus*/
        /** request started */
        this.ngProgress.start();
        this.innerWidth = window.innerWidth;
        if (this.innerWidth <= 560) {
            this.hideText = 'text-hide';
            this.hD = 'h5';
        }
        /*      if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                  const lat = position.coords.latitude;
                  const lng = position.coords.longitude;
                  this.lat = lat;
                  this.lng = lng;
                  console.log(lat, lng);
        
                  // this.LocaService.getLocaWeater(this.lat, this.lng).subscribe(res => {
                  //   this.locaData = res.current_observation;
                  //   console.log(this.locaData);
                  // }, error => {
                  //   console.log(error);
                  // });
        /!*          this.http.get(`https://api.wunderground.com/api/b7e4ea3b9ecdbe54/conditions/q/${this.lat},${this.lng}.json`)
                    .subscribe((res:any)=>{
                    console.log(res)
                  })*!/
                }, () => {
                  console.log('block or not allow access location search logic code goes here...');
                });
              }*/
        this.ngProgress.done();
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_progressbar__WEBPACK_IMPORTED_MODULE_1__["NgProgress"], _services_locationcheck_service__WEBPACK_IMPORTED_MODULE_2__["LocationcheckService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/services/all.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/all.service.ts ***!
  \*****************************************/
/*! exports provided: AllService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllService", function() { return AllService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllService = /** @class */ (function () {
    function AllService(http) {
        this.http = http;
    }
    AllService.prototype.getAttractionses = function (country_code, latlng) {
        // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        header.append('lttoken', _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].RAMDOM_KEY);
        // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
        var option = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: header });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].SERVER_ADDRESS
            + '/api/client/all/attractions/'
            + country_code + '/' + latlng, option);
    };
    AllService.prototype.getRestaurants = function (country_code, latlng) {
        // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        header.append('lttoken', _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].RAMDOM_KEY);
        // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
        var option = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: header });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].SERVER_ADDRESS
            + '/api/client/all/restaurant/'
            + country_code + '/' + latlng, option);
    };
    AllService.prototype.getShelters = function (country_code, latlng) {
        // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        header.append('lttoken', _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].RAMDOM_KEY);
        // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
        var option = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: header });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].SERVER_ADDRESS
            + '/api/client/all/shelter/'
            + country_code + '/' + latlng, option);
    };
    AllService.prototype.getTransportations = function (country_code, latlng) {
        // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        header.append('lttoken', _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].RAMDOM_KEY);
        // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
        var option = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: header });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].SERVER_ADDRESS
            + '/api/client/type/transportation/'
            + country_code + '/' + latlng, option);
    };
    AllService.prototype.getTourCompanies = function (country_code, latlng) {
        // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        header.append('lttoken', _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].RAMDOM_KEY);
        // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
        var option = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: header });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].SERVER_ADDRESS
            + '/api/client/all/company/' + country_code
            + '/' + latlng, option);
    };
    AllService.prototype.getAnothers = function (country_code, latlng) {
        // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        header.append('lttoken', _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].RAMDOM_KEY);
        // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
        var option = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: header });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].SERVER_ADDRESS
            + '/api/client/all/another/' + country_code
            + '/' + latlng, option);
    };
    AllService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], AllService);
    return AllService;
}());



/***/ }),

/***/ "./src/app/services/detail.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/detail.service.ts ***!
  \********************************************/
/*! exports provided: DetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailService", function() { return DetailService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailService = /** @class */ (function () {
    function DetailService(http) {
        this.http = http;
    }
    DetailService.prototype.getAttractions = function (attraction_id) {
        // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        header.append('lttoken', _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].RAMDOM_KEY);
        // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
        var option = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: header });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].SERVER_ADDRESS
            + '/api/client/detail/attractions/' + attraction_id, option);
    };
    DetailService.prototype.getRestaurant = function (restaurant_id) {
        // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        header.append('lttoken', _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].RAMDOM_KEY);
        // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
        var option = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: header });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].SERVER_ADDRESS
            + '/api/client/detail/restaurant/' + restaurant_id, option);
    };
    DetailService.prototype.getShelter = function (shelter_id) {
        // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        header.append('lttoken', _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].RAMDOM_KEY);
        // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
        var option = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: header });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].SERVER_ADDRESS
            + '/api/client/detail/shelter/' + shelter_id, option);
    };
    DetailService.prototype.getTransportation = function (transportation_id) {
        // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        header.append('lttoken', _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].RAMDOM_KEY);
        // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
        var option = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: header });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].SERVER_ADDRESS
            + '/api/client/detail/transportation/' + transportation_id, option);
    };
    DetailService.prototype.getTourCompany = function (company_id) {
        // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        header.append('lttoken', _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].RAMDOM_KEY);
        // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
        var option = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: header });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].SERVER_ADDRESS
            + '/api/client/detail/company/' + company_id, option);
    };
    DetailService.prototype.getAnother = function (another_id) {
        // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        header.append('lttoken', _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].RAMDOM_KEY);
        // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
        var option = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: header });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].SERVER_ADDRESS
            + '/api/client/detail/another/' + another_id, option);
    };
    DetailService.prototype.getInternet = function (internet_id) {
        // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        header.append('lttoken', _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].RAMDOM_KEY);
        // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
        var option = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: header });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].SERVER_ADDRESS
            + '/api/client/detail/internet/' + internet_id, option);
    };
    DetailService.prototype.getInfoNearby = function (id, latlng) {
        // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        header.append('lttoken', _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].RAMDOM_KEY);
        // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
        var option = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: header });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].SERVER_ADDRESS
            + '/api/client/near/' + id + '/' + latlng, option);
    };
    DetailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], DetailService);
    return DetailService;
}());



/***/ }),

/***/ "./src/app/services/locationcheck.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/locationcheck.service.ts ***!
  \***************************************************/
/*! exports provided: LocationcheckService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationcheckService", function() { return LocationcheckService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocationcheckService = /** @class */ (function () {
    function LocationcheckService(httpService) {
        this.httpService = httpService;
    }
    LocationcheckService.prototype.getLocalWeater = function (lat, long) {
        var query = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API_ADDRESS + lat + ',' + long + '.json';
        return this.httpService.get(query);
    };
    LocationcheckService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], LocationcheckService);
    return LocationcheckService;
}());



/***/ }),

/***/ "./src/app/services/main.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/main.service.ts ***!
  \******************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import * as bcrypt from 'bcryptjs';
var MainService = /** @class */ (function () {
    function MainService(http) {
        this.http = http;
    }
    MainService.prototype.getMainPageData = function (country_code, latlng) {
        // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        header.append('lttoken', _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].RAMDOM_KEY);
        // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
        var option = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: header });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].SERVER_ADDRESS + '/api/client/home/' + country_code + '/' + latlng, option);
    };
    MainService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "./src/app/services/type.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/type.service.ts ***!
  \******************************************/
/*! exports provided: TypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeService", function() { return TypeService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TypeService = /** @class */ (function () {
    function TypeService(http) {
        this.http = http;
    }
    TypeService.prototype.getTypes = function () {
        // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        header.append('lttoken', _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].RAMDOM_KEY);
        // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
        var option = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: header });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].SERVER_ADDRESS + '/api/client/type/all', option);
    };
    TypeService.prototype.getAttractionsTypes = function () {
        // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        header.append('lttoken', _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].RAMDOM_KEY);
        // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
        var option = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: header });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].SERVER_ADDRESS + '/api/client/type/attractions', option);
    };
    TypeService.prototype.getTypeAttractionses = function (type_id, country_code, latlng) {
        // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        header.append('lttoken', _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].RAMDOM_KEY);
        // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
        var option = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: header });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].SERVER_ADDRESS
            + '/api/client/type/attractions/' + type_id
            + '/' + country_code + '/' + latlng, option);
    };
    TypeService.prototype.getTypeRestaurants = function (type_id, country_code, latlng) {
        // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        header.append('lttoken', _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].RAMDOM_KEY);
        // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
        var option = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: header });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].SERVER_ADDRESS
            + '/api/client/type/restaurant/' + type_id
            + '/' + country_code + '/' + latlng, option);
    };
    TypeService.prototype.getTypeShelters = function (type_id, country_code, latlng) {
        // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        header.append('lttoken', _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].RAMDOM_KEY);
        // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
        var option = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: header });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].SERVER_ADDRESS
            + '/api/client/type/shelter/' + type_id
            + '/' + country_code + '/' + latlng, option);
    };
    TypeService.prototype.getTypeTransportations = function (type_id, country_code, latlng) {
        // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        header.append('lttoken', _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].RAMDOM_KEY);
        // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
        var option = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: header });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].SERVER_ADDRESS
            + '/api/client/type/transportation/' + type_id
            + '/' + country_code + '/' + latlng, option);
    };
    TypeService.prototype.getTourCompanies = function (country_code, latlng) {
        // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        header.append('lttoken', _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].RAMDOM_KEY);
        // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
        var option = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: header });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].SERVER_ADDRESS
            + '/api/client/type/tourcompany/' + country_code
            + '/' + latlng, option);
    };
    TypeService.prototype.getAnothers = function (country_code, latlng) {
        // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        header.append('lttoken', _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].RAMDOM_KEY);
        // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
        var option = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: header });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].SERVER_ADDRESS
            + '/api/client/type/another/' + country_code
            + '/' + latlng, option);
    };
    TypeService.prototype.getInternets = function (country_code, latlng) {
        // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        header.append('lttoken', _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].RAMDOM_KEY);
        // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
        var option = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: header });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].SERVER_ADDRESS
            + '/api/client/type/internet/' + country_code
            + '/' + latlng, option);
    };
    TypeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], TypeService);
    return TypeService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    ANONYMOUS_SECRET: 'laotourapi@nuol.fns.edu.la',
    RAMDOM_KEY: '$2a$10$50H7V.e9F8pUwjqpr5oFu.C8fnVIjv4X80317nkCDDIyzvSvykz7q',
    SERVER_ADDRESS: 'http://localhost:3000',
    API_ADDRESS: 'https://api.wunderground.com//api/b7e4ea3b9ecdbe54/conditions/q/'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Users\A27\Desktop\LaoTourInfo-F1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map