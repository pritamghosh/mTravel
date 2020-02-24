import { FlightItinerary } from "./flight.itinerary.model";
import { FlightRequest } from "./flight.request.model";
import { Travellers } from "./travellers.model";
import { OfferPack } from "./offer.pack.model";

export class FlightPlan {
  offerPack: OfferPack;
  req: FlightRequest;
  travellers: Travellers;
}
