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

  public alertDanger(message?: string): void {
    this.showAlert(message, AlertTypes.DANGER);
  }

  public alertSuccess(message?: string): void {
    this.showAlert(message, AlertTypes.SUCCESS);
  }

  private showAlert(message?: string, type: AlertTypes): void {
    this.bsModalRef = this.modalService.show(AlertModalComponent);

    this.bsModalRef.content.type = type;
    this.bsModalRef.content.message = message || 'Erro tente novamente';
  }

}
