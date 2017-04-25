import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pair } from '../pair/pair';

/**
 * Generated class for the Location page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class Place {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Place');
  }

  goBack(){
    this.navCtrl.pop();
  }
}
