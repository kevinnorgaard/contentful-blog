import { Component, OnInit, inject } from '@angular/core';
import { ScrollTopService } from 'src/app/scroll-top.service';
import { BlogListComponent } from 'src/app/blog-list/blog-list.component';

@Component({
    selector: 'app-art',
    templateUrl: './art.component.html',
    styleUrl: './art.component.css',
    imports: [BlogListComponent]
})
export class ArtComponent implements OnInit {
  category = 'art';

  private scrollTopService = inject(ScrollTopService);

  ngOnInit() {
    this.scrollTopService.setScrollTop();
  }
}
