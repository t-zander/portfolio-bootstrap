import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyWorksComponent } from './components/my-works/my-works.component';
import { BootstrapModule } from 'src/app/bootstrap/bootstrap.module';
import { RouterModule } from '@angular/router';
import { WorkDetailsComponent } from './components/work-details/work-details.component';

@NgModule({
  declarations: [MyWorksComponent, WorkDetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    BootstrapModule
  ]
})
export class MyWorksModule { }
