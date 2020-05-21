import { SharedModule } from '@shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import { BasketComponent } from './basket.component';
import { FormsModule } from '@angular/forms';
import { BasketProductComponent } from './basket-product/basket-product.component';
import { DeliveryTypeComponent } from './delivery-type/delivery-type.component';
import { SupplierProductsComponent } from './supplier-products/supplier-products.component';


@NgModule({
  declarations: [
    BasketComponent,
    BasketProductComponent,
    DeliveryTypeComponent,
    SupplierProductsComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    BasketRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class BasketModule { }
