import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DivideTracksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-divide-tracks',
  templateUrl: 'divide-tracks.html',
})
export class DivideTracksPage {

  tracks2=["Eraser  3:48", "Castle on the Hill  4:21", "Dive  3:59",
  "Shape of You 3:54","Perfect  4:23","Galway Girl  2:48","Happier  3:28",
  "NewMan 3:09", "Hearts Don't Break Around Here  4:09","What Do I Know?  3:57",  
  "How Would You Feel?  4:41","Supermarket Flowers  3:41", "(Deluxe) Barcelona  3:11",
  "(Deluxe) Bibia Be Ye Ye  2:57","(Deluxe)Nancy Mulligan 3:00", "(Deluxe) Save Myself  4:07"];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DivideTracksPage');
  }

}
