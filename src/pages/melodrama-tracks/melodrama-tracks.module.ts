import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MelodramaTracksPage } from './melodrama-tracks';

@NgModule({
  declarations: [
    MelodramaTracksPage,
  ],
  imports: [
    IonicPageModule.forChild(MelodramaTracksPage),
  ],
})
export class MelodramaTracksPageModule {}
