import { Directive, Input, ElementRef, HostListener } from "@angular/core";
declare function require(path: string);
@Directive({
  selector: "[appOnError]"
})
export class OnErrorDirective {
  private defaultImage = "assets/default-image.jpg";
  constructor(private eRef: ElementRef) {}

  @HostListener("error")
  setDefaultImage() {
    const element: HTMLImageElement = this.eRef
      .nativeElement as HTMLImageElement;
    element.src = this.defaultImage;
  }
}
