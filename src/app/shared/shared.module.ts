import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotificationModalComponent } from "./notification-modal/notification-modal.component";
import { FileUploaderComponent } from "./file-uploader/file-uploader.component";
import { RadioButtonComponent } from "./radio-button/radio-button.component";

@NgModule({
  declarations: [FileUploaderComponent, RadioButtonComponent],
  imports: [CommonModule],
  exports: [FileUploaderComponent, RadioButtonComponent]
})
export class SharedModule {
  static entryComponents = [NotificationModalComponent];
}
