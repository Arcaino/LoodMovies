import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE, API_KEY } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

constructor(private httpClient: HttpClient) { }

  public listarFilmes() : Observable<any>{
    console.log(`${API_BASE}movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    return this.httpClient.get(`${API_BASE}movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
  }

}
