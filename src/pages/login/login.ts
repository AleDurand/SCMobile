import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';

import { UserService } from '../../services/user.service';
 
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public username: AbstractControl;
  public password: AbstractControl;
  public errorMessage: string = null;
  public loginForm: FormGroup;
 
  constructor(private navCtrl: NavController, private fb: FormBuilder, private userService : UserService) {
    this.loginForm = fb.group({
      'username': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([Validators.required])]
    });

    this.username = this.loginForm.controls['username'];
    this.password = this.loginForm.controls['password'];
  }

  login(){
    if(this.loginForm.valid){
      this.userService.login('username');
    }
  }
}
