import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulService } from './contentful.service';
import { Entry } from 'contentful';

@Injectable()
export class BlogsResolve implements Resolve<Entry<any>[]> {
  constructor(private contentfulService: ContentfulService) {}

  resolve(route: ActivatedRouteSnapshot): Promise<Entry<any>[]> {
    return this.contentfulService.getBlogs(null);
  }
}

@Injectable()
export class BlogResolve implements Resolve<Entry<any>[]> {
  constructor(private contentfulService: ContentfulService) {}

  resolve(route: ActivatedRouteSnapshot): Promise<Entry<any>[]> {
    const id = route.params.id;
    return this.contentfulService.getBlog(id);
  }
}
