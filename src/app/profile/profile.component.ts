import { JoinEventService } from './../join-event/join-event.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  users: any[];
  userResults: any[];
  constructor(private service: JoinEventService) { }

  ngOnInit() {
    this.service.getDetails().subscribe(response => {
      this.users = response.filter(p => p.userId === 1);
    });
  }

  updateFilter(id) {
    this.userResults = id ? this.users.filter(p => p.userId === id) : this.users;
  }
}
