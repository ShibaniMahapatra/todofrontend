import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Options } from 'selenium-webdriver/opera';
import { HttpHeaders } from '@angular/common/http';
import { NotifierModule } from "angular-notifier";
import { NotifierService } from 'angular-notifier';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_SERVER = "http://127.0.0.1:5000";
	private notifier: NotifierService;

  constructor(private httpClient: HttpClient,notifier: NotifierService) {
    this.notifier = notifier;
   }


  public sendGetRequest(){
    // console.log(this.httpClient.get(this.REST_API_SERVER))
    return this.httpClient.get(this.REST_API_SERVER+"/todo");
}

public sendPutRequest(id,data){

  console.log(this.httpClient.get(this.REST_API_SERVER))
  return this.httpClient.put(this.REST_API_SERVER+"/todo/"+id,data);
}   
public sendPostRequest(data){

  console.log(this.httpClient.get(this.REST_API_SERVER))
  return this.httpClient.post(this.REST_API_SERVER+"/todo",data,httpOptions);
}

public sendDeleteRequest(id){

  console.log(this.httpClient.get(this.REST_API_SERVER))
  return this.httpClient.delete(this.REST_API_SERVER+"/todo/"+id);
}
public sendYoutubeGetRequest(urldata){
  // console.log(this.httpClient.get(this.REST_API_SERVER))
  return this.httpClient.get(this.REST_API_SERVER+"/youtube?youtube_url="+urldata);
}

public showNotification( type: string, message: string ): void {
  this.notifier.notify( type, message );
  // debugger;
}

// getHeroes (): Observable<Hero[]> {
//   return this.http.get<Hero[]>(this.heroesUrl)
//     .pipe(
//       catchError(this.handleError('getHeroes', []))
//     );
// }
}

