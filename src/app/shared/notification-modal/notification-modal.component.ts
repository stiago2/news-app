import { Component, Output, EventEmitter } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";
import { INotificationSettings } from "@core/Models/INotificationSettings.interface";

@Component({
  selector: "app-notification-modal",
  templateUrl: "./notification-modal.component.html",
  styleUrls: ["./notification-modal.component.less"]
})
export class NotificationModalComponent {
  settings: INotificationSettings;
  @Output() onConfirm = new EventEmitter();
  constructor(private bsModalRef: BsModalRef) {}

  confirm() {
    this.onConfirm.emit(true);
    this.close();
  }

  close() {
    this.onConfirm.emit(false);
    this.bsModalRef.hide();
  }
}
