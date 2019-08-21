import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'create-volunteer-profile',
  templateUrl: './create-volunteer-profile.component.html',
  styleUrls: ['./create-volunteer-profile.component.css']
})
export class CreateVolunteerProfileComponent implements OnInit {


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
      this.posts.push(response);
      this.eventForm.resetForm();
    });
  };
}
