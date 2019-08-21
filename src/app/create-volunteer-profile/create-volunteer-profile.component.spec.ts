import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVolunteerProfileComponent } from './create-volunteer-profile.component';

describe('CreateVolunteerProfileComponent', () => {
  let component: CreateVolunteerProfileComponent;
  let fixture: ComponentFixture<CreateVolunteerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVolunteerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVolunteerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
