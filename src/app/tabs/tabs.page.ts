import { BasketService } from './../shared/services/basket.service';
import { MessagesService } from '@shared/services/messages.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html'
})
export class TabsPage {
  get hasUserVisitedMessages() {
    return this._messagesService.hasUserVisitedMessages;
  }
  get hasProducts() {
    return this._basketService.payment > 0;
  }
  get productsCount() {
    const productsCount = this._basketService.productsInBasket.length;
    return productsCount > 9 ? '9+' : productsCount;
  }

  constructor(private _messagesService: MessagesService, private _basketService: BasketService) {}
}
