import { Component, OnInit } from '@angular/core';
import { trigger, style, state, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'app-random-generator',
  templateUrl: './random-generator.component.html',
  styleUrls: ['./random-generator.component.scss'],
  animations: [
    trigger('storePic', [
      state('close', style({ marginTop: '5rem', transformOrigin: 'center top', transform: 'scale(1)' })),
      state('expand', style({ marginTop: '1rem', transformOrigin: 'center top', transform: 'scale(0.5)' })),
      transition('close => expand', animate('300ms ease-in')),
      transition('expand => close', animate('300ms ease-in')),
    ]),
    trigger('storeInfo', [
      state('close', style({ display: 'flex' })),
      state('expand', style({ display: 'none' })),
      transition('expand => close', animate('300ms ease-in')),
      transition('expand => close', animate('100ms')),
    ]),
    trigger('functionBtn', [
      state('close', style({ transform: 'translateY(0)' })),
      state('expand', style({ transform: 'translateY(-250%)' })),
      transition('close => expand', animate('300ms ease-in')),
      transition('expand => close', animate('300ms ease-in')),
    ])
  ]
})
export class RandomGeneratorComponent implements OnInit {
  filterOpen: string = 'expand';
  dialogVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.filterOpen = this.filterOpen === 'close' ? 'expand' : 'close';
  }

  openDialog() {
    this.dialogVisible = true;
  }

}
