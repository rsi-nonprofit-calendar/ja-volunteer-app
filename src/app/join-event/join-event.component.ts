import { CreateEventComponent } from "./../create-event/create-event.component";

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { JoinEventService } from "./join-event.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "join-event",
  templateUrl: "./join-event.component.html",
  styleUrls: ["./join-event.component.css"]
})
export class JoinEventComponent {
  private url = "http://jsonplaceholder.typicode.com/posts";
  details: any[];
  posts: any[];
  clicked = false;
  constructor(private service: JoinEventService, private http: HttpClient) { }

  ngOnInit() {
    this.posts = [];
    this.service.getDetails().subscribe(response => {
      this.details = response;
    });

  };

  onSubmit(f) {
    let post = { event: f };
    this.http.post(this.url, post).subscribe(response => {
      this.posts.push(response);
    });
  };


}

