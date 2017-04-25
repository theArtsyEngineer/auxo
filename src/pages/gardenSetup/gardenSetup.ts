import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Location } from '../location/location';

@Component({
  selector: 'page-gardenSetup',
  templateUrl: 'gardenSetup.html',
})
export class GardenSetup {

  constructor(public navCtrl: NavController) {
  }

  next(){
    this.navCtrl.push(Location);
  }
}
