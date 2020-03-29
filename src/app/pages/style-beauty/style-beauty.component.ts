import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-style-beauty',
  templateUrl: './style-beauty.component.html',
  styleUrls: ['./style-beauty.component.css']
})
export class StyleBeautyComponent implements OnInit {
  category = 'style-beauty';

  constructor() {
  }

  ngOnInit() {}
}
