import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Size } from '../size/size';
import { Plants } from '../plants/plants';

/**
 * Generated class for the Ph page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-ph',
  templateUrl: 'ph.html',
})
export class Ph {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Ph');
  }

  goBack(){
    this.navCtrl.pop();
  }

  next(){
    this.navCtrl.push(Plants);
  }
}
