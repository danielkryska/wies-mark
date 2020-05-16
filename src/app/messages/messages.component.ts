import { MessagesService } from '@shared/services/messages.service';
import { Component } from '@angular/core';
import { IMessagesGroup } from '@shared/models/message.model';

@Component({
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  get messagesGroups() {
    return this._messagesService.messagesGroups;
  }

  constructor(private _messagesService: MessagesService) {}

  lastMessage = (messagesGroup: IMessagesGroup) => this._messagesService.lastMessage(messagesGroup);
  lastMessageTimeInMs = (messagesGroup: IMessagesGroup) => this._messagesService.lastMessageTimeInMs(messagesGroup);
  unreadCount = (messagesGroup: IMessagesGroup) => this._messagesService.unreadCount(messagesGroup);
  openMessage = (messagesGroup: IMessagesGroup) => this._messagesService.openMessage(messagesGroup);
}
