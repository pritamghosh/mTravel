import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Options, LabelType } from "ng5-slider";
import { FlightItinerary } from "src/app/models/flight.itinerary.model";
import { FlightService } from "src/app/services/flight.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-flight",
  templateUrl: "./flight.component.html",
  styleUrls: ["./flight.component.scss"]
})
export class FlightComponent implements OnInit {
  minDepDate = new Date();
  minRetDate = new Date();
  searchFlightForm: FormGroup;
  flightSearchResp: FlightItinerary[];
  filteredResponse: FlightItinerary[];
  subscription: Subscription;

  stop0 = true;
  stop1 = true;
  stop2 = true;
  stop3 = true;
  dep1 = true;
  dep2 = true;
  dep3 = true;
  dep4 = true;
  arr1 = true;
  arr2 = true;
  arr3 = true;
  arr4 = true;
  minPrice = 0;
  minDuration = 0;
  maxPrice = this.minPrice + 1000;
  ceilDuration = 400;
  maxDuration = 72;
  ceilprice = 1000;
  currency = "₹";
  priceOptions: Options;

  durationOptions: Options;
  constructor(private flightService: FlightService) {}

  ngOnInit(): void {
    this.maxDuration = 72 * 60;
    this.maxPrice = 3000;
    this.priceOptions = {
      floor: 0,
      ceil: this.maxPrice,
      translate: (value: number, label: LabelType): string => {
        return this.currency + value;
      }
    };
    this.durationOptions = {
      floor: 0,
      ceil: this.maxDuration,
      translate: (value: number, label: LabelType): string => {
        return Math.floor(value / 60) + "h " + (value % 60) + "m";
      }
    };
    this.searchFlightForm = new FormGroup({
      from: new FormControl(null, Validators.required),
      to: new FormControl(null, Validators.required),
      depDate: new FormControl(new Date(), Validators.required),
      returnDate: new FormControl(),
      adults: new FormControl(1, Validators.pattern("[0-9]{1}")),
      children: new FormControl(0, Validators.pattern("[0-9]{1}")),
      infants: new FormControl(0, Validators.pattern("[0-9]{1}")),
      class_: new FormControl("E", Validators.required)
    });
    this.subscription = this.flightService.getResponse().subscribe(resp => {
      this.flightSearchResp = resp;
      this.filteredResponse = resp;
      console.log(JSON.stringify(this.flightSearchResp));
    });
    this.onSubmit();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    console.log(JSON.stringify(this.searchFlightForm.value));
    this.flightService.search();
  }

  filterStops() {}
  filterDeperture() {}
  filterArrival() {}
  resetFilter() {
    this.resetDep();
    this.resetArr();
    this.resetAirports();
    this.resetAirlines();
    this.resetPrice();
    this.resetDuartion();
    this.resetStops();
  }

  resetDep() {}
  resetArr() {}
  resetPrice() {}
  resetStops() {}
  resetAirlines() {}
  resetAirports() {}
  resetDuartion() {}
}
