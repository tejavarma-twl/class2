import { Component } from '@angular/core';

import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myCar = ""
  carlist = [];

  constructor(private myservice: CommonService){

  }

  getTheCarName(val){
    this.myCar = val.target.value;
  }

  addCartoList(){
    this.myservice.cars.push(this.myCar);
    this.carlist = this.myservice.cars;
    // this.carlist = this.myservice.getTheCarsList();
  }


}
