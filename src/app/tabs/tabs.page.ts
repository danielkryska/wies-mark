import { MessagesService } from '@shared/services/messages.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  get hasNewReceivedMessage() {
    return this._messagesService.hasNewReceived;
  }

  constructor(private _messagesService: MessagesService) {}
}
