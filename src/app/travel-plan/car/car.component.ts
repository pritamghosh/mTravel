import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Options } from "ng5-slider";

import { Subscription } from "rxjs";
import { CarHire } from "src/app/models/car.hire.model";
import { CarService } from "src/app/services/car.service";
import { Car } from "src/app/models/car.model";
@Component({
  selector: "app-car",
  templateUrl: "./car.component.html",
  styleUrls: ["./car.component.scss"]
})
export class CarComponent implements OnInit, OnDestroy {
  minCheckInDate = new Date();
  searchCarForm: FormGroup;
  carSearchResp: Car[];
  filteredResponse: Car[];
  subscription: Subscription;

  request: CarHire;
  constructor(private service: CarService) {}

  ngOnInit(): void {
    this.searchCarForm = new FormGroup({
      pickUpLocation: new FormControl("", Validators.required),
      dropOffLocation: new FormControl("", Validators.required),
      pickUpDate: new FormControl(this.minCheckInDate, Validators.required),
      pickUpTime: new FormControl("10:00 PM", Validators.required),
      numberOfPassengers: new FormControl(),
      numberOfLuggarge: new FormControl(),
      carType: new FormControl()
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onSubmit() {}
}
