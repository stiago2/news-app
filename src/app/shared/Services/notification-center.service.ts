import { Injectable } from "@angular/core";
import { BsModalRef, BsModalService, ModalOptions } from "ngx-bootstrap";
import { INotificationSettings } from "@shared/Models/INotificationSettings.interface";
import { NotificationModalComponent } from "@shared/notification-modal/notification-modal.component";

@Injectable({
  providedIn: "root"
})
export class NotificationCenterService {
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  showNotification(settings: INotificationSettings, onConfirm: any) {
    const initialState = {
      settings
    };
    this.bsModalRef = this.modalService.show(NotificationModalComponent, {
      initialState
    });
    this.bsModalRef.content.onConfirm.subscribe(onConfirm);
  }
}
