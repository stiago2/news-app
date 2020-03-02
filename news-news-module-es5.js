(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-news-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/news/Components/add-news/add-news.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news/Components/add-news/add-news.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewsComponentsAddNewsAddNewsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"add-news-form-container\">\n  <h1>{{ pageTitle }}</h1>\n  <form [formGroup]=\"newsForm\">\n    <div class=\"form-group\">\n      <label for=\"title\">Title</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"title\"\n        formControlName=\"title\"\n        required\n      />\n      <small\n        class=\"form-text text-danger\"\n        *ngIf=\"newsForm.errors?.invalidLength\"\n        >Title can not be longer than Subtitle</small\n      >\n      <small\n        class=\"form-text text-danger\"\n        *ngIf=\"newsForm.get('title').errors?.pattern\"\n        >Title can not contain special characters</small\n      >\n    </div>\n    <div class=\"form-group\">\n      <label for=\"subtitle\">Sub Title</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"subtitle\"\n        formControlName=\"subtitle\"\n      />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"subtitle\">Description</label>\n      <textarea\n        class=\"form-control\"\n        aria-label=\"With textarea\"\n        formControlName=\"description\"\n      ></textarea>\n    </div>\n\n    <app-file-uploader\n      (onLoad)=\"loadFile($event)\"\n      [imageSource]=\"newsForm.get('image').value\"\n    ></app-file-uploader>\n    <app-radio-button\n      [categories]=\"categories\"\n      formControlName=\"category\"\n    ></app-radio-button>\n\n    <div class=\"action-buttons\">\n      <button\n        type=\"button\"\n        class=\"btn btn-outline-primary\"\n        (click)=\"onSave()\"\n        [disabled]=\"!newsForm.touched || !newsForm.valid\"\n      >\n        Save\n      </button>\n      <button\n        type=\"button\"\n        class=\"btn btn-outline-secondary\"\n        *ngIf=\"mode === 'edit'\"\n        (click)=\"onDelete()\"\n      >\n        Delete\n      </button>\n    </div>\n  </form>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/news/Components/dashboard/dashboard.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news/Components/dashboard/dashboard.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewsComponentsDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"news-dashboard-container\">\n  <div class=\"card-deck\">\n    <app-news-card\n      *ngFor=\"let n of news\"\n      [news]=\"n\"\n      (onEdit)=\"edit($event)\"\n      (onDelete)=\"delete($event)\"\n    ></app-news-card>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/news/Components/news-card/news-card.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news/Components/news-card/news-card.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewsComponentsNewsCardNewsCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card border-{{ colorClass }} mb-3\">\n  <img\n    class=\"img-thumbnail\"\n    [src]=\"news?.image\"\n    alt=\"{{ news?.description }}\"\n    appOnError\n  />\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{ news?.title | titlecase }}</h5>\n    <h6 class=\"card-subtitle mb-2 text-muted\">\n      {{ news?.subtitle | titlecase }}\n    </h6>\n    <p class=\"card-text\">{{ news?.description | titlecase }}</p>\n\n    <div class=\"card-text action-buttons\">\n      <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"edit()\">\n        Edit\n      </button>\n      <button\n        type=\"button\"\n        class=\"btn btn-outline-secondary\"\n        (click)=\"delete()\"\n      >\n        Delete\n      </button>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/news/Components/add-news/add-news.component.less":
  /*!******************************************************************!*\
    !*** ./src/app/news/Components/add-news/add-news.component.less ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewsComponentsAddNewsAddNewsComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".add-news-form-container {\n  width: 70%;\n  margin: 50px auto;\n}\n.add-news-form-container h1 {\n  margin-bottom: 20px;\n}\n.add-news-form-container .action-buttons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n.add-news-form-container .action-buttons button {\n  margin-left: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9Db21wb25lbnRzL2FkZC1uZXdzL0M6L1NhbnRpYWdvL1dvcmtzcGFjZS9Bbmd1bGFyL25ld3NwYXBlci1hcHAvc3JjL2FwcC9uZXdzL0NvbXBvbmVudHMvYWRkLW5ld3MvYWRkLW5ld3MuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL25ld3MvQ29tcG9uZW50cy9hZGQtbmV3cy9hZGQtbmV3cy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQ0NGO0FESEE7RUFJSSxtQkFBQTtBQ0VKO0FETkE7RUFRSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FDQ0o7QURWQTtFQVdNLGdCQUFBO0FDRU4iLCJmaWxlIjoic3JjL2FwcC9uZXdzL0NvbXBvbmVudHMvYWRkLW5ld3MvYWRkLW5ld3MuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLW5ld3MtZm9ybS1jb250YWluZXIge1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW46IDUwcHggYXV0bztcbiAgaDEge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICAuYWN0aW9uLWJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBidXR0b24ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG4gIH1cbn1cbiIsIi5hZGQtbmV3cy1mb3JtLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xufVxuLmFkZC1uZXdzLWZvcm0tY29udGFpbmVyIGgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5hZGQtbmV3cy1mb3JtLWNvbnRhaW5lciAuYWN0aW9uLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmFkZC1uZXdzLWZvcm0tY29udGFpbmVyIC5hY3Rpb24tYnV0dG9ucyBidXR0b24ge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/news/Components/add-news/add-news.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/news/Components/add-news/add-news.component.ts ***!
    \****************************************************************/

  /*! exports provided: AddNewsComponent */

  /***/
  function srcAppNewsComponentsAddNewsAddNewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddNewsComponent", function () {
      return AddNewsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_Services_notification_center_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/Services/notification-center.service */
    "./src/app/shared/Services/notification-center.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var app_news_Services_news_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! app/news/Services/news-api.service */
    "./src/app/news/Services/news-api.service.ts");
    /* harmony import */


    var app_news_Validators_title_length_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! app/news/Validators/title-length.validator */
    "./src/app/news/Validators/title-length.validator.ts");
    /* harmony import */


    var subsink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! subsink */
    "./node_modules/subsink/dist/index.js");
    /* harmony import */


    var subsink__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(subsink__WEBPACK_IMPORTED_MODULE_7__);

    let AddNewsComponent = class AddNewsComponent {
      constructor(newsApiService, route, notificationCenterService, formBuilder, router) {
        this.newsApiService = newsApiService;
        this.route = route;
        this.notificationCenterService = notificationCenterService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_7__["SubSink"]();
        this.mode = "add";
        this.categories = [];
        this.newsApiService.getNewsCategories().subscribe(categories => this.categories = categories);
      }

      ngOnInit() {
        this.initForm();
        this.subs.sink = this.route.params.subscribe(params => {
          const id = +params.id;
          this.getNewsById(id);
        });
      }

      initForm() {
        this.newsForm = this.formBuilder.group({
          title: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$")])],
          subtitle: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
          image: [""],
          description: [""],
          category: [""]
        }, {
          validators: app_news_Validators_title_length_validator__WEBPACK_IMPORTED_MODULE_6__["ValidateTitleLength"]
        });
      }

      getNewsById(id) {
        this.newsApiService.getNewsById(id).subscribe({
          next: news => this.setFormValues(news).setPageMode(),
          error: err => this.setFormValues(this.newsApiService.initNews()).setPageMode()
        });
      }

      canDeactivate() {
        return this.newsForm.touched && this.newsForm.dirty && this.newsForm.touched ? confirm("Discard changes for movie?") : true;
      }

      setPageMode() {
        if (this.news.id === 0) {
          this.mode = "add";
          this.pageTitle = "Add News";
        } else {
          this.mode = "edit";
          this.pageTitle = "Edit ".concat(this.news.title);
        }
      }

      setFormValues(news) {
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
          const news = Object.assign({}, this.news, this.newsForm.value);
          const settings = {
            message: "",
            title: ""
          };

          if (news.id === 0) {
            settings.message = "Are you sure you want to save this news?";
            settings.title = "+ Add News";
            this.notificationCenterService.showNotification(settings, () => this.newsApiService.createNews(news).subscribe({
              next: () => this.onSaveComplete(),
              error: err => console.log(err)
            }));
          } else {
            settings.title = "Edit News";
            settings.message = "Are you sure you want to modify ".concat(news.title, "?");
            this.notificationCenterService.showNotification(settings, () => this.newsApiService.updateNews(news).subscribe({
              next: () => this.onSaveComplete(),
              error: err => console.log(err)
            }));
          }
        }
      }

      onSaveComplete() {
        this.newsForm.markAsUntouched();
        this.router.navigate(["news"]);
      }

      onDelete() {
        const settings = {
          message: "You are about to delete ".concat(this.newsForm.get("title").value, ", do you want to continue?"),
          title: "Delete News"
        };
        this.notificationCenterService.showNotification(settings, () => this.newsApiService.deleteNews(this.news.id).subscribe({
          next: () => this.onSaveComplete(),
          error: err => console.log(err)
        }));
      }

      loadFile(image) {
        this.newsForm.patchValue({
          image
        });
      }

      selectCategory(category) {
        this.newsForm.patchValue({
          category
        });
      }

      ngOnDestroy() {
        this.subs.unsubscribe();
      }

    };

    AddNewsComponent.ctorParameters = () => [{
      type: app_news_Services_news_api_service__WEBPACK_IMPORTED_MODULE_5__["NewsApiService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _shared_Services_notification_center_service__WEBPACK_IMPORTED_MODULE_3__["NotificationCenterService"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    AddNewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-add-news",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-news.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/news/Components/add-news/add-news.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-news.component.less */
      "./src/app/news/Components/add-news/add-news.component.less")).default]
    })], AddNewsComponent);
    /***/
  },

  /***/
  "./src/app/news/Components/dashboard/dashboard.component.less":
  /*!********************************************************************!*\
    !*** ./src/app/news/Components/dashboard/dashboard.component.less ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewsComponentsDashboardDashboardComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".news-dashboard-container {\n  width: 85%;\n  margin: 30px auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9Db21wb25lbnRzL2Rhc2hib2FyZC9DOi9TYW50aWFnby9Xb3Jrc3BhY2UvQW5ndWxhci9uZXdzcGFwZXItYXBwL3NyYy9hcHAvbmV3cy9Db21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL25ld3MvQ29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9uZXdzL0NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXdzLWRhc2hib2FyZC1jb250YWluZXIge1xuICB3aWR0aDogODUlO1xuICBtYXJnaW46IDMwcHggYXV0bztcbn1cbiIsIi5uZXdzLWRhc2hib2FyZC1jb250YWluZXIge1xuICB3aWR0aDogODUlO1xuICBtYXJnaW46IDMwcHggYXV0bztcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/news/Components/dashboard/dashboard.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/news/Components/dashboard/dashboard.component.ts ***!
    \******************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppNewsComponentsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var app_news_Services_news_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/news/Services/news-api.service */
    "./src/app/news/Services/news-api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_Services_notification_center_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @shared/Services/notification-center.service */
    "./src/app/shared/Services/notification-center.service.ts");

    let DashboardComponent = class DashboardComponent {
      constructor(newsApiService, router, notificationCenterService) {
        this.newsApiService = newsApiService;
        this.router = router;
        this.notificationCenterService = notificationCenterService;
        this.news = [];
      }

      ngOnInit() {
        this.getNews();
      }

      getNews() {
        this.newsApiService.getNews().subscribe(data => {
          this.news = data;
          console.log("DATA", data);
        });
      }

      edit(id) {
        this.router.navigate(["/news/add", id]);
      }

      delete(newsData) {
        const settings = {
          message: "You are about to delete ".concat(newsData.title, ", do you want to continue?"),
          title: "Delete News"
        };
        this.notificationCenterService.showNotification(settings, () => this.newsApiService.deleteNews(newsData.id).subscribe({
          next: () => this.getNews(),
          error: err => console.log(err)
        }));
      }

    };

    DashboardComponent.ctorParameters = () => [{
      type: app_news_Services_news_api_service__WEBPACK_IMPORTED_MODULE_2__["NewsApiService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _shared_Services_notification_center_service__WEBPACK_IMPORTED_MODULE_4__["NotificationCenterService"]
    }];

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-dashboard",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/news/Components/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.less */
      "./src/app/news/Components/dashboard/dashboard.component.less")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/news/Components/news-card/news-card.component.less":
  /*!********************************************************************!*\
    !*** ./src/app/news/Components/news-card/news-card.component.less ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewsComponentsNewsCardNewsCardComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\n  max-width: 18rem;\n}\n.card .card-img-top {\n  min-height: 300px;\n}\n.card .action-buttons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n.card .action-buttons button {\n  margin-left: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9Db21wb25lbnRzL25ld3MtY2FyZC9DOi9TYW50aWFnby9Xb3Jrc3BhY2UvQW5ndWxhci9uZXdzcGFwZXItYXBwL3NyYy9hcHAvbmV3cy9Db21wb25lbnRzL25ld3MtY2FyZC9uZXdzLWNhcmQuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL25ld3MvQ29tcG9uZW50cy9uZXdzLWNhcmQvbmV3cy1jYXJkLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRjtBREZBO0VBR0ksaUJBQUE7QUNFSjtBRExBO0VBTUksb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtBQ0VKO0FEVEE7RUFTTSxnQkFBQTtBQ0dOIiwiZmlsZSI6InNyYy9hcHAvbmV3cy9Db21wb25lbnRzL25ld3MtY2FyZC9uZXdzLWNhcmQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gIG1heC13aWR0aDogMThyZW07XG4gIC5jYXJkLWltZy10b3Age1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICB9XG4gIC5hY3Rpb24tYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGJ1dHRvbiB7XG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIH1cbiAgfVxufVxuIiwiLmNhcmQge1xuICBtYXgtd2lkdGg6IDE4cmVtO1xufVxuLmNhcmQgLmNhcmQtaW1nLXRvcCB7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xufVxuLmNhcmQgLmFjdGlvbi1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5jYXJkIC5hY3Rpb24tYnV0dG9ucyBidXR0b24ge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/news/Components/news-card/news-card.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/news/Components/news-card/news-card.component.ts ***!
    \******************************************************************/

  /*! exports provided: NewsCardComponent */

  /***/
  function srcAppNewsComponentsNewsCardNewsCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsCardComponent", function () {
      return NewsCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var app_news_Models_Colors_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/news/Models/Colors.enum */
    "./src/app/news/Models/Colors.enum.ts");

    let NewsCardComponent = class NewsCardComponent {
      constructor() {
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      ngOnInit() {
        this.colorClass = app_news_Models_Colors_enum__WEBPACK_IMPORTED_MODULE_2__["Colors"][this.news.category];
      }

      edit() {
        this.onEdit.emit(this.news.id);
      }

      delete() {
        this.onDelete.emit({
          id: this.news.id,
          title: this.news.title
        });
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NewsCardComponent.prototype, "news", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NewsCardComponent.prototype, "onDelete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NewsCardComponent.prototype, "onEdit", void 0);
    NewsCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-news-card",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./news-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/news/Components/news-card/news-card.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./news-card.component.less */
      "./src/app/news/Components/news-card/news-card.component.less")).default]
    })], NewsCardComponent);
    /***/
  },

  /***/
  "./src/app/news/Models/News.class.ts":
  /*!*******************************************!*\
    !*** ./src/app/news/Models/News.class.ts ***!
    \*******************************************/

  /*! exports provided: News */

  /***/
  function srcAppNewsModelsNewsClassTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "News", function () {
      return News;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class News {
      constructor(news) {
        Object.assign(this, news);
      }

    }
    /***/

  },

  /***/
  "./src/app/news/Services/adapter.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/news/Services/adapter.service.ts ***!
    \**************************************************/

  /*! exports provided: AdapterService */

  /***/
  function srcAppNewsServicesAdapterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdapterService", function () {
      return AdapterService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _Models_News_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../Models/News.class */
    "./src/app/news/Models/News.class.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AdapterService = class AdapterService {
      adapt(news) {
        return new _Models_News_class__WEBPACK_IMPORTED_MODULE_1__["News"]({
          id: news.id,
          title: news.title,
          subtitle: news.subtitle,
          image: news.image,
          category: news.category,
          description: news.description
        });
      }

    };
    AdapterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    })], AdapterService);
    /***/
  },

  /***/
  "./src/app/news/Services/news-api.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/news/Services/news-api.service.ts ***!
    \***************************************************/

  /*! exports provided: NewsApiService */

  /***/
  function srcAppNewsServicesNewsApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsApiService", function () {
      return NewsApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _adapter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./adapter.service */
    "./src/app/news/Services/adapter.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    let NewsApiService = class NewsApiService {
      constructor(http, adapter) {
        this.http = http;
        this.adapter = adapter;
        this.BASE_URL = "api/news";
      }

      createNews(news) {
        news.id = null;
        return this.http.post("".concat(this.BASE_URL), news);
      }

      updateNews(news) {
        return this.http.put("".concat(this.BASE_URL, "/").concat(news.id), news);
      }

      getNewsById(id) {
        if (id === 0) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.initNews());
        }

        return this.http.get("".concat(this.BASE_URL, "/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(data => this.adapter.adapt(data)));
      }

      getNews() {
        return this.http.get(this.BASE_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(data => data.map(item => this.adapter.adapt(item))));
      }

      getNewsCategories() {
        return this.http.get("api/categories");
      }

      deleteNews(id) {
        return this.http.delete("".concat(this.BASE_URL, "/").concat(id));
      }

      initNews() {
        return {
          id: 0,
          title: "",
          subtitle: "",
          image: null,
          description: "",
          category: null
        };
      }

    };

    NewsApiService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }, {
      type: _adapter_service__WEBPACK_IMPORTED_MODULE_3__["AdapterService"]
    }];

    NewsApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], NewsApiService);
    /***/
  },

  /***/
  "./src/app/news/Validators/title-length.validator.ts":
  /*!***********************************************************!*\
    !*** ./src/app/news/Validators/title-length.validator.ts ***!
    \***********************************************************/

  /*! exports provided: ValidateTitleLength */

  /***/
  function srcAppNewsValidatorsTitleLengthValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidateTitleLength", function () {
      return ValidateTitleLength;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function ValidateTitleLength(control) {
      const title = control.get("title");
      const subtitle = control.get("subtitle");

      if (title.value && subtitle.value && title.value.length >= subtitle.value.length && title.value !== "") {
        return {
          invalidLength: true
        };
      }

      return null;
    }
    /***/

  },

  /***/
  "./src/app/news/news-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/news/news-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: NewsRoutingModule */

  /***/
  function srcAppNewsNewsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsRoutingModule", function () {
      return NewsRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _Components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Components/dashboard/dashboard.component */
    "./src/app/news/Components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _Components_add_news_add_news_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Components/add-news/add-news.component */
    "./src/app/news/Components/add-news/add-news.component.ts");
    /* harmony import */


    var _core_Guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @core/Guards/can-deactivate.guard */
    "./src/app/core/Guards/can-deactivate.guard.ts");

    const routes = [{
      path: "",
      component: _Components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }, {
      path: "add/:id",
      component: _Components_add_news_add_news_component__WEBPACK_IMPORTED_MODULE_4__["AddNewsComponent"],
      canDeactivate: [_core_Guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__["CanDeactivateGuard"]]
    }];
    let NewsRoutingModule = class NewsRoutingModule {};
    NewsRoutingModule.routedComponents = [_Components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _Components_add_news_add_news_component__WEBPACK_IMPORTED_MODULE_4__["AddNewsComponent"]];
    NewsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NewsRoutingModule);
    /***/
  },

  /***/
  "./src/app/news/news.module.ts":
  /*!*************************************!*\
    !*** ./src/app/news/news.module.ts ***!
    \*************************************/

  /*! exports provided: NewsModule */

  /***/
  function srcAppNewsNewsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsModule", function () {
      return NewsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _news_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./news-routing.module */
    "./src/app/news/news-routing.module.ts");
    /* harmony import */


    var _Components_add_news_add_news_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Components/add-news/add-news.component */
    "./src/app/news/Components/add-news/add-news.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _Components_news_card_news_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Components/news-card/news-card.component */
    "./src/app/news/Components/news-card/news-card.component.ts");

    let NewsModule = class NewsModule {};
    NewsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_news_routing_module__WEBPACK_IMPORTED_MODULE_2__["NewsRoutingModule"].routedComponents, _Components_add_news_add_news_component__WEBPACK_IMPORTED_MODULE_3__["AddNewsComponent"], _Components_news_card_news_card_component__WEBPACK_IMPORTED_MODULE_5__["NewsCardComponent"]],
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _news_routing_module__WEBPACK_IMPORTED_MODULE_2__["NewsRoutingModule"]]
    })], NewsModule);
    /***/
  },

  /***/
  "./src/app/shared/Services/notification-center.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/Services/notification-center.service.ts ***!
    \****************************************************************/

  /*! exports provided: NotificationCenterService */

  /***/
  function srcAppSharedServicesNotificationCenterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationCenterService", function () {
      return NotificationCenterService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
    /* harmony import */


    var _shared_notification_modal_notification_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/notification-modal/notification-modal.component */
    "./src/app/shared/notification-modal/notification-modal.component.ts");

    let NotificationCenterService = class NotificationCenterService {
      constructor(modalService) {
        this.modalService = modalService;
      }

      showNotification(settings, onConfirm) {
        const initialState = {
          settings
        };
        this.bsModalRef = this.modalService.show(_shared_notification_modal_notification_modal_component__WEBPACK_IMPORTED_MODULE_3__["NotificationModalComponent"], {
          initialState
        });
        this.bsModalRef.content.onConfirm.subscribe(onConfirm);
      }

    };

    NotificationCenterService.ctorParameters = () => [{
      type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
    }];

    NotificationCenterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], NotificationCenterService);
    /***/
  }
}]);
//# sourceMappingURL=news-news-module-es5.js.map