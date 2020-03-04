import { Component, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

@Component({
  selector: "app-file-uploader",
  templateUrl: "./file-uploader.component.html",
  styleUrls: ["./file-uploader.component.less"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileUploaderComponent),
      multi: true
    }
  ]
})
export class FileUploaderComponent implements ControlValueAccessor {
  private _value = "";
  imageSource: any;

  constructor() {}

  onChange: any = () => {};
  onTouch: any = () => {};

  set value(val: string) {
    if (val !== undefined && this._value !== val) {
      this._value = val;
      this.onChange(val);
      this.onTouch(val);
    }
  }

  writeValue(value: any) {
    this.value = value;
    this.imageSource = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.writeValue(reader.result);
      };
    }
  }
}
