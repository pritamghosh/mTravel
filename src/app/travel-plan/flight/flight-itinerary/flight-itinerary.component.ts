import { Component, OnInit, Input } from "@angular/core";
import { TravelService } from "src/app/services/travel.service";
import { FlightRequest } from "src/app/models/flight.request.model";
import { FlightPlan } from "src/app/models/flight.plan.model";
import { Travellers } from "src/app/models/travellers.model";
import { Traveller } from "src/app/models/traveller.model";
import { OfferPack } from "src/app/models/offer.pack.model";

@Component({
  selector: "app-flight-itinerary",
  templateUrl: "./flight-itinerary.component.html",
  styleUrls: ["./flight-itinerary.component.scss"]
})
export class FlightItineraryComponent implements OnInit {
  @Input("offerPack") offerPack: OfferPack;
  @Input("request") request: FlightRequest;
  imgSrc = "assets/img/ai.png";
  showFlightInfo = false;
  currency = "₹";
  layovers = 0;
  returnLayovers = 0;
  constructor(private service: TravelService) {}
  ngOnInit(): void {
    console.log(this.offerPack);

    this.layovers =
      this.offerPack.onwardFlightItinerary.layoverDurations != null
        ? this.offerPack.onwardFlightItinerary.layoverDurations.length
        : 0;

    this.returnLayovers =
      this.offerPack.returnFlightItinerary != null &&
      this.offerPack.returnFlightItinerary.layoverDurations != null
        ? this.offerPack.returnFlightItinerary.layoverDurations.length
        : 0;
  }

  get originInfo() {
    return (
      this.offerPack.onwardFlightItinerary.originCity +
      ", " +
      this.offerPack.onwardFlightItinerary.originCountry
    );
  }

  get destinationInfo() {
    return (
      this.offerPack.onwardFlightItinerary.destinationCity +
      ", " +
      this.offerPack.onwardFlightItinerary.destinationCountry
    );
  }

  get layoverPorts() {
    if (
      this.offerPack.onwardFlightItinerary.layoverPorts == null ||
      this.offerPack.onwardFlightItinerary.layoverPorts.length == 0
    ) {
      return "";
    }
    let str = "-";
    for (
      let index = 0;
      index < this.offerPack.onwardFlightItinerary.layoverPorts.length;
      index++
    ) {
      const element: string = this.offerPack.onwardFlightItinerary.layoverPorts[
        index
      ];
      str += " " + element + " -";
    }

    return str;
  }

  get returnOriginInfo() {
    return (
      this.offerPack.returnFlightItinerary.originCity +
      ", " +
      this.offerPack.returnFlightItinerary.originCountry
    );
  }

  get returnDestinationInfo() {
    return (
      this.offerPack.returnFlightItinerary.destinationCity +
      ", " +
      this.offerPack.returnFlightItinerary.destinationCountry
    );
  }

  get returnLayoverPorts() {
    if (
      this.offerPack.returnFlightItinerary.layoverPorts == null ||
      this.offerPack.returnFlightItinerary.layoverPorts.length == 0
    ) {
      return "";
    }
    let str = "-";
    for (
      let index = 0;
      index < this.offerPack.returnFlightItinerary.layoverPorts.length;
      index++
    ) {
      const element: string = this.offerPack.returnFlightItinerary.layoverPorts[
        index
      ];
      str += " " + element + " -";
    }

    return str;
  }
  get getIcon() {
    return this.showFlightInfo ? "keyboard_arrow_up" : "keyboard_arrow_down";
  }
  addToTravelPlan() {
    let fp = new FlightPlan();
    fp.offerPack = this.offerPack;
    fp.req = this.request;
    let tvs = new Travellers();
    tvs.email = "gh@hg.com";
    tvs.contact = "9078766565";
    tvs.travellers = [];
    let tv1 = new Traveller();
    tv1.firstName = "PGHOSH";
    fp.travellers = tvs;
    tvs.travellers.push(tv1);
    tvs.travellers.push(tv1);
    this.service.pushFlight(fp);
  }
}
