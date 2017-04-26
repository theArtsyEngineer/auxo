import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import { Chart } from 'chart.js';
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
// todo make user object
  
  constructor(public http: Http) {
    //Put completed load methods with get requests in here
  }

/**
 * Returns the moisture reading from the sensor.
 */
  loadMoisture(currGarden, user){
    /* return a soil moisture percentage converted to decimal */
    var link = 'http://34.207.150.80:8080/moisture';
    var headers = new Headers({ 'Content-Type': 'application/json' });
    var options = new RequestOptions({ headers: headers });

    this.http.post(link, null, options)
      .subscribe(
        data => {
          console.log("MOISTURE DATA: ");
          console.log(data);
        },
        error => {
        console.log("couldn't get moisture reading");
      });
  };

/**
 * Returns the current weather condition of a user's city.
 */
  loadWeather(currGarden, user){
    /* return whether its sunny, cloudy, partly cloudy, raining, or windy */
    var link = 'http://34.207.150.80:8080/weather';
    var headers = new Headers({ 'Content-Type': 'application/json' });
    var options = new RequestOptions({ headers: headers });
    var body = JSON.stringify({ zipcode: "08901" });

    this.http.post(link, body, options)
      .subscribe(
        data => {
          console.log("WEATHER DATA: ");
          console.log(data);
        },
        error => {
        console.log("couldn't get weather");
      });
  };

/**
 * Returns the pH of the user's soil.
 */
  loadPh(currGarden, user){
    /* return ph value from database that was inputted by user*/
    var link = 'http://34.207.150.80:8080/gardenph';
    var headers = new Headers({ 'Content-Type': 'application/json' });
    var options = new RequestOptions({ headers: headers });
    var body = JSON.stringify({ user: "1" });

    this.http.post(link, body, options)
      .subscribe(
        data => {
          console.log("PH DATA: ");
          console.log(data);
        },
        error => {
        console.log("couldn't get user's garden ph");
      });
  };

/**
 * Returns the plants in the currently selected garden.
 */
  loadPlants(currGarden, user){
    /* return an array of plants that are in currGarden */

    // TODO: doesnt work on server side yet
    var link = 'http://34.207.150.80:8080/garden';
    var headers = new Headers({ 'Content-Type': 'application/json' });
    var options = new RequestOptions({ headers: headers });
    var body = JSON.stringify({ garden: "1" });

    this.http.post(link, body, options)
      .subscribe(
        data => {
          console.log("PLANTS IN GARDEN: ");
          console.log(data);
        },
        error => {
        console.log("couldn't get user's garden");
      });
  };

/**
 * Returns the location of the currently selected garden.
 */
  loadLocation(currGarden, user){
    var link = 'http://34.207.150.80:8080/gardenlocation';
    var headers = new Headers({ 'Content-Type': 'application/json' });
    var options = new RequestOptions({ headers: headers });
    var body = JSON.stringify({ garden: "1" });

    this.http.post(link, body, options)
      .subscribe(
        data => {
          console.log("PLANT LOCATION DATA: ");
          console.log(data);
        },
        error => {
        console.log("couldn't get user's garden ph");
      });
  };

/**
 * Returns a list of plants that can be grown in a user's city.
 */
  loadRecomm(currGarden, user){
    /* return an array of suggested plants based on user's geolocation */

    var link = 'http://34.207.150.80:8080/dashboard';
    var headers = new Headers({ 'Content-Type': 'application/json' });
    var options = new RequestOptions({ headers: headers });
    var body = JSON.stringify({ zipcode: "08901" });

    this.http.post(link, body, options)
      .subscribe(
        data => {
          console.log("PLANT RECOMMENDATIONS: ");
          console.log(data);
        },
        error => {
        console.log("couldn't get plant recommendation");
      });
  };

  loadTasks(currGarden, user){
     /* return an array of tasks that need to be completed for all the user's gardens */
  };

}