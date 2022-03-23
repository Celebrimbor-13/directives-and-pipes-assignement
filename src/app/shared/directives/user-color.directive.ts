import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { Color, Status } from 'src/app/models/colors-statuses';

@Directive({
  selector: '[appUserColor]',
})
export class UserColorDirective implements OnInit {
  @Input('appUserColor') userStatus!: string;
  @HostListener('click') changeColor() {
    this.el.nativeElement.style.backgroundColor = this.color.Yellow;
    this.el.nativeElement.style.color = this.color.White;
  }
  color = Color;
  status = Status;
  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    switch (this.userStatus) {
      case this.status.Active:
        this.el.nativeElement.style.backgroundColor = this.color.Green;
        this.el.nativeElement.style.color = this.color.RedText;
        break;
      case this.status.Inactive:
        this.el.nativeElement.style.backgroundColor = this.color.Red;
        this.el.nativeElement.style.color = this.color.GreenText;
        break;
      case this.status.Disabled:
        this.el.nativeElement.style.backgroundColor = this.color.Blue;
        this.el.nativeElement.style.color = this.color.White;
        break;
    }
  }
}
