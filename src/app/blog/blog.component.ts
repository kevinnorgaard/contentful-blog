import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @ViewChild('blogView') blogView: ElementRef;
  blogWidth;

  @Input() blog: Entry<any>;
  imgMap = new Map();

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
  }

  getStyle(item) {
    if (!item.marks) {
      return '';
    }
    const styles = [];
    for (const mark of item.marks) {
      styles.push(mark.type);
    }
    return styles.join(' ');
  }

  getImageWidth(item) {
    if (this.blogView) {
      return (this.blogView.nativeElement.offsetWidth - 20) * item.data.target.fields.file.details.image.width / 800 + 'px'
    }
  }

  getImageHeight(item) {
    if (this.blogView) {
      return (this.blogView.nativeElement.offsetWidth - 20) * item.data.target.fields.file.details.image.height / 800 + 'px';
    }
  }

  getImage(item) {
    const filename = item.data.target.fields.file.fileName;
    if (filename && this.imgMap.has(filename) && this.imgMap.get(filename).requested) {
      return 'url(' + this.imgMap.get(filename).image + ')';
    } else if (item.data.target.fields.file.url) {
      const url = 'http:' + item.data.target.fields.file.url;
      this.imgMap.set(filename, {requested: true});
      this.loadImage(url, filename);
      return 'url(' + this.imgMap.get(filename).image + ')';
    }
  }

  loadImage(url, filename: string) {
    this.contentfulService.getImage(url)
    .subscribe(
      (val) => {
        this.convertBlobToImage(val, filename);
      },
      response => {
        console.log('GET in error', response);
      },
      () => {
        console.log('GET observable is now completed.');
      });
  }

  convertBlobToImage(blob: any, filename: string) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.imgMap.set(filename, {requested: true, image: reader.result});
    }, false);
    if (blob) {
      reader.readAsDataURL(blob);
    }
  }

  gotoBlog(blog) {
    this.contentfulService.gotoBlog(blog);
  }

  formatDatetime(blog) {
    if (blog) {
      const date = new Date(blog.fields.published);
      const month = date.toLocaleString('default', { month: 'long' });
      const day = date.getUTCDate();
      const year = date.getUTCFullYear();
      return month + ' ' + day + ', ' + year;
    }
  }
}
