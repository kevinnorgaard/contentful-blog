import { Component, OnInit, inject } from '@angular/core';
import { DialogService } from 'src/app/dialog.service';
import { ScrollTopService } from 'src/app/scroll-top.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  private dialogService = inject(DialogService);
  private scrollTopService = inject(ScrollTopService);

  ngOnInit() {
    this.scrollTopService.setScrollTop();
  }

  openDialog() {
    this.dialogService.open();
  }
}
