import { FlightPlan } from "./flight.plan.model";
import { HotelPlan } from "./hotel.plan.model";
import { CarPlan } from "./car.plan.model";
import { Insurance } from "./insurane.model";
import { InsurancePlan } from "./insurance.plan.model";

export class TravelPlan {
  flight: FlightPlan;
  hotel: HotelPlan;
  car: CarPlan;
  insurance: InsurancePlan;
}
