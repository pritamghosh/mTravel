import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Hotel } from "src/app/models/hotel.model";
import { Options } from "ng5-slider";
import { Subscription } from "rxjs";
import { HotelRequet } from "src/app/models/hotel.request.model";
import { HotelService } from "src/app/services/hotel.service";
import { environment } from "src/environments/environment";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-hotel",
  templateUrl: "./hotel.component.html",
  styleUrls: ["./hotel.component.scss"]
})
export class HotelComponent implements OnInit, OnDestroy {
  minCheckInDate = new Date();
  searchHotelForm: FormGroup;
  hotelSearchResp: Hotel[];
  filteredResponse: Hotel[] = [];
  subscription: Subscription;

  request: HotelRequet;
  isSearched = false;

  hotelType = true;
  serviceApartmentType = true;
  guestHouseType = true;

  minPrice = 0;
  minDuration = 0;
  maxPrice = 0;

  priceOptions: Options;
  constructor(
    private service: HotelService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.searchHotelForm = new FormGroup({
      key: new FormControl(
        environment.defaultHotelLocation,
        Validators.required
      ),
      checkInDate: new FormControl(this.minCheckInDate, Validators.required),
      checkOutDate: new FormControl(this.minCheckInDate, Validators.required),
      adults: new FormControl(1, Validators.required),
      children: new FormControl(0),
      rooms: new FormControl(1, Validators.required),
      type: new FormControl("")
    });

    this.subscription = this.service.getResponse().subscribe(resp => {
      this.hotelSearchResp = resp;
      this.hotelSearchResp.forEach(element => {
        if (element.price <= this.loginService.hotelPrice) {
          this.filteredResponse.push(element);
        }
      });
      this.updateFilter();
      this.isSearched = true;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateFilter() {
    this.maxPrice = 3000;
    this.priceOptions = {
      floor: 0,
      ceil: this.maxPrice,
      translate: (value: number, label: any): string => {
        return "" + value;
      }
    };
  }

  onSubmit() {
    this.service.search(this.searchHotelForm.value);
    this.request = this.searchHotelForm.value;
  }

  get minCheckOutDate() {
    return this.searchHotelForm.get("checkInDate").value;
  }

  resetFilter() {
    this.resetPrice();
    this.resetType();
  }
  resetPrice() {}
  resetType() {
    this.hotelType = true;
    this.serviceApartmentType = true;
    this.guestHouseType = true;
  }

  filterType() {}
}
