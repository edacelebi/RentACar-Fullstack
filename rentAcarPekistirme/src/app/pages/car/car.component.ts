import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/shared/models/car';
import { CarService } from 'src/app/shared/services/car.service';
import { CarMockService } from 'src/app/shared/services/mock-services/concretes/car-mock.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{

  cars:Car[];
  showInfo: boolean[];

  constructor(private carServise:CarService,
              private router:Router,
              private carMockService:CarMockService,
              private activatedRoute:ActivatedRoute){

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getCarsByBrand2(params['id']);
      } else {
        this.getCars();
      }
    });
    
  }

  getCars() {
    this.carMockService.getCars().subscribe((response) => {
      this.cars = response;
      this.initializeShowInfoArray();
    });
  }

  getCarsByBrand2(id: number) {
    this.carMockService.getBrandById(id).subscribe((response) => {
      this.cars = response;
      this.initializeShowInfoArray();
    });
  }

  // tikla(){
  //   this.router.navigate(['eda']);
  // }

  initializeShowInfoArray() {
    this.showInfo = Array(this.cars.length).fill(false);
  }
}
