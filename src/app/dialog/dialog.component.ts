import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';


export interface DialogData {
  name: Object;
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  title: string;
  ngOnInit() {
  }
  // constructor(private dataService: DataService) { }
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private dataService: DataService) { }

  @Input() id: string;

  onSave(f: NgForm) {
    let inputvalue;
    console.log("HI");
    // console.log(this.title);
    console.log(f);
    console.log(f.value);
    // console.log(f.title.value);


    // console.log(this.data["_id"]);
    this.dataService.sendPutRequest(this.data["_id"], f.value).subscribe((data: any[]) => {
      console.log("data",typeof(data["data"]));
      // this.products = (data["data"]);
    })
}
}
