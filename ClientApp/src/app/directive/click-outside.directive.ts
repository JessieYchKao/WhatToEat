import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[clickOutside]',
  host: {
    '(document:click)': 'onClick($event)',
  }
})
export class ClickOutsideDirective {

  @Output() clickOutside = new EventEmitter<void>();

  constructor() { }

  onClick(event: any) {
    const target = event.target.className.toString();
    if (target.includes('modal')) {
      this.clickOutside.emit();
    }
  }
}
