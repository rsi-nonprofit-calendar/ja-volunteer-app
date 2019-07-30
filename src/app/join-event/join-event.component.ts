import { CreateEventComponent } from './../create-event/create-event.component';

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'join-event',
  templateUrl: './join-event.component.html',
  styleUrls: ['./join-event.component.css']
})
export class JoinEventComponent implements OnInit {
  // posts: any[];
  // private url = "http://jsonplaceholder.typicode.com/posts";
  // constructor(private http: HttpClient) { }

  ngOnInit() {
  }





  // ngOnInit() {
  //   this.posts = [];
  // }

  // clickJoin() {
  //   let post = userID;
  //   this.http.post(this.url, post);
  // }

}
