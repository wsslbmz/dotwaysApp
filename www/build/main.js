webpackJsonp([0],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddadressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddadressPage = (function () {
    function AddadressPage() {
        this.dispalycomponent = "addadress";
        console.log(this.displaycomponent);
    }
    AddadressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addadress',template:/*ion-inline-start:"/Users/wsslmac/Desktop/dotwaysApp/src/pages/addadress/addadress.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>Ajouter adresse</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="map-wrapper">\n        <maps #map [dispalycomponent]="dispalycomponent">\n        </maps>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/wsslmac/Desktop/dotwaysApp/src/pages/addadress/addadress.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], AddadressPage);
    return AddadressPage;
}());

//# sourceMappingURL=addadress.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validnum_validnum__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(48);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_adduser_adduser__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(39);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_adduser_adduser__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(33);
>>>>>>> 58e37fcc5e3bed8fb325afdeb742084773f0fda1
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Register2Page = (function () {
    function Register2Page(navCtrl, navparm, adduserP, auth) {
        this.navCtrl = navCtrl;
        this.navparm = navparm;
        this.adduserP = adduserP;
        this.auth = auth;
        this.date = new Date();
        this.login = this.navparm.get('login');
        this.password = this.navparm.get('password');
        this.nameUser = this.navparm.get('nameUser');
        this.surnameUser = this.navparm.get('surnameUser');
    }
    Register2Page.prototype.ionViewDidLoad = function () {
        console.log(this.nameUser, this.surnameUser, this.login, this.password);
    };
    Register2Page.prototype.add = function () {
        this.adduserP.adduser(this.login, this.password, this.nameUser, this.surnameUser, this.mobileUser, this.emailUser, this.date, this.nameUser, this.nameUser, this.date, 0, "0");
    };
    Register2Page.prototype.goToValidnum = function (params) {
        var _this = this;
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__validnum_validnum__["a" /* ValidnumPage */]);
        this.add();
        this.auth.login(this.login, this.password).map(function (res) { return res.json(); }).subscribe(function (res) {
            if (res.success) {
                _this.auth.login(_this.login, _this.password)
                    .toPromise()
                    .then(function (response) {
                    _this.auth.userData = response.json();
                });
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            }
        }, function (err) { console.log("hhhh"); });
    };
    Register2Page.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    Register2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register2',template:/*ion-inline-start:"/Users/wsslmac/Desktop/dotwaysApp/src/pages/register2/register2.html"*/'<ion-content padding id="page10">\n    <form id="register2-form4">\n        <img src="/assets/imgs/logo.png" style="display:block;width:50%;height:auto;margin-left:auto;margin-right:auto;" />\n        <div class="spacer" style="width:300px;height:10px;" id="register2-spacer9"></div>\n        <div id="register2-markdown1" class="show-list-numbers-and-dots">\n        </div>\n        <ion-list id="register2-list8">\n            <ion-item id="register2-input8">\n                <ion-label floating>\n                    Numero Telephone\n                </ion-label>\n                <ion-input [(ngModel)]="mobileUser" type="tel" name="mobileUser"></ion-input>\n            </ion-item>\n            <ion-item id="register2-input10">\n                <ion-label floating>\n                    Email\n                </ion-label>\n                <ion-input [(ngModel)]="emailUser" type="email" name="emailUser"></ion-input>\n            </ion-item>\n        </ion-list>\n        <div class="spacer" style="width:300px;height:57px;" id="register2-spacer10"></div>\n        <button id="register2-button10" ion-button color="positive" block on-click="goToValidnum()">\n      Envoyer\n    </button>\n    </form>\n</ion-content>'/*ion-inline-end:"/Users/wsslmac/Desktop/dotwaysApp/src/pages/register2/register2.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_adduser_adduser__["a" /* AdduserProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */]])
    ], Register2Page);
    return Register2Page;
}());

//# sourceMappingURL=register2.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealtimenavPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RealtimenavPage = (function () {
    function RealtimenavPage(alertCtrl, nav) {
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.dispalycomponent = "realtime";
        this.hide = true;
        this.drawerOptions = {
            handleHeight: 20,
            thresholdFromBottom: 200,
            thresholdFromTop: 200,
            bounceBack: true
        };
    }
    RealtimenavPage.prototype.hideelem = function () {
        this.hide = false;
        console.log(this.hide);
    };
    RealtimenavPage.prototype.ionViewWillEnter = function () {
        this.nav.swipeBackEnabled = false;
    };
    RealtimenavPage.prototype.ionViewDidLeave = function () {
        this.rt.unsubscribeObs();
        console.log("unsubscribe");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('realtimenav'),
        __metadata("design:type", Object)
    ], RealtimenavPage.prototype, "rt", void 0);
    RealtimenavPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-realtimenav',template:/*ion-inline-start:"/Users/wsslmac/Desktop/dotwaysApp/src/pages/realtimenav/realtimenav.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>Real Time</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="map-wrapper">\n\n        <maps #map [dispalycomponent]="dispalycomponent">\n\n        </maps>\n    </div>\n    <realtimenav #realtimenav></realtimenav>\n</ion-content>\n<content-drawer [options]="drawerOptions">\n    <div class="content">\n    </div>\n</content-drawer>'/*ion-inline-end:"/Users/wsslmac/Desktop/dotwaysApp/src/pages/realtimenav/realtimenav.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]])
    ], RealtimenavPage);
    return RealtimenavPage;
}());

//# sourceMappingURL=realtimenav.js.map

/***/ }),

/***/ 169:
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
webpackEmptyAsyncContext.id = 169;

/***/ }),

/***/ 214:
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
webpackEmptyAsyncContext.id = 214;

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsControllerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adresses_privee_adresses_privee__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__adresses_publique_adresses_publique__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__adresses_partage_adresses_partage__ = __webpack_require__(268);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsControllerPage = (function () {
    function TabsControllerPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__adresses_privee_adresses_privee__["b" /* AdressesPriveePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__adresses_publique_adresses_publique__["b" /* AdressesPubliquePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__adresses_partage_adresses_partage__["b" /* AdressesPartagePage */];
    }
    TabsControllerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs-controller',template:/*ion-inline-start:"/Users/wsslmac/Desktop/dotwaysApp/src/pages/tabs-controller/tabs-controller.html"*/'<ion-tabs id="tabsController-tabs1">\n  <ion-tab [root]="tab1Root" tabTitle=" Adresses Privee" tabIcon="star" id="tabsController-tab1"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Adresses Publique" tabIcon="flag" id="tabsController-tab2"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Adresses Partage" tabIcon="people" id="tabsController-tab3"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/wsslmac/Desktop/dotwaysApp/src/pages/tabs-controller/tabs-controller.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], TabsControllerPage);
    return TabsControllerPage;
}());

//# sourceMappingURL=tabs-controller.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdressesPriveeDetailsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AdressesPriveePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addadress_addadress__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdressesPriveeDetailsPage = (function () {
    function AdressesPriveeDetailsPage(params) {
        this.item = params.data.item;
    }
    AdressesPriveeDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\HP\Documents\GitHub\dotwaysApp\src\pages\adresses-privee\adresses-privee-details.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>\n\n      Adress privee details\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <h2>\n\n      {{item.contactAdr}}\n\n  </h2>\n\n  <h2>\n\n      {{item.labelAdr}}\n\n  </h2>\n\n  <h2>\n\n      {{item.mobileAdr}}\n\n  </h2>\n\n  <h2>\n\n      {{item.geolocAdr.lat}}<br>\n\n      {{item.geolocAdr.lng}}\n\n\n\n  </h2>\n\n  <h2>\n\n      {{item.mobileAdr}}\n\n  </h2>\n\n  <h2>\n\n      {{item.typeAdr}}\n\n  </h2>    \n\n    \n\n</ion-content>'/*ion-inline-end:"C:\Users\HP\Documents\GitHub\dotwaysApp\src\pages\adresses-privee\adresses-privee-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], AdressesPriveeDetailsPage);
    return AdressesPriveeDetailsPage;
}());

var AdressesPriveePage = (function () {
    function AdressesPriveePage(navCtrl, http, auth) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.auth = auth;
        this.url = "http://147.135.136.78:8052/adress/";
        this.typeAdr = "privee";
        this.userAdr = this.auth.userData.data[0].idUser;
        this.getMsg(this.typeAdr, this.userAdr);
    }
    AdressesPriveePage.prototype.goToAddadress = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__addadress_addadress__["a" /* AddadressPage */]);
    };
    AdressesPriveePage.prototype.getMsg = function (typeAdr, userAdr) {
        var _this = this;
        var data;
        data = this.http.get(this.url + "bytypeanduser?typeAdr=" + typeAdr + "&userAdr=" + userAdr);
        data.subscribe(function (res) {
            _this.liv = res['_body'];
            console.log("resssssssssss", res);
            var jo = JSON.parse(_this.liv);
            var obj = Array.of(jo.data);
            _this.jsonObj = obj[0];
            console.log("resssssss", _this.jsonObj);
        });
    };
    AdressesPriveePage.prototype.openAdressesPriveeDetailsPage = function (item) {
        this.navCtrl.push(AdressesPriveeDetailsPage, { item: item });
    };
    AdressesPriveePage = __decorate([
<<<<<<< HEAD
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adresses-privee',template:/*ion-inline-start:"/Users/wsslmac/Desktop/dotwaysApp/src/pages/adresses-privee/adresses-privee.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>\n            Adresses Privee\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding id="page2">\n    <ion-list id="adressesPrivee-list10">\n        <ion-item-sliding>\n            <ion-item color="none" id="adressesPrivee-list-item32">\n                <ion-thumbnail item-left>\n                    <img />\n                </ion-thumbnail>\n                <h2>\n                    Item\n                </h2>\n            </ion-item>\n            <ion-item-options side="left">\n                <button ion-button color="primary">\n                <ion-icon name="share"></ion-icon>\n              </button>\n            </ion-item-options>\n            <ion-item-options side="right">\n                <button ion-button color="danger">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n    <ion-fab right bottom>\n        <button ion-fab color="secondary" on-click="goToAddadress()"><ion-icon name="add" ></ion-icon></button>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/wsslmac/Desktop/dotwaysApp/src/pages/adresses-privee/adresses-privee.html"*/
=======
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-adresses-privee',template:/*ion-inline-start:"C:\Users\HP\Documents\GitHub\dotwaysApp\src\pages\adresses-privee\adresses-privee.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>\n\n            Adresses Privee\n\n        </ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page2">\n\n    <ion-list id="adressesPrivee-list10">\n\n        <ion-item-sliding>\n\n            <ion-item color="none" id="adressesPrivee-list-item32" *ngFor="let item of jsonObj" (click)="openAdressesPriveeDetailsPage(item)">\n\n                <ion-thumbnail item-left>\n\n                    <img />\n\n                </ion-thumbnail>\n\n                <h2>\n\n                        {{item.idAdress}}\n\n                </h2>\n\n            </ion-item>\n\n            <ion-item-options side="left">\n\n                <button ion-button color="primary">\n\n                <ion-icon name="share"></ion-icon>\n\n              </button>\n\n            </ion-item-options>\n\n            <ion-item-options side="right">\n\n                <button ion-button color="danger">\n\n                <ion-icon name="trash"></ion-icon>\n\n              </button>\n\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n    </ion-list>\n\n    <ion-fab right bottom>\n\n        <button ion-fab color="secondary" on-click="goToAddadress()"><ion-icon name="add" ></ion-icon></button>\n\n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\HP\Documents\GitHub\dotwaysApp\src\pages\adresses-privee\adresses-privee.html"*/
>>>>>>> 58e37fcc5e3bed8fb325afdeb742084773f0fda1
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]])
    ], AdressesPriveePage);
    return AdressesPriveePage;
}());

//# sourceMappingURL=adresses-privee.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdressesPubDetailsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AdressesPubliquePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addadress_addadress__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdressesPubDetailsPage = (function () {
    function AdressesPubDetailsPage(params) {
        this.item = params.data.item;
    }
    AdressesPubDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\HP\Documents\GitHub\dotwaysApp\src\pages\adresses-publique\adresses-pub-details.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>\n\n      Adress publique details\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <h2>\n\n      {{item.contactAdr}}\n\n  </h2>\n\n  <h2>\n\n      {{item.labelAdr}}\n\n  </h2>\n\n  <h2>\n\n      {{item.mobileAdr}}\n\n  </h2>\n\n  <h2>\n\n      {{item.geolocAdr.lat}}<br>\n\n      {{item.geolocAdr.lng}}\n\n\n\n  </h2>\n\n  <h2>\n\n      {{item.mobileAdr }}\n\n  </h2>\n\n  <h2>\n\n      {{item.typeAdr}}\n\n  </h2>\n\n</ion-content>'/*ion-inline-end:"C:\Users\HP\Documents\GitHub\dotwaysApp\src\pages\adresses-publique\adresses-pub-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], AdressesPubDetailsPage);
    return AdressesPubDetailsPage;
}());

var AdressesPubliquePage = (function () {
    function AdressesPubliquePage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.url = "http://147.135.136.78:8052/adress/bytype/";
        this.type = "publique";
        this.getMsg(this.type);
    }
    AdressesPubliquePage.prototype.goToAddadress = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__addadress_addadress__["a" /* AddadressPage */]);
    };
    AdressesPubliquePage.prototype.getMsg = function (type) {
        var _this = this;
        var data;
        data = this.http.get(this.url + type);
        data.subscribe(function (res) {
            _this.liv = res['_body'];
            console.log("resssssssssss", res);
            var jo = JSON.parse(_this.liv);
            var obj = Array.of(jo.data);
            _this.jsonObj = obj[0];
            console.log("resssssss", _this.jsonObj);
        });
    };
    AdressesPubliquePage.prototype.openAdressesPubDetailsPage = function (item) {
        this.navCtrl.push(AdressesPubDetailsPage, { item: item });
    };
    AdressesPubliquePage = __decorate([
<<<<<<< HEAD
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adresses-publique',template:/*ion-inline-start:"/Users/wsslmac/Desktop/dotwaysApp/src/pages/adresses-publique/adresses-publique.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>\n            Adresses Publique\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n    <ion-list id="adressesPublique-list11">\n        <ion-item color="none" id="adressesPublique-list-item33">\n            <ion-thumbnail item-left>\n                <img />\n            </ion-thumbnail>\n            <h2>\n                Item\n            </h2>\n        </ion-item>\n    </ion-list>\n    <ion-fab right bottom>\n        <button ion-fab color="secondary" on-click="goToAddadress()"><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/wsslmac/Desktop/dotwaysApp/src/pages/adresses-publique/adresses-publique.html"*/
=======
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-adresses-publique',template:/*ion-inline-start:"C:\Users\HP\Documents\GitHub\dotwaysApp\src\pages\adresses-publique\adresses-publique.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>\n\n            Adresses Publique\n\n        </ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page3">\n\n    <ion-list id="adressesPublique-list11">\n\n        <ion-item color="none" id="adressesPublique-list-item33" *ngFor="let item of jsonObj" (click)="openAdressesPubDetailsPage(item)">\n\n            <ion-thumbnail item-left>\n\n                <img />\n\n            </ion-thumbnail>\n\n            <h2>\n\n                {{item.idAdress}}\n\n            </h2>\n\n        </ion-item>\n\n    </ion-list>\n\n    <ion-fab right bottom>\n\n        <button ion-fab color="secondary" on-click="goToAddadress()"><ion-icon name="add"></ion-icon></button>\n\n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\HP\Documents\GitHub\dotwaysApp\src\pages\adresses-publique\adresses-publique.html"*/
>>>>>>> 58e37fcc5e3bed8fb325afdeb742084773f0fda1
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], AdressesPubliquePage);
    return AdressesPubliquePage;
}());

//# sourceMappingURL=adresses-publique.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdressesPartageDetailsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AdressesPartagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdressesPartageDetailsPage = (function () {
    function AdressesPartageDetailsPage(params) {
        this.item = params.data.item;
    }
    AdressesPartageDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\HP\Documents\GitHub\dotwaysApp\src\pages\adresses-partage\adresses-partage-details.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>\n\n      Adress partage details\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <h2>\n\n      {{item.contactAdr}}\n\n  </h2>\n\n  <h2>\n\n      {{item.labelAdr}}\n\n  </h2>\n\n  <h2>\n\n      {{item.typeAdr}}\n\n  </h2>\n\n  <h2>\n\n      {{item.geolocAdr.lat}}<br>\n\n      {{item.geolocAdr.lng}}\n\n\n\n  </h2>\n\n  <h2>\n\n      {{item.mobileAdr }}\n\n  </h2>\n\n</ion-content>'/*ion-inline-end:"C:\Users\HP\Documents\GitHub\dotwaysApp\src\pages\adresses-partage\adresses-partage-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */]])
    ], AdressesPartageDetailsPage);
    return AdressesPartageDetailsPage;
}());

var AdressesPartagePage = (function () {
    function AdressesPartagePage(navCtrl, http, auth) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.auth = auth;
        this.url = "http://147.135.136.78:8052/adress/bysharedto/";
        this.mobile = this.auth.userData.data[0].mobileUser;
        this.getMsg(this.mobile);
    }
    AdressesPartagePage.prototype.getMsg = function (mobile) {
        var _this = this;
        var data;
        data = this.http.get(this.url + mobile);
        data.subscribe(function (res) {
            _this.liv = res['_body'];
            console.log("resssssssssss", res);
            var jo = JSON.parse(_this.liv);
            var obj = Array.of(jo.data);
            _this.jsonObj = obj[0];
            console.log("resssssss", _this.jsonObj);
        });
    };
    AdressesPartagePage.prototype.openAdressesPartageDetailsPage = function (item) {
        this.navCtrl.push(AdressesPartageDetailsPage, { item: item });
    };
    AdressesPartagePage = __decorate([
<<<<<<< HEAD
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adresses-partage',template:/*ion-inline-start:"/Users/wsslmac/Desktop/dotwaysApp/src/pages/adresses-partage/adresses-partage.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>\n            Adresses Partage\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n    <ion-list id="adressesPartage-list12">\n        <ion-item-sliding>\n            <ion-item color="none" id="adressesPartage-list-item34">\n                <ion-thumbnail item-left>\n                    <img />\n                </ion-thumbnail>\n                <h2>\n                    Item\n                </h2>\n            </ion-item>\n            <ion-item-options side="left">\n                <button ion-button color="primary">\n                    <ion-icon name="share"></ion-icon>\n                  </button>\n            </ion-item-options>\n            <ion-item-options side="right">\n                <button ion-button color="danger">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/wsslmac/Desktop/dotwaysApp/src/pages/adresses-partage/adresses-partage.html"*/
=======
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-adresses-partage',template:/*ion-inline-start:"C:\Users\HP\Documents\GitHub\dotwaysApp\src\pages\adresses-partage\adresses-partage.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>\n\n            Adresses Partage\n\n        </ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page4">\n\n    <ion-list id="adressesPartage-list12">\n\n        <ion-item-sliding>\n\n            <ion-item color="none" id="adressesPartage-list-item34" *ngFor="let item of jsonObj" (click)="openAdressesPartageDetailsPage(item)" >\n\n                <ion-thumbnail item-left>\n\n                    <img />\n\n                </ion-thumbnail>\n\n                <h2>\n\n                    {{item.idAdress}}\n\n                </h2>\n\n            </ion-item>\n\n            <ion-item-options side="left">\n\n                <button ion-button color="primary">\n\n                    <ion-icon name="share"></ion-icon>\n\n                  </button>\n\n            </ion-item-options>\n\n            <ion-item-options side="right">\n\n                <button ion-button color="danger">\n\n                    <ion-icon name="trash"></ion-icon>\n\n                  </button>\n\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\HP\Documents\GitHub\dotwaysApp\src\pages\adresses-partage\adresses-partage.html"*/
>>>>>>> 58e37fcc5e3bed8fb325afdeb742084773f0fda1
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__["a" /* AuthProvider */]])
    ], AdressesPartagePage);
    return AdressesPartagePage;
}());

//# sourceMappingURL=adresses-partage.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(26);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(39);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(33);
>>>>>>> 58e37fcc5e3bed8fb325afdeb742084773f0fda1
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register2_register2__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__validnum_validnum__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var LoginPage = (function () {
    function LoginPage(navCtrl, gp, fb, navParams, loadingCtrl, auth) {
        this.navCtrl = navCtrl;
        this.gp = gp;
        this.fb = fb;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.auth = auth;
        this.isUserLoggedIn = false;
        this.userInfo = {};
        this.userForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            loginCtl: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].minLength(3)]),
            passwordCtl: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].minLength(3)])
        });
    }
    LoginPage.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.goToRegister = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.goToRegister2 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__register2_register2__["a" /* Register2Page */]);
    };
    LoginPage.prototype.goToValidnum = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__validnum_validnum__["a" /* ValidnumPage */]);
    };
    LoginPage.prototype.authlogin = function () {
        var _this = this;
        this.showLoader();
        this.auth.login(this.login, this.password).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.loading.dismiss();
            if (res.success) {
                _this.auth.login(_this.login, _this.password)
                    .toPromise()
                    .then(function (response) {
                    _this.auth.userData = response.json();
                    console.log('API Response : ', response.json());
                    console.log('API Response2 : ', response);
                });
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
            }
        }, function (err) {
            _this.loading.dismiss();
        });
    };
    LoginPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    LoginPage.prototype.loginGP = function () {
        var _this = this;
        this.gp.login().then(function (res) {
            console.log(res);
            _this.userInfo = res;
            _this.isUserLoggedIn = true;
        }).catch(function (err) { return console.error(err); });
    };
    LoginPage.prototype.logoutGP = function () {
        var _this = this;
        this.gp.logout().then(function () {
            _this.isUserLoggedIn = false;
        });
    };
    LoginPage.prototype.loginFB = function () {
        var _this = this;
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) {
            if (res.status === "connected") {
                _this.isUserLoggedIn = true;
                _this.getUserDetail(res.authResponse.userID);
            }
            else {
                _this.isUserLoggedIn = false;
            }
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    LoginPage.prototype.logoutFB = function () {
        var _this = this;
        this.fb.logout()
            .then(function (res) { return _this.isUserLoggedIn = false; })
            .catch(function (e) { return console.log('Error logout from Facebook', e); });
    };
    LoginPage.prototype.getUserDetail = function (userid) {
        var _this = this;
        this.fb.api("/" + userid + "/?fields=id,email,name,picture,gender", ["public_profile"])
            .then(function (res) {
            console.log(res);
            _this.users = res;
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/wsslmac/Desktop/dotwaysApp/src/pages/login/login.html"*/'<ion-content padding id="page5">\n    <form id="login-form1" [formGroup]="userForm">\n        <img src="/assets/imgs/logo.png" style="display:block;width:50%;height:auto;margin-left:auto;margin-right:auto;" />\n        <div class="spacer" style="width:300px;height:10px;" id="login-spacer4"></div>\n        <ion-list>\n\n            <ion-item>\n                <ion-label floating>login</ion-label>\n                <ion-input formControlName="loginCtl" [(ngModel)]="login" name="login" type="text"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>Password</ion-label>\n                <ion-input formControlName="passwordCtl" [(ngModel)]="password" name="pasword" type="password"></ion-input>\n            </ion-item>\n        </ion-list>\n        <div class="spacer" style="width:300px;height:10px;" id="login-spacer3"></div>\n        <button id="login-button1" ion-button color="positive" block on-click="authlogin()">\n      Se connecter\n    </button>\n        <div class="spacer" style="width:300px;height:10px;" id="login-spacer4"></div>\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <ion-buttons start>\n                        <button id="login-button3" ion-button color="fb" icon-left block on-click="loginFB()">\n      <ion-icon name="logo-facebook"></ion-icon>\n       Facebook\n    </button>\n                    </ion-buttons>\n\n                </ion-col>\n                <ion-col>\n                    <ion-buttons end>\n                        <button id="login-button4" ion-button color="danger" icon-left block on-click="loginGP()">\n      <ion-icon name="logo-googleplus"></ion-icon>\n        Google+\n    </button>\n                    </ion-buttons>\n\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n\n        <button id="login-button2" ion-button clear color="positive" block on-click="goToRegister()">\n      Cree un compte\n    </button>\n    </form>\n</ion-content>'/*ion-inline-end:"/Users/wsslmac/Desktop/dotwaysApp/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register2_register2__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validnum_validnum__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterPage = (function () {
    function RegisterPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RegisterPage.prototype.goToRegister2 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register2_register2__["a" /* Register2Page */], { login: this.login,
            password: this.password,
            nameUser: this.nameUser,
            surnameUser: this.surnameUser });
    };
    RegisterPage.prototype.goToValidnum = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__validnum_validnum__["a" /* ValidnumPage */]);
    };
    RegisterPage.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/wsslmac/Desktop/dotwaysApp/src/pages/register/register.html"*/'<ion-content padding id="page6">\n    <form id="register-form2">\n        <img src="/assets/imgs/logo.png" style="display:block;width:50%;height:auto;margin-left:auto;margin-right:auto;" />\n        <div class="spacer" style="width:300px;height:10px;" id="register-spacer5"></div>\n        <ion-list id="register-list14">\n            <ion-item id="register-input3">\n                <ion-label floating>\n                    Nom\n                </ion-label>\n                <ion-input [(ngModel)]="nameUser" name="nameUser" type="text"></ion-input>\n            </ion-item>\n            <ion-item id="register-input6">\n                <ion-label floating>\n                    Prenom\n                </ion-label>\n                <ion-input [(ngModel)]="surnameUser" name="surnameUser" type="text"></ion-input>\n            </ion-item>\n            <ion-item id="register-input5">\n                <ion-label floating>\n                    login\n                </ion-label>\n                <ion-input [(ngModel)]="login" name="login" type="text"></ion-input>\n            </ion-item>\n            <ion-item id="register-input4">\n                <ion-label floating>\n                    Mot de passe\n                </ion-label>\n                <ion-input [(ngModel)]="password" name="password" type="password"></ion-input>\n            </ion-item>\n        </ion-list>\n        <div class="spacer" style="width:300px;height:10px;" id="register-spacer6"></div>\n        <button id="register-button5" ion-button color="positive" block on-click="goToRegister2()">\n      Continuer\n    </button>\n        <button id="register-button8" ion-button clear color="positive" block href-inappbrowser="/signup"></button>\n    </form>\n</ion-content>'/*ion-inline-end:"/Users/wsslmac/Desktop/dotwaysApp/src/pages/register/register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TakephotoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TakephotoPage = (function () {
    function TakephotoPage(navCtrl, transfer, camera, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.transfer = transfer;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    TakephotoPage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.CAMERA
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageURI = imageData;
        }, function (err) {
            console.log(err);
            _this.presentToast(err);
        });
    };
    TakephotoPage.prototype.uploadFile = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Uploading..."
        });
        loader.present();
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: 'ionicfile',
            fileName: 'ionicfile',
            chunkedMode: false,
            mimeType: "image/jpeg",
            httpMethod: "POST",
            headers: {}
        };
        fileTransfer.upload(this.imageURI, 'http://147.135.136.78:8052/user/upload', options)
            .then(function (data) {
            console.log(data + " Uploaded Successfully");
            loader.dismiss();
            _this.presentToast("Image uploaded successfully");
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }, function (err) {
            console.log(err);
            loader.dismiss();
            _this.presentToast(err);
        });
    };
    TakephotoPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 6000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    TakephotoPage.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    TakephotoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-takephoto',template:/*ion-inline-start:"/Users/wsslmac/Desktop/dotwaysApp/src/pages/takephoto/takephoto.html"*/'<ion-content id="page10">\n    <form id="takephoto-form4">\n        <div class="spacer" style="width:320px;height:71px;" id="takephoto-spacer4"></div>\n        <img src="{{imageFileName}}" *ngIf="imageFileName" alt="profile image" width="300" name="img" />\n        <!-- <button ion-button color="secondary" (click)="getImage()">photo</button> -->\n        <img src="/assets/imgs/logo.png" style="display:block;width:50%;height:auto;margin-left:auto;margin-right:auto;" (click)="getImage()" />\n\n        <div class="spacer" style="width:320px;height:47px;" id="takephoto-spacer5"></div>\n        <button id="takephoto-button7" ion-button color="energized" block (click)="uploadFile()">\n      Continuer\n    </button>\n        <button id="takephoto-button8" ion-button color="stable" block style="color:#FFAB00;" on-click="goToHome()">\n      passer\n    </button>\n    </form>\n</ion-content>'/*ion-inline-end:"/Users/wsslmac/Desktop/dotwaysApp/src/pages/takephoto/takephoto.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], TakephotoPage);
    return TakephotoPage;
}());

//# sourceMappingURL=takephoto.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdduserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
>>>>>>> 58e37fcc5e3bed8fb325afdeb742084773f0fda1
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdduserProvider = (function () {
    function AdduserProvider(http) {
        this.http = http;
        this.url = 'http://147.135.136.78:8052/user/add';
    }
    AdduserProvider.prototype.adduser = function (login, password, nameUser, surnameUser, mobileUser, emailUser, updateday, createdby, updateby, createdday, nbrateUser, rateUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var userdata = {
            nameUser: nameUser,
            login: login,
            password: password,
            mobileUser: mobileUser,
            surnameUser: surnameUser,
            emailUser: emailUser
        };
        this.http.post(this.url, userdata, options).subscribe(function (data) {
            console.log(data['_body']);
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    AdduserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AdduserProvider);
    return AdduserProvider;
}());

//# sourceMappingURL=adduser.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(40);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(33);
>>>>>>> 58e37fcc5e3bed8fb325afdeb742084773f0fda1
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfilePage = (function () {
    function ProfilePage(navCtrl, userdata, alertCtrl, http) {
        this.navCtrl = navCtrl;
        this.userdata = userdata;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.date = new Date;
        this.url = 'http://147.135.136.78:8052/user/update/';
        this.getUser();
        this.hide = false;
    }
    ProfilePage.prototype.getUser = function () {
        console.log('ressss:  ', this.userdata.userData.data[0].nameUser);
        this.id = this.userdata.userData.data[0].idUser;
        this.nom = this.userdata.userData.data[0].nameUser;
        this.prenom = this.userdata.userData.data[0].surnameUser;
        this.login = this.userdata.userData.data[0].login;
        this.motpasse = this.userdata.userData.data[0].password;
        this.rate = this.userdata.userData.data[0].rateUser;
        this.email = this.userdata.userData.data[0].login;
        this.image = this.userdata.userData.data[0].imgUser;
        this.mobile = this.userdata.userData.data[0].mobileUser;
    };
    ProfilePage.prototype.hideElem = function () {
        this.hide = true;
        console.log("jjjjjjjj");
        console.log(this.newEmail, this.newName, this.newSurname, this.newLogin);
        this.checkProfile();
    };
    ProfilePage.prototype.saveModifiation = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Sure !',
            message: 'tu es sure de faire les modification ?',
            buttons: [
                {
                    text: 'annuler',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.hide = false;
                    }
                },
                {
                    text: 'Oui',
                    handler: function () {
                        console.log('accept clicked');
                        _this.updateProfile("aa", "aa", "aa", "aa", _this.date, "aa");
                        _this.hide = false;
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.updateProfile = function (login, nameUser, surnameUser, emailUser, updateday, updateby) {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var userdata = {
            nameUser: nameUser,
            login: login,
            surnameUser: surnameUser,
            emailUser: emailUser,
            updateday: updateday,
            updateby: updateby
        };
        this.http.post(this.url + this.id, userdata, options).subscribe(function (data) {
            console.log(data['_body']);
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    ProfilePage.prototype.checkProfile = function () {
        if (!this.newName || !this.newSurname || !this.newLogin || !this.newEmail) {
            console.log("false from check");
            return false;
        }
        else {
            console.log("true from check");
            return true;
        }
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/wsslmac/Desktop/dotwaysApp/src/pages/profile/profile.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>\n            Profile\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only *ngIf="hide == false" (click)="hideElem()"><ion-icon name="brush"  ></ion-icon></button>\n        </ion-buttons>\n        <ion-buttons end>\n            <button ion-button icon-only *ngIf="hide == true" (click)="saveModifiation()"><ion-icon name="checkbox"></ion-icon></button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding id="page8">\n    <img src="/assets/imgs/person-icon.png" style="display:block;width:50%;height:auto;margin-left:auto;margin-right:auto;" />\n    <ion-list *ngIf="hide == false" id="profile-list6">\n        <ion-item color="none" id="profile-list-item14">\n            <ion-icon name="person" item-left></ion-icon>\n            {{nom}} {{prenom}}\n        </ion-item>\n        <ion-item color="none" id="profile-list-item15">\n            <ion-icon name="finger-print" item-left></ion-icon>\n            {{login}}\n        </ion-item>\n        <ion-item color="none" id="profile-list-item18">\n            <ion-icon name="call" item-left></ion-icon>\n            {{mobile}}\n        </ion-item>\n        <ion-item color="none" id="profile-list-item18">\n            <ion-icon name="mail" item-left></ion-icon>\n            {{email}}\n        </ion-item>\n        <ion-item color="none" id="profile-list-item16">\n            <ion-icon name="key" item-left></ion-icon>\n            ********* <button ion-button end><ion-icon name="lock"  isActive="true"></ion-icon></button>\n        </ion-item>\n        <ion-item color="none" id="profile-list-item17">\n            <ion-icon name="star" item-left></ion-icon>\n            Rate {{rate}}\n        </ion-item>\n    </ion-list>\n    <ion-list *ngIf="hide == true" id="profile-list-input">\n        <ion-item color="none" id="profile-list-input-1">\n            <ion-icon name="person" item-left></ion-icon>\n            <input type="text" [(ngModel)]="newName" placeholder="{{nom}}">\n        </ion-item>\n        <ion-item color="none" id="profile-list-input-5">\n            <ion-icon name="person" item-left></ion-icon>\n            <input type="text" [(ngModel)]="newSurname" placeholder="{{prenom}}">\n        </ion-item>\n        <ion-item color="none" id="profile-list-input-2">\n            <ion-icon name="finger-print" item-left></ion-icon>\n            <input type="text" [(ngModel)]="newLogin" placeholder="{{login}}">\n        </ion-item>\n        <ion-item color="none" id="profile-list-input-3">\n            <ion-icon name="mail" item-left></ion-icon>\n            <input type="text" [(ngModel)]="newEmail" placeholder="{{email}}">\n        </ion-item>\n        <ion-item color="none" id="profile-list-input-4">\n            <ion-icon name="key" item-left></ion-icon>\n            ********* <button ion-button end><ion-icon name="lock" isActive="true"></ion-icon></button>\n        </ion-item>\n        <ion-item color="none" id="profile-list-input-5">\n            <ion-icon name="star" item-left></ion-icon>\n            Rate {{rate}}\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/wsslmac/Desktop/dotwaysApp/src/pages/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _d || Object])
    ], ProfilePage);
    return ProfilePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

<<<<<<< HEAD
/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoriquePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(39);
=======
/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthProvider = (function () {
    function AuthProvider(http) {
        this.http = http;
        this.url = 'http://147.135.136.78:8052/user/';
    }
    AuthProvider.prototype.login = function (login, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('cache-control', 'no-cache');
        return this.http.post(this.url + 'signin?login=' + login + '&password=' + password, { headers: headers });
        /*JSON.stringify(credentials), {headers: headers});*/
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverDetailsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HistoriqueDetailsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return HistoriquePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(33);
>>>>>>> 58e37fcc5e3bed8fb325afdeb742084773f0fda1
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DriverDetailsPage = (function () {
    function DriverDetailsPage(params) {
        this.item1 = params.data.item;
    }
    DriverDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\HP\Documents\GitHub\dotwaysApp\src\pages\historique\driver-details.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>\n\n          driver details\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content>\n\n      driver details\n\n  </ion-content>'/*ion-inline-end:"C:\Users\HP\Documents\GitHub\dotwaysApp\src\pages\historique\driver-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */]])
    ], DriverDetailsPage);
    return DriverDetailsPage;
}());

var HistoriqueDetailsPage = (function () {
    function HistoriqueDetailsPage(params) {
        this.item = params.data.item;
    }
    HistoriqueDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\HP\Documents\GitHub\dotwaysApp\src\pages\historique\historique-details.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>\n\n        HistoriqueDetails    \n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content>\n\n        <h2>\n\n              id=  {{item.idDelivery}}\n\n            </h2>\n\n            <h2>\n\n               cout= {{item.costDelivery}}\n\n            </h2>\n\n            <h2>\n\n                Destination:<br>\n\n               lat= {{item.destDelivery.lat}}<br>\n\n               lng= {{item.destDelivery.lng}}\n\n            </h2>\n\n            <h2>\n\n                source: <br>\n\n               lat= {{item.sourceDelivery.lat}}<br>\n\n                lng={{item.sourceDelivery.lng}}\n\n            </h2>\n\n            <h2>\n\n               timing= {{item.timingDelivery}}\n\n            </h2>\n\n            <h2>\n\n              sizrpackage:  {{item.packageDelivery.sizePackage}}<br>\n\n                type package:{{item.packageDelivery.typePackage}}<br>\n\n               valeurpackage: {{item.packageDelivery.valPackage}}<br>\n\n               weight package: {{item.packageDelivery.weightPackage}}\n\n\n\n            </h2>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\HP\Documents\GitHub\dotwaysApp\src\pages\historique\historique-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */]])
    ], HistoriqueDetailsPage);
    return HistoriqueDetailsPage;
}());

var HistoriquePage = (function () {
    function HistoriquePage(navCtrl, auth, http) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.http = http;
        this.url = "http://147.135.136.78:8052/delivery/iduser/";
        this.id = this.auth.userData.data[0].idUser;
<<<<<<< HEAD
        this.getMsg(this.id);
=======
        this.url1 = "http://147.135.136.78:8052/trip/iduser/";
        this.getMsg(this.id);
        this.getTrip(this.id);
>>>>>>> 58e37fcc5e3bed8fb325afdeb742084773f0fda1
    }
    HistoriquePage.prototype.getMsg = function (id) {
        var _this = this;
        var datad;
        datad = this.http.get(this.url + id);
        datad.subscribe(function (res) {
            _this.liv = res['_body'];
            console.log("resssssssssss", res);
            var jo = JSON.parse(_this.liv);
<<<<<<< HEAD
            var obj = Array.of(jo.Data);
            _this.jsonObj = obj[0];
            console.log("resssssss", _this.jsonObj);
        });
    };
    HistoriquePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-historique',template:/*ion-inline-start:"/Users/wsslmac/Desktop/dotwaysApp/src/pages/historique/historique.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>\n            Historique\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding id="page11">\n    <ion-list id="historique-list10">\n        <ion-item-sliding>\n            <ion-item color="none" id="historique-list-item32" *ngFor="let item of jsonObj">\n                <ion-thumbnail item-left   >\n                    <img />\n                </ion-thumbnail>\n                <h2>\n                    {{item.idDelivery}}\n                </h2>\n                <h2>\n                    {{item.costDelivery}}\n                </h2>\n                <h2>\n                    {{item.destDelivery.lat}}\n                    {{item.destDelivery.lng}}\n                </h2>\n                <h2>\n                    {{item.sourceDelivery.lat}}\n                    {{item.sourceDelivery.lng}}\n                </h2>\n                <h2>\n                    {{item.timingDelivery}}\n                </h2>\n                <h2>\n                    {{item.packageDelivery}}\n                </h2>\n            </ion-item>\n            <ion-item-options side="left">\n                <button ion-button color="primary">\n            <ion-icon name="share"></ion-icon>\n          </button>\n            </ion-item-options>\n            <ion-item-options side="right">\n                <button ion-button color="danger">\n            <ion-icon name="trash"></ion-icon>\n          </button>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/wsslmac/Desktop/dotwaysApp/src/pages/historique/historique.html"*/
=======
            var obj = Array.of(jo.data);
            _this.jsonObj = obj[0];
            console.log("resssssss", _this.jsonObj);
        });
    };
    HistoriquePage.prototype.getTrip = function (id) {
        var _this = this;
        var data;
        data = this.http.get(this.url1 + id);
        data.subscribe(function (res) {
            _this.trip = res['_body'];
            console.log("-------->", res);
            var jo = JSON.parse(_this.trip);
            var obj = Array.of(jo.data);
            _this.jsonObj1 = obj[0];
            console.log("--------->", _this.jsonObj1);
        });
    };
    HistoriquePage.prototype.openHisDetailsPage = function (item) {
        this.navCtrl.push(HistoriqueDetailsPage, { item: item });
    };
    HistoriquePage.prototype.openDriverDetailsPage = function (item1) {
        this.navCtrl.push(DriverDetailsPage, { item: item1 });
    };
    HistoriquePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-historique',template:/*ion-inline-start:"C:\Users\HP\Documents\GitHub\dotwaysApp\src\pages\historique\historique.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>\n\n            Historique\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page11">\n\n    <ion-list id="historique-list10">\n\n        <ion-item-sliding>\n\n            <ion-item color="none" id="historique-list-item32" *ngFor="let item of jsonObj" (click)="openHisDetailsPage(item)" >\n\n                <ion-thumbnail item-left   >\n\n                    <img />\n\n                </ion-thumbnail>\n\n                <h2>\n\n                    {{item.idDelivery}}\n\n                </h2>\n\n            </ion-item>\n\n            <ion-item color="none" id="historique-list-item32" *ngFor="let item1 of jsonObj1" (click)="openDriverDetailsPage(item1)" >\n\n                    <ion-thumbnail item-left   >\n\n                        <img />\n\n                    </ion-thumbnail>\n\n                    <h2>\n\n                        {{item1.mobileAdr}}\n\n                    </h2>\n\n                </ion-item>\n\n            <ion-item-options side="left">\n\n                <button ion-button color="primary">\n\n            <ion-icon name="share"></ion-icon>\n\n          </button>\n\n            </ion-item-options>\n\n            <ion-item-options side="right">\n\n                <button ion-button color="danger">\n\n            <ion-icon name="trash"></ion-icon>\n\n          </button>\n\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\HP\Documents\GitHub\dotwaysApp\src\pages\historique\historique.html"*/
>>>>>>> 58e37fcc5e3bed8fb325afdeb742084773f0fda1
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], HistoriquePage);
    return HistoriquePage;
}());

//# sourceMappingURL=historique.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorbeillePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__realtimenav_realtimenav__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CorbeillePage = (function () {
    function CorbeillePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.hide = true;
    }
    CorbeillePage.prototype.hideelem = function () {
        this.hide = false;
        console.log(this.hide);
    };
    CorbeillePage.prototype.goToRealTime = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__realtimenav_realtimenav__["a" /* RealtimenavPage */]);
    };
    CorbeillePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-corbeille',template:/*ion-inline-start:"/Users/wsslmac/Desktop/dotwaysApp/src/pages/corbeille/corbeille.html"*/'<ion-header>\n    <ion-navbar hideWhen="hide">\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>\n            Corbeille\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding id="page12">\n    <button ion-button block (click)="goToRealTime()">mappppppp</button>\n</ion-content>'/*ion-inline-end:"/Users/wsslmac/Desktop/dotwaysApp/src/pages/corbeille/corbeille.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], CorbeillePage);
    return CorbeillePage;
}());

//# sourceMappingURL=corbeille.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationPage = (function () {
    function NotificationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"/Users/wsslmac/Desktop/dotwaysApp/src/pages/notification/notification.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Notification\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page14">\n  <form id="notification-form6">\n    <ion-item id="notification-toggle2">\n      <ion-label>\n        Toggle\n      </ion-label>\n      <ion-toggle color="positive" checked="false"></ion-toggle>\n    </ion-item>\n    <ion-item id="notification-range2">\n      <ion-range min="0" max="100" step="1" color="positive" value="50">\n        <ion-label range-left>\n          Range\n        </ion-label>\n      </ion-range>\n    </ion-item>\n    <ion-item id="notification-radio2">\n      <ion-label>\n        Radio\n      </ion-label>\n      <ion-radio></ion-radio>\n    </ion-item>\n    <ion-item id="notification-checkbox2">\n      <ion-label>\n        Checkbox\n      </ion-label>\n      <ion-checkbox></ion-checkbox>\n    </ion-item>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/wsslmac/Desktop/dotwaysApp/src/pages/notification/notification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigurationPage = (function () {
    function ConfigurationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ConfigurationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-configuration',template:/*ion-inline-start:"/Users/wsslmac/Desktop/dotwaysApp/src/pages/configuration/configuration.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Configuration\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page13">\n  <form id="configuration-form5">\n    <ion-item id="configuration-toggle1">\n      <ion-label>\n        Toggle\n      </ion-label>\n      <ion-toggle color="positive" checked="false"></ion-toggle>\n    </ion-item>\n    <ion-item id="configuration-range1">\n      <ion-range min="0" max="100" step="1" color="positive" value="50">\n        <ion-label range-left>\n          Range\n        </ion-label>\n      </ion-range>\n    </ion-item>\n    <ion-item id="configuration-radio1">\n      <ion-label>\n        Radio\n      </ion-label>\n      <ion-radio></ion-radio>\n    </ion-item>\n    <ion-item id="configuration-checkbox1">\n      <ion-label>\n        Checkbox\n      </ion-label>\n      <ion-checkbox></ion-checkbox>\n    </ion-item>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/wsslmac/Desktop/dotwaysApp/src/pages/configuration/configuration.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ConfigurationPage);
    return ConfigurationPage;
}());

//# sourceMappingURL=configuration.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDeliveryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
>>>>>>> 58e37fcc5e3bed8fb325afdeb742084773f0fda1
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddDeliveryProvider = (function () {
    function AddDeliveryProvider(http) {
        this.http = http;
        this.url = 'http://147.135.136.78:8052/delivery/add';
    }
    AddDeliveryProvider.prototype.adddelivery = function (latsrc, lngsrc, updateday, createdby, updateby, createdday, latdes, lngdes, timingDelivery, costDelivery, typePackage, valPackage, weightPackage, sizePackage) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var deliverydata = {
            sourceDelivery: {
                lat: latsrc,
                lang: lngsrc
            },
            updateday: updateday,
            createdby: createdby,
            updateby: updateby,
            createdday: createdday,
            destDelivery: {
                lat: latdes,
                lang: lngdes
            },
            timingDelivery: timingDelivery,
            costDelivery: costDelivery,
            packageDelivery: {
                typePackage: typePackage,
                valPackage: valPackage,
                weightPackage: weightPackage,
                sizePackage: sizePackage
            }
        };
        this.http.post(this.url, deliverydata, options).subscribe(function (data) {
            console.log(data['_body']);
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    AddDeliveryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AddDeliveryProvider);
    return AddDeliveryProvider;
}());

//# sourceMappingURL=add-delivery.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAdressProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
>>>>>>> 58e37fcc5e3bed8fb325afdeb742084773f0fda1
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddAdressProvider = (function () {
    function AddAdressProvider(http) {
        this.http = http;
        this.url = 'http://147.135.136.78:8052/adress/add';
    }
    AddAdressProvider.prototype.addadress = function (latpos, lngpos, updateday, createdby, updateby, createdday, labelAdr, contactAdr, mobileAdr, typeAdr, sharedtoAdr, userAdr) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var adressdata = {
            geolocAdr: {
                lat: latpos,
                lang: lngpos
            },
            updateday: updateday,
            createdby: createdby,
            updateby: updateby,
            createdday: createdday,
            contactAdr: contactAdr,
            labelAdr: labelAdr,
            mobileAdr: mobileAdr,
            typeAdr: typeAdr,
            sharedtoAdr: [sharedtoAdr],
            userAdr: userAdr
        };
        this.http.post(this.url, adressdata, options).subscribe(function (data) {
            console.log(data['_body']);
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    AddAdressProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AddAdressProvider);
    return AddAdressProvider;
}());

//# sourceMappingURL=add-address.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(377);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_local_notifications__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_maps_maps__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_adresses_privee_adresses_privee__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_adresses_publique_adresses_publique__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_adresses_partage_adresses_partage__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tabs_controller_tabs_controller__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_register_register__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_validnum_validnum__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_register2_register2__ = __webpack_require__(141);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_takephoto_takephoto__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_profile_profile__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_historique_historique__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_corbeille_corbeille__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_notification_notification__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_configuration_configuration__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_storage__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_content_drawer_content_drawer__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_auth_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_adduser_adduser__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_sendpackage_sendpackage__ = __webpack_require__(705);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_takephoto_takephoto__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_profile_profile__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_historique_historique__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_corbeille_corbeille__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_notification_notification__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_configuration_configuration__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_storage__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_content_drawer_content_drawer__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_auth_auth__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_adduser_adduser__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_sendpackage_sendpackage__ = __webpack_require__(704);
>>>>>>> 58e37fcc5e3bed8fb325afdeb742084773f0fda1
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_add_delivery_add_delivery__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_addadress_addadress__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_addadress_addadress__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_realtimenav_realtimenav__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_add_address_add_address__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_get_hisotique_get_hisotique__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_realtimenav_realtimenav__ = __webpack_require__(708);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_adresses_privee_adresses_privee__["b" /* AdressesPriveePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_adresses_publique_adresses_publique__["b" /* AdressesPubliquePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_adresses_partage_adresses_partage__["b" /* AdressesPartagePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_validnum_validnum__["a" /* ValidnumPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_register2_register2__["a" /* Register2Page */],
                __WEBPACK_IMPORTED_MODULE_22__pages_takephoto_takephoto__["a" /* TakephotoPage */],
                __WEBPACK_IMPORTED_MODULE_12__components_maps_maps__["a" /* MapsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_historique_historique__["c" /* HistoriquePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_corbeille_corbeille__["a" /* CorbeillePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_configuration_configuration__["a" /* ConfigurationPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_addadress_addadress__["a" /* AddadressPage */],
                __WEBPACK_IMPORTED_MODULE_29__components_content_drawer_content_drawer__["a" /* ContentDrawer */],
                __WEBPACK_IMPORTED_MODULE_33__components_sendpackage_sendpackage__["a" /* SendpackageComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_addadress_addadress__["a" /* AddadressComponent */],
                __WEBPACK_IMPORTED_MODULE_37__pages_realtimenav_realtimenav__["a" /* RealtimenavPage */],
                __WEBPACK_IMPORTED_MODULE_40__components_realtimenav_realtimenav__["a" /* RealtimenavComponent */],
                __WEBPACK_IMPORTED_MODULE_24__pages_historique_historique__["b" /* HistoriqueDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_historique_historique__["a" /* DriverDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_adresses_publique_adresses_publique__["a" /* AdressesPubDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_adresses_privee_adresses_privee__["a" /* AdressesPriveeDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_adresses_partage_adresses_partage__["a" /* AdressesPartageDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_30__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_28__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_adresses_privee_adresses_privee__["b" /* AdressesPriveePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_adresses_publique_adresses_publique__["b" /* AdressesPubliquePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_adresses_partage_adresses_partage__["b" /* AdressesPartagePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_validnum_validnum__["a" /* ValidnumPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_register2_register2__["a" /* Register2Page */],
                __WEBPACK_IMPORTED_MODULE_22__pages_takephoto_takephoto__["a" /* TakephotoPage */],
                __WEBPACK_IMPORTED_MODULE_12__components_maps_maps__["a" /* MapsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_historique_historique__["c" /* HistoriquePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_corbeille_corbeille__["a" /* CorbeillePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_configuration_configuration__["a" /* ConfigurationPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_addadress_addadress__["a" /* AddadressPage */],
                __WEBPACK_IMPORTED_MODULE_36__components_addadress_addadress__["a" /* AddadressComponent */],
                __WEBPACK_IMPORTED_MODULE_37__pages_realtimenav_realtimenav__["a" /* RealtimenavPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_historique_historique__["b" /* HistoriqueDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_historique_historique__["a" /* DriverDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_adresses_publique_adresses_publique__["a" /* AdressesPubDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_adresses_privee_adresses_privee__["a" /* AdressesPriveeDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_adresses_partage_adresses_partage__["a" /* AdressesPartageDetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_31__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_adduser_adduser__["a" /* AdduserProvider */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_34__providers_add_delivery_add_delivery__["a" /* AddDeliveryProvider */],
                __WEBPACK_IMPORTED_MODULE_38__providers_add_address_add_address__["a" /* AddAdressProvider */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_39__providers_get_hisotique_get_hisotique__["a" /* GetHisotiqueProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthProvider = (function () {
    function AuthProvider(http) {
        this.http = http;
        this.url = 'http://147.135.136.78:8052/user/';
    }
    AuthProvider.prototype.login = function (login, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('cache-control', 'no-cache');
        return this.http.post(this.url + 'signin?login=' + login + '&password=' + password, { headers: headers });
        /*JSON.stringify(credentials), {headers: headers});*/
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_controller_tabs_controller__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_historique_historique__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_corbeille_corbeille__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_notification_notification__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_configuration_configuration__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_local_notifications__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_realtimenav_realtimenav__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, notif) {
        var _this = this;
        this.notif = notif;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.noticationShow();
        });
    }
    MyApp.prototype.goToAdresses = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */]);
    };
    MyApp.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.goToHistorique = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_historique_historique__["c" /* HistoriquePage */]);
    };
    MyApp.prototype.goToCorbeille = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_corbeille_corbeille__["a" /* CorbeillePage */]);
    };
    MyApp.prototype.goToNotification = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_notification_notification__["a" /* NotificationPage */]);
    };
    MyApp.prototype.goToConfiguration = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_configuration_configuration__["a" /* ConfigurationPage */]);
    };
    MyApp.prototype.goToProfile = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */]);
    };
    MyApp.prototype.goToRealTime = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_realtimenav_realtimenav__["a" /* RealtimenavPage */]);
    };
    MyApp.prototype.noticationShow = function () {
        this.notif.schedule({
            id: 1,
            title: 'hi there',
            text: 'welcome',
            trigger: { at: new Date(new Date().getTime() + 5 * 1000) },
            icon: '../assets/imgs/logo.png'
        });
        console.log("notification show after 5 sec");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/wsslmac/Desktop/dotwaysApp/src/app/app.html"*/'<ion-menu [content]="mainContent">\n    <ion-content id="side-menu21" style="background-color:#F6F6F6;">\n        <div class="spacer" style="width:268px;height:36px;" id="menu-spacer1"></div>\n        <ion-list id="menu-list6">\n            <ion-item color="none" menuClose="" on-click="goToProfile()" id="menu-list-item16">\n                <ion-avatar item-left>\n                    <img />\n                </ion-avatar>\n                <h2>\n                    User\n                </h2>\n            </ion-item>\n            <ion-item color="none" menuClose="" on-click="goToHome()" id="menu-list-item17">\n                <ion-icon name="home" item-left></ion-icon>\n                Acceuil\n                <ion-icon name="arrow-forward" item-right></ion-icon>\n            </ion-item>\n            <ion-item color="none" menuClose="" on-click="goToHistorique()" id="menu-list-item19">\n                <ion-icon name="archive" item-left></ion-icon>\n                Historique\n                <ion-icon name="arrow-forward" item-right></ion-icon>\n            </ion-item>\n            <ion-item color="none" menuClose="" on-click="goToAdresses()" id="menu-list-item18">\n                <ion-icon name="locate" item-left></ion-icon>\n                Mes Adresses\n                <ion-icon name="arrow-forward" item-right></ion-icon>\n            </ion-item>\n            <ion-item color="none" menuClose="" on-click="goToCorbeille()" id="menu-list-item22">\n                <ion-icon name="trash" item-left></ion-icon>\n                Corbeille\n                <ion-icon name="arrow-forward" item-right></ion-icon>\n            </ion-item>\n            <ion-item color="none" menuClose="" on-click="goToRealTime()" id="menu-list-item33">\n                <ion-icon name="compass" item-left></ion-icon>\n                Real time\n                <ion-icon name="arrow-forward" item-right></ion-icon>\n            </ion-item>\n        </ion-list>\n        <div class="spacer" style="width:268px;height:23px;" id="menu-spacer2"></div>\n        <ion-list id="menu-list7">\n            <ion-item color="none" menuClose="" on-click="goToNotification()" id="menu-list-item23">\n                <ion-icon name="notifications" item-left></ion-icon>\n                Notification\n                <ion-icon name="arrow-forward" item-right></ion-icon>\n            </ion-item>\n            <ion-item color="none" menuClose="" on-click="goToConfiguration()" id="menu-list-item24">\n                <ion-icon name="settings" item-left></ion-icon>\n                Configuration\n                <ion-icon name="arrow-forward" item-right></ion-icon>\n            </ion-item>\n        </ion-list>\n        <div class="spacer" style="width:268px;height:23px;" id="menu-spacer13"></div>\n        <ion-list id="menu-list22">\n            <ion-item color="assertive" id="menu-list-item64" on-click="goTotuto()">\n                <ion-icon name="log-out" item-left></ion-icon>\n                Deconexion\n            </ion-item>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/wsslmac/Desktop/dotwaysApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_local_notifications__["a" /* LocalNotifications */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(alertCtrl, nav) {
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.dispalycomponent = "sendpackage";
        this.hide = true;
        this.drawerOptions = {
            handleHeight: 20,
            thresholdFromBottom: 200,
            thresholdFromTop: 200,
            bounceBack: true
        };
    }
    HomePage.prototype.hideelem = function () {
        this.hide = false;
        console.log(this.hide);
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.nav.swipeBackEnabled = false;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/wsslmac/Desktop/dotwaysApp/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            DDW\n        </ion-title>\n        <ion-buttons end>\n            <button (click)="map.centerLocation()">\n        <ion-icon  name="navigate"></ion-icon>\n      </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <div class="map-wrapper">\n        <maps #map [dispalycomponent]="dispalycomponent">\n        </maps>\n        <!-- <div *ngIf="hide" class="center imgcenter">\n            <img (click)="hideelem()" src="/assets/imgs/sendpackage.png" />\n        </div> -->\n        <!-- <sendpackage [mapstop]="mapstop" *ngIf="!hide">\n            <div class="content"></div>\n        </sendpackage> -->\n    </div>\n    <!-- <div class="bottom request-controls">\n        <ion-row>\n            <ion-col>\n                <button [hidden]="isPickupRequested" ion-button primary>Envoyer un colis</button>\n                <button [hidden]="!isPickupRequested" ion-button primary>Cancel Pickup</button>\n            </ion-col>\n        </ion-row>\n        <div class="spacer" style="width:300px;height:30px;" id="spacer"></div>\n        <!-- <ion-row>\n            <ion-col>\n                PICKUP TIME IS APPROXIMATELY {{timeTillArrival}} MN\n            </ion-col>\n        </ion-row> \n    </div> -->\n</ion-content>\n<content-drawer [options]="drawerOptions">\n    <div class="content">\n    </div>\n</content-drawer>'/*ion-inline-end:"/Users/wsslmac/Desktop/dotwaysApp/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapsComponent = (function () {
    function MapsComponent(geolocation, loadingCtrl) {
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        console.log('Hello MapsComponent Component');
        this.hide = true;
    }
    MapsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.map = this.createMap();
        this.addMapEventListeners();
        this.getCurrentLocation().subscribe(function (location) {
            _this.map.setCenter(location);
        });
        console.log(this.dispalycomponent);
    };
    MapsComponent.prototype.addMapEventListeners = function () {
        var _this = this;
        google.maps.event.addListener(this.map, 'dragstart', function () {
            _this.mapstop = false;
        });
        google.maps.event.addListener(this.map, 'dblclick', function () {
            _this.mapstop = false;
        });
        google.maps.event.addListener(this.map, 'zoom_changed', function () {
            _this.mapstop = false;
        });
        google.maps.event.addListener(this.map, 'idle', function () {
            _this.mapstop = true;
        });
    };
    MapsComponent.prototype.getCurrentLocation = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Locating...'
        });
        loading.present();
        var options = { timeout: 4000, enableHighAccuracy: true };
        var locationObs = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observable) {
            _this.geolocation.getCurrentPosition(options)
                .then(function (resp) {
                var lat = resp.coords.latitude;
                var lng = resp.coords.longitude;
                console.log('lat ' + lat + ' == ' + 'long ' + lng);
                var location = new google.maps.LatLng(lat, lng);
                console.log('current location ' + location);
                observable.next(location);
                loading.dismiss();
            }, function (err) {
                console.log('Geolocation err: ' + err);
                loading.dismiss();
            });
        });
        return locationObs;
    };
    MapsComponent.prototype.createMap = function (location) {
        if (location === void 0) { location = new google.maps.LatLng(40.712784, -74.005942); }
        console.log('init location ' + location);
        var mapOptions = {
            center: location,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true
        };
        var mapEl = document.getElementById("map");
        var map = new google.maps.Map(mapEl, mapOptions);
        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function () {
            searchBox.setBounds(map.getBounds());
        });
        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function () {
            var places = searchBox.getPlaces();
            if (places.length == 0) {
                return;
            }
            // Clear out the old markers.
            markers.forEach(function (marker) {
                marker.setMap(null);
            });
            markers = [];
            // For each place, get the icon, name and location.
            var bounds = new google.maps.LatLngBounds();
            places.forEach(function (place) {
                if (!place.geometry) {
                    console.log("Returned place contains no geometry");
                    return;
                }
                // Create a marker for each place.
                markers.push(new google.maps.Marker({
                    map: map,
                    icon: '/',
                    title: place.name,
                    position: place.geometry.location
                }));
                if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                }
                else {
                    bounds.extend(place.geometry.location);
                }
            });
            map.fitBounds(bounds);
        });
        return map;
    };
    MapsComponent.prototype.centerLocation = function (location) {
        var _this = this;
        if (location) {
            this.map.setCenter(location);
        }
        else {
            this.getCurrentLocation().subscribe(function (currentLocation) {
                _this.map.setCenter(currentLocation);
            });
        }
    };
    MapsComponent.prototype.hideelem = function () {
        this.hide = false;
        console.log(this.hide);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MapsComponent.prototype, "dispalycomponent", void 0);
    MapsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'maps',template:/*ion-inline-start:"/Users/wsslmac/Desktop/dotwaysApp/src/components/maps/maps.html"*/'<!-- Generated template for the MapComponent component -->\n<div class="wrapper">\n    <input id="pac-input" class="controls" type="text" placeholder="Chercher une place">\n    <div id="map"></div>\n    <div *ngIf="hide && dispalycomponent == \'sendpackage\'" class="center imgcenter">\n        <img (click)="hideelem()" src="/assets/imgs/sendpackage.png" />\n    </div>\n\n    <sendpackage [map]="map" [mapstop]="mapstop" *ngIf="!hide && dispalycomponent == \'sendpackage\'">\n        <div class="content"></div>\n    </sendpackage>\n    <addadress [map]="map" [mapstop]="mapstop" *ngIf="dispalycomponent == \'addadress\'">\n        <div class="content"></div>\n    </addadress>\n    <realtimenav [map]="map" [mapstop]="mapstop" *ngIf="dispalycomponent == \'realtime\'">\n        <div class="content"></div>\n    </realtimenav>\n\n    <!-- <sendpackage [map]="map"> </sendpackage> -->\n    <!-- <pickup [map]="map" [isPinSet]="isMapIdle" [isPickupRequested]="isPickupRequested" [destination]="destination" (updatedPickupLocation)="updatePickupLocation($event)">\n    </pickup>\n\n    <available-cars [map]="map" [isPickupRequested]="isPickupRequested">\n    </available-cars>\n\n    <pickup-car [map]="map" [isPickupRequested]="isPickupRequested" [pickupLocation]="currentLocation" [destination]="destination">\n    </pickup-car> -->\n</div>'/*ion-inline-end:"/Users/wsslmac/Desktop/dotwaysApp/src/components/maps/maps.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], MapsComponent);
    return MapsComponent;
}());

//# sourceMappingURL=maps.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentDrawer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContentDrawer = (function () {
    function ContentDrawer(element, renderer, domCtrl, platform, navCtrl, navParams) {
        this.element = element;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.handleHeight = 10;
        this.bounceBack = true;
        this.thresholdTop = 200;
        this.thresholdBottom = 200;
        this.spacer = 400;
    }
    ContentDrawer.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.options.handleHeight) {
            this.handleHeight = this.options.handleHeight;
        }
        if (this.options.bounceBack) {
            this.bounceBack = this.options.bounceBack;
        }
        if (this.options.thresholdFromBottom) {
            this.thresholdBottom = this.options.thresholdFromBottom;
        }
        if (this.options.thresholdFromTop) {
            this.thresholdTop = this.options.thresholdFromTop;
        }
        this.renderer.setElementStyle(this.element.nativeElement, 'top', this.platform.height() - this.handleHeight + 'px');
        this.renderer.setElementStyle(this.element.nativeElement, 'padding-top', this.handleHeight + 'px');
        var hammer = new window['Hammer'](this.element.nativeElement);
        hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_VERTICAL });
        hammer.on('pan', function (ev) {
            _this.handlePan(ev);
        });
    };
    ContentDrawer.prototype.handlePan = function (ev) {
        var _this = this;
        var newTop = ev.center.y;
        var bounceToBottom = false;
        var bounceToTop = false;
        if (this.bounceBack && ev.isFinal) {
            var topDiff = newTop - this.thresholdTop;
            var bottomDiff = (this.platform.height() - this.thresholdBottom) - newTop;
            topDiff >= bottomDiff ? bounceToBottom = true : bounceToTop = true;
        }
        if ((newTop < this.thresholdTop && ev.additionalEvent === "panup") || bounceToTop) {
            this.domCtrl.write(function () {
                _this.renderer.setElementStyle(_this.element.nativeElement, 'transition', 'top 0.5s');
                _this.renderer.setElementStyle(_this.element.nativeElement, 'top', '50%');
            });
        }
        else if (((this.platform.height() - newTop) < this.thresholdBottom && ev.additionalEvent === "pandown") || bounceToBottom) {
            this.domCtrl.write(function () {
                _this.renderer.setElementStyle(_this.element.nativeElement, 'transition', 'top 0.5s');
                _this.renderer.setElementStyle(_this.element.nativeElement, 'top', _this.platform.height() - _this.handleHeight + 'px');
            });
        }
        else {
            this.renderer.setElementStyle(this.element.nativeElement, 'transition', 'none');
            if (newTop > 0 && newTop < (this.platform.height() - this.handleHeight)) {
                if (ev.additionalEvent === "panup" || ev.additionalEvent === "pandown") {
                    this.domCtrl.write(function () {
                        _this.renderer.setElementStyle(_this.element.nativeElement, 'top', newTop + 'px');
                    });
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('options'),
        __metadata("design:type", Object)
    ], ContentDrawer.prototype, "options", void 0);
    ContentDrawer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'content-drawer',template:/*ion-inline-start:"/Users/wsslmac/Desktop/dotwaysApp/src/components/content-drawer/content-drawer.html"*/'<ion-header>\n    <ion-icon name="arrow-dropup-circle" id="icondrawer"></ion-icon>\n</ion-header>\n<ion-content>\n    <ng-content></ng-content>\n</ion-content>'/*ion-inline-end:"/Users/wsslmac/Desktop/dotwaysApp/src/components/content-drawer/content-drawer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* DomController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ContentDrawer);
    return ContentDrawer;
}());

//# sourceMappingURL=content-drawer.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendpackageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_add_delivery_add_delivery__ = __webpack_require__(369);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(39);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(33);
>>>>>>> 58e37fcc5e3bed8fb325afdeb742084773f0fda1
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SendpackageComponent = (function () {
    function SendpackageComponent(alertCtrl, adddeliveryP, auth) {
        this.alertCtrl = alertCtrl;
        this.adddeliveryP = adddeliveryP;
        this.auth = auth;
        this.srcPosition = new google.maps.LatLng();
        this.destPosition = new google.maps.LatLng();
        this.date = new Date();
        console.log('Hello SendpackageComponent Component');
        this.hide1 = false;
        this.hide2 = true;
        this.hide3 = false;
        this.index = -1;
        this.steps();
    }
    SendpackageComponent.prototype.ngOnChanges = function (changes) {
        console.log(this.mapstop);
        if (!this.mapstop) {
            this.hideMarker();
        }
        else {
            this.showMarker();
        }
    };
    SendpackageComponent.prototype.addDelivery = function () {
        this.typePack = "telephone";
        console.log(this.typePack);
        this.timePack = "immeidat";
        console.log(this.timePack);
        this.valPack = 10.1;
        console.log(this.valPack);
        console.log(this.date);
        this.adddeliveryP.adddelivery((this.srcPosition.lat()).toString(), (this.srcPosition.lng()).toString(), this.date, this.auth.userData.data[0].idUser, this.auth.userData.data[0].idUser, this.date, (this.destPosition.lat()).toString(), (this.destPosition.lng()).toString(), this.timePack, this.pricePack, this.typePack, this.valPack, this.wieghtPack, this.sizePack);
    };
    SendpackageComponent.prototype.prevStep = function () {
        this.index--;
        this.steps();
    };
    SendpackageComponent.prototype.nextStep = function () {
        this.index++;
        this.steps();
    };
    SendpackageComponent.prototype.steps = function () {
        console.log(this.index);
        switch (this.index) {
            case 0:
                this.sourcePlace();
                break;
            case 1:
                this.destinationPlace();
                break;
            case 2:
                this.sizePackage();
                break;
            case 3:
                this.wieghtPackage();
                break;
            case 4:
                this.contactInfo();
                break;
            case 5:
                this.priceTrip();
                break;
        }
    };
    SendpackageComponent.prototype.sourcePlace = function () {
        this.hidemarker2();
        this.srcPosition = this.markerLocation();
        this.Alert1();
    };
    SendpackageComponent.prototype.destinationPlace = function () {
        this.hidemarker1();
        this.destPosition = this.markerLocation();
        this.Alert2();
    };
    SendpackageComponent.prototype.sizePackage = function () {
        this.hidemarker2();
        this.hidemarker1();
        this.sizeAlert();
    };
    SendpackageComponent.prototype.wieghtPackage = function () {
        this.hidemarker2();
        this.hidemarker1();
        this.wieghtAlert();
    };
    SendpackageComponent.prototype.contactInfo = function () {
        this.hidemarker2();
        this.hidemarker1();
        this.contactAlert();
    };
    SendpackageComponent.prototype.priceTrip = function () {
        this.hidemarker2();
        this.hidemarker1();
        this.priceAlert();
    };
    SendpackageComponent.prototype.showMarker = function () {
        var _this = this;
        this.Marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.BOUNCE,
            position: this.map.getCenter(),
            icon: 'assets/imgs/bg_pin.png'
        });
        setTimeout(function () {
            _this.Marker.setAnimation(null);
        }, 750);
        // let markerlocation = new google.maps.LatLng();
        // markerlocation = this.Marker.getPosition();
        // console.log(markerlocation.lat());
        // console.log(markerlocation.lng());
        this.markerLocation();
    };
    SendpackageComponent.prototype.markerLocation = function () {
        var markerlocation = new google.maps.LatLng();
        markerlocation = this.Marker.getPosition();
        console.log(markerlocation.lat());
        console.log(markerlocation.lng());
        return (markerlocation);
    };
    SendpackageComponent.prototype.hideMarker = function () {
        if (this.Marker) {
            this.Marker.setMap(null);
        }
    };
    SendpackageComponent.prototype.hidemarker1 = function () {
        this.hide2 = false;
        console.log(this.hide2);
    };
    SendpackageComponent.prototype.hidemarker2 = function () {
        this.hide3 = false;
        console.log(this.hide3);
    };
    SendpackageComponent.prototype.Alert1 = function () {
        var alert = this.alertCtrl.create({
            title: 'Choisir le depart de ton colis',
            subTitle: 'glisser le map pour choisir la postion',
            buttons: ['Ok']
        });
        alert.present();
    };
    SendpackageComponent.prototype.Alert2 = function () {
        var alert = this.alertCtrl.create({
            title: 'Choisir la destination de ton colis',
            subTitle: 'glisser le map pour choisir la postion',
            buttons: ['Ok']
        });
        alert.present();
    };
    SendpackageComponent.prototype.sizeAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Taille de colis',
            message: 'a peut pret quelle est le categorie',
            inputs: [
                {
                    label: 'taille1',
                    type: 'radio',
                    checked: true,
                    value: '1'
                },
                {
                    label: 'taille2',
                    type: 'radio',
                    value: '2'
                },
                {
                    label: 'taille3',
                    type: 'radio',
                    value: '3'
                },
                {
                    label: 'taille4',
                    type: 'radio',
                    value: '4'
                },
            ],
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.prevStep();
                    }
                },
                {
                    text: 'Suivant',
                    handler: function (data) {
                        console.log(data);
                        _this.sizePack = parseInt(data);
                        console.log(_this.sizePack);
                        _this.nextStep();
                    }
                }
            ]
        });
        alert.present();
    };
    SendpackageComponent.prototype.wieghtAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Poids de colis',
            message: 'a peut pret quelle est le categorie',
            inputs: [
                {
                    label: 'poids1',
                    type: 'radio',
                    checked: true,
                    value: '1'
                },
                {
                    label: 'poids2',
                    type: 'radio',
                    value: '2'
                },
                {
                    label: 'poids3',
                    type: 'radio',
                    value: '3'
                },
                {
                    label: 'poids4',
                    type: 'radio',
                    value: '4'
                },
            ],
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.prevStep();
                    }
                },
                {
                    text: 'Suivant',
                    handler: function (data) {
                        console.log(data);
                        _this.wieghtPack = parseInt(data);
                        console.log(_this.wieghtPack);
                        _this.nextStep();
                    }
                }
            ]
        });
        alert.present();
    };
    SendpackageComponent.prototype.contactAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Contact',
            message: 'veuillez saisir les info de destinataire',
            inputs: [
                {
                    name: 'Nom',
                    placeholder: 'Nom '
                },
                {
                    name: 'Numero',
                    placeholder: 'numero de telephone',
                    type: 'tel'
                }
            ],
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.prevStep();
                    }
                },
                {
                    text: 'Suivant',
                    handler: function (data) {
                        console.log(data.Nom);
                        console.log(data.Numero);
                        _this.contactName = data.Nom;
                        _this.contactNum = data.Numero;
                        _this.nextStep();
                    }
                }
            ]
        });
        alert.present();
    };
    SendpackageComponent.prototype.priceAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Prix du Livraison',
            message: '10.000 Dt',
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.prevStep();
                    }
                },
                {
                    text: 'OK',
                    handler: function () {
                        console.log('ok clicked');
                        _this.nextStep();
                        _this.pricePack = 10;
                        console.log(_this.pricePack);
                        _this.addDelivery();
                    }
                }
            ]
        });
        alert.present();
    };
    SendpackageComponent.prototype.calculeDistance = function () {
        var service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix({
            origins: [this.srcPosition],
            destinations: [this.destPosition],
            travelMode: 'DRIVING',
            avoidHighways: false,
            avoidTolls: false,
        }, callback);
        function callback(response, status) {
            console.log(response.rows[0].elements[0].distance.text);
            console.log(response.rows[0].elements[0].duration.text);
            return (response.rows[0].elements[0].distance.val);
        }
    };
    SendpackageComponent.prototype.calculePrice = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SendpackageComponent.prototype, "mapstop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SendpackageComponent.prototype, "map", void 0);
    SendpackageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sendpackage',template:/*ion-inline-start:"/Users/wsslmac/Desktop/dotwaysApp/src/components/sendpackage/sendpackage.html"*/'<!-- Generated template for the SendpackageComponent component -->\n<div id="locator1" *ngIf="index == 0"></div>\n<div id="locator2" *ngIf="index == 1"></div>\n<ion-fab class="buttonfab" bottom right>\n    <button ion-fab (click)="nextStep()" *ngIf=" index < 6"><ion-icon name="arrow-forward"></ion-icon></button>\n</ion-fab>\n<ion-fab class="buttonfab" bottom left>\n    <button ion-fab (click)="prevStep()" *ngIf="index > 0 && index < 6"><ion-icon name="arrow-back"></ion-icon></button>\n</ion-fab>'/*ion-inline-end:"/Users/wsslmac/Desktop/dotwaysApp/src/components/sendpackage/sendpackage.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_add_delivery_add_delivery__["a" /* AddDeliveryProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
    ], SendpackageComponent);
    return SendpackageComponent;
}());

//# sourceMappingURL=sendpackage.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddadressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_add_address_add_address__ = __webpack_require__(370);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(39);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(33);
>>>>>>> 58e37fcc5e3bed8fb325afdeb742084773f0fda1
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




__WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */];
var AddadressComponent = (function () {
    function AddadressComponent(alertCtrl, addadressP, auth) {
        this.alertCtrl = alertCtrl;
        this.addadressP = addadressP;
        this.auth = auth;
        this.adrPosition = new google.maps.LatLng();
        this.date = new Date();
        console.log('Hello AddadressComponent Component');
        this.Alert1();
        this.index = 0;
    }
    AddadressComponent.prototype.ngOnChanges = function (changes) {
        console.log(this.mapstop);
        if (!this.mapstop) {
            this.hideMarker();
        }
        else {
            this.showMarker();
        }
    };
    AddadressComponent.prototype.showMarker = function () {
        var _this = this;
        this.Marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.BOUNCE,
            position: this.map.getCenter(),
            icon: 'assets/imgs/bg_pin.png'
        });
        setTimeout(function () {
            _this.Marker.setAnimation(null);
        }, 750);
        // let markerlocation = new google.maps.LatLng();
        // markerlocation = this.Marker.getPosition();
        // console.log(markerlocation.lat());
        // console.log(markerlocation.lng());
        this.markerLocation();
    };
    AddadressComponent.prototype.markerLocation = function () {
        var markerlocation = new google.maps.LatLng();
        markerlocation = this.Marker.getPosition();
        console.log((markerlocation.lat()).toString());
        console.log(markerlocation.lng());
        console.log(markerlocation);
        this.adrPosition = markerlocation;
        console.log((this.adrPosition.lat()).toString());
        console.log((this.adrPosition.lng()).toString());
        return (markerlocation);
    };
    AddadressComponent.prototype.hideMarker = function () {
        if (this.Marker) {
            this.Marker.setMap(null);
        }
    };
    AddadressComponent.prototype.prevStep = function () {
        this.index--;
        this.steps();
    };
    AddadressComponent.prototype.nextStep = function () {
        this.index++;
        this.steps();
    };
    AddadressComponent.prototype.steps = function () {
        console.log(this.index);
        switch (this.index) {
            case 0:
                this.setPostion();
                break;
            case 1:
                this.setContact();
                break;
            case 2:
                this.setTypeadr();
                break;
            case 3:
                this.sharedTo();
                break;
            case 4:
                break;
        }
    };
    AddadressComponent.prototype.setPostion = function () {
        this.markerLocation();
    };
    AddadressComponent.prototype.setContact = function () {
        this.contactAlert();
    };
    AddadressComponent.prototype.setTypeadr = function () {
        this.typeadrAlert();
    };
    AddadressComponent.prototype.sharedTo = function () {
        this.sharedtoAlert();
    };
    AddadressComponent.prototype.Alert1 = function () {
        var alert = this.alertCtrl.create({
            title: 'Choisir la postion ',
            subTitle: 'glisser le map pour choisir la postion',
            buttons: ['Ok']
        });
        alert.present();
    };
    AddadressComponent.prototype.contactAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Contact',
            message: 'veuillez saisir les info de destinataire',
            inputs: [
                {
                    name: 'Label',
                    placeholder: 'Label '
                },
                {
                    name: 'Nom',
                    placeholder: 'Nom '
                },
                {
                    name: 'Numero',
                    placeholder: 'numero de telephone',
                    type: 'tel'
                }
            ],
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.prevStep();
                    }
                },
                {
                    text: 'Suivant',
                    handler: function (data) {
                        console.log(data.Nom);
                        console.log(data.Numero);
                        _this.contactName = data.Nom;
                        _this.contactNum = parseInt(data.Numero);
                        _this.contactLabel = data.Label;
                        console.log(_this.contactNum);
                        _this.nextStep();
                    }
                }
            ]
        });
        alert.present();
    };
    AddadressComponent.prototype.typeadrAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Type address',
            message: 'publique ou privee',
            inputs: [
                {
                    label: 'Privee',
                    type: 'radio',
                    checked: true,
                    value: 'privee'
                },
                {
                    label: 'Publique',
                    type: 'radio',
                    value: 'publique'
                },
            ],
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.prevStep();
                    }
                },
                {
                    text: 'Suivant',
                    handler: function (data) {
                        console.log(data);
                        _this.typeadr = data;
                        _this.nextStep();
                    }
                }
            ]
        });
        alert.present();
    };
    AddadressComponent.prototype.sharedtoAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Partager',
            message: 'veuillez saisir un numero',
            inputs: [
                {
                    name: 'Numero',
                    placeholder: 'numero de telephone',
                    type: 'tel'
                }
            ],
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.prevStep();
                    }
                },
                {
                    text: 'Suivant',
                    handler: function (data) {
                        console.log(data.Numero);
                        _this.sharedtoNum = data.Numero;
                        _this.nextStep();
                        _this.addAdress();
                    }
                }
            ]
        });
        alert.present();
    };
    AddadressComponent.prototype.addAdress = function () {
        this.addadressP.addadress((this.adrPosition.lat()).toString(), (this.adrPosition.lng()).toString(), this.date, this.auth.userData.data[0].idUser, this.auth.userData.data[0].idUser, this.date, this.contactLabel, this.contactName, this.contactNum, this.typeadr, this.sharedtoNum, this.auth.userData.data[0].nameUser + " " + this.auth.userData.data[0].surnameUser);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], AddadressComponent.prototype, "mapstop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AddadressComponent.prototype, "map", void 0);
    AddadressComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'addadress',template:/*ion-inline-start:"/Users/wsslmac/Desktop/dotwaysApp/src/components/addadress/addadress.html"*/'<!-- Generated template for the AddadressComponent component -->\n<div>\n    <div id="locator1"></div>\n    <ion-fab class="buttonfab" bottom right>\n        <button ion-fab (click)="nextStep()"><ion-icon name="arrow-forward"></ion-icon></button>\n    </ion-fab>\n</div>'/*ion-inline-end:"/Users/wsslmac/Desktop/dotwaysApp/src/components/addadress/addadress.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_add_address_add_address__["a" /* AddAdressProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
    ], AddadressComponent);
    return AddadressComponent;
}());

//# sourceMappingURL=addadress.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetHisotiqueProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
>>>>>>> 58e37fcc5e3bed8fb325afdeb742084773f0fda1
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GetHisotiqueProvider = (function () {
    function GetHisotiqueProvider(http) {
        this.http = http;
        this.url = "http://147.135.136.78:8052/delivery/all";
        console.log('Hello MsgreqProvider Provider');
    }
    GetHisotiqueProvider.prototype.getMsg = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url)
                .subscribe(function (data) {
                _this.liv = JSON.parse(data['_body']).results;
                resolve(_this.liv);
            });
        });
    };
    GetHisotiqueProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], GetHisotiqueProvider);
    return GetHisotiqueProvider;
}());

//# sourceMappingURL=get-hisotique.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealtimenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_marker_animate_unobtrusive__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_marker_animate_unobtrusive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_marker_animate_unobtrusive__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RealtimenavComponent = (function () {
    function RealtimenavComponent(navCtrl, auth, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.url = "http://147.135.136.78:8052/driver/one/";
        this.id = this.auth.userData.data[0].idUser;
        this.location = new google.maps.LatLng(50.712784, -4.005942);
        this.location2 = new google.maps.LatLng(50.512184, -4.5059420000000046);
        // private popup ;
        this.adrPosition = new google.maps.LatLng();
        this.obsTime = 5000;
        console.log('Hello RealtimenavComponent Component');
        this.obs = true;
    }
    RealtimenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.obs == true) {
            var timer = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].timer(3000, this.obsTime);
            this.subcriber = timer.subscribe(function () {
                _this.removeCar();
                //this.removeDirections();
                _this.getDriver("5ae342cbe497062f61b0475c"); //idDriver
                _this.showMarkerUser(_this.location); //source loction or user loCATION 
                _this.showMarkerCar(_this.locationd); //lastposDriver
                _this.showDirections(_this.location, _this.locationd); //source loction or user loCATION 
            });
        }
    };
    RealtimenavComponent.prototype.unsubscribeObs = function () {
        this.obs = false;
        //this.obsTime=50000;
        this.subcriber.unsubscribe();
        console.log("yyyyyyyyyyyyyyyyyyy");
    };
    RealtimenavComponent.prototype.getDriver = function (id) {
        var _this = this;
        var datad;
        datad = this.http.get(this.url + id);
        datad.subscribe(function (res) {
            _this.liv = res['_body'];
            console.log("resssssssssss", res);
            var jo = JSON.parse(_this.liv);
            var obj = Array.of(jo.data);
            _this.jsonObj = obj[0];
            console.log("resssssss", parseFloat(_this.jsonObj.lastposDriver.lng));
            _this.locationd = new google.maps.LatLng(parseFloat(_this.jsonObj.lastposDriver.lat), parseFloat(_this.jsonObj.lastposDriver.lng));
        });
        //this.showMarker();
    };
    // ngOnChanges(changes){
    //   console.log(this.mapstop);
    //   if(!this.mapstop){
    //     this.hideMarker();
    //   }
    //   else{
    //     this.showMarker();
    //     this.unsubscribeObs();
    //       }
    // }
    RealtimenavComponent.prototype.showMarkerUser = function (loc) {
        var _this = this;
        this.Marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.BOUNCE,
            position: loc,
            icon: 'assets/imgs/dest_pin.png'
        });
        setTimeout(function () {
            _this.Marker.setAnimation(null);
        }, 750);
        // let markerlocation = new google.maps.LatLng();
        // markerlocation = this.Marker.getPosition();
        // console.log(markerlocation.lat());
        // console.log(markerlocation.lng());
        this.markerLocation();
    };
    RealtimenavComponent.prototype.markerLocation = function () {
        var markerlocation = new google.maps.LatLng();
        markerlocation = this.Marker.getPosition();
        console.log((markerlocation.lat()).toString());
        console.log(markerlocation.lng());
        console.log(markerlocation);
        this.adrPosition = markerlocation;
        console.log((this.adrPosition.lat()).toString());
        console.log((this.adrPosition.lng()).toString());
        return (markerlocation);
    };
    RealtimenavComponent.prototype.hideMarker = function () {
        if (this.Marker) {
            this.Marker.setMap(null);
        }
    };
    //gggggggggggggg
    RealtimenavComponent.prototype.showMarkerCar = function (loc) {
        this.pickupCarMarker = new __WEBPACK_IMPORTED_MODULE_6_marker_animate_unobtrusive__({
            map: this.map,
            position: loc,
            icon: 'assets/imgs/taxi.png'
        });
        this.pickupCarMarker.setDuration(1000);
        this.pickupCarMarker.setEasing('linear');
    };
    RealtimenavComponent.prototype.removeCar = function () {
        if (this.pickupCarMarker) {
            this.pickupCarMarker.setMap(null);
            this.pickupCarMarker = null;
        }
    };
    // showDirections(loc){
    //   this.polylinePath = new google.maps.Polyline({
    //     path: loc,  // user locAtion
    //     strokeColor: '#1E7Fff',
    //     strokeWeight : 7
    //   })
    //   this.polylinePath.setMap(this.map);
    // }
    RealtimenavComponent.prototype.showDirections = function (loc1, loc2) {
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        directionsService.route({
            origin: loc1,
            destination: loc2,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
        directionsDisplay.setMap(this.map);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], RealtimenavComponent.prototype, "mapstop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], RealtimenavComponent.prototype, "map", void 0);
    RealtimenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'realtimenav',template:/*ion-inline-start:"/Users/wsslmac/Desktop/dotwaysApp/src/components/realtimenav/realtimenav.html"*/'<!-- <div id="locator1"></div> -->\n<!-- <ion-fab class="buttonfab" bottom left>\n    <button ion-fab><ion-icon name="arrow-back"></ion-icon></button>\n</ion-fab> -->'/*ion-inline-end:"/Users/wsslmac/Desktop/dotwaysApp/src/components/realtimenav/realtimenav.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */]])
    ], RealtimenavComponent);
    return RealtimenavComponent;
}());

//# sourceMappingURL=realtimenav.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidnumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__takephoto_takephoto__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ValidnumPage = (function () {
    function ValidnumPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ValidnumPage.prototype.goToSetpic = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__takephoto_takephoto__["a" /* TakephotoPage */]);
    };
    ValidnumPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-validnum',template:/*ion-inline-start:"/Users/wsslmac/Desktop/dotwaysApp/src/pages/validnum/validnum.html"*/'<ion-content padding id="page7">\n    <form id="validnum-form5">\n        <img src="/assets/imgs/logo.png" style="display:block;width:50%;height:auto;margin-left:auto;margin-right:auto;" />\n        <div class="spacer" style="width:300px;height:10px;" id="validnum-spacer11"></div>\n        <div id="validnum-markdown2" class="show-list-numbers-and-dots">\n            <p style="color:#000000;">\n                Enter le code de\n                <strong>\n          Validation\n        </strong>\n            </p>\n        </div>\n        <ion-list id="validnum-list9">\n            <ion-item id="validnum-input12">\n                <ion-label floating>\n                    Code de validation\n                </ion-label>\n                <ion-input type="text" name="Code de validation"></ion-input>\n            </ion-item>\n        </ion-list>\n        <div class="spacer" style="width:300px;height:10px;" id="validnum-spacer12"></div>\n        <button id="validnum-button9" ion-button color="positive" block on-click="goToSetpic()">\n      Verifier\n    </button>\n        <button id="validnum-button12" ion-button clear color="positive" block>\n      Renvoyer le code de validation\n    </button>\n    </form>\n</ion-content>'/*ion-inline-end:"/Users/wsslmac/Desktop/dotwaysApp/src/pages/validnum/validnum.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ValidnumPage);
    return ValidnumPage;
}());

//# sourceMappingURL=validnum.js.map

/***/ })

},[372]);
//# sourceMappingURL=main.js.map