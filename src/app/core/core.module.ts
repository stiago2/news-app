import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EnsureModuleLoadedOnceGuard } from "./Guards/ensure-module-loaded-once.guard";
import { NavBarComponent } from "./Components/nav-bar/nav-bar.component";
import { LoadingComponent } from "./Components/loading/loading.component";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "app/material/material.module";

@NgModule({
  declarations: [NavBarComponent, LoadingComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [NavBarComponent, LoadingComponent]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
