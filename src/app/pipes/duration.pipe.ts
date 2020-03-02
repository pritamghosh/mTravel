import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "duration"
})
export class DurationPipe implements PipeTransform {
  transform(value: any, text: boolean = false): string {
    let str = "";
    if (text) {
      str = value;
      return str.toLowerCase().replace("h", "h ");
    }
    let hr = Math.floor(value / 60);
    if (hr > 0) {
      str + hr + "h ";
    }
    return str + (value % 60) + "m";
  }
}
