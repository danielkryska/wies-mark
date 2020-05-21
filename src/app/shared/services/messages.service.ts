import { IMessagesGroup } from '@shared/models/message.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';

@Injectable({ providedIn: 'root' })
export class MessagesService {
  public conversations: IMessagesGroup[] = [];

  get hasNewReceived() {
    return this.conversations
      .some(conversation => conversation.messages
        .some(message => !message.readDate && message.isResponse)
      );
  }
  get hasUserVisitedMessages() {
    return this.conversations
      .some(conversation => !conversation.viewDate);
  }

  constructor(private _http: HttpClient) {
    // TODO Load group messages and load message pages
    this.getMessagesGroups$()
      .subscribe((conversations) => this.conversations = conversations);
  }

  public getMessagesGroups$ = () => this._http.get<IMessagesGroup[]>(`${environment.API_URL}/messages`);
  // TODO API /messages/:messageID/:page
  public getMessagesPage$ = (groupMessageID: string, page = 0) => this._http.get<IMessagesGroup[]>(`${environment.API_URL}/messages`);

  public addMessage = (message: string, conversation: IMessagesGroup) => {
    conversation.messages
    .push({
      creationDate: (new Date()).getTime(),
      content: message
    });

    if (!this.conversations.some(existingConversation => existingConversation.user.name === conversation.user.name)) {
      this.conversations.unshift(conversation);
    }
  }
}
