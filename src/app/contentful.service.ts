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

  getImage(url) {
    return this.http.get(url, {responseType: 'blob'});
  }

  getID(post: Entry<any>) {
    return post.sys.id;
  }

  getCategory(post: Entry<any>) {
    return post.fields.category;
  }

  gotoBlog(blog: Entry<any>) {
    const category = this.getCategory(blog);
    const id = this.getID(blog);
    console.log(category, id);
    this.router.navigate(['/blogs/' + category, {id: id}]);
    window.scrollTo(0, 0);
  }
}
