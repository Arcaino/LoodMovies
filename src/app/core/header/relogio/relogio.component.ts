import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relogio',
  templateUrl: './relogio.component.html',
  styleUrls: ['./relogio.component.scss']
})
export class RelogioComponent implements OnInit {
  horas!: any;
  minutos!: any;
  periodo!: string;
  private relogioId !: any;

  constructor() { }

  ngOnInit() {
    this.formatarHorario();
    this.relogioId = this.atualizarRelogio();
  }

  ngOnDestroy() {
    clearInterval(this.relogioId);
  }

  private definirHorarioAtual() {
    const horario = new Date(Date.now());
    this.horas = horario.getHours();
    this.minutos = horario.getMinutes();
  }

  private atualizarRelogio() {
    setInterval(() => {
      this.formatarHorario();
    }, 1000);
  }

  private colocarCasaDecimal(value: number) {
    return value < 10 ? `0${value}` : value.toString();
  }

  private formatarHorario() {
    this.definirHorarioAtual();
    this.periodo = this.horas >= 12 ? 'PM' : 'AM';
    this.horas = this.horas % 12;
    this.horas = this.horas ? this.horas : 12;
    this.minutos = this.colocarCasaDecimal(this.minutos);
  }

}
