import {Component, OnInit} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES}  from '@angular/router-deprecated';
import {Session} from "./components/security/session";
import {DashboardView} from "./modules/main/dashboard.component";
import {LoginView} from "./modules/loginView/loginView.component";
import {SecurityService} from "./components/security/security.service";

@Component({
    selector:   'ni5',
    // templateUrl:__dirname + '/ni5.component.html',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES],
    // directives: [DashboardView, LoginView],
    // providers:  [SecurityService, ROUTER_PROVIDERS]
    providers:  [SecurityService]
})

@RouteConfig([
    {path: '/', name: 'Main', component: DashboardView},
    {path: '/login', name: 'Login', component: LoginView}
])

export class Ni5Component implements OnInit {
    public session : Session;

    constructor(
        // private router : Router,
        private securityService : SecurityService) {}

    ngOnInit() {
        this.session = this.securityService.getSession();
        // this.securityService.registerCallback(this.updateView);
    }
}
