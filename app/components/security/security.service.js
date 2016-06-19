"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var mockUser_service_1 = require("./mocks/mockUser.service");
var SecurityService = (function () {
    // private observers: any[] = [];
    function SecurityService() {
        this.session = {
            currentUser: null,
            isGuest: true
        };
    }
    // registerCallback(callback : any): void {
    //     this.observers.push(callback);
    // }
    //
    // private notifyObservers(): void {
    //     this.observers.forEach(function(callback) {
    //         callback();
    //     })
    // }
    SecurityService.prototype.getSession = function () {
        return this.session;
    };
    SecurityService.prototype.login = function (username, password) {
        var _this = this;
        this.currentUser = null;
        for (var _i = 0, USERS_1 = mockUser_service_1.USERS; _i < USERS_1.length; _i++) {
            var user = USERS_1[_i];
            if (user.username == username && user.password == password)
                this.currentUser = user;
        }
        setTimeout(function () { _this.updateSession(); }, 1000);
        return this.currentUser;
    };
    SecurityService.prototype.logout = function () {
        var _this = this;
        this.currentUser = null;
        setTimeout(function () { _this.updateSession(); }, 1000);
    };
    SecurityService.prototype.updateSession = function () {
        this.session.currentUser = this.currentUser;
        this.session.isGuest = this.currentUser == null;
    };
    SecurityService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SecurityService);
    return SecurityService;
}());
exports.SecurityService = SecurityService;
//# sourceMappingURL=security.service.js.map