import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relogio',
  templateUrl: './relogio.component.html',
  styleUrls: ['./relogio.component.scss']
})
export class RelogioComponent implements OnInit {
  horas!: string;
  minutos!: string;
  private relogioId !: any;

  constructor() { }

  ngOnInit() {
    this.definirHorarioAtual();
    this.relogioId = this.atualizarRelogio();
  }

  ngOnDestroy() {
    clearInterval(this.relogioId);
  }

  private definirHorarioAtual() {
    const horario = new Date(Date.now());
    this.horas = this.colocarCasaDecimal(horario.getHours());
    this.minutos = this.colocarCasaDecimal(horario.getMinutes());
  }

  private atualizarRelogio() {
    setInterval(() => {
      this.definirHorarioAtual();
    }, 1000);
  }

  private colocarCasaDecimal(value: number) {
    return value < 10 ? `0${value}` : value.toString();
  }

}
