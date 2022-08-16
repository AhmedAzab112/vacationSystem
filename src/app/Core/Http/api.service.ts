import { environment as env } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HandleErrorService } from './handle-error.service';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient, private error: HandleErrorService) { }


  // fake api to make CRUD
  //http://httpbin.org/
  // console.log(environment.apiRoot);

  // GetData(){
  //   //take url return Observable to subscribe
  //   return this.http.get(`${env.apiRoot}/get`)
  // }

  /////////////////////////////////////////////////////////////////

  //get data
  GetData() {
    //take url return Observable to subscribe
    //get data with query parameter assigned by server(backend) & use heading
    return this.http.get(`${env.apiRoot}/get`, {
      params: { page: '20' },
      headers: { guest: 'true' }
    })
  }

  //delete data
  DeleteData() {
    //get data with query parameter assigned by server(backend) & use heading
    return this.http.delete(`${env.apiRoot}/delete`, {
      params: { page: '20' },
      headers: { guest: 'true' }
    })
  }

  //post data on server
  PostData() {
    //take the the body to create data
    return this.http.post(`${env.apiRoot}/post`, { name: 'Ahmed' }, {
      params: { page: '20' },
      headers: { guest: 'true' }
    }).pipe(catchError(this.error.logError))
  }

  //put data on server
  PutData() {
    //take the the body to edit specifc data
    return this.http.put(`${env.apiRoot}/put`, { name: 'Azab' }, {
      params: { page: '20' },
      headers: { guest: 'true' }
    })
  }

}
