import { UserDataService } from 'src/app/Core/Services/UserData';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {


  //switch to login
  checkGetStart: boolean = false;
  buttonDisplay: string = 'inline';


  //welcome massage
  massage = 'welcome to vacation system';
  display_icon = 'none'


  //display to insure valid user and hidden form
  display: string = 'block';

  //user data len
  index: number;
  i: number;


  // create instance from UserData Service
  constructor(private GetUserData: UserDataService) {
    this.index = GetUserData.data.length
    this.i = GetUserData.data.length
  }

  gettingStarted() {
    this.checkGetStart = true
    this.buttonDisplay = 'none'
  }

  //create Login form
  Login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('.*com$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)])
  })


  // check user valdation
  SubmitData() {
    if (this.GetUserData.data[--this.index]?.email == this.Login.value.email
      &&
      this.GetUserData.data[this.index]?.password == this.Login.value.password) {
      console.log('valid user');
      return this.authorizedUser();
    }
    console.log('not valid');
  }

  authorizedUser() {
    this.checkGetStart = false
    this.massage = 'Welcome ' + this.GetUserData.data[this.index]?.fname.concat(this.GetUserData.data[this.index]?.lname)
    this.display_icon = 'inline'
  }


  //get data to make valdation
  get email() {
    return this.Login.get('email');
  }
  get password() {
    return this.Login.get('password');
  }


  // track changed value
  // constructor() {
  //   this.Login.valueChanges.subscribe(changes => {
  //     console.log('changes', this.email)
  //   })
  // }

}
