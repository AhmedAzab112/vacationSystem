import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserDataService } from 'src/app/Core/Services/UserData';
import { Component, OnInit } from '@angular/core';
import { VacationDataService } from 'src/app/Core/Services/VacationData';

@Component({
  selector: 'app-vacation-info',
  templateUrl: './vacation-info.component.html',
  styleUrls: ['./vacation-info.component.css']
})
export class VacationInfoComponent {

  // statusColor = 'card text-dark bg-warning';
  statusMessage = 'Pendding';

  // vacation data
  name: string;
  email: string;
  sesa: number;
  startDate: string;
  endDate: string;
  ticket: number = Math.floor(Math.random() * 9000) + 1000;
  icon: string = 'far fa-clock';


  constructor(
    private http: HttpClient,
    private GetVacationData: VacationDataService,
    private GetUserData: UserDataService) {

    let index = GetUserData.data.length

    this.name = GetUserData.UserLocalStorage.fname.concat(GetUserData.UserLocalStorage.lname)
    this.email = GetUserData.UserLocalStorage.email;
    this.sesa = GetUserData.UserLocalStorage.sesa;
    this.startDate = GetVacationData.VacationLocalStorage.startDate;
    this.endDate = GetVacationData.VacationLocalStorage.endDate;
    // this.name = GetUserData.data[--index]?.fname.concat(GetUserData.data[index]?.lname)
    // this.email = GetUserData.data[index]?.email;
    // this.sesa = GetUserData.data[index]?.sesa;
    // this.startDate = GetVacationData.data[index]?.startDate;
    // this.endDate = GetVacationData.data[index]?.endDate;
  }

  changeStatus(statusMessage: string) {
    // this.statusColor = 'card text-dark mb-3 bg-' + statusColor
    this.statusMessage = statusMessage;
  }

  statusColor(): string {
    return this.statusMessage == 'Pendding' ? 'khaki' : this.statusMessage == 'Successed' ? 'greenyellow' : 'tomato';
  }

  statusIcon(): string {
    return this.statusMessage == 'Pendding' ? 'far fa-clock' : this.statusMessage == 'Successed' ? 'far fa-check-circle' : 'far fa-times-circle	';
  }


  FireBaseGetData() {
    this.http.get('https://vacations-system-default-rtdb.firebaseio.com/VacationPost.json')
      .subscribe((data) => {
        console.log(data);
      });
  }

  ngOnInit(): void {
    this.FireBaseGetData();
  }
}
