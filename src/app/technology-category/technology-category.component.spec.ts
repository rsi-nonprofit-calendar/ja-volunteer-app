import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyCategoryComponent } from './technology-category.component';

describe('TechnologyCategoryComponent', () => {
  let component: TechnologyCategoryComponent;
  let fixture: ComponentFixture<TechnologyCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
