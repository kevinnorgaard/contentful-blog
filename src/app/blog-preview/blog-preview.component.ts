import { Component, OnInit, Input } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-blog-preview',
  templateUrl: './blog-preview.component.html',
  styleUrls: ['./blog-preview.component.css']
})
export class BlogPreviewComponent implements OnInit {
  @Input() blog: Entry<any>;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {}

  getTitle() {
    if (this.blog) {
      return this.contentfulService.getTitle(this.blog);
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
