import { NgModule } from "@angular/core";

import { NewsRoutingModule } from "./news-routing.module";
import { AddNewsComponent } from "./Components/add-news/add-news.component";
import { SharedModule } from "@shared/shared.module";

@NgModule({
  declarations: [NewsRoutingModule.routedComponents, AddNewsComponent],
  imports: [SharedModule, NewsRoutingModule]
})
export class NewsModule {}
