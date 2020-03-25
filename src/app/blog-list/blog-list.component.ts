import { Component, OnInit, Input } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  @Input() showPreview: boolean;
  @Input() category: string;
  blogs: Entry<any>[] = [];
  images = [];

  constructor(private contentfulService: ContentfulService,
              private router: Router) { }

  ngOnInit() {
    this.contentfulService.getBlogs()
        .then(blogs => {
          this.filterCategory(blogs.sort(this.sortByDatetime));
          this.loadPosts();
        });
  }

  sortByDatetime(a: Entry<any>, b: Entry<any>) {
    return b.fields.published.localeCompare(a.fields.published);
  }

  filterCategory(blogs) {
    if (this.category == null) {
      this.blogs = blogs;
      return;
    }
    for (const blog of blogs) {
      if (blog.fields.category === this.category) {
        console.log(blog);
        this.blogs.push(blog);
      }
    }
  }

  loadPosts() {
    let i = 0;
    for (const post of this.blogs) {
      this.images.push(null);
      this.loadImage(post, i++);
    }
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

  getImage(i: number, isPreview: boolean) {
    if (!isPreview && this.showPreview) {
      i++;
    }
    return 'url(' + this.images[i] + ')';
  }

  gotoBlog(blog: Entry<any>) {
    this.contentfulService.gotoBlog(blog);
  }

  formatDatetime(blog) {
    if (blog) {
      const date = new Date(blog.fields.published);
      const month = date.toLocaleString('default', { month: 'long' });
      const day = date.getUTCDate();
      const year = date.getUTCFullYear();
      return month + ' ' + day + ', ' + year;
    }
  }

  blogsToList() {
    if (this.showPreview) {
      return this.blogs.slice(1, this.blogs.length);
    } else {
      return this.blogs;
    }
  }
}
