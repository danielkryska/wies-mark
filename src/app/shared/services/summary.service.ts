import { ISuppliersDeliveryTypes, IDeliveryType } from './delivery-types.service';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class SummaryService {
  public suppliersDeliveryTypes: ISuppliersDeliveryTypes = {};
  public isSummary = false;

  get hasAllDeliveryTypes() {
    return true;
  }
  public get deliveryPaymentSum() {
    return Object.values(this.suppliersDeliveryTypes)
      .reduce((sum, deliveryType) => sum += deliveryType.price, 0);
  }

  constructor(
    private _toastController: ToastController,
    private _router: Router
  ) {}

  setDeliveryType(supplierName: string, deliveryType: IDeliveryType) {
    this.suppliersDeliveryTypes[supplierName] = deliveryType;
  }

  public async order() {
    // TOOD initialize basket
    this._router.navigateByUrl('zakladki/jarmark');
    const toast = await this._toastController.create({
      color: 'success',
      duration: 2000,
      message: 'Twoje zamówienie zostało złożone',
      position: 'top'
    });

    await toast.present();
  }
}
