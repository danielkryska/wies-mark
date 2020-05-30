import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
  },
  {
    path: 'ulubione',
    loadChildren: () => import('./favorites/favorites.module').then((m) => m.FavoritesModule),
  },
  {
    path: 'historia-zamowien',
    loadChildren: () => import('./order-history/order-history.module').then((m) => m.OrderHistoryModule),
  },
  {
    path: 'dodaj-produkt',
    loadChildren: () => import('./add-product/add-product.module').then((m) => m.AddProductModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
