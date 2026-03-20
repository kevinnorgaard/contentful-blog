import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DialogService } from '../dialog.service';
import { SocialComponent } from '../social/social.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [NgClass, RouterLink, RouterLinkActive, SocialComponent]
})
export class HeaderComponent {
  hideDropdown = true;

  private dialogService = inject(DialogService);

  onToggle() {
    this.hideDropdown = !this.hideDropdown;
  }

  close() {
    this.hideDropdown = true;
  }

  openDialog() {
    this.dialogService.open();
  }
}
