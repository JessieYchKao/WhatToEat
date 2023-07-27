import { trigger, transition, style, animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  currentLang = 'en';

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

  changeLang(lang: string) {
    this.currentLang = lang;
    this.translate.use(this.currentLang);
  }

}
