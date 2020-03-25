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

  onTab() {
    this.close();
    window.scrollTo(0, 0);
  }

  close() {
    this.hideDropdown = true;
  }

  openDialog() {
    this.close();
    this.dialog.open(SubscribeDialogComponent, {
      width: '485px'
    });
  }
}
