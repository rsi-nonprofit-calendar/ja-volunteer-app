import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentCategoryComponent } from './environment-category.component';

describe('EnvironmentCategoryComponent', () => {
  let component: EnvironmentCategoryComponent;
  let fixture: ComponentFixture<EnvironmentCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
