import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Hotel } from "src/app/models/hotel.model";

@Component({
  selector: "app-hotel",
  templateUrl: "./hotel.component.html",
  styleUrls: ["./hotel.component.scss"]
})
export class HotelComponent implements OnInit, OnDestroy {
  minCheckInDate = new Date();
  searchHotelForm: FormGroup;
  hotelSearchResp: Hotel[];
  filteredResponse: Hotel[];
  constructor() {}

  ngOnInit(): void {
    this.searchHotelForm = new FormGroup({
      key: new FormControl("", Validators.required),
      checkInDate: new FormControl(this.minCheckInDate, Validators.required),
      checkOutDate: new FormControl(this.minCheckOutDate, Validators.required),
      adults: new FormControl(1, Validators.required),
      children: new FormControl(0),
      rooms: new FormControl(1, Validators.required),
      type: new FormControl()
    });
  }
  ngOnDestroy(): void {}

  onSubmit() {
    console.log(JSON.stringify(this.searchHotelForm.value));
  }

  get maxCheckOutDate() {
    return this.minCheckInDate;
  }
  get minCheckOutDate() {
    return this.minCheckInDate;
  }

  resetFilter() {}
}
