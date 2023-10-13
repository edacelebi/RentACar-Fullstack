import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/features/car/models/car';
import { CarsAbstractService } from '../../services/abstracts/cars-abstract.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{

  cars:Car[];
  showInfo: boolean[];
  textFilter:string

  constructor(private activatedRoute:ActivatedRoute,
              private carAbstractService:CarsAbstractService){
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params) => {

      if (params['id']) {
        console.log(params['id'])
        this.getCarByBrandId(params['id']);
      } else {
        this.getCars();
      }
      
    });
  }

  getCars() {
    this.carAbstractService.getCarList().subscribe((response) => {
      this.cars = response;
    });
  }

  getCarByBrandId(brandId:number){
    this.carAbstractService.getBrandById(brandId).subscribe(response =>{
      this.cars = response
      console.log(response)
    })
  }


  // tikla(){
  //   this.router.navigate(['eda']);
  // }

}
