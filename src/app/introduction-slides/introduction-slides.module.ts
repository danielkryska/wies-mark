import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroductionSlidesPage } from './introduction-slides.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [IntroductionSlidesPage],
})
export class IntroductionSlidesPageModule {}
