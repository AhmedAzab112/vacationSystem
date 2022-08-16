import { ENService } from 'src/app/Core/Languages/en.service';
import { UserDataService } from 'src/app/Core/Services/UserData';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ViewControlService } from 'src/app/Core/Services/ViewControl';

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
  massage = this.lan.words.message;
  display_icon = 'none'

  //check email valdation
  validCheck = false

  //display to insure valid user and hidden form
  display: string = 'block';

  index: number;

  constructor(private GetUserData: UserDataService, private GetViewControl: ViewControlService, public lan: ENService) {

    this.index = GetUserData.current_index;
  }


  //#region create Login form outside constructor
  Login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('.*com$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)])
  })

  get email() {
    return this.Login.get('email');
  }
  get password() {
    return this.Login.get('password');
  }
  //#endregion


  //#region launch form
  gettingStarted(): boolean {
    this.buttonDisplay = 'none'
    return this.checkGetStart = true
  }

  //#endregion



  //#region user valdation

  //check user valdation email
  SubmitData() {
    if (this.GetUserData.getData(this.Login.value.email, this.Login.value.password)) {
      console.log('valid user');

      // enable navBar to authorized user
      this.GetViewControl.EnableNavBar();

      //disable register form after login
      this.GetViewControl.DisableRegister();

      //disable register form after login
      this.GetViewControl.DisableHome();
      return this.authorizedUser();
    }

    else {
      this.validCheck = true;
      console.log('not valid', this.GetUserData.current_index);
    }
  }



  // retrieve data for authorized users
  authorizedUser() {
    // console.log(this.GetUserData.read())
    this.checkGetStart = false
    this.massage = 'Welcome ' + this.GetUserData.UserLocalStorage.fname.concat(this.GetUserData.UserLocalStorage.lname)
    this.display_icon = 'inline'
    this.buttonDisplay = 'none'
  }
  //#endregion


  //#region track change value (just for test)
  // track changed value
  // constructor() {
  //   this.Login.valueChanges.subscribe(changes => {
  //     console.log('changes', this.email)
  //   })
  // }
  //#endregion

}
