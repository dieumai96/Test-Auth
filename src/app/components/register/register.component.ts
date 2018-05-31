import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required]),
    cpass: new FormControl(null, [Validators.required]),
  })
  constructor(
    public _router: Router,
    public userService: UserService
  ) { }

  ngOnInit() {
  }
  onRegister() {
    // if (!this.registerForm.valid || (this.registerForm.controls.password.value != this.registerForm.controls.cpass.value)) {
    //   console.log('Invalid Form ');
    //   return;
    // }
    // this.userService.onRegister(JSON.stringify(this.registerForm.value)).subscribe(data=>{
    //   console.log(data);
    //   alert('Account created successfully, You want login now ??');
    //   this._router.navigate(['/login']);
    // },err=>{
    //   console.log(err);
    // })
    // console.log(JSON.stringify(this.registerForm.value));
  }
}
