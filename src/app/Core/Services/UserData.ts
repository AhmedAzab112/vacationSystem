import { Injectable } from "@angular/core";
import { DataArch } from "../Interfaces/data-arch";


@Injectable()  // make Dependency {prodidedIn: 'root'} common syntax
export class UserDataService {


  UserLocalStorage: {
    fname: any,
    lname: any,
    email: any,
    sesa: any,
    reportto: any,
    department: any,
    password: any,
    img: any
  };

  constructor() {

    //get local storage
    this.UserLocalStorage = {
      fname: localStorage.getItem('firstname'),
      lname: localStorage.getItem('lastname'),
      email: localStorage.getItem('email'),
      sesa: localStorage.getItem('sesa'),
      reportto: localStorage.getItem('reportto'),
      department: localStorage.getItem('department'),
      password: localStorage.getItem('password'),
      img: localStorage.getItem('img')
    }
  }

  DetectChanges() {
    this.UserLocalStorage.fname = localStorage.getItem('firstname');
    this.UserLocalStorage.lname = localStorage.getItem('lastname');
    this.UserLocalStorage.email = localStorage.getItem('email');
    this.UserLocalStorage.sesa = localStorage.getItem('sesa');
    this.UserLocalStorage.reportto = localStorage.getItem('reportto');
    this.UserLocalStorage.department = localStorage.getItem('department');
    this.UserLocalStorage.password = localStorage.getItem('password');
    this.UserLocalStorage.img = localStorage.getItem('img');
  }

  ClearData() {
    localStorage.clear();
  }

  data: DataArch[] = [];

  index: number = this.data.length;
  current_index: number = 0;

  setdata(
    fname: string, lname: string, sesa: number,
    email: string, reportto: string,
    department: string, password: string, img: string
  ) {
    this.data[this.index] = {
      fname: fname,
      lname: lname,
      sesa: sesa,
      email: email,
      reportto: reportto,
      department: department,
      password: password,
      img: img
    }

    //set local storage
    localStorage.setItem('firstname', this.data[this.index].fname);
    localStorage.setItem('lastname', this.data[this.index].lname);
    localStorage.setItem('sesa', this.data[this.index].sesa.toString());
    localStorage.setItem('email', this.data[this.index].email);
    localStorage.setItem('reportto', this.data[this.index].reportto);
    localStorage.setItem('department', this.data[this.index].department);
    localStorage.setItem('password', this.data[this.index].password);
    localStorage.setItem('img', this.data[this.index].img);
    console.log(this.data[this.index].img);

    this.DetectChanges();

    this.index++;
  }

  // getData(email: any, password: any): boolean {
  //   for (let i = 0; i < this.data.length; i++) {
  //     if ((this.data[i].email) == email && this.data[i].password == password) {
  //       this.current_index = i;
  //       return true;
  //     }
  //   } return false;
  // }

  getData(email: any, password: any): boolean {
    if (this.UserLocalStorage.email == email && this.UserLocalStorage.password == password) {
      return true;
    } return false
  }

}

