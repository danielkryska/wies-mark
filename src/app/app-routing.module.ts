import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '@shared/components/product/product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'zakladki',
    pathMatch: 'full'
  },
  {
    path: 'zakladki',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
