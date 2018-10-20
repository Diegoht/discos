import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThrillTracksPage } from './thrill-tracks';

@NgModule({
  declarations: [
    ThrillTracksPage,
  ],
  imports: [
    IonicPageModule.forChild(ThrillTracksPage),
  ],
})
export class ThrillTracksPageModule {}
