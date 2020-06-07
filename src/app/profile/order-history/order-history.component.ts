import { Component } from '@angular/core';
import { OrderHistoryService } from '@shared/services/order-history.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html'
})
export class OrderHistoryComponent {
  get products() {
    return this._orderHistoryService.products;
  }

  constructor(private _orderHistoryService: OrderHistoryService) {}
}
