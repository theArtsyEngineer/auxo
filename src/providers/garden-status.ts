import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
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
    /* return an array of plant objects that are in currGarden */
  }

  loadLocation(currGarden, user){
    /* return whether currGarden is indoors or outdoors */ 
  }

  loadRecomm(currGarden, user){
    /* return an array of suggested plant objects based on user's geolocation */
  }

  loadTasks(currGarden, user){
     /* return an array of task objects that need to be completed for all the user's gardens */
  }

}
