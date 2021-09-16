import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaComponent } from './categoria/categoria.component';
import { ChartItemComponent } from './chart-item/chart-item.component';
import { SwiperModule } from 'swiper/angular';
import { ChartItemRoutingModule } from './chart-item/chart-item-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SwiperModule,
    ChartItemRoutingModule
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
