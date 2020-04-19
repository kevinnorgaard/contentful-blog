import { BrowserModule, Meta } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DisqusModule } from 'ngx-disqus';

import { ContentfulService } from './contentful.service';
import { BlogListComponent } from './blog-list/blog-list.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './pages/about/about.component';
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
import { InstagramComponent } from './instagram/instagram.component';
import { SubscribeDialogComponent } from './subscribe-dialog/subscribe-dialog.component';
import { NewsletterInputComponent } from './newsletter/newsletter-input/newsletter-input.component';
import { BlogComponent } from './blog/blog.component';
import { ContentfulListComponent } from './blog/contentful-list/contentful-list.component';
import { BlogPreviewComponent } from './blog-preview/blog-preview.component';

import { CONFIG, DisqusService } from './disqus.service';
import { ShareBarComponent } from './blog/share-bar/share-bar.component';
import { ArtComponent } from './pages/art/art.component';
import { BlogsResolve, BlogResolve } from './contentful.resolve';
import { ScrollTopService } from './scroll-top.service';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    HeaderComponent,
    AboutComponent,
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
    InstagramComponent,
    SubscribeDialogComponent,
    NewsletterInputComponent,
    BlogComponent,
    ContentfulListComponent,
    BlogPreviewComponent,
    ShareBarComponent,
    ArtComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DisqusModule.forRoot(CONFIG.shortName)
  ],
  exports: [],
  entryComponents: [
    SubscribeDialogComponent
  ],
  providers: [
    ContentfulService,
    DisqusService,
    Meta,
    BlogsResolve,
    BlogResolve,
    ScrollTopService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
