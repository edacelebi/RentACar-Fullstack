import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './pages/car/car.component';
import { Not404Component } from './shared/components/not404/not404.component';
import { BrandComponent } from './pages/brand/brand.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"eda",component:BrandComponent},
  {path:"**",component:Not404Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
