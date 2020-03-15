import { FlightPlan } from "./flight.plan.model";
import { CarPlan } from "./car.plan.model";
import { InsurancePlan } from "./insurance.plan.model";
import { HotelPlan } from "./hotel.plan.model";

export class Booking {
  id: number;
  status: string;
  travelInfo: string;
  flight: FlightPlan;
  email: string;
  faceId: string;
  hotel: HotelPlan;
  car: CarPlan;
  insurance: InsurancePlan;
  bookings: { partner: string; amount: number }[] = [];
}
