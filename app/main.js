"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
// import { provide } from '@angular/core';
// import { FORM_PROVIDERS } from '@angular/common';
// import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
var http_1 = require('@angular/http');
// import { AuthConfig, AuthHttp } from 'angular2-jwt';
var ni5_component_1 = require('./ni5.component');
platform_browser_dynamic_1.bootstrap(ni5_component_1.Ni5Component, [
    // FORM_PROVIDERS,
    // ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map