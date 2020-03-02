import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import {
  EventBusService,
  EmitEvent
} from "@core/Services/loading-event-bus.service";
import { Events } from "@core/Enums/events.enum";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor(private eventBusService: EventBusService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.eventBusService.emit(new EmitEvent(Events.onLoading, true));
    let headersReq = req;
    if (req.method === "POST" || req.method === "PUT") {
      headersReq = req.clone({
        headers: req.headers.set("Content-Type", "application/json")
      });
    }
    return next.handle(headersReq).pipe(
      tap(evt => {
        this.eventBusService.emit(new EmitEvent(Events.onLoading, false));
      })
    );
  }
}
