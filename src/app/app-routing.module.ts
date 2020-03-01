import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./news/Components/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "news",
    loadChildren: () => import("./news/news.module").then(m => m.NewsModule)
  },
  { path: "", redirectTo: "news", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
