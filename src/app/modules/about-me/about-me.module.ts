import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { BootstrapModule } from 'src/app/bootstrap/bootstrap.module';
import { SkillsListComponent } from './components/skills-list/skills-list.component';

@NgModule({
  declarations: [
    AboutMeComponent,
    ContactInfoComponent,
    WorkExperienceComponent,
    SkillsListComponent
  ],
  imports: [
    CommonModule,
    BootstrapModule
  ]
})
export class AboutMeModule { }
