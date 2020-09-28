import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Movie } from 'src/app/interface/movie.interface';

import Swiper from 'swiper/bundle';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() public movies: Movie[];
  private mySwiper: Swiper;

  constructor(){
    this.movies = [];
  }

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // If we need pagination
      // pagination: {
      //   el: '.swiper-pagination',
      // },

      // // Navigation arrows

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      autoplay: {
        delay: 2000,
      }
    });
  }

  ngOnInit(): void {
  }

  public nextSlide = (): void => {
    this.mySwiper.slideNext();
  }

  public prevSlide = (): void => {
    this.mySwiper.slidePrev();
  }

  public get getMovies(): Movie[]{
    return this.movies;
  }

}
