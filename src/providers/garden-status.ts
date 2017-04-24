import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Chart } from 'chart.js';
import 'rxjs/add/operator/map';

/*
  Generated class for the GardenStatus provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GardenStatus {

  moisture: any;
  weather: any;
  ph: any;
  plants: any[];
  location: any;
  recomm: any[];

  tasks: any[];

  /*
  constructor(public http: Http) {
    //Put completed load methods with get requests in here
  }
  */

  loadMoisture(currGarden, user){
    /* return a soil moisture percentage converted to decimal */
  }

  loadWeather(currGarden, user){
    /* return whether its sunny, cloudy, partly cloudy, raining, or windy */
  }

  loadPh(currGarden, user){
    /* return ph value from database that was inputted by user*/
  }

  loadPlants(currGarden, user){
    /* return an array of plants that are in currGarden */
  }

  loadLocation(currGarden, user){
    /* return whether currGarden is indoors or outdoors */ 
  }

  loadRecomm(currGarden, user){
    /* return an array of suggested plants based on user's geolocation */
  }

  loadTasks(currGarden, user){
     /* return an array of tasks that need to be completed for all the user's gardens */
  }

}
