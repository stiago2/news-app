import { Injectable } from "@angular/core";
import { INews } from "../Models/INews.interface";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AdapterService } from "./adapter.service";
import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";
import { ICategory } from "@core/Models/ICategory.interface";

@Injectable({
  providedIn: "root"
})
export class NewsApiService {
  private BASE_URL = "api/news";
  constructor(private http: HttpClient, private adapter: AdapterService) {}

  createNews(news: INews) {
    news.id = null;
    return this.http.post<INews>(`${this.BASE_URL}`, news);
  }

  updateNews(news: INews) {
    return this.http.put<INews>(`${this.BASE_URL}/${news.id}`, news);
  }

  getNewsById(id: number): Observable<INews> {
    if (id === 0) {
      return of(this.initNews());
    }
    return this.http
      .get<INews>(`${this.BASE_URL}/${id}`)
      .pipe(map((data: any) => this.adapter.adapt(data)));
  }

  getNews(): Observable<INews[]> {
    return this.http
      .get<INews[]>(this.BASE_URL)
      .pipe(map(data => data.map(item => this.adapter.adapt(item))));
  }

  getNewsCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`api/categories`);
  }

  deleteNews(id: number): Observable<{}> {
    return this.http.delete<INews>(`${this.BASE_URL}/${id}`);
  }

  initNews(): INews {
    return {
      id: 0,
      title: "",
      subtitle: "",
      image: null,
      description: "",
      category: null
    };
  }
}
