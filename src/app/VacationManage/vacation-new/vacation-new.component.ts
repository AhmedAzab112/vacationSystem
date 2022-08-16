import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ViewControlService } from 'src/app/Core/Services/ViewControl';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/Core/Services/UserData';
import { VacationDataService } from 'src/app/Core/Services/VacationData';

@Component({
  selector: 'app-vacation-new',
  templateUrl: './vacation-new.component.html',
  styleUrls: ['./vacation-new.component.css']
})
export class VacationNewComponent {

  // declare form group
  NewVacation: FormGroup;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private GetUserData: UserDataService,
    private GetVacationData: VacationDataService,
    private GetViewControl: ViewControlService,
    private router: Router) {

    // determine len of array
    let index = GetUserData.data.length;

    this.NewVacation = this.fb.group({
      // name: [GetUserData.data[--index]?.fname.concat(this.GetUserData.data[index]?.lname)], // concatenation betwean fname & lname
      // email: [GetUserData.data[index]?.email],
      // sesa: [GetUserData.data[index]?.sesa],
      // reportto: [GetUserData.data[index]?.reportto],
      name: [GetUserData.UserLocalStorage.fname.concat(GetUserData.UserLocalStorage.lname)], // concatenation betwean fname & lname
      email: [GetUserData.UserLocalStorage.email],
      sesa: [GetUserData.UserLocalStorage.sesa],
      reportto: [GetUserData.UserLocalStorage.reportto],
      vacationType: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      file: ['', [Validators.required, Validators.pattern('[^\\s]+(.*?)\\.(txt|docx|pdf)$')]],
      comment: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(45)]],
    })
  }

  get vacationType() {
    return this.NewVacation.get('vacationType');
  }
  get startDate() {
    return this.NewVacation.get('startDate');
  }
  get endDate() {
    return this.NewVacation.get('endDate');
  }
  get file() {
    return this.NewVacation.get('file');
  }

  get comment() {
    return this.NewVacation.get('comment');
  }




  fireData() {
    this.GetVacationData.setdata(
      this.vacationType?.value, this.startDate?.value,
      this.endDate?.value, this.file?.value,
      this.comment?.value
    )

    alert('Your Vacation Submitted');


    this.FireBasePostData();

    //show vacation
    this.GetViewControl.EnableVacationView();

    //disable Request Vacation
    this.GetViewControl.DisableRequestVacation();

    //navigate home page
    this.router.navigate(['/vacation-info']);
  }


  FireBasePostData() {
    this.http.post('https://vacations-system-default-rtdb.firebaseio.com/VacationPost.json',
      {
        type: this.vacationType?.value, startDate: this.startDate?.value,
        endDate: this.endDate?.value, file: this.file?.value,
        comment: this.comment?.value
      }
    ).subscribe()
  }



}
