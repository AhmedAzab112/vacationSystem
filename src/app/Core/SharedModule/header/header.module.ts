import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { UserManageModule } from 'src/app/UserMange/UserManage';
import { VacationListModule } from 'src/app/VacationManage/vacation.module';
import { ViewControlService } from '../../Services/ViewControl';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    UserManageModule,
    VacationListModule,

  ],
  exports: [HeaderComponent],
  providers: [ViewControlService]
})
export class HeaderModule { }
