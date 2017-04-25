import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Location } from '../location/location';
import { Ph } from '../ph/ph';


/**
 * Generated class for the Location page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-size',
  templateUrl: 'size.html',
})
export class Size {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Size');
  }

  goBack(){
    this.navCtrl.pop();
  }

  next(){
    this.navCtrl.push(Ph);
  }
}
