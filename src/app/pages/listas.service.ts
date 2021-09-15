import { Injectable } from '@angular/core';
import { TmdbService } from '../services/tmdb/tmdb.service';

@Injectable({
  providedIn: 'root'
})
export class ListasService {

  topMovies: Array<any> = new Array();
  trendingFilms: Array<any> = new Array();
  filmesPopulares: Array<any> = new Array();
  filmesLancamentos: Array<any> = new Array();
  seriesPopulares: Array<any> = new Array();
  seriesMaisBemVotadas: Array<any> = new Array();

constructor(private tmdbService: TmdbService) { }

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

listarSeriesPopulares(){
  this.tmdbService.listarSeriesPopulares().subscribe(seriesPopulares => {
    this.seriesPopulares = seriesPopulares.results;
  }, err => {
    console.log('Erro ao listar séries populares', err);
  })
}

listarSeriesMaisBemVotadas(){
  this.tmdbService.listarSeriesTopRated().subscribe(seriesMaisBemVotadas => {
    this.seriesMaisBemVotadas = seriesMaisBemVotadas.results;
  }, err => {
    console.log('Erro ao listar séries mais bem votadas', err);
  })
}

}
