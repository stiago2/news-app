import { TestBed, fakeAsync, tick, flush } from "@angular/core/testing";

import { DashboardComponent } from "./dashboard.component";
import { ModalService } from "@shared/Services/notification-center.service";
import { NewsApiService } from "app/news/Services/news-api.service";
import { NotificationCenterService } from "@core/Services/notification-center.service";
import { Router, Routes } from "@angular/router";
import { of } from "rxjs";
import { INews } from "app/news/Models/INews.interface";
import { AppComponent } from "app/app.component";
import { AddNewsComponent } from "../add-news/add-news.component";
import { RouterTestingModule } from "@angular/router/testing";
import { NO_ERRORS_SCHEMA, EventEmitter, Injectable } from "@angular/core";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { BsModalService, BsModalRef } from "ngx-bootstrap";
import { ToastrService } from "ngx-toastr";
import { FormBuilder } from "@angular/forms";
import { SpyLocation } from "@angular/common/testing";
import { NotificationModalComponent } from "@shared/notification-modal/notification-modal.component";

fdescribe("DashboardComponent", () => {
  let component: DashboardComponent;
  let NEWS: INews[] = [
    {
      id: 11,
      title: "Coronavirus kill thousands",
      subtitle: "Coronavirus is killing everyone",
      image: null,
      category: "International",
      description: "The new virus is killing everybody"
    },
    {
      id: 12,
      title: "Coronavirus kill thousands in china",
      subtitle: "Coronavirus is killing everyone in china",
      image: null,
      category: "International",
      description: "The new virus is killing everybody in china"
    }
  ];
  let routerSpy: jasmine.SpyObj<Router>;
  let notificationCenterSpy: jasmine.SpyObj<NotificationCenterService>;
  let newsServiceSpy: jasmine.SpyObj<NewsApiService>;
  let modalServiceSpy: jasmine.SpyObj<ModalService>;
  let router: Router;
  let firstNews: INews;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj<Router>(["navigate"]);
    notificationCenterSpy = jasmine.createSpyObj<NotificationCenterService>([
      "showSuccess"
    ]);
    newsServiceSpy = jasmine.createSpyObj<NewsApiService>([
      "getNews",
      "deleteNews"
    ]);
    newsServiceSpy.getNews.and.returnValue(of(NEWS));
    newsServiceSpy.deleteNews.and.returnValue(of({}));
    modalServiceSpy = jasmine.createSpyObj<ModalService>(["showModal"]);
    modalServiceSpy.showModal.and.callFake((settings, onConfirm) => {
      of(true).subscribe(onConfirm);
    });
    TestBed.configureTestingModule({
      providers: [{ provide: Router, useValue: routerSpy }]
    });
    router = TestBed.get(Router);
    component = new DashboardComponent(
      newsServiceSpy,
      routerSpy,
      modalServiceSpy,
      notificationCenterSpy
    );
    component.ngOnInit();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should get all the news", () => {
    component.news$.subscribe(data => {
      expect(data.length).toBeGreaterThan(0);
    });
  });

  it("should navigate to news/add/0", () => {
    component.edit(0);
    expect(router.navigate).toHaveBeenCalledWith(["/news/add", 0]);
  });

  it("should call notification center showSuccess and getNews", () => {
    spyOn(component, "getNews");
    component.onDeleteCompleted(NEWS[0]);
    expect(notificationCenterSpy.showSuccess).toHaveBeenCalled();
    expect(component.getNews).toHaveBeenCalled();
  });

  it("should delete news with id 11", () => {
    firstNews = { ...NEWS[0] };
    NEWS.splice(0, 1);
    spyOn(component, "onDeleteCompleted");
    component.delete(firstNews);
    expect(component.onDeleteCompleted).toHaveBeenCalledWith(firstNews);
    component.news$.subscribe(data => {
      expect(data[0].id).not.toBe(11);
    });
  });
});
