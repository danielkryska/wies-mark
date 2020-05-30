import { ModalController } from '@ionic/angular';
import { Component, Input } from '@angular/core';
import { IDeliveryType, DeliveryTypesService } from '@shared/services/delivery-types.service';

@Component({
  selector: 'app-delivery-type',
  templateUrl: './delivery-type.component.html',
  styleUrls: ['./delivery-type.component.scss'],
})
export class DeliveryTypeComponent {
  @Input()
  set supplierName(supplierName: string) {
    this._deliveryTypesService
      .deliveryTypesBy$(supplierName)
      .subscribe((deliverTypes: IDeliveryType[]) => (this.deliveryTypes = deliverTypes));
  }

  public deliveryTypes: IDeliveryType[] = [];

  constructor(private _deliveryTypesService: DeliveryTypesService, private _modalController: ModalController) {}

  closeSelf = (data = null) => this._modalController.dismiss(data);
}
