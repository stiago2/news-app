import { Injectable } from "@angular/core";
import { INews } from "../Models/INews.interface";

@Injectable({
  providedIn: "root"
})
export class NewsApiService {
  constructor() {}

  saveNews(news: INews) {
    console.log(news);
  }
}
