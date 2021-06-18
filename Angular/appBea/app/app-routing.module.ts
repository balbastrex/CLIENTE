import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EXButtonComponent } from './exbutton/exbutton.component';
import { EXSecondViewComponent } from './exsecond-view/exsecond-view.component';
import { FourthviewComponent } from './fourthview/fourthview.component';
import { NavComponent } from './nav/nav.component';
import { ThirdviewComponent } from './thirdview/thirdview.component';

const routes: Routes = [
  {path:'button', component:EXButtonComponent},
  {path:'second-view', component:EXSecondViewComponent},
  {path:'home', component:AppComponent},
  {path:'nav' , component:NavComponent},
  {path:'thirdview', component:ThirdviewComponent},
  {path:'fourthview', component:FourthviewComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
