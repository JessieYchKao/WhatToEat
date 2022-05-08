import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RandomGeneratorComponent } from './random-generator/random-generator.component';
import { DialogComponent } from './dialog/dialog.component';
import { ClickOutsideDirective } from './directive/click-outside.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RandomGeneratorComponent,
    DialogComponent,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
