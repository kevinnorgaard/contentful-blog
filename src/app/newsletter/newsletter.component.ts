import { Component } from '@angular/core';
import { NewsletterInputComponent } from './newsletter-input/newsletter-input.component';

@Component({
    selector: 'app-newsletter',
    templateUrl: './newsletter.component.html',
    styleUrl: './newsletter.component.css',
    imports: [NewsletterInputComponent]
})
export class NewsletterComponent {}
