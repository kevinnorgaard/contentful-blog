import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { StyleBeautyComponent } from './pages/style-beauty/style-beauty.component';
import { WellnessComponent } from './pages/wellness/wellness.component';
import { BlogComponent } from './blog/blog.component';
import { ArtComponent } from './pages/art/art.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'style-beauty', component: StyleBeautyComponent },
  { path: 'wellness', component: WellnessComponent },
  { path: 'art', component: ArtComponent },
  { path: 'blog/:id', component: BlogComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
