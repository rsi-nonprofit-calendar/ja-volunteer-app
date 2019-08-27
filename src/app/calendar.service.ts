import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private url = "http://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) { }

}


