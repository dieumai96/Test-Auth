import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';
@Injectable()
export class Authorization implements CanActivate {

    constructor(
        public userService: UserService,
        public router: Router,
    ) { }
    canActivate() {
        if (this.userService.isLogin()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}