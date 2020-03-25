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

}
