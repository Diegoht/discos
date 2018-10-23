import { HowToSaveTracksPage } from './../pages/how-to-save-tracks/how-to-save-tracks';
import { HowToSaveReviewPage } from './../pages/how-to-save-review/how-to-save-review';
import { HowToSaveBioPage } from './../pages/how-to-save-bio/how-to-save-bio';
import { HowToSaveCoverPage } from './../pages/how-to-save-cover/how-to-save-cover';
import { NightVTracksPage } from './../pages/night-v-tracks/night-v-tracks';
import { NightVReviewPage } from './../pages/night-v-review/night-v-review';
import { NightVBioPage } from './../pages/night-v-bio/night-v-bio';
import { NightVCoverPage } from './../pages/night-v-cover/night-v-cover';
import { ThrillTracksPage } from './../pages/thrill-tracks/thrill-tracks';
import { ThrillReviewPage } from './../pages/thrill-review/thrill-review';
import { ThrillBioPage } from './../pages/thrill-bio/thrill-bio';
import { ThrillCoverPage } from './../pages/thrill-cover/thrill-cover';
import { MelodramaTracksPage } from './../pages/melodrama-tracks/melodrama-tracks';
import { MelodramaReviewPage } from './../pages/melodrama-review/melodrama-review';
import { MelodramaCoverPage } from './../pages/melodrama-cover/melodrama-cover';
import { DivideTracksPage } from './../pages/divide-tracks/divide-tracks';
import { DivideReviewPage } from './../pages/divide-review/divide-review';
import { DivideBioPage } from './../pages/divide-bio/divide-bio';
import { DivideCoverPage } from './../pages/divide-cover/divide-cover';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MelodramaBioPage } from '../pages/melodrama-bio/melodrama-bio';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DivideCoverPage,
    DivideBioPage,
    DivideReviewPage,
    DivideTracksPage,
    MelodramaCoverPage,
    MelodramaBioPage,
    MelodramaReviewPage,
    MelodramaTracksPage,
    ThrillCoverPage,
    ThrillBioPage,
    ThrillReviewPage,
    ThrillTracksPage,
    NightVCoverPage,
    NightVBioPage,
    NightVReviewPage,
    NightVTracksPage,
    HowToSaveCoverPage,
    HowToSaveBioPage,
    HowToSaveReviewPage,
    HowToSaveTracksPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DivideCoverPage,
    DivideBioPage,
    DivideReviewPage,
    DivideTracksPage,
    MelodramaCoverPage,
    MelodramaBioPage,
    MelodramaReviewPage,
    MelodramaTracksPage,
    ThrillCoverPage,
    ThrillBioPage,
    ThrillReviewPage,
    ThrillTracksPage,
    NightVCoverPage,
    NightVBioPage,
    NightVReviewPage,
    NightVTracksPage,
    HowToSaveCoverPage,
    HowToSaveBioPage,
    HowToSaveReviewPage,
    HowToSaveTracksPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
