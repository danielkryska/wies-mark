import { ProductsFiltersComponent } from './products-filters/products-filters.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MarketPage } from './market.page';
import { BarRatingModule } from 'ngx-bar-rating';

import { MarketPageRoutingModule } from './market-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MarketPageRoutingModule,
    BarRatingModule
  ],
  declarations: [
    MarketPage,
    ProductsFiltersComponent
  ]
})
export class MarketPageModule {}
