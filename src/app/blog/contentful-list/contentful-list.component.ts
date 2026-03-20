import { Component, Input, ViewChild, ElementRef, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { ContentfulService } from '../../contentful.service';

@Component({
    selector: 'app-contentful-list',
    templateUrl: './contentful-list.component.html',
    styleUrl: './contentful-list.component.css',
    imports: [NgClass]
})
export class ContentfulListComponent {
  @Input() listType;
  @Input() item;
  @ViewChild('blogView') blogView: ElementRef;

  private contentfulService = inject(ContentfulService);

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

  getImage(item) {
    if (item && item.data.target) {
      return this.contentfulService.getImage(item.data.target, true);
    }
  }

  getImageWidth(item, shared = false) {
    if (this.blogView && item.data.target.fields) {
      const width = this.getWidth();
      return (shared ? width / 2 : width) + 'px';
    }
  }

  getImageHeight(item, shared = false) {
    if (this.blogView && item.data.target.fields) {
      const height = this.getWidth() / this.getImageDetails(item.data.target).width * this.getImageDetails(item.data.target).height;
      return (shared ? height / 2 : height) + 'px';
    }
  }

  getImageDetails(item) {
    return item.fields.file.details.image;
  }

  getWidth() {
    return this.blogView.nativeElement.offsetWidth - 20;
  }

  getPinUrl(entry) {
    if (entry) {
      return this.contentfulService.getDescription(entry);
    }
  }
}
