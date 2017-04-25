import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Size } from '../size/size';

/**
 * Generated class for the Location page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class Location {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Location');
  }

  selectOut(){

  }

  selectIn(){
    
  }

  goBack(){
    this.navCtrl.pop();
  }

  next(){
    this.navCtrl.push(Size);
  }
}
