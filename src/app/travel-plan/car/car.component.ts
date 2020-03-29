import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Options } from "ng5-slider";

import { Subscription } from "rxjs";
import { CarHire } from "src/app/models/car.hire.model";
import { CarService } from "src/app/services/car.service";
import { Car } from "src/app/models/car.model";
import { environment } from "src/environments/environment";
import { LoginService } from "src/app/services/login.service";
@Component({
  selector: "app-car",
  templateUrl: "./car.component.html",
  styleUrls: ["./car.component.scss"]
})
export class CarComponent implements OnInit, OnDestroy {
  minCheckInDate = new Date();
  searchCarForm: FormGroup;
  carSearchResp: Car[];
  filteredResponse: Car[] = [];
  subscription: Subscription;
  isSearched = false;
  minPrice = 0;
  maxPrice = 0;
  minPassenger = 0;
  maxPassenger = 10;
  minLuggage = 0;
  maxLuggage = 10;
  priceOptions: Options;
  PassengerOptions: Options;
  luggageOptions: Options;

  miniClass = true;
  economyClass = true;
  premimumClass = true;
  compactClass = true;

  type2to3 = true;
  type4to5 = true;
  typeSuv = true;
  typeVan = true;
  typeTruck = true;

  request: CarHire;
  constructor(
    private service: CarService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.searchCarForm = new FormGroup({
      pickUpLocation: new FormControl(
        environment.defaultPickUpLocation,
        Validators.required
      ),
      dropOffLocation: new FormControl(
        environment.defaultDropOffLocation,
        Validators.required
      ),
      pickUpDate: new FormControl(this.minCheckInDate, Validators.required),
      pickUpTime: new FormControl("10:00 AM", Validators.required),
      numberOfPassengers: new FormControl(1, Validators.pattern("[0-9]{1}")),
      numberOfLuggages: new FormControl(0, Validators.pattern("[0-9]{0,1}")),
      carType: new FormControl(""),
      carClass: new FormControl("")
    });
    this.subscription = this.service.getResponse().subscribe(resp => {
      this.carSearchResp = resp;
      this.carSearchResp.forEach(element => {
        if (element.price <= this.loginService.carFare) {
          this.filteredResponse.push(element);
        }
      });
      this.updateFilters();
      this.isSearched = true;
    });
  }

  updateFilters() {
    this.maxPrice = 6000;
    this.priceOptions = {
      floor: 0,
      ceil: this.maxPrice,
      translate: (value: number, label: any): string => {
        return "" + value;
      }
    };

    this.PassengerOptions = {
      floor: 0,
      ceil: 10,
      step: 1,
      translate: (value: number, label: any): any => {
        return value;
      }
    };
    this.maxLuggage =
      this.request.numberOfLuggages > 0 ? this.request.numberOfLuggages : 10;
    this.maxPassenger =
      this.request.numberOfPassengers > 0
        ? this.request.numberOfPassengers
        : 10;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onSubmit() {
    this.service.search(this.searchCarForm.value);
    this.request = this.searchCarForm.value;
  }

  resetFilter() {
    this.resetPrice();
    this.resetType();
    this.resetClass();
    this.resetPassenger();
    this.resetLuggage();
  }
  resetPrice() {}
  resetPassenger() {}
  resetLuggage() {}
  resetType() {
    this.type2to3 = true;
    this.type4to5 = true;
    this.typeSuv = true;
    this.typeVan = true;
    this.typeTruck = true;
  }
  resetClass() {
    this.miniClass = true;
    this.economyClass = true;
    this.premimumClass = true;
    this.compactClass = true;
  }

  filterPrice() {}
  filterPassenger() {}
  filterLuggage() {}
  filterType() {}
  filterClass() {}
}
