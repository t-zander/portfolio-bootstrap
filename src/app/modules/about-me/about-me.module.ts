import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';

@NgModule({
  declarations: [
    AboutMeComponent,
    ContactInfoComponent,
    WorkExperienceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AboutMeModule { }
