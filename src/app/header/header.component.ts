import { Component, OnInit } from '@angular/core';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  hideDropdown = true;

  constructor(private dialogService: DialogService) { }

  ngOnInit() { }

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
