import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE, API_KEY } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { FilmeDetalhes, ResponsePageableFilmes, ResponsePageableMidias, ResponsePageableSeries, SeriesDetalhes } from 'src/app/models/midias-model';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

constructor(private httpClient: HttpClient) { }

  public listarPopularFilmes() : Observable<ResponsePageableFilmes>{
    return this.httpClient.get<ResponsePageableFilmes>(`${API_BASE}movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
  }

  public listarTopRated() : Observable<ResponsePageableFilmes>{
    return this.httpClient.get<ResponsePageableFilmes>(`${API_BASE}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
  }

  public listarLancamentos() : Observable<ResponsePageableFilmes>{
    return this.httpClient.get<ResponsePageableFilmes>(`${API_BASE}movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
  }

  public listarTrendingFilms() : Observable<ResponsePageableFilmes>{
    return this.httpClient.get<ResponsePageableFilmes>(`${API_BASE}trending/all/day?api_key=${API_KEY}`)
  }

  public listarSeriesPopulares() : Observable<ResponsePageableSeries>{
    return this.httpClient.get<ResponsePageableSeries>(`${API_BASE}tv/popular?api_key=${API_KEY}&language=en-US&page=1`)
  }

  public listarSeriesTopRated() : Observable<ResponsePageableSeries>{
    return this.httpClient.get<ResponsePageableSeries>(`${API_BASE}tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
  }

  public obterInformacoesDoFilmePorId(id: number) : Observable<FilmeDetalhes>{
    return this.httpClient.get<FilmeDetalhes>(`${API_BASE}movie/${id}?api_key=${API_KEY}&language=en-US`)
  }

  public obterInformacoesDaSeriePorId(id: number) : Observable<SeriesDetalhes>{
    return this.httpClient.get<SeriesDetalhes>(`${API_BASE}tv/${id}?api_key=${API_KEY}&language=en-US`)
  }

  public obterFilmesSimilaresPorId(id: number) : Observable<ResponsePageableFilmes>{
    return this.httpClient.get<ResponsePageableFilmes>(`${API_BASE}movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
  } 

  public obterSeriesSimilaresPorId(id: number) : Observable<ResponsePageableSeries>{
    return this.httpClient.get<ResponsePageableSeries>(`${API_BASE}tv/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
  }

  public pesquisaGeral(query : string) : Observable<ResponsePageableMidias>{
    return this.httpClient.get<ResponsePageableMidias>(`${API_BASE}search/multi?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`)
  }

  public listarTodosEmTrending() : Observable<ResponsePageableMidias>{
    return this.httpClient.get<ResponsePageableMidias>(`${API_BASE}trending/all/week?api_key=${API_KEY}`)
  }
}
