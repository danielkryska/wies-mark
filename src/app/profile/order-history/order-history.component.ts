import { Component } from '@angular/core';
import { OrderHistoryService } from '@shared/services/order-history.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html'
})
export class OrderHistoryComponent {
  get dateProducts() {
    return this._orderHistoryService.dateProducts;
  }

  constructor(private _orderHistoryService: OrderHistoryService) {}
}
