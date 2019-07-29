import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcareCategoryComponent } from './healthcare-category.component';

describe('HealthcareCategoryComponent', () => {
  let component: HealthcareCategoryComponent;
  let fixture: ComponentFixture<HealthcareCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthcareCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthcareCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
