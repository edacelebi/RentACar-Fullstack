import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private apiUrl = "http://localhost:3000"

  constructor(private httpClient:HttpClient) { }

  getAllBrand():Observable<Brand[]>{
    let newPath = this.apiUrl + '/brands'
    return this.httpClient.get<Brand[]>(newPath)
  }

}

//let - birden fazla sayı atabilirim
//const - tek bi değer atabilirim yani değiştiremem daha sonra
//var

//java daki manager 


//Observable araştır!!!!!!