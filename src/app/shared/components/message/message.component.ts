import { ModalController } from '@ionic/angular';
import { MessagesService } from '@shared/services/messages.service';
import { Component, Input } from '@angular/core';
import { IConversation } from '@shared/models/message.model';

import * as _ from 'lodash';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html'
})
export class MessageComponent {
  @Input() conversation: IConversation;

  public messageValue = '';
  get isLastMessageOffer() {
    const lastMessage =
      (!!this.conversation.messages &&
        this.conversation.messages[this.conversation.messages.length - 1]) ||
      null;
    return !!lastMessage && !!lastMessage.isOffer;
  }

  constructor(
    private _messagesService: MessagesService,
    private _modalController: ModalController
  ) {}

  accept = () => {
    this._messagesService.addMessage('Z przyjemnością spełnie P. zamówienie', this.conversation);
  };
  reject = () => {
    this._messagesService.addMessage(
      'Nie jestem w stanie przyjąć P. zamówienia',
      this.conversation
    );
  };
  addNew = () => {
    if (this.messageValue.trim() === '') {
      return;
    }

    this._messagesService.addMessage(this.messageValue, this.conversation);
    this.messageValue = '';
  };
  closeSelf = () => {
    if (this.conversation.messages.length === 0) {
      _.remove(this._messagesService.conversations, this.conversation);
    }
    this._modalController.dismiss();
  };
}
