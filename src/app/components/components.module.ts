import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PipesModule } from '../pipes/pipes.module';
import { MovieGridComponent } from './movie-grid/movie-grid.component';

import { RatingModule } from 'ng-starrating';
import { SlideCastComponent } from './slide-cast/slide-cast.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    MovieGridComponent,
    SlideCastComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    RatingModule
  ],
  exports: [
    NavbarComponent,
    SlideshowComponent,
    MovieGridComponent,
    RatingModule,
    SlideCastComponent
  ]
})
export class ComponentsModule { }
