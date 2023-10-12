import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaviComponent } from './components/navi/navi.component';
import { Not404Component } from './components/not404/not404.component';
import { BrandAbstractsService } from '../features/brand/services/abstarcts/brand-abstracts.service';
import { BrandMockService } from '../features/brand/services/concretes/brand-mock.service';



@NgModule({
  declarations: [
    NaviComponent,
    Not404Component
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NaviComponent,
    Not404Component
  ],providers: [
    {
      provide: BrandAbstractsService,
      useClass: BrandMockService,
    } // IoC Container'a müdahale etmiş oluyoruz.
  ]
})
export class SharedModule { }
