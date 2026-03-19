import { Component, OnInit, Input } from '@angular/core';
import { ContentfulService, ContentfulEntry } from '../contentful.service';

@Component({
    selector: 'app-blog-preview',
    templateUrl: './blog-preview.component.html',
    styleUrls: ['./blog-preview.component.css'],
    standalone: false
})
export class BlogPreviewComponent implements OnInit {
  @Input() blog: ContentfulEntry;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {}

  getTitle() {
    if (this.blog) {
      return this.contentfulService.getTitle(this.blog);
    }
  }

  getTagline() {
    if (this.blog) {
      return this.contentfulService.getTagline(this.blog);
    }
  }

  gotoBlog() {
    this.contentfulService.gotoBlog(this.blog);
  }

  getDate() {
    if (this.blog) {
      return this.contentfulService.getDate(this.blog);
    }
  }

  getImage() {
    if (this.blog) {
      return this.contentfulService.getImage(this.blog.fields.image, true);
    }
  }
}
