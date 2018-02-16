webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8\">\n  <h3><b>What is a Business Apartment?</b></h3>\n  <p>A business apartment has a hall, kitchen, bathroom, living room and bedroom (one, two or three bedrooms).<br><br>\n  Tastefully furnished, fully appointed kitchen, washing machine/tumble dryer, cable TV, radio, CD-player and telephone as well as internet connection</p>\n  <p>\n  <img src=\"static/assets/img/property_1.jpg\" alt=\"\" title=\"\" class=\"property_img\"/>\n  </p>\n  <p>If you are interested in an apartment with a high service level where nothing is left to chance, the possibility is here.\n  <br><br>\n  <b>A solid 24-hour service programme ensures repairs, maintenance, administration and comfort.</b></p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/apartment-detail/apartment-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ApartmentDetailComponent's private CSS styles */\r\nlabel {\r\n  display: inline-block;\r\n  width: 3em;\r\n  margin: .5em 0;\r\n  color: #607D8B;\r\n  font-weight: bold;\r\n}\r\ninput {\r\n  height: 2em;\r\n  font-size: 1em;\r\n  padding-left: .4em;\r\n}\r\nbutton {\r\n  margin-top: 20px;\r\n  font-family: Arial;\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer; cursor: hand;\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton:disabled {\r\n  background-color: #eee;\r\n  color: #ccc;\r\n  cursor: auto;\r\n}\r\nh1,h2,h3,h4,h5 { font-weight:normal; font-family: din;margin: 0;padding: 0;color: #000}\r\nh1{font-size: 60px; margin-bottom: 25px;color: #fff;}\r\nh2{font-size: 35px; letter-spacing: -1px;margin-bottom: 20px;}\r\nh3{margin: 0 0 15px 0; font-size: 25px;}\r\nh4{margin: 10px 0; font-size: 19px;}\r\nh5{margin: 0 0 5px 0; font-size: 17px;}\r\nh6{margin: 0 0 10px 0; font-size: 14px;}\r\nh4 span{margin-right: 5px; font-size: 15px;}\r\nh6 span{margin-right: 5px; font-size: 12px;}\r\np{margin-bottom: 30px;}\r\na{color:#72b70f; text-decoration:none;outline: none;}\r\na:hover{color:#333;}\r\n.spacer{margin-top: 40px;margin-bottom:40px;}\r\n.center{text-align: center;}\r\n.fullwidth{width: 100%;}\r\nselect,input{outline: 0; margin-bottom: 20px;}\r\na.more{background-color: #222; padding: 2px 6px;color: #fff; text-transform: uppercase; font-size: 11px;}\r\na.more:hover{background: #64a30a;text-decoration: none;}\r\ntable{background-color: #fff;}\r\n.btn{border-radius: 5px; font-family: din; outline: none;}\r\n.btn-success{ background: #72b70f;border:1px solid #72b70f;padding:6px 20px; font-size:16px; width: 100%; }\r\n.btn-primary{ background: #64a30a;border:none;width: 100%;border-radius: 20px;}\r\n.btn-info{background: #333;border:4px solid #ddd;padding: 3px 20px; font-size:20px; border-radius: 20px;  }\r\n.thumbnail{ background-color:#fff;}\r\n.listing-detail{margin-bottom: 30px;}\r\n.listing-detail span{color: #fff; width: 25px; height: 25px; background-color: #555;display: inline-block;border-radius:25px; text-align: center;line-height: 26px; font-size: 14px;cursor: crosshair;}\r\n.listing-detail span:hover{background: #72b70f;}\r\n.property-info{margin:0 0 30px 0;}\r\n.property-info span{margin-right: 5px;}\r\n.property-info p{margin-bottom:10px; }\r\n.property-info p.price{font-size: 28px;color: #72b70f;padding:0;border-radius: 5px;}\r\n.property-info .profile{margin-top: 30px;}\r\n.property-info .profile p{padding-left: 20px; color: #999;}\r\n.enquiry input,.enquiry textarea{margin-bottom: 10px;}\r\n.enquiry button{border-radius: 5px;}\r\n.agents .row{margin-bottom:40px; }\r\n.agents .row h4{margin: 0;}\r\n@media (max-width: 600px) {\r\n  .agents img{ margin-bottom: 20px;}\r\n}\r\n/*\r\nCopyright 2017 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/apartment-detail/apartment-detail.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\" *ngIf=\"apartment\">\n  <div class=\"properties-listing spacer\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-sm-12 \">\n        <div class=\"row\">\n          <div class=\"col-lg-8\">\n            <div class=\"property-images\">\n            <!-- Slider Starts -->\n              <div>\n                <img src=\"{{apartment.photos}}\" alt=\"\" title=\"\" class=\"img-fluid\" alt=\"Responsive image\"/>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"spacer\">\n          <h2>{{ apartment.title }}</h2>\n          <h4>Property Details</h4>\n\n          <p>{{ apartment.description }} </p>\n        </div>\n      <div class=\"row equal\">\n          <div class=\"col-lg-6  col-sm-6 mycontent-left\">\n            <div class=\"property-info\">\n            <p class=\"price\">Price: {{ apartment.price | currency :'EUR':true }}</p>\n            <p class=\"area\">Location: {{ apartment.city }}</p>\n\n              <div class=\"profile\">\n                <i class=\"fa fa-user\" aria-hidden=\"true\"></i>Owners Details\n                <p>Username: {{ apartment.userUsername }}<br>Publication date: {{ apartment.pub_date | date:\"shortDate\"}}</p>\n              </div>\n            </div>\n\n          </div>\n          <div class=\"col-lg-6 col-sm-6 mycontent-right\">\n            <br>\n            <app-bookings></app-bookings>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-reviews></app-reviews>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/apartment-detail/apartment-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApartmentDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apartment_service__ = __webpack_require__("../../../../../src/app/apartment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__apartment__ = __webpack_require__("../../../../../src/app/apartment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApartmentDetailComponent = (function () {
    function ApartmentDetailComponent(route, apartmentService, location) {
        this.route = route;
        this.apartmentService = apartmentService;
        this.location = location;
    }
    ApartmentDetailComponent.prototype.ngOnInit = function () {
        this.getApartment();
    };
    ApartmentDetailComponent.prototype.getApartment = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.apartmentService.getApartment(id).subscribe(function (apartment) { return _this.apartment = apartment; });
    };
    ApartmentDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    ApartmentDetailComponent.prototype.save = function () {
        var _this = this;
        this.apartmentService.updateApartment(this.apartment)
            .subscribe(function () { return _this.goBack(); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__apartment__["a" /* Apartment */])
    ], ApartmentDetailComponent.prototype, "apartment", void 0);
    ApartmentDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-apartment-detail',
            template: __webpack_require__("../../../../../src/app/apartment-detail/apartment-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/apartment-detail/apartment-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__apartment_service__["a" /* ApartmentService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]])
    ], ApartmentDetailComponent);
    return ApartmentDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/apartment-search/apartment-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ApartmentSearch private styles */\r\n.search-result li {\r\n  border-bottom: 1px solid gray;\r\n  border-left: 1px solid gray;\r\n  border-right: 1px solid gray;\r\n  width:300px;\r\n  height: 30px;\r\n  padding: 5px;\r\n  background-color: white;\r\n  cursor: pointer;\r\n  list-style-type: none;\r\n}\r\n#search-component {\r\n  background-color: lightblue;\r\n  height: 150px;\r\n}\r\n.search-result li:hover {\r\n  background-color: #607D8B;\r\n}\r\n.search-result li a {\r\n  color: #888;\r\n  display: block;\r\n  text-decoration: none;\r\n}\r\n.search-result li a:hover {\r\n  color: white;\r\n}\r\n.search-result li a:active {\r\n  color: white;\r\n}\r\n#search-box {\r\n  width: 300px;\r\n  height: 30px;\r\n}\r\nul.search-result {\r\n  margin-top: 0;\r\n  padding-left: 0;\r\n}\r\n/*\r\nCopyright 2017 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/apartment-search/apartment-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\n  <h2>Apartments</h2>\n  <h4 class=\"text-light\">Apartment Search</h4>\n\n  <input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" />\n\n  <ul class=\"search-result\">\n    <li *ngFor=\"let apartment of apartments$ | async\" >\n      <a routerLink=\"/detail/{{apartment.id}}\">\n        {{apartment.title}}\n      </a>\n    </li>\n  </ul>\n</div>\n<br><br>\n<hr>\n"

/***/ }),

/***/ "../../../../../src/app/apartment-search/apartment-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApartmentSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apartment_service__ = __webpack_require__("../../../../../src/app/apartment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApartmentSearchComponent = (function () {
    function ApartmentSearchComponent(apartmentService) {
        this.apartmentService = apartmentService;
        this.searchTerms = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    ApartmentSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apartments$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* debounceTime */])(300), 
        // ignore new term if same as previous term
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* distinctUntilChanged */])(), 
        // switch to new search observable each time the term changes
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["e" /* switchMap */])(function (term) { return _this.apartmentService.searchApartments(term); }));
    };
    // Push a search term into the observable stream.
    ApartmentSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    ApartmentSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-apartment-search',
            template: __webpack_require__("../../../../../src/app/apartment-search/apartment-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/apartment-search/apartment-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__apartment_service__["a" /* ApartmentService */]])
    ], ApartmentSearchComponent);
    return ApartmentSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/apartment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApartmentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var ApartmentService = (function () {
    function ApartmentService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.apartmentsUrl = 'api/apartments';
    }
    ApartmentService.prototype.getApartments = function () {
        var _this = this;
        return this.http.get(this.apartmentsUrl).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["f" /* tap */])(function (apartments) { return _this.log("fetched apartments"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('getApartments', [])));
    };
    ApartmentService.prototype.getApartment = function (id) {
        var _this = this;
        var url = this.apartmentsUrl + "/" + id;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["f" /* tap */])(function (_) { return _this.log("fetched Apartment id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError("getApartment id=" + id)));
    };
    ApartmentService.prototype.updateApartment = function (apartment) {
        var _this = this;
        return this.http.put(this.apartmentsUrl, apartment, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["f" /* tap */])(function (_) { return _this.log("updated apartment id=" + apartment.id); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('updateApartment')));
    };
    ApartmentService.prototype.addApartment = function (apartment) {
        var _this = this;
        return this.http.post(this.apartmentsUrl, apartment, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["f" /* tap */])(function (apartment) { return _this.log("added apartment w/ id=" + apartment.id); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('addApartment')));
    };
    /** DELETE: delete the apartment from the server */
    ApartmentService.prototype.deleteApartment = function (apartment) {
        var _this = this;
        var id = typeof apartment === 'number' ? apartment : apartment.id;
        var url = this.apartmentsUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["f" /* tap */])(function (_) { return _this.log("deleted apartment id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('deleteApartment')));
    };
    /* GET apartments whose title contains search term */
    ApartmentService.prototype.searchApartments = function (term) {
        var _this = this;
        if (!term.trim()) {
            // if not search term, return empty apartment array.
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])([]);
        }
        return this.http.get("api/apartments/?title=" + term).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["f" /* tap */])(function (_) { return _this.log("found apartments matching \"" + term + "\""); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('searchApartments', [])));
    };
    ApartmentService.prototype.log = function (message) {
        this.messageService.add('ApartmentService:  ' + message);
    };
    ApartmentService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    ApartmentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */]])
    ], ApartmentService);
    return ApartmentService;
}());



/***/ }),

/***/ "../../../../../src/app/apartment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Apartment; });
var Apartment = (function () {
    function Apartment() {
    }
    return Apartment;
}());



/***/ }),

/***/ "../../../../../src/app/apartments/apartments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* apartmentsComponent's private CSS styles */\r\n/* .apartments {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: auto;\r\n}\r\n.apartments li {\r\n  position: relative;\r\n  cursor: pointer;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n\r\n}\r\n\r\n.apartments li:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n\r\n.apartments a {\r\n  color: #888;\r\n  text-decoration: none;\r\n  position: relative;\r\n  display: block;\r\n  width: 250px;\r\n}\r\n\r\n.apartments a:hover {\r\n  color:#607D8B;\r\n}\r\n\r\n.apartments .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 1em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 1.8em;\r\n  min-width: 16px;\r\n  text-align: right;\r\n  margin-right: .8em;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\n\r\n\r\n.button {\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n  font-family: Arial;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\n\r\nbutton.delete {\r\n  position: relative;\r\n  left: 350px;\r\n  top: -32px;\r\n  background-color: gray !important;\r\n  color: white;\r\n} */\r\n/*\r\nCopyright 2017 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/apartments/apartments.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-apartment-search></app-apartment-search>\n<h2>Apartments</h2>\n<section class=\"listings\">\n  <div class=\"wrapper\">\n    <ul class=\"properties_list\">\n      <a *ngFor=\"let apartment of apartments\"\n        routerLink=\"/detail/{{apartment.id}}\">\n        <li>\n          <div class=\"module apartment\">\n\n              <img src=\"{{apartment.photos}}\" alt=\"\" title=\"\" class=\"property_img\"/>\n\n            <span class=\"price\">{{ apartment.price | currency :'EUR':true}}</span>\n            <div class=\"property_details\">\n              <h1>\n\n                {{ apartment.title }}\n              </h1>\n              <h2 class=\"row\">{{ (apartment.description.length>30)? (apartment.description | slice:0:30)+'..':(str) }}\n                <span class=\"property_size\"> {{ apartment.pub_date | date : \"shortDate\" }}&nbsp;&nbsp;</span>\n                <div *ngIf=\"auth.isLoggedIn\">\n                  <div *ngIf=\"auth.user.id == apartment.user\">\n                    <button class=\"delete btn btn-outline-danger\" title=\"delete apartment\"\n                            (click)=\"delete(apartment)\">x</button>\n                  </div>\n                </div>\n              </h2>\n            </div>\n          </div>\n\n        </li>\n      </a>\n    </ul>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/apartments/apartments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApartmentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__apartment_service__ = __webpack_require__("../../../../../src/app/apartment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApartmentsComponent = (function () {
    function ApartmentsComponent(apartmentService, auth) {
        this.apartmentService = apartmentService;
        this.auth = auth;
    }
    ApartmentsComponent.prototype.ngOnInit = function () {
        this.getApartments();
    };
    ApartmentsComponent.prototype.getApartments = function () {
        var _this = this;
        this.apartmentService.getApartments()
            .subscribe(function (apartments) { return _this.apartments = apartments; });
    };
    ApartmentsComponent.prototype.add = function (title, city, description, prices) {
        var _this = this;
        title = title.trim();
        city = city.trim();
        var price = +prices;
        if (!title || !city || !description || !price) {
            return;
        }
        this.apartmentService.addApartment({ title: title, description: description, city: city, price: price })
            .subscribe(function (apartment) {
            _this.apartments.push(apartment);
        });
    };
    ApartmentsComponent.prototype.delete = function (apartment) {
        this.apartments = this.apartments.filter(function (h) { return h !== apartment; });
        this.apartmentService.deleteApartment(apartment).subscribe();
    };
    ApartmentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-apartments',
            template: __webpack_require__("../../../../../src/app/apartments/apartments.component.html"),
            styles: [__webpack_require__("../../../../../src/app/apartments/apartments.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__apartment_service__["a" /* ApartmentService */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]])
    ], ApartmentsComponent);
    return ApartmentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apartments_apartments_component__ = __webpack_require__("../../../../../src/app/apartments/apartments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__apartment_detail_apartment_detail_component__ = __webpack_require__("../../../../../src/app/apartment-detail/apartment-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__upload_apartment_upload_apartment_component__ = __webpack_require__("../../../../../src/app/upload-apartment/upload-apartment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reviews_reviews_component__ = __webpack_require__("../../../../../src/app/reviews/reviews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'apartments', component: __WEBPACK_IMPORTED_MODULE_2__apartments_apartments_component__["a" /* ApartmentsComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'upload_apartment', component: __WEBPACK_IMPORTED_MODULE_5__upload_apartment_upload_apartment_component__["a" /* UploadApartmentComponent */] },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_4__apartment_detail_apartment_detail_component__["a" /* ApartmentDetailComponent */] },
    { path: 'apartments/:id/reviews', component: __WEBPACK_IMPORTED_MODULE_6__reviews_reviews_component__["a" /* ReviewsComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<app-nav-header></app-nav-header>\n<router-outlet></router-outlet>\n<!--<app-apartments></app-apartments>-->\n<!-- <app-messages></app-messages> in case of debugging  -->\n<app-site-footer></app-site-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'yourhomefront';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__token_interceptor__ = __webpack_require__("../../../../../src/app/token.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__apartments_apartments_component__ = __webpack_require__("../../../../../src/app/apartments/apartments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__italics_directive__ = __webpack_require__("../../../../../src/app/italics.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__apartment_detail_apartment_detail_component__ = __webpack_require__("../../../../../src/app/apartment-detail/apartment-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__apartment_service__ = __webpack_require__("../../../../../src/app/apartment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__messages_messages_component__ = __webpack_require__("../../../../../src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__apartment_search_apartment_search_component__ = __webpack_require__("../../../../../src/app/apartment-search/apartment-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__nav_header_nav_header_component__ = __webpack_require__("../../../../../src/app/nav-header/nav-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__site_footer_site_footer_component__ = __webpack_require__("../../../../../src/app/site-footer/site-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__upload_apartment_upload_apartment_component__ = __webpack_require__("../../../../../src/app/upload-apartment/upload-apartment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__errorhandling_service__ = __webpack_require__("../../../../../src/app/errorhandling.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__reviews_reviews_component__ = __webpack_require__("../../../../../src/app/reviews/reviews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__review_service__ = __webpack_require__("../../../../../src/app/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__bookings_bookings_component__ = __webpack_require__("../../../../../src/app/bookings/bookings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__booking_service__ = __webpack_require__("../../../../../src/app/booking.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';


















// import { ReactiveFormsModule } from '@angular/forms';









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__apartments_apartments_component__["a" /* ApartmentsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__italics_directive__["a" /* ItalicsDirective */],
                __WEBPACK_IMPORTED_MODULE_9__apartment_detail_apartment_detail_component__["a" /* ApartmentDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_11__messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_15__apartment_search_apartment_search_component__["a" /* ApartmentSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_16__nav_header_nav_header_component__["a" /* NavHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_17__site_footer_site_footer_component__["a" /* SiteFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_18__upload_apartment_upload_apartment_component__["a" /* UploadApartmentComponent */],
                __WEBPACK_IMPORTED_MODULE_22__reviews_reviews_component__["a" /* ReviewsComponent */],
                __WEBPACK_IMPORTED_MODULE_25__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_27__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_28__bookings_bookings_component__["a" /* BookingsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_20_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_21__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__apartment_service__["a" /* ApartmentService */],
                __WEBPACK_IMPORTED_MODULE_12__message_service__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_23__review_service__["a" /* ReviewService */],
                __WEBPACK_IMPORTED_MODULE_19__errorhandling_service__["a" /* ErrorHandlingService */],
                __WEBPACK_IMPORTED_MODULE_26__user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_29__booking_service__["a" /* BookingService */],
                __WEBPACK_IMPORTED_MODULE_24__auth_service__["a" /* AuthService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_5__token_interceptor__["a" /* TokenInterceptor */],
                    multi: true,
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__errorhandling_service__ = __webpack_require__("../../../../../src/app/errorhandling.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Credentials = (function () {
    function Credentials(username, password) {
        this.username = username;
        this.password = password;
    }
    return Credentials;
}());
var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var AuthService = (function () {
    function AuthService(http, eh, messageService) {
        this.http = http;
        this.eh = eh;
        this.messageService = messageService;
        this.isLoggedIn = false;
    }
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        var authUrl = "api-token-auth/";
        var credentials = new Credentials(username, password);
        return this.http
            .post(authUrl, credentials, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["d" /* map */])(function (results) {
            if (results['token']) {
                localStorage.setItem('yourhomefront-jwt-token', results['token']);
                _this.user = results['user'];
                _this.isLoggedIn = true;
                return true;
            }
            else {
                return false;
            }
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.eh.handleError("login username=" + username, false)));
    };
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
        localStorage.removeItem('yourhomefront-jwt-token');
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__errorhandling_service__["a" /* ErrorHandlingService */],
            __WEBPACK_IMPORTED_MODULE_4__message_service__["a" /* MessageService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/booking.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { ErrorHandlingService } from './errorhandling.service'
var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var BookingService = (function () {
    function BookingService(http) {
        this.http = http;
        this.bookingsUrl = 'api/bookings';
    }
    BookingService.prototype.newBooking = function (booking) {
        return this.http.post(this.bookingsUrl, booking, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('newBooking')));
    };
    BookingService.prototype.getBookings = function () {
        return this.http.get(this.bookingsUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('getBookings', [])));
    };
    BookingService.prototype.getBooking = function (id) {
        var url = this.bookingsUrl + "/" + id;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError("getBooking id=" + id)));
    };
    BookingService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    BookingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], BookingService);
    return BookingService;
}());



/***/ }),

/***/ "../../../../../src/app/bookings/bookings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bookings/bookings.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row justify-content-start panel panel-danger\" *ngIf=\"auth.isLoggedIn\">\n  <div class=\"enquiry\">\n    <br><br><br>\n    <div class=\"panel-body\">\n      <h6>Ask for more info</h6>\n      <form role=\"form\">\n                    <label for=\"name\" class=\"sr-only\">name</label>\n                    <input #name type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"Full Name\"/>\n                    <label for=\"contact_no\" class=\"sr-only\">00302102528178</label>\n                    <input #contact_no id=\"contact_no\" type=\"text\" class=\"form-control\" placeholder=\"00302102528178\"/>\n                    <label for=\"comment\"  class=\"sr-only\">00302102528178</label>\n                    <textarea #comment id=\"comment\" rows=\"6\" class=\"form-control\" placeholder=\"Whats on your mind?\"></textarea>\n          <button (click)=\"newBooking(name.value, contact_no.value, comment.value);\n          name.value=''; contact_no.value=''; comment.value='';\" type=\"submit\" class=\"btn btn-primary\" name=\"Submit\">Send Message</button>\n      </form>\n      <div class=\"alert alert-warning alert-dismissable text-center\" *ngIf=\"messages.length\">\n        <strong>Warning</strong>\n        <button class=\"btn btn-outline-info\"\n                (click)=\"clear()\">clear</button>\n        <ul>\n          <li *ngFor=\"let message of messages\"> {{message}} </li>\n        </ul>\n        <!-- <div class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</div> -->\n      </div>\n    </div>\n   </div>\n</div>\n<div *ngIf=\"!auth.isLoggedIn\">\n  <div class = \"jumbotron\">\n    <h1 class=\"display-3\"><a routerLink=\"/login\" href=\"#\">Log in </a></h1>\n    <p class=\"lead\"><a routerLink=\"/login\" href=\"#\">Please Log in to ask for more info</a></p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/bookings/bookings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__booking_service__ = __webpack_require__("../../../../../src/app/booking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BookingsComponent = (function () {
    function BookingsComponent(auth, route, successRouter, location, bookingService) {
        this.auth = auth;
        this.route = route;
        this.successRouter = successRouter;
        this.location = location;
        this.bookingService = bookingService;
        this.bookings = [];
        this.booking = [];
        this.messages = [];
    }
    BookingsComponent.prototype.ngOnInit = function () {
    };
    BookingsComponent.prototype.newBooking = function (name, contact_no, comment) {
        var _this = this;
        if (!name || !contact_no || !comment) {
            this.addError("Please complete all the fields.");
            return;
        }
        var user = this.auth.user.id;
        var apartment = +this.route.snapshot.paramMap.get('id');
        name = name.trim();
        contact_no = contact_no.trim();
        comment = comment.trim();
        this.bookingService.newBooking({ user: user, apartment: apartment, name: name, contact_no: contact_no, comment: comment })
            .subscribe(function (booking) {
            _this.bookings.push(booking);
            _this.successRouter.navigate(['/']);
        });
    };
    BookingsComponent.prototype.addError = function (message) {
        this.messages.push(message);
    };
    BookingsComponent.prototype.clear = function () {
        this.messages.length = 0;
    };
    BookingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bookings',
            template: __webpack_require__("../../../../../src/app/bookings/bookings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bookings/bookings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_3__booking_service__["a" /* BookingService */]])
    ], BookingsComponent);
    return BookingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* DashboardComponent's private CSS styles */\r\n/* [class*='col-'] {\r\n  float: left;\r\n  padding-right: 20px;\r\n  padding-bottom: 20px;\r\n}\r\n\r\n[class*='col-']:last-of-type {\r\n  padding-right: 0;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n*, *:after, *:before {\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\nh3 {\r\n  text-align: center; margin-bottom: 0;\r\n}\r\n\r\nh4 {\r\n  position: relative;\r\n}\r\n\r\n.grid {\r\n  margin: 0;\r\n}\r\n\r\n.col-1-4 {\r\n  width: 25%;\r\n}\r\n\r\n.module {\r\n  padding: 20px;\r\n  text-align: center;\r\n  color: #eee;\r\n  max-height: 120px;\r\n  min-width: 120px;\r\n  background-color: #607D8B;\r\n  border-radius: 2px;\r\n}\r\n\r\n.module:hover {\r\n  background-color: #EEE;\r\n  cursor: pointer;\r\n  color: #607d8b;\r\n}\r\n\r\n.grid-pad {\r\n  padding: 10px 0;\r\n}\r\n\r\n.grid-pad > [class*='col-']:last-of-type {\r\n  padding-right: 20px;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .module {\r\n    font-size: 10px;\r\n    max-height: 75px; }\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n  .grid {\r\n    margin: 0;\r\n  }\r\n  .module {\r\n    min-width: 60px;\r\n  }\r\n} */\r\n/*\r\nCopyright 2017 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<section class=\"listings\">\n  <div class=\"wrapper\">\n    <ul class=\"properties_list\">\n      <a *ngFor=\"let apartment of apartments\"\n        routerLink=\"/detail/{{apartment.id}}\">\n        <li>\n          <div class=\"module apartment\">\n              <img src=\"{{apartment.photos}}\" alt=\"\" title=\"\" class=\"property_img\"/>\n\n            <span class=\"price\">{{ apartment.price | currency :'EUR':true}}</span>\n            <div class=\"property_details\">\n              <h1>\n                <!-- <a href=\"#\">{{ apartment.title }}</a> -->\n                {{ apartment.title }}\n              </h1>\n              <h2>{{ (apartment.description.length>6)? (apartment.description | slice:0:6)+'..':(str) }} <span class=\"property_size\">{{ apartment.pub_date | date : \"shortDate\"}}</span></h2>\n\n            </div>\n          </div>\n\n        </li>\n      </a>\n    </ul>\n    <div class=\"more_listing\">\n      <a   routerLink=\"/apartments\" class=\"more_listing_btn\">View More Listings</a>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__apartment_service__ = __webpack_require__("../../../../../src/app/apartment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(apartmentService) {
        this.apartmentService = apartmentService;
        this.apartments = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getApartments();
    };
    DashboardComponent.prototype.getApartments = function () {
        var _this = this;
        this.apartmentService.getApartments()
            .subscribe(function (apartments) { return _this.apartments = apartments.slice(1, 5); });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__apartment_service__["a" /* ApartmentService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/errorhandling.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorHandlingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ErrorHandlingService = (function () {
    function ErrorHandlingService(messageService) {
        this.messageService = messageService;
    }
    ErrorHandlingService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    ErrorHandlingService.prototype.log = function (message) {
        this.messageService.add('BookService: ' + message);
    };
    ErrorHandlingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */]])
    ], ErrorHandlingService);
    return ErrorHandlingService;
}());



/***/ }),

/***/ "../../../../../src/app/italics.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItalicsDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItalicsDirective = (function () {
    function ItalicsDirective(el) {
        el.nativeElement.style['font-style'] = 'italic';
    }
    ItalicsDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appItalics]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], ItalicsDirective);
    return ItalicsDirective;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-signin {\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.form-signin .form-signin-heading,\r\n.form-signin .checkbox {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.form-signin .checkbox {\r\n  font-weight: 400;\r\n}\r\n\r\n.form-signin .form-control {\r\n  position: relative;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n\r\n.form-signin input[type=\"text\"] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.form-signin input[type=\"password\"] {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row equal\">\n    <div class=\"col-lg-6  col-sm-6\">\n      <span [ngSwitch]=\"auth.isLoggedIn\">\n        <span *ngSwitchCase=\"false\">\n          <form class=\"form-signin\">\n            <h2 class=\"form-signin-heading\">Please sign in</h2>\n            <label for=\"username\" class=\"sr-only\">Email address</label>\n            <input #username\n                   type=\"text\" id=\"username\" class=\"form-control\"\n                   placeholder=\"username\" required=\"\" autofocus=\"\">\n            <label for=\"password\" class=\"sr-only\">Password</label>\n            <input #password\n                   type=\"password\" id=\"password\" class=\"form-control\"\n                   placeholder=\"Password\" required=\"\">\n\n            <button (click)=\"login(username.value, password.value)\"\n                    class=\"btn btn-lg btn-primary btn-block\"\n                    type=\"submit\">Sign in</button>\n          </form>\n        </span>\n        <span *ngSwitchCase=\"true\">\n          <form class=\"form-signin\">\n            <button (click)=\"logout()\"\n                    class=\"btn btn-lg btn-primary btn-block\">Logout</button>\n          </form>\n        </span>\n      </span>\n      <div class=\"alert alert-warning alert-dismissable text-center\" *ngIf=\"messages.length && formError == 0\">\n        <strong>Warning</strong>\n        <button class=\"btn btn-outline-info\"\n                (click)=\"clear()\">clear</button>\n        <ul>\n          <li *ngFor=\"let message of messages\"> {{message}} </li>\n        </ul>\n        <!-- <div class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</div> -->\n      </div>\n    </div>\n\n    <div *ngIf=\"!auth.isLoggedIn\" class=\"col-lg-6  col-sm-6\">\n      <form class=\"form-horizontal\">\n        <h2 class=\"form-signin-heading\">Please Register</h2>\n        <div class=\"form-group\">\n            <label class=\"sr-only\" for=\"Username\">Username*</label>\n            <input type=\"text\"  class=\"form-control\" placeholder=\"Select Username\"  #userUsername>\n            <!-- <div *ngIf=\"registerUsername.invalid\"> Username should have at least 4 characters. </div> -->\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"sr-only\" for=\"password\">Password*</label>\n          <input type=\"password\"  class=\"form-control\" placeholder=\"Enter password\" #userPassword>\n            <!-- <div *ngIf=\"registerPassword.invalid\"> Password should be at least 4 characters length. </div> -->\n        </div>\n        <br>\n        <div class=\"form-group\">\n          <button type=\"submit\" (click)=\"add(userUsername.value, userPassword.value);\n          userUsername.value=''; userPassword.value='';\" class=\"btn btn-lg btn-primary btn-block\" >Register</button>\n        </div>\n      </form>\n      <div class=\"alert alert-warning alert-dismissable text-center\" *ngIf=\"messages.length && formError == 1\">\n        <strong>Warning</strong>\n        <button class=\"btn btn-outline-info\"\n                (click)=\"clear()\">clear</button>\n        <ul>\n          <li *ngFor=\"let message of messages\"> {{message}} </li>\n        </ul>\n        <!-- <div class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</div> -->\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__errorhandling_service__ = __webpack_require__("../../../../../src/app/errorhandling.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = (function () {
    function LoginComponent(userService, auth, eh, router, fb, messageService) {
        this.userService = userService;
        this.auth = auth;
        this.eh = eh;
        this.router = router;
        this.fb = fb;
        this.messageService = messageService;
        this.users = [];
        this.all_users = [];
        this.status = false;
        this.messages = [];
        this.formError = 0;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.registerForm = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormGroup */]({
            registerUsername: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].minLength(4)]),
            registerPassword: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].minLength(4)])
        });
    };
    // Log in Methods
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        this.formError = 0;
        this.auth.login(username, password)
            .subscribe(function (res) {
            if (res) {
                _this.router.navigate(['/']);
                _this.status = true;
            }
            else {
                _this.status = false;
                _this.addError("Please insert valid Credentials");
            }
        });
    };
    LoginComponent.prototype.logout = function () {
        this.auth.logout();
    };
    // Register Methods
    LoginComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) { return _this.all_users = users; });
    };
    LoginComponent.prototype.add = function (username, password) {
        var _this = this;
        this.formError = 1;
        username = username.trim();
        if (!username || !password) {
            this.addError("Please complete all the required fields.");
            return;
        }
        for (var _i = 0, _a = this.all_users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.username == username) {
                this.addError("This username already exists.");
                return;
            }
        }
        this.userService.addUser({ username: username, password: password })
            .subscribe(function (user) {
            _this.users.push(user);
        });
        setTimeout(function () {
            alert('You are successfully logged in!');
            _this.login(username, password);
        }, 1000);
    };
    LoginComponent.prototype.addError = function (message) {
        this.messages.push(message);
    };
    LoginComponent.prototype.clear = function () {
        this.messages.length = 0;
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__errorhandling_service__["a" /* ErrorHandlingService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__message_service__["a" /* MessageService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageService = (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages.length = 0;
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "../../../../../src/app/messages/messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* MessagesComponent's private CSS styles */\r\nh2 {\r\n  color: red;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: lighter;\r\n}\r\nbody {\r\n  margin: 2em;\r\n}\r\nbody, input[text], button {\r\n  color: crimson;\r\n  font-family: Cambria, Georgia;\r\n}\r\nbutton.clear {\r\n  font-family: Arial;\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton:disabled {\r\n  background-color: #eee;\r\n  color: #aaa;\r\n  cursor: auto;\r\n}\r\nbutton.clear {\r\n  color: #888;\r\n  margin-bottom: 12px;\r\n}\r\n/*\r\nCopyright 2017 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\r\n\r\n  <h6>Error Messages</h6>\r\n  <button class=\"clear\"\r\n          (click)=\"messageService.clear()\">clear</button>\r\n  <div *ngFor='let message of messageService.messages'> {{message}} </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__("../../../../../src/app/messages/messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/nav-header/nav-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .navbar.transparent.navbar-inverse .navbar-inner {\r\n   border-width: 0px;\r\n   -webkit-box-shadow: 0px 0px;\r\n   box-shadow: 0px 0px;\r\n   background-color: rgba(0,0,0,0.0);\r\n   background-image: -webkit-gradient(linear, 50.00% 0.00%, 50.00% 100.00%, color-stop( 0% , rgba(0,0,0,0.00)),color-stop( 100% , rgba(0,0,0,0.00)));\r\n   background-image: -webkit-linear-gradient(270deg,rgba(0,0,0,0.00) 0%,rgba(0,0,0,0.00) 100%);\r\n   background-image: linear-gradient(180deg,rgba(0,0,0,0.00) 0%,rgba(0,0,0,0.00) 100%);\r\n} */\r\n\r\nnav.navbar {\r\n  border-top: none;\r\n  background-color: rgba(0,0,0, 0);\r\n  position: absolute;\r\n}\r\n\r\nli a .routerLinkActive[active] {\r\n  font-weight: bold;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav-header/nav-header.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"hero\">\n  <header>\n    <div class=\"wrapper\">\n      <nav class=\"navbar navbar-expand-lg fixed-top\" role=\"navigation\">\n        <button class=\"navbar-toggler \" type=\"button\" aria-controls=\"appNavigation\"\n         [attr.aria-expanded]=\"!isCollapsed\" aria-label=\"Toggle navigation\" (click)=\"toggleMenu()\">\n          <span ><img src=\"static/assets/img/hamburger_icon.png\"></span>\n        </button>\n        <a  routerLink=\"/dashboard\"><img src=\"static/assets/img/logo2.png\" class=\"navbar-brand\" class=\"logo\" alt=\"\" title=\"\"/></a>\n        <div class=\"collapse navbar-collapse navbar-default\" id=\"appNavigation\" [ngbCollapse]=\"isCollapsed\">\n          <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\" routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/dashboard\" href=\"#\">Home<span class=\"sr-only\">(current)</span></a></li>\n            <li class=\"nav-item\" routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/apartments\" href=\"#\">Apartments</a></li>\n            <li class=\"nav-item\" routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/upload_apartment\" href=\"#\">Upload</a></li>\n            <li class=\"nav-item\" routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/about\">About</a></li>\n            <!-- <li class=\"nav-item\" routerLinkActive=\"active\"><a class=\"nav-link\" href=\"#\">Contact</a></li> -->\n          </ul>\n          <div *ngIf=!auth.isLoggedIn>\n            <a href=\"#\" routerLink=\"/login\" class=\"login_btn\">{{ auth.isLoggedIn ? 'Logout' : 'Login / Register' }}</a>\n          </div>\n          <div *ngIf=auth.isLoggedIn>\n            <a  (click)=\"auth.logout()\" class=\"login_btn\">Logout</a>\n          </div>\n        </div>\n      </nav>\n  </div>\n</header>\n  <!--  end header section  -->\n\n\n    <section class=\"caption\">\n      <h2 class=\"caption\">Find You Dream Home</h2>\n      <h3 class=\"properties\">Business Apartments - Houses - Mansions</h3>\n    </section>\n</section><!--  end hero section  -->\n"

/***/ }),

/***/ "../../../../../src/app/nav-header/nav-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavHeaderComponent = (function () {
    function NavHeaderComponent(auth) {
        this.auth = auth;
        this.isCollapsed = true;
    }
    NavHeaderComponent.prototype.toggleMenu = function () {
        this.isCollapsed = !this.isCollapsed;
    };
    NavHeaderComponent.prototype.ngOnInit = function () {
    };
    NavHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav-header',
            template: __webpack_require__("../../../../../src/app/nav-header/nav-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav-header/nav-header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], NavHeaderComponent);
    return NavHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/review.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var ReviewService = (function () {
    function ReviewService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
    }
    // get reviews from the server
    ReviewService.prototype.getReviews = function (apartmentId) {
        var _this = this;
        var url = "api/apartments/" + apartmentId + "/reviews";
        return this.http.get(url)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["f" /* tap */])(function (reviews) { return _this.log("fetched reviews"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('getReviews', [])));
    };
    // add review to the server
    ReviewService.prototype.addReview = function (review) {
        var _this = this;
        var url = "api/apartments/" + review.apartment + "/reviews";
        return this.http.post(url, review, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["f" /* tap */])(function (review) { return _this.log("added review w/ id=" + review.id); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('addReview')));
    };
    ReviewService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    ReviewService.prototype.log = function (message) {
        this.messageService.add('ReviewService: ' + message);
    };
    ReviewService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__message_service__["a" /* MessageService */]])
    ], ReviewService);
    return ReviewService;
}());



/***/ }),

/***/ "../../../../../src/app/review.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Review; });
var Review = (function () {
    function Review() {
    }
    return Review;
}());



/***/ }),

/***/ "../../../../../src/app/reviews/reviews.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel-shadow {\r\n    -webkit-box-shadow: rgba(0, 0, 0, 0.3) 7px 7px 7px;\r\n            box-shadow: rgba(0, 0, 0, 0.3) 7px 7px 7px;\r\n}\r\n.panel-white {\r\n  border: 1px solid #dddddd;\r\n}\r\n.panel-white  .panel-heading {\r\n  color: #333;\r\n  background-color: #fff;\r\n  border-color: #ddd;\r\n}\r\n.panel-white  .panel-footer {\r\n  background-color: #fff;\r\n  border-color: #ddd;\r\n}\r\n.post .post-heading {\r\n  height: 95px;\r\n  padding: 20px 15px;\r\n}\r\n.post .post-heading .avatar {\r\n  width: 60px;\r\n  height: 60px;\r\n  display: block;\r\n  margin-right: 15px;\r\n}\r\n.post .post-heading .meta .title {\r\n  margin-bottom: 0;\r\n}\r\n.post .post-heading .meta .title a {\r\n  color: black;\r\n}\r\n.post .post-heading .meta .title a:hover {\r\n  color: #aaaaaa;\r\n}\r\n.post .post-heading .meta .time {\r\n  margin-top: 8px;\r\n  color: #999;\r\n}\r\n.post .post-image .image {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n.post .post-description {\r\n  padding: 15px;\r\n}\r\n.post .post-description p {\r\n  font-size: 14px;\r\n}\r\n.post .post-description .stats {\r\n  margin-top: 20px;\r\n}\r\n.post .post-description .stats .stat-item {\r\n  display: inline-block;\r\n  margin-right: 15px;\r\n}\r\n.post .post-description .stats .stat-item .icon {\r\n  margin-right: 8px;\r\n}\r\n.post .post-footer {\r\n  border-top: 1px solid #ddd;\r\n  padding: 15px;\r\n}\r\n.post .post-footer .input-group-addon a {\r\n  color: #454545;\r\n}\r\n.post .post-footer .comments-list {\r\n  padding: 0;\r\n  margin-top: 20px;\r\n  list-style-type: none;\r\n}\r\n.post .post-footer .comments-list .comment {\r\n  display: block;\r\n  width: 100%;\r\n  margin: 20px 0;\r\n}\r\n.post .post-footer .comments-list .comment .avatar {\r\n  width: 35px;\r\n  height: 35px;\r\n}\r\n.post .post-footer .comments-list .comment .comment-heading {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n.post .post-footer .comments-list .comment .comment-heading .user {\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  display: inline;\r\n  margin-top: 0;\r\n  margin-right: 10px;\r\n}\r\n.post .post-footer .comments-list .comment .comment-heading .time {\r\n  font-size: 12px;\r\n  color: #aaa;\r\n  margin-top: 0;\r\n  display: inline;\r\n}\r\n.post .post-footer .comments-list .comment .comment-body {\r\n  margin-left: 50px;\r\n}\r\n.post .post-footer .comments-list .comment > .comments-list {\r\n  margin-left: 50px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reviews/reviews.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>Add Review</h3>\n<!-- *ngIf=\"auth.isLoggedIn\" -->\n  <div class=\"row justify-content-start\" *ngIf=\"auth.isLoggedIn\">\n    <div class=\"col-sm-8\">\n      <form role=\"form\" (ngSubmit)=\"onSubmit()\" #reviewForm=\"ngForm\">\n\n        <div class=\"form-group\">\n          <label for=\"title\">Title</label>\n          <input type=\"text\"\n                 class=\"form-control\"\n                 id=\"title\"\n                 [(ngModel)]=\"review.title\"\n                 name=\"title\"\n                 required>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"text\">Content</label>\n          <textarea class=\"form-control\"\n                    rows=\"5\"\n                    id=\"text\"\n                    [(ngModel)]=\"review.text\"\n                    name=\"text\">\n            </textarea>\n        </div>\n        <!-- <label >\n        <input type=\"hiddel\" class=\"form-control\" -->\n\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n\n      </form>\n\n      <div class=\"alert alert-warning alert-dismissable text-center\" *ngIf=\"messages.length\">\n        <strong>Warning</strong>\n        <button class=\"btn btn-outline-info\"\n                (click)=\"clear()\">clear</button>\n        <ul>\n          <li *ngFor=\"let message of messages\"> {{message}} </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n<br><br>\n  <h3>Reviews</h3>\n<hr>\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-sm-8\">\n              <div class=\"panel panel-white post panel-shadow\" *ngFor=\"let review of reviews\">\n                  <div class=\"post-heading\">\n                      <!-- <div class=\"pull-left image\">\n                          <img src=\"http://bootdey.com/img/Content/user_1.jpg\" class=\"img-circle avatar\" alt=\"user profile image\">\n                      </div> -->\n                      <div class=\"pull-left meta\">\n                          <div class=\"title h5\">\n                              <b>{{review.title}}</b> posted by {{ review.userUsername }}\n                          </div>\n                          <h6 class=\"text-muted time\">{{ review.review_date | date : \"medium\"}}</h6>\n                      </div>\n                  </div>\n                  <div class=\"post-description\">\n                      <p>{{ review.text }}</p>\n                      <div class=\"stats\">\n\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n\n<!--\n  <div class=\"row justify-content-start\">\n    <div class=\"col-4\">\n      <ul>\n        <li *ngFor=\"let review of reviews\">\n          {{ review.title }}\n          {{ review.text }}\n        </li>\n      </ul>\n    </div>\n  </div>\n</div> -->\n"

/***/ }),

/***/ "../../../../../src/app/reviews/reviews.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__review__ = __webpack_require__("../../../../../src/app/review.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__review_service__ = __webpack_require__("../../../../../src/app/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReviewsComponent = (function () {
    function ReviewsComponent(route, reviewService, auth) {
        this.route = route;
        this.reviewService = reviewService;
        this.auth = auth;
        this.messages = [];
    }
    ReviewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) {
            var apartmentId = +params.get('id');
            _this.review = _this.newReview(apartmentId);
            return _this.reviewService.getReviews(+params.get('id'));
        }).subscribe(function (reviews) { return _this.reviews = reviews; });
    };
    ReviewsComponent.prototype.newReview = function (apartmentId) {
        var review = new __WEBPACK_IMPORTED_MODULE_4__review__["a" /* Review */]();
        review.apartment = apartmentId;
        review.user = null;
        review.title = '';
        review.text = '';
        return review;
    };
    ReviewsComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.review.title || !this.review.text) {
            this.addError("Please complete all the required fields.");
            return;
        }
        this.review.user = this.auth.user.id;
        this.reviewService.addReview(this.review)
            .subscribe(function (review) {
            _this.reviews.unshift(review);
            _this.review = _this.newReview(review.apartment);
        });
    };
    ReviewsComponent.prototype.addError = function (message) {
        this.messages.push(message);
    };
    ReviewsComponent.prototype.clear = function () {
        this.messages.length = 0;
    };
    ReviewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reviews',
            template: __webpack_require__("../../../../../src/app/reviews/reviews.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reviews/reviews.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__review_service__["a" /* ReviewService */],
            __WEBPACK_IMPORTED_MODULE_6__auth_service__["a" /* AuthService */]])
    ], ReviewsComponent);
    return ReviewsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/site-footer/site-footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/site-footer/site-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"wrapper footer\">\n    <ul>\n      <li class=\"links\">\n        <ul>\n          <li  ><a  routerLink=\"/dashboard\" href=\"#\">Home<span class=\"sr-only\">(current)</span></a></li>\n          <li  ><a  routerLink=\"/apartments\" href=\"#\">Apartments</a></li>\n          <li  ><a  routerLink=\"/upload_apartment\" href=\"#\">Upload</a></li>\n          <li  ><a  routerLink=\"/about\">About</a></li>\n        </ul>\n      </li>\n\n      <li class=\"links\">\n        <ul>\n          <li  ><a  routerLink=\"/dashboard\" href=\"#\">Home<span class=\"sr-only\">(current)</span></a></li>\n          <li  ><a  routerLink=\"/apartments\" href=\"#\">Apartments</a></li>\n          <li  ><a  routerLink=\"/upload_apartment\" href=\"#\">Upload</a></li>\n          <li  ><a  routerLink=\"/about\"></a>..</li>\n        </ul>\n      </li>\n\n      <li class=\"links\">\n        <ul>\n          <li  ><a  routerLink=\"/dashboard\" href=\"#\">Home<span class=\"sr-only\">(current)</span></a></li>\n          <li  ><a  routerLink=\"/apartments\" href=\"#\">Apartments</a></li>\n          <li  ><a  routerLink=\"/upload_apartment\" href=\"#\">..</a></li>\n          <li  ><a  routerLink=\"/about\"></a></li>\n        </ul>\n      </li>\n\n      <li class=\"about\">\n        <p>We ensure our customers satisfaction by providing superior deluxe quality apartments.</p>\n        <ul>\n          <li><a href=\"http://facebook.com/\" class=\"facebook\" target=\"_blank\"></a></li>\n          <li><a href=\"http://twitter.com/\" class=\"twitter\" target=\"_blank\"></a></li>\n          <li><a href=\"http://plus.google.com/+\" class=\"google\" target=\"_blank\"></a></li>\n          <li><a href=\"#\" class=\"skype\"></a></li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"copyrights wrapper\">\n    Copyright © 2018 Yourhome.com. All Rights Reserved.\n  </div>\n</footer><!--  end footer  -->\n"

/***/ }),

/***/ "../../../../../src/app/site-footer/site-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SiteFooterComponent = (function () {
    function SiteFooterComponent() {
    }
    SiteFooterComponent.prototype.ngOnInit = function () {
    };
    SiteFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-site-footer',
            template: __webpack_require__("../../../../../src/app/site-footer/site-footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/site-footer/site-footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SiteFooterComponent);
    return SiteFooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/token.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TokenInterceptor = (function () {
    function TokenInterceptor() {
    }
    TokenInterceptor.prototype.intercept = function (req, next) {
        var token = localStorage.getItem('yourhomefront-jwt-token');
        if (token) {
            var authReq = req.clone({
                setHeaders: {
                    Authorization: "JWT " + localStorage.getItem('yourhomefront-jwt-token')
                }
            });
            return next.handle(authReq);
        }
        else {
            return next.handle(req);
        }
    };
    TokenInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/upload-apartment/upload-apartment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/upload-apartment/upload-apartment.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!auth.isLoggedIn\">\n  <div class = \"jumbotron\">\n    <h1 class=\"display-3\"><a routerLink=\"/login\" href=\"#\">Log in</a></h1>\n    <p class=\"lead\"><a routerLink=\"/login\" href=\"#\">Please Log in to upload your own apartment</a></p>\n  </div>\n</div>\n\n\n<div class=\"container center_div\" *ngIf=\"auth.isLoggedIn\">\n  <br>\n  <h2>Upload a new Apartment</h2>\n  <hr>\n  <form class=\"form-horizontal align-center\" [formGroup]=\"form\" (ngSubmit)=\"add(apartmentTitle.value, apartmentDescription.value, apartmentCity.value, apartmentPrice.value, apartmentPhotos.value);\n  apartmentTitle.value=''; apartmentDescription.value=''; apartmentCity.value=''; apartmentPrice.value='';\" >\n\n    <div class=\"form-group\">\n        <label class=\"control-label col-sm-4\" for=\"title\"><strong>Title*</strong></label>\n        <div class=\"col-sm-6\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Apartment's Title\" id = \"title\" #apartmentTitle required formControlName=\"title\">\n          <!-- <div *ngIf=\"form.controls['apartmentTitle'].hasError('required') && apartmentTitle.touched\" class=\"alert alert-danger\">\n              <h1>please enter name</h1>\n          </div>\n          <div *ngIf=\"form.controls['apartmentTitle'].hasError('minlength')\" class=\"alert alert-danger\">\n              <h1>please enter at least 5 characters</h1>\n          </div> -->\n        </div>\n    </div>\n\n\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-4\" for=\"description\"><strong>Description*</strong></label>\n      <div class=\"col-sm-6\">\n        <textarea type=\"text\" class=\"form-control\" rows=\"5\"\n          placeholder=\"Enter a good description to attract more customers\" id =\"description\" #apartmentDescription formControlName=\"description\"></textarea>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label class=\"control-label col-sm-4\" for=\"city\"><strong>location*</strong></label>\n        <div class=\"col-sm-6\">\n          <input type=\"text\" id = \"city\" class=\"form-control\" placeholder=\"Athens Ilion\" #apartmentCity formControlName=\"city\">\n        </div>\n    </div>\n\n\n    <div class=\"form-group\">\n        <label class=\"control-label col-sm-4\" for=\"price\"><strong>Price per Month*</strong></label>\n        <div class=\"col-sm-6\">\n          <input type=\"text\" id=\"price\" class=\"form-control\" placeholder=\"Apartment's Title\" #apartmentPrice formControlName=\"price\">\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label class=\"control-label col-sm-4\" for=\"photos\" ><strong>Upload Image</strong></label>\n        <div class=\"col-sm-6\">\n          <input type=\"file\" id=\"photos\" class=\"form-control\" placeholder=\"Apartment's Title\" #apartmentPhotos (change)=\"onFileChange($event)\">\n          <button type=\"button\" class=\"btn btn-sm btn-default\" (click)=\"clearFile()\">clear file</button>\n        </div>\n    </div>\n\n\n\n    <div class=\"form-group\" >\n      <div class=\"col-sm-offset-2 col-sm-10\">\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"form.invalid || loading\">Upload</button>\n        <!-- (click)=\"add(apartmentTitle.value, apartmentDescription.value, apartmentCity.value, apartmentPrice.value, apartmentPhotos.value);\n        apartmentTitle.value=''; apartmentDescription.value=''; apartmentCity.value=''; apartmentPrice.value=''\"  -->\n      </div>\n    </div>\n\n\n\n  </form>\n\n  <div class=\"alert alert-warning alert-dismissable text-center\" *ngIf=\"messages.length\">\n    <strong>Warning</strong>\n    <button class=\"btn btn-outline-info\"\n            (click)=\"clear()\">clear</button>\n    <ul>\n      <li *ngFor=\"let message of messages\"> {{message}} </li>\n    </ul>\n    <!-- <div class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</div> -->\n  </div>\n<!-- <pre>{{form.value | json }}</pre> -->\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/upload-apartment/upload-apartment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadApartmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__apartment_service__ = __webpack_require__("../../../../../src/app/apartment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UploadApartmentComponent = (function () {
    function UploadApartmentComponent(apartmentService, router, fb, auth) {
        this.apartmentService = apartmentService;
        this.router = router;
        this.fb = fb;
        this.auth = auth;
        this.apartments = [];
        this.all_apartments = [];
        this.loading = false;
        this.messages = [];
        this.createForm();
    }
    UploadApartmentComponent.prototype.ngOnInit = function () {
        this.getApartments();
    };
    UploadApartmentComponent.prototype.getApartments = function () {
        var _this = this;
        this.apartmentService.getApartments()
            .subscribe(function (apartments) { return _this.all_apartments = apartments; });
    };
    UploadApartmentComponent.prototype.add = function (title, description, city, prices, photos) {
        var _this = this;
        var formModel = this.prepareSave();
        title = title.trim();
        description = description.trim();
        city = city.trim();
        if (!title || !description || !city || !prices) {
            this.addError("Please complete all the required fields.");
            return;
        }
        for (var _i = 0, _a = this.all_apartments; _i < _a.length; _i++) {
            var apartment = _a[_i];
            if (apartment.title == title) {
                this.addError("This title name of apartment already exists. Please choose a different one!");
                return;
            }
        }
        this.loading = true;
        var xhr = new XMLHttpRequest();
        xhr.open("post", "api/apartments", true);
        xhr.send(formModel);
        setTimeout(function () {
            // FormData cannot be inspected (see "Key difference"), hence no need to log it here
            alert('done!');
            _this.router.navigate(['/apartments']);
            _this.loading = false;
        }, 1000);
    };
    // ,  Validators.minLength(5)
    UploadApartmentComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            city: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            price: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            // user: null,
            // name: ['', Validators.required],
            photos: null
        });
    };
    UploadApartmentComponent.prototype.onFileChange = function (event) {
        if (event.target.files.length > 0) {
            // let file = event.target.files[0];
            var file = event.target.files[0];
            this.form.get('photos').setValue(file);
        }
    };
    UploadApartmentComponent.prototype.prepareSave = function () {
        this.userId = String(this.auth.user.id);
        var input = new FormData();
        // This can be done a lot prettier; for example automatically assigning values by looping through `this.form.controls`, but we'll keep it as simple as possible here
        input.append('title', this.form.get('title').value);
        input.append('description', this.form.get('description').value);
        input.append('city', this.form.get('city').value);
        input.append('price', this.form.get('price').value);
        input.append('user', this.userId);
        //
        // // input.append('name', this.form.get('name').value);
        input.append('photos', this.form.get('photos').value);
        // we can do the above as the below with less code but we need userId
        // Object.entries(this.form).forEach(([key, value]) => {
        //   if (key === 'apartmentPhotos') {
        //     input.append('apartmentPhotos', value);
        //     console.log(this.form.get(key). value.name);
        //     console.log(this.form.get(key).value.img)
        //   } else {
        //     input.append(key, value);
        //   }
        // });
        // console.log(this.form.get('apartmentPhotos').value);
        console.log("edw to input eimai egw");
        return input;
    };
    UploadApartmentComponent.prototype.clearFile = function () {
        this.form.get('photos').setValue(null);
        this.apartmentPhotos.nativeElement.value = '';
    };
    UploadApartmentComponent.prototype.addError = function (message) {
        this.messages.push(message);
    };
    UploadApartmentComponent.prototype.clear = function () {
        this.messages.length = 0;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('apartmentPhotos'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], UploadApartmentComponent.prototype, "apartmentPhotos", void 0);
    UploadApartmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-upload-apartment',
            template: __webpack_require__("../../../../../src/app/upload-apartment/upload-apartment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/upload-apartment/upload-apartment.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__apartment_service__["a" /* ApartmentService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]])
    ], UploadApartmentComponent);
    return UploadApartmentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__errorhandling_service__ = __webpack_require__("../../../../../src/app/errorhandling.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var UserService = (function () {
    function UserService(http, eh, messageService) {
        this.http = http;
        this.eh = eh;
        this.messageService = messageService;
        this.usersUrl = 'api/users';
    }
    UserService.prototype.getUsers = function () {
        var _this = this;
        return this.http.get(this.usersUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["f" /* tap */])(function (users) { return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(_this.handleError('getUsers', [])); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('getUsers', [])));
    };
    UserService.prototype.getUser = function (id) {
        var _this = this;
        var url = this.usersUrl + "/" + id;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["f" /* tap */])(function (_) { return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(_this.handleError("getUser id=" + id)); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError("getUser id=" + id)));
    };
    UserService.prototype.addUser = function (user) {
        var _this = this;
        return this.http.post(this.usersUrl, user, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["f" /* tap */])(function (user) { return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(_this.handleError('addUser')); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('addUser')));
    };
    UserService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    UserService.prototype.log = function (message) {
        this.messageService.add('BookService: ' + message);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__errorhandling_service__["a" /* ErrorHandlingService */],
            __WEBPACK_IMPORTED_MODULE_5__message_service__["a" /* MessageService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map