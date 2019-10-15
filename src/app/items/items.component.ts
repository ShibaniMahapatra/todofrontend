import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {HttpClient} from '@angular/common/http';
import { HttpClientModule} from '@angular/common/http'


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {
  products = [];

  constructor(private dataService: DataService) { }


  ngOnInit() {

    this.dataService.sendGetRequest().subscribe((data: any[])=>{
      console.log("data",typeof(data["data"]));
      this.products = (data["data"]);
      // console.log(this.products)
      // this.products.push(data["data"]);

    })  
  }
}

