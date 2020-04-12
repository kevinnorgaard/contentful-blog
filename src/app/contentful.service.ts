import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { Router } from '@angular/router';

export const CONFIG = {
  space: 'ndctiuutex2v',
  accessToken: '6fSgN9Lh1LYKLCvIOapivNIKtyWGZxgNP_YSDgK-D5U',

  contentTypeIds: {
    blog: 'blogPost',
    insta: 'instagramPost'
  }
};

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  imgMap = new Map();

  constructor(private router: Router) { }

  getBlogs(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.blog
    }, query))
    .then(res => res.items);
  }

  getBlog(blogID: string): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.blog
    }, {'sys.id': blogID}))
    .then(res => res.items);
  }

  getInstaPosts(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.insta
    }, query))
    .then(res => res.items);
  }

  sortByPublished(a: Entry<any>, b: Entry<any>) {
    return b.fields.published.localeCompare(a.fields.published);
  }

  sortByDatetime(a: Entry<any>, b: Entry<any>) {
    return b.fields.datetime.localeCompare(a.fields.datetime);
  }

  getImage(item, urlMode = false) {
    const url = 'https:' + item.fields.file.url;
    return urlMode ? 'url(' + url + ')' : url;
  }

  getID(post: Entry<any>) {
    return post.sys.id;
  }

  getCategory(post: Entry<any>) {
    return post.fields.category;
  }

  gotoBlog(blog: Entry<any>) {
    const id = this.getID(blog);
    console.log('Going to', id);
    this.router.navigate(['/blog', id]);
    window.scrollTo(0, 0);
  }

  getTitle(blog) {
    return blog.fields.title;
  }

  getTagline(blog) {
    return blog.fields.tagline;
  }

  getDate(blog) {
    if (blog) {
      const date = new Date(blog.fields.published);
      const month = date.toLocaleString('default', { month: 'long' });
      const day = date.getUTCDate();
      const year = date.getUTCFullYear();
      return month + ' ' + day + ', ' + year;
    }
  }

  getDescription(blog) {
    if (blog.data.target.fields) {
      return blog.data.target.fields.description;
    }
  }

  getBodyContent(blog) {
    return blog.fields.body.content;
  }
}
