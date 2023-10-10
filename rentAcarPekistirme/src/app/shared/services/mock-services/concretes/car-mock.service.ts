import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Car } from 'src/app/shared/models/car';
import { CarAbstractsService } from '../abstarcts/car-abstracts.service';

@Injectable({
  providedIn: 'root'
})
export class CarMockService implements CarAbstractsService{
  private apiUrl = "http://localhost:3000/cars"

  constructor(private httpClient:HttpClient) {
  
   }

   getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.apiUrl+'?_expand=model&_expand=brand/');
}

  getBrandById(brandId: number): Observable<Car[]> {
    let newPath = `${this.apiUrl}/${brandId}?_expand=model&brandId=${brandId}`;
    return this.httpClient.get<Car[]>(newPath).pipe(
      map((response: any) => [response]) 
  );
}
}
