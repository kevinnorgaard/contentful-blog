import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() category: string;
  @Input() route: string;
  @Input() img: string;

  constructor() { }

  ngOnInit() {
  }

  getBackground() {
    return "url('" + this.img + "')";
  }

  onTab() {
    window.scrollTo(0, 0);
  }
}
