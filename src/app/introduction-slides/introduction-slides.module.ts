import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroductionSlidesPageRoutingModule } from './introduction-slides-routing.module';

import { IntroductionSlidesPage } from './introduction-slides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroductionSlidesPageRoutingModule
  ],
  declarations: [IntroductionSlidesPage]
})
export class IntroductionSlidesPageModule {}
