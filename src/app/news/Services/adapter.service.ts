import { INews } from "../Models/INews.interface";
import { IAdapter } from "@core/Models/IAdapter.interface";
import { News } from "../Models/News.class";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AdapterService implements IAdapter<INews> {
  adapt(news: any): INews {
    return new News({
      id: news.id,
      title: news.title,
      subtitle: news.subtitle,
      image: news.image,
      category: news.category,
      description: news.description
    });
  }
}
