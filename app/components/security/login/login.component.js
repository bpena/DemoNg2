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
var button_1 = require('@angular2-material/button');
var card_1 = require('@angular2-material/card');
var input_1 = require('@angular2-material/input');
var toolbar_1 = require('@angular2-material/toolbar');
var checkbox_1 = require('@angular2-material/checkbox');
var security_service_1 = require("../security.service");
// import { Router, RouterLink } from '@angular/router-deprecated';
// import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
// import { Http, Headers } from '@angular/http';
var LoginForm = (function () {
    function LoginForm(
        // public router: Router,
        // public http: Http,
        securityService) {
        this.securityService = securityService;
    }
    LoginForm.prototype.login = function () {
        if (this.securityService.login(this.username, this.password) != null) {
            console.log('pude entrar');
        }
        else {
            console.log('no pude entrar');
        }
    };
    LoginForm = __decorate([
        core_1.Component({
            selector: 'login-form',
            templateUrl: __dirname + '/login.component.html',
            directives: [button_1.MD_BUTTON_DIRECTIVES, card_1.MD_CARD_DIRECTIVES, input_1.MD_INPUT_DIRECTIVES, toolbar_1.MdToolbar, checkbox_1.MdCheckbox]
        }), 
        __metadata('design:paramtypes', [security_service_1.SecurityService])
    ], LoginForm);
    return LoginForm;
}());
exports.LoginForm = LoginForm;
//# sourceMappingURL=login.component.js.map