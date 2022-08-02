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
    private fb: FormBuilder,
    private GetUserData: UserDataService,
    private GetVacationData: VacationDataService) {

    // determine len of array
    let index = GetUserData.data.length;

    this.NewVacation = this.fb.group({
      name: [GetUserData.data[--index]?.fname.concat(this.GetUserData.data[index]?.lname)], // concatenation betwean fname & lname
      email: [GetUserData.data[index]?.email],
      sesa: [GetUserData.data[index]?.sesa],
      reportto: [GetUserData.data[index]?.reportto],
      vacationType: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      file: ['', [Validators.required, Validators.pattern('[^\\s]+(.*?)\\.(txt|docx|pdf)$')]],
      comment: ['', [Validators.required, Validators.minLength(8) , Validators.maxLength(45)]],
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
    // let index = this.GetVacationData2.data.length
    // console.log(this.GetVacationData2.data[--index]);
  }
}
