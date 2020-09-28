
import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie, MovieResponse } from 'src/app/interface/movie.interface';
import { Subscription } from 'rxjs';
import { HostListener } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent{

    public movies: Movie[];
    public page: number;
    private maxPage: number;

    constructor(
        private movieService: MovieService
    ){
        this.page = 2;
        this.movies = [];
        this.movieService.getMovies.subscribe( res => {
            this.movies = this.movies.concat(res.results);
            this.maxPage = res.total_pages;
        });
        this.movieService.getMovieSPlaying();
    }

    @HostListener('document:scroll', ['$event'])
    private InifnityScroll = (event: Event): void => {
        const limit = document.documentElement.scrollHeight || document.body.scrollHeight;
        const currentHeiht = document.documentElement.scrollTop || document.body.scrollTop;
        const wind = document.documentElement.clientHeight;
        if (currentHeiht + wind > Math.floor(limit * 0.9) && this.page <= this.maxPage){
            this.movieService.getMovieSPlaying(this.page);
            this.page++;
        }
    }

}
