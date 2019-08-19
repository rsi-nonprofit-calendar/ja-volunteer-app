import { HttpClient } from '@angular/common/http';


export class JoinEventService {
  private url = "http://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) {


  }




  getDetails() {
    return this.http.get<any[]>(this.url);
  }



}