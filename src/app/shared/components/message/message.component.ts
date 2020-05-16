import { ModalController } from '@ionic/angular';
import { MessagesService } from '@shared/services/messages.service';
import { Component, Input } from '@angular/core';
import { IMessagesGroup } from '@shared/models/message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Input() messagesGroup: IMessagesGroup;

  public messageValue = '';

  constructor(
    private _messagesService: MessagesService,
    private _modalController: ModalController
  ) {}

  addNew = () => {
    this._messagesService.addMessage(this.messageValue, this.messagesGroup)
    this.messageValue = '';
  }
  closeSelf = () => this._modalController.dismiss();
}
