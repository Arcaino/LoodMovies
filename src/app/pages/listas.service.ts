import { Injectable } from '@angular/core';
import { FilmeDetalhes, Filme, SeriesDetalhes, Serie, Midia, ResponsePageableMidias } from '../models/midias-model';
import { TmdbService } from '../services/tmdb/tmdb.service';

@Injectable({
  providedIn: 'root'
})
export class ListasService {

  topMovies: Filme[] = [];
  trendingFilms: Filme[] = [];
  filmesPopulares: Filme[] = [];
  filmesLancamentos: Filme[] = [];
  seriesPopulares: Serie[] = [];
  seriesMaisBemVotadas: Serie[] = [];
  filmesSimilares: Filme[] = [];
  seriesSimilares: Serie[] = [];
  filmesRecomendados: Filme[] = [];
  seriesRecomendadas: Serie[] = [];
  pesquisaItems: Midia[] = [];
  todosEmTrending: Midia[] = [];
  declare infoFilmeSelecionado: FilmeDetalhes;
  declare infoSerieSelecionada: SeriesDetalhes;

  ultimaPagina: number = 0;
  paginaAtual: number = 0;

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

listarEmAlta(page: number){
  this.tmdbService.listarTodosEmTrending(page).subscribe(data => {
    this.todosEmTrending = data.results;
    this.ultimaPagina = data.total_pages;
    this.paginaAtual = data.page
  }, err => {
    console.log('Erro ao listar midias em alta', err);
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

obterInformacoesSerieSelecionada(id: number){
  this.tmdbService.obterInformacoesDaSeriePorId(id).subscribe(data => {
    this.infoSerieSelecionada = data;
  }, err => {
    console.log('Erro ao listar informações da série selecionada', err);
  })
}

obterFilmesSimilares(id: number){
  this.tmdbService.obterFilmesSimilaresPorId(id).subscribe(data => {
    this.filmesSimilares = data.results;
  }, err => {
    console.log('Erro ao obter a lista de filmes similares', err);
  })
}

obterSeriesSimilares(id: number){
  this.tmdbService.obterSeriesSimilaresPorId(id).subscribe(data => {
    this.seriesSimilares = data.results;
  }, err => {
    console.log('Erro ao obter a lista de series similares', err);
  })
}

pesquisaGeral(query: string){
  this.tmdbService.pesquisaGeral(query).subscribe(data => {
    this.pesquisaItems = data.results;
  }, err => {
    console.log('Erro ao pesquisar item desejado', err);
  })
}

obterFilmesRecomendados(id: number){
  this.tmdbService.obterRecomendacoesFilmePorId(id).subscribe(data => {
    this.filmesRecomendados = data.results;
  }, err => {
    console.log('Erro ao obter a lista de filmes similares', err);
  })
}

obterSeriesRecomendadas(id: number){
  this.tmdbService.obterRecomendacoesSeriePorId(id).subscribe(data => {
    this.seriesRecomendadas = data.results;
  }, err => {
    console.log('Erro ao obter a lista de filmes similares', err);
  })
}

}
