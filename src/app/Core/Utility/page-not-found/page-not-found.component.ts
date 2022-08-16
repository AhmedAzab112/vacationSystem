import { Component, OnInit } from '@angular/core';
import { ViewControlService } from '../../Services/ViewControl';

@Component({
  selector: 'app-page-not-found',
  template: `<h2>Error 404 <br>Page Not Found</h2>`,
  styles: [`h2 { font-size: 150px;
  margin-top: 5%;
  font-weight: 900;
  text-align: center;
  font-style: oblique;} p{color: red}`]
})
export class PageNotFoundComponent {
  constructor(public GetViewControl: ViewControlService) {
    GetViewControl.DisableFooter();
  }
}
