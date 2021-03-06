import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { CanDeactivateGuard } from "@core/Guards/can-deactivate.guard";
import { HttpErrorInterceptor } from "@core/Interceptors/http-error.interceptor";
import { SharedModule } from "@shared/shared.module";
import { NgxBootstrapModule } from "./ngx-bootstrap/ngx-bootstrap.module";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { ApiData } from "@core/Api/api-data";
import { HttpHeadersInterceptor } from "@core/Interceptors/http-headers.interceptor";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [AppComponent, SharedModule.entryComponents],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxBootstrapModule,
    CoreModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ApiData),

    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: "toast-bottom-right",
      preventDuplicates: true
    })
  ],
  providers: [
    CanDeactivateGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeadersInterceptor,
      multi: true
    }
  ],
  entryComponents: [SharedModule.entryComponents],
  bootstrap: [AppComponent]
})
export class AppModule {}
