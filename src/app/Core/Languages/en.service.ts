import { Injectable } from '@angular/core';

@Injectable()
export class ENService {

  words: any;

  constructor() {
    this.words = {

      dir: 'ltr',

      fname: 'First Name',
      lname: 'Last Name',
      sesa: 'SESA Number',
      email: 'Email',
      report: 'Report To',
      dep: 'Department',
      getting: 'GETTING STARTED',
      message: 'WELCOME TO VACATION SYSTEM',
      tb_head: 'Vacations Policies',
      tb_column: [
        'The annual leave period shall be 21 days with full pay for those who have spent a full year in service',
        'Thirty days for those who spent ten years in service with an employer or more',
        ' If the worker’s service period is less than one year, he is entitled to a leave in proportion to the period he spent at work',
        ' The annual leave period shall be increased by seven days for workers who work in difficult, dangerous or harmful work',
        'In all cases, the worker must actually take an annual leave of fifteen days in one year',
      ],
      pass: 'Password',
      acc: "Don't Have Account?",
      acc_click : "Click Here",
      submit: 'LogIn'
    }
  }
}
