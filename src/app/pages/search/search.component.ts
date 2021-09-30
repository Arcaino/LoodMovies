import { Component, OnInit, Input } from '@angular/core';
import { ListasService } from '../listas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  name: any;
  listaAPI: any;
  listaAPIComplementar: any;
  title: string = '';

  constructor(public listaService: ListasService) { }

  ngOnInit() {
    this.listaService.listarEmAlta();
    this.listaAPI = this.listaService.todosEmTrending;
    this.title = 'Principais buscas';
  }

  Pesquisar(){
    if(this.name == ""){
      this.ngOnInit();
    }else{
        this.listaService.pesquisaGeral(this.name);
        this.listaAPI = this.listaService.pesquisaItems;
        this.title = 'Resultados';
        if(this.listaService.pesquisaItems[0].media_type == "tv"){
          this.listaService.obterSeriesSimilares(this.listaService.pesquisaItems[0].id);
          this.listaAPIComplementar = this.listaService.seriesSimilares;
        }
        else if(this.listaService.pesquisaItems[0].media_type == "movie"){
          this.listaService.obterFilmesSimilares(this.listaService.pesquisaItems[0].id);
          this.listaAPIComplementar = this.listaService.filmesSimilares;
        }
        return this.listaAPI;
    }
  }

}
