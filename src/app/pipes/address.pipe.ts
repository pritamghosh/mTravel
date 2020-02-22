import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "address"
})
export class AddressPipe implements PipeTransform {
  transform(value: string, limit: number): unknown {
    let op = "";
    let lastLine = op;
    let str: string[] = value.split(",");
    let lines = 1;
    for (let index = 0; index < str.length; index++) {
      if (lines == 3) {
        break;
      }
      let element = str[index];
      if (element.length > limit) {
        element = element.substring(0, limit - 3) + "...";
      }
      let tmp = lastLine + element;
      if (lastLine.length > limit) {
        lines++;
        op = op + ",\n" + element.trim();
        lastLine = element.trim();
      } else {
        op = op + "," + element;
        lastLine = lastLine + "," + element;
      }
    }
    if (op.length > 1) {
      op = op.substring(1, op.length);
    }
    while (lines < 3) {
      lines++;
      op = op + "\n";
    }
    return op;
  }
}
