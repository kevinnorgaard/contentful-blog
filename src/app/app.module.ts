import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MatDialogModule } from '@angular/material/dialog';

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
import { SocialComponent } from './social/social.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    FooterComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MatDialogModule,
    BrowserAnimationsModule
  ],
  exports: [],
  providers: [
    ContentfulService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
