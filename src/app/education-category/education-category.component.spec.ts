import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationCategoryComponent } from './education-category.component';

describe('EducationCategoryComponent', () => {
  let component: EducationCategoryComponent;
  let fixture: ComponentFixture<EducationCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
