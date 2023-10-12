import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ModelComponent } from './pages/model/model.component';
import { FormsModule } from '@angular/forms';
import { CarModule } from './features/car/car.module';
import { BrandListComponent } from './features/brand/components/brand-list/brand-list.component';


@NgModule({
  declarations: [
    AppComponent,
    BrandListComponent,
    ModelComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    CarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
