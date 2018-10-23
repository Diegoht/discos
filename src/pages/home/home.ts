import { HowToSaveReviewPage } from './../how-to-save-review/how-to-save-review';
import { HowToSaveTracksPage } from './../how-to-save-tracks/how-to-save-tracks';
import { HowToSaveBioPage } from './../how-to-save-bio/how-to-save-bio';
import { HowToSaveCoverPage } from './../how-to-save-cover/how-to-save-cover';
import { NightVReviewPage } from './../night-v-review/night-v-review';
import { NightVTracksPage } from './../night-v-tracks/night-v-tracks';
import { NightVBioPage } from './../night-v-bio/night-v-bio';
import { NightVCoverPage } from './../night-v-cover/night-v-cover';
import { ThrillReviewPage } from './../thrill-review/thrill-review';
import { ThrillTracksPage } from './../thrill-tracks/thrill-tracks';
import { ThrillCoverPage } from './../thrill-cover/thrill-cover';
import { MelodramaReviewPage } from './../melodrama-review/melodrama-review';
import { MelodramaTracksPage } from './../melodrama-tracks/melodrama-tracks';
import { MelodramaCoverPage } from './../melodrama-cover/melodrama-cover';
import { DivideReviewPage } from './../divide-review/divide-review';
import { DivideTracksPage } from './../divide-tracks/divide-tracks';
import { DivideBioPage } from './../divide-bio/divide-bio';
import { DivideCoverPage } from './../divide-cover/divide-cover';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MelodramaBioPage } from '../melodrama-bio/melodrama-bio';
import { ThrillBioPage } from '../thrill-bio/thrill-bio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  foto1=MelodramaCoverPage;
  artist1=MelodramaBioPage;
  tracks1=MelodramaTracksPage;
  cosas1=MelodramaReviewPage;

  foto2=DivideCoverPage;
  artist2=DivideBioPage;
  tracks2=DivideTracksPage;
  cosas2=DivideReviewPage;

  foto3=ThrillCoverPage;
  artist3=ThrillBioPage;
  tracks3=ThrillTracksPage;
  cosas3=ThrillReviewPage;

  foto4=NightVCoverPage;
  artist4=NightVBioPage;
  tracks4=NightVTracksPage;
  cosas4=NightVReviewPage;

  foto5=HowToSaveCoverPage;
  artist5=HowToSaveBioPage;
  tracks5=HowToSaveTracksPage;
  cosas5=HowToSaveReviewPage;

  constructor(public navCtrl: NavController) {

  }

  imagen1(){
    this.navCtrl.push(this.foto1);
  }
  artista1(){
    this.navCtrl.push(this.artist1);
  }
  canciones1(){
    this.navCtrl.push(this.tracks1);
  }
  comments1(){
    this.navCtrl.push(this.cosas1);
  }

  imagen2(){
    this.navCtrl.push(this.foto2);
  }
  artista2(){
    this.navCtrl.push(this.artist2);
  }
  canciones2(){
    this.navCtrl.push(this.tracks2);
  }
  comments2(){
    this.navCtrl.push(this.cosas2);
  }

  imagen3(){
    this.navCtrl.push(this.foto3);
  }
  artista3(){
    this.navCtrl.push(this.artist3);
  }
  canciones3(){
    this.navCtrl.push(this.tracks3);
  }
  comments3(){
    this.navCtrl.push(this.cosas3);
  }

  imagen4(){
    this.navCtrl.push(this.foto4);
  }
  artista4(){
    this.navCtrl.push(this.artist4);
  }
  canciones4(){
    this.navCtrl.push(this.tracks4);
  }
  comments4(){
    this.navCtrl.push(this.cosas4);
  }

  imagen5(){
    this.navCtrl.push(this.foto5);
  }
  artista5(){
    this.navCtrl.push(this.artist5);
  }
  canciones5(){
    this.navCtrl.push(this.tracks5);
  }
  comments5(){
    this.navCtrl.push(this.cosas5);
  }

}
