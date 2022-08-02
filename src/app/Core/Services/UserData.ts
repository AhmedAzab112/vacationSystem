import { Injectable } from "@angular/core";
import { DataArch } from "../Interfaces/data-arch";


@Injectable()  // make Dependency {prodidedIn: 'root'} common syntax
export class UserDataService {

  data: DataArch[] = [];
  index: number = this.data.length;

  // set data in array
  setdata(
    fname: string, lname: string, sesa: number,
    email: string, reportto: string,
    department: string, password: string
  ) {
    this.data[this.index] = {
      fname: fname,
      lname: lname,
      sesa: sesa,
      email: email,
      reportto: reportto,
      department: department,
      password: password,
    }
    this.index++;
  }



  // get data from array
  // getData(): DataArch[] {
  //   return [
  //     {
  //       fname: this.data[this.index].fname,
  //       lname: this.data[this.index].lname,
  //       sesa: this.data[this.index].sesa,
  //       email: this.data[this.index].email,
  //       reportto: this.data[this.index].reportto,
  //       department: this.data[this.index].department,
  //       password: this.data[this.index].password,
  //     }
  //   ]
  // }

}

