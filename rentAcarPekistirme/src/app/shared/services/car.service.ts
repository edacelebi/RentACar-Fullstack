import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = "http://localhost:3000"

  constructor(private httpClient:HttpClient) { }

  getAllCar():Observable<Car[]>{
    let newPath = this.apiUrl + '/cars'
    return this.httpClient.get<Car[]>(newPath)
  }
}
