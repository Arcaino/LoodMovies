import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListasService } from '../listas.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  id: number = 0;
  
  constructor(private route: ActivatedRoute, public listaService: ListasService, private router: Router) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.listaService.obterInformacoesMidiaSelecionada(this.id);
    this.listaService.listarTopMovies();
    this.listaService.obterFilmesSimilares(this.id);
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
}
