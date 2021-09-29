import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { SearchComponent } from 'src/app/pages/search/search.component';
import { MoviesComponent } from '../../../pages/movies/movies.component';
import { SerialsComponent } from '../../../pages/serials/serials.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'serials', component: SerialsComponent},
  { path: 'search', component: SearchComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NavBarRoutingModule { }
