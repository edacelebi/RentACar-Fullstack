import { Component, OnInit } from '@angular/core';
import { Brand } from '../../models/brand';
import { BrandAbstractsService } from '../../services/abstarcts/brand-abstracts.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit{
  brands:Brand[];

  constructor(private brandAbstractService:BrandAbstractsService){
  }

  ngOnInit(): void {

    this.getAllBrand()
  }

  getAllBrand(){
    this.brandAbstractService.getBrands().subscribe(response => {
      this.brands = response
    })
  
  }

}
