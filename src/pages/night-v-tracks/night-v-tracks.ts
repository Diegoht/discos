import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NightVTracksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-night-v-tracks',
  templateUrl: 'night-v-tracks.html',
})
export class NightVTracksPage {

  tracks4=["Radioactive 3:07","Tiptoe 3:14","It's Time  4:00","Demons 2:56",
  "On Top Of The World  3:11", "Amsterdam 4:01","Hear Me  3:55","Every Night  3:37",
  "Bleeding Out 3:43", "Underdog  3:29",  "Nothing Left to Say/Rocks  8:57",
  "Working Man  3:55",  "Fallen 2:59"]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NightVTracksPage');
  }

}
