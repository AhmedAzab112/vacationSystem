import { HttpClient } from '@angular/common/http';
import { APIService } from './../../Core/Http/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ENService } from 'src/app/Core/Languages/en.service';
import { UserDataService } from 'src/app/Core/Services/UserData';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  createUser: FormGroup;
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    public getData: UserDataService,
    public lan: ENService, //default language

    private api: APIService
  ) {

    //determine len of array
    let index = getData.data.length


    // create form using form builder
    this.createUser = this.fb.group({
      fname: [getData.UserLocalStorage.fname, Validators.required],
      lname: [getData.UserLocalStorage.lname, Validators.required],
      sesa: [getData.UserLocalStorage.sesa, Validators.required],
      email: [getData.UserLocalStorage.email, Validators.required],
      reportto: [getData.UserLocalStorage.reportto, Validators.required],
      department: [getData.UserLocalStorage.department, Validators.required],
      password: [getData.UserLocalStorage.password, Validators.required],
      // fname: [getData.data[--index]?.fname, Validators.required],
      // lname: [getData.data[index]?.lname, Validators.required],
      // sesa: [getData.data[index]?.sesa, Validators.required],
      // email: [getData.data[index]?.email, Validators.required],
      // reportto: [getData.data[index]?.reportto, Validators.required],
      // department: [getData.data[index]?.department, Validators.required],
      // password: [getData.data[index]?.password, Validators.required],
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


  FireBaseGetData() {
    this.http.get('https://vacations-system-default-rtdb.firebaseio.com/UserPost.json')
      .pipe(
        map((responseData: any) => {
          const postsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key })
            }
          }
          return postsArray;
        }))
      .subscribe((data) => {
        console.log(data);
      })
  }

  ngOnInit(): void {
    this.FireBaseGetData();
  }


  // getHttpData() {
  //   this.api.GetData().subscribe((res) => {
  //     console.log('res', res);
  //   });
  // }

  // deleteHttpData() {
  //   this.api.DeleteData().subscribe((res) => {
  //     console.log('res', res);
  //   });
  // }


  // postHttpData() {
  //   this.api.PostData().subscribe((res) => {
  //     console.log('res', res);
  //   });
  // }


  // putHttpData() {
  //   this.api.PutData().subscribe((res) => {
  //     console.log('res', res);
  //   });
  // }
}
