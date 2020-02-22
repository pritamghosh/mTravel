import { Component, OnInit, Input } from "@angular/core";
import { FlightItinerary } from "src/app/models/flight.itinerary.model";

@Component({
  selector: "app-flight-itinerary",
  templateUrl: "./flight-itinerary.component.html",
  styleUrls: ["./flight-itinerary.component.scss"]
})
export class FlightItineraryComponent implements OnInit {
  @Input("flight") flightItinerary: FlightItinerary;
  imgSrc = "assets/img/ai.png";
  showFlightInfo = false;
  currency = "₹";
  layovers = 0;
  constructor() {}
  ngOnInit(): void {
    this.layovers =
      this.flightItinerary.layoverDurations != null
        ? this.flightItinerary.layoverDurations.length
        : 0;
  }

  get originInfo() {
    return (
      this.flightItinerary.originCity +
      ", " +
      this.flightItinerary.originCountry
    );
  }

  get destinationInfo() {
    return (
      this.flightItinerary.destinationCity +
      ", " +
      this.flightItinerary.destinationCountry
    );
  }

  get layoverPorts() {
    if (
      this.flightItinerary.layoverPorts == null ||
      this.flightItinerary.layoverPorts.length == 0
    ) {
      return "";
    }
    let str = "-";
    for (
      let index = 0;
      index < this.flightItinerary.layoverPorts.length;
      index++
    ) {
      const element: string = this.flightItinerary.layoverPorts[index];
      str += " " + element + " -";
    }

    return str;
  }
  get getIcon() {
    return this.showFlightInfo ? "keyboard_arrow_up" : "keyboard_arrow_down";
  }
  bookFlight() {}
}
