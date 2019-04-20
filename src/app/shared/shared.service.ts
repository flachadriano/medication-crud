import { Injectable } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { AlertTypes } from './alert-types.enum';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  public alertDanger(message: string): void {
    this.showAlert(message, AlertTypes.DANGER);
  }

  public alertSuccess(message: string): void {
    this.showAlert(message, AlertTypes.SUCCESS, 3000);
  }

  public alertWarning(message: string): void {
    this.showAlert(message, AlertTypes.WARNING);
  }

  private showAlert(message: string, type: AlertTypes, timeOut?: number): void {
    this.bsModalRef = this.modalService.show(AlertModalComponent, {class: 'modal-lg'});

    if (timeOut) {
      setTimeout(() => {
        this.bsModalRef.hide();
      }, timeOut);
    }

    this.bsModalRef.content.type = type || AlertTypes.SECONDARY;
    this.bsModalRef.content.message = message || 'Erro tente novamente';
  }

}
