import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/shared/models/model';
import { ModelService } from 'src/app/shared/services/model.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit{
  models:Model[]

  constructor(private modelService:ModelService){

  }
  ngOnInit(): void {
    this.getAllModel()
  }

  getAllModel(){
    this.modelService.getAllModel().subscribe(response =>{
      this.models = response
    })
  }

}
