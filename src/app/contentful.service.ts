import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { HttpClient } from '@angular/common/http';
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

  constructor(private router: Router,
              private http: HttpClient) { }

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
    const id = this.getID(item);
    if (id && this.imgMap.has(id) && this.imgMap.get(id).requested) {
      return urlMode ? 'url(' + this.imgMap.get(id).image + ')' : this.imgMap.get(id).image;
    } else if (item.fields.file.url) {
      const url = 'https:' + item.fields.file.url;
      this.imgMap.set(id, {requested: true});
      this.loadImage(url, id);
      return urlMode ? 'url(' + this.imgMap.get(id).image + ')' : this.imgMap.get(id).image;
    }
  }

  loadImage(url: string, id: string) {
    this.requestImage(url)
    .subscribe(
      (val) => {
        this.convertBlobToImage(val, id);
      },
      response => {
        console.log('GET in error', response);
      },
      () => {
        console.log('GET observable is now completed.');
      });
  }

  requestImage(url: string) {
    return this.http.get(url, {responseType: 'blob'});
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
    return blog.data.target.fields.description;
  }

  getBodyContent(blog) {
    return blog.fields.body.content;
  }
}
