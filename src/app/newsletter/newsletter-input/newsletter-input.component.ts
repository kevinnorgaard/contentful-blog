import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-newsletter-input',
    templateUrl: './newsletter-input.component.html',
    styleUrls: ['./newsletter-input.component.css'],
    standalone: false
})
export class NewsletterInputComponent implements OnInit {
  response;

  constructor() { }

  ngOnInit() {}
}
