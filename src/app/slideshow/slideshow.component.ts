import { Component, OnInit, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ContentfulService, ContentfulEntry } from '../contentful.service';

@Component({
    selector: 'app-slideshow',
    templateUrl: './slideshow.component.html',
    styleUrl: './slideshow.component.css',
    imports: [NgClass]
})
export class SlideshowComponent implements OnInit {
  popularBlogPosts: ContentfulEntry[] = [];
  images = [];
  slideHidden: boolean[] = [];
  slideIndex = 0;
  hover = false;

  private contentfulService = inject(ContentfulService);
  private route = inject(ActivatedRoute);

  ngOnInit() {
    const blogPosts = this.route.snapshot.data.blogs;
    this.filterPopular(blogPosts.sort(this.contentfulService.sortByPublished));
    this.initSlides();
    this.showSlides(this.slideIndex);
  }

  filterPopular(posts: ContentfulEntry[]) {
    for (const post of posts) {
      if (post.fields.popular) {
        this.popularBlogPosts.push(post);
      }
    }
  }

  initSlides() {
    for (let i = 0; i < this.popularBlogPosts.length; i++) {
      this.slideHidden.push(true);
    }
    this.showSlides(this.slideIndex);
  }

  getImage(blog) {
    return this.contentfulService.getImage(blog.fields.image, true);
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    if (n < 0) {
      this.slideIndex = this.slideHidden.length - 1;
    } else if (n > this.slideHidden.length - 1) {
      this.slideIndex = 0;
    }
    for (let i = 0; i < this.slideHidden.length; i++) {
      this.slideHidden[i] = true;
    }
    this.slideHidden[this.slideIndex] = false;
  }

  getTitle(blog) {
    return this.contentfulService.getTitle(blog);
  }

  gotoBlog(blog) {
    this.contentfulService.gotoBlog(blog);
  }
}
