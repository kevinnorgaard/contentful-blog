import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulService } from './contentful.service';
import { Entry } from 'contentful';

@Injectable()
export class BlogsResolve  {
  constructor(private contentfulService: ContentfulService) {}

  resolve(route: ActivatedRouteSnapshot): Promise<Entry<any>[]> {
    return this.contentfulService.getBlogs();
  }
}

@Injectable()
export class BlogResolve  {
  constructor(private contentfulService: ContentfulService) {}

  resolve(route: ActivatedRouteSnapshot): Promise<Entry<any>[]> {
    const id = route.params.id;
    return this.contentfulService.getBlog(id);
  }
}
