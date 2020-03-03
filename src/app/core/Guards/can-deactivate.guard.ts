import { Injectable } from "@angular/core";

import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

import { ICanDeactivate } from "../Models/ICanDeactivate.interface";
import { ModalService } from "@shared/Services/notification-center.service";

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<ICanDeactivate> {
  constructor(private modalService: ModalService) {}

  canDeactivate(
    component: ICanDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    if (component.canDeactivate()) {
      return this.modalService.showAsynchronousModal({
        message: `Discard changes for news?`,
        title: "Lose your changes"
      });
    } else {
      return true;
    }
  }
}
