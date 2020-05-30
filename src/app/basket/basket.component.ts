import { OrderHistoryService } from '@shared/services/order-history.service';
import { Router } from '@angular/router';
import { BasketService, IBasketSupplier, IBasketProduct } from '@shared/services/basket.service';
import { Component } from '@angular/core';

import * as _ from 'lodash';
import { MessagesService } from '@shared/services/messages.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent {
  get suppliers() {
    return this._basketService.basketSuppliers;
  }
  get isSummary() {
    return this._basketService.isSummary;
  }
  set isSummary(isSummary: boolean) {
    this._basketService.isSummary = isSummary;
  }
  get payment() {
    return this._basketService.payment;
  }
  get allSuppliersHasSetDeliveries() {
    return this._basketService.allSuppliersHasSetDeliveries;
  }
  get anyProduct() {
    return this.suppliers.some((supplier) => supplier.products.length > 0);
  }

  constructor(
    private _basketService: BasketService,
    private _messagesService: MessagesService,
    private _orderHistoryService: OrderHistoryService,
    private _router: Router
  ) {
    this._router.events.subscribe(() => {
      this._basketService.isSummary = false;
      if (this._router.url === '/zakladki/koszyk') {
        this._basketService.removeOutOfBasket();
      }
    });
  }

  anyProductOF = (supplier: IBasketSupplier) => supplier.products.some((product) => product.product.inBasket);

  order = () => {
    this._basketService.removeOutOfBasket();
    this._basketService.basketSuppliers.forEach((basketSupplier) => {
      const conversation = this._messagesService.getConversationBy(basketSupplier.name);
      this._messagesService.addMessage(this._orderAsMessage(basketSupplier), conversation);
    });
    this._orderHistoryService.add(
      ...this._basketService.productsInBasket.map((basketProduct) => basketProduct.product)
    );
    this._basketService.order();
    this._basketService.clear();
  };

  protected _orderAsMessage(supplier: IBasketSupplier) {
    let message = `
      Zamówienie

      Sposób dostawy:
      ${supplier.deliveryType.label}, ${supplier.deliveryType.price} ${supplier.deliveryType.currency}
    `;
    let sum = supplier.deliveryType.price;
    supplier.products.forEach((product: IBasketProduct) => {
      message += `
          ${product.product.title} x ${product.multiplication}, ${product.product.price * product.multiplication} ${
        product.product.currency
      }
        `;
      sum += product.product.price * product.multiplication;
    });
    message += `
      Podsumowanie: ${sum} ${supplier.products[0].product.currency}
    `;

    // TODO create addOrder method to messages service\
    return message;
  }
}
