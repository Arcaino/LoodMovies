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
  listaAPISimilares: any;
  listaAPIRecomendacoes: any;
  title: string = '';

  constructor(public listaService: ListasService) { }

  ngOnInit() {
    this.listaService.listarEmAlta(1);
    this.listaAPI = this.listaService.todosEmTrending;
    this.title = 'Principais buscas';
  }

  Pesquisar(){
    if(this.name == ''){
      $(".resultados__midias").css("grid-template-areas", ". .");
      this.ngOnInit();
    }else{
        $(".resultados__midias").css("grid-template-areas", "unset");
        this.listaService.pesquisaGeral(this.name);
        this.listaAPI = this.listaService.pesquisaItems;
        this.title = 'Resultados';
        if(this.listaService.pesquisaItems[0].media_type == "tv"){
          this.listaService.obterSeriesSimilares(this.listaService.pesquisaItems[0].id);
          this.listaService.obterSeriesRecomendadas(this.listaService.pesquisaItems[0].id);
          this.listaAPISimilares = this.listaService.seriesSimilares;
          this.listaAPIRecomendacoes = this.listaService.seriesRecomendadas;
        }
        else if(this.listaService.pesquisaItems[0].media_type == "movie"){
          this.listaService.obterFilmesSimilares(this.listaService.pesquisaItems[0].id);
          this.listaService.obterFilmesRecomendados(this.listaService.pesquisaItems[0].id);
          this.listaAPISimilares = this.listaService.filmesSimilares;
          this.listaAPIRecomendacoes = this.listaService.filmesRecomendados;
        }

        Array.prototype.push.apply(this.listaAPI,this.listaAPIRecomendacoes); 
        console.log(this.listaAPI);

        return this.listaAPI;
    }
  }

  Contador(current: number) {
    return new Array(current);
  }

}
