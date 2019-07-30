import { Component, OnInit, ViewChild, Injectable, ViewChildren } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: "create-event",
  templateUrl: "./create-event.component.html",
  styleUrls: ["./create-event.component.css"]
})
export class CreateEventComponent implements OnInit {
  @ViewChild('f', { static: false }) eventForm: NgForm;
  posts: any[];
  private url = "http://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.posts = [];
  }

  onSubmit(f) {
    let post = { event: f };
    this.http.post(this.url, post).subscribe(response => {
      console.log("Success!", response);
      this.posts.push(response);
      this.eventForm.resetForm();
    });
  };
}

