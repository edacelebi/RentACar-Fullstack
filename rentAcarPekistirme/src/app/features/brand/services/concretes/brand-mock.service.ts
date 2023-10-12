import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/features/brand/models/brand';
import { BrandAbstractsService } from '../abstarcts/brand-abstracts.service';

@Injectable({
  providedIn: 'root'
})
export class BrandMockService implements BrandAbstractsService{

  private apiUrl = "http://localhost:3000"

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<Brand[]>{
    let newPath = this.apiUrl + '/brands'
    return this.httpClient.get<Brand[]>(newPath)
  }


  
}
