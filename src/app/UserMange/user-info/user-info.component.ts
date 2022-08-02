import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataArch } from 'src/app/Core/Interfaces/data-arch';
import { UserDataService } from 'src/app/Core/Services/UserData';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {

  createUser: FormGroup;
  constructor(private fb: FormBuilder, public getData: UserDataService) {

    //determine len of array
    let index = getData.data.length

    // create form using form builder
    this.createUser = this.fb.group({
      fname: [getData.data[--index]?.fname, Validators.required],
      lname: [getData.data[index]?.lname, Validators.required],
      sesa: [getData.data[index]?.sesa, Validators.required],
      email: [getData.data[index]?.email, Validators.required],
      reportto: [getData.data[index]?.reportto, Validators.required],
      department: [getData.data[index]?.department, Validators.required],
      password: [getData.data[index]?.password, Validators.required],
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
}
