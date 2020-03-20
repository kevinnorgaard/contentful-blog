import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { SubscribeDialogComponent } from '../subscribe-dialog/subscribe-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  hideDropdown = true;

  constructor(private dialog: MatDialog) { }

  ngOnInit() { }

  onToggle() {
    this.hideDropdown = !this.hideDropdown;
  }

  onClose() {
    this.hideDropdown = true;
  }

  openDialog() {
    this.onClose();
    this.dialog.open(SubscribeDialogComponent);
  }
}
