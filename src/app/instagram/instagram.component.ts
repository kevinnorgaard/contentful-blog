import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent implements OnInit {
  images = [];
  instaPosts: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getInstaPosts()
        .then(instaPosts => {
          this.instaPosts = instaPosts.sort(this.sortByDatetime);
          this.loadPosts();
        });
  }

  sortByDatetime(a: Entry<any>, b: Entry<any>) {
    return b.fields.datetime.localeCompare(a.fields.datetime);
  }

  loadPosts() {
    let i = 0;
    for (const post of this.instaPosts) {
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
    return this.images[i];
  }

}
