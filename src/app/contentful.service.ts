import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

const CONFIG = {
  space: 'ndctiuutex2v',
  accessToken: '6fSgN9Lh1LYKLCvIOapivNIKtyWGZxgNP_YSDgK-D5U',

  contentTypeIds: {
    blog: 'blogPost'
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

  constructor() { }

  getBlogs(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.blog
    }, query))
    .then(res => res.items);
  }
}
