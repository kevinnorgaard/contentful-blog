import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/dialog.service';
import { ScrollTopService } from 'src/app/scroll-top.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private dialogService: DialogService,
    private scrollTopService: ScrollTopService) { }

  ngOnInit() {
    this.scrollTopService.setScrollTop();
  }

  openDialog() {
    this.dialogService.open();
  }
}
