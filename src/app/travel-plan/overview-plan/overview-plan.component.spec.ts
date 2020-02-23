import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewPlanComponent } from './overview-plan.component';

describe('OverviewPlanComponent', () => {
  let component: OverviewPlanComponent;
  let fixture: ComponentFixture<OverviewPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
