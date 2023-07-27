import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
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
export class HeaderComponent implements OnInit {

  sidebarVisible = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  route(path: string) {
    this.router.navigate([path]);
  }

}
