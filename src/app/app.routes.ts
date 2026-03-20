import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { StyleBeautyComponent } from './pages/style-beauty/style-beauty.component';
import { WellnessComponent } from './pages/wellness/wellness.component';
import { BlogComponent } from './blog/blog.component';
import { ArtComponent } from './pages/art/art.component';
import { blogsResolve, blogResolve } from './contentful.resolve';

export const routes: Routes = [
  { path: '', component: HomeComponent, resolve: { blogs: blogsResolve }},
  { path: 'style-beauty', component: StyleBeautyComponent, resolve: { blogs: blogsResolve } },
  { path: 'wellness', component: WellnessComponent, resolve: { blogs: blogsResolve } },
  { path: 'art', component: ArtComponent, resolve: { blogs: blogsResolve } },
  { path: 'blog/:id', component: BlogComponent, resolve: { blogs: blogsResolve, blog: blogResolve } },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '/' },
];
