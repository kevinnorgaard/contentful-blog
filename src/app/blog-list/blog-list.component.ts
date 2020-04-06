import { Component, OnInit, Input } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  @Input() showPreview: boolean;
  @Input() category: string;
  blogs: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const blogs = this.route.snapshot.data.blogs;
    this.filterCategory(blogs.sort(this.contentfulService.sortByPublished));
  }

  filterCategory(blogs) {
    if (this.category == null) {
      this.blogs = blogs;
      return;
    }
    for (const blog of blogs) {
      if (blog.fields.category.includes(this.category)) {
        this.blogs.push(blog);
      }
    }
  }

  getImage(i: number, isPreview: boolean) {
    if (!isPreview && this.showPreview) {
      i++;
    }
    return this.contentfulService.getImage(this.blogs[i].fields.image, true);
  }

  gotoBlog(blog: Entry<any>) {
    this.contentfulService.gotoBlog(blog);
  }

  getTitle(blog) {
    if (blog) {
      return this.contentfulService.getTitle(blog);
    }
  }

  getTagline(blog) {
    if (blog) {
      return this.contentfulService.getTagline(blog);
    }
  }

  getDate(blog) {
    if (blog) {
      return this.contentfulService.getDate(blog);
    }
  }

  blogsToList() {
    if (this.blogs.length === 0) {
      return [];
    }
    return this.showPreview ? this.blogs.slice(1, this.blogs.length) : this.blogs;
  }
}
