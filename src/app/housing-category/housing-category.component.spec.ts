import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingCategoryComponent } from './housing-category.component';

describe('HousingCategoryComponent', () => {
  let component: HousingCategoryComponent;
  let fixture: ComponentFixture<HousingCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousingCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousingCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
