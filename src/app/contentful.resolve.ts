import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { ContentfulService, ContentfulEntry } from './contentful.service';

export const blogsResolve: ResolveFn<ContentfulEntry[]> = () => {
  return inject(ContentfulService).getBlogs();
};

export const blogResolve: ResolveFn<ContentfulEntry[]> = (route: ActivatedRouteSnapshot) => {
  const id = route.params['id'];
  return inject(ContentfulService).getBlog(id);
};
