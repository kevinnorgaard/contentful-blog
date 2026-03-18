import { Component, OnInit } from '@angular/core';
import { ScrollTopService } from 'src/app/scroll-top.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: false
})
export class HomeComponent implements OnInit {
  loaded = false;

  constructor(private scrollTopService: ScrollTopService) { }

  ngOnInit() {
    this.scrollTopService.setScrollTop();
  }
}
