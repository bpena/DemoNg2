import {Component, OnInit} from "@angular/core";
import {MdButton} from "@angular2-material/button";
import {MdCard} from "@angular2-material/card";
import {MdToolbar} from "@angular2-material/toolbar";
import {MD_SIDENAV_DIRECTIVES} from "@angular2-material/sidenav";
import {MdIcon, MdIconRegistry} from "@angular2-material/icon";

@Component({
    selector: "dashboard-view",
    templateUrl:    __dirname + '/dashboard.template.html',
    directives:     [MdButton, MdCard, MdIcon, MdToolbar, MD_SIDENAV_DIRECTIVES],
    providers:      [MdIconRegistry]
})

export class DashboardView {
    public tipo:string = 'side';

    constructor() { }
    
    ngOnInit() {
        
    }
    
    
}