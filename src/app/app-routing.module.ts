import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'zakladki',
    pathMatch: 'full'
  },
  // {
  //   path: '',
  //   loadChildren: () => import('./introduction-slides/introduction-slides.module').then( m => m.IntroductionSlidesPageModule)
  // },
  {
    path: 'zakladki',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}