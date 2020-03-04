import { Component, OnInit } from "@angular/core";
import { INews } from "app/news/Models/INews.interface";
import { NewsApiService } from "app/news/Services/news-api.service";
import { Router } from "@angular/router";
import { INotificationSettings } from "@core/Models/INotificationSettings.interface";
import { ModalService } from "@shared/Services/notification-center.service";
import { Observable } from "rxjs";
import { NotificationCenterService } from "@core/Services/notification-center.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.less"]
})
export class DashboardComponent implements OnInit {
  news$: Observable<INews[]>;
  constructor(
    private newsApiService: NewsApiService,
    private router: Router,
    private modalService: ModalService,
    private notificationCenter: NotificationCenterService
  ) {}

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.news$ = this.newsApiService.getNews();
  }

  edit(id: number) {
    this.router.navigate(["/news/add", id]);
  }

  delete(newsData: any) {
    const settings: INotificationSettings = {
      message: `You are about to delete ${newsData.title}, do you want to continue?`,
      title: "Delete News"
    };
    this.modalService.showModal(settings, (confirm: boolean) => {
      if (confirm) {
        this.newsApiService.deleteNews(newsData.id).subscribe({
          next: () => this.onDeleteCompleted(newsData),
          error: err => console.log(err)
        });
      }
    });
  }

  onDeleteCompleted(news: INews) {
    this.notificationCenter.showSuccess(
      `${news.title} has been successfuly deleted!`
    );
    this.getNews();
  }
}
