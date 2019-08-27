import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerCalendarComponent } from './volunteer-calendar.component';

describe('VolunteerCalendarComponent', () => {
  let component: VolunteerCalendarComponent;
  let fixture: ComponentFixture<VolunteerCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
