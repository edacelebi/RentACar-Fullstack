import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { FormsModule } from '@angular/forms';
import { BrandAbstractsService } from './services/abstarcts/brand-abstracts.service';
import { BrandMockService } from './services/concretes/brand-mock.service';



@NgModule({
  declarations: [
    BrandListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    {
      provide: BrandAbstractsService,
      useClass: BrandMockService,
    },
  ],
  exports:[
    BrandListComponent
  ]
})
export class BrandModule { }
