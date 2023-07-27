import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomGeneratorComponent } from './random-generator/random-generator.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path: '', component: RandomGeneratorComponent},
  {path: 'settings', component: SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
