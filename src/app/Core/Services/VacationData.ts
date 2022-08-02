import { Injectable } from '@angular/core';
import { VacationArch } from '../Interfaces/vacation-arch';

@Injectable()
export class VacationDataService {

  data: VacationArch[] = [];
  index: number = 0;


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
    this.index++;
  }
}
