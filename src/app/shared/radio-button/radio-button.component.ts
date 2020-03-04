import { Component, Input, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

@Component({
  selector: "app-radio-button",
  templateUrl: "./radio-button.component.html",
  styleUrls: ["./radio-button.component.less"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButtonComponent),
      multi: true
    }
  ]
})
export class RadioButtonComponent implements ControlValueAccessor {
  @Input() categories: any[];
  private _value = "";
  selectedCategory = "";
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
    this.selectedCategory = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }
}
