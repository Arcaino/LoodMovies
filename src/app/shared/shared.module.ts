import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestaquesComponent } from '../shared/destaques/destaques.component';
import { CategoriaComponent } from './categoria/categoria.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DestaquesComponent,
    CategoriaComponent
  ],
  exports: [
    DestaquesComponent,
    CategoriaComponent
  ]
})
export class SharedModule { }
