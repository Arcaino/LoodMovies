import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaComponent } from './categoria/categoria.component';
import { SliderComponent } from './slider/slider.component';
import { SwiperModule } from 'swiper/angular';
import { ChartItemRoutingModule } from './slider/slider-routing.module';
import { ItemComponent } from './item/item.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  imports: [
    CommonModule,
    SwiperModule,
    ChartItemRoutingModule
  ],
  declarations: [
    CategoriaComponent,
    SliderComponent,
    ItemComponent,
    ListaComponent
  ],
  exports: [
    CategoriaComponent,
    SliderComponent,
    ItemComponent,
    ListaComponent
  ]
})
export class SharedModule { }
