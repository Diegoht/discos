import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MelodramaTracksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-melodrama-tracks',
  templateUrl: 'melodrama-tracks.html',
})
export class MelodramaTracksPage {

  tracks1=["Green Light 3:55","Sober 3:17", "Homemade Dynamite  3:09", 
  "The Louvre  4:31", "Liability 2:52]", "Hard Feelings/Loveless  6:07",
  "Sober II (Melodrama) 2:59", "Writer in the Dark  3:37", "Supercut  4:38", 
  "Liability (reprise)  2:16", "Perfect Places  3:42" ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MelodramaTracksPage');
  }

}
