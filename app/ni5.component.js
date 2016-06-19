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
var loginView_component_1 = require("./modules/login/loginView.component");
var security_service_1 = require("./components/security/security.service");
var dashboard_component_1 = require("./modules/main/dashboard.component");
// import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS}  from '@angular/router-deprecated';
var Ni5Component = (function () {
    function Ni5Component(
        // private router : Router,
        securityService) {
        this.securityService = securityService;
    }
    Ni5Component.prototype.ngOnInit = function () {
        this.session = this.securityService.getSession();
        // this.securityService.registerCallback(this.updateView);
    };
    Ni5Component.prototype.updateView = function (session) {
        // if (this.session.isGuest)
        //     this.router.navigate(['Login']);
        // else
        //     this.router.navigate(['Main']);
    };
    Ni5Component.prototype.gotoLogin = function () {
        // this.router.navigate(['Login']);
    };
    Ni5Component.prototype.gotoDashboard = function () {
        // this.router.navigate(['Main']);
    };
    Ni5Component = __decorate([
        core_1.Component({
            selector: 'ni5',
            templateUrl: __dirname + '/ni5.component.html',
            // directives: [ROUTER_DIRECTIVES],
            directives: [dashboard_component_1.DashboardView, loginView_component_1.LoginView],
            // providers:  [SecurityService, ROUTER_PROVIDERS]
            providers: [security_service_1.SecurityService]
        }), 
        __metadata('design:paramtypes', [security_service_1.SecurityService])
    ], Ni5Component);
    return Ni5Component;
}());
exports.Ni5Component = Ni5Component;
//# sourceMappingURL=ni5.component.js.map