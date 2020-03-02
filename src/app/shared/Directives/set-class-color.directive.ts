import { Directive, Input, ElementRef, Renderer2, OnInit } from "@angular/core";
import { NewsCategories } from "../../news/Models/INews.interface";
import { Colors } from "../../news/Models/Colors.enum";

@Directive({
  selector: "[appSetClassColor]"
})
export class SetClassColorDirective implements OnInit {
  @Input() category: NewsCategories;
  @Input() set selectedCategory(selectedCategory: string) {
    if (selectedCategory !== this.category) {
      this.renderer.removeClass(
        this.hostElement.nativeElement,
        `btn-${Colors[this.category]}`
      );
      this.renderer.removeClass(this.hostElement.nativeElement, `text-white`);
    } else {
      this.renderer.addClass(
        this.hostElement.nativeElement,
        `btn-${Colors[this.category]}`
      );
      this.renderer.addClass(this.hostElement.nativeElement, `text-white`);
    }
  }

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {}

  ngOnInit() {
    this.renderer.addClass(
      this.hostElement.nativeElement,
      `btn-outline-${Colors[this.category]}`
    );
  }
}
