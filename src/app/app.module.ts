import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContentfulService } from './contentful.service';
import { BlogListComponent } from './blog-list/blog-list.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { TitleComponent } from './title/title.component';
import { HomeComponent } from './pages/home/home.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    HeaderComponent,
    AboutComponent,
    SubscribeComponent,
    TitleComponent,
    HomeComponent,
    SlideshowComponent,
    NewsletterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [
    ContentfulService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
