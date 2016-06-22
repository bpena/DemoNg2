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
var core_1 = require("@angular/core");
var button_1 = require("@angular2-material/button");
var card_1 = require("@angular2-material/card");
var toolbar_1 = require("@angular2-material/toolbar");
var sidenav_1 = require("@angular2-material/sidenav");
var icon_1 = require("@angular2-material/icon");
var dropdown_component_1 = require("../../components/dropdown.component");
var router_deprecated_1 = require("@angular/router-deprecated");
var security_service_1 = require("../../components/security/security.service");
var DashboardView = (function () {
    function DashboardView(router, securityService) {
        this.router = router;
        this.securityService = securityService;
        this.tipo = 'side';
        this.dropdownValues = [
            { value: "value", label: "Logout" }
        ];
    }
    DashboardView.prototype.ngOnInit = function () {
        this.session = this.securityService.getSession();
        if (this.session.isGuest)
            this.router.navigate(['Login']);
        else {
            this.username = this.session.currentUser ? (this.session.currentUser.firstname + " " + this.session.currentUser.lastname) : "";
        }
    };
    DashboardView.prototype.action = function () {
        this.securityService.logout();
    };
    DashboardView = __decorate([
        core_1.Component({
            selector: "dashboard-view",
            templateUrl: __dirname + '/dashboard.template.html',
            directives: [button_1.MdButton, card_1.MdCard, icon_1.MdIcon, toolbar_1.MdToolbar, sidenav_1.MD_SIDENAV_DIRECTIVES, dropdown_component_1.DropdownComponent],
            providers: [icon_1.MdIconRegistry]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, security_service_1.SecurityService])
    ], DashboardView);
    return DashboardView;
}());
exports.DashboardView = DashboardView;
//# sourceMappingURL=dashboard.component.js.map