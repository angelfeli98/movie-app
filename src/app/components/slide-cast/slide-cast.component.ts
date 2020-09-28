import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

import Swiper from 'swiper';
import { Cast } from 'src/app/interface/movie.interface';

@Component({
  selector: 'app-slide-cast',
  templateUrl: './slide-cast.component.html',
  styleUrls: ['./slide-cast.component.css']
})
export class SlideCastComponent implements OnInit, AfterViewInit {

  @Input() public cast: Cast[];
  private mySwiper: Swiper;

  constructor(){}

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container',{
      loop: false,
      slidesPerView: 1,
      freeMode: true,
      breakpoints: {
        100: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        640: {
          slidesPerView: 2.5,
          spaceBetween: 20,
          height: 220,
        },
        768: {
          slidesPerView: 3.5,
          spaceBetween: 40,
          height: 400,
        },
        1024: {
          slidesPerView: 5.5,
          spaceBetween: 50,
          height: 420,
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  }

  ngOnInit(): void {
  }

}
