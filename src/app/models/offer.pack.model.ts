import { FlightItinerary } from "./flight.itinerary.model";
import { Fare } from "./fare.model";

export class OfferPack {
  onwardFlightItinerary: FlightItinerary;
  returnFlightItinerary: FlightItinerary;
  fare: Fare;
  partner: string = "Air India";
}
