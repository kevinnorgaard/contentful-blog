import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

  getBlogs(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.blog
    }, query))
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
}
