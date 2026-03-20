import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { DialogService } from '../dialog.service';
import { NewsletterInputComponent } from '../newsletter/newsletter-input/newsletter-input.component';
import { SocialComponent } from '../social/social.component';

@Component({
    selector: 'app-subscribe-dialog',
    templateUrl: './subscribe-dialog.component.html',
    styleUrl: './subscribe-dialog.component.css',
    imports: [NgClass, NewsletterInputComponent, SocialComponent]
})
export class SubscribeDialogComponent {
  private dialogService = inject(DialogService);

  isOpen() {
    return this.dialogService.isOpen();
  }

  close() {
    return this.dialogService.close();
  }
}
