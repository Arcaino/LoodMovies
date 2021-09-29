import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SerialsComponent } from './serials/serials.component';
import { InfoComponent } from './info/info.component';
import { SearchComponent } from './search/search.component';

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
    InfoComponent,
    SearchComponent
  ],
  exports: [
    MoviesComponent,
    HomeComponent,
    SerialsComponent,
    InfoComponent,
    SearchComponent
  ]
})
export class PagesModule { }
