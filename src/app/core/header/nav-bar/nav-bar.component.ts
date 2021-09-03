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
    this.selecaoDeMenus();

  }

  abrirMenuMobile(){
    $('.navbar__icone').on("click", function(){
      $(".navbar__icone").toggleClass("ativo");
      $(".navbar__menu").toggleClass("active");
      $(".navbar__menu__pesquisa").toggleClass("active");
    })
  }

  selecaoDeMenus(){
    $('.navbar__menu__item__link').on("click", function(){
      $('.navbar__menu__item__link').removeClass("menuAtivo");
      $(this).toggleClass("menuAtivo");
    })
  }

}
