import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelogioComponent } from './relogio/relogio.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarRoutingModule } from './nav-bar/nav-bar-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NavBarRoutingModule
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
