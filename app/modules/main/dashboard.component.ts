import {Component, OnInit} from "@angular/core";
import {MdButton} from "@angular2-material/button";
import {MdCard} from "@angular2-material/card";
import {MdToolbar} from "@angular2-material/toolbar";
import {MD_SIDENAV_DIRECTIVES} from "@angular2-material/sidenav";
import {MdIcon, MdIconRegistry} from "@angular2-material/icon";
import {SecurityService} from "../../components/security/security.service";
import {Session} from "../../components/security/session";
import {DropdownComponent, DropdownValue} from "../../components/dropdown.component";

@Component({
    selector: "dashboard-view",
    templateUrl:    __dirname + '/dashboard.template.html',
    directives:     [MdButton, MdCard, MdIcon, MdToolbar, MD_SIDENAV_DIRECTIVES, DropdownComponent],
    providers:      [MdIconRegistry]
})

export class DashboardView {
    public tipo:string = 'side';
    public session:Session;
    public username:string;
    public dropdownValues: DropdownValue[] = [
        {value: "value", label: "Logout"}
    ];

    constructor(public securityService : SecurityService) { }
    
    ngOnInit() {
        this.session = this.securityService.getSession();
        this.username = this.session.currentUser ? (this.session.currentUser.firstname + " " + this.session.currentUser.lastname) : "";
    }
    
    action() {
        this.securityService.logout();
    }
}