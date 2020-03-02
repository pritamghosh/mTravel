import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "duration"
})
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    let hr = Math.floor(value / 60);
    let str = "";
    if (hr > 0) {
      str + hr + "h ";
    }
    return str + (value % 60) + "m";
  }
}
