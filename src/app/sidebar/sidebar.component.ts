import { trigger, transition, style, animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-50px)' }),
        animate('150ms')
      ]),
      transition(':leave', [
        animate('150ms', style({ transform: 'translateY(-50px)', opacity: 1}))
      ])
    ])
  ]
})
export class SidebarComponent implements OnInit {

  @Input() content = {
    visible: false,
  };
  @Input() title: string = '';
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.content.visible = false;
  }

}
