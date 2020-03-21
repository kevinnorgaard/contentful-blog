import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';

import { DisqusModule } from 'ngx-disqus';

import { ContentfulService } from './contentful.service';
import { BlogListComponent } from './blog-list/blog-list.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { TitleComponent } from './title/title.component';
import { HomeComponent } from './pages/home/home.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';
import { SocialComponent } from './social/social.component';
import { IntroComponent } from './intro/intro.component';
import { HeadingComponent } from './heading/heading.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryComponent } from './category-list/category/category.component';
import { StyleBeautyComponent } from './pages/style-beauty/style-beauty.component';
import { WellnessComponent } from './pages/wellness/wellness.component';
import { TravelComponent } from './pages/travel/travel.component';
import { InstagramComponent } from './instagram/instagram.component';
import { SubscribeDialogComponent } from './subscribe-dialog/subscribe-dialog.component';
import { NewsletterInputComponent } from './newsletter/newsletter-input/newsletter-input.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    HeaderComponent,
    AboutComponent,
    TitleComponent,
    HomeComponent,
    SlideshowComponent,
    NewsletterComponent,
    FooterComponent,
    SocialComponent,
    IntroComponent,
    HeadingComponent,
    CategoryListComponent,
    CategoryComponent,
    StyleBeautyComponent,
    WellnessComponent,
    TravelComponent,
    InstagramComponent,
    SubscribeDialogComponent,
    NewsletterInputComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    DisqusModule.forRoot('test-t0kv4ivpla')
  ],
  exports: [],
  entryComponents: [
    SubscribeDialogComponent
  ],
  providers: [
    ContentfulService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
