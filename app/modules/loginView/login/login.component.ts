import {Component} from '@angular/core';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdCheckbox} from '@angular2-material/checkbox';
import {SecurityService} from "../../../components/security/security.service";

@Component({
    selector:       'login-form',
    templateUrl:    __dirname + '/login.component.html',
    directives:     [MD_BUTTON_DIRECTIVES, MD_CARD_DIRECTIVES, MD_INPUT_DIRECTIVES, MdToolbar, MdCheckbox]
})

export class LoginForm {
    public username: string;
    public password: string;

    constructor(
        // public router: Router,
        // public http: Http,
        public securityService:SecurityService) { }

    login() {
        if (this.securityService.login(this.username, this.password) != null) {
            console.log('pude entrar');
            // this.router.parent.navigateByUrl('/home');
        }
        else {
            console.log('no pude entrar');
        }
    }
}
