import { Component } from '@angular/core';
import { SocialComponent } from '../social/social.component';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css',
    imports: [SocialComponent]
})
export class FooterComponent {}
