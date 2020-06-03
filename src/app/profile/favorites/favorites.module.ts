import { IonicModule } from '@ionic/angular';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';

@NgModule({
  declarations: [FavoritesComponent],
  imports: [CommonModule, IonicModule, FavoritesRoutingModule, SharedModule],
})
export class FavoritesModule {}
