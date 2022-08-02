import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterModule } from './Core/SharedModule/footer/footer.module';
import { HeaderModule } from './Core/SharedModule/header/header.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,

    FooterModule, //footer module
    HeaderModule //header module
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
