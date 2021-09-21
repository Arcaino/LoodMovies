import { Component, OnInit } from '@angular/core';
import { ListasService } from '../listas.service';

@Component({
  selector: 'app-serials',
  templateUrl: './serials.component.html',
  styleUrls: ['./serials.component.scss']
})
export class SerialsComponent implements OnInit {

  constructor(public listaService: ListasService) { }

  ngOnInit() {
    this.listaService.listarSeriesPopulares();
    this.listaService.listarSeriesMaisBemVotadas();
    console.log(this.listaService.seriesMaisBemVotadas);
  }

}
