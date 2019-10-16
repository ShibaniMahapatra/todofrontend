import { Component, OnInit ,Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ItemEditModalComponent} from '../item-edit-modal/item-edit-modal.component'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Object;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ItemEditModalComponent, {
      width: '500px',
      data: this.item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
}