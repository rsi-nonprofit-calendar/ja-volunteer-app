import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EqualityCategoryComponent } from './equality-category.component';

describe('EqualityCategoryComponent', () => {
  let component: EqualityCategoryComponent;
  let fixture: ComponentFixture<EqualityCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EqualityCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EqualityCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
