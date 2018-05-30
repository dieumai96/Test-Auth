import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user  :  Object;
  constructor(
    public useService: UserService,
    public _router: Router
  ) {

  }

  ngOnInit() {
    this.useService.getProfile().subscribe(data => {
      this.user  = data.user;
    }, error => {
      console.log(error);
    });
    
  }
  // getName(data){
  //   this.sessionEmail = data.email;
  // }
  onLogout() {
    this.useService.logout();
    this._router.navigate(['/login']);
  }
}
