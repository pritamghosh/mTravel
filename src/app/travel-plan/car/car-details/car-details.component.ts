import { Component, OnInit, Input } from "@angular/core";
import { Car } from "src/app/models/car.model";
import { CarHire } from "src/app/models/car.hire.model";

@Component({
  selector: "app-car-details",
  templateUrl: "./car-details.component.html",
  styleUrls: ["./car-details.component.scss"]
})
export class CarDetailsComponent implements OnInit {
  @Input("car") car: Car;
  @Input("request") request: CarHire;
  showDetails = false;
  currency = "₹";
  constructor() {}

  ngOnInit(): void {}

  addToTravelPlan() {}
}
