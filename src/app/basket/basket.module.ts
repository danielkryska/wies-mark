import { DeliveryTypesService } from './services/delivery-types.service';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import { BasketComponent } from './basket.component';
import { FormsModule } from '@angular/forms';
import { BasketProductComponent } from './basket-product/basket-product.component';
import { DeliveryTypeComponent } from './delivery-type/delivery-type.component';


@NgModule({
  declarations: [
    BasketComponent, 
    BasketProductComponent, 
    DeliveryTypeComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    BasketRoutingModule,
    FormsModule
  ],
  providers: [
    DeliveryTypesService
  ]
})
export class BasketModule { }
