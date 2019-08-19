import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  events: any[];
  private url = "http://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) { }

  onSubmit(f) {
    let post = { event: f };
    this.http.post<any[]>(this.url, post).subscribe(response => {
      this.events.push();
    });
  };

}
