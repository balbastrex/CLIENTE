import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EXButtonComponent } from './exbutton/exbutton.component';
import { EXSecondViewComponent } from './exsecond-view/exsecond-view.component';
import { NavComponent } from './nav/nav.component';
import { ThirdviewComponent } from './thirdview/thirdview.component';
import { FourthviewComponent } from './fourthview/fourthview.component';
import { JustDoltComponent } from './just-dolt/just-dolt.component';

@NgModule({
  declarations: [
    AppComponent,
    EXButtonComponent,
    EXSecondViewComponent,
    NavComponent,
    ThirdviewComponent,
    FourthviewComponent,
    JustDoltComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
