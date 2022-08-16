import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { ViewControlService } from '../../Services/ViewControl';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  footerDisplay: string = 'flex';

  constructor(public GetViewControl: ViewControlService, public router: Router) {
    const DisableFooter = new Observable(subscriber => {
      subscriber.next(this.footerDisplay = 'none');
    })

    GetViewControl.footer = DisableFooter;
  }

  
  changeLanguage() {
    environment.Language = 'ar';
  }
}



