import { Component, OnInit, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "create-event",
  templateUrl: "./create-event.component.html",
  styleUrls: ["./create-event.component.css"]
})
export class CreateEventComponent {
  posts: any[];
  private url = "http://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {}

  createEvent(input: HTMLInputElement) {
    let post = { event: input.value };
    input.value = "";

    this.http.post(this.url, JSON.stringify(post)).subscribe(response => {
      console.log("Success!", response);
    });
  }
}
