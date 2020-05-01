import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'jarmark',
        loadChildren: () => import('../market/market.module').then(m => m.MarketPageModule)
      },
      { 
        path: 'koszyk', 
        loadChildren: () => import('../basket/basket.module').then(m => m.BasketModule)
      },
      {
        path: '',
        redirectTo: 'jarmark',
        pathMatch: 'full'
      },
      { 
        path: 'szukaj',
        loadChildren: () => import('../search/search.module').then(m => m.SearchModule)
      },
      { 
        path: 'profil',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule)
      },
      { 
        path: 'ulubione',
        loadChildren: () => import('../favorites/favorites.module').then(m => m.FavoritesModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: 'zakladki/jarmark',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
