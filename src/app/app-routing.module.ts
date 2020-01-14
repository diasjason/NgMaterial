import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';


const routes: Routes = [  
  {path: 'app-first-page' ,component: FirstPageComponent },
  {path: 'app-second-page' ,component:  SecondPageComponent},
  {path: 'app-third-page',component: ThirdPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
