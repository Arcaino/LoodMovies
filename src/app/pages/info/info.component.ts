import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListasService } from '../listas.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  id: number = 0;
  
  constructor(private route: ActivatedRoute, public listaService: ListasService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.listaService.obterInformacoesMidiaSelecionada(this.id);
    this.listaService.listarTopMovies();
    this.listaService.obterFilmesSimilares(this.id);
    console.log(this.listaService.topMovies);
    console.log(this.listaService.infoFilmeSelecionado);
  }
}
