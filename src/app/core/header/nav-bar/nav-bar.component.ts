import { Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    this.abrirMenuMobile();
  }

  abrirMenuMobile(){
    $('.navbar__icone').on("click", function(){
      $(".navbar__icone").toggleClass("ativo");
      $(".navbar__menu").toggleClass("active");
      $(".navbar__menu__pesquisa").toggleClass("active");
    })
  }



}