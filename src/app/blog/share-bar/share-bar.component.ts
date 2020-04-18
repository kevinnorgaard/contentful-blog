import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

const BASE_URL = 'https://carinacollective.com';

const TWITTER_SHARE_URL = 'https://twitter.com/intent/tweet?text=';

@Component({
  selector: 'app-share-bar',
  templateUrl: './share-bar.component.html',
  styleUrls: ['./share-bar.component.css']
})
export class ShareBarComponent {
  @Input() title;
  @Input() hashtags;

  constructor(private router: Router) { }

  twitterShareURL() {
    let path = this.router.url;
    if (path.endsWith('#disqus_thread')) {
      const index = path.indexOf('#disqus_thread');
      path = path.substring(0, index);
    }
    const url = TWITTER_SHARE_URL + encodeURIComponent(this.title) + ' ' + BASE_URL + path + ' ' + this.hashtags;
    return url;
  }
}
