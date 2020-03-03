import { Injectable } from "@angular/core";
import { BsModalRef, BsModalService, ModalOptions } from "ngx-bootstrap";
import { INotificationSettings } from "@core/Models/INotificationSettings.interface";
import { NotificationModalComponent } from "@shared/notification-modal/notification-modal.component";

@Injectable({
  providedIn: "root"
})
export class ModalService {
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  showModal(settings: INotificationSettings, onConfirm: any) {
    const initialState = {
      settings
    };
    this.bsModalRef = this.modalService.show(NotificationModalComponent, {
      initialState
    });
    this.bsModalRef.content.onConfirm.subscribe(onConfirm);
  }

  showAsynchronousModal(settings: INotificationSettings) {
    const initialState = {
      settings
    };
    this.bsModalRef = this.modalService.show(NotificationModalComponent, {
      initialState
    });
    return this.bsModalRef.content.onConfirm;
  }
}
