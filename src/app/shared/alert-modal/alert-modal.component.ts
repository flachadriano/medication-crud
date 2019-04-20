import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.sass']
})
export class AlertModalComponent {

  @Input() public message: string;
  @Input() public type: string;

  constructor(private bsModalRef: BsModalRef) { }

  public onClose(): void {
    this.bsModalRef.hide();
  }

}
