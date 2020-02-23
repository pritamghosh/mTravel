import { Component, OnInit, Input } from "@angular/core";
import { FlightItinerary } from "src/app/models/flight.itinerary.model";
import { TravelService } from "src/app/services/travel.service";
import { FlightRequest } from "src/app/models/flight.request.model";
import { FlightPlan } from "src/app/models/flight.plan.model";

@Component({
  selector: "app-flight-itinerary",
  templateUrl: "./flight-itinerary.component.html",
  styleUrls: ["./flight-itinerary.component.scss"]
})
export class FlightItineraryComponent implements OnInit {
  @Input("flight") flightItinerary: FlightItinerary;
  @Input("request") request: FlightRequest;
  imgSrc = "assets/img/ai.png";
  showFlightInfo = false;
  currency = "₹";
  layovers = 0;
  constructor(private service: TravelService) {}
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
  addToTravelPlan() {
    let fp = new FlightPlan();
    fp.flight = this.flightItinerary;
    fp.req = this.request;
    this.service.pushFlight(fp);
  }
}
