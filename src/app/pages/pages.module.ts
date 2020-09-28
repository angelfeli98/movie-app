
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { SearchComponent } from './search/search.component';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';

import { RatingModule } from 'ng-starrating';

@NgModule({
    declarations: [
        HomeComponent,
        MovieComponent,
        SearchComponent
    ],
    imports: [
        ComponentsModule,
        CommonModule,
        PipesModule,
        RatingModule
    ],
    exports: [
        HomeComponent,
        MovieComponent,
        SearchComponent
    ]
})
export class PagesModule{}
