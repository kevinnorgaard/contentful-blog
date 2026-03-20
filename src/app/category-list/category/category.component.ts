import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrl: './category.component.css',
    imports: [NgStyle, RouterLink]
})
export class CategoryComponent {
  @Input() category: string;
  @Input() route: string;
  @Input() img: string;

  getBackground() {
    return "url('" + this.img + "')";
  }
}
