import { Component, OnInit } from '@angular/core';
import { ScrollTopService } from 'src/app/scroll-top.service';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {
  category = 'art';

  constructor(private scrollTopService: ScrollTopService) {
  }

  ngOnInit() {
    this.scrollTopService.setScrollTop();
  }
}
