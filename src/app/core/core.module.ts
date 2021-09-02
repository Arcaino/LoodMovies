import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  exports: [
    HeaderModule
  ]
})
export class CoreModule { }
