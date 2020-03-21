import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ContentfulService } from 'src/app/contentful.service';
import { Observable, empty, from } from 'rxjs';
import { Entry } from 'contentful';

@Component({
  selector: 'app-style-beauty',
  templateUrl: './style-beauty.component.html',
  styleUrls: ['./style-beauty.component.css']
})
export class StyleBeautyComponent implements OnInit {
  category = 'style-beauty';
  blog: Entry<any>;

  constructor(private contentful: ContentfulService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        const selectedId = params.get('id');
        if (!selectedId || selectedId === '') {
          return empty();
        }
        return from(this.contentful.getBlog(selectedId));
      })
    ).subscribe((entries) => {
        this.blog = entries[0];
      }
    );
  }
}
