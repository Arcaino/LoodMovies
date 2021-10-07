import { Component, Input, OnInit } from '@angular/core';
import { ListasService } from 'src/app/pages/listas.service';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.scss']
})
export class PaginacaoComponent implements OnInit {

  @Input() metodoPaginacao: any;

  constructor(public listaService: ListasService, private tmdbService: TmdbService) { }

  ngOnInit() {
    console.log(this.metodoPaginacao(1));
  }

}
