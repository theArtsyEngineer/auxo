import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Ph } from '../ph/ph';
import { Pair } from '../pair/pair';

/**
 * Generated class for the Plants page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-plants',
  templateUrl: 'plants.html',
})
export class Plants {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Plants');
  }

  goBack(){
    this.navCtrl.pop();
  }

  next(){
    this.navCtrl.push(Pair);
  }
}
