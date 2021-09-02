import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  
  @Input() myVar : any;

  ngOnInit() {
    this.relogioDigital();
  }

  relogioDigital(){
    const dataRelogio = new Date();
    let horasRelogio = dataRelogio.getHours();
    let minutosRelogio = dataRelogio.getMinutes();
    this.myVar = horasRelogio + ':' + minutosRelogio;
    console.log(this.myVar)
    setTimeout(this.relogioDigital, 1000);
  }
  
}
