import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

const BASE_URL = 'https://carinacollective.com';
const TWITTER_SHARE_URL = 'https://twitter.com/intent/tweet?text=';

@Component({
    selector: 'app-share-bar',
    templateUrl: './share-bar.component.html',
    styleUrl: './share-bar.component.css'
})
export class ShareBarComponent {
  @Input() title;
  @Input() hashtags;

  private router = inject(Router);

  twitterShareURL() {
    let path = this.router.url;
    if (path.endsWith('#disqus_thread')) {
      const index = path.indexOf('#disqus_thread');
      path = path.substring(0, index);
    }
    return TWITTER_SHARE_URL + encodeURIComponent(this.title) + ' ' + BASE_URL + path + ' ' + this.hashtags;
  }
}
