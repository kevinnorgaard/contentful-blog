import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { ContentfulService, ContentfulEntry } from './contentful.service';

@Injectable()
export class BlogsResolve  {
  constructor(private contentfulService: ContentfulService) {}

  resolve(route: ActivatedRouteSnapshot): Promise<ContentfulEntry[]> {
    return this.contentfulService.getBlogs();
  }
}

@Injectable()
export class BlogResolve  {
  constructor(private contentfulService: ContentfulService) {}

  resolve(route: ActivatedRouteSnapshot): Promise<ContentfulEntry[]> {
    const id = route.params.id;
    return this.contentfulService.getBlog(id);
  }
}
