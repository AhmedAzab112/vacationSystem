import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { UserManageModule } from 'src/app/UserMange/UserManage';
import { VacationListModule } from 'src/app/VacationManage/vacation.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    UserManageModule,
    VacationListModule,
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
