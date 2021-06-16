import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { SecondViewComponent } from './second-view/second-view.component';

const routes: Routes = [
  {path: 'home', component: HomeViewComponent},
  {path: 'second-view', component: SecondViewComponent},
  {path: '**', component: HomeViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
