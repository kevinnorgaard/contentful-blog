import { Component, OnInit, Input } from '@angular/core';
import { ContentfulService } from '../contentful.service';

@Component({
  selector: 'app-blog-preview',
  templateUrl: './blog-preview.component.html',
  styleUrls: ['./blog-preview.component.css']
})
export class BlogPreviewComponent implements OnInit {
  @Input() blog;
  @Input() image;
  @Input() datetime;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    console.log(this.blog);
  }

  getTitle(blog) {
    if (blog) {
      return blog.fields.title;
    }
  }

  gotoBlog() {
    this.contentfulService.gotoBlog(this.blog);
  }
}
