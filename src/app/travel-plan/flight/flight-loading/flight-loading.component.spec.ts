import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightLoadingComponent } from './flight-loading.component';

describe('FlightLoadingComponent', () => {
  let component: FlightLoadingComponent;
  let fixture: ComponentFixture<FlightLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
