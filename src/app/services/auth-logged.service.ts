import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';
@Injectable()
export class AuthLogged implements CanActivate {

    constructor(
        public userService: UserService,
        public router: Router,
    ) { }
    canActivate() {
        if (this.userService.isLogin()) {
            this.router.navigate(['/home']);
            return true;
        } else {
            return true;
        }
    }
}