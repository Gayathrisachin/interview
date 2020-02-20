import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { createCustomElement } from '@angular/elements';

import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent , CarouselItemElement} from './carousel.component';
import { CarouselItemDirective } from './app/carousel-item.directive';
import { Slider1Component } from './slider1/slider1.component';


import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SliderItemDirective } from './slider1/slider-item.directive';
// import { CarouselItemDirective } from './carousel-item.directive';

// import { SliderItemDirective } from './slider/slider-item.directive';
@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    CarouselComponent, CarouselItemElement,CarouselItemDirective, Slider1Component,SliderItemDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    MatButtonModule,
    
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {
    const slider = createCustomElement(SliderComponent, { injector });
    customElements.define('motley-slider', slider);
}
}