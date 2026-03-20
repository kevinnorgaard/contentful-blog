import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SubscribeDialogComponent } from './subscribe-dialog/subscribe-dialog.component';
import { FooterComponent } from './footer/footer.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, SubscribeDialogComponent, FooterComponent]
})
export class AppComponent {
  title = 'contentful-blog';
}
