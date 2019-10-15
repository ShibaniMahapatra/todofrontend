import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_SERVER = "http://127.0.0.1:5000/todo ";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    // console.log(this.httpClient.get(this.REST_API_SERVER))
    return this.httpClient.get(this.REST_API_SERVER);
}
}

