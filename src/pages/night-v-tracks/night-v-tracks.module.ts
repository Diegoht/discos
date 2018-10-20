import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NightVTracksPage } from './night-v-tracks';

@NgModule({
  declarations: [
    NightVTracksPage,
  ],
  imports: [
    IonicPageModule.forChild(NightVTracksPage),
  ],
})
export class NightVTracksPageModule {}
