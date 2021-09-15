import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { MoviesComponent } from '../../../pages/movies/movies.component';
import { SerialsComponent } from '../../../pages/serials/serials.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'serials', component: SerialsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NavBarRoutingModule { }
