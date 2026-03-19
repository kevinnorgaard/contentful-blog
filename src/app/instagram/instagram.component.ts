import { Component, OnInit } from '@angular/core';
import { ContentfulService, ContentfulEntry } from '../contentful.service';

@Component({
    selector: 'app-instagram',
    templateUrl: './instagram.component.html',
    styleUrls: ['./instagram.component.css'],
    standalone: false
})
export class InstagramComponent implements OnInit {
  instaPosts: ContentfulEntry[] = [];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getInstaPosts()
      .then(instaPosts => {
        this.instaPosts = instaPosts.sort(this.contentfulService.sortByDatetime);
        console.log(this.instaPosts[0]);
      });
  }

  getImage(post) {
    return this.contentfulService.getImage(post.fields.image, true);
  }

  getCaption(post) {
    return post.fields.caption;
  }
}
