import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ICategory } from "@core/Models/ICategory.interface";

@Component({
  selector: "app-radio-button",
  templateUrl: "./radio-button.component.html",
  styleUrls: ["./radio-button.component.less"]
})
export class RadioButtonComponent implements OnInit {
  @Input() categories: ICategory[];
  @Input() model: string;
  @Output() onOptionSelected = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  select(value: string) {
    this.onOptionSelected.emit(value);
  }
}
