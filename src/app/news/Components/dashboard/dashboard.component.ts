import { Component, OnInit } from "@angular/core";
import { INews } from "app/news/Models/INews.interface";
import { NewsApiService } from "app/news/Services/news-api.service";
import { Router } from "@angular/router";
import { INotificationSettings } from "@shared/Models/INotificationSettings.interface";
import { NotificationCenterService } from "@shared/Services/notification-center.service";
import { Observable } from "rxjs";

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
    private notificationCenterService: NotificationCenterService
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
    this.notificationCenterService.showNotification(settings, () =>
      this.newsApiService.deleteNews(newsData.id).subscribe({
        next: () => this.getNews(),
        error: err => console.log(err)
      })
    );
  }
}
