import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';
import SwiperCore, { SwiperOptions  } from 'swiper';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  config: SwiperOptions = {
    spaceBetween: 200,
    initialSlide: 1,
    autoHeight: false,
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    centeredSlides: true,
    slidesOffsetBefore: -90,
    breakpoints: {
      360: {
        spaceBetween: 230,
        slidesOffsetBefore: -100,
      },
      420: {
        spaceBetween: 270,
        slidesOffsetBefore: -120,
      },
      500: {
        spaceBetween: 300,
        slidesOffsetBefore: -130,
      },
      570: {
        spaceBetween: 380,
        slidesOffsetBefore: -165,
      },
      700: {
        spaceBetween: 480,
        slidesOffsetBefore: -205,
      },
      900: {
        spaceBetween: 580,
        slidesOffsetBefore: -255,
      },
      1100: {
        spaceBetween: 700,
        slidesOffsetBefore: -320,
      },
      1320: {
        spaceBetween: 900,
        slidesOffsetBefore: -400,
      },
      1680: {
        spaceBetween: 1100,
        slidesOffsetBefore: -500,
      },
      1900: {
        spaceBetween: 1200,
        slidesOffsetBefore: -550,
      }
    }
  };

  filmesPopulares: Array<any> = new Array();

  constructor(private tmdbService: TmdbService) { }

  ngOnInit() {
    this.listarFilmes();
  }

  listarFilmes(){
    this.tmdbService.listarFilmes().subscribe(filmesPopulares => {
      this.filmesPopulares = filmesPopulares.results;
      console.log(this.filmesPopulares);
    }, err => {
      console.log('Erro ao listar os filmes', err);
    })
  }
}
