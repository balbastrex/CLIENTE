import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondViewComponent } from './second-view/second-view.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { logService } from './log.service';
import { LightBulbComponent } from './light-bulb/light-bulb.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondViewComponent,
    HomeViewComponent,
    LightBulbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [logService],
  bootstrap: [AppComponent]
})
export class AppModule { }
