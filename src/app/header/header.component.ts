import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  hideDropdown = true;

  constructor() { }

  ngOnInit() { }

  onToggle() {
    this.hideDropdown = !this.hideDropdown;
  }
}
