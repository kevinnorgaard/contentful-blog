import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contentful-list',
  templateUrl: './contentful-list.component.html',
  styleUrls: ['./contentful-list.component.css']
})
export class ContentfulListComponent implements OnInit {
  @Input() listType;
  @Input() item;
  constructor() { }

  ngOnInit() {
  }

  getStyle(item) {
    if (!item.marks) {
      return '';
    }
    const styles = [];
    for (const mark of item.marks) {
      styles.push(mark.type);
    }
    return styles.join(' ');
  }
}
