import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelogioComponent } from './relogio/relogio.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RelogioComponent,
    NavBarComponent
  ],
  exports: [
    RelogioComponent,
    NavBarComponent
  ]
})
export class HeaderModule { }
