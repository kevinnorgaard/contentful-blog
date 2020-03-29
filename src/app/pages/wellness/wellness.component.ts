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

  constructor() { }

  ngOnInit() {}
}
