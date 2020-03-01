import { AbstractControl, ValidatorFn } from "@angular/forms";

export function ValidateTitleLength(
  control: AbstractControl
): { [key: string]: boolean } | null {
  const title = control.get("title");
  const subtitle = control.get("subtitle");
  if (title.value.length >= subtitle.value.length && title.value !== "") {
    return { invalidLength: true };
  }
  return null;
}
