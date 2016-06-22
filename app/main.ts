import { bootstrap } from '@angular/platform-browser-dynamic';
// import { provide } from '@angular/core';
// import { FORM_PROVIDERS } from '@angular/common';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { Http, HTTP_PROVIDERS } from '@angular/http';
// import { AuthConfig, AuthHttp } from 'angular2-jwt';

import { Ni5Component } from './ni5.component';

bootstrap(Ni5Component, [
    // FORM_PROVIDERS,
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    // provide(AuthHttp, {
    //     useFactory: (http) => {
    //         return new AuthHttp(new AuthConfig({
    //             tokenName: 'jwt'
    //         }), http);
    //     },
    //     deps: [Http]
    // })
])
.catch(err => console.log(err));
