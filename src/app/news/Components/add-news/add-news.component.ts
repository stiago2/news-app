import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ICanDeactivate } from "@core/Models/ICanDeactivate.interface";
import { ICategory } from "@core/Models/ICategory.interface";
import { INotificationSettings } from "@core/Models/INotificationSettings.interface";
import { ModalService } from "@shared/Services/notification-center.service";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { NewsApiService } from "app/news/Services/news-api.service";
import { ValidateTitleLength } from "app/news/Validators/title-length.validator";
import { INews } from "app/news/Models/INews.interface";
import { SubSink } from "subsink";
import { NotificationCenterService } from "@core/Services/notification-center.service";
import { Observable } from "rxjs";

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
  categories$: Observable<ICategory[]>;
  newsForm: FormGroup;

  constructor(
    private newsApiService: NewsApiService,
    private route: ActivatedRoute,
    private modalService: ModalService,
    private formBuilder: FormBuilder,
    private router: Router,
    private notificationCenter: NotificationCenterService
  ) {
    this.categories$ = this.newsApiService.getNewsCategories();
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
        subtitle: [""],
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
    return this.newsForm.dirty && this.newsForm.touched;
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
    this.newsForm.markAsUntouched();
    return this;
  }

  onSave() {
    if (this.newsForm.valid) {
      const news = { ...this.news, ...this.newsForm.value };
      if (news.id === 0) {
        this.save(news);
      } else {
        this.update(news);
      }
    }
  }

  save(news: INews) {
    const settings: INotificationSettings = {
      message: `Are you sure you want to save this news?`,
      title: "+ Add News"
    };
    this.modalService.showModal(settings, (confirm: boolean) => {
      if (confirm) {
        this.newsApiService.createNews(news).subscribe({
          next: () => this.onSaveComplete("created"),
          error: err => this.notificationCenter.showError(err)
        });
      }
    });
  }

  update(news: INews) {
    const settings: INotificationSettings = {
      message: `Are you sure you want to modify ${news.title}?`,
      title: "Edit News"
    };
    this.modalService.showModal(settings, (confirm: boolean) => {
      if (confirm) {
        this.newsApiService.updateNews(news).subscribe({
          next: () => this.onSaveComplete("updated"),
          error: err => this.notificationCenter.showError(err)
        });
      }
    });
  }

  onSaveComplete(action: string) {
    this.notificationCenter.showSuccess(
      `${this.news.title} has been successfuly ${action}!`
    );
    this.newsForm.markAsPristine();
    this.router.navigate(["news"]);
  }

  onDelete() {
    const settings: INotificationSettings = {
      message: `You are about to delete ${
        this.newsForm.get("title").value
      }, do you want to continue?`,
      title: "Delete News"
    };
    this.modalService.showModal(settings, (confirm: boolean) => {
      if (confirm) {
        this.newsApiService.deleteNews(this.news.id).subscribe({
          next: () => this.onSaveComplete("deleted"),
          error: err => this.notificationCenter.showError(err)
        });
      }
    });
  }

  loadFile(image: any) {
    this.newsForm.patchValue({
      image
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
