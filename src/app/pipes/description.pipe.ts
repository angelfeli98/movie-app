
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'movieDes'
})
export class MovieDescriptionPipe implements PipeTransform{

    transform(des: string = ''): string{
        return des.length > 200 ? des.substr(0, 200) + ' ...' : des;
    }
}