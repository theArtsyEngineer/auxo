import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { GardenSetup } from '../gardenSetup/gardenSetup';

@Component({
  selector: 'page-gardenModal',
  templateUrl: 'gardenModal.html'
})
export class GardenModal {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {}

  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }

  addGarden() {
    this.navCtrl.push(GardenSetup);
  }

}
