import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ICanDeactivate } from "@core/Models/ICanDeactivate.interface";
import { ICategory } from "@core/Models/ICategory.interface";
import { INotificationSettings } from "@shared/Models/INotificationSettings.interface";
import { NotificationCenterService } from "@shared/Services/notification-center.service";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { NewsApiService } from "app/news/Services/news-api.service";

@Component({
  selector: "app-add-news",
  templateUrl: "./add-news.component.html",
  styleUrls: ["./add-news.component.less"]
})
export class AddNewsComponent implements OnInit, ICanDeactivate {
  mode: "add" | "edit" = "add";
  categories: ICategory[] = [
    { name: "Sports", colorClass: "btn-success", value: "Sports" },
    { name: "Politics", colorClass: "btn-danger", value: "Politics" },
    { name: "Human Rights", colorClass: "btn-info", value: "HumanRights" },
    { name: "International", colorClass: "btn-warning", value: "International" }
  ];
  newsForm: FormGroup;
  constructor(
    private newsApiService: NewsApiService,
    private route: ActivatedRoute,
    private notificationCenterService: NotificationCenterService,
    private formBuilder: FormBuilder
  ) {
    this.initForm();
    this.route.params.subscribe(params => {
      +params.id === 0 ? (this.mode = "add") : (this.mode = "edit");
    });
  }

  canDeactivate() {
    return this.newsForm.dirty && this.newsForm.touched
      ? confirm("Discard changes for movie?")
      : true;
  }

  initForm() {
    this.newsForm = this.formBuilder.group({
      title: ["", Validators.compose([Validators.required])],
      subtitle: ["", Validators.compose([Validators.required])],
      image: ["", Validators.compose([Validators.required])],
      description: ["", Validators.compose([Validators.required])],
      category: ["", Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {}

  onSave() {
    const settings: INotificationSettings = {
      message: `Are you sure you want to create ${
        this.newsForm.get("title").value
      }?`,
      title: "News"
    };
    this.notificationCenterService.showNotification(settings, () =>
      this.newsApiService.saveNews(this.newsForm.value)
    );
  }

  onDelete() {
    const settings: INotificationSettings = {
      message: `You are about to delete ${
        this.newsForm.get("title").value
      }, do you want to continue?`,
      title: "News"
    };
    this.notificationCenterService.showNotification(settings, this.delete);
  }

  delete() {
    console.log("DELETEEE");
  }
}
