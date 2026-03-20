import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-social',
    templateUrl: './social.component.html',
    styleUrl: './social.component.css',
    imports: [NgClass]
})
export class SocialComponent {
  @Input() color;
}
