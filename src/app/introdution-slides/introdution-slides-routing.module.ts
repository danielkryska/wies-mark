import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntrodutionSlidesPage } from './introdution-slides.page';

const routes: Routes = [
  {
    path: '',
    component: IntrodutionSlidesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntrodutionSlidesPageRoutingModule {}
