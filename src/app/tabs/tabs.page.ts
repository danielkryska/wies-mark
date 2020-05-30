import { MessagesService } from '@shared/services/messages.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  get hasUserVisitedMessages() {
    return this._messagesService.hasUserVisitedMessages;
  }

  constructor(private _messagesService: MessagesService) {}
}
