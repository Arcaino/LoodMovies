import { Component, OnInit, Input } from '@angular/core';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';
import SwiperCore, { SwiperOptions  } from 'swiper';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

@Component({
  selector: 'app-chart-item',
  templateUrl: './chart-item.component.html',
  styleUrls: ['./chart-item.component.scss']
})
export class ChartItemComponent implements OnInit {

  @Input() title = '';

  config: SwiperOptions = {
    spaceBetween: 30,
    slidesPerView: 2,
    centeredSlides: false,
    slidesOffsetBefore: 40,
    breakpoints: {
      360: {
        slidesPerView: 3,
        spaceBetween: 160,
      },
      570: {
        slidesPerView: 4,
        spaceBetween: 120,
      },
      900: {
        slidesPerView: 5,
      },
      1100: {
        slidesPerView: 6,
      },
      1320: {
        slidesPerView: 7,
      },
      1680: {
        slidesPerView: 9,
        spaceBetween: 40,
      },
      1900: {
        slidesPerView: 11,
        spaceBetween: 110,
      }
    },
  };

  topMovies: Array<any> = new Array();

  constructor(private tmdbService: TmdbService) { }

  ngOnInit() {
    this.listarTopMovies();
  }

  listarTopMovies(){
    this.tmdbService.listarFilmes().subscribe(topMovies => {
      this.topMovies = topMovies.results;
      console.log(this.topMovies);
    }, err => {
      console.log('Erro ao listar os filmes', err);
    })
  }

}
