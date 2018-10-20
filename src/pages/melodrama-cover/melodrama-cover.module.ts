import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MelodramaCoverPage } from './melodrama-cover';

@NgModule({
  declarations: [
    MelodramaCoverPage,
  ],
  imports: [
    IonicPageModule.forChild(MelodramaCoverPage),
  ],
})
export class MelodramaCoverPageModule {}
