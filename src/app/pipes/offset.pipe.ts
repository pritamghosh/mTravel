import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "offset"
})
export class OffsetPipe implements PipeTransform {
  transform(value: number): string {
    if (value < 0) {
      return " -" + value + "D";
    } else if (value > 0) {
      return " +" + value + "D";
    }
    return "";
  }
}
