import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacationNewComponent } from './vacation-new/vacation-new.component';
import { VacationInfoComponent } from './vacation-info/vacation-info.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDataService } from '../Core/Services/UserData';
import { VacationDataService } from '../Core/Services/VacationData';

const routes: Routes = [
  { path: 'vacation-new', component: VacationNewComponent },
  { path: 'vacation-info', component: VacationInfoComponent },
];


@NgModule({
  declarations: [
    VacationNewComponent,
    VacationInfoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [UserDataService , VacationDataService]
})
export class VacationListModule { }
