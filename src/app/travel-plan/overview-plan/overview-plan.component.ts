import { Component, OnInit, OnDestroy } from "@angular/core";
import { TravelService } from "src/app/services/travel.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { FlightPlan } from "src/app/models/flight.plan.model";
import { CarPlan } from "src/app/models/car.plan.model";
import { HotelPlan } from "src/app/models/hotel.plan.model";

@Component({
  selector: "app-overview-plan",
  templateUrl: "./overview-plan.component.html",
  styleUrls: ["./overview-plan.component.scss"]
})
export class OverviewPlanComponent implements OnInit, OnDestroy {
  step = 0;
  reviewform: FormGroup;
  carSubs: Subscription;
  hotelSubs: Subscription;
  flightSubs: Subscription;
  insuranceSubs: Subscription;
  fp: FlightPlan;
  cp: CarPlan;
  hp: HotelPlan;
  ip: any;
  constructor(private service: TravelService) {}

  ngOnInit(): void {
    this.carSubs = this.service.carSubject.asObservable().subscribe(resp => {
      this.cp = resp;
    });
    this.flightSubs = this.service.flightSubject
      .asObservable()
      .subscribe(resp => (this.fp = resp));
    this.hotelSubs = this.service.hotelSubject
      .asObservable()
      .subscribe(resp => (this.hp = resp));
    this.insuranceSubs = this.service.insuranceSubject
      .asObservable()
      .subscribe(resp => console.log(resp));
  }

  ngOnDestroy(): void {
    this.carSubs.unsubscribe();
    this.hotelSubs.unsubscribe();
    this.flightSubs.unsubscribe();
    this.insuranceSubs.unsubscribe();
  }

  onSubmit() {}

  add(index: number) {
    this.service.tabIndex.next(index);
  }
  remove(index: number) {}
}
