import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { StyleBeautyComponent } from './pages/style-beauty/style-beauty.component';
import { WellnessComponent } from './pages/wellness/wellness.component';
import { TravelComponent } from './pages/travel/travel.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blogs/style-beauty',  component: StyleBeautyComponent },
  { path: 'blogs/wellness',  component: WellnessComponent },
  { path: 'blogs/travel',  component: TravelComponent },
  { path: 'about',  component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
