import { INews } from "../Models/INews.interface";
import { IAdapter } from "@core/Models/IAdapter.interface";
import { News } from "../Models/News.class";

export class AdapterService implements IAdapter<INews> {
  adapt(news: any): INews {
    return new News({
      title: news.title,
      subtitle: news.subtitle,
      image: news.image,
      category: news.category,
      description: news.description
    });
  }
}
