import { Component } from '@angular/core';
import { DialogService } from './dialog.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  title = 'contentful-blog';
}
