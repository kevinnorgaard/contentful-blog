import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';
import { map, take } from 'rxjs/operators';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent implements OnInit {
  instaPosts: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getInstaPosts()
      .then(instaPosts => {
        this.instaPosts = instaPosts.sort(this.contentfulService.sortByDatetime);
      });
  }

  getImage(post) {
    return this.contentfulService.getImage(post.fields.image, true);
  }

}
