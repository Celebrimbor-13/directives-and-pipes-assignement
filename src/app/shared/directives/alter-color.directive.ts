import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlterColor]',
})
export class AlterColorDirective {
  colors = [
    'red',
    'deeppink',
    'orange',
    'yellow',
    'purple',
    'green',
    'mediumspringgreen',
    'orangered',
    'darkorchid',
    'lime',
    'blue',
  ];
  @HostListener('mouseover') alterColor() {
    let randomColorIndex = Math.floor(Math.random() * this.colors.length);
    this.el.nativeElement.style.backgroundColor = this.colors[randomColorIndex];
  }
  constructor(private el: ElementRef) {}
}
