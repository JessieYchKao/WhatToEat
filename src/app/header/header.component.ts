import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  sidebarContent = {
    visible: false
  };
  constructor() { }

  ngOnInit(): void {
  }

  openSidebar() {
    this.sidebarContent.visible = !this.sidebarContent.visible;
  }

}
