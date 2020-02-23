import { Component, OnInit, OnDestroy } from "@angular/core";
import { TravelService } from "src/app/services/travel.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-overview-plan",
  templateUrl: "./overview-plan.component.html",
  styleUrls: ["./overview-plan.component.scss"]
})
export class OverviewPlanComponent implements OnInit {
  carSubs: Subscription;
  hotelSubs: Subscription;
  flightSubs: Subscription;
  insuranceSubs: Subscription;
  constructor(private service: TravelService) {}

  ngOnInit(): void {
    this.carSubs = this.service.carSubject
      .asObservable()
      .subscribe(resp => console.log(resp));
    this.flightSubs = this.service.flightSubject
      .asObservable()
      .subscribe(resp => console.log(resp));
    this.carSubs = this.service.hotelSubject
      .asObservable()
      .subscribe(resp => console.log(resp));
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
}
