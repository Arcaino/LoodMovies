import { Injectable } from '@angular/core';
import { FilmeDetalhes, Midia } from '../models/midias-model';
import { TmdbService } from '../services/tmdb/tmdb.service';

@Injectable({
  providedIn: 'root'
})
export class ListasService {

  topMovies: Midia[] = [];
  trendingFilms: Midia[] = [];
  filmesPopulares: Midia[] = [];
  filmesLancamentos: Midia[] = [];
  seriesPopulares: Midia[] = [];
  seriesMaisBemVotadas: Midia[] = [];
  declare infoFilmeSelecionado: FilmeDetalhes;

constructor(private tmdbService: TmdbService) { }

listarTopMovies(){
  this.tmdbService.listarTopRated().subscribe(data => {
    this.topMovies = data.results;
  }, err => {
    console.log('Erro ao listar os filmes', err);
  })
}

listarTrendingFilms(){
  this.tmdbService.listarTrendingFilms().subscribe(data => {
    this.trendingFilms = data.results;
  }, err => {
    console.log('Erro ao listar os trending films', err);
  })
}

listarFilmesPopulares(){
  this.tmdbService.listarPopularFilmes().subscribe(data => {
    this.filmesPopulares = data.results;
  }, err => {
    console.log('Erro ao listar filmes populares', err);
  })
}

listarFilmesLancamentos(){
  this.tmdbService.listarLancamentos().subscribe(data => {
    this.filmesLancamentos = data.results;
  }, err => {
    console.log('Erro ao listar filmes em lançamento', err);
  })
}

listarSeriesPopulares(){
  this.tmdbService.listarSeriesPopulares().subscribe(data => {
    this.seriesPopulares = data.results;
  }, err => {
    console.log('Erro ao listar séries populares', err);
  })
}

listarSeriesMaisBemVotadas(){
  this.tmdbService.listarSeriesTopRated().subscribe(data => {
    this.seriesMaisBemVotadas = data.results;
  }, err => {
    console.log('Erro ao listar séries mais bem votadas', err);
  })
}

obterInformacoesMidiaSelecionada(id: number){
  this.tmdbService.obterInformacoesDoFilmePorId(id).subscribe(data => {
    this.infoFilmeSelecionado = data;
  }, err => {
    console.log('Erro ao listar informações do filme selecionado', err);
  })
}

}
