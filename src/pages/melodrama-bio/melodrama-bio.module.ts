import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MelodramaBioPage } from './melodrama-bio';

@NgModule({
  declarations: [
    MelodramaBioPage,
  ],
  imports: [
    IonicPageModule.forChild(MelodramaBioPage),
  ],
})
export class MelodramaBioPageModule {}
