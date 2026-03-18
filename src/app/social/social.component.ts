import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-social',
    templateUrl: './social.component.html',
    styleUrls: ['./social.component.css'],
    standalone: false
})
export class SocialComponent implements OnInit {
  @Input() color;

  constructor() { }

  ngOnInit() {
  }
}
