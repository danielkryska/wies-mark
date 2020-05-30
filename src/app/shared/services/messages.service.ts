import { map } from 'rxjs/operators';
import { IConversation } from '@shared/models/message.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';

@Injectable({ providedIn: 'root' })
export class MessagesService {
  public conversations: IConversation[] = [];

  get hasNewReceived() {
    return this.conversations.some((conversation) =>
      conversation.messages.some((message) => !message.readDate && message.isResponse)
    );
  }
  get hasUserVisitedMessages() {
    return this.conversations.some((conversation) => !conversation.viewDate);
  }

  constructor(private _http: HttpClient) {
    // TODO Load group messages and load message pages
    this.getMessagesGroups$().subscribe((conversations) => (this.conversations = conversations));
  }

  public getMessagesGroups$ = () =>
    this._http.get<IConversation[]>(`${environment.API_URL}`).pipe(map((data: any) => data.messages));
  // TODO API /messages/:messageID/:page
  public getMessagesPage$ = (groupMessageID: string, page = 0) =>
    this._http.get<IConversation[]>(`${environment.API_URL}`).pipe((data: any) => data.messages);

  public addMessage = (message: string, conversation: IConversation) => {
    conversation.messages.push({
      creationDate: new Date().getTime(),
      content: message,
    });

    if (!this.conversations.some((existingConversation) => existingConversation.user.name === conversation.user.name)) {
      this.conversations.unshift(conversation);
    }
  };

  public markAsRead(conversation: IConversation) {
    conversation.messages
      .filter((message) => !message.readDate)
      .forEach((message) => (message.readDate = new Date().getTime()));
  }

  public getConversationBy(supplierName: string) {
    const existingConversation = this._existingConversationBy(supplierName);
    return (!!existingConversation && existingConversation) || this._newConversationBy(supplierName);
  }

  protected _existingConversationBy(supplierName: string) {
    return this.conversations.find((conversation) => conversation.user.name === supplierName);
  }

  protected _newConversationBy(supplierName: string) {
    return {
      user: {
        name: supplierName,
      },
      messages: [],
      viewDate: new Date().getTime(),
    } as IConversation;
  }
}
