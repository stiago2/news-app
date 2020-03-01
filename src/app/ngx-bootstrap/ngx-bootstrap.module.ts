import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModalModule, ButtonsModule } from "ngx-bootstrap";

@NgModule({
  declarations: [],
  imports: [CommonModule, ModalModule.forRoot(), ButtonsModule.forRoot()],
  exports: [ModalModule, ButtonsModule]
})
export class NgxBootstrapModule {}
