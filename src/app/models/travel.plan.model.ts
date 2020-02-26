import { FlightPlan } from "./flight.plan.model";
import { HotelPlan } from "./hotel.plan.model";
import { CarPlan } from "./car.plan.model";
import { Insurance } from "./insurane.model";

export class TravelPlan {
  flight: FlightPlan;
  hotel: HotelPlan;
  car: CarPlan;
  email: string;
  faceId: string;
  insurance: Insurance;
}
