import { Component, OnInit } from "@angular/core";

@Component({
  selector: "create-event",
  templateUrl: "./create-event.component.html",
  styleUrls: ["./create-event.component.css"]
})
export class CreateEventComponent {
  contactMethods = [
    { id: 1, name: "Event location: " },
    { id: 2, name: "Event Time:" }
  ];
  log(x) {
    console.log(x);
  }

  submit(f) {
    console.log(f);
  }
}
