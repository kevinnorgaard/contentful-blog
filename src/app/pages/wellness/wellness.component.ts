import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ContentfulService } from 'src/app/contentful.service';
import { empty, from } from 'rxjs';
import { Entry } from 'contentful';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-wellness',
  templateUrl: './wellness.component.html',
  styleUrls: ['./wellness.component.css']
})
export class WellnessComponent implements OnInit {
  category = 'wellness';

  constructor(private metaService: Meta) { }

  ngOnInit() {
    this.updateOgTags();
  }

  updateOgTags() {
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://universal-4zfyqvma3q-uw.a.run.app/assets/wellness.jpg' });
    this.metaService.addTag({ property: 'og:title', content: 'Wellness' });
    this.metaService.addTag({ property: 'og:description', content: 'Wellness description goes here' });
    this.metaService.addTag({ name: 'twitter:title', content: 'Wellness' });
    this.metaService.addTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.addTag({ name: 'twitter:description', content: 'Wellness description goes here' });
    this.metaService.addTag({ name: 'twitter:image', content: 'https://universal-4zfyqvma3q-uw.a.run.app/assets/wellness.jpg' });
  }
}
