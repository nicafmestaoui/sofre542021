import { Pipe, PipeTransform } from '@angular/core';
import { config } from '../../../environments/config';

@Pipe({
  name: 'defaultImage',
})
export class DefaultImagePipe implements PipeTransform {
  transform(path: string): string {
    if (path.trim().length) {
      return path;
    }
    return config.defaultImage;
  }
}
