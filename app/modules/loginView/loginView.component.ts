import {Component} from '@angular/core'
import {LoginForm} from "./login/login.component";

@Component({
    selector:   'login-view',
    template:   '<login-form class="row-flex"></login-form>',
    directives: [LoginForm]
})
export class LoginView {

}