import { SharedModule } from './../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesComponent } from './messages.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MessagesComponent],
  imports: [CommonModule, IonicModule, MessagesRoutingModule, SharedModule],
})
export class MessagesModule {}
