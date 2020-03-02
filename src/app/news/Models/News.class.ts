import { NewsCategories, INews } from "./INews.interface";

export class News implements INews {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  category: NewsCategories;
  description: string;
  constructor(news: INews) {
    Object.assign(this, news);
  }
}
