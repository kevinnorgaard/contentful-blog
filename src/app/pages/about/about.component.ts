import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/dialog.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private dialogService: DialogService) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialogService.open();
  }
}
