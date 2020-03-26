import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from '../contentful.service';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  popularBlogPosts: Entry<any>[] = [];
  images = [];

  slideHidden: boolean[] = [];
  slideIndex = 0;

  hover = false;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getBlogs()
      .then(blogPosts => {
        this.filterPopular(blogPosts.sort(this.contentfulService.sortByPublished));
        this.initSlides();
        this.showSlides(this.slideIndex);
      });
  }

  filterPopular(posts: Entry<any>[]) {
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
