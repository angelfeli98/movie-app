import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Cast, Movie } from 'src/app/interface/movie.interface';
import { MovieData, CharacterResponse } from '../../interface/movie.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  private id: string;
  public movie: MovieData;
  public characters: Cast[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private location: Location,
    private router: Router
  ){
      this.id = this.activatedRoute.snapshot.params.id;
      this.movieService.getMovieData(this.id).subscribe( ([cast, movie]: Array<CharacterResponse & MovieData>) => {
        this.characters = cast.cast;
        this.movie = movie;
      }, err => this.router.navigateByUrl('/home'));
    }

  ngOnInit(): void {
  }

  public goToBack = (): void => this.location.back();

}
