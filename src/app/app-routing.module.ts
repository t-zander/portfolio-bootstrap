import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverlayComponent } from './core/overlay/overlay.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { AboutMeComponent } from './modules/about-me/components/about-me/about-me.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: '',
    component: OverlayComponent,
    children: [
      {
        path: 'about-me',
        component: AboutMeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
