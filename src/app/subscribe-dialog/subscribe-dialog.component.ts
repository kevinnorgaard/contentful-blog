import { Component, OnInit } from '@angular/core';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-subscribe-dialog',
  templateUrl: './subscribe-dialog.component.html',
  styleUrls: ['./subscribe-dialog.component.css']
})
export class SubscribeDialogComponent implements OnInit {

  constructor(private dialogService: DialogService) { }

  isOpen() {
    return this.dialogService.isOpen();
  }

  close() {
    return this.dialogService.close();
  }

  ngOnInit() {
  }

}
