import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import {
  EventBusService,
  EmitEvent
} from "@core/Services/loading-event-bus.service";
import { Events } from "@core/Enums/events.enum";

@Injectable({
  providedIn: "root"
})
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private eventBusService: EventBusService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(error => {
        this.eventBusService.emit(new EmitEvent(Events.onLoading, false));
        return throwError(error);
      })
    );
  }
}
