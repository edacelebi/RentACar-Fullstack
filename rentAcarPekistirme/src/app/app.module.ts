import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './pages/brand/brand.component';
import { SharedModule } from './shared/shared.module';
import { CarComponent } from './pages/car/car.component';
import { ModelComponent } from './pages/model/model.component';


@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    CarComponent,
    ModelComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
