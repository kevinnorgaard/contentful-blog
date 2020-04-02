import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';
import { Router, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DisqusService } from '../disqus.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @ViewChild('blogView') blogView: ElementRef;
  blogWidth: number;

  blog: Entry<any>;

  combine = new Map();
  skip = [];

  commentCount: number;

  constructor(private contentfulService: ContentfulService,
              private router: Router,
              private route: ActivatedRoute,
              private disqusService: DisqusService,
              private metaService: Meta) {
              }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        const selectedId = params.get('id');
        return from(this.contentfulService.getBlog(selectedId));
      })
    ).subscribe((entries) => {
        this.blog = entries[0];
        this.updateOgTags();
        this.setCommentCount();
        this.parseTags();
      }
    );
  }

  updateOgTags() {
    this.metaService.updateTag({ property: 'og:type', content: 'article' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://i.ytimg.com/vi/UKeI9bdB6Qg/maxresdefault.jpg' });
    this.metaService.addTag({ property: 'og:title', content: this.getTitle(this.blog) });
  }

  parseTags() {
    const items = this.blog.fields.body.content;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (this.isTag(item)) {
        const tag = item.content[0].value;
        const rowCount = Number(tag.substring(tag.indexOf(':') + 1, tag.indexOf('>')));
        const range = [];
        for (let j = 0; j < rowCount; j++) {
          range.push(i + j + 1);
        }
        this.combine.set(i + 1, range);
        for (let j = 1; j < rowCount; j++) {
          this.skip.push(i + j + 1);
        }
      }
    }
  }

  isTag(item) {
    if (item.nodeType !== 'paragraph') {
      return false;
    }
    const tag = item.content[0].value;
    if (tag.startsWith('<ROW:') && tag.endsWith('>')) {
      return true;
    }
    return false;
  }

  isParagraph(item) {
    return item.nodeType === 'paragraph' && !this.isTag(item);
  }

  isContentfulList(item) {
    return item.nodeType === 'unordered-list' || item.nodeType === 'ordered-list';
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

  gotoBlog(blog) {
    this.contentfulService.gotoBlog(blog);
  }

  getID(blog) {
    if (blog) {
      return this.contentfulService.getID(blog);
    }
  }

  getCategories(blog) {
    return this.contentfulService.getCategory(blog);
  }

  getTitle(blog) {
    return this.contentfulService.getTitle(blog);
  }

  getDate(blog) {
    return this.contentfulService.getDate(blog);
  }

  getBody(blog) {
    return this.contentfulService.getBodyContent(blog);
  }

  getImage(item) {
    return this.contentfulService.getImage(item.data.target, true);
  }

  getImageWidth(item, shared = false) {
    if (this.blogView) {
      const width = this.getWidthRatio() * this.getImageDetails(item.data.target).height;
      return (shared ? width / 2 : width) + 'px';
    }
  }

  getImageHeight(item, shared = false) {
    if (this.blogView) {
      const height = this.getWidthRatio() * this.getImageDetails(item.data.target).height;
      return (shared ? height / 2 : height) + 'px';
    }
  }

  getWidthRatio() {
    return (this.blogView.nativeElement.offsetWidth - 20) / 800;
  }

  getImageDetails(item) {
    return item.fields.file.details.image;
  }

  getPinUrl(entry) {
    if (entry) {
      return this.contentfulService.getDescription(entry);
    }
  }

  commentRoute() {
    return this.router.url.endsWith('#disqus_thread') ? this.router.url : this.router.url + '#disqus_thread';
  }

  setCommentCount() {
    if (this.blog) {
      return this.disqusService.requestComments().subscribe((body: any) => {
        for (let item of body.response) {
          if (item.identifiers.includes(this.getID(this.blog))) {
            this.commentCount = item.posts;
          }
        }
      });
    }
  }
}
