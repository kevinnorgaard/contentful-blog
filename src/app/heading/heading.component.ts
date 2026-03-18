import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-heading',
    templateUrl: './heading.component.html',
    styleUrls: ['./heading.component.css'],
    standalone: false
})
export class HeadingComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
