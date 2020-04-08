import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-style-beauty',
  templateUrl: './style-beauty.component.html',
  styleUrls: ['./style-beauty.component.css']
})
export class StyleBeautyComponent implements OnInit {
  category = 'style-beauty';

  constructor(private metaService: Meta) {
  }

  ngOnInit() {
    this.updateOgTags();
  }

  updateOgTags() {
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://universal-4zfyqvma3q-uw.a.run.app/assets/style.jpg' });
    this.metaService.addTag({ property: 'og:title', content: 'Style & Beauty' });
    this.metaService.addTag({ property: 'og:description', content: 'S&B description goes here' });
    this.metaService.addTag({ name: 'twitter:title', content: 'Style & Beauty' });
    this.metaService.addTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.addTag({ name: 'twitter:description', content: 'S&B description goes here' });
    this.metaService.addTag({ name: 'twitter:image', content: 'https://universal-4zfyqvma3q-uw.a.run.app/assets/style.jpg' });
  }
}
