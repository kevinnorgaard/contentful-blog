import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ContentfulService } from 'src/app/contentful.service';
import { empty, from } from 'rxjs';
import { Entry } from 'contentful';

@Component({
  selector: 'app-wellness',
  templateUrl: './wellness.component.html',
  styleUrls: ['./wellness.component.css']
})
export class WellnessComponent implements OnInit {
  category = 'wellness';
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
