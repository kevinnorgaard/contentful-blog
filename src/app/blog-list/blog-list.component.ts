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
  @Input() category;
  blogs: Entry<any>[] = [];
  images = [];

  constructor(private contentfulService: ContentfulService,
              private router: Router) { }

  ngOnInit() {
    this.contentfulService.getBlogs()
        .then(blogs => {
          this.filterCategory(blogs);
          this.loadPosts();
        });
  }

  filterCategory(blogs) {
    if (this.category == null) {
      this.blogs = blogs;
      return;
    }
    for (const blog of blogs) {
      if (blog.fields.category === this.category) {
        this.blogs.push(blog);
      }
    }
  }

  loadPosts() {
    let i = 0;
    for (const post of this.blogs) {
      console.log(post);
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

  getImage(i: number) {
    return 'url(' + this.images[i] + ')';
  }

  getID(post: Entry<any>) {
    return post.sys.id;
  }

  getCategory(post: Entry<any>) {
    return post.fields.category;
  }

  gotoBlog(blog: Entry<any>) {
    const category = this.getCategory(blog);
    const id = this.getID(blog);
    this.router.navigate(['/blogs/' + category, {id: id}]);
  }
}
