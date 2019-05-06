import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe',
  pure: false
})
export class FilterpipePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return null;
  }

}
