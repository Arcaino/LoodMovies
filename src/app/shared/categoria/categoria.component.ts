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
    spaceBetween: 60,
    initialSlide: 1,
    autoHeight: false,
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    centeredSlides: true,
    slidesOffsetBefore: 0,
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
