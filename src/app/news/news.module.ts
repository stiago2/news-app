import { NgModule } from "@angular/core";

import { NewsRoutingModule } from "./news-routing.module";
import { AddNewsComponent } from "./Components/add-news/add-news.component";
import { SharedModule } from "@shared/shared.module";
import { NewsCardComponent } from "./Components/news-card/news-card.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    NewsRoutingModule.routedComponents,
    AddNewsComponent,
    NewsCardComponent
  ],
  imports: [CommonModule, SharedModule, NewsRoutingModule]
})
export class NewsModule {}
