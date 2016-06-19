import {Component, OnInit} from '@angular/core';
import {LoginView} from "./modules/login/loginView.component";
import {SecurityService} from "./components/security/security.service";
import {Session} from "./components/security/session";
import {DashboardView} from "./modules/main/dashboard.component";
// import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS}  from '@angular/router-deprecated';

@Component({
    selector:   'ni5',
    templateUrl:__dirname + '/ni5.component.html',
    // directives: [ROUTER_DIRECTIVES],
    directives: [DashboardView, LoginView],
    // providers:  [SecurityService, ROUTER_PROVIDERS]
    providers:  [SecurityService]
})

// @RouteConfig([
//     {path: '/', name: 'Main', component: MainView},
//     {path: '/login', name: 'Login', component: LoginView}
// ])

export class Ni5Component implements OnInit {
    public session : Session;

    constructor(
        // private router : Router,
        private securityService : SecurityService) {}

    ngOnInit() {
        this.session = this.securityService.getSession();
        // this.securityService.registerCallback(this.updateView);
    }

    public updateView(session) {
        // if (this.session.isGuest)
        //     this.router.navigate(['Login']);
        // else
        //     this.router.navigate(['Main']);
    }

    gotoLogin() {
        // this.router.navigate(['Login']);
    }

    gotoDashboard() {
        // this.router.navigate(['Main']);
    }
}
