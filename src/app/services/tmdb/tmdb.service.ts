import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE, API_KEY } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

constructor(private httpClient: HttpClient) { }

  public listarPopularFilmes() : Observable<any>{
    return this.httpClient.get(`${API_BASE}movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
  }

  public listarTopRated() : Observable<any>{
    return this.httpClient.get(`${API_BASE}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
  }

  public listarLancamentos() : Observable<any>{
    return this.httpClient.get(`${API_BASE}movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
  }

  public listarTrendingFilms() : Observable<any>{
    return this.httpClient.get(`${API_BASE}trending/all/day?api_key=${API_KEY}`)
  }

}
