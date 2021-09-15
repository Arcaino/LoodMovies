import { Component, OnInit } from '@angular/core';
import { ListasService } from '../listas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public listaService: ListasService) { 
  }

  ngOnInit() {
    this.listaService.listarSeriesPopulares();
    this.listaService.listarTrendingFilms();
    this.listaService.listarFilmesPopulares();
    this.listaService.listarFilmesLancamentos();
  }

}
