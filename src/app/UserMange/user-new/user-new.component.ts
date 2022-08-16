import { HttpClient } from '@angular/common/http';
import { ViewControlService } from 'src/app/Core/Services/ViewControl';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DataArch } from 'src/app/Core/Interfaces/data-arch';
import { UserDataService } from 'src/app/Core/Services/UserData';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent {

  //copy password to compare with confirm pass
  passwordCp: string = '';


  createUser: FormGroup;
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    public GetUserData: UserDataService,
    private GetViewControl: ViewControlService,
    private router: Router) {
    this.createUser = this.fb.group({
      fname: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z ]*')]],
      lname: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z ]*')]],
      sesa: ['', [Validators.required, Validators.min(100000), Validators.max(900000)]], // issue
      email: ['', [Validators.required, Validators.email, Validators.pattern('.*com$')]],
      reportto: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4)]],
      department: ['', [Validators.required, Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(2)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.pattern('[a-zA-Z0-9]*')]],
      confirmpassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.pattern('[a-zA-Z0-9]*')]],   //setDateRegex = /^[0-9]*$/; ==> only
      img: ['', [Validators.required, /*Validators.pattern('[^\\s]+(.*?)\\.(png|svg|jpg|jpeg)$')*/]],   //setDateRegex = /^[0-9]*$/; ==> only

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
  get img() {
    return this.createUser.get('img')
  }


  //set data using dependency injection
  fireData() {
    this.GetUserData.setdata(
      this.fname?.value, this.lname?.value,
      this.sesa?.value, this.email?.value,
      this.reportto?.value, this.department?.value,
      this.password?.value, this.img?.value
    )

    alert('Regiestration Completed')

    //post data on firebase
    this.FireBasePostData();

    // disable register after creat account
    this.GetViewControl.DisableRegister();

    //Manual navigation
    this.router.navigate(['/home'])
  }


  //using FireBase to post data
  FireBasePostData() {
    this.http.post('https://vacations-system-default-rtdb.firebaseio.com/UserPost.json',
      {
        fname: this.fname?.value, lname: this.lname?.value,
        sesa: this.sesa?.value, email: this.email?.value,
        reportto: this.reportto?.value, department: this.department?.value,
        password: this.password?.value, img: this.img?.value
      }
    ).subscribe()
  }
}


