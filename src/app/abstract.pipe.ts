import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "abstract"
})
export class AbstractPipe implements PipeTransform {
  transform(value: string, args?: any): any {
    const abstractString = value.substring(0, 150);
    return abstractString + "...";
  }
}
