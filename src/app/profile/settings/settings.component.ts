import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {
  constructor(private _router: Router, private _alertController: AlertController) {}

  ngOnInit() {}

  async removeAccount() {
    const alert = await this._alertController.create({
      cssClass: 'my-custom-class',
      header: 'Usunięcie konta',
      message: 'Jesteś pewien, że chcesz usunąć konto?',
      buttons: [
        {
          text: 'Usuń',
          cssClass: 'non-navigate-color',
          handler: () => {
            // TODO: Remove account
            // this._router.navigateByUrl('/login');
          }
        },
        {
          text: 'Wróć',
          role: 'cancel',
          cssClass: 'navigate-color'
        }
      ]
    });

    await alert.present();
  }
}
