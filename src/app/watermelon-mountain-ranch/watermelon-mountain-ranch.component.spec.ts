import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatermelonMountainRanchComponent } from './watermelon-mountain-ranch.component';

describe('WatermelonMountainRanchComponent', () => {
  let component: WatermelonMountainRanchComponent;
  let fixture: ComponentFixture<WatermelonMountainRanchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatermelonMountainRanchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatermelonMountainRanchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
