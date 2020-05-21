import { MessageComponent } from '@shared/components/message/message.component';
import { ModalController } from '@ionic/angular';
import { IMessagesGroup } from '@shared/models/message.model';
import { IUser } from '@shared/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';

@Injectable({ providedIn: 'root' })
export class MessagesService {
  public messagesGroups: IMessagesGroup[] = [];

  get hasNewReceived() {
    return this.messagesGroups
      .some(messagesGroup => messagesGroup.messages
        .some(message => !message.readDate && message.isResponse)
      );
  }

  constructor(
    private _http: HttpClient,
    private _modalController: ModalController
  ) {
    // TODO Load group messages and load message pages
    this.loadMessages();
  }

  // TODO API /messages/:messageID/:page
  public get$ = (messageID: string, page = 0) => this._http.get<IMessagesGroup[]>(`${environment.API_URL}/messages`);

  public loadMessages = () => this.get$(null)
    .subscribe(messagesGroups => this.messagesGroups = messagesGroups)

  public lastMessage = (messagesGroup: IMessagesGroup) => !!messagesGroup.messages[0] && messagesGroup.messages[0];
  public lastMessageTimeInMs = (messagesGroup: IMessagesGroup) => this.lastMessage(messagesGroup).creationDate * 1000;
  public unreadCount = (messagesGroup: IMessagesGroup): number => messagesGroup.messages
    .filter(message => !message.readDate && message.isResponse)
    .length

  public addMessage = (message: string, messagesGroup: IMessagesGroup) => messagesGroup.messages
    .push({
      creationDate: (new Date()).getTime(),
      content: message
    })

  public async openMessage(messagesGroup: IMessagesGroup | null) {
    const modal = await this._modalController.create({
      component: MessageComponent,
      componentProps: { messagesGroup }
    });

    messagesGroup.messages
      .filter(message => !message.readDate)
      .forEach(message => message.readDate = (new Date()).getTime());

    return await modal.present();
  }
}
