import { AbstractControl, ValidatorFn } from "@angular/forms";

export function ValidateTitleLength(
  control: AbstractControl
): { [key: string]: boolean } | null {
  const title = control.get("title").value || "";
  const subtitle = control.get("subtitle").value || "";
  if (title.length >= subtitle.length && title !== "") {
    return { invalidLength: true };
  }

  return null;
}
