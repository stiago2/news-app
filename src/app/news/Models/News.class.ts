import { NewsCategories, INews } from "./INews.interface";

export class News implements INews {
  title: string;
  subtitle: string;
  image: string;
  category: NewsCategories;
  description: string;
  constructor(movie: INews) {}
}
