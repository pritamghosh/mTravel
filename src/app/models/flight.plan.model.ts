import { FlightItinerary } from "./flight.itinerary.model";
import { FlightRequest } from "./flight.request.model";
import { Travellers } from "./travellers.model";

export class FlightPlan {
  flight: FlightItinerary;
  req: FlightRequest;
  travellers: Travellers;
}
