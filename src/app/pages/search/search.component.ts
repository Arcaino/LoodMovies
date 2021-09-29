import { Component, OnInit, Input } from '@angular/core';
import { ListasService } from '../listas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() item : any;

  constructor(public listaService: ListasService) { }

  ngOnInit() {
    this.listaService.listarEmAlta();
    console.log(this.listaService.todosEmTrending);
  }

}
