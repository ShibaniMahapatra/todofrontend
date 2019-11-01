import { Component, OnInit ,Input,Inject,Optional} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { DataService } from '../data.service';

export interface DialogData {
  name: Object;
}
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: any[];


  constructor(private dataService: DataService,public dialog: MatDialog) {}
  // constructor(
  //   @Optional()@Inject(MAT_DIALOG_DATA) public data: DialogData, private dataService: DataService,
  //   public dialog: MatDialog) { }
  ngOnInit() {
  }

  delete(): void {
    // id=this.data["_id"]
    // this.heroes = this.heroes.filter(h => h !== hero);
    // this.dataService.sendDeleteRequest(this.data["_id"]).subscribe(); 
    
    this.dataService.sendDeleteRequest(this.item["_id"]).subscribe((data: any[]) => {
      // console.log("data",typeof(data["data"]));
      // this.products = (data["data"]);
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data:  this.item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  
}
