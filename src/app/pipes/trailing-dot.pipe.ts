import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "trailingDot"
})
export class TrailingDotPipe implements PipeTransform {
  transform(value: string, limit: number): unknown {
    if (limit > 3 && value.length > limit) {
      if (value.length > limit) {
        return value.substr(0, limit - 3) + "...";
      }
    }
    return value;
  }
}
