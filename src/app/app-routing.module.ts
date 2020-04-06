import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { StyleBeautyComponent } from './pages/style-beauty/style-beauty.component';
import { WellnessComponent } from './pages/wellness/wellness.component';
import { BlogComponent } from './blog/blog.component';
import { ArtComponent } from './pages/art/art.component';
import { BlogsResolve } from './contentful.resolve';

const routes: Routes = [
  { path: '', component: HomeComponent, resolve: { blogs: BlogsResolve }},
  { path: 'style-beauty', component: StyleBeautyComponent, resolve: { blogs: BlogsResolve } },
  { path: 'wellness', component: WellnessComponent, resolve: { blogs: BlogsResolve } },
  { path: 'art', component: ArtComponent, resolve: { blogs: BlogsResolve } },
  { path: 'blog/:id', component: BlogComponent, resolve: { blogs: BlogsResolve } },
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
