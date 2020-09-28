
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDescriptionPipe } from './description.pipe';
import { PosterMoviePipe } from './poster-movie.pipe';

@NgModule({
    declarations: [
        MovieDescriptionPipe,
        PosterMoviePipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        MovieDescriptionPipe,
        PosterMoviePipe
    ]
})
export class PipesModule{}