import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverlayComponent } from './core/overlay/overlay.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { AboutMeComponent } from './modules/about-me/components/about-me/about-me.component';
import { MyWorksComponent } from './modules/my-works/components/my-works/my-works.component';
import { WorkDetailsComponent } from './modules/my-works/components/work-details/work-details.component';

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
      },
      {
        path: 'my-works',
        component: MyWorksComponent,
        children: [
          {
            path: ':workId',
            component: WorkDetailsComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
