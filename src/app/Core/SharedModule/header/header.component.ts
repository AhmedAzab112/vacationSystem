import { VacationDataService } from 'src/app/Core/Services/VacationData';
import { UserDataService } from 'src/app/Core/Services/UserData';
import { Component } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { ViewControlService } from '../../Services/ViewControl';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  //style display none (navbar & viewVacation)
  NavBarDisplay: string = 'none';
  ViewVacationDisplay: string = 'none';
  RegisterDisplay: string = 'flex';
  RequestVacation: string = 'flex';
  Home: string = 'flex';


  constructor(public GetViewControl: ViewControlService, public GetUserData: UserDataService,
    public GetVacationData: VacationDataService) {
    //NavBar Observable
    const EnableNavBar = new Observable(subscriber => {
      subscriber.next(this.NavBarDisplay = 'flex');
    })


    //ViewVacation Observable
    const EnableViewVacation = new Observable(subscriber => {
      subscriber.next(this.ViewVacationDisplay = 'flex');
    })


    const DisableRegister = new Observable(Subscriber => {
      Subscriber.next(this.RegisterDisplay = 'none')
    })

    const DisableRequestVacation = new Observable(Subscriber => {
      Subscriber.next(this.RequestVacation = 'none')
    })
    const DisableHome = new Observable(Subscriber => {
      Subscriber.next(this.Home = 'none')
    })


    // data reflection
    GetViewControl.navBar = EnableNavBar;
    GetViewControl.vacationView = EnableViewVacation;
    GetViewControl.Register = DisableRegister;
    GetViewControl.RequestVacation = DisableRequestVacation;
    GetViewControl.Home = DisableHome;



    //pass by constructor
    // new ViewControlService(this.EnableNavBar, this.EnableViewVacation);
  }


  //check vacation
  checkVacation(): boolean {
    if (this.GetVacationData.VacationLocalStorage.vacation) {
      this.GetViewControl.EnableVacationView();
      return false;
    } return true;
  }
}
