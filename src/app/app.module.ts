import { environment as env } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ARService } from './Core/Languages/ar.service';
import { ENService } from './Core/Languages/en.service';
import { FooterModule } from './Core/SharedModule/footer/footer.module';
import { HeaderModule } from './Core/SharedModule/header/header.module';
import { PageNotFoundComponent } from './Core/Utility/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';



const routes: Routes = [
  { path: '**', component: PageNotFoundComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),

    FooterModule, //footer module
    HeaderModule, //header module
    HttpClientModule,

  ],

  providers: [
    // { provide: ENService, useClass: ENService }
    {
      provide: ENService, useFactory: () => {
        return env.Language == 'ar' ? new ARService() : new ENService()
      }
    },
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
