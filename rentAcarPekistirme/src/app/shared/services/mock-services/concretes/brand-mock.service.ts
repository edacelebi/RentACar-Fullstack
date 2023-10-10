import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/shared/models/brand';
import { BrandAbstractsService } from '../abstarcts/brand-abstracts.service';

@Injectable({
  providedIn: 'root'
})
export class BrandMockService implements BrandAbstractsService{

  private apiUrl = "http://localhost:3000/brands"

  constructor(private httpClient:HttpClient) { }

    getBrands(): Observable<Brand[]> {
    return this.httpClient.get<Brand[]>(this.apiUrl)
  }


  
}
