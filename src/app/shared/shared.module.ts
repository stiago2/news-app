import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotificationModalComponent } from "./notification-modal/notification-modal.component";
import { FileUploaderComponent } from "./file-uploader/file-uploader.component";
import { RadioButtonComponent } from "./radio-button/radio-button.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { OnErrorDirective } from "./Directives/on-error.directive";
import { SetClassColorDirective } from "./Directives/set-class-color.directive";

@NgModule({
  declarations: [
    FileUploaderComponent,
    RadioButtonComponent,
    OnErrorDirective,
    SetClassColorDirective
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    FileUploaderComponent,
    RadioButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    OnErrorDirective,
    SetClassColorDirective
  ]
})
export class SharedModule {
  static entryComponents = [NotificationModalComponent];
}
