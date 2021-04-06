import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  /*
    elle doit changer la couleur du bacground dutarget
    a l'entrée et à la sortie de la souris

    la propriété à gérer
    Les événement à gérer
  */
  @Input() in = 'yellow';
  @Input() out = 'red';
  constructor(private element: ElementRef) {}
  @HostBinding('style.backgroundColor') bgc = this.out;

  @HostListener('mouseenter') onMouseEnter(): void {
    this.bgc = this.in;
    this.element.nativeElement.innerHTML = 'in';
  }
  @HostListener('mouseleave') onMouseLeave(): void {
    this.bgc = this.out;
    this.element.nativeElement.innerHTML = 'out';
  }
}
