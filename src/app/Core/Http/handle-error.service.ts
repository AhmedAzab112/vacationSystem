import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {

  constructor() { }

  logError(error: HttpErrorResponse) {
    if (error instanceof ErrorEvent)
      console.log('client side error', error);
    else
      console.log('server side error', error);

    return throwError('there is something went wrong'); //to continue observable
  }
}
