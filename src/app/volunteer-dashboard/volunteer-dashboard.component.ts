import { JoinEventService } from './../join-event/join-event.service';
import { JoinEventComponent } from './../join-event/join-event.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'volunteer-dashboard',
  templateUrl: './volunteer-dashboard.component.html',
  styleUrls: ['./volunteer-dashboard.component.css']
})
export class VolunteerDashboardComponent implements OnInit {
  details: any[];
  filteredResults: any[];
  constructor(private service: JoinEventService) { }


  ngOnInit() {
    this.service.getDetails().subscribe(response => {
      this.details = response.filter(p => p.userId === 2);  //  instead of userId of 2, pass in dynamic variable which will be userId of logged in user.  
    });
  }

  updateFilter(id) {
    this.filteredResults = id ? this.details.filter(p => p.userId === id) : this.details;
  }




}

