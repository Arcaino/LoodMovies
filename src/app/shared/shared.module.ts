import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestaquesComponent } from '../shared/destaques/destaques.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DestaquesComponent
  ],
  exports: [
    DestaquesComponent
  ]
})
export class SharedModule { }
