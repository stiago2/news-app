import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./Components/dashboard/dashboard.component";
import { AddNewsComponent } from "./Components/add-news/add-news.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "add/:id", component: AddNewsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule {
  static routedComponents = [DashboardComponent, AddNewsComponent];
}
