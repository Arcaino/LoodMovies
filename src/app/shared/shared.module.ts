import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaComponent } from './categoria/categoria.component';
import { ChartItemComponent } from './chart-item/chart-item.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    SwiperModule
  ],
  declarations: [
    CategoriaComponent,
    ChartItemComponent
  ],
  exports: [
    CategoriaComponent,
    ChartItemComponent
  ]
})
export class SharedModule { }
