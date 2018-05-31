import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
      email : new FormControl(null,[Validators.email,Validators.required]),
      password : new FormControl(null,[Validators.required])
  });
  constructor(
    public userService : UserService,
    public _router : Router,
  ) { }

  ngOnInit() {
   
  }
  onLogin(){
    
    if(!this.loginForm.valid){
      console.log('Invalid');
      return ;
    }
    this.userService.onLogin(JSON.stringify(this.loginForm.value)).subscribe(data=>{
      if(data.success){
        this.userService.storeDataUser(data.token, data.user);
        this._router.navigate(['/workplace-home']);
      }else{
        this._router.navigate(['/workplace-login']);
      }
    })
  }
  
}
