import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-destaques',
  templateUrl: './destaques.component.html',
  styleUrls: ['./destaques.component.scss']
})
export class DestaquesComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
