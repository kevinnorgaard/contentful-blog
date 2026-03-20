import { Component, OnInit, inject } from '@angular/core';
import { ContentfulService, ContentfulEntry } from '../contentful.service';

@Component({
    selector: 'app-instagram',
    templateUrl: './instagram.component.html',
    styleUrl: './instagram.component.css'
})
export class InstagramComponent implements OnInit {
  instaPosts: ContentfulEntry[] = [];

  private contentfulService = inject(ContentfulService);

  ngOnInit() {
    this.contentfulService.getInstaPosts()
      .then(instaPosts => {
        this.instaPosts = instaPosts.sort(this.contentfulService.sortByDatetime);
      });
  }

  getImage(post) {
    return this.contentfulService.getImage(post.fields.image, true);
  }

  getCaption(post) {
    return post.fields.caption;
  }
}
