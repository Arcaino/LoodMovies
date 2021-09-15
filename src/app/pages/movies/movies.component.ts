import { Component, OnInit } from '@angular/core';
import { ListasService } from '../listas.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(public listaService: ListasService) { }

  ngOnInit() {
    this.listaService.listarTopMovies();
  }

}
