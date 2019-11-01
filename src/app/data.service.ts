import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_SERVER = "http://127.0.0.1:5000/todo";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    // console.log(this.httpClient.get(this.REST_API_SERVER))
    return this.httpClient.get(this.REST_API_SERVER);
}

public sendPutRequest(id,data){

  console.log(this.httpClient.get(this.REST_API_SERVER))
  return this.httpClient.put(this.REST_API_SERVER+"/"+id,data);
}

public sendDeleteRequest(id){

  console.log(this.httpClient.get(this.REST_API_SERVER))
  return this.httpClient.delete(this.REST_API_SERVER+"/"+id);
}


// getHeroes (): Observable<Hero[]> {
//   return this.http.get<Hero[]>(this.heroesUrl)
//     .pipe(
//       catchError(this.handleError('getHeroes', []))
//     );
// }
}

