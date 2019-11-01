import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {HttpClient} from '@angular/common/http';
import { HttpClientModule} from '@angular/common/http'
import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PostdialogComponent} from '../postdialog/postdialog.component'
import { DialogComponent} from '../dialog/dialog.component';

// import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {
  products = [];
  id:string="";
  constructor(private dataService: DataService,public dialog: MatDialog) { }


  ngOnInit() {

    this.dataService.sendGetRequest().subscribe((data: any[])=>{
      console.log("data",typeof(data["data"]));
      this.products = (data["data"]);
      this.id=data["data"]["_id"]
      // console.log(this.products)
      // this.products.push(data["data"]);
    })
    
    }
    openPostForm(): void {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '250px',
        // data:  this.item
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
  }
}

