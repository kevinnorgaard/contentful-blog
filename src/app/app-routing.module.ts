import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { StyleBeautyComponent } from './pages/style-beauty/style-beauty.component';
import { WellnessComponent } from './pages/wellness/wellness.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blogs/style-beauty',  component: StyleBeautyComponent },
  { path: 'blogs/style-beauty/:id',  component: StyleBeautyComponent },
  { path: 'blogs/wellness',  component: WellnessComponent },
  { path: 'blogs/wellness/:id',  component: WellnessComponent },
  { path: 'about',  component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
