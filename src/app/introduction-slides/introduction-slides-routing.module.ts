import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroductionSlidesPage } from './introduction-slides.page';

const routes: Routes = [
  {
    path: '',
    component: IntroductionSlidesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroductionSlidesPageRoutingModule {}
