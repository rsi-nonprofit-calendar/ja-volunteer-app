import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonprofitComponent } from './nonprofit.component';

describe('NonprofitComponent', () => {
  let component: NonprofitComponent;
  let fixture: ComponentFixture<NonprofitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonprofitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonprofitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
