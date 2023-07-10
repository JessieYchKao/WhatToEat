import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { trigger, style, transition, animate, } from '@angular/animations';
import { DialogContent } from '../interface/dialogContent';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  animations: [
    trigger('dialog', [
      transition(':enter', [
        style({ bottom: '-300px' }),
        animate('300ms ease-in-out', style({bottom: '0rem'}))
      ])
    ])
  ]
})
export class DialogComponent implements OnInit {

  @Input() dialogContent: DialogContent = {
    title: '',
    visible: false
  };
  @Input() title: string = '';
  @Output() autoSave: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.dialogContent.visible = false;
    this.autoSave.emit(true);
  }

}
