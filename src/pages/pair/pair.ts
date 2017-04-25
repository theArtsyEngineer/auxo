import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GardenSetup } from '../gardenSetup/gardenSetup';
import { Plants } from '../plants/plants';
import { Place } from '../place/place';

/**
 * Generated class for the Location page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-pair',
  templateUrl: 'pair.html',
})
export class Pair {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Place');
  }

  goBack(){
    this.navCtrl.pop();
  }

  next(){
    this.navCtrl.push(Place);
  }
}
