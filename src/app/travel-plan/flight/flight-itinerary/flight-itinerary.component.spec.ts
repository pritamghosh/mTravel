import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightItineraryComponent } from './flight-itinerary.component';

describe('FlightItineraryComponent', () => {
  let component: FlightItineraryComponent;
  let fixture: ComponentFixture<FlightItineraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightItineraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightItineraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
