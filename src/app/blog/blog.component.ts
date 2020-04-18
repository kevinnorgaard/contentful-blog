import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';
import { Router, ActivatedRoute } from '@angular/router';
import { DisqusService } from '../disqus.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @ViewChild('blogView') blogView: ElementRef;
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
    this.blog = this.route.snapshot.data.blog[0];
    this.route.params.subscribe(routeParams => {
      this.contentfulService.getBlog(routeParams.id).then(blog => {
        this.blog = blog[0];
        this.parseBlog();
      });
    });
    this.parseBlog();
  }

  parseBlog() {
    this.updateOgTags();
    this.setCommentCount();
    this.parseTags();
  }

  updateOgTags() {
    this.metaService.updateTag({ property: 'og:type', content: 'blog' });
    this.metaService.updateTag({ property: 'og:image', content: 'https:' + this.blog.fields.image.fields.file.url });
    this.metaService.addTag({ property: 'og:title', content: this.getTitle(this.blog) });
    this.metaService.addTag({ property: 'og:description', content: this.getTagline(this.blog) });
    this.metaService.addTag({ name: 'twitter:title', content: this.getTitle(this.blog) });
    this.metaService.addTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.addTag({ name: 'twitter:description', content: this.getTagline(this.blog) });
    this.metaService.addTag({ name: 'twitter:image', content: 'https:' + this.blog.fields.image.fields.file.url });
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

  getHashtags() {
    let hashtags = '';
    for (const category of this.getCategories()) {
      hashtags += this.toHashtag(category);
    }
    return hashtags;
  }

  toHashtag(category) {
    if (category === 'style-beauty') {
      return '#style #beauty ';
    } else {
      return '#' + category + ' ';
    }
  }

  getHashtagsUnicode() {
    let hashtags = '';
    for (const category of this.getCategories()) {
      hashtags += this.toHashtagUnicode(category);
    }
    hashtags += '%23CarinaCollective';
    return hashtags;
  }

  toHashtagUnicode(category) {
    if (category === 'style-beauty') {
      return '%23style %23beauty ';
    } else {
      return '%23' + category + ' ';
    }
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

  getCategories() {
    return this.contentfulService.getCategory(this.blog);
  }

  getTitle(blog) {
    return this.contentfulService.getTitle(blog);
  }

  getTagline(blog) {
      return this.contentfulService.getTagline(blog);
  }

  getDate(blog) {
    return this.contentfulService.getDate(blog);
  }

  getBody(blog) {
    return this.contentfulService.getBodyContent(blog);
  }

  getBlogImage() {
    if (this.blog) {
      return this.contentfulService.getImage(this.blog.fields.image);
    }
  }

  getImage(item) {
    if (item && item.data.target) {
      return this.contentfulService.getImage(item.data.target, true);
    }
  }

  getImageWidth(item, shared = false) {
    if (this.blogView && item.data.target.fields) {
      const width = this.getWidthRatio() * this.getImageDetails(item.data.target).height;
      return (shared ? width / 2 : width) + 'px';
    }
  }

  getImageHeight(item, shared = false) {
    if (this.blogView && item.data.target.fields) {
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
        for (const item of body.response) {
          if (item.identifiers.includes(this.getID(this.blog))) {
            this.commentCount = item.posts;
          }
        }
      });
    }
  }
}
