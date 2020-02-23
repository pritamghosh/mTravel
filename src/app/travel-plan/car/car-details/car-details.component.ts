import { Component, OnInit, Input } from "@angular/core";
import { Car } from "src/app/models/car.model";
import { CarHire } from "src/app/models/car.hire.model";
import { TravelService } from "src/app/services/travel.service";
import { CarPlan } from "src/app/models/car.plan.model";

import { faUser, faSuitcase } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-car-details",
  templateUrl: "./car-details.component.html",
  styleUrls: ["./car-details.component.scss"]
})
export class CarDetailsComponent implements OnInit {
  @Input("car") car: Car;
  @Input("request") request: CarHire;
  @Input("view") isView = false;
  showDetails = false;
  currency = "₹";
  luggage = faSuitcase;
  passeneger = faUser;
  constructor(private service: TravelService) {}

  ngOnInit(): void {}

  addToTravelPlan() {
    let cp = new CarPlan();
    cp.car = this.car;
    cp.req = this.request;
    this.service.pushCar(cp);
  }
}
