import { Component, Input, inject } from '@angular/core';
import { ContentfulService, ContentfulEntry } from '../contentful.service';

@Component({
    selector: 'app-blog-preview',
    templateUrl: './blog-preview.component.html',
    styleUrl: './blog-preview.component.css'
})
export class BlogPreviewComponent {
  @Input() blog: ContentfulEntry;

  private contentfulService = inject(ContentfulService);

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
