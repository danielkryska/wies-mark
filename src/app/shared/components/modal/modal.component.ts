import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() headerTitle: string;
  @Input() applyBtnName: string;
  @Input() cancelBtnName: string;

  @Input() isApplyBtnDisabled: boolean = true;

  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();
  @Output() apply: EventEmitter<void> = new EventEmitter<void>();
}
