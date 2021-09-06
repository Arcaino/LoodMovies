import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaComponent } from './categoria/categoria.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    SwiperModule
  ],
  declarations: [
    CategoriaComponent
  ],
  exports: [
    CategoriaComponent
  ]
})
export class SharedModule { }
