import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { ViewControlService } from '../../Services/ViewControl';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [FooterComponent],

  providers: [ViewControlService]
})
export class FooterModule { }
