
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'poster'
})
export class PosterMoviePipe implements PipeTransform{

    transform(path: string): string{
        return path !== null ? `https://image.tmdb.org/t/p/w500${path}` : './assets/no-image.jpg';
    }
}