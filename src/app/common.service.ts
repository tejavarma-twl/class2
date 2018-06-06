import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  cars = [];

  constructor() { }

  getTheCarsList(){
    return this.cars;
    // console.log(this.cars);
  }

}
