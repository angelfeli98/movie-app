
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject, throwError, zip } from 'rxjs';
import { environment } from '../../environments/environment';
import { MovieResponse, MovieData, CharacterResponse } from '../interface/movie.interface';
import { Movie } from 'src/app/interface/movie.interface';
import { exhaustMap, concatMap, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MovieService{

    private url: string;
    private key: string;
    private movies: any;
    private page: number;
    private nameMovie: any;
    private field: string;

    constructor(
        private http: HttpClient
    ){
        this.url = environment.url;
        this.key = environment.api_key;
        this.movies = new Subject<MovieResponse>().pipe( exhaustMap<any, Observable<MovieResponse | null>>( event =>
                                                        this.http.get<MovieResponse>(`${this.url}/now_playing?language=en-US&page=${this.page}`)));
        this.nameMovie = new Subject<MovieResponse>().pipe( concatMap<any, Observable<MovieResponse>>( event =>
            this.http.get<MovieResponse>(`https://api.themoviedb.org/3/search/movie?language=en-US&query=${this.field}&page=1&include_adult=false`))
        );
    }

    public getMovieByField = (field: string, page: number = 1): void => {
        this.page = page;
        this.field = field;
        this.nameMovie.next();
    }

    public getMovieData = (idMovie: string): Observable< (CharacterResponse | MovieData)[]> =>
                    zip(
                        this.http.get<CharacterResponse>(`${this.url}/${idMovie}/credits`),
                        this.http.get<MovieData>(`${this.url}/${idMovie}`)).pipe( catchError(err => throwError(null)) )

    public getMovieSPlaying = (page: number = 1): void => {
        this.page = page;
        this.movies.next();
    }

    public get getMovies(): Observable<MovieResponse>{
        return this.movies.asObservable();
    }

    public get getMoviesByName(): Observable<MovieResponse>{
        return this.nameMovie.asObservable();
    }

}
