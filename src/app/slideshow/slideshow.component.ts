import { Component, OnInit, OnChanges } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from '../contentful.service';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, OnChanges {
  popularBlogPosts: Entry<any>[] = [];
  private slideIndex = 0;
  slideHidden: boolean[] = [];
  images = [];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getBlogs()
      .then(blogPosts => {
        this.filterPopular(blogPosts); // filter popular
        this.initSlides();
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
      console.log(this.popularBlogPosts[i]);
      this.loadImage(this.popularBlogPosts[i], i);
      this.slideHidden.push(true);
    }
    this.showSlides(this.slideIndex);
  }

  loadImage(post: Entry<any>, i: number) {
    const url = 'http:' + post.fields.image.fields.file.url;
    this.images[i] = this.contentfulService.getImage(url)
    .subscribe(
      (val) => {
        this.convertBlobToImage(val, i);
      },
      response => {
        console.log('GET in error', response);
      },
      () => {
        console.log('GET observable is now completed.');
      });
  }

  convertBlobToImage(blob: any, i: number) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.images[i] = reader.result;
    }, false);
    if (blob) {
      reader.readAsDataURL(blob);
    }
  }

  getImage(i: number) {
    return this.images[i];
  }

  ngOnChanges() {
    this.showSlides(this.slideIndex);
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
    console.log(this.slideHidden);
  }
}
