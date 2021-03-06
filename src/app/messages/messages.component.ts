import { ModalController } from '@ionic/angular';
import { MessagesService } from '@shared/services/messages.service';
import { Component, OnInit } from '@angular/core';
import { IConversation } from '@shared/models/message.model';
import { MessageComponent } from '@shared/components/message/message.component';
import { Router } from '@angular/router';

@Component({
  templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnInit {
  get conversations() {
    return this._messagesService.conversations;
  }

  constructor(
    private _messagesService: MessagesService,
    private _modalController: ModalController,
    private _router: Router
  ) {}

  ngOnInit() {
    this._router.events.subscribe(() => {
      if (this._router.url === '/zakladki/wiadomosci') {
        this.conversations
          .filter(conversation => !conversation.viewDate)
          .forEach(conversation => (conversation.viewDate = new Date().getTime()));
      }
    });
  }

  public lastMessage = (conversation: IConversation) =>
    !!conversation.messages[conversation.messages.length - 1] &&
    conversation.messages[conversation.messages.length - 1];
  public lastMessageTimeInMs = (conversation: IConversation) =>
    this.lastMessage(conversation).creationDate * 1000;
  public unreadCount = (conversation: IConversation): number =>
    conversation.messages.filter(message => !message.readDate && message.isResponse).length;
  openMessage = async (conversation: IConversation) => {
    const modal = await this._modalController.create({
      component: MessageComponent,
      componentProps: { conversation }
    });

    conversation.messages
      .filter(message => !message.readDate)
      .forEach(message => (message.readDate = new Date().getTime()));

    return await modal.present();
  };
}
