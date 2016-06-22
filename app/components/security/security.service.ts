import {Injectable} from '@angular/core';
import {User} from "./users/user";
import {USERS} from "./mocks/mockUser.service"
import {Session} from "./session";
import {Router} from "@angular/router-deprecated";
@Injectable()
export class SecurityService {
    public currentUser: User;
    public session:Session;
    // private observers: any[] = [];

    constructor(public router: Router) {
        this.session = {
            currentUser : null,
            isGuest : true
        };
    }

    // registerCallback(callback : any): void {
    //     this.observers.push(callback);
    // }
    //
    // private notifyObservers(): void {
    //     this.observers.forEach(function(callback) {
    //         callback();
    //     })
    // }

    getSession(): Session {
        return this.session;
    }

    login(username, password) : User {
        this.currentUser = null;
        for (var user of USERS) {
            if (user.username == username && user.password == password)
                this.currentUser = user;
        }
        setTimeout(() => {this.updateSession();},1000);
        return this.currentUser;
    }

    logout() : void {
        this.currentUser = null;
        setTimeout(() => {
            this.updateSession();
        },1000);
    }

    private updateSession() : void {
        this.session.currentUser = this.currentUser;
        this.session.isGuest = this.currentUser == null;
        if (this.session.isGuest)
            this.router.navigate(['Login']);
        else
            this.router.navigate(['Main']);
    }
}