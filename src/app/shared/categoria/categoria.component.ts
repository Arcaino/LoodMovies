import { Component, Input, OnInit } from '@angular/core';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  filmesPopulares: Array<any> = new Array();

  constructor(private tmdbService: TmdbService) { }

  ngOnInit() {
    this.listarFilmes();
  }

  listarFilmes(){
    this.tmdbService.listarFilmes().subscribe(filmesPopulares => {
      this.filmesPopulares = filmesPopulares.results;
      console.log(this.filmesPopulares);
    }, err => {
      console.log('Erro ao listar os filmes', err);
    })
  }

}
