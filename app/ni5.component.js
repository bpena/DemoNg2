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
var router_deprecated_1 = require('@angular/router-deprecated');
var dashboard_component_1 = require("./modules/main/dashboard.component");
var loginView_component_1 = require("./modules/loginView/loginView.component");
var security_service_1 = require("./components/security/security.service");
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
    Ni5Component = __decorate([
        core_1.Component({
            selector: 'ni5',
            // templateUrl:__dirname + '/ni5.component.html',
            template: '<router-outlet></router-outlet>',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            // directives: [DashboardView, LoginView],
            // providers:  [SecurityService, ROUTER_PROVIDERS]
            providers: [security_service_1.SecurityService]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', name: 'Main', component: dashboard_component_1.DashboardView },
            { path: '/login', name: 'Login', component: loginView_component_1.LoginView }
        ]), 
        __metadata('design:paramtypes', [security_service_1.SecurityService])
    ], Ni5Component);
    return Ni5Component;
}());
exports.Ni5Component = Ni5Component;
//# sourceMappingURL=ni5.component.js.map