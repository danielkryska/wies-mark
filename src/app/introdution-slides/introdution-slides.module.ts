import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntrodutionSlidesPageRoutingModule } from './introdution-slides-routing.module';

import { IntrodutionSlidesPage } from './introdution-slides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntrodutionSlidesPageRoutingModule
  ],
  declarations: [IntrodutionSlidesPage]
})
export class IntrodutionSlidesPageModule {}
