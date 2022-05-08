import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { trigger, style, transition, animate, } from '@angular/animations';
import { DialogContent } from '../interface/dialogContent';
import { OptionType, OtherOptions } from '../interface/option';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ bottom: '-100rem' }),
        animate('200ms ease-in')
      ]),
      transition('* => void', [
        style({ bottom: '-100rem' })
      ])
    ])
  ]
})
export class DialogComponent implements OnInit {

  @Input() dialogContent: DialogContent = {
    title: '',
    visible: false,
    type: {
      name: '',
      type: OptionType.mainCategory,
      choice: OtherOptions.all
    }
  };
  @Input() title: string = '';
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.dialogContent.visible = false;
  }

}
