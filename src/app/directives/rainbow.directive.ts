import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]',
})
export class RainbowDirective {
  @HostBinding('style.color') color = 'black';
  @HostBinding('style.borderColor') bcolor = 'black';
  constructor() {}
  getRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  @HostListener('keyup') onKeyUp(): void {
    this.color = this.bcolor = this.getRandomColor();
  }
}
