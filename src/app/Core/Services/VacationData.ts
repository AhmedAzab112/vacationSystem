import { Injectable } from '@angular/core';
import { VacationArch } from '../Interfaces/vacation-arch';

@Injectable()
export class VacationDataService {

  data: VacationArch[] = [];
  index: number = 0;


  VacationLocalStorage: {
    vacation: any,
    startDate: any,
    endDate: any,
    // attachfile: any,
    // comment: any
  };

  constructor() {
    this.VacationLocalStorage = {
      vacation: localStorage.getItem('vacation'),
      startDate: localStorage.getItem('startDate'),
      endDate: localStorage.getItem('endDate'),
    }
  }


  DetectChanges() {
    this.VacationLocalStorage.vacation = localStorage.getItem('vacation');
    this.VacationLocalStorage.startDate = localStorage.getItem('startDate');
    this.VacationLocalStorage.endDate = localStorage.getItem('endDate');
  }


  ClearData() {
    localStorage.clear();
  }

  setdata(
    vacation: string,
    startDate: string,
    endDate: string,
    attachfile: string,
    comment: string
  ) {

    this.data[this.index] = {
      vacation: vacation,
      startDate: startDate,
      endDate: endDate,
      attachfile: attachfile,
      comment: comment,
    }

    //set local storage
    localStorage.setItem('vacation', this.data[this.index].vacation);
    localStorage.setItem('startDate', this.data[this.index].startDate);
    localStorage.setItem('endDate', this.data[this.index].endDate);

    this.DetectChanges();

    this.index++;
  }
}
