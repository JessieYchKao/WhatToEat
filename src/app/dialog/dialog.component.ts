import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { trigger, style, state, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ bottom: '0' }),
        animate('200ms ease-in')
      ]),
      transition('* => void', [
        style({ bottom: '-100rem' })
      ])
    ])
  ]
})
export class DialogComponent implements OnInit {

  @Input() visible: boolean = false;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

}
