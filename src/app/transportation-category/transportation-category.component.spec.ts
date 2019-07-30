import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationCategoryComponent } from './transportation-category.component';

describe('TransportationCategoryComponent', () => {
  let component: TransportationCategoryComponent;
  let fixture: ComponentFixture<TransportationCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportationCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportationCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
