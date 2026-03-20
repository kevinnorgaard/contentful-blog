import { Component, OnInit, inject } from '@angular/core';
import { ScrollTopService } from 'src/app/scroll-top.service';
import { SlideshowComponent } from 'src/app/slideshow/slideshow.component';
import { IntroComponent } from 'src/app/intro/intro.component';
import { CategoryListComponent } from 'src/app/category-list/category-list.component';
import { NewsletterComponent } from 'src/app/newsletter/newsletter.component';
import { HeadingComponent } from 'src/app/heading/heading.component';
import { InstagramComponent } from 'src/app/instagram/instagram.component';
import { BlogListComponent } from 'src/app/blog-list/blog-list.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [SlideshowComponent, IntroComponent, CategoryListComponent, NewsletterComponent, HeadingComponent, InstagramComponent, BlogListComponent]
})
export class HomeComponent implements OnInit {
  loaded = false;

  private scrollTopService = inject(ScrollTopService);

  ngOnInit() {
    this.scrollTopService.setScrollTop();
  }
}
