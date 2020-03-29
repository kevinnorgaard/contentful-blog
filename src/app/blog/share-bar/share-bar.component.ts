import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

const BASE_URL = 'https://carinacollective.com';

const TWITTER_SHARE_URL = 'https://twitter.com/intent/tweet?text=';

@Component({
  selector: 'app-share-bar',
  templateUrl: './share-bar.component.html',
  styleUrls: ['./share-bar.component.css']
})
export class ShareBarComponent implements OnInit {
  @Input() title;
  @Input() categories;
  hashtags;

  constructor(private router: Router) { }

  ngOnInit() {
    this.hashtags = this.getHashtags();
  }

  twitterShareURL() {
    let path = this.router.url;
    if (path.endsWith('#disqus_thread')) {
      const index = path.indexOf('#disqus_thread');
      path = path.substring(0, index);
    }
    return TWITTER_SHARE_URL + this.title + ' ' + BASE_URL + path + ' ' + this.hashtags;
  }

  getHashtags() {
    let hashtags = '';
    for (const category of this.categories) {
      hashtags += this.toHashtag(category);
    }
    hashtags += '%23CarinaCollective';
    return hashtags;
  }

  toHashtag(category) {
    if (category === 'style-beauty') {
      return '%23style %23beauty ';
    } else {
      return '%23' + category + ' ';
    }
  }
}
