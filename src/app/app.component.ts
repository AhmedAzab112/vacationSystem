import { ENService } from 'src/app/Core/Languages/en.service';
import { Component } from '@angular/core';
import { ARService } from './Core/Languages/ar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vacation-Systems';


  sayhello() {
    return 'hello there!'
  }
  saywelcome() {
    return 'welcome there!'
  }
  saywelcome2() {
    return 'welcome there!'
  }
  saywelcome3() {
    return 'welcome there!'
  }
  saywelcome4() {
    return 'welcome there!'
  }
}


