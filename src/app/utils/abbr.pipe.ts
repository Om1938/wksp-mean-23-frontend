import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbr',
  standalone: true,
})
export class AbbrPipe implements PipeTransform {
  transform(name: string): string {
    if (!name) return '';
    return name
      .split(' ')
      .slice(0, 2)
      .map((n) => n[0].toLocaleUpperCase())
      .join('');
  }
}
