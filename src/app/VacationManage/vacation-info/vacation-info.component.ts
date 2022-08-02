import { UserDataService } from 'src/app/Core/Services/UserData';
import { Component, OnInit } from '@angular/core';
import { VacationDataService } from 'src/app/Core/Services/VacationData';

@Component({
  selector: 'app-vacation-info',
  templateUrl: './vacation-info.component.html',
  styleUrls: ['./vacation-info.component.css']
})
export class VacationInfoComponent {

  status = 'card text-dark bg-warning';

  // vacation data
  name: string;
  email: string;
  sesa: number;
  startDate: string;
  endDate: string;


  constructor(
    private GetVacationData: VacationDataService,
    private GetUserData: UserDataService) {

    let index = GetUserData.data.length

    this.name = GetUserData.data[--index]?.fname.concat(GetUserData.data[index]?.lname)
    this.email = GetUserData.data[index]?.email;
    this.sesa = GetUserData.data[index]?.sesa;
    this.startDate = GetVacationData.data[index]?.startDate;
    this.endDate = GetVacationData.data[index]?.endDate;
  }

  changeStatus(status: string) {
    this.status = 'card text-dark mb-3 bg-' + status
  }


}
