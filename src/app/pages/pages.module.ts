import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SerialsComponent } from './serials/serials.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: [
    MoviesComponent,
    HomeComponent,
    SerialsComponent,
    InfoComponent
  ],
  exports: [
    MoviesComponent,
    HomeComponent,
    SerialsComponent,
    InfoComponent
  ]
})
export class PagesModule { }
