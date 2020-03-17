import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { AboutComponent } from './about/about.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blogs/style-beauty',  component: BlogListComponent },
  { path: 'blogs/wellness',  component: BlogListComponent },
  { path: 'blogs/travel',  component: BlogListComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'subscribe',  component: SubscribeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
