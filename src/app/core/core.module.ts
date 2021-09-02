import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RelogioComponent } from './relogio/relogio.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    RelogioComponent
  ],
  exports: [
    HeaderComponent,
    RelogioComponent
  ]
})
export class CoreModule { }
