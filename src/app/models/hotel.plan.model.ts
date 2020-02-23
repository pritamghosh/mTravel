import { Hotel } from "./hotel.model";
import { HotelRequet } from "./hotel.request.model";
import { Travellers } from "./travellers.model";

export class HotelPlan {
  hotel: Hotel;
  req: HotelRequet;
  travellers: Travellers;
}
