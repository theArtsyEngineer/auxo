import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

import { GardenStatus } from '../../providers/garden-status';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('doughnutCanvas') doughnutCanvas;

  moisture: any;
  notif: any[];
  recomm: any[];
  user: any;
  garden: any;
  moisture_level: any;
  
  constructor(public navCtrl: NavController, public gardenStatus: GardenStatus) {
  }

  ionViewDidLoad(){

    this.loadMoisture();
    this.loadTasks();

    //this.gardenStatus.loadMoisture(this.garden, this.user);
    this.gardenStatus.loadWeather(this.garden, this.user);
    this.gardenStatus.loadPh(this.garden, this.user);
    this.gardenStatus.loadPlants(this.garden, this.user);
    this.gardenStatus.loadLocation(this.garden, this.user);
    this.gardenStatus.loadRecomm(this.garden, this.user);
    this.gardenStatus.insertNewGarden(5, 3, [1,2], 0); // garden id, user id, array of plant ids, outside or inside
    this.gardenStatus.displayAllPlants();
  }

  loadMoisture() {
    this.moisture_level = this.gardenStatus.loadMoisture(this.garden, this.user);
    //var moisture_level = 0.70;

    this.moisture = new Chart(this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [this.moisture_level, 1 - this.moisture_level],
                    backgroundColor: ['#2DAAE1', 'transparent'],
                    borderWidth: [0,0]
                }]
            },
            options: {
              cutoutPercentage: 85,
            }
    });
  }

  /* dummy loads all the tasks for the current garden, will be deleted once
  real loadTasks method in garden-status provider is finished */
  loadTasks() {
    this.notif = [];

    this.notif.push({
        text: 'Test Task 1',
        type: 'garden'
    });

    this.notif.push({
      text: 'Test Task 2',
      type: 'garden'
    });

    this.notif.push({
      text: 'Test Task 3',
      type: 'garden'
    });
  }

  selectGarden(currGarden) {
    alert("Success")
  }

  startTask(task){

  }
}
