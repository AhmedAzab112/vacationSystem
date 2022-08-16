import { Observable, Subscriber, Subscription } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ViewControlService {

  navBar?: Observable<unknown>;
  vacationView?: Observable<unknown>;
  footer?: Observable<unknown>
  Register?: Observable<unknown>
  RequestVacation?: Observable<unknown>
  Home?: Observable<unknown>

  EnableNavBar() {
    this.navBar?.subscribe();
  }

  EnableVacationView() {
    this.vacationView?.subscribe();
  }

  DisableFooter() {
    this.footer?.subscribe();
  }

  DisableRegister() {
    this.Register?.subscribe();
  }

  DisableRequestVacation() {
    this.RequestVacation?.subscribe();
  }
  DisableHome() {
    this.Home?.subscribe();
  }
}

  // constructor(EnableNavBar: Observable<unknown>,
  //   EnableVacationViwe: Observable<unknown>) {

  //   this.navBar = EnableNavBar;
  //   this.vacationView = EnableVacationViwe;
  // }
