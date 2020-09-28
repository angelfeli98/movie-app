
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interface/movie.interface';

@Component({
    selector: 'app-movie-grid',
    templateUrl: './movie-grid.component.html',
    styleUrls: ['./movie-grid.component.css']
})
export class MovieGridComponent implements OnInit{

    @Input() public movies: Movie[];

    constructor(
    ){
    }

    ngOnInit(): void {
    }
}
