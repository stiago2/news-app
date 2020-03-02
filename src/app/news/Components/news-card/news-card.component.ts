import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { INews } from "app/news/Models/INews.interface";
import { Colors } from "app/news/Models/Colors.enum";

@Component({
  selector: "app-news-card",
  templateUrl: "./news-card.component.html",
  styleUrls: ["./news-card.component.less"]
})
export class NewsCardComponent implements OnInit {
  @Input() news: INews;
  @Output() onDelete = new EventEmitter();
  @Output() onEdit = new EventEmitter<number>();
  colorClass: string;

  constructor() {}

  ngOnInit() {
    this.colorClass = Colors[this.news.category];
  }

  edit() {
    this.onEdit.emit(this.news.id);
  }

  delete() {
    this.onDelete.emit({ id: this.news.id, title: this.news.title });
  }
}
