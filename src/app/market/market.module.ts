import { SharedModule } from '@shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MarketPage } from './market.page';

import { MarketPageRoutingModule } from './market-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, MarketPageRoutingModule, SharedModule],
  declarations: [MarketPage],
})
export class MarketPageModule {}
