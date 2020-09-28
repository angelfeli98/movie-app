import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app.route.module';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { InterceptorHttp } from './interceptors/movie.interceptors';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRouterModule,
    ComponentsModule,
    PagesModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorHttp,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
