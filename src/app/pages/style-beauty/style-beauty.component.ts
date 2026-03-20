import { Component, OnInit, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ScrollTopService } from 'src/app/scroll-top.service';
import { BlogListComponent } from 'src/app/blog-list/blog-list.component';

@Component({
    selector: 'app-style-beauty',
    templateUrl: './style-beauty.component.html',
    styleUrl: './style-beauty.component.css',
    imports: [BlogListComponent]
})
export class StyleBeautyComponent implements OnInit {
  category = 'style-beauty';

  private metaService = inject(Meta);
  private scrollTopService = inject(ScrollTopService);

  ngOnInit() {
    this.scrollTopService.setScrollTop();
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
