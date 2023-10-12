import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Car } from 'src/app/features/car/models/car';
import { CarsAbstractService } from '../abstracts/cars-abstract.service';

@Injectable({
  providedIn: 'root'
})
export class CarMockService implements CarsAbstractService{

  private apiUrl = "http://localhost:3000/cars"

  constructor(private httpClient:HttpClient) { }
  

  getCarList():Observable<Car[]>{
    let newPath = this.apiUrl
    return this.httpClient.get<Car[]>(newPath)
    
  }

  getBrandById(brandId: number): Observable<Car[]> {
    let url = `${this.apiUrl}?model.brandId=${brandId}`;
    return this.httpClient.get<Car[]>(url);
  }
}
