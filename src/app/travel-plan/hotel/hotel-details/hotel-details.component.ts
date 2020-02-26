import { Component, OnInit, Input } from "@angular/core";
import { Hotel } from "src/app/models/hotel.model";
import { HotelRequet } from "src/app/models/hotel.request.model";
import { TravelService } from "src/app/services/travel.service";
import { HotelPlan } from "src/app/models/hotel.plan.model";

@Component({
  selector: "app-hotel-details",
  templateUrl: "./hotel-details.component.html",
  styleUrls: ["./hotel-details.component.scss"]
})
export class HotelDetailsComponent implements OnInit {
  @Input("hotel") hotel: Hotel;
  @Input("request") request: HotelRequet;
  @Input("view") isView = false;
  showHotelDetails = false;
  currency = "₹";
  constructor(private service: TravelService) {}

  addToTravelPlan() {
    let hp = new HotelPlan();
    hp.hotel = this.hotel;
    hp.req = this.request;
    this.service.pushHotel(hp);
  }
  get getIcon() {
    return this.showHotelDetails ? "keyboard_arrow_up" : "keyboard_arrow_down";
  }

  ngOnInit(): void {}

  get requestDetails() {
    const days = this.getDate(
      this.request.checkOutDate,
      this.request.checkInDate
    );
    const person = this.request.adults + this.request.children;
    let str =
      "For " +
      this.request.rooms +
      "Room" +
      (this.request.rooms > 1 ? "s, " : ", ") +
      days +
      "Day" +
      (days > 1 ? "s, " : ", ") +
      person +
      "Person" +
      (person > 1 ? "s," : ",");
    return str;
  }

  getDate(date1: Date, date2: Date): number {
    return 2;
  }
}