import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "time"
})
export class TimePipe implements PipeTransform {
  transform(value: string): unknown {
    if (value.length == 4) {
      return value.substring(0, 2) + ":" + value.substring(2);
    }
    return value;
  }
}
