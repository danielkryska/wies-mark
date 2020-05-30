import { IonicModule } from '@ionic/angular';
import { SharedModule } from '@shared/shared.module';
import { OrderHistoryComponent } from './order-history.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderHistoryRoutingModule } from './order-history-routing.module';

@NgModule({
  declarations: [OrderHistoryComponent],
  imports: [CommonModule, IonicModule, OrderHistoryRoutingModule, SharedModule],
})
export class OrderHistoryModule {}
