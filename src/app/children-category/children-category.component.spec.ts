import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenCategoryComponent } from './children-category.component';

describe('ChildrenCategoryComponent', () => {
  let component: ChildrenCategoryComponent;
  let fixture: ComponentFixture<ChildrenCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
