import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ThrillTracksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-thrill-tracks',
  templateUrl: 'thrill-tracks.html',
})
export class ThrillTracksPage {


  tracks3=["Too Good at Goodbyes  3:21", "Say It First  4:08",  "One Last Song  3:15",
  "Midnight Train 3:27", "Burning 3:23","HIM  3:10","Baby, You Make Me Crazy  3:28",
  "No Peace 4:43", "Palace  3:07", "Pray  3:42", "Nothing Left for You  3:47", 
  "The Thrill of It All 3:29"]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThrillTracksPage');
  }

}
