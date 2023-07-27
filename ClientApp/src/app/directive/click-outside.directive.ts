import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[clickOutside]',
  host: {
    '(document:click)': 'onClick($event)',
  }
})
export class ClickOutsideDirective {

  @Input() isModal = false;
  @Output() clickOutside = new EventEmitter<void>();

  constructor() { }

  onClick(event: any) {
    const target = event.target.className.toString();
    console.log(target);
    if (this.isModal && target.includes('modal')) {
      this.clickOutside.emit();
    } else if (!this.isModal && !target.includes('inside-area')) {
      this.clickOutside.emit();
    }
  }
}
