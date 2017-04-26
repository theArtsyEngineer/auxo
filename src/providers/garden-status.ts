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
          var moisture = JSON.parse(data['_body']).moisture;

          if (moisture == -1) {
            moisture = 0;
          }
          else {
            moisture = (moisture/4095).toFixed(3);
          }

          console.log(moisture);

          return moisture;
        },
        error => {
        console.log("couldn't get moisture reading");

        return 0;
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
          
          var weather = JSON.parse(data['_body']).weather;
          console.log(weather);

          return weather;
        },
        error => {
        console.log("couldn't get weather");

        return null;
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

          var ph = JSON.parse(data['_body']).ph;
          console.log(ph);

          return ph;
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
    var link = 'http://34.207.150.80:8080/garden';
    var headers = new Headers({ 'Content-Type': 'application/json' });
    var options = new RequestOptions({ headers: headers });
    var body = JSON.stringify({ garden: "1" });

    this.http.post(link, body, options)
      .subscribe(
        data => {
          console.log("PLANTS IN GARDEN: ");

          var plants = JSON.parse(data['_body']).plants;

          console.log(plants);
          return plants;
        },
        error => {
        console.log("couldn't get user's garden");

        return null;
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

          if (data != null)
          {
            var location = JSON.parse(data['_body']).location;
          }
          
          console.log(location);

          return location; // True means the garden is outside, false means it is inside
        },
        error => {
        console.log("couldn't get user's garden ph");

        return false;
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

          var plants = JSON.parse(data['_body']).data;
          console.log(plants);

          return plants;
        },
        error => {
        console.log("couldn't get plant recommendation");
        return null;
      });
  };

  loadTasks(currGarden, user){
     /* return an array of tasks that need to be completed for all the user's gardens */
  };

  // Inserts a new garden record into the database
  insertNewGarden(gardenID, userID, plantIDArray, location){
    var link = 'http://34.207.150.80:8080/gardeninsert';
    var headers = new Headers({ 'Content-Type': 'application/json' });
    var options = new RequestOptions({ headers: headers });
    var body = JSON.stringify({
       garden: gardenID,
       user: userID,
       plants: plantIDArray,
       location: location // 0 means outside, 1 means inside
      });

    this.http.post(link, body, options)
      .subscribe(
        data => {
          console.log("INSERT NEW GARDEN STATUS: ");
          console.log(data);
        },
        error => {
        console.log("couldn't insert new garden into database");
      });
  };

  displayAllPlants(){
    var link = 'http://34.207.150.80:8080/plantlist';
    var headers = new Headers({ 'Content-Type': 'application/json' });
    var options = new RequestOptions({ headers: headers });


    this.http.post(link, null, options)
      .subscribe(
        data => {
          console.log("ENTIRE PLANT LIST: ");

          var plants = JSON.parse(data['_body']).data;
          console.log(plants);

          return plants
        },
        error => {
        console.log("couldn't get entire plant list");
        
        return null;
      });
  };


}