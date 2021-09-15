import { Component, OnInit } from '@angular/core';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  topMovies: Array<any> = new Array();
  trendingFilms: Array<any> = new Array();
  filmesPopulares: Array<any> = new Array();
  filmesLancamentos: Array<any> = new Array();

  constructor(private tmdbService: TmdbService) { }

  ngOnInit() {
    this.listarTopMovies();
    this.listarTrendingFilms();
    this.listarFilmesPopulares();
    this.listarFilmesLancamentos();
  }

  listarTopMovies(){
    this.tmdbService.listarTopRated().subscribe(topMovies => {
      this.topMovies = topMovies.results;
    }, err => {
      console.log('Erro ao listar os filmes', err);
    })
  }

  listarTrendingFilms(){
    this.tmdbService.listarTrendingFilms().subscribe(trendingFilms => {
      this.trendingFilms = trendingFilms.results;
    }, err => {
      console.log('Erro ao listar os trending films', err);
    })
  }

  listarFilmesPopulares(){
    this.tmdbService.listarPopularFilmes().subscribe(filmesPopulares => {
      this.filmesPopulares = filmesPopulares.results;
    }, err => {
      console.log('Erro ao listar filmes populares', err);
    })
  }

  listarFilmesLancamentos(){
    this.tmdbService.listarLancamentos().subscribe(filmesLancamentos => {
      this.filmesLancamentos = filmesLancamentos.results;
    }, err => {
      console.log('Erro ao listar filmes em lançamento', err);
    })
  }

}
