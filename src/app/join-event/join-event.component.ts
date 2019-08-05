import { CreateEventComponent } from './../create-event/create-event.component';

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { JoinEventService } from './join-event.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'join-event',
  templateUrl: './join-event.component.html',
  styleUrls: ['./join-event.component.css']
})
export class JoinEventComponent {
  title = "Event Details"

  details;

  constructor(service: JoinEventService) {
    this.details = service.getDetails();
  }
}







