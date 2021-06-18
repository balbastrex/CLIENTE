import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EXButtonComponent } from './exbutton/exbutton.component';
import { EXSecondViewComponent } from './exsecond-view/exsecond-view.component';

@NgModule({
  declarations: [
    AppComponent,
    EXButtonComponent,
    EXSecondViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
