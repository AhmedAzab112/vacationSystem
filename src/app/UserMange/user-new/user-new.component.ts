import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DataArch } from 'src/app/Core/Interfaces/data-arch';
import { UserDataService } from 'src/app/Core/Services/UserData';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent {

  //copy password to compare with confirm pass
  passwordCp: string = '';


  createUser: FormGroup;
  constructor(private fb: FormBuilder, public GetUserData: UserDataService) {
    this.createUser = this.fb.group({
      fname: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z ]*')]],
      lname: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z ]*')]],
      sesa: ['', [Validators.required, Validators.min(100000), Validators.max(900000)]], // issue
      email: ['', [Validators.required, Validators.email, Validators.pattern('.*com$')]],
      reportto: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4)]],
      department: ['',  [Validators.required,Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(2)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.pattern('[a-zA-Z0-9]*')]],
      confirmpassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.pattern('[a-zA-Z0-9]*')]],   //setDateRegex = /^[0-9]*$/; ==> only

    })
  }


  get fname() {
    return this.createUser.get('fname')
  }
  get lname() {
    return this.createUser.get('lname')
  }
  get sesa() {
    return this.createUser.get('sesa')
  }
  get email() {
    return this.createUser.get('email')
  }
  get reportto() {
    return this.createUser.get('reportto')
  }

  get department() {
    return this.createUser.get('department')
  }

  get password() {
    return this.createUser.get('password')
  }
  get confirmpassword() {
    return this.createUser.get('confirmpassword')
  }



  //set data using dependency injection
  fireData() {
    this.GetUserData.setdata(
      this.fname?.value, this.lname?.value,
      this.sesa?.value, this.email?.value,
      this.reportto?.value, this.department?.value,
      this.password?.value
    )
    // let index = this.GetUserData.data.length
    // console.log(this.GetUserData.data[--index]);
  }


}


