import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-youtube",
  templateUrl: "./youtube.component.html",
  styleUrls: ["./youtube.component.css"]
})
export class YoutubeComponent implements OnInit {
  urlvalue: string;

  constructor(private dataService: DataService) {}
  ngOnInit() {
    // console.log(this.products)
    // this.products.push(data["data"]);
  }

  saveVideo() {
    console.log(this.urlvalue);

    this.dataService.sendYoutubeGetRequest(this.urlvalue).subscribe((data: any[]) => {
      console.log(this.urlvalue);
    });
  }
}
