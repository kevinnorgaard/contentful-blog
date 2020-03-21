import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Input() blog;

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
    return styles.join(',');
  }
}
