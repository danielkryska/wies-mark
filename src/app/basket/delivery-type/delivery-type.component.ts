import { DeliveryTypesService, IDeliveryType } from './../services/delivery-types.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-delivery-type',
  templateUrl: './delivery-type.component.html',
  styleUrls: ['./delivery-type.component.scss']
})
export class DeliveryTypeComponent {
  @Input()
  set supplierName(supplierName: string) {
    this._deliveryTypesService.getDeliveryTypesBy(supplierName)
      .subscribe((deliverTypes: IDeliveryType[]) => this.deliveryTypes = deliverTypes);
  }

  public deliveryTypes: IDeliveryType[] = [];

  constructor(
    private _deliveryTypesService: DeliveryTypesService,
    private _modalController: ModalController
  ) {}

  closeSelf = (data = null) => this._modalController.dismiss(data);

}
