import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap';
import { ProgressbarModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    AccordionModule.forRoot(),
    ProgressbarModule.forRoot(),
    CarouselModule.forRoot()
  ],
  exports: [
    AccordionModule,
    ProgressbarModule,
    CarouselModule
  ]
})
export class BootstrapModule { }
