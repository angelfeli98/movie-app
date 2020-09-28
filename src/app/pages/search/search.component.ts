import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interface/movie.interface';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public field: string;
  private page: number;
  public movies: Movie[];

  constructor(
    private activedRoute: ActivatedRoute,
    private movieService: MovieService
  ){
    this.page = 2;
    this.movies = [];
    this.movieService.getMoviesByName.subscribe( res => this.movies = res.results);

    this.activedRoute.params.subscribe( params => {
                                                      this.field = params.field;
                                                      if (this.field || this.field !== ''){
                                                        this.movieService.getMovieByField(this.field);
                                                      }else{
                                                        this.movies = [];
                                                      }
                                                  });
  }

  ngOnInit(): void {
  }

}
