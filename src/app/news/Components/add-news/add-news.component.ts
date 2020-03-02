import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ICanDeactivate } from "@core/Models/ICanDeactivate.interface";
import { ICategory } from "@core/Models/ICategory.interface";
import { INotificationSettings } from "@shared/Models/INotificationSettings.interface";
import { NotificationCenterService } from "@shared/Services/notification-center.service";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { NewsApiService } from "app/news/Services/news-api.service";
import { ValidateTitleLength } from "app/news/Validators/title-length.validator";
import { NewsCategories, INews } from "app/news/Models/INews.interface";
import { SubSink } from "subsink";

@Component({
  selector: "app-add-news",
  templateUrl: "./add-news.component.html",
  styleUrls: ["./add-news.component.less"]
})
export class AddNewsComponent implements OnInit, ICanDeactivate, OnDestroy {
  private news: INews;
  private subs = new SubSink();
  mode: "add" | "edit" = "add";
  pageTitle: string;
  categories: ICategory[] = [];
  newsForm: FormGroup;

  constructor(
    private newsApiService: NewsApiService,
    private route: ActivatedRoute,
    private notificationCenterService: NotificationCenterService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.newsApiService
      .getNewsCategories()
      .subscribe(categories => (this.categories = categories));
  }

  ngOnInit() {
    this.initForm();
    this.subs.sink = this.route.params.subscribe(params => {
      const id = +params.id;
      this.getNewsById(id);
    });
  }

  initForm() {
    this.newsForm = this.formBuilder.group(
      {
        title: [
          "",
          Validators.compose([
            Validators.required,
            Validators.pattern("^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$")
          ])
        ],
        subtitle: ["", Validators.compose([Validators.required])],
        image: [""],
        description: [""],
        category: [""]
      },
      { validators: ValidateTitleLength }
    );
  }

  getNewsById(id: number) {
    this.newsApiService.getNewsById(id).subscribe({
      next: (news: INews) => this.setFormValues(news).setPageMode(),
      error: err =>
        this.setFormValues(this.newsApiService.initNews()).setPageMode()
    });
  }

  canDeactivate() {
    return this.newsForm.touched && this.newsForm.dirty && this.newsForm.touched
      ? confirm("Discard changes for movie?")
      : true;
  }

  setPageMode() {
    if (this.news.id === 0) {
      this.mode = "add";
      this.pageTitle = "Add News";
    } else {
      this.mode = "edit";
      this.pageTitle = `Edit ${this.news.title}`;
    }
  }

  setFormValues(news: INews): this {
    if (this.newsForm) {
      this.newsForm.reset();
    }
    this.news = news;
    this.newsForm.patchValue({
      title: news.title,
      subtitle: news.subtitle,
      image: news.image,
      description: news.description,
      category: news.category
    });
    return this;
  }

  onSave() {
    if (this.newsForm.valid) {
      const news = { ...this.news, ...this.newsForm.value };
      const settings: INotificationSettings = {
        message: "",
        title: ""
      };
      if (news.id === 0) {
        settings.message = `Are you sure you want to save this news?`;
        settings.title = "+ Add News";
        this.notificationCenterService.showNotification(settings, () =>
          this.newsApiService.createNews(news).subscribe({
            next: () => this.onSaveComplete(),
            error: err => console.log(err)
          })
        );
      } else {
        settings.title = "Edit News";
        settings.message = `Are you sure you want to modify ${news.title}?`;
        this.notificationCenterService.showNotification(settings, () =>
          this.newsApiService.updateNews(news).subscribe({
            next: () => this.onSaveComplete(),
            error: err => console.log(err)
          })
        );
      }
    }
  }

  onSaveComplete() {
    this.newsForm.markAsUntouched();
    this.router.navigate(["news"]);
  }

  onDelete() {
    const settings: INotificationSettings = {
      message: `You are about to delete ${
        this.newsForm.get("title").value
      }, do you want to continue?`,
      title: "Delete News"
    };
    this.notificationCenterService.showNotification(settings, () =>
      this.newsApiService.deleteNews(this.news.id).subscribe({
        next: () => this.onSaveComplete(),
        error: err => console.log(err)
      })
    );
  }

  loadFile(image: any) {
    this.newsForm.patchValue({
      image
    });
  }

  selectCategory(category: NewsCategories) {
    this.newsForm.patchValue({
      category
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
